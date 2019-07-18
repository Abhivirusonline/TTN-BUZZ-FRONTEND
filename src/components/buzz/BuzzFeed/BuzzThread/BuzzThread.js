import React,{Component} from 'react';
import './BuzzThread.css'
import { connect } from 'react-redux';
import moment from 'moment';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {dislike, deleteBuzz, like} from "../../../../actions/buzz.actions";
import CommentComp from "./commentComp";
import ReadMoreReact from "read-more-react";

class BuzzThread extends Component {
    constructor(props) {
        super(props);
        this.state={
            showCommentBox:false,
        }
    }
    checkUserLike = (id, like) => {
        const liked = like.find((item) => (item.user == id));
        if (liked) {
            return 'liked'
        }
        else {
            return ''
        }
    };
    checkUserDislike = (id, dislike) => {
        const disliked = dislike.find((item) => (item.emailId == id));
        if (disliked) {
            return 'disliked'
        }
        else {
            return ''
        }
    };

    toggleCommentBox=()=>{
        this.setState({
            showCommentBox:!this.state.showCommentBox
        })
    }
    render() {
        const {user}=this.props;
        const {_id: buzzId, buzz,createdAt, attachment, category,like,dislike,comments,postedBy} = this.props.feed;
        const liked = this.checkUserLike(user, like);
        const disliked = this.checkUserDislike(user, dislike);

        return (
            <div className={"buzz-feed container"}>
                <div className={"buzz-header row"}>
                    <div className={"col-lg-2 col-xs-3 col-md-3 col-sm-3"} title={"User photo"}>
                        <img src={postedBy.photoURL} alt="" width={"100%"} height="100px"/>
                    </div>
                    <div className={"col-lg-8 col-xs-8 col-md-8 col-sm-8"}>
                        <div className={"col-lg-7 col-xs-8 col-sm-6 col-md-6"}>
                            {
                                <label style={{display:"block"}}>{postedBy.displayName}</label>
                            }
                            <span title={"time of buzz creation"}>
                                            {
                                                moment(createdAt).calendar()
                                            }
                                        </span>
                        </div>
                        <div className={"col-lg-4 col-lg-offset-1 col-md-3 col-md-offset-3 col-xs-4 col-sm-3 col-sm-offset-3 activity"}>
                            {category}
                        </div>

                    </div>
                    {
                        postedBy._id === user._id ?
                            <div id={buzzId} className={"col-lg-2 col-xs-1 col-sm-1 col-md-1 delete-btn"}
                                 onClick={this.props.deleteBuzz}>
                                <button id={buzzId} type="button" className="close" title={"Delete the buzz"}>&times;</button>
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
                         onClick={this.props.like} title={"Like"}>
                        <i className={"far fa-thumbs-up"+liked} id={buzzId}></i>
                        <span className="badge">{like.length}</span>
                    </div>
                    <div className={"col-lg-4 col-md-4 col-sm-4 col-xs-4"} id={buzzId}
                         onClick={this.props.dislike} title={"Dislike"}>
                        <i className={`far fa-thumbs-down ${disliked}`} id={buzzId}></i>
                        <span className="badge">{dislike.length}</span>
                    </div>
                    <div className={"col-lg-4 col-md-4 col-sm-4 col-xs-4"} id={buzzId}
                         onClick={this.toggleCommentBox} title={"Leave a comment"}>
                        <i className="far fa-comment-dots" id={buzzId}></i> <span className="badge" id={buzzId}>{comments.length}</span>
                    </div>
                </div>
                {!this.state.showCommentBox?null:
                    <CommentComp buzzId={buzzId} comments={comments}/>
                }
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        user:state.userReducer.userData
    }
}
const mapDispatchToProps = {
        like,
        dislike,
        deleteBuzz
    }

export default connect(mapStateToProps, mapDispatchToProps)(BuzzThread);
