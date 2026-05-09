---
layout: post
title: Nested object JSON data processing in Report designer
description: This section explains how to create the json data source and how the nested level data will be handled in Report Designer and use them in reports
control: Bold Reports
documentation: ug
---

# How nested object JSON data source is processed in Report Designer

The nested object json datasource will be converted into flatten data format while connecting to the datasource. The steps involved in creating sample nested object data source and its processing details are provided as follows.

1. Open the data source panel, click `New Data` and select the JSON datasource.
   ![Select datasource](/static/assets/standalone-report-designer/images/faq/nested-json-datasource/select-json.png '#width=385px')

2. Choose the inline JSON type.
   ![Inline Json](/static/assets/standalone-report-designer/images/faq/nested-json-datasource/json-inline-type.png '#width=285px')

   >You can choose the JSON type as per your requirement.

3. Now, add the inline JSON data with nested object, which needs to be placed in the inline text box.

   ```json
   {   "employees":
    [{
            "name":"John",
            "email":"John@gmail.com",
            "age":32,
            "address": [{ "address" : "1/45 Western Street, berlin, Germany" }, { "address" : "1/45 Western Street, cologne, Germany" }]
   },
   {
            "name":"Smith",
            "email":"Smith@yahoo.com",
            "age":21,
            "address": [{ "address" : "14/45 Western Street, berlin, Germany" }, { "address" : "14/45 Western Street, cologne, Germany" }]

   },
   {
            "name":"Chard",
            "email":"Chard@yahoo.com",
            "age":21,
            "address": [{ "address" : "14/45 Western Street, berlin, Germany" }, { "address" : "14/45 Western Street, cologne, Germany" }]

   },
   {
            "name":"kristen",
            "email":"kristen@yahoo.com",
            "age":21,
            "address": [{ "address" : "14/45 Western Street, berlin, Germany" }, { "address" : "14/45 Western Street, cologne, Germany" }]

   }]
   }
   ```

   ![Inline json data](/static/assets/standalone-report-designer/images/faq/nested-json-datasource/inline-json-data.png '#width=285px')

   >In the previous sample JSON data, each employee has two address in hierarchical level, which will be converted into flatten data format while connecting to the data source.

4. Click `Connect`.

5. Query Designer will be opened, in which you need to add the dataset to the report.

6. Click `Run` to see the JSON data converted into flatten data format.
   ![Add dataset](/static/assets/standalone-report-designer/images/faq/nested-json-datasource/query-designer-dataset.png)

   >In the above JSON data each employee has two address in hierarchical level, which is converted into flatten data format.

7. Click `Finish` to successfully add dataset to the report.

8. Add a table and assign the necessary values.
   ![Table with data](/static/assets/standalone-report-designer/images/faq/nested-json-datasource/add-tablix.png '#width=385px')

   >If you need to perform grouping to the data in the table, then you can refer to this [Add Grouping and Totals](../../designer-guide/report-items/tablix/add-grouping-and-totals-in-tablix-design/) section.

9. Now, the report preview can be visualized as follows.
   ![Preview the report with json datasource](/static/assets/standalone-report-designer/images/faq/nested-json-datasource/preview-report.png)

   >The previous report is grouped based on name of the employee.