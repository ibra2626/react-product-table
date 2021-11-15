import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Searchbar from './SearchBar';
import Producttable from './ProductTable';
class Filterableproducttable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{border:"1px solid red",width:"250px",padding:"1rem"}}>
                <Searchbar/>
                <Producttable products={this.props.products}/>
            </div>
        );
    }
}

export default Filterableproducttable;
const PRODUCTS = [
    {category: 'Sporting Goods', categoryId : 12,price: '$49.99', stocked: true, name: 'Football',},
    {category: 'Sporting Goods', categoryId : 12, price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', categoryId : 12, price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', categoryId : 13,price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', categoryId : 13,price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', categoryId : 13,price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];

ReactDOM.render(
    <Filterableproducttable products={PRODUCTS}/>,
    document.getElementById('root')
)
