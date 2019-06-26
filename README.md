# Consent Viewer

[React](https://facebook.github.io/react) plugin for displaying human-readable Consent Receipt (CR) JSON. 


Quick Use
-----------------------
Download package using [npm](https://www.npmjs.com/):

    $ npm install --save @datafund/consent-viewer


<br/>Import package to your React app:
```javascript
import {ConsentViewer as ConsentViewer} from 'consent-viewer';
```

<br/>Prepare Consent Receipt data:
 ```javascript  
let sampleData = {
   "header": {
     "alg": "RS256",
     "typ": "JWT"
   },
   "payload": {
     "version": "Kantara_v1.1",
     "consentTimestamp": 1559734117,
     "collectionMethod": "Web form",
     "consentReceiptID": "d03bdfed-708a-4792-b6d2-eb336000359f",
     "publicKey": "-----BEGIN RSA PRIVATE KEY-----\nMIIEogIBAAKCAQEAnzyis1ZjfNB0bBgKFMSvvkTtwlvBsaJq7S5wA+kzeVOVpVWw\nkWdVha4s38XM/pa/yr47av7+z3VTmvDRyAHcaT92whREFpLv9cj5lTeJSibyr/Mr\nm/YtjCZVWgaOYIhwrXwKLqPr/11inWsAkfIytvHWTxZYEcXLgAXFuUuaS3uF9gEi\nNQwzGTU1v0FqkqTBr4B8nW3HCN47XUu0t8Y0e+lf4s4OxQawWD79J9/5d3Ry0vbV\n3Am1FtGJiJvOwRsIfVChDpYStTcHTCMqtvWbV6L11BWkpzGXSW4Hv43qa+GSYOD2\nQU68Mb59oSk2OB+BtOLpJofmbGEGgvmwyCI9MwIDAQABAoIBACiARq2wkltjtcjs\nkFvZ7w1JAORHbEufEO1Eu27zOIlqbgyAcAl7q+/1bip4Z/x1IVES84/yTaM8p0go\namMhvgry/mS8vNi1BN2SAZEnb/7xSxbflb70bX9RHLJqKnp5GZe2jexw+wyXlwaM\n+bclUCrh9e1ltH7IvUrRrQnFJfh+is1fRon9Co9Li0GwoN0x0byrrngU8Ak3Y6D9\nD8GjQA4Elm94ST3izJv8iCOLSDBmzsPsXfcCUZfmTfZ5DbUDMbMxRnSo3nQeoKGC\n0Lj9FkWcfmLcpGlSXTO+Ww1L7EGq+PT3NtRae1FZPwjddQ1/4V905kyQFLamAA5Y\nlSpE2wkCgYEAy1OPLQcZt4NQnQzPz2SBJqQN2P5u3vXl+zNVKP8w4eBv0vWuJJF+\nhkGNnSxXQrTkvDOIUddSKOzHHgSg4nY6K02ecyT0PPm/UZvtRpWrnBjcEVtHEJNp\nbU9pLD5iZ0J9sbzPU/LxPmuAP2Bs8JmTn6aFRspFrP7W0s1Nmk2jsm0CgYEAyH0X\n+jpoqxj4efZfkUrg5GbSEhf+dZglf0tTOA5bVg8IYwtmNk/pniLG/zI7c+GlTc9B\nBwfMr59EzBq/eFMI7+LgXaVUsM/sS4Ry+yeK6SJx/otIMWtDfqxsLD8CPMCRvecC\n2Pip4uSgrl0MOebl9XKp57GoaUWRWRHqwV4Y6h8CgYAZhI4mh4qZtnhKjY4TKDjx\nQYufXSdLAi9v3FxmvchDwOgn4L+PRVdMwDNms2bsL0m5uPn104EzM6w1vzz1zwKz\n5pTpPI0OjgWN13Tq8+PKvm/4Ga2MjgOgPWQkslulO/oMcXbPwWC3hcRdr9tcQtn9\nImf9n2spL/6EDFId+Hp/7QKBgAqlWdiXsWckdE1Fn91/NGHsc8syKvjjk1onDcw0\nNvVi5vcba9oGdElJX3e9mxqUKMrw7msJJv1MX8LWyMQC5L6YNYHDfbPF1q5L4i8j\n8mRex97UVokJQRRA452V2vCO6S5ETgpnad36de3MUxHgCOX3qL382Qx9/THVmbma\n3YfRAoGAUxL/Eu5yvMK8SAt/dJK6FedngcM3JEFNplmtLYVLWhkIlNRGDwkg3I5K\ny18Ae9n7dHVueyslrb6weq7dTkYDi3iOYRW8HRkIQh06wEdbxt0shTzAJvvCQfrB\njg/3747WSsf/zBTcHihTRBdAv6OmdhV4/dD5YBfLAkLrd+mX7iE=\n-----END RSA PRIVATE KEY-----",
     "language": "English",
     "piiPrincipalId": "individual@example.com",
     "piiControllers": [
       {
         "address": {},
         "piiController": "Datafund",
         "contact": "Jani Podatek",
         "email": "info@datafund.io",
         "phone": "+386 0000000",
         "piiControllerUrl": "http://datafund.io"
       }
     ],
     "policyUrl": "https://datafund.io/legal/privacy_policy.html",
     "services": [
       {
         "service": "Service example 1",
         "purposes": [
           {
             "purpose": "Core Function",
             "consentType": "explicit",
             "purposeCategory": [
               "Billing"
             ],
             "piiCategory": [
               "Email",
               "Phone number"
             ],
             "primaryPurpose": true,
             "termination": "1 year",
             "thirdPartyDisclosure": false
           }
         ]
       },
       {
         "service": "Service example 2",
         "purposes": [
           {
             "purpose": "Marketing",
             "consentType": "explicit",
             "purposeCategory": [
               "Direct marketing",
               "Delivery"
             ],
             "piiCategory": [
               "Home address",
               "Email address",
               "Phone number"
             ],
             "termination": "1 year",
             "thirdPartyDisclosure": true,
             "thirdPartyName": "AnalyticsRus"
           }
         ]
       }
     ],
     "sensitive": true,
     "spiCat": [
       "Health status",
       "Genetic data"
     ],
     "jurisdiction": "SI",
     "iat": 1561555440,
     "exp": 1561598640,
     "aud": "https://datafund.io",
     "iss": "Datafund",
     "sub": "Consent Receipt"
   },
   "signature": "C9ILWfpc3_sZXip8pBxOtJ8D7XYTGyKqdXqRCe2XPBSzqrBQoLNvL1wC2gLFGsYofaNC62BxIm0ktsGXTZosoa6-EGjYquCGb-qndo8f1j1w1oHmkclZde8OEsb1gCVC9ZlFNDh6_ZI5Xlysz-QontJuJpD6w0dTQd2kc2zc-o7ThJ9AUFdCaKNimEe5WdIbegtEVmY3NOYTiACCI9xQDk-BomumiONOZGVhiqNbcly_bEWJ8Rph43aSGpjU8vxyeK_a6vtxycx7PD6ozywbjCFkyHQeaOV3VnUaABrjBxJu3Yz6Rgk7vg7ZDb8rlZ4cgtJ_IJ8QG2JKBn0BdjL-oQ"
 }
```

<br/>Include component with data parameter in render() method of your app:
 ```javascript  
<ConsentViewer data={{sampleData}} />
```

Params
-----------------------
- `data` (Consent Receipt JSON)

