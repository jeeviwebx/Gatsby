---
title: Design simple RDL report using Standalone Report Designer
description: This section describes how to design, preview and download RDL reports using the Standalone Report Designer.
---

# Create a RDL report

This section describes simple steps to design a RDL report using the Standalone Report Designer. First, launch the `Bold Reports Designer` application shortcut from your desktop/start menu.

![RDL Report designer icon](/static/assets/standalone-report-designer/images/create-rdl-report/rdl-report-designer-launcher.png '#width=100px')

The Bold Reports<sup>®</sup> Designer will be launched with a new blank report.

![Report designer initial view](/static/assets/standalone-report-designer/images/create-rdl-report/report-designer-initial-view.png '#width=550px')

## Create Data

1. To add a data, click on the **Data** icon in the `Data Configuration` panel. It opens the `Data` panel.
   ![Data panel icon](/static/assets/standalone-report-designer/images/create-rdl-report/data-icon-configuration-panel.png '#width=250px')
2. Click on the `New Data` button in the data panel.
   ![New data button](/static/assets/standalone-report-designer/images/create-rdl-report/new-data-button-data-panel.png '#width=250px')
3. Choose the `SQL` type to connect the data.
   ![Data source types panel](/static/assets/standalone-report-designer/images/create-rdl-report/datasource-types-panel.png '#width=320px')
4. In the new data source panel,
    * In the **Name** field, specify the data source name without any special characters.
    * In the **Server Name** field, you need to select an existing server in the local network from the dropdown list or specify the specific remote server name like `myserver.domain.com`.
    * In the **Authentication Type** field, choose **Windows** or **SQL Server** authentication.
    * If you have chosen **SQL Server** authentication, specify the **username** and **password** of the server.
    * In the **Database** field, choose or enter an existing valid database, e.g., AdventureWorks.
       ![Data source fields panel](/static/assets/standalone-report-designer/images/create-rdl-report/datasource-fields-panel.png '#width=320px')
5. Click the `Connect` button. Now the following view will be displayed.
   ![Query designer initial view](/static/assets/standalone-report-designer/images/create-rdl-report/query-designer-full-view.png '#width=600px')

> Here, an **AdventureWorks** database is used for the demonstration.

### Edit dataset name

You can edit the name of the `Data` in the **Name** field that is available in the toolbar pane.

![Dataset name field](/static/assets/standalone-report-designer/images/create-rdl-report/edit-dataset-name.png)

### Drag and drop table in query designer

The left pane holds the **tables**, **views**, and **procedures** associated with the connected database. Drag your preferred table or view from the left pane and drop into the center pane labeled with `Drag and Drop table here` like below:

![Drag and drop query table to design area](/static/assets/standalone-report-designer/images/create-rdl-report/drag-drop-table-in-query-designer.png '#width=320px')

Now, the table will be dropped into the design area as shown below.

![Query designer with query table](/static/assets/standalone-report-designer/images/create-rdl-report/drag-drop-table-in-query-designer-output.png '#width=370px')

### Execute query

1. You can execute and visualize the data by using the `Run` option in the tools pane.
   ![Run query icon](/static/assets/standalone-report-designer/images/create-rdl-report/run-query-in-querydesigner.png '#width=250px')
2. Now, the data will be retrieved based on the specified query.
   ![Execute query output](/static/assets/standalone-report-designer/images/create-rdl-report/execute-query-output.png)

### Save Data

1. Click on the `Finish` button in the tools pane.
   ![Finish data button](/static/assets/standalone-report-designer/images/create-rdl-report/finish-data-connection.png)
2. Your dataset should now be listed on the `Data` panel as shown below.
   ![Data list view](/static/assets/standalone-report-designer/images/create-rdl-report/data-list-view.png '#width=320px')
3. Expand the icon to view the data fields.
   ![Data fields list](/static/assets/standalone-report-designer/images/create-rdl-report/data-fields-list.png '#width=320px')

## Add table report item

The left pane in the design view consists of basic items, data regions, data visualization, and sub reports  to design an interactive report.

> Here, the `Table` report item is used for a demonstration.

1. Select the `Table` item under `Data Regions` in the item panel, then drag and drop it to the design area.
   ![Table report item](/static/assets/standalone-report-designer/images/create-rdl-report/drag-drop-table-item.png '#width=290px')
2. The above action will render the `Table` with two rows and three columns in the design area.
   ![Table initial view](/static/assets/standalone-report-designer/images/create-rdl-report/table-initial-view.png '#width=250px')

### Assign data

> This step is applicable only for the report items that belongs to `data visualization` and `data region` category.

Assign the dataset to the `Dataset` property of the table.
![Assign dataset to the table](/static/assets/standalone-report-designer/images/create-rdl-report/assign-dataset-to-table.png '#width=320px')

### Add column header

1. Select the first cell in the table, click the `Text Editor` icon to open the dialog, and enter `ProductID` as the column header text.
2. To set the column header text as `ProductID`, follow the steps outlined in the [Set header text using data assign menu](../report-items/tablix/design-ssrs-rdl-report-using-table/#set-header-text-using-data-assign-menu) section.
   ![Enter text in table cell](/static/assets/standalone-report-designer/images/create-rdl-report/enter-text-in-table-cell.png)
3. Similarly, you can add required column header text to other cells in the table.
   ![Assign column text output](/static/assets/standalone-report-designer/images/create-rdl-report/assign-column-text-output.png '#width=368px')

### Assign data fields in table cell

1. Select the table cell and click on the `Data assign` menu icon to open data assign menu.
   ![Open data assign menu](/static/assets/standalone-report-designer/images/create-rdl-report/open-data-assign-menu.png '#width=250px')
2. Assign the `ProductID` field in the table cell.
   ![Assign fields to table cell](/static/assets/standalone-report-designer/images/create-rdl-report/assign-fields-to-table-cell.png '#width=250px')
3. Similarly, you can assign the required data fields to the table cell.
   ![Output of assign fields procedure](/static/assets/standalone-report-designer/images/create-rdl-report/assign-fields-to-table-cell-output.png '#width=350px')
4. To add the `=Fields!OrderQty.Value*Round(Fields!UnitPrice.Value,2)` expression into a selected Tablix cell, follow the steps outlined in the [Set expression using data assign menu](../report-items/tablix/design-ssrs-rdl-report-using-table/#set-expression-using-data-assign-menu) section.
5. Now, the table will look like below,
   ![Assign expression to table cell](/static/assets/standalone-report-designer/images/create-rdl-report/expression-output-in-table-cell.png '#width=350px')

### Resize the column

To improve the report readability, we can resize the table row height and column width.

1. Place the mouse pointer on the respective column border.
   ![Resize the table column](/static/assets/standalone-report-designer/images/create-rdl-report/resize-the-table-column.png '#width=380px')
2. Drag the column gripper horizontally to adjust the column width.
   ![Adjust column width of the table](/static/assets/standalone-report-designer/images/create-rdl-report/adjust-column-width-output.png '#width=380px')

### Resize the row

1. Place the mouse pointer on the respective row border.
   ![Resize the table row](/static/assets/standalone-report-designer/images/create-rdl-report/resize-the-table-row.png '#width=380px')
2. Drag the row gripper vertically to adjust the row height.
   ![Adjust row height of the table](/static/assets/standalone-report-designer/images/create-rdl-report/adjust-row-height-output.png '#width=380px')

### Customize the appearance

Open the `PROPERTIES` pane. This pane holds some general settings and some specific to the report item. Configure the desired settings on the table for better report design and to improve report readability.

![Customize table cell properties](/static/assets/standalone-report-designer/images/create-rdl-report/customize-table-cell-properties.png '#width=380px')

### Add total

1. Select the second row, first cell and Right click -> **Add Total**
   ![Add total menu](/static/assets/standalone-report-designer/images/create-rdl-report/add-total-menu.png '#width=250px')

2. Now, select the third row, first four columns and Right click -> **Merge cells**
   ![Merge cells in table](/static/assets/standalone-report-designer/images/create-rdl-report/merge-cells-in-table.png '#width=350px')

3. Modify the cell content to `Total` using the `Multi-Text Run Editor` dialog, and align the content to `Right` side.
   ![Modify the cell content](/static/assets/standalone-report-designer/images/create-rdl-report/modify-total-cell-content.png '#width=350px')

4. Select the last cell in the third row, and to add the expression `=Sum(Fields!OrderQty.Value*Round(Fields!UnitPrice.Value,2))`, follow the steps outlined in the [Set expression using data assign menu](../report-items/tablix/design-ssrs-rdl-report-using-table/#set-expression-using-data-assign-menu) section.

Now, the table design will look like below.

![Final design view](/static/assets/standalone-report-designer/images/create-rdl-report/final-design-view.png '#width=550px')

## Save report

Once you are done with the report design to save a report, refer to the [How to save report](./../save-report/) section.

## Preview report

1. To see the report preview, click on the **Preview** button in the tools pane.
   ![Preview icon in design view](/static/assets/standalone-report-designer/images/create-rdl-report/preview-icon.png '#width=150px')
2. Now, the report preview can be visualized as shown below.
   ![Table report preview](/static/assets/standalone-report-designer/images/create-rdl-report/report-preview-page-1.png)

> Download the above report design from the [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/design-rdl-report-in-web-report-designer.rdl).