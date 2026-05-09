---
title: Hide the row or column when field value is empty
description: This section explains about how to hide the table row or column when the field value is empty in Bold Reports Standalone Report Designer.
canonical: /enterprise-reporting/designer-guide/report-designer/how-to/hide-table-column-or-row-when-field-value-empty/
---

# How to hide the table column or row when the field value is empty

In Bold Reports<sup>®</sup>, you can control the visibility of a tablix column or row based on whether data is present or absent. This feature allows you to effectively manage the display of columns by setting the visibility property and utilizing expressions. This documentation provides a step-by-step guide on achieving this behavior in your reports.

## Hide the table column when the field value is empty

1. Drag and drop the table, then select the dataset and assign the field values. Select the tablix, enable the advanced mode, and set the visibility expression for the columns to hide them when they contain empty data.
   ![table deisgn](/static/assets/on-premise/images/report-designer/how-to/hide-row-column/hide-column-table-design.png)
   ![table deisgn advanced](/static/assets/on-premise/images/report-designer/how-to/hide-row-column/hide-column-table-design-advanced.png)
2. In the Properties window or pane, locate the **Visibility** property. Click on the expression button (a white box) adjacent to the `Visibility` property.
   ![hide column visibility](/static/assets/on-premise/images/report-designer/how-to/hide-row-column/hide-column-visibility.png)
3. This action will open the Expression Editor, where you can define the logic for hiding the column based on data presence. Within the Expression Editor, enter the following expression, selecting the field that indicates the absence of data:
   ![hide column visibility expression](/static/assets/on-premise/images/report-designer/how-to/hide-row-column/hide-column-visibility-expression.png)

   ```csharp
    =IsNothing(<Your_field_name>)
   ```

   For example,

   ```csharp
    =IsNothing(Fields!Clothing.Value)
   ```

4. Click on the **OK** option to save the Expression Editor.
5. Save your report and proceed to `preview` it. Observe the visibility of the column, which will now adjust dynamically based on the availability of data.
   ![output-column](/static/assets/on-premise/images/report-designer/how-to/hide-row-column/hide-column-output.png)

> The IsNothing(Fields!Clothing.Value) expression evaluates to True when the field value is null or empty, and False when it contains data. By setting the **Visibility** property to False, the column will be hidden when the expression evaluates to True.

You can download the created sample report from [here](https://www.syncfusion.com/downloads/support/directtrac/general/ze/HideEmptyDataColumn1272261074.zip).

## Hide the table row when the field value is empty

1. Drag and drop the table, then select the dataset and assign the field values. Select the tablix, enable the advanced mode, and set the visibility expression for the rows to hide them when they contain empty data.
   ![table deisgn](/static/assets/on-premise/images/report-designer/how-to/hide-row-column/hide-row-table-design.png)
   ![table deisgn advanced](/static/assets/on-premise/images/report-designer/how-to/hide-row-column/hide-row-table-design-advanced.png)
2. In the Properties window or pane, locate the **Visibility** property. Click on the expression button (a white box) adjacent to the `Visibility` property.
   ![hide row visibility](/static/assets/on-premise/images/report-designer/how-to/hide-row-column/hide-row-visibility.png)
3. This action will open the Expression Editor, where you can define the logic for hiding the row based on data presence. Within the Expression Editor, enter the following expression, selecting the field that indicates the absence of data:
   ![hide row visibility expression](/static/assets/on-premise/images/report-designer/how-to/hide-row-column/hide-row-visibility-expression.png)

   ```csharp
    =IsNothing(<Your_field_name>)
   ```

   For example,

   ```csharp
    =IsNothing(Fields!Bikes.Value)
   ```

4. Click on the **OK** option to save the Expression Editor.
5. Save your report and proceed to `preview` it. Observe the visibility of the row, which will now adjust dynamically based on the availability of data.
   ![output-row](/static/assets/on-premise/images/report-designer/how-to/hide-row-column/hide-row-output.png)

> The IsNothing(Fields!Bikes.Value) expression evaluates to True when the field value is null or empty, and False when it contains data. By setting the **Visibility** property to False, the row will be hidden when the expression evaluates to True.

You can download the created sample report from [here](https://www.syncfusion.com/downloads/support/directtrac/general/ze/HideEmptyRowColumn1542738587.zip).

By following the steps outlined in this documentation, you can easily hide a column or row dynamically in Bold Reports<sup>®</sup> when the associated tablix contains no data. The utilization of the IsNothing() function within an expression provides you with the flexibility to control column or row visibility based on data presence. Implementing this technique enhances the visual appearance and usability of your Bold Reports<sup>®</sup> projects.