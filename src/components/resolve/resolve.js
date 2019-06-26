import React,{Component} from "react";
import "./resolve.css";
import {connect} from "react-redux";
import {showComplaintList,fetchDepartment} from "../../actions/complaints.action";

class Resolve extends Component{
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.showComplaintList();
        this.props.fetchDepartment();
        console.log("show complaint function is fired...........");
    }
    render() {
        console.log('+++++++++++++++++++++++++++++++++++++++')
        const {complaintList,departmentList}=this.props;
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
    showComplaintList,
    fetchDepartment
}
export default connect(mapStateToProps,mapDispatchToProps)(Resolve);