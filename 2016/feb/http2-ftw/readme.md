#HTTP/2 FTW: What it means for frontend developers
##february 2016

- author: @joahg
- link: [bmtjs.org/s/feb-2016/http2-ftw/](http://bmtjs.org/s/feb-2016/http-ftw/)

#speaker notes

HTTP/2 FTW: What it means for frontend developers

  - HTTP Today
    - HTTP 1.1 is huge
      - since 1999, HTTP 1.1 has basically turned into the protocol for everything on the internet
      - because of this, huge investments have been made in it, in terms of infrastructure, and it's often times easier to just build on top of HTTP than build something new
      - the spec for HTTP 1.1 (RFC 2616) is 176 pages long
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



rfc 7540, published may 15, 2015

https://bagder.gitbooks.io/http2-explained/content/en/index.html