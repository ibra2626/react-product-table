import React,{Component} from 'react';
class Searchbar extends Component {
    render() {
        return (
            <div>
                <div>
                    <input type="text" placeholder="Arama" onChange={this.props.onChangeSearchInput}/>
                </div>
                <input type="checkbox" onClick={this.props.handleClickStocked}/>
                <label>Sadece stoktaki ürünleri göster</label>
            </div>
        );
    }
}

export default Searchbar;
