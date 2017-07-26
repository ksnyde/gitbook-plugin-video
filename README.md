YouTube and Vimeo videos for your Gitbook
==============

This plugins requires gitbook `>=2.0.0`.

### How to use it?

Add it to your `book.json`, then run `gitbook install`:

```
{
    plugins: ["videoclips"]
}
```

To add video from vimeo or youtube use the following basic syntax:

```
take a look at this video:

1. {% vimeo %}Oru-qw-Faac{% endvimeo %}
2. {% youtube %}128858567{% endyoutube %}
```

Beyond that you can also add parameters which include:

- `useStyle` - by default styles are used to make the embedded videos look good but if you'd prefer to remove all styling (considering there are _class_ properties already decorated throughout) you can set the **useStyle** property to _false_ like so:

    ```hbs
    {% vimeo useStyle=false %}xxxxxxxx{% endvimeo }
    ```

- `border`
- `height`
- `width`