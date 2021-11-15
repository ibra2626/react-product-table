import React, { Component } from 'react';

class Categoryrow extends Component {
    render() {
        return (
            <tr>
                <th colSpan="2" style={{textAlign:"center",color:"blue"}}>
                    {this.props.categoryName}
                </th>
            </tr>
        );
    }
}

export default Categoryrow;
