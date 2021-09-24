import styled from "styled-components";
import StyledPomodoroCardBody from "./PomodoroCardBody/PomodoroCardBody";
import StyledPomodoroCardHeader from "./PomodoroCardHeader";
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import theme from "../../themes/theme";
import PomodoroCardFooter from "./PomodoroCardFooter/PomodoroCardFooter";
import { useDispatch, useSelector } from "react-redux";
import { incrementStep, resetStep, setActiveTimer } from "../../redux/ducker/pomodoro";
import { useCallback, useEffect } from "react";
import { useRef } from "react";
import { setCountdownCircleTimer } from "../../utils/themeUtils";
import { device } from "../../device";
import toast from 'react-hot-toast';
import useSound from 'use-sound';
import alarm from '../../sounds/finish_task_alarm.mp3'


const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60)
    let seconds = remainingTime % 60
    if (seconds < 10)
        seconds = `0${seconds}`;

    return <div style={{ fontWeight: 'normal', fontSize: '45px' }}>{`${minutes}:${seconds}`}</div>

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
    const currentStep = useSelector(state => state.currentStep);

    let worker = new Worker("worker.js");


    useEffect(() => {
        if (!("Notification" in window)) {
            console.log('Esse browser não suporta notificações desktop');
        } else {
            console.log('Esse browser SUPORTA notificações desktop');
            if (Notification.permission !== 'denied') {
                // Pede ao usuário para utilizar a Notificação Desktop
                Notification.requestPermission();
            }
        }
        setTimeout(() => new Notification('Sessão terminada! Parabéns!'), 3000)

    }, [])


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

    const callWorker = () => {
        worker.postMessage(true);
        worker.onmessage = e => {
            console.debug('Audio chegando', e.data)
            let audio = new Audio(alarm);
            audio.play();
        }
    }

    countdownActiveTimerColor.current = setCountdownCircleTimer(activeTimer);
    console.log('initial duration:', initialDuration.current);

    const changeActiveTimer = (activeTimer, reset) => {
        if (isPlaying) {
            window.confirm("Tem certeza que deseja mudar o temporizador?")
        }
        dispatch(setActiveTimer(activeTimer, reset))
    }

    return (
        <div className={className}>
            <StyledPomodoroCardHeader activeTimer={activeTimer}>
                <button onClick={() => changeActiveTimer('pomodoro', !reset)}>Pomodoro</button>
                <button onClick={() => changeActiveTimer('short', !reset)}>Pausa Curta</button>
                <button onClick={() => changeActiveTimer('long', !reset)}>Pausa Longa</button>
            </StyledPomodoroCardHeader>
            <StyledPomodoroCardBody activeTimer={activeTimer}>
                <span style={{ position: 'absolute', top: '63px', fontSize: '20px' }}>
                    {currentStep}/4
                </span>

                <CountdownCircleTimer
                    key={reset}
                    isPlaying={isPlaying}
                    duration={initialDuration.current}
                    initialRemainingTime={initialDuration.current}
                    colors={countdownActiveTimerColor.current}
                    strokeWidth={10}
                    strokeLinecap="square"
                    ariaLabel="Pomodoro Timer"
                    trailColor={theme.color.gray}
                    onComplete={() => {
                        console.log('COMPLETED TIMER')
                        if (activeTimer === 'pomodoro') {
                            if (currentStep < 4) {
                                console.log("Worker", worker)
                                callWorker();
                                dispatch(setActiveTimer('short', !reset));
                                toast('Bom trabalho! Hora do descanso.', {
                                    icon: '👏',
                                });
                            }
                            else {
                                callWorker();
                                toast('Bom trabalho! Agora descanse mais a vontade!', {
                                    icon: '👏',
                                });
                                dispatch(setActiveTimer('long', !reset));

                            }
                        }
                        else if (activeTimer === 'short') {
                            toast('É hora de trabalhar! Let\'s go!', {
                                icon: '👋',
                            });
                            dispatch(setActiveTimer('pomodoro', !reset));
                            dispatch(incrementStep());
                        } else {
                            toast('É hora de voltar! Let\'s go!', {
                                icon: '👋',
                            });
                            dispatch(setActiveTimer('pomodoro', !reset));
                            dispatch(resetStep());
                        }
                    }}
                >
                    {children}
                </CountdownCircleTimer>
            </StyledPomodoroCardBody>
            <PomodoroCardFooter activeTimer={activeTimer} isPlaying={isPlaying} />
        </div >
    )
}

const StyledPomodoroCard = styled(PomodoroCard)`
    height: 300px;
    width: 100vw;
    max-width: 100%;
    background-color: ${props => props.theme.color.white};
    
    box-shadow: 0px 0px 1px ${props => props.activeTimer === 'pomodoro' ? props.theme.color.red : props.activeTimer === 'short' ? props.theme.color.blue : props.theme.color.green};
    display: flex;
    flex-direction: column;
    overflow: hidden;

    

    @media ${device.mobileL}{
        height: 320px;
        width: 400px;
        position: relative;
        border-radius: 10px;
    }
`;

export default StyledPomodoroCard;