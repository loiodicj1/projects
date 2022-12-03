import router from "@/router";
import { reactive } from "vue";

export class Workout {
    static names: string[] = [
        "Pushups", "Crunches", "Burpees", "Squats", "Lunges"
    ]
    public name: string;
    public quantity: number;
    public month: number;
    public day: number;
    public year: number;

    constructor(name: string, quantity: number, month: number, day: number, year: number) {
        this.name = name;
        this.quantity = quantity
        this.month = month
        this.day = day
        this.year = year
    }
}

export class User {
    public name: string;
    public pass: string;
    public admin: boolean;
    public workouts: Workout[];

    constructor(name: string, pass: string, admin: boolean) {
        this.name = name;
        this.pass = pass;
        this.admin = admin;
        this.workouts = [];
    }

    sortWorkouts() {
        this.workouts?.sort((w0, w1) => {
            if (w0.month == w1.month)
                return w1?.day - w0.day;
        
            return w1.month - w0.month;
        })
    }
}

const session = reactive({
    user: null as User | null,
    userlist: [
        new User("Pushup Doer", "pushupzrawesum", false),
        new User("Couch Potato", "television", false),
        new User("Mr Inshapeman", "imbuff123", true),
    ],
});

export function login(name : string) {
    var found = false
    var i = 0
    while (i < session.userlist.length && !found) {
        const user = session.userlist[i]
        
        if (user.name == name) {
            found = true
            session.user = user
        }

        i++
    }
    router.push('/')
}

export function logout() {
    session.user = null;
    router.push('/')
}

export default session;