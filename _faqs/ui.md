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

##### What variables are supported in custom terminal titles?

The following variables are supported:

Variable | Description
-------|------------
${title} | The title of the terminal
${iconTitle} | The icon title of the terminal
${id} | The numeric terminal ID (i.e. 1,2,3,4)
${directory} | The current working directory in the terminal
${columns} | The number of columns in the terminal
${rows} | the number of rows in the terminal
${hostname} | the hostname of the current session, availability dependent on the VTE script being configured on remote systems or triggers
${username} | the current username, requires trigger support and an appropriate trigger be configured

##### What variables are supported in custom application titles?

The following variables are supported:

Variable | Description
-------|------------
${appName} | The name of the application, i.e. Terminix
${sessionName} | The name of the session
${sessionNumber} | The number of the session, i.e. session 2 out of 4 active

##### I set a background image in preferences but it is not visible, how do I fix this?

Background images requires transparency to work, in order to view the background image you need to adjust the transparency slider in the appropriate profile.