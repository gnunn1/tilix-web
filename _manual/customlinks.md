---
title: Custom Hyperlinks
id: customlinks
layout: manual
description:  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacinia finibus ullamcorper. Fusce dictum sagittis eros nec interdum. Ut et posuere leo. Morbi at augue quis augue convallis euismod ac et dui. 
---
Tilix allows custom hyperlinks to be defined using regular expressions. These links can then be clicked on to launch an application passing information from the match to the application.

When configuring the application to be launched, the token ```$0``` can be used to represent the match obtained from the regular expression. If the regular expression includes groups then ```$1``` is the first group, ```$2``` the second group, etc.

Here is a screenshot showing an example of using this feature to launch gedit with the filename and line number based on a regular expression that includes two groups.

![]({{site.baseurl}}/assets/images/manual/links.png)
