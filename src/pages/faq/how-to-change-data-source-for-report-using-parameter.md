---
layout: post
title: Change connection string for data source dynamically
description: This document provides the details how to change the connection string for data source dynamically from a database
control: Bold Reports
documentation: ug
---

# How to change data source for a report using the parameter

A report can be previewed with different data sources by changing the data source value using a parameter. For this, you need to have a parameter in the report that specifies the data source name and database name and also you need to set the data source connection string as expression using the parameter value as reference, as shown in the following image.

![Product download page](/static/assets/standalone-report-designer/images/faq/datasource-expression-connection-string.png '#width=385px')

You can refer [here](https://help.boldreports.com/embedded-reporting/how-to/set-the-parameter-in-web-api-controller/) to know how to pass the parameter for Report Viewer from your applications.