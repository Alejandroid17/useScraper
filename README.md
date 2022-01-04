<div align="center">
    <h1>
        📜
        <br />
        use-scraper
        <br />
    </h1>
</div>

<div align="center">

[![Documentation](https://img.shields.io/badge/docs-📖-blue?style=flat-square)](https://use-scraper.vercel.app/)
[![Minified size](https://img.shields.io/bundlephobia/min/use-scraper?style=flat-square)](https://bundlephobia.com/package/use-scraper)
[![Version](https://img.shields.io/github/package-json/v/Alejandroid17/useScraper?style=flat-square)](https://www.npmjs.com/package/use-scraper)
[![License](https://img.shields.io/github/license/Alejandroid17/useScraper?style=flat-square)](https://github.com/Alejandroid17/useScraper/blob/main/LICENSE)
[![Demo](https://img.shields.io/badge/demos-🚀-yellow.svg?style=flat-square)](https://use-scraper.vercel.app/?path=/story/examples)

<br />
</div>

<div align="center"> 
<strong>React hook that allows you to scrape a website</strong>
<br />
<br />
<a href="https://use-scraper.vercel.app/"><strong>Documentation</strong></a> & <a href="https://use-scraper.vercel.app/?path=/story/examples"><strong>demos</strong></a>
</div>

<div align="center"> 
<br />
<pre>npm i <a href="https://www.npmjs.com/package/use-scraper">use-scraper</a></pre>
<br />
</div>

<!-- TABLE OF CONTENTS -->

<details open>
    <summary>Table of Contents</summary>
    <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#how-to-use">How to use</a></li>
  </ul>
</details>


## Features

- Zero dependencies
- Configurable

## Installation

```shell
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
