import {api} from './session';

export function addWorkout(user : string | undefined, newWorkout : Workout) {
    if (user != null) {
        api(`workouts/${user}/${newWorkout.name}/${newWorkout.quantity}/${newWorkout.month}/${newWorkout.day}/${newWorkout.year}`, {}, 'POST');
    }
}

export function dropWorkout(user : string | undefined, newWorkout : Workout) {
    if (user != null) {
        api(`workouts/${user}/${newWorkout.name}/${newWorkout.quantity}/${newWorkout.month}/${newWorkout.day}/${newWorkout.year}`, {}, 'DELETE');
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