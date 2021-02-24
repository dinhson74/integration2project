import React, { Component } from 'react';
import axios from 'axios';
class ListPersonal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listPersonal: []
        };
    }
    

    componentDidMount() {
        axios.get(`http://localhost:1998/hr/personals`)
            .then(res => {
          this.setState({
              listPersonal : res.data.personals
          })
      })
    }

    onEdit(employee) {
        
    }


    render() {
        return (
            
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">HR-Personal</h3>
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
                            {this.state.listPersonal.map((personal,index) => (
                                <tr key={personal.Employee_ID}>
                                    <th>{personal.Employee_ID}</th>
                                    <th>{personal.First_Name}</th>
                                    <th>{personal.Last_Name}</th>
                                    <th>{personal.Middle_Initial}</th>
                                    <th>{personal.Address1}</th>
                                    <th>{personal.Address2}</th>
                                    <th>{personal.City}</th>
                                    <th>{personal.State}</th>
                                    <th>{personal.Zip}</th>
                                    <th>{personal.Email}</th>
                                    <th>{personal.Phone_Number}</th>
                                    <th>{personal.Social_Security_Number}</th>
                                    <th>{personal.Drivers_License}</th> 
                                    <th>{personal.Marital_Status}</th> 
                                    <th>{personal.Gender}</th> 
                                    <th>{personal.Shareholder_Status}</th> 
                                    <th>{personal.Benefit_Plans}</th> 
                                    <th>{personal.Ethnicity}</th> 
                                           
                                    <th>
                                        <button onClick={() => this.onEdit(personal)}>Sua</button>
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

export default ListPersonal;
