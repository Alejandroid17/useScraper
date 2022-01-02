import { useEffect, useState } from "react"
import DefaultConfig from "./config"
import PropTypes from "prop-types"

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

  const buildURL = () => {
    return proxyURL + url
  }

  const doFetch = async () => {
    setIsLoading(true)

    const url = buildURL()

    const response = await fetch(url)

    if (!response.ok) {
      const { status, url, type, statusText } = response
      setError({ status, url, type, statusText })
      setIsLoading(false)
      return
    }

    const htmlText = await response.text()

    parseHTML(htmlText)
    setIsLoading(false)
  }

  const parseHTML = (htmlText) => {
    const parser = new DOMParser().parseFromString(htmlText, "text/html")
    let data = {}

    for (const [key, tag] of Object.entries(config.selectors)) {
      const element = tag.all
        ? parser.querySelectorAll(tag.query)
        : parser.querySelector(tag.query)

      const attr = tag.attr ? tag.attr : "content"

      const value = element
        ? attr
          ? tag.all
            ? Array.from(element).map((node) => node.getAttribute(attr))
            : element.getAttribute(attr)
          : element.textContent
        : tag.default ?? null

      data = {
        ...data,
        [key]: value,
      }
    }

    setData(data)
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
