import React from "react"
import Link from "./Link"

const ARGUMENTS = {
  url: {
    description: "The url to scrape.",
    defaultValue: null,
    example: "https://www.google.com",
  },
  proxyURL: {
    description: "The proxy url to use.",
    defaultValue: null,
    example: "https://cors-anywhere.herokuapp.com/",
  },
  config: {
    description: (
      <span>
        The config object to pass to the scraper.
        <Link
          kind="Documentation/Configuration"
          className="ml-1 text-sky-500 hover:underline"
          label="Read more"
        />
      </span>
    ),
    defaultValue: "DefaultConfig",
    example: JSON.stringify({ selectors: { title: { query: "title" } } }),
  },
}

const STATES = {
  isLoading: {
    description: "Whether the scraper is loading.",
    example: false,
  },
  error: {
    description: "The error message if the scraper failed.",
    example: { message: "Failed to fetch" },
  },
  data: {
    description: (
      <>
        The data returned by the scraper. This data depends on the config (
        <Link
          kind="Documentation/Configuration"
          className="text-sky-500 hover:underline"
          label="read more"
        />
        ).
      </>
    ),
    example: { title: "Google" },
  },
}

export { ARGUMENTS, STATES }
