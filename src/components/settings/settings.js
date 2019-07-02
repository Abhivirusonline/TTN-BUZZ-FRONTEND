import React,{Component} from "react";
import "./settings.css";
import {connect} from "react-redux";
import {updatePhoto} from "../../actions/user.actions";

class Settings extends Component{
    handleSubmit=(e)=>{
        e.preventDefault();
        const formData=new FormData();
        if(e.target.attachment.value) {
            formData.append('attachment', e.target.attachment.files[0], 'attachment');
        }
        this.props.updatePhoto(formData);
        e.target.reset();
    }
render() {
        const {displayName,photoURL,department}=this.props.user;
        return(
            <div className={"settings container"}>
                <img src={photoURL} alt={""}/>
                <span className={"image-upload"}>
                    <form onSubmit={this.handleSubmit} >
                        <label htmlFor="file-upload">
                        <i className="far fa-image"></i>
                    </label>
                    <input type="file" name={"attachment"} id="file-upload" className={"attachment"} style={{display:"none"}}/>
                        <button type="submit" className="btn btn-success" style={{width:"100px"}}>
                                <i className="fas fa-paper-plane"></i> Update
                        </button>
                    </form>
                </span>
                <h3>{displayName}</h3>
                <h4>{department.deptName}</h4>
            </div>
        );
    }

}
const mapStateToProps=state=>{
    return {user:state.userReducer.userData}
}
const mapDispatchToProps={
    updatePhoto
}
export default connect(mapStateToProps,mapDispatchToProps)(Settings);