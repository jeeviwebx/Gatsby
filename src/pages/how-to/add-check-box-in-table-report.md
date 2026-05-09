---
layout: post
title: How to add Check box Report column in Bold Reports
description: This section describes how to add check box tablix column cell using the Bold Reports standalone report designer in web platform.
platform: standalone-report-designer
documentation: ug
---

# How to add Check box in Table Report

You have to add check box in reports using the `Symbols` fonts. As per RDL standard, you cannot add check box in report. Alternatively, you can use `symbols` fonts to add check box in report. This section describes simple steps to design a check box report using the Standalone Report Designer.

1. Select the tablix cell to add check box.
   ![Select the Check box field](/static/assets/standalone-report-designer/images/how-to/select-check-box-fild.png '#width=385px')

2. Open the `PROPERTIES` pane. Choose fonts style as `Wingdings`.
   ![Choose Font style](/static/assets/standalone-report-designer/images/how-to/choose-font.png)

3. Now, select table cell and set expression to the check box report `=IIF(Fields!OrderQty.Value>5,Chr(254),"o")`. IIF function `Chr(254)` enables the check box.
   ![Set the expression](/static/assets/standalone-report-designer/images/how-to/set-expression.png '#width=385px')

4. Now, the report preview can be visualized as follows.
   ![Preview the check box report](/static/assets/standalone-report-designer/images/how-to/preview-check-box-report.png)

> The `Wingdings`font is not supported in Mozilla fire fox and Opera. Hence, you need to use check box as image item in your report for which you can refer [How to add Check box in table using image?](../add-check-box-in-table-report-using-image-item/)