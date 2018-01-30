
     function onSignIn(googleUser) {
       // Useful data for your client-side scripts:
       var profile = googleUser.getBasicProfile();
       console.log("ID: " + profile.getId()); // Don't send this directly to your server!
       console.log('Full Name: ' + profile.getName());
       console.log('Given Name: ' + profile.getGivenName());
       console.log('Family Name: ' + profile.getFamilyName());
       console.log("Image URL: " + profile.getImageUrl());
       console.log("Email: " + profile.getEmail());

       // The ID token you need to pass to your backend:
       var id_token = googleUser.getAuthResponse().id_token;
       console.log("ID Token: " + id_token);
     };



      function signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
          console.log('User signed out.');
        });
      }





      // var API_KEY = 'AIzaSyA-mU2-GNxWdiFowEX-jPp850zSJsBclPQ';
      //
      // var CLIENT_ID = '777685935611-8ijbaab71ets2lg89oaim0u6uq9k2aak.apps.googleusercontent.com'

      function googleIt() {

             var spreadsheetBody =
                 {
                 "sheets": [],
                 "range":"",
                 "values": [],
                 "spreadsheetId": "",
                 "values": ["bob"
                        ["test"
                        ],
                    ],
                 "spreadsheetUrl": ""
                 };
             var request = gapi.client.sheets.spreadsheets.create({}, spreadsheetBody);
                     console.log(request);
             request.then(function(response) {
                 // TODO: Change code below to process the `response` object:
                 console.log(response.result);
             }, function(reason) {
                 console.error('error: ' + reason.result.error.message);
             });
         }

         function initClient() {
             var API_KEY = 'AIzaSyA-mU2-GNxWdiFowEX-jPp850zSJsBclPQ';

            var CLIENT_ID = '777685935611-8ijbaab71ets2lg89oaim0u6uq9k2aak.apps.googleusercontent.com'

           var SCOPE = 'https://www.googleapis.com/auth/spreadsheets';
           gapi.client.init({
             'apiKey': API_KEY,
             'clientId': CLIENT_ID,
             'scope': SCOPE,
             'discoveryDocs': ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
           }).then(function() {
             gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
             updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
           });
         }
         function handleClientLoad() {
             // console.log(load);
           gapi.load('client:auth2', initClient);
         }

         function updateSignInStatus(isSignedIn) {
           if (isSignedIn) {
             googleIt();
           }
         }
          function handleSignInClick(event) {
           gapi.auth2.getAuthInstance().signIn();
         }

         function handleSignOutClick(event) {
           gapi.auth2.getAuthInstance().signOut();
         }

         function makeApiCall() {
            var params = {

              spreadsheetId: '1yROVVo8llswzANV3CzYK8ZefrzJEnLb2nUAtRytAU90',

              // The A1 notation of the values to update.
              range: 'my-range',  // TODO: Update placeholder value.

              // How the input data should be interpreted.
              valueInputOption: '',  // TODO: Update placeholder value.
            };

            var valueRangeBody = {
              // TODO: Add desired properties to the request body. All existing properties
              // will be replaced.
            };

            var request = gapi.client.sheets.spreadsheets.values.update(params, valueRangeBody);
            request.then(function(response) {
              // TODO: Change code below to process the `response` object:
              console.log(response.result);
            }, function(reason) {
              console.error('error: ' + reason.result.error.message);
  });
}
