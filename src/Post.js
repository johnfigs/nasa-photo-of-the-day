import React from 'react';
import Info from './Info';
import Image from './Image';

const Post = props => {
    const {post} = props;

    return (
        <div className='post-border'>   
            <h1>{post.title}</h1>
            <div className='post-image'>
                {/* add image component here */}
                <Image image={post.url} />
            </div>
        </div>
    )

}

export default Post;