import React,{Component} from "react";
import "./BuzzFeed.css";
import 'typeface-roboto';
import ReadMoreReact from 'read-more-react';
import moment from "moment";
import InfiniteScroll from 'react-infinite-scroller';
import {connect} from "react-redux";
import {fetchbuzz,deleteBuzz,like,dislike} from '../../../actions/buzz.actions';

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
    handleComment=(e)=>{
        alert("COMMENT : "+e.target.id);
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
                 const {_id: buzzId, buzz,createdAt, attachment, category,like,dislike,comments,postedBy} = item;
                 const liked = this.checkUserLike(user, like);
                 const disliked = this.checkUserDislike(user, dislike);
                 {console.log("===========",liked,disliked)}
                return (
                    <div className={"buzz-feed container"}>
                        <div className={"buzz-header row"}>
                            <div className={"col-lg-2 col-xs-2 col-md-2 col-sm-2"}>
                                <img src={postedBy.photoURL} alt="" width={"100%"} height="100px"/>
                            </div>
                            <div className={"col-lg-8 col-xs-8 col-md-8 col-sm-8"}>
                                    <div className={"col-lg-7 col-xs-7 col-sm-6 col-md-6"}>
                                        {
                                            <label style={{display:"block"}}>{postedBy.displayName}</label>
                                        }
                                        <span>
                                            {
                                                moment(createdAt).calendar()
                                            }
                                        </span>
                                    </div>
                                    <div className={"col-lg-2 col-lg-offset-3 col-md-2 col-md-offset-4 col-xs-3 col-xs-offset-2 col-sm-2 col-sm-offset-4 activity"}>
                                        {category}
                                    </div>

                            </div>
                            {
                                postedBy._id === user._id ?
                                    <div id={buzzId} className={"col-lg-2 col-xs-2 col-sm-2 col-md-2 delete-btn"}
                                         onClick={this.props.deleteBuzz}>
                                        <button id={buzzId} type="button" className="close">&times;</button>
                                    </div>
                                    : null
                            }
                        </div>
                        <section className={"row buzz-content"}>
                            <article>
                                <ReadMoreReact text={buzz}
                                                   min={100}
                                                   ideal={150}
                                                   max={200}
                                                   readMoreText={<div className={"read-more"}>Read More...</div>}/>
                            </article>
                            {

                                attachment === "" ? null :
                                    <div className={"buzz-attachment"} style={Object.assign({background:`url("${attachment}") center no-repeat`},{backgroundSize:'contain'})}>
                                    </div>
                            }
                        </section>
                        <div className={"buzz-footer row"}>
                            <div className={"col-lg-4 col-md-4 col-sm-4 col-xs-4"} id={buzzId}
                                 onClick={this.props.like}>
                                <i className={"far fa-thumbs-up"+liked} id={buzzId}></i>
                                <span className="badge">{like.length}</span>
                            </div>
                            <div className={"col-lg-4 col-md-4 col-sm-4 col-xs-4"} id={buzzId}
                                 onClick={this.props.dislike}>
                                <i className={`far fa-thumbs-down ${disliked}`} id={buzzId}></i>
                                <span className="badge">{dislike.length}</span>
                            </div>
                            <div className={"col-lg-4 col-md-4 col-sm-4 col-xs-4"} id={buzzId}
                                 onClick={this.handleComment}>
                                <i className="far fa-comment-dots" id={buzzId}></i> <span className="badge" id={buzzId}>{comments.length}</span>
                            </div>
                        </div>
                    </div>
                )
            })}
            </InfiniteScroll> </div>);
    }
}

const mapStateToProps=(state)=>{
    return{
        user:state.userReducer.userData,
        buzzes:state.buzzReducer.buzzList
    };

}
const mapDispatchToProps={
    fetchbuzz,
    like,
    dislike,
    deleteBuzz
}

export default connect(mapStateToProps,mapDispatchToProps)(BuzzFeed);
