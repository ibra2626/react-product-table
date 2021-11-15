import React, { Component } from 'react';
import Categoryrow from './CategoryRow';
import Productrow from './ProductRow';

class Producttable extends Component {

    render() {
        const rows = [];
        let lastCategory = null;

        this.props.products.filter((product,index) => {
            if (product.category != lastCategory) {
                rows.push(<Categoryrow categoryName={product.category} key={product.categoryId}/>)
                lastCategory = product.category
            }
            rows.push(
                <Productrow product={product} key={index}/>
            )
        })
        return (
            <div style={{width:"100%"}}>
                <table border="1" style={{width:"100%"}}>
                    <thead>
                        <tr>
                            <th>İsim</th>
                            <th>Fiyat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Producttable;
