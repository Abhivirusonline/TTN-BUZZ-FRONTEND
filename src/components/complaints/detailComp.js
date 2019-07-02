import React from 'react';
import "./detailComp.css";

const DetailComp=(props)=>{
    const {complaint}=props;
    return(<tr>
            <td>{complaint.department.deptName}</td>
            <td style={{color:"blue"}} data-toggle="modal" data-target={"#myModal"+complaint._id} className={"complaintId"}>{complaint._id}</td>
            <td>{complaint.RaisedBy.displayName}</td>
            <td>{complaint.assignedTo.displayName}
            </td>
            <td className={complaint.status}>{complaint.status}</td>

            <div className="modal fade" id={"myModal"+complaint._id} role="dialog">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Complaint Details</h4>
                        </div>
                        <div className="modal-body">
                            <div className={"row"}>
                                <div className={"col-lg-6"}>
                                    <label>Complaint ID :</label> {complaint._id}
                                </div>
                                <div className={"col-lg-6"}>
                                    <label>Issue Title :</label> {complaint.issueTitle}
                                </div>
                            </div>
                            <div className={"row"}>
                                <div className={"col-lg-6"}>
                                    <label>Department :</label> {complaint.department.deptName}
                                </div>
                                <div className={"col-lg-6"}>
                                    <label>Raised By :</label> {complaint.RaisedBy.displayName}
                                </div>
                            </div>
                            <div className={"row"}>
                                <div className={"col-lg-12"}>
                                    <label>Concern : </label>
                                    <span>
                                        {complaint.concern}
                                    </span>
                                </div>
                                <div className={"col-lg-12 complaint-attachment"}>
                                    {
                                        complaint.attachment === undefined ? null :
                                            <img src={complaint.attachment} alt=""/>
                                    }
                                </div>
                            </div>
                            <div className={"row"}>
                                <div className={"col-lg-6"}>
                                    <label>Assigned To :</label> {complaint.assignedTo.displayName}
                                </div>
                                <div className={"col-lg-6"}>
                                    <label>Status :</label> {complaint.status}
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </tr>

    );
}

export default DetailComp;