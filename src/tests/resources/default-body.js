const DEFAULT_BODY_DATA = {
  title: "Your Fake Title",
  charset: "utf-8",
  description: "Your Fake Description",
  keywords: "Fake-Keyword-A, Fake-Keyword-B, Fake-Keyword-C",
  author: "Your Fake Author",
  image: "https://www.your-fake-url.com/image.png",
  tag: ["Fake-Tag-A", "Fake-Tag-B", "Fake-Tag-C"],
  favicon: ["https://www.your-fake-url.com/favicon.ico"],
}

const buildBody = ({
  title,
  charset,
  description,
  keywords,
  author,
  image,
  tag,
  favicon,
}) => `
<!DOCTYPE html>
<html>
    <head>
        <title>${title}</title>
        <meta charset="${charset}">
        <meta name="description" content="${description}">
        <meta name="keywords" content="${keywords}">
        <meta name="author" content="${author}">
        <meta name="image" content="${image}">
        ${(() => {
          return tag
            .map((tag) => `<meta property="tag" content="${tag}">\n`)
            .join("")
        })()}
        <link rel="icon" href="${favicon}">
    </head>
</html>
`

const DEFAULT_BODY = buildBody(DEFAULT_BODY_DATA)

export { DEFAULT_BODY, DEFAULT_BODY_DATA }
