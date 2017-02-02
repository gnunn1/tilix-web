---
title: 1.4.0 New Release
layout: post
description: Terminix 1.4.0 released with improved preference/profile dialog, new features and many bug fixes.
icon: fa-flask 
date: 2016-12-22 00:00:00 +0100
author: Gerald Nunn
---

Terminix 1.4.0 has been released, the following changes were made in this release:

* Merged the preferences and profiles dialogs together based on a design from Allan Day for a much more user friendly experience
* Fixed a leak that was causing VTE file descriptors to be leaked as well as memory
* Fixed problems with the Preference dialog not being freed correctly
* Added additional options to Quake mode including horizontal alignment and hiding the headerbar
* Added an option to zoom the terminal with the mouse scroll wheel
* Re-worked the close dialog so it shows the user all of the processes running within the context of what is being closed. So if you close the application, you will get warned about the processes across all Terminix windows, etc.
* Fixed synchronized input so IME input works as expected
* Added preference for the Window title, also title can be clicked and edited directly in the Headerbar