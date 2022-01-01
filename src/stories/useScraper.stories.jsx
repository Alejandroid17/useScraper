import React, { useEffect } from "react"
import { DEFAULT_SELECTORS } from "../config"
import useScraper from "./../useScraper"
import PropertyTable from "./utils/PropertyTable"
import StateTable from "./utils/StateTable"
import Title from "./utils/Title"

export default {
  title: "Examples/useScraper",
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
  const { isLoading, data, error } = useScraper(args)

  useEffect(() => {
    !isLoading && console.log(data)
  }, [isLoading])

  return (
    <div className="flex flex-col">
      <div className="">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <Title value="Arguments" />
          <div className="my-4 overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
            <PropertyTable args={args} />
          </div>
          <Title value="States" />
          <div className="text-xs text-slate-500">
            You can also see <code>&quot;data&quot;</code> result in the
            browser&apos;s developer tools console.
          </div>
          <div className="my-4 overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
            <StateTable
              isLoading={isLoading}
              data={data}
              error={error}
              args={args}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export const DefaultConfiguration = Template.bind({})

DefaultConfiguration.args = {
  url: "https://github.com/Alejandroid17",
  proxyURL: "https://nextjs-proxy-cors.vercel.app/api?url=",
}

DefaultConfiguration.storyName = "Default configuration"

export const SimpleCustomConfiguration = Template.bind({})

SimpleCustomConfiguration.args = {
  ...DefaultConfiguration.args,
  config: {
    selectors: {
      lang: {
        query: "html",
        attr: "lang",
      },
    },
  },
}

SimpleCustomConfiguration.storyName = "Simple custom configuration"

export const DefaultAndCustomConfiguration = Template.bind({})

DefaultAndCustomConfiguration.args = {
  ...DefaultConfiguration.args,
  config: {
    selectors: {
      ...DEFAULT_SELECTORS,
      lang: {
        query: "html",
        attr: "lang",
      },
    },
  },
}

DefaultAndCustomConfiguration.storyName = "Default & custom configuration"
