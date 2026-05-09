---
title: Download and Installation | Standalone Report Designer
description: This section briefly describes about the download and installation steps of Standalone Report Designer setup.
---

# Download and installation

This section briefly describes the steps involved in download and installation of the Standalone Report Designer setup.

## Register and download Standalone Report Designer

1. Go to Standalone Report Designer [Home page](https://www.boldreports.com/standalone-report-designer) and click `Try it now`.
   ![Product home page](/static/assets/standalone-report-designer/images/installation/home-page.png)

2. Register with a new account or sign in with an existing account.
   ![Account login page](/static/assets/standalone-report-designer/images/installation/registration.png)

3. On sign-in you will be redirected to Bold Reports<sup>®</sup> Cloud site. Click on the profile icon at the top right corner and select `View account`.
   ![Cloud page](/static/assets/standalone-report-designer/images/installation/cloud-site.png)

4. You will be redirected to the accounts page.
   ![Product accounts page](/static/assets/standalone-report-designer/images/installation/accounts-page.png)

5. Expand the `Downloads & Keys` section and select `Downloads`.
   ![Product download page](/static/assets/standalone-report-designer/images/installation/download-option.png)

6. Under Standalone Report Designer, select the file type and click `Download`.
   ![Standalone Report Designer setup download](/static/assets/standalone-report-designer/images/installation/download-setup.png)

## Installing Standalone Report Designer

1. After downloading the setup file, double-click the EXE in its saved location to start the installation.
   ![Standalone Report Designer Installer Extraction](/static/assets/standalone-report-designer/images/installation/setup-extraction.png)

2. Sign in with your registered email address to unlock the setup.
   ![Bold Reports<sup>®</sup> license agreement](/static/assets/standalone-report-designer/images/installation/bold-reports-license-agreement.png)

3. Accept the license agreement of Standalone Report Designer by clicking the `License Terms and Conditions`.

   > **Note :**
   > * For versions **below 10.x.x**: You will encounter a consent window titled `Consent to install CefSharp binaries and dependencies`. Please carefully read and accept the terms presented. Once you have done so, kindly click `Next` to proceed with the installation.
   > * For versions **10.x.x and above**: The CefSharp dependency is no longer required due WebView2 based implementation.

4. Choose the location where you would like to install the Standalone Report Designer setup and click `Install`.
   ![Path Selection Wizard](/static/assets/standalone-report-designer/images/installation/path-selection-page.png)

5. Read and accept the license to ship the selected client libraries, then click `Install`.
   ![Client library agreement](/static/assets/standalone-report-designer/images/installation/client-libraries.png)

6. The installation will now begin. You can cancel the installation at any time by clicking `Cancel`, if you prefer.
   ![Progress bar Wizard](/static/assets/standalone-report-designer/images/installation/installation-progress.png)

7. Upon successful installation, the following screen will appear. Click `Launch Application` to start the program.
   ![Fininsh Wizard](/static/assets/standalone-report-designer/images/installation/installation-finish-wizard.png)

8. After installing the setup, two separate launchers will be added to your desktop: `Bold Reports Designer` and `Bold Reports RDLC Designer`. These are used for creating and editing RDL and RDLC reports, respectively.
   ![Desktop Shortcuts](/static/assets/standalone-report-designer/images/installation/desktop-shortcuts.png)

## Offline Installation

1. After downloading the setup file, double-click the EXE in its saved location to start the installation.
   ![Standalone Report Designer Installer Extraction](/static/assets/standalone-report-designer/images/installation/setup-extraction.png)

2. For offline installation, unlock the setup using an offline key. If you don't have the setup unlock key, click the `here` option as shown in the image below to download it.
   ![Installation Using Product Key](/static/assets/standalone-report-designer/images/installation/offline-installation-page.png)

3. This will redirect you to the Bold Reports<sup>®</sup> downloads page.
   ![Installation Using Product Key](/static/assets/standalone-report-designer/images/installation/unlock-key-redirected-page.png)

4. Expand the `Downloads & Keys` section and select `Claim License Key`.
   ![Claim License Key page](/static/assets/standalone-report-designer/images/installation/claim-license-key-page.png)

5. To download the unlock key file, expand the `Get Unlock Key File` accordion, select the `Standalone Report Designer` tab, and click the `Download Unlock Key File` button to download a file with the `.lic` extension.
   ![Get Unlock Key](/static/assets/standalone-report-designer/images/installation/get-unlock-key.png)

6. To unlock the setup, upload the downloaded `.lic` file. Then, check the box to accept the license terms and conditions and click **Next**.
   ![Installation Using Product Key](/static/assets/standalone-report-designer/images/installation/unlock-key-page.png)

7. Follow steps 4 to 7 as described in the [Online Installation](#installing-standalone-report-designer) section.

## Difference between RDL and RDLC designer

Using the `Bold Reports RDL Designer`, one can design RDL standard reports (.rdl). On the other hand, `Bold Reports RDLC Designer` can be used to design RDLC standard reports (.rdlc). Both RDL and RDLC reports follow the same XML schema format. A detailed difference between RDL and RDLC designers are tabulated as follows.

| RDL Designer                                  | RDLC Designer                                   |
|---------------------------------------|-----------------------------------------|
| It supports to design the 2008, 2010, and 2016 schema versions of Report Definition Language (RDL) report. The connection string and query details are stored within the report in the form of data source and data set | It supports to design the 2008, 2010, and 2016 schema versions of Report Definition Language Client-side (RDLC) report. This format contains only meta-information of data set fields |
| It provides the in-build data connectors such as SQL, Oracle, OLEDB, ODBC, XML, and Rest API data sources. Report data are processed by the in-build  connectors using the connection string and query details, which is stored in the respective RDL report| It does not have any in-build data connectors, instead requires to manually build the data set fields and pass the data information to process the report |
|The RDL reports are ready to be published and uploaded to a SQL Reporting Server or Bold Report Server| The RDLC reports are not suitable for server-side publishing and processing|
|The RDL designer is recommended for user who wants to publish reports into server and access them from multiple application using the single point (server) | The RDLC designer is recommended for user who wants to maintain the copy of the report definition in application and pass data from application level to process report|

The user can go with both RDL and RDLC designers for different purpose. The RDL designer is recommended for users who wants to publish reports into server and access them from multiple application using the single point (server). The RDLC designer is recommended for users who wants to maintain the copy of the report in application and pass data from application level to process report.