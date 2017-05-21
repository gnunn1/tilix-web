---
title: Triggers
id: triggers
layout: manual
description:  Triggers are defined as regular expressions that is executed against content in the terminal. When a trigger matches content, a corresponding action is executed. 
---
*Note that trigger support requires that the GTK VTE widget be built with a tilix specific [patch](https://github.com/gnunn1/tilix/blob/master/experimental/vte/alternate-screen.patch), otherwise triggers are disabled. Arch users can access this functionality by installing the [vte3-tilix-git](https://aur.archlinux.org/packages/vte3-tilix-git) package.*

#### Introduction

Tilix supports the concept of triggers, these are regular expressions defined by the user that when matched against text output by the terminal trigger an action. A trigger consists of a regular expression, the action to execute and a parameter string. Depending on the action, the parameter may not be used at all, may be a single string or a semi-colon delimited list of variables.

The result of the regular expression can be referenced as tokens in the parameter, Tilix will substitute the tokens in the parameter prior to executing the action. The token $0 refers to the complete regular expression match. If groups were defined in the regular expression, the tokens $1, $2, $3, etc refer to the individual group captures.

#### Supported Actions

The following actions are supported by Tilix:

Action | Description
-------|------------
Update State | This action updates the state that Tilix maintains about the terminal in terms of things like what directory or hostname is currently active in the terminal. The variables *username*, *hostname* and *directory* can be used to update the state respectively, these represent . See further below for an example of how to use this.
Execute Command | This action executes the command provided in the parameter field.
Send Notification | Sends a notification to the desktop environment. Two variables are supported by this action, *title* and *body*.
Update Title | Updates the terminal title using the parameter field, it sets the override title specified in Layout Options.
Play Bell | Plays the bell noise, this action takes no parameters
Send Text | Sends the text in the parameter field to the terminal
Insert Password | Shows the password manager to enable a password to be inserted into the terminal

#### Options

Tilix has an option to limit the number of lines that are checked for triggers, this is intended to improve performance on slower hardware. Every time a change happens in the terminal, this is reported to Tilix as a block of text. This block might consist of just a single character when the user is typing, or it might consist of several thousand lines when outputting a large text file via cat.

In the later scenario, we may generally not be too interested in checking for triggers in all lines of text. When this option is active, Tilix will only check the lines changed from the end of the text. So for example, if a block of text consisting of 20,000 lines of text was received but the option limit was active at 256, only the last 256 lines would be checked.

#### Examples

Here are some examples to help you use this feature:

Regular Expression | Action | Parameter | Description
-------------------|--------|-----------|------------
^\[(?P&lt;user>.*)@(?P&lt;host>[-a-zA-Z0-9]*) | Update State | username=$1;hostname=$2 | Parses the username and hostname from a Linux prompt command that uses the following format: *[username@hostname directory]$*

#### How It Works

To get the most of out of this feature, it's important to understand how this works under the hood. As an overview, Tilix uses a GTK component called the VTE to perform the actual terminal emulation. When changes occur in the VTE, it triggers an event to notify Tilix but does not include any information about the change itself. In order to execute triggers, Tilix saves the current row and column reported by the VTE so that when the next change event happens only the delta is processed for triggers.

This means that any change in the terminal will be processed but the grouping of these changes is entirely up to the VTE. For example, when typing text Tilix will run triggers against each character entered by the user individually, it does not run triggers against the full command. 

When outputting large amounts of text, i.e. cat'ing a large file, the VTE tends to report changes in very large chunks. This makes perfect sense the VTE needs to maintain a certain level of performance and caps the framerate by omitting rendering of text when it is not needed. As a result, when the scrollback buffer is limited (default in Tilix is 8192), not all of the text may be available to Tilix since it has already scrolled out of range of the buffer.

Thus if you want Tilix to process triggers for every line of text, you must set the scrollback buffer to unlimited and the trigger lines option to unlimited.

