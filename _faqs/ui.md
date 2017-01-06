---
title: User Interface
id: ui
---
##### Why are the terminal title bars so large?

Terminix complies with the Gnome HIG and the UI of terminix is inspired by [Gnome Builder](https://wiki.gnome.org/Apps/Builder). There is an option in Preferences to either shrink the terminal title bars or hide them completely.

##### Why aren't sessions displayed as tabs?

While we don't have anything against a tabbed user interface, we really wanted to try something different with Terminix. Most text editors use tabbed interfaces for navigating between open files, Gnome Builder is trying something different in this regard and we were curious to see how well this would work for a terminal emulator.

This was discussed as part of [Issue #12](https://github.com/gnunn1/terminix/issues/12) which has been closed, there are no plans to support tabs in the future.

##### When I split a terminal it starts in the home directory instead of inheriting the directory

In Terminix the intention is that a split terminal should open in the same directory as the terminal that was split. The issue is caused by an issue in VTE configuration. This [page](https://github.com/gnunn1/terminix/wiki/VTE-Configuration-Issue) has more information on the issue and how to correct it.

##### Is it possible to use the new overlay scrollbars introduced in Adwaita?

No, unfortunately using those require the use of a GTKScrolledWindow which is not supported by the VTE widget as per [upstream](https://bugzilla.gnome.org/show_bug.cgi?id=760718).

##### How come my scrollbars are not transparent like in Adwaita?

Making scrollbars transparent requires CSS specific to that theme. At this time only Adawita, Ambiance, Radiance and the author's personal theme, Lavender, are supported.

##### Where is the option to get the cool colored prompts like in the screenshots?

That comes from [powerline](https://github.com/powerline/powerline) and is not something Terminix provides.

##### I set a background image in preferences but it is not visible, how do I fix this?

Background images requires transparency to work, in order to view the background image you need to adjust the transparency slider in the appropriate profile.