import { useState } from "react"

type dataFromUser = {
    url: string
    payload?: string | any
    method?: 'GET' | 'POST' | 'PUT'
}

export const useFetch = () => {
    let [data, setData] = useState('');

    const extractDataFromApi = (data: dataFromUser) => {

        fetch(data.url, {
            method: data.method,
            body: { ...data.payload }
        })
            .then(response => response.json())
            .then(res => {
                setData(res)
            })
            .catch(err => console.log(err))
    }

    return [ data, extractDataFromApi ]
}