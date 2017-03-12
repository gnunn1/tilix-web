---
title: Titles
id: titles
layout: default
---
### Titles

Tilix support using variables in the various titles and names it allows to be configured. This enables the title to better reflect the current state of the application, session or currently focused terminal. Variables can be used in the following locations:

* Window title
* Session name
* Terminal title
* Badge

The following terminal variables are supported and are determined based on the currently focused terminal:

Variable | Description
-------|------------
${title} | The title of the terminal
${iconTitle} | The icon title of the terminal
${id} | The numeric terminal ID (i.e. 1,2,3,4)
${directory} | The current working directory in the terminal
${columns} | The number of columns in the terminal
${rows} | the number of rows in the terminal
${hostname} | the hostname of the current session, availability dependent on the VTE script being configured on remote systems or triggers
${username} | the current username, requires trigger support and an appropriate trigger be configured

The following additional variables are supported in all titles except terminal titles:

Variable | Description
-------|------------
${appName} | The name of the application, i.e. Tilix
${sessionName} | The name of the session
${sessionNumber} | The number of the session, i.e. session 2 out of 4 active