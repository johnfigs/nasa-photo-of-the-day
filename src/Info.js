import React from 'react';
import styled from 'styled-components';


const Info = (props) => {
    const {infoDate, infoExplanation, infoCopyright} = props;

    return (
        <div className='info-box'>
            <p>{infoDate}</p>
            <p>{infoExplanation}</p>
            <p>{infoCopyright}</p>
        </div>
    )

}

export default Info;