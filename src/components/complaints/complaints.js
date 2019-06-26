import React,{Component} from "react";
import "./complaints.css";
import {fetchUser} from "../../actions/user.actions";
import {fileComplaint,fetchDepartment} from "../../actions/complaints.action";
import {connect} from "react-redux";
class Complaints extends Component{
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchUser();
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
        formData.append('attachment',e.target[5].value);
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
                        <select name="issueTitle" id="issueTitle" className={"form-control"}>
                               <option value="Hardware">Hardware</option>
                               <option value="Infra">Infra</option>
                               <option value="Others">Others</option>
                        </select>
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
                        placeholder={"write your concern to us."}
                        />
                    </div>
                </div>
                <div className={"myrow"}>
                    <div className={"col-xs-12 col-xs-offset-0 col-sm-3 col-sm-offset-9 col-lg-3 col-lg-offset-9 form-group file-upload"}>
                        <label htmlFor="file-upload">
                            <span>Attachment</span>
                            <i className="far fa-image"></i>
                        </label>
                        <input type={"file"} id={"file-upload"} name="complaint_attachment" className={"form-control "}/>
                    </div>
                    <div className={"col-xs-12 col-xs-offset-0 col-sm-3 col-sm-offset-9 col-lg-3 col-lg-offset-9 form-group"}>
                        <input type={"submit"} name="complaint-submit" id="complaint-submit" className={"form-control btn btn-primary"}/>
                    </div>
                </div>
            </form>
                <div className={"resolve container"}>
                    <div className={"resolve-label"}>
                        <label>All Complaints</label>
                    </div>
                    <div className={"table-responsive"}>
                        <table className={"table table-bordered"}>
                            <thead>
                            <tr key={"first-row"}>
                                <th>
                                    <select name="department" id="department" className={"form-control"}>
                                        {
                                            departmentList.map(department=>{
                                                return(<option value={department._id}>{department.deptName}</option>)
                                            })
                                        }
                                    </select>
                                </th>
                                <th>Issue id</th>   <th>Locked By</th> <th>Assigned To</th> <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                complaintList.map(complain=> {
                                    return (<tr>
                                        <td>{complain.department.deptName}</td>
                                        <td style={{color:"blue"}}>{complain._id}</td>
                                        <td>{complain.RaisedBy.displayName}</td>
                                        <td>{complain.assignedTo}A</td>
                                        <td>{complain.status}</td>
                                    </tr>)
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
}
export default connect(mapStateToProps,mapDispatchToProps)(Complaints);