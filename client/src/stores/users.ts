import {api} from './session';
import type {Workout} from './workouts';

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