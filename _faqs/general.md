---
title: General
id: general
---
##### Is there a 32 bit version available?

At this time there is no 32 bit version of Terminix available. Building and testing on 32 bit is a significant effort that we'd rather devote to development. The number of people using 32 bit Linux on the desktop is rather small and shrinking all the time so we feel it's the right choice at this time. Having said that, if people want to build and test Terminix on a 32 bit platform we'd be happy to accept any PRs to fix 32 bit issues.

At this point as of 17 July 2016, one PR that hopefully allows Terminix to compile and run as a 32 bit application has been accepted, however as per above no official project testing/support is being done to support this.

##### Why use D instead of &lt;insert language&gt; here

My background is in Java and J2EE and while I do some Python programming (via Jython), I have a preference for statically typed languages in the C family. I've played around with D in the past and have been impressed with it's language design and efficiency in comparison and coming from Java it was relatively easy to learn. Finally, D has a very complete GTK binding in the form of [GtkD](http://www.gtkd.org) whereas other languages I considered (Go and Rust) do not.