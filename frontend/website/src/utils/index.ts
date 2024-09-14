export const setDataToLocalStorage = (key: string, data: string) => {
    if (typeof window !== undefined) {
        localStorage.setItem(key, data);
    }
}

export const getDataFromLocalStorage = (key: string) => {
    if (typeof window !== undefined) {
        return localStorage.getItem(key);
    }
}