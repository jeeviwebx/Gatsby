---
title: SSRS Report using Electronic Signature | Standalone Designer
description: Learn how to add electronic signatures to SSRS RDL reports using Bold Reports Designer. Step-by-step guide to create invoice reports with signature fields for visual approval in Standalone Report Designer.
canonical: /enterprise-reporting/designer-guide/report-designer/report-items/signature/design-ssrs-rdl-report-using-electronic-signature/
---

# Electronic Signature

Electronic signature allows users to graphically sign a report by drawing a signature directly within the report interface. This is intended solely for visual representation of a person’s signature on reports or documents.

## Design an invoice report with an electronic signature

This section describes the steps to add a signature in the `Invoice Details` report.

### Download the invoice report

You can download the invoice report from this [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/design-ssrs-rdl-invoice-report.rdl).

### Add the electronic signature item to the report

1. Open the downloaded `invoice` report.
    ![Open the invoice report](/static/assets/on-premise/images/report-designer/report-items/signature/open-invoice-report.png '#width=425px')
2. Drag and drop the signature report item into the required area of the report.
   ![Drag and drop signature into invoice report](/static/assets/on-premise/images/report-designer/report-items/signature/drag-and-drop-signature-invoice.png '#width=425px')
3. The respective item properties will now be listed in the properties panel. Click on the `Draw...` button to open the signature dialog.
   ![Signature item with properties view](/static/assets/on-premise/images/report-designer/report-items/signature/design-signature-properties.png '#width=485px')
4. Draw the desired signature using a mouse or touch input within the dialog. Additionally, you can:
   * `Stroke width` - Adjust the thickness of the signature lines.
   * `Stroke color` - Change the color of the signature lines to enhance visibility and match the design of your document.
      ![Stroke width and color](/static/assets/on-premise/images/report-designer/report-items/signature/stroke-width-color.png '#width=400px')
   * Click on the `Crop` button to enable cropping and fine-tune the visible portion of the signature.
      ![Croping in signature](/static/assets/on-premise/images/report-designer/report-items/signature/crop-signature.png '#width=400px')
5. Click `OK`. Now, the signature will be updated on the canvas in the Designer Area. You can change the height and width of the signature.
   ![Signature in invoice report](/static/assets/on-premise/images/report-designer/report-items/signature/authority-signature.png '#width=425px')

> Note: The electronic signatures are intended to visually represent a person’s signature on a report. They do not include cryptographic security or digital certificate validation, and are not legally binding. This feature is best used for adding a personal touch or indicating informal approval within internal workflows.

## Preview and edit signature

1. Click on the `Preview` button in the report header.
   ![Preview button](/static/assets/on-premise/images/report-designer/report-items/signature/preview-button.png '#width=425px')
2. Hover over the signature to see the `Edit` icon, and click to open the Signature Dialog.
   ![Signature preview edit icon](/static/assets/on-premise/images/report-designer/report-items/signature/preview-edit-icon.png '#width=425px')
3. If needed, you can clear the existing signature and draw a new one directly within the dialog.
   ![Draw signature in dialog](/static/assets/on-premise/images/report-designer/report-items/signature/draw-signature-preview-dialog.png '#width=400px')
4. Click `OK`, The updated signature will reflect in the Preview Area.
   ![Signature in preview area](/static/assets/on-premise/images/report-designer/report-items/signature/preview-signature.png '#width=425px')

## Export report with signature

When you export the report, the signature in the preview area will be included in the exported report.

> Download the above report from this [link](https://github.com/boldreports/resources/tree/master/docs/report-designer/signature/design-ssrs-rdl-report-using-electronic-signature.rdl).