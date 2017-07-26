Youtube and Vimeo videos support for your book
==============

This plugins requires gitbook `>=2.0.0`.

### How to use it?

Add it to your `book.json`, then run `gitbook install`:

```
{
    plugins: ["videoclips"]
}
```

You can now add video from vimeo or youtube (video will be recognize automatically):

```
take a look at this video:

1. {% vimeo %}Oru-qw-Faac{% endvimeo %}
2. {% youtube %}128858567{% endyoutube %}
```
