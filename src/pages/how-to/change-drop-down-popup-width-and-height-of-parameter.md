---
layout: post
title: Change the pop-up width and height size parameter drop-down 
description: This document provides the details how to change the pop width and pop height size of parameter drop-down 
control: Bold Reports
documentation: ug
---

# How to change the drop-down pop-up width and height of the available value parameter

You have to make use of the custom properties for the report to change the drop-down pop-up width and height of the available value parameter. Follow these steps, to change the drop-down pop-up width and height of the available value parameter.

1. Open the report in our Bold Report Designer.

2. Open the report properties and click the custom attributes to set the custom properties for the report.

   ![Custom attributes](/static/assets/standalone-report-designer/images/how-to/custom-attributes.png)

3. Add custom properties to the report for the parameter as shown in the following images:

   To change the pop-up height of available value parameter drop-down, add the custom property to the report as shown in following image.
   ![Parameter popup height](/static/assets/standalone-report-designer/images/how-to/parameter-popup-height.png '#width=450px')
   >The name of the property to change the available value parameter drop-down pop-up height should be in `SfParam_<<ParamemeterName>>_PopupHeight` format.

   The pop-up height of the available value parameter drop-down will be changed to the height value that is specified in the property as shown in following image.
   ![Preview popup height](/static/assets/standalone-report-designer/images/how-to/preview-popup-height.png)

   To change the pop-up width of available value parameter drop-down, add the custom property to the report as shown in following image.
   ![Parameter popup width](/static/assets/standalone-report-designer/images/how-to/parameter-popup-width.png '#width=455px')
   >The name of the property to change the available value parameter drop-down pop-up width should be in `SfParam_<<ParamemeterName>>_PopupWidth` format.

   The pop-up width of the available value parameter drop-down will be changed to the width value that is specified in the property as shown in following image.
   ![Preview popup width](/static/assets/standalone-report-designer/images/how-to/preview-popup-width.png '#width=600px')