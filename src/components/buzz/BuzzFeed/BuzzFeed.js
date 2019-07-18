import React,{Component} from "react";
import "./BuzzFeed.css";
import 'typeface-roboto';
import InfiniteScroll from 'react-infinite-scroller';
import {connect} from "react-redux";
import {fetchbuzz} from '../../../actions/buzz.actions';
import BuzzThread from "./BuzzThread/BuzzThread";
class BuzzFeed extends Component{
    constructor(props) {
        super(props);
        this.state = {
            skip: 0
        }
    }

    componentDidMount() {
        this.props.fetchbuzz(this.state.skip)
    }
    checkUserLike = (user, like) => {
        const liked = like.find((item) => {
            if(item.user === user) {
                console.log("-------------->",item.user);
                return true;
            }
            });

        if (liked) {
            return 'liked'
        }
        else {
            return ''
        }
    };
    checkUserDislike = (user, dislike) => {
        const disliked = dislike.find((item) => (item.user === user));
        if (disliked) {
            return 'disliked'
        }
        else {
            return ''
        }
    };

    setStateFunction = () => {
        const newState = { skip: this.state.skip + 5};
        return newState;
    }
    loadFunc = () => {
        this.setState(this.setStateFunction(), () => {
            this.props.fetchbuzz(this.state.skip)
        })
    }
    render() {
        let buzzes=this.props.buzzes;
        const {user}=this.props;
        return(<div className={"buzz-feed-container"}>
            <InfiniteScroll
                pageStart={0}
                loadMore={this.loadFunc}
                hasMore={this.state.skip < this.props.buzzes.length}
                loader={<div className="loader" key={0}>Loading ...</div>}
            >
             {buzzes.map((item,index) => {
                 const {like,dislike} =item
                 const liked = this.checkUserLike(user, like);
                 const disliked = this.checkUserDislike(user, dislike);
                return (
                   <BuzzThread feed={item}/>
                )
            })}
            </InfiniteScroll>
        </div>);
    }
}

const mapStateToProps=(state)=>{
    return{
        user:state.userReducer.userData,
        buzzes:state.buzzReducer.buzzList
    };

}
const mapDispatchToProps={
    fetchbuzz
}

export default connect(mapStateToProps,mapDispatchToProps)(BuzzFeed);
