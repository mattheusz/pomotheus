import React from 'react';
import styled from 'styled-components';

function PomodoroCardBody({ children, className }) {
    return (
        <div className={className}>
            {children}
        </div>
    );
}

const StyledPomodoroCardBody = styled(PomodoroCardBody)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    flex-basis: 100%;
    flex-grow: 1;
    position: relative;
    svg {
        max-width: 100%;
        max-height: 100%;
    }
    div {
        font-size: 2rem;
        max-width: 100%;
        max-height: 100%;
    }
    span{
        color: ${props => props.activeTimer === 'pomodoro' ? props.theme.color.red : props.activeTimer === 'short' ? props.theme.color.blue : props.theme.color.green}
    }
`;

export default StyledPomodoroCardBody;