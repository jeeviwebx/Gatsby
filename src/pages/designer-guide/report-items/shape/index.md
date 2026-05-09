---
title: Shape Report Item | Standalone Report Designer
description: This section describes about shape report item and its properties to design a report using shape in Standalone Report Designer.
canonical: /enterprise-reporting/designer-guide/report-designer/report-items/shape/
---

# Shape

A `Shape` Report Item is a graphical element used in a report layout to provide visual structure, separate content areas, or enhance the design without directly displaying data.

Prefer watching over reading? Check out this video for the shape report item:

`youtube: https://www.youtube.com/watch?v=X3t32kCiBQA`

## Adding a shape to the report

1. Shape report item is listed in the item panel under the `Shapes` category.
   ![Shape listed in item panel](/static/assets/on-premise/images/report-designer/report-items/shape/shape-item-in-item-panel.png '#width=215px')
2. Drag and drop the shape report item into the design area from the item panel.
   ![Drag and drop shape report item into design area](/static/assets/on-premise/images/report-designer/report-items/shape/drag-and-drop-shape.png '#width=355px')
3. Once the shape item is placed in the design area, its corresponding properties will be displayed in the properties panel.
   ![Adding Shape to design](/static/assets/on-premise/images/report-designer/report-items/shape/shape-properties.png '#width=440px')

### Common Shape Properties

Properties of a shape report item are listed under the `Basic Settings` category in the properties panel.

![Shape item with properties view](/static/assets/on-premise/images/report-designer/report-items/shape/shape-basic-settings.png '#width=400px')

<span style="font-weight:bold">Shapes</span>

The list of supported shapes are provided in the `Shapes` drop-down menu.

![Shape Types](/static/assets/on-premise/images/report-designer/report-items/shape/shape-types-list.png '#width=400px')

Select a shape in the design area, and then choose a new shape type from the drop-down menu. The design will update accordingly.

![Shape types Dropdown](/static/assets/on-premise/images/report-designer/report-items/shape/shape-types-change.png '#width=385px')

Supported shapes types are listed in the [Shape Types](./../../report-items/shape/shape-types/) section.

<span style="font-weight:bold">Rotation Angle</span>

The `Rotation Angle` property enables you to rotate a specific shape to a desired angle. The range is from 0 to 360 degrees.

![Shape Rotation Angle](/static/assets/on-premise/images/report-designer/report-items/shape/shape-angle.png '#width=385px')

<span style="font-weight:bold">Fill Color</span>

The `Fill Color` property can be used to set a fill color for a particular shape report item.

![Shape fill color](/static/assets/on-premise/images/report-designer/report-items/shape/shape-fillcolor.png '#width=410px')

<span style="font-weight:bold">Line Style</span>

The `Line Style` property can be used to set a stroke color, stroke width, stroke style for a particular shape report item.

<span style="font-weight:bold">Line Style</span>

The `Line Style` property sets the border style for a particular shape report item.

![Shape border style](/static/assets/on-premise/images/report-designer/report-items/shape/shape-stroke-styles.png '#width=410px')

<span style="font-weight:bold">Line Color</span>

The `Line color` property sets the border color for a particular shape report item.

![Shape border color](/static/assets/on-premise/images/report-designer/report-items/shape/shape-line-color.png '#width=410px')

<span style="font-weight:bold">Line width</span>

The `Line width` property sets the border width for a particular shape report item.

![Shape border width](/static/assets/on-premise/images/report-designer/report-items/shape/shape-line-width.png '#width=410px')

### Additional properties for Star shape

`Star Count` and `Concavity` are two unique properties available only for the Star shape.

![Start shape properties](/static/assets/on-premise/images/report-designer/report-items/shape/star-shape-basic-settings.png '#width=400px')

<span style="font-weight:bold">Star Count</span>

The `Star Count` property specifies the number of points on the star. The range is between 3 and 8.

![Start shape count](/static/assets/on-premise/images/report-designer/report-items/shape/shape-star-count.png '#width=410px')

<span style="font-weight:bold">Concavity</span>

The `Concavity` property adjusts the depth of the star’s inner points. It ranges from 0.3 to 1.0, where lower values create sharper indents.

![Start shape concavity](/static/assets/on-premise/images/report-designer/report-items/shape/shape-star-concavity.png '#width=410px')

### Additional properties for Arrow shape

`Arrow Height` and `Arrow Width` are two unique properties available only for the Arrow shape.

![Arrow shape properties](/static/assets/on-premise/images/report-designer/report-items/shape/arrow-shape-basic-settings.png '#width=400px')

<span style="font-weight:bold">Arrow Height</span>

The `Arrow Height` property defines the height of the arrowhead, with a range from 0 to 100.

![Arrow shape height](/static/assets/on-premise/images/report-designer/report-items/shape/shape-arrow-height.png '#width=410px')

<span style="font-weight:bold">Arrow Width</span>

The `Arrow Width` property defines the width of the arrow's stem, with a range from 0 to 100.

![Arrow shape width](/static/assets/on-premise/images/report-designer/report-items/shape/shape-arrow-width.png '#width=410px')

## General properties

### Name

The `Name` property can be used to provide an unique name to the shape item in the report.

### Appearance

The border style, color, width, and background color properties are used to style and customize the shape's appearance in the report design. These properties are listed under the `Appearance` category in the properties panel.

### Link

The Linking property in reports enables you to create interactive and user-friendly reports by adding actions such as **Hyperlink** and **Report Linking**. Refer [Linking](./../../compose-report/link-data/) section to know more about linking.
![Shape link property](/static/assets/on-premise/images/report-designer/report-items/gauge/linear-gauge/enable-link-action.png '#width=355px')

#### Border

Border properties enable you to add or customize the border around a shape item, helping to visually separate it in the report design. To set border properties using the properties panel, refer to the [Border Properties](./../../compose-report/common-properties/#border-properties) section.

#### Background color

Using the background color property, you can set the color of the shape's background. To set background color using properties panel refer [Background color](./../../compose-report/common-properties/#background-color) section.

### Position

The position property is used to define the width, height, left, and top position of the shape in the report design. To handle these properties using properties panel refer [Position](./../../compose-report/common-properties/#position) section.

### Visibility

Visibility property is used to conditionally show or hide the shape report item on report preview or export action. To set visibility of shape item using properties panel refer [Visibility](./../../compose-report/common-properties/#visibility) section.

### Miscellaneous

#### Tooltip

Tooltip property can be used to display informative text or value, when the user hovers over on the report item in report preview. To set tooltip for shape item using properties panel refer [Tooltip](./../../compose-report/common-properties/#tooltip) section.

#### Bookmark

Bookmark links enable users to navigate to different parts of an SSRS report. You can add bookmarks to textboxes, images, tables, charts, or unique group values in a tablix, directing users to specified locations in the report. The value of the bookmark property can be either custom strings or expressions. For more details, refer to the [Bookmark](./../../compose-report/bookmark/) section to configure bookmark in the report design.

Static or dynamic text can be set as the value for the bookmark property. For setting and resetting dynamic text, refer to the  [Set Expression](./../../compose-report/properties-panel/#set-expression) and [Reset Expression](./../../compose-report/properties-panel/#reset-expression) sections.

#### Custom Style

The `Custom Style` property enables the application of external CSS for styling report items, providing enhanced flexibility beyond the built-in styling options. This feature allows you to meet specific design requirements and maintain consistent styling across multiple reports. For a step-by-step guide on setting up custom styles in your report, check the How To section of this guide.

![custom style property](/static/assets/on-premise/images/report-designer/report-items/shape/custom-style-property.png '#width=355px')

## Set expression

An expression can be set to few properties of the shape report item to process the property values based on expressions. To set expressions to the shape report item properties, refer [Set Expression](./../../compose-report/properties-panel/#set-expression) section.

## Reset expression

To `Reset` the expression applied to a property, refer [Reset Expression](./../../compose-report/properties-panel/#reset-expression) section.

## Advanced properties

Few properties of the shape report item contains nested properties. To open and handle nested properties, refer [Advanced Properties](./../../compose-report/properties-panel/#advanced-properties) section.

## See also

* [Step-by-Step: Designing a Manufacturing Flowchart Report](./../../report-items/shape/design-ssrs-rdl-report-using-shapes/)