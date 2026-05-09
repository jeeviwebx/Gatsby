---
title: Assign data | Tablix dataregion | Standalone Report Designer
description: This section explains steps to assign dataset to the tablix data region to display data from the dataset in the tablix data region in Standalone Report Designer.
canonical: /enterprise-reporting/designer-guide/report-designer/report-items/tablix/assign-data-to-tablix-data-region/
---

# Assign data to tablix data region

The table, matrix and list report items can display data from a single dataset. You can also assign conditional expressions to filter or sort the dataset columns.

## Assign dataset

There are two ways to assign the dataset to the tablix:

* Assign dataset from data assign menu
* Assign dataset in `Dataset` property of tablix

### Assign dataset from data assign menu

1. Select any cell in the tablix data region, then click the `Data Assign` menu icon to open the data assign menu. If the report does not have a dataset, the data assign menu will have following options.
   ![Data category](/static/assets/on-premise/images/report-designer/report-items/tablix/data-assign-menu-without-dataset.png '#width=285px')

   > Click on the `Add Datasource` option in the menu and add dataset using the steps provided in [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/) section.
2. By default, the menu displays the fields of the first dataset in the report.
   ![Data category](/static/assets/on-premise/images/report-designer/report-items/tablix/open-menu-to-choose-dataset.png '#width=285px')
3. The available datasets in the report will be listed in the first dropdown. To assign different dataset, choose desired dataset in the dropdown.
   ![Data category](/static/assets/on-premise/images/report-designer/report-items/tablix/dataset-drop-down-view-in-menu.png '#width=285px')
4. Now, the fields of selected dataset will be listed in the data assign menu like below.
   ![Data category](/static/assets/on-premise/images/report-designer/report-items/tablix/assign-desired-dataset-using-dropdown-in-menu.png '#width=285px')

### Assign dataset from properties panel

1. Select the tablix report item in design area, now the respective tablix properties will be listed in the properties panel.
   ![Tablix item with properties view](/static/assets/on-premise/images/report-designer/report-items/tablix/table-item-with-properties-view.png '#width=615px')
2. The available datasets in the report will be listed in the `Dataset` property dropdown. You can choose the desired dataset from the drop-down.
   ![Data category](/static/assets/on-premise/images/report-designer/report-items/tablix/assign-dataset-in-properties-panel.png '#width=285px')
3. Now, the fields of selected dataset will be listed in the data assign menu like below.
   ![Data category](/static/assets/on-premise/images/report-designer/report-items/tablix/fields-listed-in-data-assign-menu.png '#width=285px')

## Assign fields to tablix cell

There are a few different ways to assign the fields into a tablix cell:

* Drag and drop data fields from the `DATA` panel.
* Select the field from the data assign menu provided in each cell.

### Drag and drop data fields

1. Open the `DATA` panel and expand the required dataset.
   ![Data category](/static/assets/on-premise/images/report-designer/report-items/tablix/data-list-view.png '#width=385px')
2. Drag a field from the list and drop into a required cell.
   ![Data category](/static/assets/on-premise/images/report-designer/report-items/tablix/drag-and-drop-field-into-cell.png '#width=385px')

### Assign fields using data assign menu

1. Select the tablix cell and click on the `Data assign` menu icon to open data assign menu.
   ![Data assign menu](/static/assets/on-premise/images/report-designer/report-items/tablix/data-assign-menu-icon.png '#width=315px')
2. Click on the required data field name in the menu.
   ![Data assign menu](/static/assets/on-premise/images/report-designer/report-items/tablix/open-data-assign-menu.png '#width=355px')

   > The fields of the dataset which is assigned to `Dataset` property of tablix will be listed in the menu.
3. Now, the respective field will be assigned to the respective cell like below.
   ![Data assign menu](/static/assets/on-premise/images/report-designer/report-items/tablix/assign-field-in-table-cell-output.png '#width=285px')

## Assign or edit expression into table cell

There are two ways to assign or edit an expression in a Tablix cell.

* Set expression using the `Add Expression` and modify them using the `Edit Expression` option in the Data Assign menu.
* Set or edit expression using Multi-Text Run Editor Dialog.

### Set expression using data assign menu

The Data Assign Menu is recommended when you want to quickly assign a single TextRun expression to a tablix cell. It provides a direct way to open the Expression Editor.

1. Select a tablix cell and click the `Data Assign` menu icon to open the Data Assign menu.
   ![Add Expression option in data assign menu](/static/assets/on-premise/images/report-designer/report-items/tablix/add-expression-option-data-assign-menu.png '#width=355px')
2. Click `Add Expression` option from the data assign menu. Now, the `Expression` builder will be launched like below.
   ![Add Expression option in data assign menu](/static/assets/on-premise/images/report-designer/report-items/tablix/empty-expression-editor.png '#width=615px')

   > To learn more about working with expressions in the Report Designer refer to the [Expressions](./../../../compose-report/expressions/) section.
3. Set the Expression in the Expression editor.
   ![Expression Editor](/static/assets/on-premise/images/report-designer/report-items/tablix/sales-expression-editor.png '#width=615px')
4. Click `OK` to assign added expression into the respective tablix cell.
   ![Tablix Item](/static/assets/on-premise/images/report-designer/report-items/tablix/assign-field-in-text-editor-output.png '#width=315px')

### Set expression using Multi-Text Run Editor Dialog

The Multi‑Text Run Editor Dialog is ideal when you need to manage multiple TextRuns within the same tablix cell. It allows you to combine static text and expressions, giving flexibility for complex formatting or mixed content scenarios.

1. Select the tablix cell and click the `Text Editor` icon to open the Multi-Text Run Editor Dialog.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/text-editor-icon.png '#width=315px')
2. The `Multi-Text Run Editor` Dialog opens, allowing you to add and manage expressions within the cell.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/text-editor-dialog/text-editor-dialog.png '#width=615px')
3. Right-click within the editor area to open the context menu.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/text-editor-dialog/context-menu-in-text-editor.png '#width=615px')
4. From the context menu, click the `Expression` option to open the `Expression Editor`.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/empty-expression-editor.png '#width=615px')
5. Set the Expression in the Expression editor and click `OK`.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/sales-expression-editor.png '#width=615px')
6. The `[Sales]` expression will now appear in the `Multi-Text Run Editor` Dialog.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/text-editor-dialog/sales-text-editor.png '#width=615px')
7. Click `Save` to assign added expression into the respective tablix cell.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/assign-field-in-text-editor-output.png '#width=315px')

You can specify dataset fields, parameters, or built-in functions in the `Expression Editor`, then click `OK`.
The label denoted in the table cell varies based on the assigned values in table cell. The following snap depicts the label text variations.
![Label text variation](/static/assets/on-premise/images/report-designer/report-items/tablix/text-representation-in-cell.png '#width=385px')

### Edit expression using data assign menu

1. Select a table cell in which you need to edit the expression and click on the `Data assign` menu icon to open data assign menu.
   ![Edit expression option in data assign menu](/static/assets/on-premise/images/report-designer/report-items/tablix/edit-expression-option-in-data-assign-menu.png '#width=355px')
2. Click the `Edit Expression` option in the data assign menu. Now, the `Expression` builder will be launched like below.
   ![Expression Editor](/static/assets/on-premise/images/report-designer/report-items/tablix/sales-expression-editor.png '#width=615px')
3. Modify the expression as required and click on the `OK` button.

### Edit expression using Multi-Text Run Editor Dialog

1. Select the tablix cell and click the `Text Editor` icon to open the Multi-Text Run Editor Dialog.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/text-editor-icon-in-sales-tablix-cell.png '#width=315px')
2. The `Multi-Text Run Editor` dialog will appear, allowing you to modify the existing Expression.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/text-editor-dialog/sales-text-editor.png '#width=615px')
3. Right-click within the expression context to edit the Expression.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/text-editor-dialog/context-menu-in-sales-text-editor.png '#width=615px')
4. From the context menu, click `Expression` option to open the `Expression Editor`.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/sales-expression-editor.png '#width=615px')
5. Update the Expression in the `Expression editor` and click `OK`.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/sum-sales-expression-editor.png '#width=615px')
6. The `[Sum(Sales)]` expression is updated to the Multi-Text Run Editor dialog.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/text-editor-dialog/sum-sales-text-editor.png '#width=615px')
7. Click `Save` to assign modified expression into the respective tablix cell.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/sum-of-sales-in-tablix-cell.png '#width=315px')

## Tablix Cell Editors

Each tablix cell provides flexible editing options to manage text and expressions. These options simplify report design with quick access to text entry or expression assignment.

1. **Text Editor icon**: Opens the Multi-Text Run Editor dialog.
2. **Data Assign Menu icon**: Opens a menu with options to add text or expression.

![Tablix cell icons](/static/assets/on-premise/images/report-designer/report-items/tablix/tablix-cell-icons.png '#width=385px')

### Text Editor Icon

1. Opens the `Multi-Text Run Editor` dialog to enter static text or expressions.
2. Right-click inside the editor and select Expression from the context menu to open the Expression Editor.
3. Supports adding a single TextRun or multiple TextRuns.

### Data Assign Menu Icon

The Data Assign Menu provides the following options:
1. **Add Text**: Opens the `Multi-TextRun Editor` dialog to enter static text or expressions.
2. **Add Expression**: Opens the `Expression Editor` directly. This option allows adding only a single TextRun, enabling faster report creation.

The following options shown in the `Data Assign Menu` depend on the current state of the tablix cell:

| Cell State                                    | Menu Options Displayed     |
|-----------------------------------------------|----------------------------|
| Empty cell (no TextRuns)                      | Add Expression, Add Text   |
| Single TextRun (static text)                  | Add Expression, Edit Text  |
| Single TextRun (expression)                   | Edit Expression, Edit Text |
| Multiple TextRuns                             | Edit Text                  |

### Double-Click Actions in Tablix Cells

Double-clicking a tablix cell provides a shortcut to open the appropriate editor:

| Cell State                                    | Double-Click Action        |
|-----------------------------------------------|----------------------------|
| Empty cell (no TextRuns)                      | Opens Multi TextRun Editor |
| Single TextRun (static text)                  | Opens Multi TextRun Editor |
| Single TextRun (expression)                   | Opens Expression Editor    |
| Multiple TextRuns                             | Opens Multi TextRun Editor |