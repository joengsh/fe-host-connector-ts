# fe-host-connector

## convertional commit message

https://www.conventionalcommits.org/en/v1.0.0/ <br />
https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional

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

#### Dealer Login to the table

```javascript
// Subscribe to LOGIN event
loginEventHandler = function(status){
    // status is a json object which store current game status
    // Do somthing when login
}
client.subscribe("LOGIN",loginEventHandler)
// Unsubscribe event
client.unsubscribe(("LOGIN",loginEventHandler)

// Do login
client.login("DEALER_ID/NFC_ID")
```

#### Dealer Logout

```javascript
// Do login
client.logout();
```

# References (System)

## Events

| Event              |                    Description                     |                                         Return |
| ------------------ | :------------------------------------------------: | ---------------------------------------------: |
| CONNECT            |                 Connect completed                  | Config in JSON format. See Host Config section |
| LOGIN              |                  Login completed                   |              Error or null. Else login success |
| LOGOUT             |                  Logout completed                  |             Error or null. Else logout success |
| HOST_UPDATE        |                 Host statue update                 | Status in JSON format. See Host Status section |
| DISCONNECT         |                     Game ended                     |                                  Error or null |
| ERROR              |                  When error raise                  |                                  Error or null |
| VERIFY_INFO_UPDATE | (Only on HostType=100) Get verify info from player |                    Error or Verify_Info object |

Data return from VERIFY_INFO_UPDATE event

```javascript
// Data return from UPDATE event
{
playerid: string // ID of the player which sent the message
pattern: string[] // pattern of the emoji
timestamp: int // unix timestamp of the verify sent
tableid: string    // tableid for the table
tel: string // (optional) The caller phone number
tablephone: string // (optional) The phone number of the table
callstatus: string // (optional) The status change of calling, The value is one of the following: queued, ringing, in-progress, completed, busy, failed or no-answer.
}
```

Pattern Code
![Pattern](/images/emoji.png)

## Methods

- ### init()

```javascript
client.init(callback:Function)
```

Init to the backend. Will recevied callback with gametype list or any errors.

|          |                  |                                                                                                   |
| -------- | :--------------: | ------------------------------------------------------------------------------------------------: |
| callback | Function(object) | Callback function of the event. Pass in error object if any error, else list of game type passed. |

```javascript
// Callback return
// *** Work in Progress ***
{
  gametype:[
    {
      id:"BAS",
      name:"Speed Baccarat",
    }, ......
  ]
}
```

## Methods and Events

- [Dealer](dealer.html)
- [Pitboss](pitboss.html)
