---
title: "What's New in 4.42"
metaTitle: "Syntax Highlighting is the meta title tag for this page"
metaDescription: "This is the meta description for this page"
---

## 4.42.7 September 1, 2019
#### Alerts Management
* Updated the page name to “Manage Alerts”

![alt-текст](https://files.readme.io/5ede2f8-manage-alerts.PNG "Текст заголовка логотипа 1")

* Implemented text updates in the PagerDuty channel
* Updated the sample values for "Webhook" and "ServiceNow" channels
* Updated validation message errors when adding and editing alerts
* Adding a custom view (filter) alert: The Name drop-down list has been adjusted to include default private views (“Last Day” and “Last Hour”)
* Delete an alert now displays a confirmation dialog

#### Settings Dashboard

* Added an 'Advanced' section
* Changed the "Learn More" link in the Slowdowns tab of the Settings Dashboard
* User controls have been enabled for the "Viewer" role in Team Management screen
* Data Redaction Setting texts were updated
* Filter Code bug fixes for UI components
* For basic orientation we’ve added the logged-in user name to the top bar

#### Installation

* When the user clicks Install, the application will open a window with the installation key (for regular Collectors) or installation token (for Multi-Environment Collectors) that can be copied, before directing the user to the installation page. Then, the user can simply enter the key or token in the field and create the one-liner required for the installation. Whether the user receives a key or token is set up in advance in the backend by the Service Engineer (SE).
* Fixed bugs in the installation and in the installation UI

#### Application

* Manage Alerts function: Added an option In the User Menu in the right hand corner to go directly to the configured alerts in the Alerts dashboard
* In the Jira Advanced settings, changed the Team Settings option text to clarify that all Jira settings are being used for all teammates with this option enabled
* Advanced Settings: The Advanced Settings options that appears in the Installation Keys window are now all fully enabled so that the user can choose to turn each setting on or off (toggle). The defaults for these settings have not changed.

#### Backend

* Resurfaced event: When an event resurfaces in the ARC screen, the user will now see an indication on this in the upper left corner
* Application Tier name: For events that are associated with specific App-Tiers labels then the Application-Tier name or names (for multiple tiers) will also appear in the Event details pane
* Updated the Method summary in ARC screens. When clicking the i icon, the Method Summary popup includes the following information
  * Class version - For example '52.0'.
  * Source file name - For example ‘class.java’ or ‘class.scala’.
  * Cart Status: Full / Available
  * Link to more info on controlling the cart size in our documentation
  * [Optional - will appear if relevant]: We provide an indicator that's shown when some of the variables state on the method are missings

## 4.42.6 August 29, 2019
#### Backend
* Added Micrometer, Thymeleaf, and attoparser to the blacklist (known 3rd party libraries for which information is not collected)
* Bug fixes

## 4.42.5 August 21, 2019
#### Collector
* The Collector will stop writing snapshots to the disk when the disk is nearly full: The purpose of this update is to implement a simple safeguard that prevents filling the disk completely, thus rendering the environment non-functional. If the disk space is past a certain percentage it will then write an error to the collector's service log, along with disk space details and the relevant file name. The default percentage cutoff point is 90%, and is configurable in the Collector.properties using the maxDiskUsagePercentage attribute.
* Fix to the Collector to properly report its connectivity status to the hybrid storage server.

#### Backend
* Added new error type to identify a storage error case where the storage server settings have changed during snapshot processing and the older storage server can’t be accessed anymore
* Minor UI fixes and bug fixes related to the ARC screen

#### Installation
* To support customers that use a local Collector rather than a remote one, we’ve added the flag --local_collector to the one-liner installation. See [Installing a Local Collector](https://doc.overops.com/docs/installing-a-local-collector) for details.

## 4.42.6 August 29, 2019
#### Backend

* Important fix: We detected an issue in version 4.42 in one of the upgrade scenarios (upgrading the Collector while Agents are running). This release fixes that problem, so we recommend that you upgrade to this release to avoid any potential issues. The upgrade process may result in momentary data loss during the Agent re-connection process after the Collector upgrade (this usually takes a few seconds).
* ug fix in the Collector installer.
* Bug fix related to connecting older Agents to newer Collectors.

## 4.42.5 August 21, 2019
#### Backend
* Internal/minor bug fixes

## 4.42.2 August 16, 2019
#### Application
* Fixed a bug that could cause delayed processing of events

## 4.41.1 August 15, 2019
#### Backend
* Internal/minor bug fixes

## 4.42 August 14, 2019
This release includes new features as well as major improvements, including the launching of our Multi-Environment Collector (MEC), a new integration with New Relic, full support for Oracle, improvements to the ARC screen, and some pretty cool updates to the Alerts and Settings features.

#### Installation
This release features the addition of the OverOps Multi-Environment Collector (MEC), which enables you to onboard new applications and functional groups in an easy and repeatable way. MEC creates a centralized management solution that ensures easy installation and addition of new applications and environments. Refer to [this article](https://doc.overops.com/docs/multi-environment-collector) to learn more.
Note that MEC is an addition to our existing installation, and doesn't affect the current installation.

#### Application
* OverOps has integrated the New Relic application performance monitoring (APM) software into our system. In this integration, links are inserted directly into the log files so that deep, code-level context can be surfaced and accessed during the troubleshooting process using a single click. To learn more, check out the New Relic Integration integration article.
* Oracle Support: In this release, OverOps has added full support for the Oracle database in On-Premises deployments.
* Extended the validity of the API token to 5 years (instead of the current 1 year).

***Alert Dashboard Updates***
* Updated the UI and flow of adding a new alert in the Alerts dashboard. See [Alerts Management](https://doc.overops.com/docs/managing-alerts) for details.

![alt-текст](https://files.readme.io/70fc597-alert-for-rn.png "Текст заголовка логотипа 1")
* Updated the UI and flow of viewing and managing active (existing) alerts in the Alerts dashboard. See Alerts Management for details.
![alt-текст](https://files.readme.io/a9caf89-alert2-for-rn.png "Текст заголовка логотипа 1")

* Accessing an alert from a link: Enables you to access and edit alerts for any view via a direct link:
* When opening the url of a view that has alerts, the page will behave in the same way as when you click Edit in the Active Alerts page.
* When opening a URL of a view with no alerts settings, the page will also behave in the same way as when you click Edit in the Active Alerts page; however, in this case, all the alert definitions will be empty.
* Alert dashboard bug fixes:
  * Adding and editing custom alerts and new alert settings fixes
  * Adding a new alert to an environment even if there’s no existing alert (you can only set up one alert per environment) fixes
  * UI text fixes including error updates

***ARC Screen Improvements***
* In rare cases where an error occurs while trying to open an ARC screen, we have added the ability for the user to report those errors directly to OverOps, helping us to review them and improve the product experience. In cases where our backend is not able to access our reporting interface (due to Internet connectivity issues), the report will be saved locally on the backend (/logs/tomcat/tale-fail.log).
* Optimizations of the ARC screen loading and reduction of timeout errors
* Fix of data fidelity between the ARC graph and the Dashboard graph
* Updated the snapshot tooltip to provide more information
* UI and performance updates
* The maximum inactivity duration for a user session of a SAML-authenticated user and a User/Password-authenticated user has been updated to 5 hours and 1 week respectively.
* Error message improvements: Added Environment Name and Environment ID to the No-Permissions error (ERR-8001) message to make it easier for the user to determine to which environment they need to request access.