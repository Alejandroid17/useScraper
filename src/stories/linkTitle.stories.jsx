import React from "react"
import useScraper from "../useScraper"

export default {
  title: "Examples/Use cases/Link title",
  component: useScraper,
  parameters: {
    previewTabs: {
      "storybook/docs/panel": {
        hidden: true,
      },
    },
  },
}

const Template = (args) => {
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

  const { isLoading, data, error } = useScraper({
    ...args,
    config: LinkMediaPreviewConfig,
  })

  return error ? (
    <div className="text-red-600">{JSON.stringify(error)}</div>
  ) : (
    <div className="grid py-5 place-items-center">
      <div>
        This is a link with the title obtained from the website:
        <div>
          <a
            href={data["og:url"]}
            className="text-sky-500 hover:underline"
            title={data["og:description"]}
          >
            {isLoading ? args.url : data["og:title"]}
          </a>
        </div>
      </div>
    </div>
  )
}

export const LinkTitle = Template.bind({})

LinkTitle.args = {
  url: "https://github.com/Alejandroid17/useScraper",
  proxyURL: "https://nextjs-proxy-cors.vercel.app/api?url=",
}

LinkTitle.parameters = {
  docs: {
    source: {
      type: "code",
    },
  },
}

LinkTitle.storyName = "Link title"
