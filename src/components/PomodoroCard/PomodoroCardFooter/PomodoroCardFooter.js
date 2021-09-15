import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { FaRegPlayCircle } from "react-icons/fa";
import { BsPause } from 'react-icons/bs'
import { CgUndo } from "react-icons/cg";
import { resetTimer, setPlaying } from '../../../redux/ducker/pomodoro';
import { device } from '../../../device';
import useSound from 'use-sound';
import tickSound from '../../../sounds/tick.mp3';

function PomodoroCardFooter({ activeTimer, isPlaying }) {

    const [play] = useSound(tickSound);


    const resetState = useSelector(state => state.reset)
    const dispatch = useDispatch();

    return (
        <div>
            {isPlaying ?
                <DualButtonContainerFooter>
                    <DualButtonFooter
                        activeTimer={activeTimer}
                        onClick={() => {
                            dispatch(setPlaying(false));
                            play();
                        }}
                    >
                        <PauseIcon />
                    </DualButtonFooter>
                    <DualButtonFooter
                        activeTimer={activeTimer}
                        onClick={() => {
                            dispatch(resetTimer(!resetState))
                            play();
                        }}
                    >
                        <ResetIcon />
                    </DualButtonFooter>

                </DualButtonContainerFooter> :
                <SingleButtonFooter
                    activeTimer={activeTimer}
                    onClick={() => {
                        dispatch(setPlaying(true));
                        play();
                    }}
                >
                    <PlayIcon />
                </SingleButtonFooter>
            }
        </div>
    );
}

export default React.memo(PomodoroCardFooter);

const SingleButtonFooter = styled.button`
    background-color: ${props => props.activeTimer === 'pomodoro' ? props.theme.color.red : props.activeTimer === 'short' ? props.theme.color.blue : props.theme.color.green};
    color: ${props => props.theme.color.white};
    cursor: pointer;
    border: none;
    padding: .5rem;
    font-size: 1.4rem;
    width: 100%;
    transition: all .6s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: ${props => props.activeTimer === 'pomodoro' ? props.theme.color.lightRed : props.activeTimer === 'short' ? props.theme.color.lightBlue : props.theme.color.lightGreen};
    }

    @media ${device.mobileL}{
        border-radius: 0 0 5px 5px;
    }
`;

const DualButtonContainerFooter = styled.div`
    display:flex;

`;

const DualButtonFooter = styled.button`
    background-color: ${props => props.activeTimer === 'pomodoro' ? props.theme.color.red : props.activeTimer === 'short' ? props.theme.color.blue : props.theme.color.green};
    color: ${props => props.theme.color.white};
    cursor: pointer;
    border: none;
    padding: .5rem;
    font-size: 1.4rem;
    flex-basis: 50%;
    transition: all .6s;
    display: flex;
    align-items: center;
    justify-content: center;
    

    &:nth-child(1){
        border-radius: 0 0 0 5px;
        
    }

    &:nth-child(2){
        border-radius: 0 0 5px 0;
        border-left: 1px solid white;
    }
`;

const PlayIcon = styled(FaRegPlayCircle)`
    font-size: 30px;
`;

const PauseIcon = styled(BsPause)`
    font-size: 30px;
    
`;

const ResetIcon = styled(CgUndo)`
    font-size: 30px;
`