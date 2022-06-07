import { useState, useEffect } from 'react'

export const useFecth = (url, _options) => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // const options = useRef(_options).current

  useEffect(() => {

    const controller = new AbortController()

    const fetchData = async () => {
      setLoading(true)
      try {
        // const res = await fetch(url, options)
        const res = await fetch(url, { signal: controller.signal })

        console.log(res)
        if(!res.ok)
          throw new Error(res.status, res.statusText)

        const _data = await res.json()
        setLoading(false)
        setData(_data)
        setError(null)
      } 
      catch (err) {
        if(err.name === 'AbortError') {
          console.log('Fetch aborted')
        }else {
          setError("can't fetch the data")
          console.log(err.message)
          setLoading(false)
        }
      }
    }

    fetchData()

    return () => {
      controller.abort()
    }

  }, [url])


  return { data, loading, error }
}