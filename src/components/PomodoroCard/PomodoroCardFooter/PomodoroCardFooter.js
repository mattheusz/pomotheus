import React from 'react';
import styled from 'styled-components';

function PomodoroCardFooter(props) {
    return (
        <div>
            <ButtonFooter>Começar</ButtonFooter>
        </div>
    );
}

export default PomodoroCardFooter;

const ButtonFooter = styled.button`
    background-color: ${props => props.theme.color.red};
    color: ${props => props.theme.color.white};
    border: none;
    padding: .5rem;
    font-size: 1.4rem;
    border-radius: 0 0 5px 5px;
    width: 100%;
`;