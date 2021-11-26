import {useEffect, useState} from 'react'

interface IFetch {
  apiData: any
  isLoading: boolean
  serverError: any
}

export const useFetchAll = (firstUrl: string, secondUrl: string): IFetch => {
  const [apiData, setApiData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [serverError, setServerError] = useState(null)

  useEffect(() => {
    setIsLoading(true)

    const fetchData = async () => {
      try {
        const res = await Promise.all([fetch(firstUrl), fetch(secondUrl)])
        const data = await Promise.all(res.map(r => r.json()))
        console.log(data)
        data[0].plain_text = data[1].plain_text
        setApiData(data[0])
        setIsLoading(false)
      } catch {}
    }

    fetchData()
  }, [firstUrl, secondUrl])

  return {
    isLoading,
    apiData,
    serverError,
  }
}
