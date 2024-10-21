
export const useLocalStorage = (key) => {

    const setItem = (data) => {
        localStorage.setItem(key, JSON.stringify(data))
    }
    const getItem = () => {
       const item = localStorage.getItem(key);
       if(item)  return JSON.parse(item)
    }
    const removeItem = () => {
        localStorage.removeItem(key)
    }
    return(
        { setItem, getItem, removeItem}
    )
}