---
title: Configuring an SSH Tunnel | Standalone Report Designer
description: Learn how to configure an SSH tunnel for your data connectors in Standalone Report Designer, ensuring encrypted connections to remote database servers.
canonical: /enterprise-reporting/designer-guide/report-designer/manage-data/connection-settings/configuring-ssh-tunnel/
---

# Configuring SSH Tunnel for Data Connectors

## What is SSH?

**SSH (Secure Shell)** is a network communication protocol used to encrypt connections, ensuring secure access to remote databases.

Bold Reports<sup>®</sup> supports various [data connectors](./../../../manage-data/connection-settings/configuring-ssh-tunnel/#supported-data-connectors) to connect the remote databases through an SSH tunnel.

Both the basic and advance panels support SSH configuration to establish a secure connection to your remote database.

## Steps to Configure an SSH Tunnel

**SSH Server Name**: Specify the address of the SSH server (IP address or hostname).

**SSH Port**: Specify the port number used for SSH connection (default is 22, but this may vary).

**SSH Username**: Specify the username for SSH authentication.

**SSH Authentication Type**: You can set authentication type, either as **Password** or **Public key**.

![SSH Authentication Type selection dropdown](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/ssh-authentication-type.png '#width=355px')

If using password authentication, select **Password** as the **SSH Authentication Type** and specify the secure password associated with the SSH username.

![Enable-SSH](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/ssh-password.png '#width=385px')

**SSH Password**: Specify the secure password for the SSH username (keep this confidential).

If using public key authentication, select **Public key** as the **SSH Authentication Type**. Upload your encrypted private key file and provide the associated passphrase.

![Enable-SSH](/static/assets/on-premise/images/report-designer/manage-data/data-connectors/ssh-public-key.png '#width=385px')

**SSH Private Key**: Upload your encrypted private key file for authentication (keep this confidential).

**SSH Passphrase**: Specify the passphrase required to decrypt your private key.

> SSH Tunneling is not applicable in the Bold Reports<sup>®</sup> cloud version.

## Technical Considerations for SSH Tunneling Connections

1. Only encrypted private key file in **.pem** format is allowed for SSH public key authentication.

2. Ensure your private key is encrypted with a passphrase before uploading it.

3. SSH supports .pem private keys in the following formats: RSA, DSA, ECDSA (256/384/521), and ED25519.

## Security Notes

1. Always keep your SSH credentials (username, password, private key, and passphrase) secure and accessible only to authorized users.

2. Use strong, complex SSH password and passphrase for private key encryption.

3. Limit SSH access to only required users, and restrict allowed IP address ranges at the SSH server whenever possible.

> Refer `Public Key Authentication` section in the [SSH.NET NuGet package](https://www.nuget.org/packages/SSH.NET/) for more details.

## Troubleshooting

**Private key upload failure:**

* Double-check the private key file is in **.pem** format.

**Authentication errors:**

* Verify your SSH server name, username and authentication type.

* For password authentication, check for typos.

* For public key authentication:

    * Ensure the private key file content starts with "-----BEGIN".

    * Make sure the private key is encrypted with the proper passphrase.

    * Verify your SSH passphrase.

**Cannot establish SSH tunnel (connection refused or timed out):**

* Double-check the SSH credentials. Make sure the server allows SSH connection from your network.

* Ensure any firewalls or network policies permit outgoing SSH connection from the Bold Reports<sup>®</sup> Designer.

## Supported Data Connectors

The following data connectors support SSH tunneling connections:

* [Microsoft SQL](./../../data-connectors/sql-data-source/)
* [PostgreSQL](./../../data-connectors/postgresql-data-source/)
* [MySQL](./../../data-connectors/mysql-data-source/)
* [MemSQL](./../../data-connectors/memsql-data-source/)
* [MariaDB](./../../data-connectors/mariadb-data-source/)
* [CDATA](./../../data-connectors/cdata-data-source/)
* [Amazon Aurora](./../../data-connectors/amazon-aurora-data-source/)
* [Google cloud SQL (MySQL and PostgreSQL)](./../../data-connectors/google-cloud-sql-data-source/)
* [Amazon RDS (Microsoft SQL, MySQL, MariaDB and PostgreSQL)](./../../data-connectors/amazon-rds-data-source/)
