---
title: Design Report using Tablix Wizard | Standalone Designer
description: Design an SSRS RDL report using the tablix wizard to display a list of records in the table or matrix format in Bold Reports Designer
canonical: /enterprise-reporting/designer-guide/report-designer/report-items/tablix-wizard/design-report-using-the-tablix-wizard/
---
# Design SSRS Matrix Report using Tablix Wizard

This section describes the steps to design an Annual Sales Report by Country and Bank using Tablix Wizard.

## Create dataset

To present data using the tablix wizard, create a dataset and bind the required data within the tablix wizard. In this design section, the following dataset query is used for dataset creation.

```sql
SELECT [Sales].[vStoreWithDemographics].[CustomerID],
[Sales].[vStoreWithDemographics].[Name],
[Sales].[vStoreWithDemographics].[ContactType],
[Sales].[vStoreWithDemographics].[Title],
[Sales].[vStoreWithDemographics].[FirstName],
[Sales].[vStoreWithDemographics].[MiddleName],
[Sales].[vStoreWithDemographics].[LastName],
[Sales].[vStoreWithDemographics].[Suffix],
[Sales].[vStoreWithDemographics].[Phone],
[Sales].[vStoreWithDemographics].[EmailAddress],
[Sales].[vStoreWithDemographics].[EmailPromotion],
[Sales].[vStoreWithDemographics].[AddressType],
[Sales].[vStoreWithDemographics].[AddressLine1],
[Sales].[vStoreWithDemographics].[AddressLine2],
[Sales].[vStoreWithDemographics].[City],
[Sales].[vStoreWithDemographics].[StateProvinceName],
[Sales].[vStoreWithDemographics].[PostalCode],
[Sales].[vStoreWithDemographics].[CountryRegionName],
[Sales].[vStoreWithDemographics].[AnnualSales],
[Sales].[vStoreWithDemographics].[AnnualRevenue],
[Sales].[vStoreWithDemographics].[BankName],
[Sales].[vStoreWithDemographics].[BusinessType],
[Sales].[vStoreWithDemographics].[YearOpened],
[Sales].[vStoreWithDemographics].[Specialty],
[Sales].[vStoreWithDemographics].[SquareFeet],
[Sales].[vStoreWithDemographics].[Brands],
[Sales].[vStoreWithDemographics].[Internet],
[Sales].[vStoreWithDemographics].[NumberEmployees] FROM [Sales].[vStoreWithDemographics]
```

> Refer to the [Create Data](./../../../manage-data/dataset/create-an-embedded-dataset/) section and create a dataset using the above query. The `AdventuresWorks` database is used here.

## Add matrix using tablix wizard

1. The tablix wizard is listed in the item panel under the `Data Regions` category.
   ![Tablix Wizard listed in item panel](/static/assets/on-premise/images/report-designer/report-items/tablix-wizard/item-panel-view.png '#width=195px')

2. Drag and drop the tablix wizard report item into the design area from the item panel.
   ![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/tablix-wizard/drag-and-drop.png '#width=600px')

3. The available datasets in the report will be listed in the drop-down. Choose a dataset from the drop-down list.
   ![Tablix wizard with Dataset](/static/assets/on-premise/images/report-designer/report-items/tablix-wizard/tablix-dataset.png '#width=600px')

4. Drag and drop `AnnualSales` into the `Values` section.
   ![Tablix wizard with row values](/static/assets/on-premise/images/report-designer/report-items/tablix-wizard/tablix-wizard-value.png '#width=600px')

5. Hover on the `AnnualSales` field to enable the `Settings` icon, then click the `Settings` icon (highlighted below) to open the aggregation menu.
   ![Tablix wizard config icon](/static/assets/on-premise/images/report-designer/report-items/tablix-wizard/config-icon.png '#width=500px')

   You can set the aggregation type by which you want to compute the selected value.
   ![Tablix wizard with aggregation](/static/assets/on-premise/images/report-designer/report-items/tablix-wizard/value-with-aggregation.png '#width=600px')

6. Drag and drop `CountryRegionName` into the `Columns` group and `BankName` into the `Rows` group.
    ![Tablix wizard with column and values](/static/assets/on-premise/images/report-designer/report-items/tablix-wizard/tablix-wizard-col-row.png '#width=600px')

7. Click on the `Ok` button. The matrix will now be rendered on the design surface as shown below,
    ![Matrix simple design](/static/assets/on-premise/images/report-designer/report-items/tablix-wizard/rendered-matrix.png '#width=600px')

## Format matrix design

In the design below, the report header has been added, and the background color and font styles in the matrix cells have been updated to enhance the report design.

![Formated Tablix Wizard](/static/assets/on-premise/images/report-designer/report-items/tablix-wizard/format-design.png '#width=410px')

> Refer to the [Cell Properties](./../../../report-items/tablix/cell-properties/#cell-properties) section to style the matrix cells and [Show or hide header and footer](./../../../compose-report/show-or-hide-header-footer-in-report/) section to add or remove header/footer in the report.

## Report preview

In the report preview, the Annual Sales Report will be displayed as shown below,
![Matrix overall design](/static/assets/on-premise/images/report-designer/report-items/tablix-wizard/matrix-design-preview.png)

> Download the above report design from this [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/tablix-wizard/design-ssrs-matrix-report-using-tablix-wizard.rdl).