---
title: Quake
id: quake
layout: manual
description:  Always have a terminal ready to go at the press of a key. Like the eponymous console in the 3D game Quake, this feature enables a terminal to appear at the top of the screen at a touch of key.
---
#### Introduction

Tilix supports running in a _Quake_-style mode where it appears at the top of the screen and can be toggled on or off as needed. However, unlike other terminal emulators that support this mode Tilix does not register a global hot key. Instead you must register a hot key yourself with the Desktop Environment you are using, this is required because Wayland does not support global hot keys.

When you register the hot key, simply bind it to the following command:

{% highlight bash %}
tilix --quake
{% endhighlight %}

When Tilix is run with the `--quake` switch, it will check if a quake style window is already running and if so simply toggle the window's visibility. If no quake style window has been created, then Tilix will create one and display it.

Configuring this hot key for GNOME is quite simple, simply open the Keyboard settings and configure a hot key as per the example in the screenshot below:

![]({{site.baseurl}}/assets/images/manual/hotkey.png)

#### Wayland

Note that quake mode in Wayland is currently not available, while initially supported it proved to be problematic given the limitations of the Wayland environment. Here are the options for enabling in Wayland:

* Force the GDK back-end to be X11. You can force tilix to use X11 as the backend instead of Wayland by setting the quake command as ```GDK_BACKEND=x11 tilix --quake```. Note that you should also update the tilix desktop file to force the x11 backend as well.
* There is a gnome-shell [quake](https://github.com/repsac-by/gnome-shell-extension-quake-mode) extension that enables any application to run in quake mode.

### KDE

If you have the issue where the tilix quake window does not receive focus, try disabling the feature "Focus stealing prevention" in KDE as per the comment [here](https://github.com/gnunn1/tilix/issues/895#issuecomment-385275324).