/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
define(['N/log', 'N/record', 'N/ui/serverWidget'],
    /**
 * @param{log} log
 * @param{record} record
 * @param{serverWidget} serverWidget
 */
    (log, record, serverWidget) => {
        /**
         * Defines the Suitelet script trigger point.
         * @param {Object} scriptContext
         * @param {ServerRequest} scriptContext.request - Incoming request
         * @param {ServerResponse} scriptContext.response - Suitelet response
         * @since 2015.2
         */
        const onRequest = (scriptContext) => {
            const form = serverWidget.createForm({
                title: 'SDF Connected to NetSuite'
            });

            form.addField({
                id: 'custpage_message',
                type: serverWidget.FieldType.INLINEHTML,
                label: 'Message'
            }).defaultValue = '<h2>Hello from my first SDF project!</h2>';

            form.addField({
                id: 'custpage_employee',
                type: serverWidget.FieldType.TEXT,
                label: 'Employee Name'
            });
            form.addField({
                id: 'custpage_email',
                type: serverWidget.FieldType.EMAIL,
                label: 'Email'
            });
            form.addField({
                id: 'custpage_phone',
                type: serverWidget.FieldType.PHONE,
                label: 'Phone'
            });

            form.addResetButton({
                label: 'Reset'
            })

            scriptContext.response.writePage(form);
        }

        return {onRequest}

    });