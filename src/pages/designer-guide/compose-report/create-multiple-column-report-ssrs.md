---
title: Create Multiple-Column Report in Standalone Report Designer
description: The columns in detail section is printed once for every row in the data source similarly to a repeater and this happens vertically.
canonical: /enterprise-reporting/designer-guide/report-designer/compose-report/create-multiple-column-report-ssrs/
---

# Create Multiple-Column Report

Multiple column report displays data in multiple sets of columns across the page. On report print action, prints adjacent columns until there is no free space left on a page. You cannot design a report which has a multi-column layout on the top half of the report, and a table layout on the bottom half of the report.

Prefer watching over reading? Check out this video for creating and configuring a multi-column report:

`youtube: https://www.youtube.com/watch?v=dje7I8qE3Ps`

## Properties

Open or create a table report,

![Grouping Aggregate](/static/assets/on-premise/images/report-designer/compose-report/multi-column/report-design.png '#width=300px')

Now, open the `Report Properties` in the properties panel by focusing the mouse pointer outside of the design area. Multi-column properties are listed under the `Page Column` category in the properties list.

![Page column properties](/static/assets/on-premise/images/report-designer/compose-report/multi-column/multi-column-properties.png '#width=300px')

In `Columns` property, provide the number of columns in the report.

In `Column Spacing` property, type the width of the space between columns.

Then set the required `Margin` and `Paper Size` properties.

![Set page column properties](/static/assets/on-premise/images/report-designer/compose-report/multi-column/set-properties.png '#width=300px')

## Preview

Click on the `Preview` button, now the report preview will be displayed as a single column. To view the table in multi-column layout, click `Print Layout` option in Report Viewer toolbar.

![Print Layout](/static/assets/on-premise/images/report-designer/compose-report/multi-column/print-layout.png '#width=250px')

In export actions such as HTML, Excel, Word, and CSV, a multi-column layout is displayed as a single column. Only `PDF` and `Power Point` rendering formats displays data in multiple columns.

![Multi column report](/static/assets/on-premise/images/report-designer/compose-report/multi-column/multi-column-report.png)

> Download the above report design from [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/compose-report/create-multiple-column-report-ssrs.rdl)