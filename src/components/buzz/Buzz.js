import React,{Component} from "react";
import "./Buzz.css";
import 'typeface-roboto';
import {Button ,Box} from '@material-ui/core';
import {connect} from "react-redux";
import {saveBuzz} from '../../actions/actions';
import photo from '../dashboard/20745.jpg';
class Buzz extends Component{
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <div className={"buzzes container-fluids"}>
                    <div className="row buzz-creator clearfix col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <img src={photo} alt="" className={"col-two"}/>
                        <div className={"col-md-7 col-xs-7 col-lg-7 col-sm-7"}>
                            <label>Abhishek Yadav</label>
                            <p>2 days ago</p>
                        </div>
                        <div className="col-md-2" data-toggle="modal" data-target="#myModal">
                            <i className="fas fa-trash-alt"></i>
                        </div>
                    </div>

                    <div className={"buzz-text row"}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae arcu quis ex dapibus venenatis. Ut ullamcorper est dui, non auctor leo viverra ac. Donec eu lectus sapien. Vivamus ut justo et nisi congue condimentum. Sed pellentesque mattis augue, ut condimentum mi convallis laoreet. Proin ultricies commodo diam vel lacinia. Nulla suscipit sollicitudin eros non facilisis. Suspendisse vulputate neque quis ante sagittis dapibus. Suspendisse ut purus at lorem blandit porttitor. Etiam orci lorem, consequat vel commodo efficitur, tincidunt sit amet orci. Mauris dignissim non arcu aliquet consequat. Aliquam feugiat dapibus mi eget aliquam. Curabitur tempor leo eget venenatis ornare
                        </p>
                    </div>

                <div className={"reactions-comment"}>
                    <i className="far fa-thumbs-up" onClick={()=>alert("liked")}></i>
                    <i className="far fa-thumbs-down" onClick={()=>alert("disliked")}></i>
                    <i className="far fa-comment-dots" onClick={()=>alert("commented")}></i>
                </div>

                {/*Model*/}
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog modal-sm">
                        <div className={"modal-content"}>
                            <div className={"modal-header"}>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Confirmation</h4>
                            </div>
                            <div className="modal-body">
                                <p>Are you sure to delete .</p>
                                <button type="button" className="btn btn-danger">Delete</button>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
//
// const mapStateToProps=(state)=>{
//     return{
//         user:state.user
//     };
// }
// const mapDispatchToProps={
//     saveBuzz
// }

export default (Buzz);
