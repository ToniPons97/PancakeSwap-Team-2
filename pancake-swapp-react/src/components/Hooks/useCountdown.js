import { useState, useEffect } from "react";
import { useCountdownStore } from "../state/countdownState";

export const useCountdown = () => {
    
    const { days, hours, minutes, seconds } = useCountdownStore(state => state.countdown);
    
    const decreaseDays = useCountdownStore(state => state.decreaseDays);
    const decreaseHours = useCountdownStore(state => state.decreaseHours);
    const decreaseMinutes = useCountdownStore(state => state.decreaseMinutes);
    const decreaseSeconds = useCountdownStore(state => state.decreaseSeconds);

    const resetHours = useCountdownStore(state => state.resetHours);
    const resetMinutes = useCountdownStore(state => state.resetMinutes);
    const resetSeconds = useCountdownStore(state => state.resetSeconds);
            
    const handleCountdown = () => {        
        
        if (seconds > 0) {
            decreaseSeconds();
        } else {
            resetSeconds();
            
            if (minutes > 0) {
                decreaseMinutes();
                resetSeconds();
            } else {
                if (hours > 0) {
                    resetSeconds();
                    resetMinutes();
                    decreaseHours();
                } else {
                    if (days > 0)
                    resetHours();
                    resetMinutes();
                    resetSeconds();
                    decreaseDays();
                }
            }
        }
    }
        
    useEffect(() => {
        const intervalID = setInterval(() => {
            handleCountdown();
        }, 1000);

        return () => {
            clearInterval(intervalID);
        }
    }, [handleCountdown]);
}