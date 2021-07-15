import React from 'react';
import Info from './Info';
import Image from './Image';

const Post = props => {
    const {post} = props;

    return (
        <div className='post-border'>   
            <h1>{post.title}</h1>
        </div>
    )

}

export default Post;