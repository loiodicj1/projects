import {api} from './session';

export function getUsers() {
    return api<User[]>('users')
}

export function getUser(name: string) {
    return api<User>(`users/${name}`)
}

export interface User {
    id: number
    admin: boolean
    name: string
    workouts: Workout[]
}

export interface Workout {
    name: string;
    quantity: number;
    month: number;
    day: number;
    year: number;
  }