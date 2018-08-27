---
title: User Interface
id: ui
---
##### Why are the terminal title bars so large?

Tilix complies with the Gnome HIG and the UI of tilix is inspired by [Gnome Builder](https://wiki.gnome.org/Apps/Builder). There is an option in Preferences to either shrink the terminal title bars or hide them completely.

##### Why aren't sessions displayed as tabs?

While previously a tabbed interface was not supported, starting with 1.7.0 you can opt to use tabs instead of the more traditional sidebar interface. The option is to configure tabs is in the Preferences dialog under Appearance.

##### When I split a terminal it starts in the home directory instead of inheriting the directory

In Tilix the intention is that a split terminal should open in the same directory as the terminal that was split. The issue is caused by an issue in VTE configuration. This [page](https://github.com/gnunn1/tilix/wiki/VTE-Configuration-Issue) has more information on the issue and how to correct it.

##### Is it possible to use the new overlay scrollbars introduced in Adwaita?

Yes, by default when using GTK 3.22 or newer overlay scrollbars are used.

##### How come my scrollbars are not transparent like in Adwaita?

Making scrollbars transparent requires CSS specific to that theme. At this time only Adawita, Ambiance, Radiance and the author's personal theme, Lavender, are supported.

##### Where is the option to get the cool colored prompts like in the screenshots?

That comes from [powerline](https://github.com/powerline/powerline) and is not something Tilix provides.

##### I set a background image in preferences but it is not visible, how do I fix this?

Background images requires transparency to work, in order to view the background image you need to adjust the transparency slider in the appropriate profile.

##### I am seeing some visual issues (slow scrollback performance, odd rendering) that I don't see in other VTE based terminal emulators?

By default tilix uses an overlay scrollbar rather then a separate scrollbar. This configuration is more attractive then the regular scrollbar, particularly when tiling terminals. However as far as I am aware Tilix is the only VTE based terminal emulator that does so at this time.

As a result this feature does not receive wide testing and there are a few known issues with it. If you are having issues, try disabling overlay scrollbars in ```Preferences | Appearances | Use overlay scrollbars```.
