---
title: Switch Chart Type | Standalone Report Designer
description: This section describes how to change chart type at any point in report design using Standalone Report Designer.
canonical: /enterprise-reporting/designer-guide/report-designer/report-items/chart/switch-chart-type/
---

# Switch Series Chart Type

This section explains how to change the series chart type of chart report item during the report design using the chart type switcher in Bold Reports<sup>®</sup> Designer. You can change the series chart type using the `Chart Type` dropdown under series properties. To open specific series properties, choose the series name in `Choose Series` dropdown.

![Series selection](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/chose-series.png '#width=385px')

Clicking on the `Edit` icon, will display properties to customize the respective series.

![Series properties](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/series-properties.png '#width=385px')

Chart type switcher is listed under `Basic Settings`.

![Chart type switcher](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/chart-type.png '#width=385px')

Based on the present series chart type, compatible types will be listed under chart type dropdown. For example, if the existing series chart type is pie chart, the chart type dropdown will have types as shown below.

![Supported chart types](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/supported-types.png)

## Chart with single series

If the chart has single series, then changing the series chart type will directly change the chart to expected chart type. For example, if the report has a column chart with single series.

![Single series](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/single-series.png '#width=355px')

To change series chart type to `Line`, choose `Line` in chart type dropdown.

![Line chart](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/line-chart.png)

## Chart with multiple series

A chart containing multiple series may exhibit different behaviors during series chart type switching, depending on the source and target chart types. This document outlines the scenarios where either [individual chart series type switching](#individual-chart-series-type-switching) (affecting only the selected series) or [combined chart series type switching](#combined-chart-series-type-switching) (affecting all series collectively) takes place.

### Individual Chart Series Type Switching

Only the selected series is switched to the new chart type for the following source and target types.

<table>
<tr>
<th>Source Series Chart Type(s)</th>
<th>Target Series Chart Type(s)</th>
</tr>
<tr>
<td>All Column types</td>
<td>All Line and Area types</td>
</tr>
<tr>
<td>All Line types</td>
<td>All Column, Area and other Line types</td>
</tr>
<tr>
<td>All Area types</td>
<td>Column and Line types</td>
</tr>
<tr>
<td>Range Column</td>
<td>Range Area, Smooth Range Area and vice versa</td>
</tr>
</table>

For example, if the report has a column chart with multiple series.

![Multiple series column chart](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/multiple-series-column.png '#width=385px')

Choose a series for which you want to change its type.

![Series selection](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/choose-multi-series.png '#width=385px')

To change chart series type to `Line`, choose `Line` in chart type dropdown.

![Series type selection](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/choose-chart-type-line.png '#width=385px')

![Column Line mixed series chart](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/column-line-mixed-series.png '#width=385px')

### Combined Chart Series Type Switching

* All series chart types in the chart will be switched to the target chart type, provided that the source and target types belong to the same category. Please refer the following table to find the category of different charts.

    <table>
    <tr>
    <th>Chart Category</th>
    <th>Chart Types</th>
    </tr>
    <tr>
    <td>Proportion Charts</td>
    <td>Pie, Exploded Pie, Doughnut, Pyramid, Funnel</td>
    </tr>
    <tr>
    <td>Column Charts</td>
    <td>Column, Stacked Column, Stacked Column 100</td>
    </tr>
    <tr>
    <td>Bar Charts</td>
    <td>Bar, Stacked Bar, Stacked Bar 100</td>
    </tr>
    <tr>
    <td>Area Charts</td>
    <td>Area, Smooth Area, Stacked Area, Stacked Area 100</td>
    </tr>
    <tr>
    <td>Polar and Radar Chart</td>
    <td>Polar, Radar</td>
    </tr>
    </table>

    For example, if the report has a column chart with multiple series.

    ![Multiple series column chart](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/multiple-series-column.png '#width=385px')

    Choose a series for which you want to change its type.

    ![Series selection](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/choose-multi-series.png '#width=385px')

    To change chart series type to `Stacked Column`, choose `Stacked Column` in chart type dropdown.

    ![Series type selection](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/choose-chart-type-stacked-column.png '#width=385px')

    ![Multiple series Stacked Chart](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/multiple-series-stacked-column.png '#width=385px')

* All series chart types will be converted to the new type for the following source and target combinations. A warning dialog will be displayed to confirm this action before it proceeds.

    <table>
    <tr>
    <th>Source Series Chart Type(s)</th>
    <th>Target Series Chart Type(s)</th>
    </tr>
    <tr>
    <td>Range Column, Range Area, Smooth Range Area</td>
    <td>Range Bar</td>
    </tr>
    <tr>
    <td>All Column, Area and Line types</td>
    <td>All Bar types</td>
    </tr>
    </table>

    For example, a column chart with multiple series.

    ![Multiple series column chart](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/multiple-series-column.png '#width=385px')

    Choose a series for which you want to change its type.

    ![Series selection](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/choose-multi-series.png '#width=385px')

    To change series chart type to `Bar`, choose `Bar` in chart type dropdown.

    ![Series type selection](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/choose-chart-type-bar.png '#width=385px')

    A confirmation dialog will be displayed like below.

    ![Confirmation dialog](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/confirmation.png '#width=385px')

    Clicking `Yes` will change existing series types to `Bar`.

    ![Multiple series Bar Chart](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/multiple-series-bar.png '#width=385px')

    Clicking `No` will let the respective series unchanged.

    ![Multiple series column chart](/static/assets/on-premise/images/report-designer/report-items/chart/switch-chart-type/multiple-series-column.png '#width=385px')