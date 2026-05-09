---
title: Tablix Wizard Report Item | Standalone Report Designer
description: This section explains the tablix wizard report item interface in Bold Reports Designer. Simplifying the configuration of Tablix structures (table and matrix data regions) in reports.
canonical: /enterprise-reporting/designer-guide/report-designer/report-items/tablix-wizard/
---

# Tablix Wizard

The tablix wizard helps user to design reports that display data in a tabular or matrix format. It provides options to define row and column groups for organizing data hierarchically.

## Overview

1. The tablix wizard is listed in the item panel under the `Data Regions` category.
   ![Tablix Wizard listed in item panel](/static/assets/on-premise/images/report-designer/report-items/tablix-wizard/item-panel-view.png '#width=195px')

2. Drag and drop the tablix wizard report item into the design area from the item panel.
   ![Drag and drop tablix report item into design area](/static/assets/on-premise/images/report-designer/report-items/tablix-wizard/drag-and-drop.png '#width=385px')

3. The Tablix Wizard will be rendered as shown below,
   ![Drag and drop tablix wizard into design area](/static/assets/on-premise/images/report-designer/report-items/tablix-wizard/initial-tablix-wizard.png '#width=485px')
      * `Data` - The available dataset in the report is listed in the Dataset drop-down.

      * `Fields` - This list box displays the fields available from the dataset which is selected in the drop-down list.

      * `Values` -  Users can drag and drop fields into the `Values` section to specify which data to analyze or summarize in the Tablix view.

      * `Columns` - Users can add fields to the `Columns` section to display data in a hierarchical column view in the Tablix design.

      * `Rows` - Users can add fields to the `Rows` section to display data in a hierarchical row view in the Tablix design.

4. Drag and drop the required fields into `Values` section to create a flat table design.
   ![Drag and drop fields into values](/static/assets/on-premise/images/report-designer/report-items/tablix-wizard/tablix-flat-design.png '#width=485px')

5. Click the `OK` button. The table design will render on the design surface as shown below,
   ![Table simple design](/static/assets/on-premise/images/report-designer/report-items/tablix-wizard/rendered-table.png '#width=700px')

If the report has no datasets, the Tablix Wizard interface will display as shown below.
![Tabli Wizard No data](/static/assets/on-premise/images/report-designer/report-items/tablix-wizard/tablix-nodata-msg.png '#width=500px')