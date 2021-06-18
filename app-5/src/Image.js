import React from 'react';

class Image extends React.Component {
    constructor(){
        super()
    }

    render() {
       return(
           <img src={this.props.url}/>
       )
    }
}

export default Image;