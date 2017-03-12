---
title: Automatic Profile Switching
id: profileswitch
layout: default
---
### Introduction

Tilix supports automatically switching profiles based on certain conditions which is useful in a variety of situations such as when switching users, connecting to different hosts, changing to sensitive directories, etc. At the moment Tilix supports triggering a profile change based on the following:

* username
* hostname
* current directory

Note that when an automatic profile change is active, the menu to switch to different profiles will be disabled.

### Local Configuration

Configuring profile switching in Tilix is done in the Advanced tab of the profile settings. Here you can configure the list of usernames, hostnames and directories that will trigger the profile change. The format used for the string is ```username@hostname:directory``` where either username, hostname or directory can be omitted but not all. Also at least one delimiter, either *@* or *:*, is also required to indicate which string is being represented.

Note that switching profiles based on username requires the use of a trigger to extract the username from the terminal output text.

### Remote Configuration

To enable profile changes when using SSH to connect to remote systems, the remote system must be configured to include an additional script or an appropriate trigger configured. 

If you opt for the script, first scp the script ```/usr/share/terminix/scripts/terminix_int.sh``` from your local system where terminix is installed to the remote system. You will then need to source this script on the remote system, the easiest way to do this is to modify the .bashrc of the user you use to connect to include the script. For example, add the following to .bashrc:

{% highlight bash %}
. ./terminix_int.sh
{% endhighlight %}

if you switch users on the remote system, you may need to source the script somewhere so it is available to all users.