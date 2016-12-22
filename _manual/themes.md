---
title: Themes
id: themes
layout: default
---
### Themes

Terminix supports themes for configuring the color scheme of the terminal, each theme is stored in a file. A theme file is a simple json file that specifies the color for each element as well as identifying whether certain colors should be used or defaulted. Here is an example of a theme file:

{% highlight json linenos %}
{
    "name": "Orchis",
    "comment": "Tango but using Orchis foreground/background colors",
    "foreground-color": "#EFEFEF",
    "background-color": "#303030",
    "use-theme-colors": false,
    "use-highlight-color": false,
    "highlight-foreground-color": "#ffffff",
    "highlight-background-color": "#a348b1",
    "use-cursor-color": false,
    "cursor-foreground-color": "#ffffff",
    "cursor-background-color": "#efefef",
    "use-badge-color": true,
    "badge-color": "#ac7ea8",
    "palette": [
        "#000000",
        "#CC0000",
        "#4D9A05",
        "#C3A000",
        "#3464A3",
        "#754F7B",
        "#05979A",
        "#D3D6CF",
        "#545652",
        "#EF2828",
        "#89E234",
        "#FBE84F",
        "#729ECF",
        "#AC7EA8",
        "#34E2E2",
        "#EDEDEB"
    ]
}
{% endhighlight %}

Themes are loaded from one of two places by Terminix. The first is ```/usr/share/terminix/schemes```, these are the themes that are shipped with Terminix. The second place that Terminix looks for theme files is in the user home directory, specifically ```~/.config/terminix/schemes```. Users can place any custom themes they want to use here.

While Terminix only includes a small number of themes, additional themes can be easily downloaded and installed. The GitHub repository [Terminix-Themes](https://github.com/storm119/Terminix-Themes) has a wide variety of pre-built themes to choose from.