import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from '../../actions/index';
import { connect } from 'react-redux';

class ProductActionPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txt1: '',
            txt2: '',
            txt3: '',
            txt4: '',
            txt5: '',
            txt6: '',
            txt7: '',
            txt8: '',
            txt9: '',
            txt10: '',
            txt11: ''
            
        };
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditProduct(id);
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.itemEditing){
            var {itemEditing} = nextProps;
            this.setState({
                id : itemEditing.id,
                txt1:  itemEditing.txt1,
                txt2:  itemEditing.txt2,
                txt3:  itemEditing.txt3,
                txt4:  itemEditing.txt4,
                txt5:  itemEditing.txt5,
                txt6:  itemEditing.txt6,
                txt7:  itemEditing.txt7,
                txt8:  itemEditing.txt8,
                txt9:  itemEditing.txt9,
                txt10: itemEditing.txt10,
                txt11:  itemEditing.txt11


            });
        }
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
        var { id, txt1, txt2, txt3 , txt4, txt5, txt6, txt7, txt8, txt9, txt10, txt11} = this.state;
        var { history } = this.props;
        var product = {
            id : id,
            tx1:  txt1,
            txt2:  txt2,
            txt3:  txt3,
            txt4: txt4,
            txt5:  txt5,
            txt6:  txt6,
            txt7:  txt7,
            txt8: txt8,
            txt9:  txt9,
            txt10:  txt10,
            txt11:  txt11
        };
        if (id) {
            this.props.onUpdateProduct(product);
        } else {
            this.props.onAddProduct(product);
        }
        history.goBack();
    }

    render() {
        var {  txt1, txt2, txt3 , txt4, txt5, txt6, txt7, txt8, txt9, txt10, txt11 } = this.state;
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
                    <div className="form-group">
                        <label>First_Name: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="txt2"
                            value={txt2}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last_Name: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="txt3"
                            value={txt3}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Middle_Initial: </label>
                        <input
                            type="text"
                            className="form-control"
                            name="txt4"
                            value={txt4}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Address1: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="txt5"
                            value={txt5}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Address2: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="txt6"
                            value={txt6}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>City: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="txt7"
                            value={txt7}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>State: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="txt8"
                            value={txt8}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Zip: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="txt9"
                            value={txt9}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="txt10"
                            value={txt10}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Phone_Number: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="txt11"
                            value={txt11}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Social_Security_Number: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="txt12"
                            value={txt11}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Drivers_License: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="txt13"
                            value={txt11}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Marital_Status: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="txt14"
                            value={txt9}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Gender: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="txt15"
                            value={txt10}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Benefit_Plans: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="txt16"
                            value={txt11}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Benefit_Plans: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="txt17"
                            value={txt11}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Ethnicity: </label>
                        <input
                            type="number"
                            className="form-control"
                            name="txt18"
                            value={txt11}
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

const mapStateToProps = state => {
    return {
        itemEditing : state.itemEditing
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct : (product) => {
            dispatch(actAddProductRequest(product));
        },
        onEditProduct : (id) => {
            dispatch(actGetProductRequest(id));
        },
        onUpdateProduct : (product) => {
            dispatch(actUpdateProductRequest(product));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
