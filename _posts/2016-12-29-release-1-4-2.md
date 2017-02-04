---
title: 1.4.2 New Release
layout: post
description: Terminix 1.4.2 bugfix release
icon: fa-flask 
date: 2016-12-29 00:00:00 +0100
author: Gerald Nunn
---

Terminix 1.4.2 has been released to fix a few remaining issues with 1.4.0, the following changes were made in this release:

* Fixed issue with option for focus to follow mouse not working
* Fixed problem with double-clicking or dragging title label causing the title editor to appear. Clicking the title will now wait until after the double-click time has elapsed before appearing. This emulates Epiphany's behavior
* Fixed segmentation fault with Trigger Edit dialog when using a non-english language
* Added an initial man page for terminix
* VTE configuration dialog web link now points to Terminix website
* If you specify a session file that doesn't exist Terminix will now open a default session instead of being empty