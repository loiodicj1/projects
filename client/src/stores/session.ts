import router from "@/router";
import { reactive } from "vue";

export class User {
    public name?: string;
    public pass?: string;
    public picture?: string;
    public admin?: boolean;

    constructor(name: string, pass: string, picture: string, admin: boolean) {
        this.name = name;
        this.pass = pass;
        this.picture = picture;
        this.admin = admin;
    }
}

const session = reactive({
    user: null as User | null,
    userlist: [
        new User("User", "pass123", "", false),
        new User("Admin", "superpass123", "", true),
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