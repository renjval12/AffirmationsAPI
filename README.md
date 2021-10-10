# Affirmations API
## What is Affirmations API?
Affirmations REST API allows developers to access and integrate the functionality of Affirmations with other applications. The API retrieves a list of affirmations to motivate all those who read them.
## Why Affirmations API?
Affirmations is for a developer who wants an API that provides a list of positive affirmations, and the ability to randomize the output of this list, to motivate users who use their applications.
## URL
        GET: https://affirmationsapi.herokuapp.com 

## Parameters
- /api:
    - Retrieves a list of positive affirmations for developers to integrate into their applications.
- /api/random-affirmation:
    - Generates a random affirmation for the developer to utilize.

## Usage
        GET: https://affirmationsapi.herokuapp.com/api/random-affirmation 
### Node.js
        const request = require('request');

        let options = {
        url: 'https://affirmationsapi.herokuapp.com/api/random-affirmation',
        method: 'POST'
        };

        function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
        }

        request(options, callback);

### Response 

        {"affirmation": "I am enough"}