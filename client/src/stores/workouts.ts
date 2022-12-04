import {api} from './session';

export function addWorkout(user : string | undefined, newWorkout : Workout) {
    if (user != null) {
        api(`workouts/${user}/${newWorkout.name}/${newWorkout.quantity}/${newWorkout.month}/${newWorkout.day}/${newWorkout.year}`, {}, 'POST');
    }
}

export interface Workout {
    user?: string;
    name: string;
    quantity: number;
    month: number;
    day: number;
    year: number;
}