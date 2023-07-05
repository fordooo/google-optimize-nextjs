# Google Optimize Experiment Hook for Next.js

This use-experiment hook allows Google Optimize experiments to be easily run on a Next.js page

### Usage

- Replace `GTM-XXXX` in `_document.js` with Google Tag Manager ID
- Ensure you are passing the correct `experimentId` to the hook
- In Google Optimize, set the "Activation event" for the experiment to `Custom event: optimize.activate`
