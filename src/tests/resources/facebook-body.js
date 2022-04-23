const FACEBOOK_BODY_DATA = {
  "fb:app_id": "123456789",
}

const buildBody = (data) =>
  `<!DOCTYPE html>
    <html>
      <head>
        <meta property="fb:app_id" content="${data["fb:app_id"]}">
      </head>
    </html>`

const FACEBOOK_BODY = buildBody(FACEBOOK_BODY_DATA)

export { FACEBOOK_BODY, FACEBOOK_BODY_DATA }
