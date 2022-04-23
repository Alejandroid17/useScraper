const TWITTER_BODY_DATA = {
  "twitter:creator": "TwitterDev",
  "twitter:title": "Twitter for Developers",
  "twitter:description": "Twitter for Developers",
  "twitter:card": "summary_large_image",
  "twitter:site": "@TwitterDevDummyExample",
  "twitter:image":
    "https://abs.twimg.com/a/1588002401/img/t1/twitter_logo_white_on_blue.png",
}

const buildBody = (data) =>
  `<!DOCTYPE html>
    <html>
      <head>
        <meta name="twitter:creator" content="${data["twitter:creator"]}">
        <meta name="twitter:title" content="${data["twitter:title"]}">
        <meta name="twitter:description" content="${data["twitter:description"]}">
        <meta name="twitter:card" content="${data["twitter:card"]}">
        <meta name="twitter:site" content="${data["twitter:site"]}">
        <meta name="twitter:image" content="${data["twitter:image"]}">
      </head>
    </html>`

const TWITTER_BODY = buildBody(TWITTER_BODY_DATA)

export { TWITTER_BODY, TWITTER_BODY_DATA }
