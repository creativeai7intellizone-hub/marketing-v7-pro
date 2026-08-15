# n8n Integration Plan
1. Replace the demo submit handler in `js/app.js` with a POST to your n8n webhook.
2. Receive name, email, business, service and message.
3. Route to Google Sheets/CRM.
4. Send notification to Telegram/email.
5. Create follow-up tasks.
6. Never expose the n8n secret webhook URL in public client code if it contains privileged credentials; use a safe public webhook or backend proxy.
