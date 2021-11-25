import {useEffect, useState} from 'react'

export const useFetch = (url: string) => {
  const [apiData, setApiData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [serverError, setServerError] = useState(null)

  useEffect(() => {
    setIsLoading(true)

    const fetchData = async () => {
      try {
        const resp = await fetch(url)
        const data = await resp.json()

        setApiData(data.results)
        setIsLoading(false)
      } catch (error: any) {
        setServerError(error)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [url])

  return {
    isLoading,
    apiData,
    serverError,
  }
}
