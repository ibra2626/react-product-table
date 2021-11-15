import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Searchbar from './SearchBar';
import Producttable from './ProductTable';
class Filterableproducttable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products : this.props.products
        }
        this.handleClickStocked = this.handleClickStocked.bind(this)
        this.onChangeSearchInput = this.onChangeSearchInput.bind(this)
    }
    handleClickStocked(event){
        if(event.target.checked){
            let stockedProducts = PRODUCTS.filter((product) => {
                if(product.stocked){
                    return product
                }
            })
            this.setState({
                products : stockedProducts
            })
        }else{
            this.setState({
                products : this.props.products
            })
        }
    }
    onChangeSearchInput(event){
        if(event.target.value == ""){
            this.setState({
                products : this.props.products
            })
        }else{
            let resultProducts = this.state.products.filter((product) => {
                if(product.name.indexOf(event.target.value) != -1){
                    return product
                }
            })
            this.setState({
                products : resultProducts
            })
        }

    }
    render() {
        return (
            <div style={{border:"1px solid red",width:"250px",padding:"1rem"}}>
                <Searchbar handleClickStocked={this.handleClickStocked} onChangeSearchInput={this.onChangeSearchInput}/>
                <Producttable products={this.state.products}/>
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
