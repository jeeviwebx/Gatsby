---
layout: post
title: Change the date parameter to DateTime UI for time values
description: This document provides the details how to change the date parameter to date time type for applying time value along with the date parameter
control: Bold Reports
documentation: ug
---

# How to change the UI of a date parameter to DateTime parameter

You have to make use of the custom properties for the report to change the UI of the date parameter to DateTime parameter. Follow these steps, to change the UI of the date parameter to DateTime parameter.

1. Open the report in our Bold Report Designer.

2. Open the report properties and click the custom attributes to set the custom properties for the report.

   ![Custom attributes](/static/assets/standalone-report-designer/images/how-to/custom-attributes.png)

3. Add custom properties to the report for the parameter with value of `DateTime` as shown in the following image:

   ![DateTime Picker setting custom property](/static/assets/standalone-report-designer/images/how-to/datetime-custom-property.png '#width=455px')
   > The name of the property to change the UI of date parameter to DateTime parameter should be in `SfParam_<parameter_Name>_DateTimePickerType` format.

   The date parameter UI will be changed to the DateTime UI based on the value that is specified in the property as shown in following image.
   ![Preview DateTime parameter](/static/assets/standalone-report-designer/images/how-to/parameter-datetime-preview.png '#width=600px')