---
title: General
id: general
---
##### Is there a 32 bit version available?

At this time there are no plans for an official 32 bit version of Tilix available. Building, testing and supporting on 32 bit is a significant effort that we'd rather devote to development. The number of people using 32 bit Linux on the desktop is rather small and shrinking all the time so we feel it's the right choice at this time. Having said that, if people want to build and test Tilix on a 32 bit platform please feel free. If there are any issues, we'd be happy to accept any PRs to fix these issues. Do note though that no official project testing/support is being done to support 32 bit.

##### Why use D instead of &lt;insert language&gt; here

My background is in Java and J2EE and while I do some Python programming (via Jython), I have a preference for statically typed languages in the C family. I've played around with D in the past and have been impressed with it's language design and efficiency in comparison and coming from Java it was relatively easy to learn. Finally, D has a very complete GTK binding in the form of [GtkD](http://www.gtkd.org) whereas other languages I considered (Go and Rust) do not.

##### How can I make Tilix my default terminal?

Run in terminal:

```
sudo update-alternatives --config x-terminal-emulator
```

Then pick Tilix from menu
