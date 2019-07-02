import React,{Component} from "react";
import './BuzzForm.css';
import {saveBuzz} from '../../../actions/buzz.actions';
import { connect } from 'react-redux';

class BuzzForm extends Component{
    handleSubmit=(e)=>{
        e.preventDefault();
        const formData=new FormData();
        let buzz=e.target[0].value.trim();
        let category=e.target[1].value;
        if(buzz && category) {
            formData.append('buzz', buzz);
            formData.append('category', category);
            if (e.target[2].value)
                formData.append('attachment', e.target[2].files[0], 'attachment');
            this.props.saveBuzz(formData);
        }
        e.target.reset();
    }
    render() {
        console.log("props in this post buzz page :"+this.props);
        return(
            <div className={"buzz-create"}>
                <form onSubmit={this.handleSubmit} encType='multipart/form-data'>
                    <div className={"form-group"}>
                        <label htmlFor="Buzz create">CREATE BUZZ</label>
                        <textarea className={"form-control textarea"} name="buzz" id="buzz" required cols={"10"} rows="5" placeholder={"Share your thoughts...."}></textarea>
                        <div className={"row col-sm-12 post-control"}>
                            <select name="category" id="category" className={"form-control col-xs-12"}>
                                <option value="Activity">ACTIVITY</option>
                                <option value="Lost and Found">LOST AND FOUND</option>
                            </select>
                            <div className={'file-upload col-xs-12'}>
                                <label htmlFor="file-upload">
                                    <i className="far fa-image"></i>
                                </label>
                                <input type="file" name={"attachment"} id="file-upload" className={"attachment"}/>
                            </div>
                            <button type="submit" className="btn btn-success col-xs-6">
                                <i className="fas fa-paper-plane"></i> Post
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
const mapStateToProps=state=>{
    return state;
}
const mapDispatchToProps={
    saveBuzz
}
export default connect(mapStateToProps, mapDispatchToProps)(BuzzForm);