import React,{Component} from "react";
import './postBuzz.css';
class PostBuzz extends Component{
    constructor(props) {
        super(props);

    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append('buzz',e.target[0].value);
        formData.append('category',e.target[1].value);
        formData.append('attachment',e.target[2].value);
        //this.props.addBuzz(formData);
        alert(e.target[0].value);
        e.target.reset();
    }
    render() {
        return(
            <div className={"buzz-create"}>
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <div className={"form-group"}>
                        <label htmlFor="Buzz create">CREATE BUZZ</label>
                        <textarea className={"form-control textarea"} name="buzz" id="buzz" cols={"10"} rows="5" placeholder={"Share your thoughts...."}></textarea>
                        <div className={"row col-md-12 post-control"}>
                            <select name="catergory" id="catergory" className={"form-control"}>
                                <option value="ACTIVITY">ACTIVITY</option>
                                <option value="LOST AND FOUND">LOST AND FOUND</option>
                            </select>
                            <input type="file" name={"attachment"} className={"attachment"}/>
                            <button type="submit" className="btn btn-success">
                                <i className="fas fa-paper-plane"></i> Post
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default PostBuzz;