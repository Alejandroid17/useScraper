import { describe, expect, test, afterEach } from "vitest"
import Scraper from "../scraper"
import DefaultConfig, {
  DEFAULT_SELECTORS,
  FACEBOOK_SELECTORS,
  OPEN_GRAPH_SELECTORS,
  TWITTER_SELECTORS,
} from "../config"
import fetchMock from "fetch-mock"
import { DEFAULT_BODY_DATA, DEFAULT_BODY } from "./resources/default-body"
import {
  OPEN_GRAPH_BODY,
  OPEN_GRAPH_BODY_DATA,
} from "./resources/open-graph-body"
import { TWITTER_BODY, TWITTER_BODY_DATA } from "./resources/twitter-body"
import { FACEBOOK_BODY, FACEBOOK_BODY_DATA } from "./resources/facebook-body"

const URL = "https://www.your-fake-url.com/"
const PROXY_URL = "https://your-fake-proxy-url.com/?url="
const COMPLETE_URL = PROXY_URL + URL

const mockFetch = ({ status, bodyData }) => {
  fetchMock.mock({
    url: COMPLETE_URL,
    response: {
      status: status,
      body: bodyData,
    },
  })
}

describe("Scraper (default) tests", () => {
  afterEach(() => {
    fetchMock.restore()
  })

  test("Init scraper", () => {
    // Act
    const scraper = new Scraper({ url: URL, proxyURL: PROXY_URL })

    // Assert
    expect(scraper.url).toEqual(COMPLETE_URL)
    expect(scraper.config).toEqual({ ...DefaultConfig })
  })

  test("Scraper parse (simple selectors)", async () => {
    // Arrange
    mockFetch({
      status: 200,
      bodyData: DEFAULT_BODY,
    })

    const config = {
      selectors: DEFAULT_SELECTORS,
    }

    const scraper = new Scraper({ url: URL, proxyURL: PROXY_URL, config })

    // Act
    const data = await scraper.parse()

    // Assert
    expect(scraper.url).toEqual(COMPLETE_URL)
    expect(scraper.config).toEqual(config)

    for (const [key, value] of Object.entries(DEFAULT_BODY_DATA)) {
      expect(data[key]).toEqual(value)
    }
  })

  test("Scraper parse (open graph selectors)", async () => {
    // Arrange
    mockFetch({
      status: 200,
      bodyData: OPEN_GRAPH_BODY,
    })

    const config = {
      selectors: OPEN_GRAPH_SELECTORS,
    }

    const scraper = new Scraper({
      url: URL,
      proxyURL: PROXY_URL,
      config,
    })

    // Act
    const data = await scraper.parse()

    // Assert
    expect(scraper.url).toEqual(COMPLETE_URL)
    expect(scraper.config).toEqual(config)

    for (const [key, value] of Object.entries(OPEN_GRAPH_BODY_DATA)) {
      expect(data[key]).toEqual(value)
    }
  })

  test("Scraper parse (twitter selectors)", async () => {
    // Arrange
    mockFetch({
      status: 200,
      bodyData: TWITTER_BODY,
    })

    const config = {
      selectors: TWITTER_SELECTORS,
    }

    const scraper = new Scraper({
      url: URL,
      proxyURL: PROXY_URL,
      config,
    })

    // Act
    const data = await scraper.parse()

    // Assert
    expect(scraper.url).toEqual(COMPLETE_URL)
    expect(scraper.config).toEqual(config)

    for (const [key, value] of Object.entries(TWITTER_BODY_DATA)) {
      expect(data[key]).toEqual(value)
    }
  })

  test("Scraper parse (facebook selectors)", async () => {
    // Arrange
    mockFetch({
      status: 200,
      bodyData: FACEBOOK_BODY,
    })

    const config = {
      selectors: FACEBOOK_SELECTORS,
    }

    const scraper = new Scraper({
      url: URL,
      proxyURL: PROXY_URL,
      config,
    })

    // Act
    const data = await scraper.parse()

    // Assert
    expect(scraper.url).toEqual(COMPLETE_URL)
    expect(scraper.config).toEqual(config)

    for (const [key, value] of Object.entries(FACEBOOK_BODY_DATA)) {
      expect(data[key]).toEqual(value)
    }
  })
})
