---
title: Upgrade or downgrade reports | Standalone Report Designer
description: This section describes how to upgrade or downgrade RDL/RDLC reports to different RDL schema version using Standalone Report Designer.
canonical: /enterprise-reporting/designer-guide/report-designer/how-to/upgrade-or-downgrade-rdl-schema-version/
---

# How to upgrade or downgrade reports using Bold Reports<sup>®</sup> Designer

The user can upgrade or downgrade the reports between 2008, 2010 or 2016 RDL schema versions using the `Default Version` option. This option is provided under the `Report Properties` in properties panel.

![Version option](/static/assets/on-premise/images/report-designer/how-to/upgrade-or-downgrade-reports/version-option.png)

**Default** - It refers to the 2016 RDL schema version. When user creates a new report, by default the schema version is set to 2016.

**RDL2010** - Upgrades or downgrades report to 2010 RDL schema version.

**RDL2016** - Upgrades the report to 2016 RDL schema version.

## Steps to upgrade or downgrade reports

Follow the below steps to upgrade or downgrade the report using Bold Reports<sup>®</sup> Designer,

1. Launch Enterprise Server application and edit a target report.![Open report](/static/assets/on-premise/images/report-designer/how-to/upgrade-or-downgrade-reports/open-report.png '#width=400px')
2. Open [Report Properties](./../../compose-report/report-properties/). Under `Miscellaneous` category, choose the target version in `Default Version` property drop-down.![Choose version](/static/assets/on-premise/images/report-designer/how-to/upgrade-or-downgrade-reports/choose-version.png '#width=350px')
3. Now, save the report.

## Upgrading

You can upgrade reports as tabulated below,

|Current version | Target version |
|----------------|----------------|
| 2008 schema version | User can upgrade the reports to 2010 or 2016 schema version |
| 2010 schema version | User can upgrade the reports to 2016 schema version |

## Downgrading

You can downgrade reports as tabulated below,

|Current version | Target version |
|----------------|----------------|
| 2016 schema version | User can downgrade the reports to 2010 schema version |

> **NOTE:** The `Default Version` property is used to convert the RDL structure of the report that is opened or saved in the current report designer instance. It is not intended to display the actual version of the report opened in the designer.