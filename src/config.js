const DEFAULT_SELECTORS = {
  title: { query: "title" },
  charset: { query: "meta[charset]", attr: "charset" },
  description: {
    query: "meta[name=description]",
    attr: "content",
    default: null,
  },
  keywords: {
    query: "meta[name=keywords]",
    default: null,
  },
  author: {
    query: "meta[name=author]",
    default: null,
  },
  image: {
    query: "meta[name=image]",
  },
  tag: {
    query: "meta[property=tag]",
    all: true,
  },
  favicon: {
    query: "link[rel=icon]",
    attr: "href",
    all: true,
  },
}

const OPEN_GRAPH_SELECTORS = {
  "og:locale": {
    query: 'meta[property="og:locale"]',
  },
  "og:image": {
    query: 'meta[property="og:image"]',
  },
  "og:image:width": {
    query: 'meta[property="og:image:width"]',
  },
  "og:image:height": {
    query: 'meta[property="og:image:height"]',
  },
  "og:title": {
    query: 'meta[property="og:title"]',
  },
  "og:description": {
    query: 'meta[property="og:description"]',
  },
  "og:type": {
    query: 'meta[property="og:type"]',
  },
  "og:video:url": {
    query: 'meta[property="og:video:url"]',
  },
  "og:video:secure_url": {
    query: 'meta[property="og:video:secure_url"]',
  },
  "og:video:type": {
    query: 'meta[property="og:video:type"]',
  },
  "og:video:width": {
    query: 'meta[property="og:video:width"]',
  },
  "og:video:height": {
    query: 'meta[property="og:video:height"]',
  },
  "og:url": {
    query: 'meta[property="og:url"]',
  },
  "og:site_name": {
    query: 'meta[property="og:site_name"]',
  },
  "og:video:tag": {
    query: 'meta[property="og:video:tag"]',
    all: true,
  },
}

const TWITTER_SELECTORS = {
  "twitter:creator": {
    query: 'meta[name="twitter:creator"]',
  },
  "twitter:title": {
    query: 'meta[name="twitter:title"]',
  },
  "twitter:description": {
    query: 'meta[name="twitter:description"]',
  },
  "twitter:card": {
    query: 'meta[name="twitter:card"]',
  },
  "twitter:site": {
    query: 'meta[name="twitter:site"]',
  },
  "twitter:image": {
    query: 'meta[name="twitter:image"]',
  },
}

const FACEBOOK_SELECTORS = {
  "fb:app_id": {
    query: 'meta[property="fb:app_id"]',
  },
}

const DefaultConfig = {
  selectors: {
    ...DEFAULT_SELECTORS,
    ...OPEN_GRAPH_SELECTORS,
    ...TWITTER_SELECTORS,
    ...FACEBOOK_SELECTORS,
  },
}

export default DefaultConfig
export {
  DEFAULT_SELECTORS,
  OPEN_GRAPH_SELECTORS,
  TWITTER_SELECTORS,
  FACEBOOK_SELECTORS,
}
