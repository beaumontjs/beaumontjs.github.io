#http2 FTW: What it means for frontend developers
##february 2016

- author: @joahg
- link: [bmtjs.org/2016/feb/http2-ftw/](http://bmtjs.org/2016/feb/http2-ftw/)

#speaker notes

http2 FTW: What it means for frontend developers

  - HTTP Today
    - HTTP 1.1 is huge
      - the spec for HTTP 1.1 (RFC 2616) is 176 pages long
      - since 1999, HTTP 1.1 has basically turned into the protocol for everything on the internet
      - because of this, huge investments have been made in it, in terms of infrastructure, and it's often times easier to just build on top of HTTP than build something new
    - Lots of tiny details
      - because the spec is so huge, there is rarely ever a case where anyone ever implements all of the features of HTTP
      - this causes issues when random people decide they want to use an obscure feature of HTTP -- commonly, they'll have a hard time finding client/server support for the less-known features
    - TCP support is inadequate
      - like HTTP 1.1, TCP just simply isn't easy to replace, because of the widespread support and investment made in it
      - HTTP 1.1 has a hard time taking advantage of the full power of TCP
      - could be better, faster, by utilizing it better to avoid wasted time that could've been used to send or recieve more data
    - Site sizes are consistently going up
      - HTTP 1.1 was build in 1999, when, according to the Google, the average website size was 60kb. Now, in 2016, the average is about 2mb, an increase of over 3000%
      - As the web progresses, and becomes more of the standard for apps, and informational content, the amount of data being transferred is going to continue to consistently go up
    - HTTP 1.1 is very latency-sensitive
      - while over the past 17 years, we've had a dramatic increase of bandwidth, we haven't had the same sort of improvements in reducing latency
      - high latency links make it hard to have a good and fast web experience, even with high bandwidth
    - Head of line blocking
      - forces the client to wait for the first request to be complete before moving on to the next request
      - no great solution for this
  - Latency solutions today
    - Spriting
      - in HTTP 1.1, it's much faster to get a single big image than to get 100 smaller individual images
      - makes large cache blocks, impossible to remove a single rarely-used image in the sprite from the cache without removing all of them
    - Inlining
      - similar to spriting, just putting all the data for the image inside the CSS property
      ```
        background: url(data:image/png;base64,<data>) no-repeat;
      ```
    - concatenation
      - something we're probably all familiar with
      - done with a build tool, like Grunt, to put all of the JS into a single bundle.js
      - makes it so that the browser can get one big file instead of dozens of smaller ones
      - mostly an inconvenience
    - sharding
      - back with HTTP 1.1 came out, the spec only allowed for 2 connections per host
      - sites invented more host names, and fixed that problem, allowing concurrent asset downloads/more connections
      - now the limit is higher, but sites still use it to get up to 100 or more connections at once
  - http2: the future is here
    - no protocol changes
      - the protocol can't change, because of how mucn investment has been made in http 1.1
      - http2 keeps all the same HTTP paradigms
      - http:// and https:// url syntax stays the same
    - http2 is Binary
      - this doesn't mean a whole lot to frontend developers, *but*, it does mean that assets will be received and processed by your browser faster, and more efficiently
      - header compression for http2 is much easier, because, instead of having a lot of optional whitespace in your headers, it's all binary, and easier for your browser to process and interpret
      - if none of this makes sense to you, then just know that http2 is *fast* -- that's what matters
    - Multiplexed Streams
      - stuff in http2 is sent over a "stream"
      - a stream is an independent, bi-directional sequence of frames exchanged between the client and the server within http2
      - a single connection can have multiple concurrently-open streams, with either endpoint (the server or the client) interleaving frames from multiple streams
      - can be opened or closed by either endpoint
      - packages from many streams are mixed over the same connection. this allows for much faster delivery of assets.
    - Priorities and Dependencies
      - streams can be prioritized, so the client knows which streams are most important
      - allows client to build a priority "tree", where "child streams" may depend on the completion of "parent streams"
      - practically, this allows for the browser to load all of the images, assets, etc *above* the fold, before loading lower-priority stuff further down the page
    - Server Push
      - also known as "Cache Push"
      - the idea is that when the client requests X resource, the server may know that the client will probably want Y resource as well, and sends it to the client before being asked.
      - helps the client by putting X resource in the cache, so it will be there when it wants it
  - how http2 will affect web development
    - most of the workarounds to make HTTP 1.1 perform better are actually detrimental to http2
      - spriting and inlining are unnecessary, since requests are ridiculously cheap. it's actually better to split up requests into a lot of smaller, multiplexed stream-able files than one large one
      - concatenation 
        - same issue as spriting/inline
        - it's better to serve everything separately, so the browser can cache smaller resources, and not have to redownload a large file when one little compiled module is updated
    - unfortunately, though, for a short time, at least, we have to continue to consider http 1.1 users as well
  - http2 implementations
    - Firefox, Google, Twitter have added support for http2
    - Safari and Microsoft are close behind
    - latest Nginx versions support http2
    - Apache httpd has an http2 module
    - still lacking, but we're getting there
    - https://github.com/http2/http2-spec/wiki/Implementations



rfc 7540, published may 15, 2015

https://bagder.gitbooks.io/http2-explained/content/en/index.html
https://http2.github.io/