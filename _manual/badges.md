---
title: Badges
id: badges
layout: default
---
*Note that badges requires that the GTK VTE widget be built with a tilix specific [patch](https://github.com/gnunn1/tilix/blob/master/experimental/vte/alternate-screen.patch), otherwise badges are disabled. Arch users can access this functionality by installing the [vte3-terminix-git](https://aur.archlinux.org/packages/vte3-terminix-git) package.*

![]({{site.baseurl}}/assets/images/manual/badges.png)

Badges are a feature that displays specified text in the background of the terminal. They can be used for a variety of purposes including acting as visual reminders or as a way to display the terminal title when the title is disabled. 

Badges are configured at the Profile level and are specific to a Profile. The General page of Profile preferences allows you to specify the badge text and the position of the badge. Note that badges support all of the same variables as terminal titles, so you can specify something like ```${title}``` to display the title in the badge. See the FAQ for a list of variables that are available.

The color of the badge can be configured in the Colors page of Profile preferences and is nested within the Advanced popup. Additionally, the badge color can be specified in the theme files.