---
title: Connect to MongoDB Data Source | Standalone Report Designer
description: Learn how to connect to MongoDB data source and feed data to your RDL reports using Standalone Report Designer.
canonical: /enterprise-reporting/designer-guide/report-designer/manage-data/data-connectors/mongodb-data-source/
---
# Connect to MongoDB data source

The Bold Reports<sup>®</sup> allows you to connect to a MongoDB data source.

## Create a MongoDB data source

To configure the MongoDB data source, follow the below steps:

1. Click the **Data** icon in the configuration panel.
   ![Data icon configuration panel](/static/assets/on-premise/images/report-designer/manage-data/mongodb-data-source/data-configuration-panel.png '#width=410px')
2. In the `DATA` configuration panel, click on the `NEW DATA` button.
   ![New Data Panel](/static/assets/on-premise/images/report-designer/manage-data/mongodb-data-source/new-data-button.png '#width=355px')
3. In the connection type panel, choose the `MongoDB` data source type.
   ![Connection types panel](/static/assets/on-premise/images/report-designer/manage-data/mongodb-data-source/connection-types.png '#width=355px')

### Create MongoDB data source with basic options

When you create a new data, the `NEW DATASOURCE` panel will show up with basic options,

1. Specify the data source name without special characters, in **Name** field.
2. In [Connection string scheme](./../../../manage-data/data-connectors/mongodb-data-source/#connection-string-scheme) field, choose **mongodb** or **mongodb+srv**.
3. In the **Host** field, specify one or more host and port combinations.

   For single host: host1:27017

   For multiple hosts (e.g., for replica set or sharded cluster): host1:27017,host2:27018
4. In the **Options** field, you can provide any valid connection string options separated by &.

   Example: tls=true&retryWrites=true&replicaSet=mySet&readPreference=primary
5. In [Authentication Type](./../../../manage-data/data-connectors/mongodb-data-source/#authentication-types) field, choose **None** or **SCRAM** or **X.509** authentication.
6. Choose an existing valid database. e.g. sample_mflix.
   ![Basic Option](/static/assets/on-premise/images/report-designer/manage-data/mongodb-data-source/basic-options.png '#width=355px')
7. Click on the `Connect` to proceed with query design pane. Now, enter the required query and execute. Its corresponding values will be shown in grid for preview.
   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/mongodb-data-source/execute-schema.png '#width=600px')
   > Only query mode is supported for MongoDB data source.
8. Click `Finish` to save the data source with a relevant name to proceed with designing report.
   ![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/mongodb-data-source/data-list.png '#width=355px')

#### Connection string scheme

You can set connection string scheme, either as **mongodb** or **mongodb+srv**.

If the user wants to connect using the standard connection format, choose **mongodb** under **Connection string scheme**.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/mongodb-data-source/scheme-mongodb.png '#width=355px')

If the user wants to connect to a cloud-hosted MongoDB (such as Atlas) using DNS-based host discovery without specifying ports, choose **mongodb+srv** under **Connection string scheme**.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/mongodb-data-source/scheme-mongodbsrv.png '#width=355px')

#### Authentication types

You can set authentication type, either as **None** or **SCRAM** or **X.509**.

If your MongoDB server does not require authentication, choose **None** under **Authentication Type**.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/mongodb-data-source/authentication-none.png '#width=355px')

If your MongoDB server requires a username, password, and authentication database, choose **SCRAM** as the **Authentication Type** and enter the username, password, and authentication database for the server specified *Server Name* field.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/mongodb-data-source/authentication-scram.png '#width=355px')

For **SCRAM** authentication, the authSource parameter is configured through the Authentication Database field in the UI. Therefore, it should not be duplicated in the `Options` field.

If your MongoDB server uses SSL encryption with client certificates, Choose **X.509** under **Authentication Type** and provide the Client Certificate File and Client Certificate Password for the server specified in the *Server Name* field.

![New connection panel](/static/assets/on-premise/images/report-designer/manage-data/mongodb-data-source/authentication-x509.png '#width=355px')

Enable `Allow Self-Signed Certificates` if the MongoDB server configured to accept self signed certificates.

#### Connecting to MongoDB Datasource through SSL

You can connect to MongoDB data sources securely using an SSL/TLS connection. This ensures encrypted communication between the client and the MongoDB server, providing a secure method to access remote databases over untrusted networks.

![Enable-SSL](/static/assets/on-premise/images/report-designer/manage-data/mongodb-data-source/enable-ssl-mongodb.png '#width=385px')

**Client Certificate**: The SSL certificate used for client authentication when connecting to the MongoDB server.

**Client Certificate Password**: The password associated with the client certificate, if it is encrypted.

#### Technical Considerations for MongoDB Connections

1. MongoDB integration in Bold Reports<sup>®</sup> uses the `runCommand` method, allowing interaction with one database context per connection. Query execution is always scoped to the selected database.
2. When using SSL or X.509 authentication, MongoDB often provides the client certificate in .pem format. Since the .NET driver does not support .pem files directly, you must convert it to .pfx format. A password is required during this conversion and must be provided in the Client Certificate Password field along with the .pfx file in the UI.
3. The Options field must only be used to specify additional connection parameters that are not available through the UI. Do not duplicate or override values already configured through dedicated UI fields.
4. In cases where SSL/TLS is required without using a client certificate (e.g., when connecting with username and password over SSL), you may enable `tls=true` directly in the Options field.

#### Sample Queries

The MongoDB data source in Bold Reports<sup>®</sup> Designer supports Code Mode for querying data. Internally, the connector uses the MongoDB `runCommand` to execute queries on the connected database. Following are few of the sample queries to retrieve data.

* Retrieve all documents from a collection

   ```json
   {
      find:"products"
   }
   ```

* Filter documents with condition

   ```json
   {
      find:"products",
      filter:{productId: "PRD123"}
   }
   ```

* Sorting data

   ```json
   {
      find:"products",
      sort:{price: -1}
   }
   ```

* Filter documents with multiple conditions

   ```json
   {
      find: "products",
      filter: {
         "orderDetails.date": { $gt: ISODate("2022-01-09")},
         "orderDetails.status": { $in: ["Shipped", "Processing"] },
         $and:[
            {"payment.totalAmount": { $not: { $gt: 1000 } }},
            {"payment.totalAmount": { $type: "double" }}
         ]
      }
   }
   ```

* Filter documents using parameter

   ```json
   {
      find: "orders",
      filter: {
         "payment.method": @paymentType,
         "payment.totalAmount": { $gte: @amount },
         "orderDetails.date": { $gte: @greater}
      }
   }
   ```

* Filter documents using multi value parameter

   ```json
   {
      find: "orders",
      filter: {
         orderId: { $in: [@param] }
      }
   }
   ```

* Lookup (Join) between collections

   ```json
   {
      aggregate: "orders",
      pipeline: [
                  {
                     $lookup: {
                           from: "customer",
                           localField: "customerId",
                           foreignField: "Id",
                           as: "customerDetails"
                     }
                  }
      ],
      cursor: {}
   }
   ```

* Unwind array fields

   ```json
   {
      aggregate: "orders",
      pipeline: [
         { $unwind: "$items" }
      ],
      cursor: {}
   }
   ```

* Flatten a nested object

   ```json
   {
      aggregate: "orders",
      pipeline: [
         {
            $project: {
            customerId: "$customer.customerId",
            name: "$customer.name",
            email: "$customer.email",
            phone:"$customer.contact.phone",
            street:"$customer.contact.address.street",
            city:"$customer.contact.address.city",
            state:"$customer.contact.address.state",
            postalCode:"$customer.contact.address.postalCode",
            country:"$customer.contact.address.country",
            }
         }
      ],
      cursor: {}
   }
   ```

> Bold Reports<sup>®</sup> uses MongoDB's runCommand syntax internally to execute queries. This means you can write your queries in the same format supported by MongoDB's runCommand. For more advanced query scenarios, you can search online for MongoDB runCommand examples or refer to the official MongoDB documentation. These examples will help you construct queries compatible with Bold Reports' MongoDB connector.
