Youtube and Vimeo videos support for your book
==============

This plugins requires gitbook `>=2.0.0`.

### How to use it?

Add it to your `book.json`, then run `gitbook install`:

```
{
    plugins: ["video"]
}
```

You can now add video like a vimeo or youtube (video will be recognize automatically):

```
take a look at this video:

1. {% video %}https://www.youtube.com/watch?v=Oru-qw-Faac{% endvideo %}
2. {% video %}https://vimeo.com/128858567{% endvideo %}
```

### How it work you can look on this
[Video list](http://xgrommx.github.io/rx-book/content/video/index.html)
