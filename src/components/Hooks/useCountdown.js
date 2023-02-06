import { useState, useEffect } from "react";
import { useCountdownStore } from "../state/countdownState";

export const useCountdown = () => {
    
    const { decreaseDays, decreaseHours, decreaseMinutes, decreaseSeconds, 
            resetHours, resetMinutes, resetSeconds} = useCountdownStore(
        state => ({
            decreaseDays: state.decreaseDays,
            decreaseHours: state.decreaseHours,
            decreaseMinutes: state.decreaseMinutes,
            decreaseSeconds: state.decreaseSeconds,
            resetHours: state.resetHours,
            resetMinutes: state.resetMinutes,
            resetSeconds: state.resetSeconds
        }));

        const { days, hours, minutes, seconds } = useCountdownStore(
            state => ({
                days: state.days, 
                hours: state.hours, 
                minutes: state.minutes, 
                seconds: state.seconds
            })
        );
        
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