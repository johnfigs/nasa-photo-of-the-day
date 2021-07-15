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
                {/* Add Info component here */}
                <Info infoDate={post.date} infoExplanation={post.explanation} infoCopyright={post.copyright} />
            </div>
        </div>
    )

}

export default Post;