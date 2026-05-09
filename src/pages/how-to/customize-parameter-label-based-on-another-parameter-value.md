---
layout: post
title: Change the parameter label based on another parameter
description: This document provides the details on how to change the parameter label depending on the previous parameter value
control: Bold Reports
documentation: ug
---

# How to customize the parameter label based on another parameter value

You have to make use of the custom code and the `SfExp` for the parameter label to get the parameter label changed based on another parameter value. Follow these steps, to change the label of parameter based on another parameter value.

1. Open the report in our Bold Report Designer.

2. Open the report properties and click `Code` to add the custom code to get the parameter label, as shown in the following image.

   ![Custom Code](/static/assets/standalone-report-designer/images/how-to/parameter-label-customization/parameter-custom-code.png '#width=385px')

3. While creating the parameter, use the custom code function and assign it to the `SfExp` to manually set a label of the parameter based on the previous parameter value as shown in the following image.

   ![Parameter label expression](/static/assets/standalone-report-designer/images/how-to/parameter-label-customization/parameter-label-expression.png '#width=355px')

While previewing the report, the parameter label will be as shown in the following image:

![Preview report with customized parameter label](/static/assets/standalone-report-designer/images/how-to/parameter-label-customization/preview-state.png)

> In this section, we have provided the steps to modify the parameter label based on another parameter value. Similarly, you can also modify the parameter label for various other scenarios like changing the culture of the parameter label or selecting dataset fields as parameter labels using the `SfExp` feature.

## See also

[Add report parameter to the report](../../designer-guide/report-parameters/add/)