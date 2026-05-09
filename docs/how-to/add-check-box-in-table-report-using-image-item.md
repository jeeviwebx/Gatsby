---
layout: post
title: How to add checkbox in table column using image
description: This section describes how to add checkbox tablix column cell using image item in the Bold Reports standalone report designer.
platform: standalone-report-designer
documentation: ug
---

# How to add checkbox in table using image

As per RDL standard, you cannot add checkbox in report. Alternatively, you can use a checkbox image in the report and modify its visibility using expression. This section describes simple steps to design a checkbox report using the Report Designer.

1. Select the tablix cell and insert Image item.
   ![Select the Checkbox field](/static/assets/standalone-report-designer/images/how-to/add-checkbox-in-table-using-image/add-image.png)

2. Add the checkbox image to the report using the image manager.
   ![Add image to report](/static/assets/standalone-report-designer/images/how-to/add-checkbox-in-table-using-image/add-checkbox-image.png '#width=335px')

3. Now, select table cell that contains the image item and set the image value of the checkbox image with the properties in the property panel.
   ![Set the image](/static/assets/standalone-report-designer/images/how-to/add-checkbox-in-table-using-image/set-checkbox-image-value.png '#width=335px')

4. Set the visibility of the image item with the dataset field value using the visibility property.
   ![Open expression to set visibility](/static/assets/standalone-report-designer/images/how-to/add-checkbox-in-table-using-image/set-visibility-for-image.png '#width=335px')
   ![Expression for visibility](/static/assets/standalone-report-designer/images/how-to/add-checkbox-in-table-using-image/visibility-expression.png '#width=385px')

5. Now, the report preview can be visualized as follows.
   ![Preview the checkbox report](/static/assets/standalone-report-designer/images/how-to/add-checkbox-in-table-using-image/preview-report.png)