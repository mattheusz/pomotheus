import styled from "styled-components";
import StyledPomodoroCardBody from "./PomodoroCardBody/PomodoroCardBody";
import StyledPomodoroCardHeader from "./PomodoroCardHeader";
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import theme from "../../themes/theme";
import PomodoroCardFooter from "./PomodoroCardFooter/PomodoroCardFooter";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTimer } from "../../redux/ducker/pomodoro";

const PomodoroCard = ({ className }) => {

    const activeTimer = useSelector(state => state.activeTimer);
    const dispatch = useDispatch();

    return (
        <div className={className}>
            <StyledPomodoroCardHeader activeTimer={activeTimer}>
                <button>Pomodoro</button>
                <button onClick={() => dispatch(setActiveTimer('short'))}>Pausa Curta</button>
                <button>Pausa Longa</button>
            </StyledPomodoroCardHeader>
            <StyledPomodoroCardBody >
                <CountdownCircleTimer
                    isPlaying
                    duration={10}
                    colors={[
                        [theme.color.red, 0.5],
                        [theme.color.darkRed, 0.4],
                        [theme.color.red, 0.1]

                    ]}
                    strokeWidth={20}
                    strokeLinecap="square"
                    ariaLabel="Pomodoro Timer"
                    trailColor={theme.color.gray}
                >
                    {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
            </StyledPomodoroCardBody>
            <PomodoroCardFooter></PomodoroCardFooter>
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