import React from 'react';
import Info from './Info';
import Image from './Image';
import styled from 'styled-components';


const StyledPost = styled.div`
    border: 1px solid #d2d2d2;
    box-shadow: 0px 1px 6px -2px #807f7f;
    border-radius: 8px;
    margin: 16px;
    padding: 16px;
    background-color: lightgrey;
`
const StyledH1 = styled.h1`
    color: #FF00FF;
    font-family: 'Roboto', sans-serif;
`

const Post = props => {
    const {post} = props;

    return (
        <StyledPost>   
            <StyledH1>{post.title}</StyledH1>
            <div className='post-image'>
                {/* add image component here */}
                <Image image={post.url} />
                {/* Add Info component here */}
                <Info infoDate={post.date} infoExplanation={post.explanation} infoCopyright={post.copyright} />
            </div>
        </StyledPost>
    )

}

export default Post;