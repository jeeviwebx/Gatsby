---
title: Keep Headers visible while scrolling | Standalone Designer
description: This section describes how to keep headers visible while scrolling of SSRS report in the Standalone Report Designer.
canonical: /enterprise-reporting/designer-guide/report-designer/report-items/tablix/keep-column-headers-visible-while-scrolling-in-ssrs/
---

# Keep Column Headers Visible While Scrolling in SSRS

To keep column headers visible while scrolling through the report, follow the below steps.

1. Refer to the [Simple Table Design](./../../../report-items/tablix/design-ssrs-rdl-report-using-table/) section and create a table report as shown below.

    ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix/keep-headers-tablix/simple-table-design.png '#width=315px')

2. Click on the surface of the table design to enable grouping panel.

    ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix/keep-headers-tablix/enable-grouping-panel.png '#width=315px')

3. Refer to the [Advanced Mode](./../../../report-items/tablix/grouping-panel/#advanced-mode) section to enable advanced mode in the grouping panel.

4. Once you click on the `Advanced Mode`, it will show the static columns in both the row and column group. Now, select the static column presented in the row group pane (Header Row Group).

    ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix/keep-headers-tablix/select-static-group.png '#width=355px')

5. In the properties panel, enable the `Fixed Data` and `Repeat On New Page` properties checkbox and set `Keep With Group` as `After`.

    ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix/keep-headers-tablix/set-repeat-header.png '#width=315px')

    Now, preview your report and try scrolling. Notice that the column header looks messy because its background is transparent by default.

    ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix/keep-headers-tablix/preview-before-applyig-color.png '#width=410px')

6. To fix this, just change the background color of the cells in the header row.

    ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix/keep-headers-tablix/preview-after-applyig-color.png '#width=315px')

    ![Open group menu](/static/assets/on-premise/images/report-designer/report-items/tablix/keep-headers-tablix/preview-first-page.png '#width=410px')

> Download the above report design from the [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/tablix/keep-headers-visible-while-scrolling-in-tablix.rdl).