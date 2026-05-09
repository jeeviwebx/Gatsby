---
title: Connect to AWS Secrets Manager Data Source | Report Designer
description: Learn how to securely retrieve database credentials from AWS Secrets Manager, configure the data source using the selected engine, and feed data into your RDL reports using Standalone Report Designer.
canonical: /enterprise-reporting/designer-guide/report-designer/manage-data/data-connectors/aws-secrets-manager-data-source/
---

# Connect to AWS Secrets Manager

The Bold Reports<sup>®</sup> allows you to connect to AWS Secrets Manager to dynamically retrieve database credentials and connect to your chosen database (e.g. SQL Server, PostgreSQL, and MySQL) within reports. This enhances security by centralizing credential management.

## Create a secret in AWS Secrets Manager

Before connecting Bold Reports<sup>®</sup> to AWS Secrets Manager, you must first create and configure a secret in your AWS account. This secret will store the credentials for your database.

Follow these steps to create a secret in AWS Secrets Manager:

1. Sign in to the AWS Management Console and open the Secrets Manager console. You can access it here: [AWS Secrets Manager Console](https://console.aws.amazon.com/secretsmanager/)
2. In the Secrets Manager console, choose `Secrets` option from the left navigation panel, then click on the `Store a new secret`.
    ![Store a new secret button](/static/assets/on-premise/images/report-designer/manage-data/aws-secrets-manager-data-source/store-new-secret.png '#width=615px')
3. On the **Choose secret type** page, select the `Other type of secret` option. This allows you to manually define the key-value pairs or provide a custom JSON string for your database credentials.
    ![Choose other secret type](/static/assets/on-premise/images/report-designer/manage-data/aws-secrets-manager-data-source/choose-other-secret-type.png)
4. In the **Key/value pairs** section, select the **Key/value** option then add your database credentials as individual key-value pairs. For proper integration with Bold Reports<sup>®</sup>, use the following valid keys:
    | Engine           | Valid Keys |
    |------------------|------------|
    | SQL Server       | server, data source, initial catalog, database, user id, uid, pwd, password, trusted_connection, integrated security, persist security info, encrypt, trustservercertificate, certificate, port, connect timeout, connection timeout |
    | MySQL           | server, host, port, database, db, uid, user id, userid, username, user, user name, pwd, password, sslmode, ssl mode, tlsversion, ssl-ca, sslcert, sslkey, sslverify, use compression, persist security info, allow public key retrieval, connection timeout, connect timeout, default command timeout |
    | PostgreSQL       | server, host, port, database, db, username, user id, uid, user name, pwd, password, sslmode, ssl mode, sslrootcert, sslcert, sslkey, sslcrl, trust server certificate, connect timeout, command timeout, timeout, client_encoding, options, keepalives, keepalives_idle, keepalives_interval, keepalives_count, integrated security, persist security info |

    ![Assign key value](/static/assets/on-premise/images/report-designer/manage-data/aws-secrets-manager-data-source/assign-key-value.png)
5. In the **Configure secret** section, enter a `Secret name`. You will use this `Secret Name` later when configuring the data source in Bold Reports<sup>®</sup>. Optionally, add a `Description`. Click `Next`, then complete the remaining configuration steps (for example rotation settings) until you reach the final `Review` page.
    ![Configure Secret](/static/assets/on-premise/images/report-designer/manage-data/aws-secrets-manager-data-source/configure-secret.png)
6. On the `Review` section, verify all your settings then click on the `Store` option to finalize the creation of your secret.

Your secret has now been created and is ready to be accessed by Bold Reports<sup>®</sup>.

## Create an AWS Secrets Manager data source

To configure the AWS Secrets Manager data source, follow the below steps:

1. Click the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/data-configuration-panel.png '#width=410px')
2. In the `DATA` configuration panel, click on the `NEW DATA` option.
   ![New Data Panel](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/new-data-button.png '#width=355px')
3. In the Connection type panel, select `AWS Secrets Manager` as the data source type.
   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/aws-secrets-manager-data-source/connection-types.png '#width=355px')
4. In the `NEW DATASOURCE` panel, provide the following details:
   * Specify the data source name without special characters in the **Name** field.
   * Select `SQL Server` from the **Database Engine** drop-down to use with the configured AWS Secrets Manager secret.
   * Enter your AWS Access Key ID in the **Access Key** text box. This is used to authenticate requests to AWS.
   * Enter your AWS Secret Access Key in the **Secret Access Key** text box. This key is used in conjunction with the Access Key ID for authentication.
   * Enter the **Region** where your AWS Secrets Manager secret is stored (e.g., us-east-1).
   * From the **Secret Name** drop-down, select the secret that contains your database credentials in AWS Secrets Manager (e.g., SQLServer-Vault). The selected secret is expected to contain the following SQL Server connection string key-value pairs: data source, user id, pwd, initial catalog, encrypt, trustservercertificate and trusted_connection.
   ![AWSSecrets datasource properties](/static/assets/on-premise/images/report-designer/manage-data/aws-secrets-manager-data-source/initial-panel.png '#width=350px')
5. Click on the `Connect` option to connect Bold Reports<sup>®</sup> with the Microsoft SQL Server database.
6. Drag and drop the table from the table schema in the query design view page.
   ![Query Designer](/static/assets/on-premise/images/report-designer/manage-data/aws-secrets-manager-data-source/query-designer.png)
7. Click on the `Finish` option to save the data source with a relevant name to proceed with designing report.
    ![Data List](/static/assets/on-premise/images/report-designer/manage-data/aws-secrets-manager-data-source/data-list.png '#width=355px')

### AWS Secrets Manager supported database engine in Bold Reports<sup>®</sup>

* SQL Server
* MySQL
* PostgreSQL

![Database Engine](/static/assets/on-premise/images/report-designer/manage-data/aws-secrets-manager-data-source/database-engine.png '#width=355px')

## See Also

[SQL Server](./../../data-connectors/sql-data-source/)

[MySQL](./../../data-connectors/mysql-data-source/)

[PostgreSQL](./../../data-connectors/postgresql-data-source/)