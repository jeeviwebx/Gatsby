---
title: Report Explorer | Standalone Designer | Bold Reports
description: The Report Explorer panel offers an organized, hierarchical view of the report structure with quick navigation, selection states and search capabilities.
canonical: /enterprise-reporting/designer-guide/report-designer/compose-report/report-explorer/
---

# Report Explorer

The **Report Explorer** panel offers an organized, hierarchical view of the report structure with quick navigation, selection states, and search capabilities.

![Report Explorer panel showing hierarchical report structure](/static/assets/on-premise/images/report-designer/compose-report/report-explorer/report-explorer-user-interface.png '#width=400px')

Prefer watching over reading? Check out this video for Report Explorer:

`youtube: https://www.youtube.com/watch?v=qV2RjXHPDW8`

To open the **Report Explorer**, click on the `Report Explorer` icon in the `Data Configuration` panel.
![Report Explorer icon in Data Configuration panel](/static/assets/on-premise/images/report-designer/compose-report/report-explorer/report-explorer-icon.png '#width=350px')

## Key Features

### Persistent Panel

The Report Explorer panel remains open until manually closed, ensuring an uninterrupted workflow.
![Docked Report Explorer panel with persistent view](/static/assets/on-premise/images/report-designer/compose-report/report-explorer/report-explorer-dock-panel.png '#width=600px')

### Hierarchical Display

Displays a tree view of a report’s RDL structure, organizing elements under sections like Report, Header, Body, and Footer for easy navigation.
![Report Explorer hierarchy view showing sections and items](/static/assets/on-premise/images/report-designer/compose-report/report-explorer/report-explorer-hierarchy-view.png '#width=400px')

Each report element is identified by its name and type. In the image below, the image icon and the label `(Image)` indicate the type of the report item, while `Logo_Image` represents its name.
![Report Explorer item type and name indication](/static/assets/on-premise/images/report-designer/compose-report/report-explorer/report-element-denotion.png '#width=400px')

### Dynamic Updates

The Report Explorer panel updates dynamically in real time as you modify the report in the design area.

When a new report item is added, it immediately appears in the hierarchical structure of the Report Explorer, reflecting its position within sections such as Header, Body, or Footer.
In the image below, a Rectangle and a TextBox report item have been added. These items are listed under the Body section in the panel.
![Dynamic updates in Report Explorer when adding items](/static/assets/on-premise/images/report-designer/compose-report/report-explorer/report-element-add.png '#width=600px')

Similarly, when a report item is removed from the design surface, it is instantly removed from the Report Explorer. This ensures that the panel always reflects the current structure of the report.
In the image below, the Rectangle report item has been deleted from the design surface and is no longer visible in the panel.
![Dynamic updates in Report Explorer when removing items](/static/assets/on-premise/images/report-designer/compose-report/report-explorer/report-element-remove.png '#width=600px')

Selecting a report item in the design area automatically highlights the corresponding item in the Report Explorer. A background color indicate the selection, enabling seamless interaction between the design surface and the panel.
In the image below, the Textbox report item is selected in the design area, so the background highlight is applied to the Textbox node in the panel.
![Report Explorer item selection highlight](/static/assets/on-premise/images/report-designer/compose-report/report-explorer/report-element-selection.png '#width=600px')

When a child item is selected in the design area, the parent node in the hierarchical structure automatically expands to reveal the selected child item. In the image below, the Rectangle item inside the Tablix is selected. As a result, the Tablix node is expanded in the panel.
![Report explorer item child selection](/static/assets/on-premise/images/report-designer/compose-report/report-explorer/report-element-child-selection.png '#width=600px')

### Search Functionality

The search feature in the Report Explorer panel helps you quickly find specific report elements. When you search for a report item by name, the results appear in a parent-child hierarchy, making it easy to identify the item’s exact position within the report structure.
![Report Explorer search results with parent-child hierarchy](/static/assets/on-premise/images/report-designer/compose-report/report-explorer/search-with-match.png '#width=400px')

If no results are found, a `No matches found` message will appear in the Report Explorer panel.
![Report explorer search error message](/static/assets/on-premise/images/report-designer/compose-report/report-explorer/search-with-no-match.png '#width=400px')

To close the Report Explorer panel, click the Report Explorer icon again.