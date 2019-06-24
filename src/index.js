/**
 * Datafund Consent generator & viewer
 * Licensed under the MIT license
 * Created by Markus Zevnik, Tadej Fius, �rt Ahlin
 */

import React from 'react';
import { render } from "react-dom";
import { ConsentViewer } from "./lib";

const App = () => (
    <div style={{ width: 640, margin: "15px auto" }}>
        <h1>CR Viewer</h1>
        <ConsentViewer data={{
            "header": {
                "alg": "HS256",
                "typ": "JWT"
            },
            "payload": {
                "version": "Version",
                "jurisdiction": "test",
                "consentTimestamp": 213456789,
                "collectionMethod": "Collection Method",
                "consentReceiptID": "25efb12c-20fd-4d26-a9fe-f3423a6426f5",
                "publicKey": "",
                "language": "English",
                "piiPrincipalId": "PII PrincipalId",
                "piiControllers": [
                    {
                        "piiController": "PII Controller",
                        "contact": "Contact",
                        "address": {},
                        "email": "info@contact.com",
                        "phone": "43567890",
                        "piiControllerUrl": "https://www.aysudhfsgl.com"
                    },
                    {
                        "piiController": "PII Controller2",
                        "contact": "Contact2",
                        "address": {},
                        "email": "info@contact2.com",
                        "phone": "22222222222",
                        "piiControllerUrl": "https://www.aysudhfsgl2222.com"
                    }
                ],
                "policyUrl": "https://www.aysudhfsgl.com/policy",
                "services": [
                    {
                        "service": "test",
                        "purposes": [
                            {
                                "purpose": "Purpose1",
                                "consentType": "Consent Type1",
                                "purposeCategory": [
                                    "cat1",
                                    "cat2"
                                ],
                                "piiCategory": [
                                    "PII Category"
                                ],
                                "primaryPurpose": true,
                                "termination": "wqer"
                            }
                        ]
                    }
                ],
                "token": {
                    "issuer": "issuer",
                    "subject": "subject",
                    "audience": "audience",
                    "expiresIn": "12h",
                    "algorithm": "RS256"
                },
                "iat": 1561377355
            },
            "signature": "K1pNwtiAfXRFclrX1s1-NkX-1iICJmsPKbmVUbVgaYg"
        }} />
    </div>
);

render(<App />, document.getElementById("root"));
