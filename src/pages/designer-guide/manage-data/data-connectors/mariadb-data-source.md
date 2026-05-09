---
title: Connect to MariaDB Data Source | Standalone Report Designer
description: Learn how to connect to MariaDB data source and feed data to your RDL reports using Bold Reports Cloud Reporting.
canonical: /enterprise-reporting/designer-guide/report-designer/manage-data/data-connectors/mariadb-data-source/
---

# Connect to MariaDB data source

The Bold Reports<sup>®</sup> Designer supports connecting MariaDB database using SQL Query.

## Choose MariaDB data source

1. Click on the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-configuration-panel.png '#width=410px')
2. In the `DATA` configuration panel, click on the `NEW DATA` button.
   ![New Data Panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/new-data-button.png '#width=355px')
3. In the connection type panel, choose the `MariaDB` data source type.
   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/mariadb-data-source/connection-types.png '#width=355px')

### Create MariaDB data source with basic options

When you create a new data, the `NEW DATASOURCE` panel will show up with basic options,

1. Specify the data source name without special characters, in **Name** field.
2. In **Server Name** field, you need to specify the remote server name like `myserver.domain.com`.
3. In **Port** field, you need to specify the Port number. Here, the default port number is `3306`.
4. Specify the username of your MariaDB server in **Username** field.
5. Specify the password of your MariaDB server in **Password** field.
6. Enable the Save password option to embed the credentials within the report when saving it in Report Server.
7. Choose or enter an existing valid database. e.g. Northwind.
   ![Basic Option](/static/assets/on-premise/images/report-designer/manage-data/mysql-data-source/basic-connection.png '#width=355px')
8. Click on the `Connect` to proceed with query design pane. Now, enter the required query and execute. Its corresponding values will be shown in grid for preview.
   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/mysql-data-source/execute-schema.png '#width=600px')
   > Only query mode is supported for MySQL data source.
9. Click `Finish` to save the data source with a relevant name to proceed with designing report.
   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/mysql-data-source/data-list.png '#width=355px')

### Connecting to a MariaDB data source through SSH Tunnel

You can now connect to a MariaDB data source using a secure SSH tunnel. This enhancement provides a more robust and secure method for connecting, especially when accessing remote databases over untrusted or insecure networks.

![Enable-SSH](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/enable-ssh-mysql.png '#width=385px')

> Refer [Configuring SSH tunnel for data connectors](./../../connection-settings/configuring-ssh-tunnel/) for more details.

### Create MariaDB data source with advanced options

To connect the MariaDB database with advanced options, click on the `Advanced Options` in `New Data` panel.

![Advance Connection](/static/assets/on-premise/images/report-designer/manage-data/mysql-data-source/advanced-connection.png '#width=355px')

Now, the panel is switched to advanced options. In advanced options, you can build your own connection string.

Set the connection string and input the username and password of MariaDB server.

![Advance Connection](/static/assets/on-premise/images/report-designer/manage-data/mysql-data-source/advanced-panel.png '#width=355px')

Click on the `Connect` to proceed with query design pane. Now, enter the required query and execute. Its corresponding values will be shown in grid for preview.
![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/mysql-data-source/execute-schema.png '#width=600px')

> Only query mode is supported for MariaDB data source.

Click `Finish` to save the data source with a relevant name to proceed with designing report.
   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/mysql-data-source/data-list.png '#width=355px')

> Click on `Basic Options` to switch back to the basic connection settings.
![Switch Basic Option](/static/assets/on-premise/images/report-designer/manage-data/mysql-data-source/switch-basic-options.png '#width=355px')

### Authentication types for advanced connection

You can set database credentials, prompted credentials, or use no credentials.

![Advanced authentication](/static/assets/on-premise/images/report-designer/manage-data/mysql-data-source/authentication.png '#width=355px')

**Authentication** - A user name and password must be supplied to access the database, the credentials might be for a database login. The credentials are passed to the data source for authentication.

![Advanced authentication](/static/assets/on-premise/images/report-designer/manage-data/mysql-data-source/authentication-type.png '#width=355px')

Enable the **Save Password** option to embed the credentials within the report when saving it in Report Server.

> On report download action, the credentials will be not be saved with report data.

**Prompt** - When you configure a data source connection to use prompted credentials, each user who access the report must enter a user name and password on preview action to retrieve the data.

![Advanced authentication](/static/assets/on-premise/images/report-designer/manage-data/mysql-data-source/prompt.png '#width=355px')

**None** - Choose the authentication type as `None`, when the authentication details or any other arguments required to connect with the data source are provided in connection string.
