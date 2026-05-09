---
layout: post
title: How to use table instead of using the grid item
description: This section explains about how to use Table ReportItem instead of using the Grid ReportItem in Bold Reports
documentation: ug
---

# How to use Table item instead of using the Classic Syncfusion<sup>®</sup> Report Platform Grid item

Replaced the Syncfusion<sup>®</sup> Report Platform Grid ReportItem with our brand new table ReportItem in our Bold Report Designer. The table ReportItem has additional unique features as follows.

1. Row and column grouping
2. Total support for row and column groups
3. Filter and sort expressions support for groups
4. Cell customization support
5. Cell merging support
6. Support to insert other ReportItems
7. Visual clues to indicate row and column groups

## Alternative action in Table ReportItem instead of Grid ReportItem

### Data assign

#### Grid ReportItem

The grid ReportItem uses the data assign panel by which the fields need to be added as shown in the following image.![Grid Data Assign](/static/assets/standalone-report-designer/images/how-to/difference-between-tablix-and-grid/grid-data-assign.png)

#### Table ReportItem

The table ReportItem is provided with the Table Data Assign menu, which helps to assign the fields to the particular cell more precisely.![Table Data Assign](/static/assets/standalone-report-designer/images/how-to/difference-between-tablix-and-grid/tabix-dataassign.png)

### Adding column

#### Grid ReportItem

On drag and drop the dataset fields in the data assign panel, new columns will be added in the grid ReportItem as shown in the following image.![Grid Column](/static/assets/standalone-report-designer/images/how-to/difference-between-tablix-and-grid/grid-column.png)

#### Table ReportItem

Multiple columns can be added in the table dynamically using the Table Context menu as shown in the following image.![Table Column](/static/assets/standalone-report-designer/images/how-to/difference-between-tablix-and-grid/table-column.png)

### Header

#### Grid ReportItem

The grid ReportItem is provided with default header, which can be modified with the properties provided in the property panel.![Grid Header](/static/assets/standalone-report-designer/images/how-to/difference-between-tablix-and-grid/grid-header.png)

#### Table reportitem

The Table ReportItem considers each cell as an individual and has the option to provide static values wherever required using the `Multi-Text Run Editor` dialog.![Table Header](/static/assets/standalone-report-designer/images/how-to/difference-between-tablix-and-grid/tablix-header.png)

## See also

* [Basic of SSRS Table Data Region](https://www.boldreports.com/blog/basics-of-ssrs-tablix-data-region)
* [Add Grouping and Totals in Table Data Regions](https://www.boldreports.com/blog/add-grouping-and-totals-in-tablix-data-regions)