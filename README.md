<div align="center">
    <h1>
        <br/>
        <br/>
        <br/>
        📜
        <br />
        react-scraper
        <br />
        <br />
    </h1>
    <sup>
        <br />
        <a href="https://use-scraper.vercel.app/">
            <img src="https://img.shields.io/badge/docs-📖-blue?style=flat-square" alt="documentation" />
        </a>
        <a href="https://bundlephobia.com/package/use-scraper">
            <img src="https://img.shields.io/bundlephobia/min/use-scraper?style=flat-square" alt="npm package" />
        </a>
        <a href="https://use-scraper.vercel.app/?path=/story/examples">
            <img src="https://img.shields.io/github/package-json/v/Alejandroid17/useScraper?style=flat-square" alt="package version" />
        </a>
        <a href="https://github.com/Alejandroid17/useScraper/blob/main/LICENSE">
            <img src="https://img.shields.io/github/license/Alejandroid17/useScraper?style=flat-square" alt="package version" />
        </a>
        <a href="https://use-scraper.vercel.app/?path=/story/examples">
            <img src="https://img.shields.io/badge/demos-🚀-yellow.svg?style=flat-square" alt="demos" />
        </a>
        <br />
    </sup>
    <br />
    <br />
    <h2>
        <strong>React hook that allows you to scrape a website</strong>
    </h2>
    <br />
    <pre>npm i <a href="https://www.npmjs.com/package/use-scraper">use-scraper</a></pre>
    <br />
    <br />
</div>

<!-- TABLE OF CONTENTS -->

<details>
    <summary>Table of Contents</summary>
    <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#how-to-use">How to use</a></li>
  </ul>
</details>
<br />


## Features

- Zero dependencies
- Configurable

## Installation

```bash
npm i use-scraper
```

## How to use

> :warning: To use this component it is necessary to define a CORS-enabled proxy. For example you can use [CORS-Anywhere](https://github.com/Rob--W/cors-anywhere).


```javascript
import useScraper from "use-scraper"

const MyComponent = () => {

    const { isLoading, data, error } = useScraper({
        url: 'https://github.com/Alejandroid17',
        proxyURL: '<proxy-url>'
    });

    return (
        // This is an example, here you define your component.
        <div>
            { isLoading && <div>Loading...</div> }
            { error && <div>{error}</div> }
            { data && <div>{data}</div> }
        </div>
    );

export default MyComponent;
```