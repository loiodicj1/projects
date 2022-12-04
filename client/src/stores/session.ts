import router from "@/router";
import myFetch from "@/services/myFetch";
import { reactive } from "vue";
import { getUser, type User} from "@/stores/users";
import {type Workout} from "@/stores/workouts";

export interface Message {
  text: string;
  type: "danger" | "warning" | "success" | "info";
}

const session = reactive({
  loading: 0,
  error: null as string | null,
  messages: [] as Message[],
  user: null as User | null,
});

export function login(name: string) {
  getUser(name).then(u => session.user = u);
  router.push("/");
}

export function logout() {
  session.user = null;
  router.push("/nouser");
}

export function setError(error: string | null) {
  session.error = error;
  if (error) {
    session.messages.push({ type: "danger", text: error });
  }
}

export async function api<T>(url: string, data: any = null, method?: string) {
  session.loading++;
  console.log('url: ' + url + " data: " + data + " method: " + method)
  console.log('loading up to: ' + session.loading)
  setError(null);
  try {
    return await myFetch<T>(url, data, method);
  } catch (error) {
    setError(error as string);
  } finally {
    session.loading--;
    console.log('loading down to : ' + session.loading)

  }
  return {} as T;
}

export default session;