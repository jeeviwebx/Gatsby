---
title: Compose report features in Standalone Report Designer
description: Standalone Report Designer provides RDL features such as linking, filter, sorting, grouping, expressions etc allows you to create reports to present the data.
canonical: /enterprise-reporting/designer-guide/report-designer/compose-report/
---

# Compose report

## Toolbar

The Report Designer toolbar contains a set of icons or buttons that allows you to perform common report designing operations.

## Properties panel

The properties pane significantly simplifies report setup and styling. Allows customizing the appearance of report items and editing their property values. Users can specify static values or expressions as values in the report item properties.

Refer [Properties panel](./../compose-report/properties-panel/) section to set and style report items.

## Ruler

The Ruler in the Web Report Designer enhances precision by allowing users to accurately position report items. It serves as a visual guide, helping maintain a clean and well-organized layout throughout the design process.

For detailed information on how to use the Ruler for precise alignment and layout management, refer to the [Ruler](./../compose-report/ruler/) section.

## Page Margin

The Page Margin feature in the Web Report Designer provides a clear visual representation of the report’s margin areas. It helps users effectively manage the layout and configure report-level properties with greater accuracy.

For more details, refer to the [Page Margin](./../compose-report/page-margin/) section.

## Property Navigator

The Property Navigator displays the report structure in a hierarchical format, enabling users to quickly locate and select report elements to configure their properties.

Refer to the [Property Navigator](./../compose-report/property-navigator/) section for more details on locating and selecting report elements to configure their properties.

## Report Explorer

The Report Explorer panel offers an organized, hierarchical view of the report structure with quick navigation, selection states and search capabilities.

Refer to the [Report Explorer](./../compose-report/report-explorer/) section for easy access to selecting report items directly from the panel.

## Multi select report item properties

You can edit common properties of multiple report items at once. Tablix item have styling options, such as apply formatting by selecting specific cells, rows, or columns.

Refer [Report item multiselection](./../compose-report/report-item-multi-selection/) section to edit properties of multiple report items.

## Filtering

Provides support to add filters to an embedded data set or shared data set, data regions, and data region groups, including detail groups.

Refer [Filter data](./../compose-report/filter-data/) section to add or remove filters in report.

## Sorting

Supports adding sort expressions to chart category and series groups and pivot table groups. It controls the order in which data is displayed in a data region item of the report (either as ascending or descending).

Refer [Sort data](./../compose-report/sort-data/) section to control the order the data either in ascending or descending.

## Grouping

User can add grouping to display data in a hierarchy view by organizing nested, adjacent, and recursive hierarchy groups. You can use a dataset field, expression or other values to group data.

Refer [Group data](./../compose-report/sort-data/) section display data in a hierarchy view.

## Drill through reports

An action property is available to specify the drill through report path. It allows end users to click on a data value in the report to view related data information in the child report. A separate child report can have detail/summary data. Also, users can add parameters to filter data based on user selection.

Refer [Report linking](./../compose-report/link-data/#report-linking) section to specify the drill through report path.

## Hyperlink

Provides property options to set hyperlink actions to text boxes, images, charts, and tablix. The hyperlink can contain data field, static or dynamic URL value expression.

Refer [Hyperlink](./../compose-report/link-data/#hyperlink) section to set hyperlink actions to text boxes, images, charts, and tablix.

## Drilldown action

Drilldown action can be used to create an interactive report which allows user to enable expand-collapse action for tablix in the report.

Refer [Drilldown action](./../compose-report/create-ssrs-drill-down-report/) section to handle drilldown properties in designer.

## Expression builder

Report Designer provides an expression builder that allows you to create simple and complex RDL expressions.

Refer [Expressions](./../compose-report/expressions/) section to create expressions in expression builder.

## Format data

You can format the data to represent the it in various forms that includes Numbers, Currency, Date, Time, Scientific, Percentage and Custom format.

Refer [Format data](./../compose-report/format-data/) section to handle formatting for data.

## Unit switcher

You can switch the unit type in the report, to convert from one unit type to another.

Refer [Unit switcher](./../compose-report/unit-switcher/) section to switch the unit type in the report.

## Code module

You can embed a custom code or custom assemblies to a report or add references to custom code embedded in a report or generated with custom assemblies.

Refer to the [Code module](./../compose-report/code-module/) section to add and handle custom code in report.

## Background Image

The `Background Image` property allows you to display an image in the background of report sections such as Report, Header, Body, or Footer or a report item such as a rectangle. The image source can be a URL, a dataset field, or an embedded image.

Refer to the [Background Image](./../compose-report/background-image/) section to add a background image in the report sections and report items.

## Multiple Column Report

Multiple column report displays data in multiple sets of columns across the page.

Refer to the [Multiple Column Report](./../compose-report/create-multiple-column-report-ssrs/) section to create a report that displays data in multiple columns.

## Interactive Sorting

Interactive sorting enables users to toggle between ascending and descending order in the Report Viewer by setting interactive sorting on a textbox within a data region.

Refer to the [Interactive sorting](./../compose-report/interactive-sorting/) section to enable interactive sorting toggle in the column header

## Document Map

A document map is a navigational feature that displays a separate side pane with a set of navigational links in hierarchical structure when you view a report. A user can click the content in the list, to navigate to the report page that displays that item.

Refer to the [Document Map](./../compose-report/document-map/) section to navigate to the report page that displays that item.

## Bookmark

You can add bookmark links to specific report items, enabling navigation to different parts of the RDL report. The bookmark property value can be a custom string or an expression.

Refer to the [Bookmark](./../compose-report/bookmark/) section to add a bookmark link to navigate different parts of the RDL report.

## Layout Ordering

The layout ordering option is used to change the layout order of report items on the design area surface.

Refer to the [Layout Ordering](./../compose-report/layout-ordering/) section to order the selected object over all other intersected objects on the designer surface

## Report Variables

The report variables option helps you to add custom variables, which can be static text or expressions. You can create report variables when a report design demands a value or calculation to be used many times.

Refer to the [Report Variables](./../compose-report/report-variables/) section to add custom variables to the report.
