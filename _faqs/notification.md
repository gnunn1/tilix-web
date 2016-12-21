---
title: Notifications
id: notifications
---
##### What are notifications?

Terminix has a feature whereby it can send a notification to the desktop when a long running processes ends and terminix is not visible. Additionally, if terminix is the top level window but the process ended in a session which is not visible terminix will display the notification in the header bar.

##### Why aren't notifications working for me?

Currently notifications in Terminix required a version of the VTE widget that was patched by Fedora. This patch has not yet been accepted by upstream but is available in some other distributions such as Arch. In Arch it is available via the ```vte-notification-common``` and ```vte3-notification``` packages.

##### I have the notification packages but it's still not working

One reason this feature doesn't work on Arch is because of the VTE configuration issue. Please see this [page](https://github.com/gnunn1/terminix/wiki/VTE-Configuration-Issue) for more information on it and how to correct it.