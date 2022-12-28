---
title: Titles
id: titles
layout: manual
description:  Identifying terminals at a glance can be challenging when multiple terminals are displayed simultaneously. Tilix supports customizing the titles of terminals, sessions and applications to make this process easier.
---
Tilix support using variables in the various titles and names it allows to be configured. This enables the title to better reflect the current state of the application, session or currently focused terminal. Variables are available within a particular scope and can always be used in higher scopes. For example, the ${title} is a terminal scope variable but can be used in session and application titles where it reflects the currently active terminal.

Variables can be used in the following locations:

* Window title
* Session name
* Terminal title
* Badge
* Custom links
* Triggers

The following variables are supported at **terminal** scope and are determined based on the currently focused terminal:

| Variable     | Description                                                                                                                  |
|--------------|------------------------------------------------------------------------------------------------------------------------------|
| ${title}     | The title of the terminal as reported by the terminal                                                                        |
| ${iconTitle} | The icon title of the terminal                                                                                               |
| ${id}        | The numeric terminal ID (i.e. 1,2,3,4)                                                                                       |
| ${directory} | The current working directory in the terminal                                                                                |
| ${columns}   | The number of columns in the terminal                                                                                        |
| ${rows}      | the number of rows in the terminal                                                                                           |
| ${hostname}  | the hostname of the current session, availability dependent on the VTE script being configured on remote systems or triggers |
| ${username}  | the current username, requires trigger support and an appropriate trigger be configured                                      |

These variables are available at **session** scope:

| Variable               | Description                                                       |
|------------------------|-------------------------------------------------------------------|
| ${activeTerminalTitle} | The title of the current terminal with all variables substituted. |
| ${terminalCount}       | The total number of terminals in the session                      |
| ${terminalNumber}      | The number of the currently active terminal                       |

The following additional variables are supported in all titles except terminal titles:

| Variable         | Description                                               |
|------------------|-----------------------------------------------------------|
| ${appName}       | The name of the application, i.e. Tilix                   |
| ${sessionName}   | The name of the session                                   |
| ${sessionCount}  | The total number of sessions                              |
| ${sessionNumber} | The number of the session, i.e. session 2 out of 4 active |
