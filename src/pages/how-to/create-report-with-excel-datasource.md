---
layout: post
title: Create report with excel datasource in Report designer
description: This section explains how to create the Excel data source with ODBC and use ODBC connection with Excel data source in Report Designer
control: Bold Reports
documentation: ug
---

# How to create a report with excel datasource

You can create a report in Bold Report Designer with Excel data source using the ODBC data source. You need to follow these steps to create the Excel data source:

## Create a new Excel Data source in ODBC

1. Open the ODBC data source administrator and click Add to create a new data source as shown in the following image.

    ![Custom attributes](/static/assets/standalone-report-designer/images/how-to/create-report-with-excel-datasource/odbc-administrator.png '#width=385px')

2. Select `Driver do Microsoft Excel(*.xls)` to create new Excel data source as shown in the following image.

    ![Custom attributes](/static/assets/standalone-report-designer/images/how-to/create-report-with-excel-datasource/odbc-excel.png '#width=385px')

3. Provide the data source name and workbook location and click `OK` button to add new Excel datasource as shown in the following image.

    ![Custom attributes](/static/assets/standalone-report-designer/images/how-to/create-report-with-excel-datasource/odbc-excel-database.png '#width=385px')

## Create a report with Excel data source using ODBC

1. Open the Report Designer application.

2. Open the data source panel as shown like in the following image.

    ![Data Source Panel](/static/assets/standalone-report-designer/images/how-to/create-report-with-excel-datasource/datasource-panel.png '#width=425px')

3. Click `New Data`.

4. Click `ODBC` connection as shown in the following image.

    ![Data Source Select Panel](/static/assets/standalone-report-designer/images/how-to/create-report-with-excel-datasource/odbc-select-panel.png '#width=385px')

5. Provide the datasource connection information as shown in the following image.

    ![ODBC datasource connection settings](/static/assets/standalone-report-designer/images/how-to/create-report-with-excel-datasource/odbc-excel-datasource.png '#width=335px')

6. Click `Connect`.

7. The Query designer will get opened where you need to provide the Query to select the data from Excel data source as shown in the following image.

    ![Query Designer](/static/assets/standalone-report-designer/images/how-to/create-report-with-excel-datasource/querydesigner-excel.png)

8. Click `Finish` to add the ODBC data source with Excel as data to the report.