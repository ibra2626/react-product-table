import React,{Component} from 'react';
class Searchbar extends Component {
    render() {
        return (
            <div>
                <div>
                    <input type="text" placeholder="Arama"/>
                </div>
                <input type="checkbox"/>
                <label>Sadece stoktaki ürünleri göster</label>
            </div>
        );
    }
}

export default Searchbar;
