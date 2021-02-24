import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductListHR from './../../components/ProductList/ProductListHR';
import ProductItem from './../../components/ProductItem/ProductItem';
import ProductItemHR from './../../components/ProductItem/ProductItemHR';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchProductsRequest, actDeleteProductRequest } from './../../actions/index';

class ProductListPage extends Component {

    componentDidMount() {
        this.props.fetchAllProducts();
    }

    onDelete = (id) => {
        this.props.onDeleteProduct(id);
    }

    render() {
        var { products } = this.props;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product/addPR" className="btn btn-info mb-10">
                    Thêm EMPLOYEES
                </Link>
               
                <ProductList>
                    {this.showProductsPR(products)}
                </ProductList>
                
                <Link to="/product/addHR" className="btn btn-info mb-10">
                    Thêm PERSONNAL
                </Link>
                <ProductListHR>
                    {this.showProductsHR(products)}
                </ProductListHR>
            </div>
            
            
           
            
        );
        
    }
    

    showProductsPR(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                    />
                );
            });
        }
        return result;
    }
    showProductsHR(products) {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItemHR
                        key={index}
                        product={product}
                        index={index}
                        onDelete={this.onDelete}
                    />
                );
            });
        }
        return result;
    }

}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts : () => {
            dispatch(actFetchProductsRequest());
        },
        onDeleteProduct : (id) => {
            dispatch(actDeleteProductRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
