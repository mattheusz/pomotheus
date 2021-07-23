import React from 'react';
import styled from 'styled-components';
import StyledPomodoroCard from '../PomodoroCard';

function Main({ className }) {
    return (
        <main className={className}>
            <StyledPomodoroCard />
        </main>
    );
}

const StyledMain = styled(Main)`
    position: absolute;
    max-height: 100%;
    max-width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export default StyledMain;