import React from 'react';
import styled from '@emotion/styled';

const Icon = (props) => {

    const Container = styled.img`
        width: 30%;
    `

    return ( 
        <Container className="icon" src="./images/mostly cloudy.webp" alt="Weather Icon"/>
     );
}
 
export default Icon;