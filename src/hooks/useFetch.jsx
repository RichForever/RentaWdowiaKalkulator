import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)

            try {
                const res = await fetch(url)
                const json = await res.json()

                setData(json)
                setIsLoading(false)
            } catch (error) {
                setError(error)
                setIsLoading(false)
            }
        }

        fetchData()
    }, [url]);

    return { data, error, isLoading }
}

export default useFetch;