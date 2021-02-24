import React, { Component } from 'react';
import axios from 'axios';
class ListEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listEmployee: []
        };
    }
    

    componentDidMount() {
        axios.get(`http://localhost:1998/payroll/employees`)
            .then(res => {
          this.setState({
              listEmployee : res.data.employees
          })
      })
    }

    onEdit(employee) {
        
    }


    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">PAYROll-EMPLOYEES</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
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
                                <th>Actions</th>                           
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.listEmployee.map((employee,index) => (
                                <tr key={employee.Employee_Number}>
                                    <th>{employee.Employee_Number}</th>
                                    <th>{employee.idEmployee}</th>
                                    <th>{employee.Last_Name}</th>
                                    <th>{employee.First_Name}</th>
                                    <th>{employee.SSN}</th>
                                    <th>{employee.Pay_Rate}</th>
                                    <th>{employee.PayRates_id}</th>
                                    <th>{employee.Vacation_Days}</th>
                                    <th>{employee.Vacation_Days}</th>
                                    <th>{employee.Paid_Last_Year}</th>
                                    <th>
                                        <button onClick={() => this.onEdit(employee)}>Sua</button>
                                        <button>Xoa</button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    
                </div>
            </div>
        )
    }

}

export default ListEmployee;
