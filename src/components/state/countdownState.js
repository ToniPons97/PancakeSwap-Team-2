import { create } from 'zustand';

export const useCountdownStore = create(set => ({
    countdown: {days: 2, hours: 11, minutes: 17, seconds: 42},
    decreaseDays: () => set(state => ({countdown: {...state.countdown, days: state.countdown.days - 1}})),
    decreaseHours: () => set(state => ({countdown: {...state.countdown, hours: state.countdown.hours - 1}})),
    decreaseMinutes: () => set(state => ({countdown: {...state.countdown, minutes: state.countdown.minutes - 1}})),
    decreaseSeconds: () => set(state => ({countdown: {...state.countdown, seconds: state.countdown.seconds - 1}})),
    resetDays: () => set(state => ({countdown: {...state.countdown, days: 2}})),
    resetHours: () => set(state => ({countdown: {...state.countdown, hours: 23}})),
    resetMinutes: () => set(state => ({countdown: {...state.countdown, minutes: 59}})),
    resetSeconds: () => set(state => ({countdown: {...state.countdown, seconds: 59}}))
}));