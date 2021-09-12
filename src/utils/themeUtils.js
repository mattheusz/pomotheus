import theme from "../themes/theme";

export const setCountdownCircleTimer = (activeTimer) => {
    if (activeTimer === 'pomodoro') {
        return [
            [theme.color.red, 0.7],
            [theme.color.lightRed, 0.3]
        ]
    }
    else if (activeTimer === 'short') {
        return [
            [theme.color.blue, 0.7],
            [theme.color.lightBlue, 0.3]
        ];
    }
    else if (activeTimer === 'long') {
        return [
            [theme.color.green, 0.7],
            [theme.color.lightGreen, 0.3]
        ];
    }
}

