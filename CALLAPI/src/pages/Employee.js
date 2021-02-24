import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from '../../actions/index';
import { connect } from 'react-redux';

class Employee extends Component {

    constructor(props) {
        super(props);
        this.state = {
         
        };
    }

    componentDidMount() {
       
    }

    componentWillReceiveProps(nextProps){
        
    }

    
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }
    onSave = (e) => {
        e.preventDefault();
        
    }

    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-12">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Employee_ID: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="txt1"
                            value={txt1}
                            onChange={this.onChange}
                        />
                    </div>
                   
                    <Link to="/product-list" className="btn btn-danger mr-10">
                        Trở Lại
                    </Link>
                    <button type="submit" className="btn btn-primary">Lưu Lại</button>
                </form>

            </div>
        );
    }

}

export default Employee;
