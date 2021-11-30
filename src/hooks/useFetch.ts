import {useEffect, useState} from 'react'

interface IFetch {
  apiData: any
  isLoading: boolean
  serverError: any
}

export const useFetch = (url: string): IFetch => {
  const [apiData, setApiData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [serverError, setServerError] = useState(null)

  useEffect(() => {
    setIsLoading(true)

    const fetchData = async () => {
      try {
        const resp = await fetch(url)
        const data = await resp.json()

        setApiData(data)
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
