import React, { Component } from 'react';

class ProductListHR extends Component {
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">HR-PERSOMAL</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>Employee_ID</th>
                                <th>First_Name</th>
                                <th>Last_Name</th>
                                <th>Middle_Initial</th>
                                <th>Address1</th>
                                <th>Address2</th>
                                <th>City</th>        
                                <th>State</th>
                                <th>Zip</th>
                                <th>Email</th>                           
                                <th>Phone_Number</th>
                                <th>Social_Security_Number</th>
                                <th>Drivers_License</th>        
                                <th>Marital_Status</th>
                                <th>Gender</th>
                                <th>Shareholder_Status</th>                           
                                <th>Benefit_Plans</th>
                                <th>Ethnicity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </table>
                    
                </div>
            </div>
            
        );
    }
}

export default ProductListHR;
