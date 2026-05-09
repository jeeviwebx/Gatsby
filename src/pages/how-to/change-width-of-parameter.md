---
layout: post
title: Change the width size of available parameter item
description: This document provides the details how to change the width size of available value parameter in the parameter block
control: Bold Reports
documentation: ug
---

# How to change the width of the available value parameter

You have to make use of the custom properties for the report to change the width of the available value parameter. Follow these steps, to change the width of the available value parameter.

1. Open the report in our Bold Report Designer.

2. Open the report properties and click the custom attributes to set the custom properties for the report.

   ![Custom attributes](/static/assets/standalone-report-designer/images/how-to/custom-attributes.png)

3. Add custom properties to the report for the parameter as shown in the following images:

   To change the width of available value parameter, add the custom property to the report as shown in following image.
   ![Parameter width](/static/assets/standalone-report-designer/images/how-to/parameter-width-custom-property.png '#width=455px')
   >The name of the property to change the available value parameter width should be in `SfParam_<<Parameter Name>>_ItemWidth` format.

   The width of the available value parameter will be changed to the width value that is specified in the property as shown in following image.
   ![Preview width](/static/assets/standalone-report-designer/images/how-to/parameter-width.png '#width=600px')