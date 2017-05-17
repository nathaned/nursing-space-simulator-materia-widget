import React from 'react';

export default class AssetButton extends React.Component {
    render () {
        return (
            <button 
                className="asset" 
                data-category={this.props.item.category}
                data-title={this.props.item.title}
                id={this.props.item.id}
                style={{background: 'url(' + this.props.item.buttonSource + ') no-repeat center center', backgroundSize: "100% 100%"}}/>
        )
    }
}