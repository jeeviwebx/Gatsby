---
title: Add filters to chart data region | Standalone Designer
description: This section describes how to add filters on chart category and series group in Standalone Report Designer.
canonical: /enterprise-reporting/designer-guide/report-designer/report-items/chart/add-filters-to-chart-data-region/
---

# Add filters to chart data region

Filters can be used to filter data in the chart data region to include or exclude specific values from display or to provide a different view of the dataset in multiple data regions. When processing the report, the filters applied in the report parts are processed first on the dataset, and then on the data region, and then on groups.

Prefer watching over reading? Check out this video for applying filters to chart data region:

`youtube: https://www.youtube.com/watch?v=flTC8rMX-ec`

## Set filter on a chart category group

1. Select chart data region in the design area.
   ![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/chart/add-filter-to-chart-data-region/select-data-region.png)
2. Switch to `DATA` tab,
   ![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/chart/add-filter-to-chart-data-region/switch-to-data-tab.png '#width=385px')
3. In the `DATA` assign panel, under the column section click on the `Settings` icon.
   ![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/chart/add-filter-to-chart-data-region/filter-data-menu.png '#width=315px')
4. Now, click on the `Filters...` option in the menu. Now, the filter dialog will be opened like below.
   ![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/chart/add-filter-to-chart-data-region/filters-dialog.png '#width=385px')
5. Refer [Filter Data](./../../../compose-report/filter-data/) section and create required filter expression in the filter dialog and click `OK`.
   ![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/chart/add-filter-to-chart-data-region/create-filter-expressions.png '#width=385px')
In the above image, the filter equation is created to filter the data in the data region based on `Product Category` data field.

On report preview, using the `OrderYear` and `ProductCategory` report parameters, the sales of `Q1`, `Q2`, `Q3` and `Q4` is displayed in the chart data region based on applied filters.

![Filter dialog](/static/assets/on-premise/images/report-designer/report-items/chart/add-filter-to-chart-data-region/report-preview.png '#width=550px')

Similarly, you can set filters on a `chart series group`.

> Download the above report design from the [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/chart/add-filters-to-chart-data-region.rdl)