---
title: Performance Settings | Standalone Report Designer
description: This section describes how to set the properties in the standalone report designer to improve report rendering performance.
canonical: /enterprise-reporting/designer-guide/report-designer/compose-report/performance-settings/
---

# Performance Settings

The Performance Settings section enables best practices and optimized ways for rendering RDL/RDLC reports in Bold Reports<sup>®</sup>. It includes properties that allow Bold Reports<sup>®</sup> to render millions of records in seconds. Here are the associated properties:

* `SmartRendering`
* `PageCreation`
* `VirtualEvaluation`
* `AutoGrowText`
* `FetchLimit`

1. Click on the outer grey surface of the report area and then click the **Properties** icon to open the **Report Properties**.
    ![open-properties](/static/assets/on-premise/images/report-designer/compose-report/performance-settings/open-properties.png '#width=400px')
2. The Performance Settings option is listed under the `Basic Settings` category. Click **Edit Settings** to open the **Performance Settings** secondary panel.
    ![report-properies](/static/assets/on-premise/images/report-designer/compose-report/performance-settings/report-properties.png '#width=400px')
3. The **Performance Settings** panel will be opened as shown below.
    ![performance-settings-panel](/static/assets/on-premise/images/report-designer/compose-report/performance-settings/performance-settings-panel.png '#width=400px')

## Smart Rendering

Smart rendering optimizes report rendering. Enabling smart rendering updates the dependent properties as follows:
* `AutoGrowText` will be set to `false`
* `PageCreation` will be set to `OnDemand`
* `VirtualEvaluation` will be set to `true`
* `EnableFetchLimit` will be set to `true` and `FetchLimitCount` becomes visible and setting it to `1000`.

> If you modify any of the above values, the `SmartRendering` property will be set to `false`. Disabling smart rendering will revert the dependent items to their default states.

![Smart rendering](/static/assets/on-premise/images/report-designer/compose-report/performance-settings/enable-smart-rendering.gif '#width=400px')

### Auto Grow Text

The `AutoGrowText` property adjusts the text box height dynamically based on the content. When `AutoGrowText` set to true, the viewer may take additional time to calculate the height of each text box, depending on the data. You can enable or disable `AutoGrowText` for a report in the designer. By default, `AutoGrowText` is set to true. Configure `AutoGrowText` as shown below and click **Update**.

![auto-grow-text](/static/assets/on-premise/images/report-designer/compose-report/performance-settings/auto-grow-text.png '#width=400px')

### Virtual Evaluation

`VirtualEvaluation` reuses tablix cell objects to optimize memory usage. To enable it for a specific report, turn on the `VirtualEvaluation` property in the designer. By default, `VirtualEvaluation` is set to false. Configure `VirtualEvaluation` as shown below and click **Update**.

![virtual-evaluation](/static/assets/on-premise/images/report-designer/compose-report/performance-settings/virtual-evaluation.png '#width=400px')

### Page Creation

`PageCreation` controls how pages are processed and created in Bold Reports<sup>®</sup>.

Property | Description
--- | ---
`Default` | Creates all pages first, then sends the first page to the client for rendering.
`OnDemand` | Renders the first page immediately; subsequent pages are created as the user navigates.
`Background` | Renders the first page immediately; remaining pages are created in the background, with progress updates.|

To set the `PageCreation` property for a specific report, choose a value from the dropdown in the designer and click **Update**.

![page-creation](/static/assets/on-premise/images/report-designer/compose-report/performance-settings/page-creation.png '#width=400px')

### Fetch Limit

The `FetchLimit` property controls the number of records fetched in a report. To use it, enable `FetchLimit` in the designer and specify the desired record count in the `FetchLimitCount` numeric box as shown below. By default, `FetchLimit` is set to false. When `FetchLimit` is set to true, the `FetchLimitCount` numeric box will become visible.

![fetch-limit](/static/assets/on-premise/images/report-designer/compose-report/performance-settings/fetch-limit.png '#width=400px')

### Behavior of Smart Rendering

1. When `SmartRendering` is activated in either `OnDemand` or `Background` mode, the parameter panel may freeze during the report generation process. This occurs because the document is being created, and the progress bar is visible at the bottom left of the report.
2. If users need to modify parameters while the report is rendering, they should click `Cancel` to stop the rendering process. This will allow them to input new parameters before proceeding with the report execution.

### Limitations

This feature is available for tablix-based reports only. It has the following limitations:

1. Nested tables are not supported.
2. Multiple tables in a report are not supported.
3. Tablix cells must contain only text; cells with images or charts are not supported.
4. Image-based reports are not supported.
5. Reports with toggle items are not supported.
6. Sub-reports are not supported.
7. Document mapping or bookmark labels are unsupported.
8. Table cell sorting in the viewer is limited.
9. Tablix structures with repeat headers are unsupported.
10. File storage cache settings are not supported.
11. Tablix structures with column groups are unsupported.