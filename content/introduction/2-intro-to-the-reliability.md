---
title: "Quick Intro to the Reliability Dashboard"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "This is the meta description for this page"
---

## Introduction
OverOps Reliability Dashboards provide a full overview of any environment, displaying the reliability state of an application - from the high level summary all the way to the drill down into what exactly is failing. These dashboards, which are built on Grafana software, are available as part of the OverOps application and also can be integrated with your Grafana instance.

## Reliability Report
OverOps provides information about new errors, regressions for existing errors or spikes, and code slow downs. The information is provided using three different dimensions for each selected environment(s):

1. Applications - Each application (microservice or monolith) running within the selected environment(s)
2. Deployments - Code versions
3. Code Tiers - Code tiers (custom or 3rd party) running within the selected environment(s)

![alt-текст](https://files.readme.io/8371109-8075438-Relability_Dashboards_Guide_-_Google_Docs-4.png "Текст заголовка логотипа 1")

The Reliability Dashboards are built on the data collected by OverOps and provide an actionable report, which enables users to evaluate a service's reliability, to figure out anomalies, and to determine which parts of the system are unstable. Together, these capabilities make it possible to deploy fast and safely and “fail forward” along with the ability to perform full root cause analysis for the top priority items.

## Reliability Report

OverOps provides a set of out-of-the-box dashboards that enable you to examine the reliability of code across multiple environments (e.g., testing, staging, production); to easily spot anomalies, both severe and non-severe; and to drill down easily into their source, with a direct integration into the OverOps native Automated Root Cause (ARC) analysis module. The ARC shows the complete source code, variable state, DEBUG-level log statements and JVM / system state behind any log error, exception, and slowdown within a running application.

The following dashboards are provided:

[Reliability Scorecard](https://doc.overops.com/docs/reliability-scorecard-dashboard) – this dashboard acts as a “cockpit” from which an entire environment or set of environments can be observed in real time, where the reliability of that environments is continuously analyzed and scored across three different dimensions: deployment, applications and tiers.

[Reliability Analysis](https://doc.overops.com/docs/reliability-analysis-dashboard) – this dashboard provides a deeper visual analysis into the reliability and into any anomalies (e.g., new errors, regressions, slowdowns), with a target set of applications, deployments and tiers. This dashboard provides direct links into specific drill down dashboards, which enable teams to focus on specific anomalies, based on configured and automatically assigned severities.

[Performance](https://doc.overops.com/docs/performance-dashboard) – this dashboard provides a breakdown of all points within the application code that are called by a third party or by JVM code to respond to an incoming foreground or background request. These points within the application code are known as application entry points or transaction handlers.

OverOps automatically detects all code entry points and collects live information around how many times they are called, their response times, failures, and more. Machine learning algorithms detect and highlight slowdowns and bottlenecks and provide an ARC analysis for each.

[New Errors](https://doc.overops.com/docs/new-error-dashboard) – this dashboard lists all new errors introduced in the current time-frame. Each entry highlights when that error was introduced, its exact location in the code, and absolute / relative rate. An ARC analysis is provided for each error to help team distinguish between errors stemming from cod vs. infrastructure-related reasons. Each error is also assigned a severity level based on the thresholds set within the Settings dashboard.

[Increasing Errors](https://doc.overops.com/docs/increasing-errors-dashboard) - this dashboard lists all errors that experienced a significant increase in the current timeframe. Each entry highlights when was that has increased, its exact location in the code and change in percentage between the current timeframe and its baseline period. OverOps provides an ARC analysis for each error to help team distinguish between errors stemming from code vs. infrastructure related reasons. Each error is also assigned a severity level based on the thresholds set within the Settings dashboard.

[Unique Errors](https://doc.overops.com/docs/unique-errors-dashboard) - this dashboard provides a deduplicated list of all errors taking place within a target environment(is) and a set of filters that are similar in capability to the event console in https://app.overop.com.

[Reliability Trends](https://doc.overops.com/docs/reliability-trends-dashboard) - this dashboard allows you to see how well applications and deployments are doing with respect to the four promotion gates by which reliability is measured over time, namely error volume, unique count, new errors, and regressions / slowdowns.

[Event Diff](https://doc.overops.com/docs/event-diff-dashboard) - this dashboard provides a simple and effective way of comparing releases - or two instances of an application running on different nodes - with one another.

## How To Access the Reliability Dashboards
### OverOps Built-in Grafana

Reliability dashboards are integrated into OverOps product and can be accessed from the OverOps Dashboard by clicking the "Reliability Dashboards" icon in the top navigation bar.

![alt-текст](https://files.readme.io/007dcb8-top-navigation-bar.PNG "Текст заголовка логотипа 1")

### OverOps Built-in Grafana
There's also an option to integrate OverOps with existing Grafana instance. All the information about how to connect any Grafana instance to OverOps can be found here.

## Additional Resources

[Reliability Dashboards Overview](https://docs.google.com/presentation/d/1Btu0Ol0cMK_PvYxnR6ecuzsrpZmJvOt5qwiRLE_11bE/present?slide=id.g47b9d08d09_0_127)