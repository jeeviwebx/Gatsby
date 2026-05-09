---
layout: post
title: Passing login user as parameter to Stored Procedure
description: Explains about how to pass the login user as parameter to stored procedure in Bold Reports Report Designer.
platform: embedded-reporting-tools
documentation: ug
---

# How to pass the login user as parameter to Stored Procedure

Use the `=User.UserID` expression to pass the login user as parameter for a stored procedure. Find the following steps to pass the login user value to stored procedure parameter for getting the data from database based on user.

1. Create a dataset using the stored procedure, which having a UserID as parameter from `Dataset` dialog box.

2. Select the dataset from `Data` panel and click the highlighted icon to open context menu with list of options. Select `Parameters...` option in the menu to open `Parameters` dialog box as shown in the following image.
   ![Select Parameter](/static/assets/standalone-report-designer/images/how-to/stored-procedure-userid-parameter/select-parameters.png)

3. Now, click the highlighted square icon of `UserId` parameter to open context menu with two options and select `Expression...` to open `Expression` dialog box as shown in the following image.
   ![Open Expression Dialog](/static/assets/standalone-report-designer/images/how-to/stored-procedure-userid-parameter/expression.png '#width=385px')

4. Then, select `User` option under `Built-in-Fields` from the highlighted `Options` combo box as shown in the following image.
   ![Select UserID](/static/assets/standalone-report-designer/images/how-to/stored-procedure-userid-parameter/user-id.png '#width=385px')

5. Select `UserID` and double click it to set `UserID` value as shown in the following image.
   ![Select Parameter](/static/assets/standalone-report-designer/images/how-to/stored-procedure-userid-parameter/set-user-id.png '#width=385px')