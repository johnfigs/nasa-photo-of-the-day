import React from 'react';

const Image = props => {
    const {image} = props;
    return (
        <div className='img-container'>
            <img
                alt='alt description here'
                className='post-image'
                src={image}
            />
        </div>
    )
}

export default Image;
