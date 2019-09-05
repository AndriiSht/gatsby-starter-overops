---
title: "Quick Intro to Automated Root Cause"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "This is the meta description for this page"
---

## Introduction
The Automated Root Cause page provides a powerful mechanism to get to the root of errors and exceptions in production and staging environments. The page is divided into three panes that provide information about the event to create a complete picture.

![alt-текст](https://files.readme.io/2b6b13f-arc-screen.PNG "Текст заголовка логотипа 1")

## Analytics Pane
The Analytics pane is located at the top left of the page, and displays important details relating to the impact of the error in the application: the type of the error, when it was first seen, the server/application in which it occurred, and how many times it's been detected.

![alt-текст](https://files.readme.io/1679dab-analyticspane.PNG "Текст заголовка логотипа 1")

## Error Graph
The Automated Root Cause page provides a powerful mechanism to get to the root of errors and exceptions in production and staging environments. The page is divided into three panes that provide information about the event to create a complete picture.

The Error Graph is located at the top of the page and it provides the context for the event by displaying its tendencies across servers/applications in a specific timeframe. Learn more about the Automated Root Analysis Graph .

Click the JVM or Server labels to view the error volume on a specific machine or application directly. Hover over the occurrences label to display the error rate (the number of times this error has occurred and out of how many times the method containing it was called).

Click Open in Dashboard at the top right corner to open and select this event in the OverOps Dashboard. Click Go to snapshot on any point in the graph to jump to the code and view the current variable state.

![alt-текст](https://files.readme.io/5e58a14-mceclip1.png "Текст заголовка логотипа 1")

## Call Stack
The Call Stack pane displays the chain of methods within the environment leading up to the event. The first method in line is the last method on a non 3rd party code within your application. The  icon in the method indicates that the variable state has been detected by the micro-agent.

When an exception is caught and re-thrown once or more within the thread, the Related Events drop-down displays the error analysis (available only when such exceptions exist).

At the bottom of the stack the machine name and the environment thread name in which this error occurred appear. 3rd party code is hidden by default and shown by switching on Show 3rd party methods at the bottom of the stack. To copy the full stack to the clipboard, click COPY STACK.

![alt-текст](https://files.readme.io/a98a38f-callstack2.png "Текст заголовка логотипа 1")

## Source Code View
By default, the Source Code View shows a decompiled Java version of the bytecode executing within the environment at the moment of error. Hover over any highlighted variable to display its value and jump to see its full contents within the variable grid. The row in which the error occurred is highlighted, as depicted below.

![alt-текст](https://files.readme.io/e8f9943-Screen_Shot_2016-08-18_at_12.42.03_PM.png "Текст заголовка логотипа 1")

## Recorded Variable and Object State
Recorded Variables displays the variable values and objects accessible from the method. Objects can be explored up to ten levels deep into the code. Click the  button that appears when hovering over the object, to view its contents as a JSOB. The content can be copied to the clipboard.

The Recorded Variables pane contains all local variables and parameters (including "this" in non-static methods). The first method also contains thread-local variables defined for this thread as well as SLF4J and Log4J Mapped Diagnostics Context (MDC) values.

The choice of the collected variables most relevant within an allocated timeframe is determined by the micro-agent using an adaptive machine learning algorithm. The selection process involves which and how many variable to collect, the number of items to collect, the length of string to capture, etc.

Click here to learn more about object and variable state.

![alt-текст](https://files.readme.io/9e49181-mceclip04.png "Текст заголовка логотипа 1")
