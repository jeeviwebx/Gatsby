---
title: Repeat header with a group using report designer
description: This section describes the steps to add a header with the group and make the headers repeat in the table report item with report designer
keywords: ejReportDesigner, reportdesigner, table, reportitem, bold reports, documentation, help, ej, user guide, demo, samples, bold reports, bold reporting
platform: embedded-reporting-tools
documentation: ug
---

# How to repeat the headers with group in a table

1. Drag and drop the `Table` report item from the item panel into the design area and assign the dataset to the table data region.
   ![Table with data](/static/assets/standalone-report-designer/images/how-to/repeat-header-with-groups/table-with-data.png '#width=315px')

2. Click on the table surface to enable the `Grouping Panel` in the design view.
   ![Open group menu](/static/assets/standalone-report-designer/images/how-to/repeat-header-with-groups/enable-grouping-panel.png)

3. Go to `Row Groups` pane in the grouping panel and open the context menu on the `Details` group field.
   ![Open group menu](/static/assets/standalone-report-designer/images/how-to/repeat-header-with-groups/open-context-menu-in-details-group.png '#width=385px')

4. From the context menu, click on the `Parent Group...` option under the `Add Group` category.
   ![Open group menu](/static/assets/standalone-report-designer/images/how-to/repeat-header-with-groups/click-on-parent-group-option.png '#width=385px')

5. Once you click on the `Parent Group` option, a `Table Group` dialog will be opened to configure the grouping.
   ![Open group menu](/static/assets/standalone-report-designer/images/how-to/repeat-header-with-groups/tablix-group-dialog.png '#width=385px')
    * **Group By**: Based on the dataset assigned to the table region, dataset fields will be listed in this drop-down or else click on the square icon to create an expression.
    * **Add Group Header**: Enable this option to add a header to this group.

6. Choose the dataset field in the `Group by` drop-down list.

7. Select `Add header` to add a header row to the group and select `Add footer` to add a footer row to the group. And then click on the `OK` button.
    * **Add header** - Adds a static row above the group.
      ![Open group menu](/static/assets/standalone-report-designer/images/how-to/repeat-header-with-groups/enable-header-and-footer-in-group-dialog.png '#width=385px')

Now, a static row will be added above of the group in the table data region.

![Open group menu](/static/assets/standalone-report-designer/images/how-to/repeat-header-with-groups/header-and-footer-output.png '#width=415px')

On report preview, the header will be added for each group as shown below.

![Open group menu](/static/assets/standalone-report-designer/images/how-to/repeat-header-with-groups/header-preview.png '#width=415px')

## Format header and footer

You can display the group value in the group header of the table data region.

### Merge header cells

1. Select the header cells and right-click in the cell. Then, click on the `Merge Cells` option.
   ![Open group menu](/static/assets/standalone-report-designer/images/how-to/repeat-header-with-groups/merge-header-cells.png '#width=435px')
2. Now, you can set group content and format the header cell as required using the properties provided in the property panel.
   ![Open group menu](/static/assets/standalone-report-designer/images/how-to/repeat-header-with-groups/merge-header-cells-output.png '#width=385px')

### Repeat header cells

1. Click on the surface of a table design to enable the grouping panel.
   ![Open group menu](/static/assets/standalone-report-designer/images/how-to/repeat-header-with-groups/open-grouping-panel.png '#width=385px')
2. Refer to the [Advanced Mode](../../designer-guide/report-items/tablix/grouping-panel/#advanced-mode) section to enable the advanced mode in grouping panel.
3. Once you click on the Advanced Mode, it will show the static columns in both row and column groups. Now, select the static column presented in the row group pane (Header Row Group).
   ![Static group view](/static/assets/standalone-report-designer/images/how-to/repeat-header-with-groups/grouping-panel-with-static.png '#width=385px')
4. In the properties panel, enable the `RepeatOnNewPage` property checkbox and set the `KeepWithGroup` as `After`.
   ![Repeate headers properties](/static/assets/standalone-report-designer/images/how-to/repeat-header-with-groups/set-repeat-header-properties.png '#width=385px')

### Report preview

On the report preview, the header will be added for each group as shown in the following image and the header will repeat in a new page if the group values exceed the existing page.

![Open group menu](/static/assets/standalone-report-designer/images/how-to/repeat-header-with-groups/header-with-value.png)