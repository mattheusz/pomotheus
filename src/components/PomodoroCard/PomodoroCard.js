import styled from "styled-components";
import StyledPomodoroCardBody from "./PomodoroCardBody/PomodoroCardBody";
import StyledPomodoroCardHeader from "./PomodoroCardHeader";
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import theme from "../../themes/theme";
import PomodoroCardFooter from "./PomodoroCardFooter/PomodoroCardFooter";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTimer } from "../../redux/ducker/pomodoro";
import { useCallback } from "react";
import { useRef } from "react";
import { setCountdownCircleTimer } from "../../utils/themeUtils";

const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60)
    let seconds = remainingTime % 60
    if (seconds < 10)
        seconds = `0${seconds}`;

    return <span style={{ fontWeight: 'bold' }}>{`${minutes}:${seconds}`}</span>
}

const PomodoroCard = ({ className }) => {
    const countdownActiveTimerColor = useRef([]);
    const initialDuration = useRef(0);

    const activeTimer = useSelector(state => state.activeTimer);
    const pomodoroDuration = useSelector(state => state.pomodoroDuration);
    const shortDuration = useSelector(state => state.shortDuration);
    const longDuration = useSelector(state => state.longDuration);
    const isPlaying = useSelector(state => state.isPlaying)
    const reset = useSelector(state => state.reset);

    const dispatch = useDispatch();

    const setInitialDuration = () => {
        if (activeTimer === 'pomodoro')
            initialDuration.current = pomodoroDuration * 60;
        else if (activeTimer === 'short')
            initialDuration.current = shortDuration * 60;
        else if (activeTimer === 'long')
            initialDuration.current = longDuration * 60;
        else
            initialDuration.current = pomodoroDuration;

    }
    setInitialDuration();

    countdownActiveTimerColor.current = setCountdownCircleTimer(activeTimer);
    console.log('initial duration:', initialDuration.current);

    return (
        <div className={className}>
            <StyledPomodoroCardHeader activeTimer={activeTimer}>
                <button onClick={() => dispatch(setActiveTimer('pomodoro', !reset))}>Pomodoro</button>
                <button onClick={() => dispatch(setActiveTimer('short', !reset))}>Pausa Curta</button>
                <button onClick={() => dispatch(setActiveTimer('long', !reset))}>Pausa Longa</button>
            </StyledPomodoroCardHeader>
            <StyledPomodoroCardBody >
                <CountdownCircleTimer
                    key={reset}
                    isPlaying={isPlaying}
                    duration={initialDuration.current}
                    initialRemainingTime={initialDuration.current}
                    colors={countdownActiveTimerColor.current}
                    strokeWidth={15}
                    strokeLinecap="square"
                    ariaLabel="Pomodoro Timer"
                    trailColor={theme.color.gray}

                >
                    {children}
                </CountdownCircleTimer>
            </StyledPomodoroCardBody>
            <PomodoroCardFooter activeTimer={activeTimer} isPlaying={isPlaying} />
        </div>
    )
}

const StyledPomodoroCard = styled(PomodoroCard)`
            height: 300px;
            width: 400px;
            max-width: 100%;
            background-color: ${props => props.theme.color.white};
            border-radius: 10px;
            box-shadow: 0px 0px 1px ${props => props.theme.color.red};
            display: flex;
            flex-direction: column;
            position: relative;
            overflow: hidden;
            `;

export default StyledPomodoroCard;