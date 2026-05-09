---
layout: post
title: How to hide columns in Table ReportItem by parameters
description: This section describes how to hide the column of table ReportItem using the report parameters by the expression
control: Bold Reports
documentation: ug
---

# How to hide columns in Table ReportItem using the report parameters

You can hide the columns of Table ReportItem by setting the visibility property of the particular column with the report parameter value. You need to follow these steps to hide the column in Table ReportItem

1. Open the report in your Bold Report Designer.

2. Add a boolean parameter to the report to change the visibility of the column of the Table ReportItem based on the parameter values.

3. Select the Table ReportItem and enable the advanced items in the Grouping panel as shown in the following image,

    ![Grouping panel advanced](/static/assets/standalone-report-designer/images/how-to/hide-columns-in-table-item/grouping-panel-enable-advanced.png '#width=600px')

4. Select the required `Static` column for which the visibility needs to be changed based on the parameter value as shown in the following image.

    ![Select column](/static/assets/standalone-report-designer/images/how-to/hide-columns-in-table-item/select-static-column.png)

5. Open the property panel and drill through the visibility property to open the expression window as shown in the following image,

    ![Column visibility property](/static/assets/standalone-report-designer/images/how-to/hide-columns-in-table-item/column-visibility.png)

6. Set the expression for the visibility of the column with the parameter value as shown in the following image,

    ![Column visibility expression](/static/assets/standalone-report-designer/images/how-to/hide-columns-in-table-item/column-visibility-expression.png '#width=425px')

7. Now, the visibility of the column of the table will be changed based on the parameter value as shown in the following images,

    When the parameter value is true:

    ![Report with column](/static/assets/standalone-report-designer/images/how-to/hide-columns-in-table-item/report-with-column.png)

    When the parameter value is false:

    ![Report without column](/static/assets/standalone-report-designer/images/how-to/hide-columns-in-table-item/report-without-column.png)

> If you hide the column of Table ReportItem using the column selection, then the column content will only get hidden and not the column itself, as shown in the following image.![Report without column content](/static/assets/standalone-report-designer/images/how-to/hide-columns-in-table-item/report-without-column-content.png)

## See Also

[Add report parameter to the report](../../designer-guide/report-parameters/add/)