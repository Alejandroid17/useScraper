import React from "react"
import useScraper from "./../useScraper"
import PropertyTable from "./utils/PropertyTable"
import StateTable from "./utils/StateTable"
import Title from "./utils/Title"
// import useScraperDoc from "./useScraper.doc.mdx"

export default {
  title: "Examples/Basic",
  component: useScraper,
  argTypes: {
    url: {
      description: "URL to scrape",
      control: {
        type: "text",
      },
    },
  },
  // parameters: {
  // docs: {
  // page: useScraperDoc,
  // },
  // },
}

const Template = (args) => {
  const { isLoading, data, error } = useScraper(args)

  !isLoading && console.log(data)

  return (
    <div className="flex flex-col">
      <div className="">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <Title value="Arguments" />
          <div className="my-4 overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
            <PropertyTable args={args} />
          </div>
          <Title value="States" />
          <div className="my-4 overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
            <StateTable isLoading={isLoading} data={data} error={error} />
          </div>
        </div>
      </div>
    </div>
  )
}

export const Basic = Template.bind({})

Basic.args = {
  url: "https://github.com/Alejandroid17",
  proxyURL: "https://nextjs-proxy-cors.vercel.app/api?url=",
}
