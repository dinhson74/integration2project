import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">PAYROll-EMPLOYEES</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        {/* <thead> */}
                            <tr>
                                <th>Employee_Number</th>
                                <th>idEmployee</th>
                                <th>Last_Name</th>
                                <th>First_Name</th>
                                <th>SSN</th>
                                <th>Pay_Rate</th>
                                <th>PayRates_id</th>        
                                <th>Vacation_Days</th>
                                <th>Paid_To_Date</th>
                                <th>Paid_Last_Year</th>                           
                                <th>Hành Động</th>
                            </tr>
                        {/* </thead> */}
                        <tbody>
                            {this.props.children}
                        </tbody>
                    </table>
                    
                </div>
            </div>
            
        );
    }
}

export default ProductList;
