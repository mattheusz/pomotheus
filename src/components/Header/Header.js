import styled from "styled-components";

import React from 'react';

function Header({ className }) {
    return (
        <header className={className}>
            Pomotheus
        </header>
    );
}


const StyledHeader = styled(Header)`
    height: 60px;
    background-color: ${props => props.activeTimer === 'pomodoro' ? props.theme.color.red : props.activeTimer === 'short' ? props.theme.color.blue : props.theme.color.green};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    color: ${props => props.theme.color.white};
    position: fixed;
    width: 100%
`;

export default StyledHeader;