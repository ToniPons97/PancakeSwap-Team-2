import { create } from 'zustand';

export const useCountdownStore = create((set) => ({
    days: 2,
    hours: 20,
    minutes: 13,
    seconds: 42,

    decreaseDays: () => set((state) => ({days: state.days - 1})),
    decreaseHours: () => set((state) => ({hours: state.hours - 1})),
    decreaseMinutes: () => set((state) => ({minutes: state.minutes - 1})),
    decreaseSeconds: () => set((state) => ({seconds: state.seconds - 1})),
    resetDays: () => set({days: 2}),
    resetHours: () => set({hours: 23}),
    resetMinutes: () => set({minutes: 59}),
    resetSeconds: () => set({seconds: 59})
}));