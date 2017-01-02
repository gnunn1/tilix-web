---
title: Terminix Year in Review
layout: post
description: A look back accomplishments, highlights and lowlights of the past year plus goals for 2017
icon: fa-flask 
date: 2017-01-01 00:00:00 +0100
---


Terminix is now just over a year old with my first commit in [Github](https://github.com/gnunn1/terminix) logged on the 29th of December 2015. Since then the project has seen almost 1,500 commits, 52 contributors and been starred almost 900 times in Github. Terminix is currently the [second](https://github.com/search?l=D&q=stars%3A%3E1&s=stars&type=Repositories) most starred D language project on Github. It’s been packaged, either officially or unofficially, for most of the major Linux distributions including Arch, Debian, Ubuntu, Fedora and OpenSUSE.

I thought it would be fun to take a look back at some of the project history, highlights and low-lights from the past year. I’ll then spend some time talking about goals and plans for 2017.

Terminix was born in November 2015 when I was looking for a new hobby project to work on in my spare time. I had previously written an Android diabetes application called OnTrack and was looking at doing something different this time around. I had done a lot of desktop applications in Delphi in the early 2000’s and enjoyed it, I thought it might be fun to go back to that well once again but build an application for Linux and GNOME.

The first order of business was deciding what application to build. Looking at some of the possibilities, one thing that struck me about terminal emulators was that no one was really building one that followed the [GNOME Human Interface Guidelines (HIG)](https://developer.gnome.org/hig/stable). While GNOME Terminal is a very capable application, at the time it wasn’t following the GNOME direction in terms of Client-Side-Decorations and other features.

Simultaneously I noted that most alternative terminal emulators that were based on GTK were stuck on GTK 2 with nebulous plans for GTK 3. Terminator for example at the time had a GTK 3 branch but progress on it was glacial with a GTK 3 version only being released last month. Guake, another popular terminal emulator also seemed stuck on GTK 2.

Finally, I was really impressed with what Christian Hergert was doing with [Builder](https://wiki.gnome.org/Apps/Builder), particularly around the user interface. Builder allows you to split documents and I really like the way it’s interface worked in this regard. It’s applicability to a tiling terminal emulator was readily apparent.

All those factors together led me to decide to build a tiling terminal emulator using GTK 3 and focused on the GNOME HIG.

The next order of business was selecting a language to use to build Terminix. I knew I didn’t want to use C as I don’t personally consider it to be a very productive language for GUI applications though I know some may disagree with that. I had also done some coding in Python at various points in my career and came to the conclusion I much prefer static typing versus dynamic typing so that was out.

That led to the new languages intended to fill some or all of the same niches as C, namely D, Go and Rust. This turned out to be a pretty easy decision since at the time the GTK bindings for Go and Rust were severely lacking in terms of API coverage. D on the other hand had a very complete GTK binding in the form of [GtkD](https://www.gtkd.org). The other thing that attracted to me to D was how similar in style it was to Java whereas both Go and Rust were more of a departure. Since my day job is working with Java and I’m not a natural polygot when it comes to computer languages, minimizing the context switching between the two was a nice benefit.

So that gives a bit of the history, let’s look at the highlights and low-lights of the last year. Terminix highlights for me include:

* Getting a 1.0 release pushed out in May 2016, I really didn’t want to be one of those projects that’s in perpetual beta.
* Working with a great community of contributors without whom none of this would be possible.
* Overall, I’ve been very happy with how the aesthetics and UX design of Terminix has turned out. While I know there is some discontent about the lack of tabs in Terminix, personally I really like the sidebar design. I’m also really pleased with some of the subtle aesthetic features like the way the scrollbar background matches the terminal background for popular themes.
* [Triggers](https://gnunn1.github.io/terminix-web/manual/triggers) and [Badges](https://gnunn1.github.io/terminix-web/manual/badges) support. A big goal of mine, and more on this later, is to crib some of the features from [iterm2](https://www.iterm2.com) which in my mind is the leading terminal emulator today. This was partially achieved in 2016 with the implementation of triggers and badges. Unfortunately, implementing these features require custom patches to the VTE so they haven’t been as widely available as I would like.
* At the end of the year, this cool Terminix web site that was created by Bilal Elmoussaoui with assistance from Ayo Isaiah.
* Localization in multiple languages thanks to the efforts of Philipp Wolfer and all the people who contributed translations. Terminix is truly a global effort.
* Being able to interact with the GNOME team has been a big personal highlight for me, they are great folks to work with and have been super helpful in answering my sometimes Captain Obvious questions on IRC. As an example, having GNOME designer Allan Day provide some [input](https://github.com/gnunn1/terminix/issues/372) on Terminix design plus being able to implement his mock-up for the Preferences dialog.
* Working with the D community. While D is a niche language, the community around it is truly awesome and I’ve never had a question on the forum or IRC go unanswered. I’d also like to single out Mike Wey who maintains GtkD, he’s been awesome about patiently answering questions and sorting out issues.
* Having an official Terminix package created for Debian thanks to the tireless efforts of Matthias Klump.

While highlights are always fun for me to talk about, I think in many ways the lowlights are more interesting:

* Dealing with the community aspects has been an interested learning curve, one thing I learned in this [interaction](https://github.com/gnunn1/terminix/issues/269) is that it is always better to take the high road. The initial reply I made is one I really wish I could have a do-over on.
* Similar to that, I’m pretty passionate about Terminix and I know in the early days on a couple of occasions that came across poorly when trying to get projects I depend on to implement features. I appreciate the maintainers of those projects not taking it personally and giving me the benefit of the doubt. Now that I’m dealing with the same issue but on the other side of the fence I realize how entitled I sounded at times. Needless to say, lesson learned.
* I have no regrets about choosing D for this project, however choosing a niche language certainly has it’s consequences. There have been a number of challenges with getting Terminix officially (packaged)[https://github.com/gnunn1/terminix/issues/25] for Linux distributions. Also, I suspect it’s been a detriment to attracting coding contributors simply because people are unfamiliar with D. Having said that, I think there are a number of exciting things happening in the D community that will improve both of these issues.
* While I have written a couple of patches to the VTE, I haven’t come anywhere near my goals on this front. This really impacts Terminix because a lot of the cooler features I’d like to tackle require changes in the VTE. My lack of skills with C plus the need to divert my learning budget to a new job has really hampered this. This isn’t likely to change in the future, hopefully the project can attract someone with the necessary C skills, desire and interest to make some of these things happen.

So with that out of the way, let’s talk about what 2017 will bring. I have some ambitious goals and it will be interesting to see how many can be achieved. One thing you will notice, and I mentioned this earlier, is a fairly constant referencing of (iterm2)[https://www.iterm2.com/] with regards to features. 

At this moment I think [iterm2](https://www.iterm2.com) is the best terminal emulator available, unfortunately it’s only available on OSX. While I’m not so arrogant as to think I can clone it 100% on Linux, it’s definitely an inspiration for many of my goals that I list below. If you are using OSX, I highly recommend checking it out.

Here’s my goals for 2017:

* Implement bookmark support for paths, commands, SSH and FTP.
* Similar to iterm2, enable the SCP of files by dragging and dropping them onto the terminal with the remote SSH connection.
* Implement a high-level D wrapper for the DBus API. A number of features depend on this such as a gnome-shell provider.
* Re-visit the sidebar UX again versus tabs and other UI options. No guarantee that the UX will actually change as a result, however I do think there is still room for improvement and suggestions from the user community are the best way to drive them out.
* Implement support for tmux control mode similar to what iterm2 offers. This will be challenging since I’m not a tmux user, hoping someone from the community can step up and make this happen.
* General code clean-up and re-factoring. Some of my modules have gotten way too large, the functionality really needs to be split up into more discrete components.
* Support sending control codes from the shell to terminix similar to what iterm2 offers with it’s custom control codes. Requires patches to the VTE to make it work.
* Create a patch for the VTE to properly support triggers in the VTE rather then the hack my current patch does.
* Attract someone with C skills to work on VTE patches to support the afore-mentioned features where it is required.

Well that’s it for the year in review, it’s been a fun ride so far and I look forward to what 2017 brings. Thanks to everyone who participated in Terminix development so far, we couldn’t have made it this far without you.

Gerald Nunn