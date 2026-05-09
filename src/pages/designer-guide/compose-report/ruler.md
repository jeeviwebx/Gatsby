---
title: Working with Rulers | Standalone Designer | Bold Reports
description: Overview of the Ruler in the Web Report Designer, helping users precisely position report items and maintain a clear, organized layout.
canonical: /enterprise-reporting/designer-guide/report-designer/compose-report/ruler/
---

# Ruler

The **Ruler** in the Web Report Designer is an essential tool for ensuring precise placement of report items, both for on-screen design and print layout. It provides visual guidance that helps users maintain a clean, organized layout, making it easier to export reports with consistent spacing and alignment. This feature enhances accuracy, allowing users to design, adjust, and finalize reports efficiently while ensuring they are print-ready and ready for export.

![Ruler user interface](/static/assets/on-premise/images/report-designer/compose-report/ruler/ruler-user-interface.png '#width=500px')

## Error Indication Lines

Bold Reports<sup>®</sup> Designer reports are designed using a visual **page view** that simulates how elements will appear when rendered. This design interface assists users in visualizing the placement of content but does not represent the final output in all export formats **(print view)**. Specifically, pagination behavior may vary during export.

### Design-Time View(Page View) vs. Export Output(Print View)

The design-time **page view** is primarily for layout and positioning purposes. It provides a close approximation of the final output but does not enforce the strict pagination rules that apply when exporting a report (e.g., to PDF).

When exporting, SSRS follows strict pagination rules based on the following parameters:

* Page size
* Margins
* Interactive height and width

Due to these constraints, even a slight overflow—such as one pixel of extra space caused by padding, spacing, or object alignment—can result in unexpected additional pages in the exported report.

### Page Overflow Indicators

To assist in maintaining proper layout during design time(page view), Bold Reports<sup>®</sup> Designer provides visual indicators to alert users of potential overflow issues:

Red error lines will appear on the rulers if the report content exceeds the defined page width or height.

A horizontal indication line will appear if the following condition is met:

```html
Page Width - (Page Left Margin + Page Right Margin) < Body Width
```

![horizontal Error indication lines](/static/assets/on-premise/images/report-designer/compose-report/ruler/horizontal-error-indication-line.png '#width=500px')

A vertical indication line will appear if the following condition is met:

```html
Page Height - (Page Top Margin + Page Bottom Margin) < (Header Height + Body Height + Footer Height)
```

![vertical Error indication lines](/static/assets/on-premise/images/report-designer/compose-report/ruler/vertical-error-indication-line.png '#width=500px')

For example, consider the report width is `816 px`, with a left margin of `100 px` and a right margin of `100px`. To determine whether the body fits within the printable area, the following formula is used:

```html
Body Width (616 px) + Left Margin (100 px) + Right Margin (100 px) <= Report Width (816 px)
```

A horizontal error indication line will appear if the body width exceeds `616 px`, because it would overflow the printable area (`816 px` - `100 px` - `100 px` = `616 px`).
If the body width is `616 px` or less, it fits within the available space, and the error indication line will not be displayed.

### Best Practices

To ensure your report exports as intended, follow these guidelines:

* Keep all report elements within the visible horizontal and vertical page boundaries.
* Use the red error lines as warnings and adjust content accordingly.
* Aim to stay within the layout limits to preserve a single-page format, especially for PDF exports.

To understand how page margin and usable area are calculated, refer to the [Page Layout](./../../compose-report/page-layout/) section.

### Vertical Rulers

Separate vertical rulers are provided for the **Header**, **Body**, and **Footer** to clearly differentiate and measure each section.

![Separate vertical rulers for each section](/static/assets/on-premise/images/report-designer/compose-report/ruler/separate-vertical-rulers.png '#width=500px')

### Section Lines

Section lines visually separate different report sections (like header, body, and footer), making it easier to calculate each section’s height.

![Section lines between header, body, footer](/static/assets/on-premise/images/report-designer/compose-report/ruler/section-lines.png '#width=500px')

### Mouse Position Indicator

* A **mouse move line** tracks your current cursor location within the design area.
* These lines help you position report items accurately.
* They disappear when the mouse moves outside the design area.

![Mouse position indicator line](/static/assets/on-premise/images/report-designer/compose-report/ruler/mouse-position-indicator.png '#width=500px')

### Show or hide Ruler

To show or hide the Ruler, Open the View menu in the toolbar. Now, click on the Ruler option in the menu.

![Show or hide report header](/static/assets/on-premise/images/report-designer/compose-report/ruler/enable-rulers.png '#width=200px')