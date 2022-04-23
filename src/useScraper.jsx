import { useEffect, useState } from "react"
import DefaultConfig from "./config"
import PropTypes from "prop-types"
import Scraper from "./scraper"

const useScraper = ({ url, proxyURL, config = DefaultConfig }) => {
  const [data, setData] = useState({ isLoading: true, error: null, data: {} })

  useEffect(() => {
    reset()
    doFetch()
  }, [url, proxyURL])

  const reset = () => {
    setData({ isLoading: true, error: null, data: {} })
  }

  const doFetch = async () => {
    setData((prevState) => ({ ...prevState, isLoading: true }))

    const scraper = new Scraper({ url, proxyURL, config })
    await scraper
      .parse()
      .then((response) =>
        setData({ isLoading: false, data: response, error: null }),
      )
      .catch((error) => setData({ isLoading: false, data: {}, error }))
  }

  return {
    ...data,
  }
}

export default useScraper

useScraper.propTypes = {
  /**
   * The url to scrape.
   */
  url: PropTypes.string.isRequired,
  /**
   * The proxy url to use.
   */
  proxyURL: PropTypes.string.isRequired,
  /**
   * The scraper config.
   */
  config: PropTypes.object,
}
