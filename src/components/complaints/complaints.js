import React,{Component} from "react";
import "./complaints.css";
import {fetchUser} from "../../actions/user.actions";
import {fileComplaint,fetchDepartment,showComplaintList} from "../../actions/complaints.action";
import {connect} from "react-redux";
import DetailComp from "./detailComp";
class Complaints extends Component{
    componentDidMount() {
        this.props.fetchUser();
        this.props.showComplaintList();
        this.props.fetchDepartment();
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append('department',e.target[0].value);
        formData.append('issueTitle',e.target[1].value);
        formData.append('RaisedBy',e.target[2].value);
        formData.append('email',e.target[3].value);
        formData.append('concern',e.target[4].value);
        if(e.target[5].value)
            formData.append('attachment',e.target[5].files[0],'attachment');
        this.props.fileComplaint(formData);
        e.target.reset();
    }
    render() {
        let displayName=this.props.user.displayName;
        let email=this.props.user.email;
        const {departmentList,complaintList}=this.props;
        return(
            <React.Fragment>
                <form className={"complaints container-fluids clearfix"} onSubmit={this.handleSubmit} encType='multipart/form-data'>
                <div className={"complaints-box-label"}>
                     <label>Complaint Box</label>
                </div>
                <div className={"myrow"}>
                    <div className={"col-xs-12 col-sm-6 col-md-6 col-lg-6 form-group"}>
                        <label htmlFor="department">Select Department</label>
                        <select name="department" id="department" className={"form-control"}>
                            {
                                departmentList.map(department=>{
                                    return(<option value={department._id}>{department.deptName}</option>)
                                })
                            }
                        </select>
                    </div>
                    <div className={"col-xs-12 col-sm-6 col-md-6 col-lg-6 form-group"}>
                        <label htmlFor="issueTitle" className={"control-label"}>Issue Title</label>
                        <input type={"text"} name="issueTitle" id="issueTitle" className={"form-control"} required maxLength={50}/>
                    </div>
                </div>
                <div className={"myrow"}>
                    <div className={"col-xs-12 col-sm-6 col-md-6 col-lg-6 form-group"}>
                        <label htmlFor="your name">Your Name</label>
                        <input type={"text"} name="username" id="username" className={"form-control"} placeholder={"your name"} value={displayName}/>
                    </div>
                    <div className={"col-xs-12 col-sm-6 col-md-6 col-lg-6 form-group"}>
                        <label htmlFor="email" className={"control-label"}>Email Id</label>
                        <input type="email" name="email" id="email" className={"form-control"} placeholder={"your email id "} value={email}/>
                    </div>
                </div>
                <div className={"myrow"}>
                    <div className={"col-xs-12 col-sm-12 col-md-12 col-lg-12 form-group"}>
                        <label htmlFor="concern" className={"control-label"}>Your Concern</label>
                        <textarea name="concern" id="concern" className={"form-control"} required cols={"30"} rows={"8"}
                        placeholder={"write your concern to us."} maxLength={1000}
                        />
                    </div>
                </div>
                <div className={"myrow"}>
                    <div className={"col-xs-12 col-xs-offset-0 col-sm-3 col-sm-offset-9 col-lg-3 col-lg-offset-9 form-group file-upload"}>
                        <label htmlFor="file-upload">
                            <span>Attachment</span>
                            <i className="far fa-image"></i>
                        </label>
                        <input type={"file"} id={"file-upload"} name="attachment" className={"form-control "}/>
                    </div>
                    <div className={"col-xs-12 col-xs-offset-0 col-sm-3 col-sm-offset-9 col-lg-3 col-lg-offset-9 form-group"}>
                        <input type={"submit"} name="complaint-submit" id="complaint-submit" className={"form-control btn btn-primary"}/>
                    </div>
                </div>
            </form>
                <div className={"resolve container"}>
                    <div className={"resolve-label"}>
                        <label>My Complaints</label>
                    </div>
                    <div className={"table-responsive"}>
                        <table className={"table table-bordered"}>
                            <thead>
                            <tr key={"first-row"}>
                                <th>
                                   Department
                                </th>
                                <th>Issue id</th>   <th>Locked By</th> <th>Assigned To</th> <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                complaintList.map(complain=> {
                                    //checking that only user complaint displayed here
                                    if(complain.RaisedBy._id===this.props.user._id)
                                    {
                                       return <DetailComp complaint={complain}/>
                                    }
                                    //returning true for the sake of warning
                                    return true;
                                })
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps=state=>{
    return {
        user:state.userReducer.userData,
        complaintList:state.complaintReducer.complaintList,
        departmentList:state.departmentReducer.departmentList
    }
}
const mapDispatchToProps={
    fetchUser,
    fileComplaint,
    fetchDepartment,
    showComplaintList
}
export default connect(mapStateToProps,mapDispatchToProps)(Complaints);