import { ClipLoader } from 'react-spinners';
import React, { Component } from 'react';

export default class Loader extends Component {
    render() {
        return (
            <div className='sweet-loading'>
                <ClipLoader
                    sizeUnit={"em"}
                    size={7}
                    color={'#123abc'}
                    loading={true}
                />
            </div>
        )
    }
}
