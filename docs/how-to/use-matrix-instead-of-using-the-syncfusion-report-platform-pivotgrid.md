---
layout: post
title: How to use Matrix instead of using the Pivot item
description: This section explains about how to use Matrix ReportItem instead of using the Pivot ReportItem in Bold Reports
documentation: ug
---

# How to use Matrix item instead of using the Classic Syncfusion<sup>®</sup> Report Platform PivotGrid item

Replaced the Syncfusion<sup>®</sup> Report Platform PivotGrid ReportItem with our brand new Matrix ReportItem in our Bold Report Designer. The Matrix ReportItem has additional unique features as follows:

1. Row and column grouping
2. Total support for row and column groups
3. Filter and sort expressions support for groups
4. Cell customization support
5. Cell merging support
6. Support to insert other ReportItems
7. Visual clues to indicate row and column groups

## Alternative action in Matrix ReportItem instead of PivotGrid ReportItem

### Data assign

#### PivotGrid ReportItem

The PivotGrid ReportItem uses the data assign panel, by which the fields need to be added as shown in the following image.![PivotGrid Data Assign](/static/assets/standalone-report-designer/images/how-to/difference-between-matrix-and-pivot/pivot-data-assign.png)

#### Matrix ReportItem

The Matrix ReportItem is provided with the Matrix Data Assign menu, which helps to assign the fields to the particular cell more precisely.![Matrix Data Assign](/static/assets/standalone-report-designer/images/how-to/difference-between-matrix-and-pivot/matrix-data-assign.png)

### Adding a column

#### PivotGrid ReportItem

By dragging the dataset fields in the data assign panel, new columns will be added in the PivotGrid ReportItem as shown in the following image.![PivotGrid Column](/static/assets/standalone-report-designer/images/how-to/difference-between-matrix-and-pivot/pivot-column.png)

#### Matrix ReportItem

Multiple columns can be added in the Matrix dynamically using the Matrix Context menu as shown in the following image.![Matrix Column](/static/assets/standalone-report-designer/images/how-to/difference-between-matrix-and-pivot/matrix-column.png)

### Header

#### PivotGrid ReportItem

The PivotGrid ReportItem will be added with default header when dataset fields are assigned, which can be modified with the properties provided in the property panel.![PivotGrid Header](/static/assets/standalone-report-designer/images/how-to/difference-between-matrix-and-pivot/pivot-header.png)

#### Matrix ReportItem

The Matrix ReportItem considers each cell as an individual and has the option to provide static values wherever required using the `Multi-Text Run Editor` dialog.![Matrix Header](/static/assets/standalone-report-designer/images/how-to/difference-between-matrix-and-pivot/matrix-header.png)