import { useEffect, useState } from "react"
import DefaultConfig from "./config"
import PropTypes from "prop-types"
import Scraper from "./scraper"

const useScraper = ({ url, proxyURL, config = DefaultConfig }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    reset()
    doFetch()
  }, [url, proxyURL])

  const reset = () => {
    setIsLoading(true)
    setData({})
    setError(null)
  }

  const doFetch = async () => {
    setIsLoading(true)

    const scraper = new Scraper({ url, proxyURL, config })
    await scraper.parse().then(setData).catch(setError)

    setIsLoading(false)
  }

  return {
    isLoading,
    data,
    error,
  }
}

export default useScraper

useScraper.propTypes = {
  url: PropTypes.string.isRequired,
  proxyURL: PropTypes.string.isRequired,
  config: PropTypes.object,
}
