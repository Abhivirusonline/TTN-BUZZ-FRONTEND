import React,{Component} from "react";
import "./BuzzFeed.css";
import 'typeface-roboto';
import {getTimeDifference} from "../../utilities/buzzTiming";
import {connect} from "react-redux";
import {fetchUser} from "../../../actions/user.actions";
import {fetchbuzz,deleteBuzz,like,dislike} from '../../../actions/buzz.actions';

class BuzzFeed extends Component{
    componentDidMount() {
        this.props.fetchUser();
        this.props.fetchbuzz();
    }
    handleComment=(e)=>{
        alert("COMMENT : "+e.target.id);
    }
    render() {
        let buzzes=this.props.buzzes;
        const {user}=this.props;
        return(
            buzzes.map(item => {
                const {_id: buzzId, buzz,createdAt, attachment, category,like,dislike,comments,postedBy} = item;
                return (
                    <div className={"buzz-feed container"}>
                        <div className={"buzz-header row"}>
                            <div className={"col-lg-3 col-xs-2 col-md-3 col-sm-3"}>
                                <img src={postedBy.photoURL} alt="" width={"100%"}/>
                            </div>
                            <div className={"col-lg-7 col-xs-8 col-md-7 col-sm-7"}>
                            <span style={{display: "block"}}>
                                {postedBy.displayName
                                }
                                {
                                    category
                                }
                            </span>
                                <span>
                                {
                                    //parseInt((Date.now() - new Date(createdAt))/(1000*60))
                                    getTimeDifference(createdAt)
                                }
                            </span>
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
                            <div>
                                <p>
                                    {buzz}
                                </p>
                            </div>
                            {
                                attachment === undefined ? null :
                                    <div className={"buzz-attachment"}>
                                        <img src={attachment} alt=""/>
                                    </div>
                            }
                        </section>
                        <div className={"buzz-footer row"}>
                            <div className={"col-lg-4 col-md-4 col-sm-4 col-xs-4"} id={buzzId}
                                 onClick={this.props.like}>
                                <i className="far fa-thumbs-up" id={buzzId}>{like.length}</i>
                            </div>
                            <div className={"col-lg-4 col-md-4 col-sm-4 col-xs-4"} id={buzzId}
                                 onClick={this.props.dislike}>
                                <i className="far fa-thumbs-down" id={buzzId}>{dislike.length}</i>
                            </div>
                            <div className={"col-lg-4 col-md-4 col-sm-4 col-xs-4"} id={buzzId}
                                 onClick={this.handleComment}>
                                <i className="far fa-comment-dots" id={buzzId}>{comments.length}</i>
                            </div>
                        </div>
                    </div>

                );
            })
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        user:state.userReducer.userData,
        buzzes:state.buzzReducer.buzzList
    };

}
const mapDispatchToProps={
    fetchUser,
    fetchbuzz,
    like,
    dislike,
    deleteBuzz
}

export default connect(mapStateToProps,mapDispatchToProps)(BuzzFeed);
