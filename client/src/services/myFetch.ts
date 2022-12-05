// Change to env variable
export const API_ROOT = import.meta.env.VITE_API_ROOT;

export default function myFetch<T>(url: string, data: any = null, method?: string ): Promise<T> {
    console.log("fetch reached")
    const options: RequestInit = {
        method: method ?? (data ? 'POST' : 'GET'),
        headers: {
            'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : undefined,
    };
    console.log(options)
    console.log(API_ROOT + " + " + url)
    const p = fetch(API_ROOT + url, options).then( x=>x.json() )
    return p;
}