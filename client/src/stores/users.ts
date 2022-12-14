import {api} from './session';
import type {Workout} from './workouts';

export function getUsers() {
    return api<User[]>('users')
}

export function getUser(name: string) {
    return api<User>(`users/${name}`)
}

export function newUser(name: string, admin: boolean) {
    return api<User>(`users/${name}/${admin}`, {}, 'POST')
}

export function dropUser(name : string) {
    return api<User>(`users/${name}`, {}, `PATCH`)
}

export function seedUsers() {
    return api<User>(`users/seed`, {}, `POST`)
}

export interface User {
    admin: boolean
    name: string
    workouts: Workout[]
}