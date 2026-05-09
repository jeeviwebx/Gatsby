---
title: Design RDL Report using Shapes | Standalone Report Designer
description: Design an SSRS RDL report using Shape report items to create a visually engaging flowchart representing a manufacturing workflow in Standalone Report Designer.
canonical: /enterprise-reporting/designer-guide/report-designer/report-items/shape/design-ssrs-rdl-report-using-shapes/
---

# Design ssrs rdl report using shape

This section describes the steps to design `Manufacturing Workflow for Tablet PC` report using shapes.

## Add text to the shape

1. Drag and drop a shape report item from the item panel to the design area.
   ![Drag and drop shape report item into design area](/static/assets/on-premise/images/report-designer/report-items/shape/circle-shape.png '#width=200px')
2. A circle shape will initially appear. Adjust the size of the circle to form an ellipse.
   ![Change the shape type](/static/assets/on-premise/images/report-designer/report-items/shape/ellipse-shape.png '#width=200px').
3. Configure the required properties for the shape report item.
   ![Configure the properties for shape report item](/static/assets/on-premise/images/report-designer/report-items/shape/ellipse-properties.png '#width=350px').
4. Drag and drop the textbox report item from the design panel onto the top of the shape report item.
    ![Drag and drop textbox report item into shape report item](/static/assets/on-premise/images/report-designer/report-items/shape/ellipse-textbox.png '#width=200px')

    > Note: Shape report items are not container elements, meaning they do not contain or nest any other items. Each shape and textbox are considered a separate element in the report design.

5. Resize the textbox as necessary, configure the necessary properties, and insert text into the textbox.
   ![Configure the properties for textbox report item](/static/assets/on-premise/images/report-designer/report-items/shape/ellipse-flow.png '#width=200px')

## Add an arrow shape for connecting shapes

1. From the item panel, drag and drop a shape report item below the previous shape.
   ![Drag and drop shape report item into design area](/static/assets/on-premise/images/report-designer/report-items/shape/ellipse-arrow.png '#width=200px')
2. Change the shape type to `Down Arrow`.
   ![Change the shape type](/static/assets/on-premise/images/report-designer/report-items/shape/arrow-shape.png '#width=400px').
3. Adjust the shape report item size as necessary and configure the required properties to modify the arrow shape accordingly.
   ![Configure the properties for shape report item](/static/assets/on-premise/images/report-designer/report-items/shape/arrow-flow.png '#width=300px').

## Add a rectangle shape for decision points

1. From the item panel, drag and drop a shape report item below the arrow shape.
   ![Drag and drop shape report item into design area](/static/assets/on-premise/images/report-designer/report-items/shape/arrow-rectangle.png '#width=200px')
2. Change the shape type to `Rectangle`.
   ![Change the shape type](/static/assets/on-premise/images/report-designer/report-items/shape/rectangle-shape.png '#width=200').
3. Adjust the size of the shape report item as needed and configure the necessary properties.
   ![Configure the properties for shape report item](/static/assets/on-premise/images/report-designer/report-items/shape/rectangle-properties.png '#width=455px').
4. Drag and drop the textbox report item from the design panel into the shape report item. Resize the textbox as needed.
   ![Drag and drop textbox report item into shape report item](/static/assets/on-premise/images/report-designer/report-items/shape/rectangle-textbox.png '#width=200px')
5. Configure the necessary the properties in the textbox, add the text in the textbox.
   ![Configure the properties for textbox report item](/static/assets/on-premise/images/report-designer/report-items/shape/rectangle-flow.png '#width=200px')

## Add curved arrow shape for connection between shapes

1. From the item panel, drag and drop a line report item below the previous shape.
   ![Drag and drop line report item into design area](/static/assets/on-premise/images/report-designer/report-items/shape/shape-line.png '#width=350px')
2. To display a straight line, set the line report item's width to 0.
   ![Configure the properties for line report item](/static/assets/on-premise/images/report-designer/report-items/shape/line.png '#width=350px')
3. Drag and drop the shape report item near to the line report item.
   ![Drag and drop shape report item into design area](/static/assets/on-premise/images/report-designer/report-items/shape/line-ellipse.png '#width=350px')
4. Change the shape type to `Left Arrow`.
   ![Change shape type](/static/assets/on-premise/images/report-designer/report-items/shape/line-arrow.png '#width=355px')
5. Adjust the shape report item size as necessary and configure the required properties to modify the arrow shape accordingly.
   ![Configure properties for Arrow shape](/static/assets/on-premise/images/report-designer/report-items/shape/arrow-properties.png '#width=355px').

## Report header

1. Enable the report `Header` to add a title to the report.
   ![Enable header tag](/static/assets/on-premise/images/report-designer/report-items/shape/enable-report-header.png '#width=355px')
   > Refer [Show or hide header and footer](./../../../compose-report/show-or-hide-header-footer-in-report/) section to add or remove header/footer in the report.
2. Now, add a rectangle report item in the report header area and a textbox within the rectangle.
   ![Add report items in header area](/static/assets/on-premise/images/report-designer/report-items/shape/add-report-items-in-header-area.png '#width=410px')
3. Set the report title text in the textbox and customize the appearance of the title using the textbox and rectangle properties in properties panel as required.
   ![Report title text](/static/assets/on-premise/images/report-designer/report-items/shape/report-title-text.png '#width=410px')

## Final design

A final design of `Manufacturing Workflow for Tablet PC with SIM and Touch Functionality Options` report will look like below.

![Manufacturing Workflow for Tablet PC report design](/static/assets/on-premise/images/report-designer/report-items/shape/final-design.png '#width=350px')

## Report preview

During the report preview, the `Manufacturing Workflow for Tablet PC with SIM and Touch Functionality Options` report is displayed like this:

![Manufacturing Workflow for Tablet PC report preview](/static/assets/on-premise/images/report-designer/report-items/shape/report-preview.png '#width=370px')

> Download the above report design from the [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/shape/Manufacturing-Workflow-for-Tablet-PC-with-SIM-and-Touch-Functionality-Options.rdl)