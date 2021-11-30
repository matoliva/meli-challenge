import {useEffect, useState} from 'react'

interface IFetch {
  apiData: any
  isLoading: boolean
  serverError: any
}

export const useFetchAll = (firstUrl: string, secondUrl: string): IFetch => {
  const [apiData, setApiData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [serverError] = useState(null)

  useEffect(() => {
    setIsLoading(true)

    const fetchData = async () => {
      try {
        const res = await Promise.all([fetch(firstUrl), fetch(secondUrl)])
        const data = await Promise.all(res.map(r => r.json()))
        const dataSecondUrl = {...data[1]}
        data[0].plain_text = dataSecondUrl.plain_text
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
