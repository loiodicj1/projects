import {api} from './session';

export function getUsers() {
    return api<ListEnvelope<User>>('users')
}

export function getUser(id: number) {
    return api<User>(`users/${id}`)
}

export interface ListEnvelope<T> {
    users: T[]
    total: number
}

export interface User {
    id: number
    name: string
    workouts: []
}