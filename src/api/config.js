export const APISettings = {
    token: null,
    headers: new Headers({
        'Accept': 'application/json'
    }),
    baseURL: import.meta.env.VITE_API_HOST,
}