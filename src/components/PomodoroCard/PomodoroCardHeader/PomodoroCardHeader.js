import React from 'react';
import styled from 'styled-components';

function PomodoroCardHeader({ children, className }) {

    return (
        <div className={className}>
            {children}
        </div>
    );
}

const StyledPomodoroCardHeader = styled(PomodoroCardHeader)`
    border-radius: 5px;
    height: 60px;
    display:flex;
    
    button{
        flex-grow: 1;
        cursor: pointer;
        border: none;
        font-size: 1.1rem;
        flex-basis: 33.3%;
        transition: all .6s;
    }

    button:nth-child(1){
        background-color: ${props => props.activeTimer === 'pomodoro' ? props.theme.color.red : props.theme.color.gray};
        color: ${props => props.activeTimer === 'pomodoro' ? props.theme.color.white : props.theme.color.black};
        &:hover{
            background-color: ${props => props.activeTimer === 'pomodoro' ? props.theme.color.lightRed : props.theme.color.lightGray};
        }
    }

    button:nth-child(2){
        background-color: ${props => props.activeTimer === 'short' ? props.theme.color.blue : props.theme.color.gray};
        color: ${props => props.activeTimer === 'short' ? props.theme.color.white : props.theme.color.black};
        border-left: 1px solid ${props => props.theme.color.white};

        &:hover{
            background-color: ${props => props.activeTimer === 'short' ? props.theme.color.lightBlue : props.theme.color.lightGray};
        }
    }

    button:nth-child(3){
        background-color: ${props => props.activeTimer === 'long' ? props.theme.color.green : props.theme.color.gray};
        color: ${props => props.activeTimer === 'long' ? props.theme.color.white : props.theme.color.black};
        border-left: 1px solid ${props => props.theme.color.white};

        &:hover{
            background-color: ${props => props.activeTimer === 'long' ? props.theme.color.lightGreen : props.theme.color.lightGray};
        }
    }
`

export default StyledPomodoroCardHeader;