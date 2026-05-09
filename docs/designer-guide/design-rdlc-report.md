---
title: Create RDLC report | Standalone Report Designer
description: This section explains how to create or design the SSRS RDLC client reports using the Standalone Bold Report Designer.
---

# Create a RDLC report

Report Definition Language Client-side is the extension of the report file. The RDLC files does not require the SQL Server Reporting Services to process the reports.

This section describes step by step procedure to create an RDLC report in Standalone Report Designer. First, launch the `Bold Reports RDLC Designer` application shortcut from your desktop/start menu.

![RDLC Report designer icon](/static/assets/standalone-report-designer/images/create-rdlc-report/rdlc-report-designer-launcher.png '#width=100px')

The Bold Reports<sup>®</sup> RDLC Designer will launch with a new blank report.

![Report designer initial view](/static/assets/standalone-report-designer/images/create-rdlc-report/report-designer-initial-view.png '#width=550px')

## Create data

1. Click the `Data` icon in the configuration panel to open a `Data` configuration panel.
   ![Create new reporting application project](/static/assets/standalone-report-designer/images/create-rdlc-report/data-icon-configuration-panel.png '#width=150px')
2. Click on the `NEW DATA` button in `DATA` panel.
   ![Create new reporting application project](/static/assets/standalone-report-designer/images/create-rdlc-report/new-data-button.png '#width=320px')
3. Now, the `Data Fields` dialog will be opened like below.
   ![Create new reporting application project](/static/assets/standalone-report-designer/images/create-rdlc-report/data-fields-dialog.png '#width=320px')
4. Edit the name of the `Data` in the **Name** field, if required.
5. To create fields for the dataset, click on the `ADD` button.
   ![Create new reporting application project](/static/assets/standalone-report-designer/images/create-rdlc-report/add-field.png '#width=350px')
6. Provide the `Field Name` in the first dropdown list.
7. In the second dropdown list, choose the datatype for the respective field.
   ![Create new reporting application project](/static/assets/standalone-report-designer/images/create-rdlc-report/create-new-field.png '#width=350px')
8. Similarly, you can create multiple fields for the dataset.
   ![Create new reporting application project](/static/assets/standalone-report-designer/images/create-rdlc-report/create-multiple-fields.png  '#width=390px')
9. Click on the `OK` button. Now, the dataset will be listed under the `DATA` pane like below.
   ![Create new reporting application project](/static/assets/standalone-report-designer/images/create-rdlc-report/data-list-view.png '#width=300px')

## Assign data

1. Drag and drop a chart report item to the design area.
   ![Create new reporting application project](/static/assets/standalone-report-designer/images/create-rdlc-report/drag-and-drop-chart.png)
2. Switch to the `DATA` tab in the properties panel.
   ![Create new reporting application project](/static/assets/standalone-report-designer/images/create-rdlc-report/data-assign-tab.png '#width=320px')
3. Select and drag the numeric column (measure element) or the numeric expression column from the `Measure` section and drop it in the `Y Values` section.
4. Select and drag the dimension element from the `Dimensions` section to measure against any of the selected numeric column(s) in `Y Value(s)` section, and drop into the `Column(s)` section.
   ![Create new reporting application project](/static/assets/standalone-report-designer/images/create-rdlc-report/assign-fields-to-chart.png '#width=320px')
5. Now, the final design will look like below.
   ![Create new reporting application project](/static/assets/standalone-report-designer/images/create-rdlc-report/chart-final-design.png)

## Preview report

1. Click on the `Preview` button in the toolbar. Now, the following dialog will be displayed.
   ![Create new reporting application project](/static/assets/standalone-report-designer/images/create-rdlc-report/click-on-preview-report.png '#width=320px')
2. To bind data to the widgets, provide valid JSON array collection as shown in following sample code.

    ```js
    [{
    "ProdCat": "Accessories", "SubCat": "Helmets", "OrderYear": "2002", "OrderQtr": "Q1", "Sales": 4945.6925
    },
    {
    "ProdCat": "Components", "SubCat": "Road Frames", "OrderYear": "2002", "OrderQtr": "Q3", "Sales": 957715.1942
    },
    {
    "ProdCat": "Components", "SubCat": "Forks", "OrderYear": "2002", "OrderQtr": "Q4", "Sales": 23543.1060
    },
    {
    "ProdCat": "Bikes", "SubCat": "Road Bikes", "OrderYear": "2002", "OrderQtr": "Q1", "Sales": 3171787.6112
    },
    {
    "ProdCat": "Accessories", "SubCat": "Helmets", "OrderYear": "2002", "OrderQtr": "Q3", "Sales": 33853.1033
    },
    {
    "ProdCat": "Components", "SubCat": "Wheels", "OrderYear": "2002", "OrderQtr": "Q4", "Sales": 163921.8870
    },
    {
        "ProdCat": "Bikes", "SubCat": "Road Bikes", "OrderYear": "2003", "OrderQtr": "Q2", "Sales": 4119658.6506
    },
    {
        "ProdCat": "Clothing", "SubCat": "Socks", "OrderYear": "2003", "OrderQtr": "Q3", "Sales": 6968.6884
    },
    {
        "ProdCat": "Bikes", "SubCat": "Road Bikes", "OrderYear": "2003", "OrderQtr": "Q4", "Sales": 3734891.6389
    },
    {
        "ProdCat": "Components", "SubCat": "Mountain Frames", "OrderYear": "2002", "OrderQtr": "Q3", "Sales": 608352.8754
    }]
    ```
   ![Create new reporting application project](/static/assets/standalone-report-designer/images/create-rdlc-report/bind-json-data.png '#width=350px')
3. Now, the report preview will be displayed like below.
   ![Create new reporting application project](/static/assets/standalone-report-designer/images/create-rdlc-report/report-preview-final-state.png '#width=450px')

> Download the above report design from the [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/design-rdlc-report.rdlc).