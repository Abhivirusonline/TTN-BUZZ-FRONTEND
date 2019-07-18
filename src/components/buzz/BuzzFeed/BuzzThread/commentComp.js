import React,{Component}from "react";
import {connect} from "react-redux";
import "./commentComp.css";
import {saveComment} from "../../../../actions/buzz.actions";

class CommentComp extends Component{
    constructor(props) {
        super(props);
    }

    handleComment=(e)=>{
        e.preventDefault();
        this.props.saveComment({"buzzId":this.props.buzzId, "commentText":e.target[0].value});
        e.target.reset();

    }
    render() {
        const {user}=this.props;
        return(
            <section className={"comment-comp"}>
                <form onSubmit={this.handleComment}  encType='multipart/form-data'>
                    <div className={"user-comment-photo"}>
                        <img src={user.photoURL} alt=""/>
                    </div>
                    <div className="form-group text-area">
                        <textarea className="form-control" name={"comment"} rows={"2"} id="comment" placeholder={"comment here..."}></textarea>
                    </div>
                    <div className={"form-group"}>
                        <button type={"submit"} className={"comment-btn"} title={"post comment"}>
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </form>
                <div className={"comment-feed"}>
                    {
                    this.props.comments.map(comment=>{
                    return(
                          <div>
                              {comment.commentText}
                          </div>
                    )
                    })
                    }
                </div>
            </section>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        user:state.userReducer.userData
    }
}
const mapDispatchToProps={
saveComment
}
export default connect(mapStateToProps,mapDispatchToProps)(CommentComp);