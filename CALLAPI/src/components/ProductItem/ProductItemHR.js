import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItemHR extends Component {

    onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }

    render() {
        var { product, index } = this.props;
        var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
        var statusClass = product.status ? 'warning' : 'default';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.txt1}</td>
                <td>{product.txt2}</td>
                <td>{product.txt3}</td>
                <td>{product.txt4}</td>
                <td>{product.txt5}</td>
                <td>{product.txt6}</td>
                <td>{product.txt7}</td>
                <td>{product.txt8}</td>
                <td>{product.txt9}</td>
                <td>{product.txt10}</td>
                <td>{product.txt11}</td>
                <td>{product.txt12}</td>
                <td>{product.txt13}</td>
                <td>{product.txt14}</td>
                <td>{product.txt15}</td>
                <td>{product.txt16}</td>
                <td>{product.txt17}</td>
                <td>{product.txt10}</td>
                <td>{product.txt18}</td>
                
                <td>
                    <span className={`label label-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                    <Link
                        to={`/product/${product.id}/edit`}
                        className="btn btn-success mr-10"
                    >
                        Sửa
                    </Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => this.onDelete(product.id)}
                    >
                        Xóa
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductItemHR;
