import React, { useEffect } from "react"
import useScraper from "../useScraper"

export default {
  title: "Examples/Use cases",
  component: useScraper,
  parameters: {
    previewTabs: {
      "storybook/docs/panel": {
        hidden: true,
      },
    },
  },
}

const LinkMediaPreviewConfig = {
  selectors: {
    "og:title": {
      query: 'meta[property="og:title"]',
    },
    "og:description": {
      query: 'meta[property="og:description"]',
    },
    "og:image": {
      query: 'meta[property="og:image"]',
    },
    "og:url": {
      query: 'meta[property="og:url"]',
    },
  },
}

const Template = (args) => {
  const { isLoading, data, error } = useScraper({
    ...args,
    config: LinkMediaPreviewConfig,
  })

  return error ? (
    <div className="text-red-600">{JSON.stringify(error)}</div>
  ) : (
    <div className="grid h-screen place-items-center">
      <a href={data["og:url"]} className="w-1/5 hover:shadow-md">
        <div className="rounded shadow-lg">
          <img className="w-full" src={data["og:image"]} alt="GitHub" />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">{data["og:title"]}</div>
            <p className="text-base text-gray-700">{data["og:description"]}</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export const LinkMediaPreview = Template.bind({})

LinkMediaPreview.args = {
  url: "https://github.com/Alejandroid17/useScraper",
  proxyURL: "https://nextjs-proxy-cors.vercel.app/api?url=",
}

LinkMediaPreview.storyName = "Link media preview"
