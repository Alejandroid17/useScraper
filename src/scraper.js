import DefaultConfig from "./config"

class Scraper {
  constructor({ url, proxyURL = "", config = DefaultConfig }) {
    this.url = proxyURL + url
    this.config = config
  }

  async parse() {
    const htmlText = await this.#fetch() // eslint-disable-line no-use-before-define

    return this.#parseHTML(htmlText)
  }

  async #fetch() {
    const response = await fetch(this.url)

    if (!response.ok) {
      const { status, url, type, statusText } = response
      throw { status, url, type, statusText }
    }

    const htmlText = await response.text()

    return htmlText
  }

  #parseHTML = (htmlText) => {
    const parser = new DOMParser().parseFromString(htmlText, "text/html")

    const data = {}

    for (const [key, tag] of Object.entries(this.config.selectors)) {
      const element = tag.all
        ? parser.querySelectorAll(tag.query)
        : parser.querySelector(tag.query)

      const attr = tag.attr ? tag.attr : "content"

      const value = element
        ? tag.all
          ? Array.from(element).map((element) =>
              this.#getAttribute({ element, attr }),
            )
          : this.#getAttribute({ element, attr })
        : tag.default ?? null

      data[key] = value
    }

    return data
  }

  #getAttribute = ({ element, attr }) => {
    return attr === "content"
      ? element.hasAttribute("content")
        ? element.getAttribute(attr)
        : element.textContent
      : element.getAttribute(attr)
  }
}

export default Scraper
