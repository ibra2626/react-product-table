import React, { Component } from 'react';

class Productrow extends Component {

    render() {
        return (
            <tr style={this.props.product.stocked ? {color:"black"} : {color:"red"}}>
                <td >{this.props.product.name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        );
    }
}

export default Productrow;
