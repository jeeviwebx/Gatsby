---
title: Connect to Oracle Data Source | Standalone Report Designer
description: Learn how to connect to oracle data source and feed data to your RDL reports using Standalone Report Designer. Supported server versions are Oracle Database (11g, 12c, 18c, and 19c)
canonical: /enterprise-reporting/designer-guide/report-designer/manage-data/data-connectors/oracle-data-source/
---

# Connect to Oracle data source

**Supported Server Versions**: Oracle Database (12.2, 18c, 19c, 21c and 23c)

Using the `Oracle` connection type, you can connect an Oracle database.

## Choose oracle data source

1. Click on the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-configuration-panel.png '#width=410px')
2. In the `DATA` configuration panel, click on the `NEW DATA` button.
   ![New Data Panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/new-data-button.png '#width=350px')
3. In the connection type panel, choose the `Oracle` data source type.
   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/oracle-data-source/connection-types.png '#width=350px')

### Create Oracle data source with basic options

When you create a new data, the `NEW DATASOURCE` panel will show up with basic options,

1. Specify the data source name without special characters, in **Name** field.
2. In **Server Name** field, you need to specify the remote server name like `myserver.domain.com`.
3. In **Service Instance Name** field (optional), you need to specify the Oracle Service Identifier Name like `ORA19`, `XE`.
   > The Service Instance Name field is marked optional to support flexibility across different Oracle environments. In local setups, it's not required due to SID-based connections. However, in Oracle Cloud, the Service Name is essential for routing the connection properly.
4. In **Port** field, you need to specify the Port number. Here, the default port number is `1521`.
5. Specify the username of your Oracle server in **Username** field.
6. Specify the password of your Oracle server in **Password** field.
7. Enable the Save password option to embed the credentials within the report when saving it in Report Server.
8. Choose or enter an existing valid database. e.g. ADVENTUREWORKS.
   ![Basic Option](/static/assets/on-premise/images/report-designer/manage-data/oracle-data-source/basic-options.png '#width=355px')
9. Click on the `Connect` to connect the Bold Reports<sup>®</sup> with Oracle database.
10. Drag and drop the table from the table schema in the query design view page.
    ![Query Designer](/static/assets/on-premise/images/report-designer/manage-data/oracle-data-source/query-designer.png)
11. Click `Finish` to save the data source with a relevant name to proceed with designing report.
    ![Data List](/static/assets/on-premise/images/report-designer/manage-data/oracle-data-source/data-list.png '#width=355px')

### Create Oracle data source with advanced options

To connect the Oracle database with advanced options, click on the `Advanced Options` in `New Data` panel.

![Advance Option](/static/assets/on-premise/images/report-designer/manage-data/oracle-data-source/advanced-options.png '#width=355px')

Now, the panel is switched to Advanced Options, where you can build your own connection string. Enter a valid connection string as mentioned below and authentication type to connect with specified data source.

```js
Data Source=(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=MyHost)(PORT=MyPort)))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=MyOracleSID)));
```

Set the connection string and input the username and password of Oracle server.

![Advance Connection](/static/assets/on-premise/images/report-designer/manage-data/oracle-data-source/advanced-connection.png '#width=355px')

Drag and drop the table from the table schema in the query design view page.

![Query Designer](/static/assets/on-premise/images/report-designer/manage-data/oracle-data-source/query-designer.png)

Click `Finish` to save the data source with a relevant name to proceed with designing report.

![Data List](/static/assets/on-premise/images/report-designer/manage-data/oracle-data-source/data-list.png '#width=355px')

> Click on `Basic Options` to switch back to the basic connection settings.
![Switch Basic Option](/static/assets/on-premise/images/report-designer/manage-data/oracle-data-source/switch-basic-options.png '#width=355px')

#### Connection string

Connection strings are the text representation of connection properties for a data provider.

If the database is on your local computer. Specify connection string like the below.

```bash
Data Source=(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=localhost)(PORT=1521)))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=XE)))User ID=system;Password=1234
```

If database is located in any other server domain, specify connection string like the below.

```bash
Data Source=(DESCRIPTION=(ADDRESS_LIST=(ADDRESS=(PROTOCOL=TCP)(HOST=myserver.domain.com)(PORT=1521)))(CONNECT_DATA=(SERVER=DEDICATED)(SERVICE_NAME=XE)))User ID=system;Password=1234
```

### Authentication types

You can set oracle database credentials, prompted credentials, or use no credentials.

![Advanced authentication](/static/assets/on-premise/images/report-designer/manage-data/oracle-data-source/advanced-authentication.png '#width=385px')

**Authentication** - A user name and password must be supplied to access the oracle database, the credentials might be for a database login. The credentials are passed to the data source for authentication.

![Advanced authentication](/static/assets/on-premise/images/report-designer/manage-data/oracle-data-source/authentication.png '#width=385px')

Enable the Save password option to embed the credentials within the report when saving it in Report Server.

> On report download action, the credentials will be not be saved with report data.

**Prompt** - When you configure a data source connection to use prompted credentials, each user who access the report must enter a user name and password on preview action to retrieve the data.

![Advanced authentication](/static/assets/on-premise/images/report-designer/manage-data/oracle-data-source/prompt.png '#width=385px')

**None** - Choose the authentication type as `None`, when the authentication details or any other arguments required to connect with the data source are provided in connection string.