---
title: Design SSRS RDL Report using Table with Multi TextRun
description: Learn how to design an SSRS RDL report using table with multi text run, to display a list of records in the table format in Standalone Report Designer.
canonical: /enterprise-reporting/designer-guide/report-designer/report-items/tablix/design-ssrs-rdl-report-using-table-with-multi-text-run/
---

# Design ssrs rdl report using table with multi textrun

The following steps guides you to design ssrs rdl report using table with multi textrun.

## Add a table to the report using Tablix Wizard

1. Refer to the [Create a Matrix Report using Tablix Wizard](./../../../report-items/tablix-wizard/design-report-using-the-tablix-wizard/) section and assign the `ProdCat`, `SubCat`, `OrderYear`, `OrderQtr` and `Sales` fields in the initial matrix design.
   ![Tablix wizard with column and values](/static/assets/on-premise/images/report-designer/report-items/tablix/rendered-matrix.png '#width=355px')
2. Remove any unnecessary rows and apply styles to the Tablix item and its cells to improve visual clarity.
   ![Tablix wizard with column and values](/static/assets/on-premise/images/report-designer/report-items/tablix/rendered-matrix-with-design.png '#width=700px')

## Set header text for Tablix data

1. Select the tablix cell and click the `Text Editor` icon to open the `Multi-Text Run Editor` Dialog.
   ![Tablix](/static/assets/on-premise/images/report-designer/report-items/tablix/text-editor-icon-in-product-category.png '#width=700px')
2. The `Multi-Text Run Editor` dialog will open, allowing you to enter and format the content.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/text-editor-dialog/empty-text-editor-dialog.png '#width=700px')
3. Enter the required header text in the `Multi-Text Run Editor` dialog.
   ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/text-editor-dialog/entered-text-in-text-editor-dialog.png '#width=700px')
4. Apply styling to the header text using the selected text properties available in the`Property Panel`.

   a. Select all the text and set the `Text Alignment` to Center.
      ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/text-editor-dialog/text-alignment-in-text-editor-dialog.png '#width=700px')
   b. Highlight the header portion and set `Font Weight` to Bold.
      ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/text-editor-dialog/font-weight-in-text-editor-dialog.png '#width=700px')
   c. Select the descriptive part of the heading and set `Font Style` to Italic.
      ![Multi-Text Run editor dialog](/static/assets/on-premise/images/report-designer/report-items/tablix/text-editor-dialog/font-style-in-text-editor-dialog.png '#width=700px')
5. After applying the desired properties to the header text, click `Save` to apply the changes to the tablix cell.
   ![Multi text run Tablix](/static/assets/on-premise/images/report-designer/report-items/tablix/product-category-in-tablix-cell.png '#width=700px')
6. Repeat the same steps to format the header text for both the `Product Sub Category` and `Order Year` cells consistently.
   ![Multi text run Tablix](/static/assets/on-premise/images/report-designer/report-items/tablix/multi-textrun-table-design.png '#width=700px')

## Add Expression in Tablix Cell

To add the `[Sales]` expression into a selected Tablix cell, follow the steps outlined in the [Set expression using Multi-Text Run Editor Dialog](./../assign-data-to-tablix-data-region/#set-expression-using-multi-text-run-editor-dialog) section.
   ![Multi text run Tablix](/static/assets/on-premise/images/report-designer/report-items/tablix/sales-in-tablix-cell.png '#width=700px')

## Edit Expression in Tablix Cell

To update a Tablix cell with the `[Sum(Sales)]` expression, follow the steps outlined in the [Edit expression using Multi-Text Run Editor Dialog](./../assign-data-to-tablix-data-region/#edit-expression-using-multi-text-run-editor-dialog) section.
   ![Multi text run Tablix](/static/assets/on-premise/images/report-designer/report-items/tablix/sum-sales-in-tablix-cell.png '#width=700px')

## Report preview

On report preview, the product sales report of a company will be displayed like below,

![Multi text run report](/static/assets/on-premise/images/report-designer/report-items/tablix/product-sales-report-preview.png '#width=700px')

> Download the above report design from the [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/tablix/design-ssrs-rdl-report-using-table-with-multi-text-run.rdl).