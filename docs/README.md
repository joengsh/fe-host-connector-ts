# fe-host-connector

## Basic

#### Initialization

```javascript

// Import the lib
import {
  HostClient,GameState
} from 'fe-host-client'

// Create a host system client
let client = new HostClient({
    id:'H002', // ID of this host
    secret:'JWT_TOKEN', // Use for oauth (optional)
    endpoint:'http://localhost:8080', // The Auth server url
    redcard: "BARCODE_FOR_REDCARD", // default is PG_REDCARD
    greencard: "BARCODE_FOR_GREENCARD", // default is PG_GREENCARD
  });

// (optional) Call this to init the client
client.init(data=>{
  // data is error or settings object
})

// Call connect() to connect the backend. Pass options here if any.
client.connect(options?)
```

## Methods and Events

- [General](general.html)
- Dealer
- [Pitboss](pitboss.html)
