# Google Optimize Experiment Hook for Next.js

This use-experiment hook enables easy execution of Google Optimize experiments on a Next.js page.

### Usage

- Replace `GTM-XXXX` in `_document.js` with your Google Tag Manager ID.
- Ensure that you pass the correct `experimentId` to the hook.
- In Google Optimize, set the "Activation event" for the experiment to `Custom event: optimize.activate`
