---
title: Report properties | Standalone Report Designer
description: This section describes the steps to view and edit the report property values in Standalone Report Designer.
canonical: /enterprise-reporting/designer-guide/report-designer/compose-report/report-properties/
---

# Report properties

To open the `Report` properties, focus the mouse pointer outside of the design area.

![Report properties](/static/assets/on-premise/images/report-designer/report-items/properties-panel/open-report-properties.png)

## Basic settings

The border style, color, width, background color and performance settings properties are listed under the `Basic Settings` category.

![Report basic settings](/static/assets/on-premise/images/report-designer/report-items/properties-panel/report-basic-settings.png '#width=350px')

### Border

Refer [Border Properties](./../../compose-report/common-properties/#border-properties) section.

### Background color

Refer [Background color](./../../compose-report/common-properties/#background-color) section.

## Background Image

Background image property can be used to display company logos, watermarks, or any other background image to the report. To set background image to the report refer [Background Image](./../../compose-report/background-image/) section.

### Performance Settings

The Performance Settings section helps you enable best practices for optimizing RDL/RDLC report rendering in Bold Reports<sup>®</sup>. Refer to the [Performance settings](./../../compose-report/performance-settings/) section to achieve optimized rendering settings.
![Performance settings](/static/assets/on-premise/images/report-designer/report-items/properties-panel/performance-settings-property.png '#width=350px')

## Code

Code Module is used to embed a custom code or assemblies to a report. To embed a custom function or assembly into the report refer [Code Module](./../../compose-report/code-module/) section.
![Rectangle listed in item panel](/static/assets/on-premise/images/report-designer/report-items/properties-panel/custom-code-property.png '#width=350px')

## Page Units

Page unit property is used to set the unit type for the entire report. By default, the report unit type is set to `Pixels`. Refer [Unit Switcher](./../../compose-report/unit-switcher/) section to switch the unit type of the report in Web Report Designer.
![Rectangle listed in item panel](/static/assets/on-premise/images/report-designer/report-items/properties-panel/page-unit-property.png '#width=350px')

## Margin

Using the `Margin` property, you can increase or decrease the left, right, top, and bottom spacing of the report layout.

![Rectangle listed in item panel](/static/assets/on-premise/images/report-designer/report-items/properties-panel/margin-property.png '#width=350px')

## Paper Size

The paper size property is used to specify the size of the paper, when you print the report. The paper size property determines the number of pages in a report.

### Orientation

Page orientation is the direction in which a report is displayed or printed. The two basic types of page orientation are portrait (vertical) and landscape (horizontal). The default orientation is `portrait`.

![Rectangle listed in item panel](/static/assets/on-premise/images/report-designer/report-items/properties-panel/orientation-types.png '#width=350px')

### Paper size

Select a paper size from the drop-down list to set the width and height dimensions for the report layout. This property decides the width and height of the report layout on export action.

![Rectangle listed in item panel](/static/assets/on-premise/images/report-designer/report-items/properties-panel/paper-size-types.png '#width=350px')

To set the custom width and height  for the report layout choose `Custom` paper size. Once you select the `Custom` type in the drop-down list the `Width` and `Height` fields will be enabled, you can increase or decrease the width and height properties of the report layout.

![Rectangle listed in item panel](/static/assets/on-premise/images/report-designer/report-items/properties-panel/custom-paper-size.png '#width=350px')

## Language

The **Language** property can be used to set the locale on a report which determines the default formats for displaying report data.

![Report Language](/static/assets/on-premise/images/report-designer/report-items/properties-panel/report-language.png '#width=350px')

Select the required language in the **Language** property dropdown.

> The language property on a text box overrides the language property on the report.

## Miscellaneous

### ConsumeContainerWhitespace

This property can be used to remove the unwanted white space in the report preview and export. True if all whitespace in containers, should be consumed; otherwise, false.

![Consume Container Whitespace](/static/assets/on-premise/images/report-designer/report-items/properties-panel/consume-container-whitespace.png '#width=350px')

### Custom attributes

This property can be used to add custom properties at report level. To create and assign values for custom properties using properties panel refer [Custom Properties](./../../compose-report/common-properties/#custom-properties) section.
![Custom properties at report level](/static/assets/on-premise/images/report-designer/report-items/properties-panel/custom-properties-report-level.png '#width=450px')

### Custom Style

The `Custom Style` property enables the use of external CSS for styling report, providing enhanced flexibility beyond the built-in styling options. This property allows you to meet specific design requirements and maintain consistent styling across multiple reports. For a step-by-step guide on setting up custom styles in your report, check the **How To** section of this guide.

![Custom Style at report level](/static/assets/on-premise/images/report-designer/report-items/properties-panel/custom-style-report-level.png '#width=450px')
