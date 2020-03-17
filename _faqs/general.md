---
title: General
id: general
---
##### Is there a 32 bit version available?

At this time there are no plans for an official 32 bit version of Tilix available. Building, testing and supporting on 32 bit is a significant effort that we'd rather devote to development. The number of people using 32 bit Linux on the desktop is rather small and shrinking all the time so we feel it's the right choice at this time. Having said that, if people want to build and test Tilix on a 32 bit platform please feel free. If there are any issues, we'd be happy to accept any PRs to fix these issues. Do note though that no official project testing/support is being done to support 32 bit.

##### Why use D instead of &lt;insert language&gt; here

My background is in Java and J2EE and while I do some Python programming (via Jython), I have a preference for statically typed languages in the C family. I've played around with D in the past and have been impressed with it's language design and efficiency in comparison and coming from Java it was relatively easy to learn. Finally, D has a very complete GTK binding in the form of [GtkD](http://www.gtkd.org) whereas other languages I considered (Go and Rust) do not.

##### How can I make Tilix my default terminal?

For debian distributions you can run the following in a terminal:

```
sudo update-alternatives --config x-terminal-emulator
```

And then pick Tilix from menu.

For Arch Linux distributions with GNOME you can run the following in a terminal:
```
sudo mv /usr/bin/gnome-terminal /usr/bin/gnome-terminal.bck
sudo mv /usr/lib/gnome-terminal-server /usr/lib/gnome-terminal-server.bck
sudo ln -s /usr/bin/tilix /usr/bin/gnome-terminal
sudo ln -s /usr/bin/tilix /usr/lib/gnome-terminal-server
```

The first two commands make a copy of gnome-terminal and gnome-terminal-server, it is useful if you want to come back. You can do that with:
```
sudo rm /usr/bin/gnome-terminal
sudo rm /usr/lib/gnome-terminal-server
sudo mv /usr/bin/gnome-terminal.bck /usr/bin/gnome-terminal
sudo mv /usr/lib/gnome-terminal-server.bck /usr/lib/gnome-terminal-server
```

If you have another DE you can try to do the same thing but with the terminal of your DE.

##### How can I disable DBus Activation?

Tilix has DBus activation enabled in the launcher. While for the vast majority of users this does not cause any issues, there have been a few edge cases found in rare situations such as the one identified [here](https://github.com/gnunn1/tilix/issues/870). If you are having this or an issue where the behavior of Tilix is subtlely different then Gnome Terminal, you can try to disable DBus Activation.

To do so, follow these instructions:

* Modify the ```/usr/share/applications/com.gexperts.Tilix.desktop``` file and change the line ```DBusActivatable=true``` to be ```DBusActivatable=false```
* Log out and back in again
