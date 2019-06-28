import React,{Component} from "react";
import "./resolve.css";
import {connect} from "react-redux";
import {fetchAllUser} from "../../actions/user.actions";
import {showComplaintList,fetchDepartment,updateComplaintStatus} from "../../actions/complaints.action";

class Resolve extends Component{
    constructor(props) {
        super(props);
        this.state={
        complaintID:''
    }
    }
    componentDidMount() {
        this.props.showComplaintList();
        this.props.fetchDepartment();
    }
    render() {
        const {complaintList,departmentList,allUser}=this.props;
        console.log("all users :",allUser);
        return(
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
                                    <option value="All" disabled selected >Department</option>
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
                                        <td >{complain.assignedTo.displayName}</td>
                                        <td>
                                            <select name="status" id={complain._id} onChange={this.props.updateComplaintStatus} className={complain.status}>
                                                <option value={complain.status} disabled selected >{complain.status}</option>
                                                <option value={"In-Progress"}>In-Progress</option>
                                                <option value={"Resolved"}>Resolved</option>
                                            </select>
                                        </td>
                                </tr>)
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
const mapStateToProps=state=>{
    return {
        user:state.userReducer.userData,
        allUser:state.userReducer.allUsers,
        complaintList:state.complaintReducer.complaintList,
        departmentList:state.departmentReducer.departmentList
    }
}
const mapDispatchToProps={
    showComplaintList,
    fetchDepartment,
    fetchAllUser,
    updateComplaintStatus
}
export default connect(mapStateToProps,mapDispatchToProps)(Resolve);