---
layout: post
title: Error issue on rendering report with multiple parameters 
description: This documentation explains about how to resolve error issue on rendering report with multiple parameters
platform: embedded-reporting-tools
documentation: ug
---

# How to resolve #error issue on rendering the report with multiple parameters

`Allow multiple values` option is enabled in parameters and if a single value is passed to the parameters, you will get `#Error` issue on rendering the report with multiple parameters.

You can resolve this issue by adding the following expression for the parameters.
`=Join(Parameters!{Parametername}.Value,",")`

## See also

[Multiple value parameter](../../designer-guide/report-parameters/create-multi-value-parameter/)