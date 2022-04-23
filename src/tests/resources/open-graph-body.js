const OPEN_GRAPH_BODY_DATA = {
  "og:locale": "en_US",
  "og:image": "https://example.com/image.jpg",
  "og:image:width": "1200",
  "og:image:height": "630",
  "og:title": "Open Graph Title",
  "og:description": "Open Graph Description",
  "og:type": "website",
  "og:video:url": "http://example.com/video.mp4",
  "og:video:secure_url": "https://example.com/video.mp4",
  "og:video:type": "video/mp4",
  "og:video:width": "640",
  "og:video:height": "360",
  "og:url": "https://example.com/",
  "og:site_name": "Open Graph Site Name",
  "og:video:tag": ["Open Graph Video Tag", "Open Graph Video Tag 2"],
}

const buildBody = (data) =>
  `<!DOCTYPE html>
  <html>
    <head>
      <meta property="og:locale" content="${data["og:locale"]}">
      <meta property="og:image" content="${data["og:image"]}">
      <meta property="og:image:width" content="${data["og:image:width"]}">
      <meta property="og:image:height" content="${data["og:image:height"]}">
      <meta property="og:title" content="${data["og:title"]}">
      <meta property="og:description" content="${data["og:description"]}">
      <meta property="og:type" content="${data["og:type"]}">
      <meta property="og:video:url" content="${data["og:video:url"]}">
      <meta property="og:video:secure_url" content="${
        data["og:video:secure_url"]
      }">
      <meta property="og:video:type" content="${data["og:video:type"]}">
      <meta property="og:video:width" content="${data["og:video:width"]}">
      <meta property="og:video:height" content="${data["og:video:height"]}">
      <meta property="og:url" content="${data["og:url"]}">
      <meta property="og:site_name" content="${data["og:site_name"]}">
      ${(() => {
        return data["og:video:tag"]
          .map((tag) => ` <meta property="og:video:tag" content="${tag}">\n`)
          .join("")
      })()}
     
    </head>
  </html>`

const OPEN_GRAPH_BODY = buildBody(OPEN_GRAPH_BODY_DATA)

export { OPEN_GRAPH_BODY, OPEN_GRAPH_BODY_DATA }
