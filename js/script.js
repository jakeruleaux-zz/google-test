
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

//
//     // Client ID and API key from the Developer Console
//     var CLIENT_ID = '<777685935611-8ijbaab71ets2lg89oaim0u6uq9k2aak.apps.googleusercontent.com>';
//     var API_KEY = '<AIzaSyA-mU2-GNxWdiFowEX-jPp850zSJsBclPQ>';
//
// console.log(API_KEY);
//
//
function makeApiCall() {
      var spreadsheetBody = {
        // TODO: Add desired properties to the request body.
      };

      var request = gapi.client.sheets.spreadsheets.create({}, spreadsheetBody);
      request.then(function(response) {
        // TODO: Change code below to process the `response` object:
        console.log(response.result);
      }, function(reason) {
        console.error('error: ' + reason.result.error.message);
      });
    }

    function initClient() {
      var API_KEY = 'AIzaSyA-mU2-GNxWdiFowEX-jPp850zSJsBclPQ';  // TODO: Update placeholder with desired API key.

      var CLIENT_ID = '777685935611-8ijbaab71ets2lg89oaim0u6uq9k2aak.apps.googleusercontent.com';  // TODO: Update placeholder with desired client ID.

      // TODO: Authorize using one of the following scopes:
      //   'https://www.googleapis.com/auth/drive'
      //   'https://www.googleapis.com/auth/drive.file'
      //   'https://www.googleapis.com/auth/spreadsheets'
      var SCOPE = '';

      gapi.client.init({
        'apiKey': API_KEY,
        'clientId': CLIENT_ID,
        'scope': SCOPE,
        'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
      }).then(function() {
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
        updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
      });
    }

    function handleClientLoad() {
      gapi.load('client:auth2', initClient);
    }

    function updateSignInStatus(isSignedIn) {
      if (isSignedIn) {
        makeApiCall();
      }
    }

    function handleSignInClick(event) {
      gapi.auth2.getAuthInstance().signIn();
    }

    function handleSignOutClick(event) {
      gapi.auth2.getAuthInstance().signOut();
    }


      onload="this.onload=function(){};handleClientLoad()"
      onreadystatechange="if (this.readyState === 'complete') this.onload()">

//     /**
//      *  Sign in the user upon button click.
//      */
//     function handleAuthClick(event) {
//       gapi.auth2.getAuthInstance().signIn();
//     }
//
//     /**
//      *  Sign out the user upon button click.
//      */
//     function handleSignoutClick(event) {
//       gapi.auth2.getAuthInstance().signOut();
//     }
//
//     // function googleIt( authorizeButton) {
//     //
//     //      authorizeButton.onclick=xhttp.open("POST", "https://sheets.googleapis.com/v4/spreadsheets", true);
//     //
//     // }
//
//
// function makeApiCall() {
//   var spreadsheetBody = {
//
//     "spreadsheetId": "1J07lxrEH-YECkVzYSJQOheL9IHp1AzVGRIjB59bgypo",
//     "properties": {
//       "title": "Untitled spreadsheet",
//       "locale": "en_US",
//       "autoRecalc": "ON_CHANGE",
//       "timeZone": "Etc/GMT",
//       "defaultFormat": {
//         "backgroundColor": {
//           "red": 1,
//           "green": 1,
//           "blue": 1
//         },
//         "padding": {
//           "top": 2,
//           "right": 3,
//           "bottom": 2,
//           "left": 3
//         },
//         "verticalAlignment": "BOTTOM",
//         "wrapStrategy": "OVERFLOW_CELL",
//         "textFormat": {
//           "foregroundColor": {},
//           "fontFamily": "arial,sans,sans-serif",
//           "fontSize": 10,
//           "bold": false,
//           "italic": false,
//           "strikethrough": false,
//           "underline": false
//         }
//       }
//     },
//     "sheets": [
//       {
//         "properties": {
//           "sheetId": 0,
//           "title": "Sheet1",
//           "index": 0,
//           "sheetType": "GRID",
//           "gridProperties": {
//             "rowCount": 1000,
//             "columnCount": 26
//           }
//         }
//       }
//     ],
//     "spreadsheetUrl": "https://docs.google.com/spreadsheets/d/1J07lxrEH-YECkVzYSJQOheL9IHp1AzVGRIjB59bgypo/edit"
//
//   };
//
// document.getElementById("btn").onclick = function() {makeApiCall()};
//
//   var request = gapi.client.sheets.spreadsheets.create({}, spreadsheetBody);
//   request.then(function(response) {
//     // TODO: Change code below to process the `response` object:
//     console.log(response.result);
//   }, function(reason) {
//     console.error('error: ' + reason.result.error.message);
//   });
// }
//
//
// //   gapi.client.init({
// //     'apiKey': API_KEY,
// //     'clientId': CLIENT_ID,
// //     'scope': SCOPE,
// //     'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
// //   }).then(function() {
// //     gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
// //     updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
// //   });
// // }
//
// function handleClientLoad() {
//   gapi.load('client:auth2', initClient);
// }
//
// function updateSignInStatus(isSignedIn) {
//   if (isSignedIn) {
//     makeApiCall();
//   }
// }
//
// function handleSignInClick(event) {
//   gapi.auth2.getAuthInstance().signIn();
// }
//
// function handleSignOutClick(event) {
//   gapi.auth2.getAuthInstance().signOut();
// }
//
//
//   onload="this.onload=function(){};handleClientLoad()"
//   onreadystatechange="if (this.readyState === 'complete') this.onload()"
//
//
//   function googleIt() {
//
//        // authorizeButton.onclick=xhttp.open("POST", "https://sheets.googleapis.com/v4/spreadsheets", true);
//
//        authorizeButton.onclick=xhttp.open("POST", "https://sheets.googleapis.com/v4/spreadsheets", true);
//
// console.log(googleIt);
// console.log("hi");
// //   {
// //   "spreadsheetId": "1J07lxrEH-YECkVzYSJQOheL9IHp1AzVGRIjB59bgypo",
// //   "properties": {
// //     "title": "Untitled spreadsheet",
// //     "locale": "en_US",
// //     "autoRecalc": "ON_CHANGE",
// //     "timeZone": "Etc/GMT",
// //     "defaultFormat": {
// //       "backgroundColor": {
// //         "red": 1,
// //         "green": 1,
// //         "blue": 1
// //       },
// //       "padding": {
// //         "top": 2,
// //         "right": 3,
// //         "bottom": 2,
// //         "left": 3
// //       },
// //       "verticalAlignment": "BOTTOM",
// //       "wrapStrategy": "OVERFLOW_CELL",
// //       "textFormat": {
// //         "foregroundColor": {},
// //         "fontFamily": "arial,sans,sans-serif",
// //         "fontSize": 10,
// //         "bold": false,
// //         "italic": false,
// //         "strikethrough": false,
// //         "underline": false
// //       }
// //     }
// //   },
// //   "sheets": [
// //     {
// //       "properties": {
// //         "sheetId": 0,
// //         "title": "Sheet1",
// //         "index": 0,
// //         "sheetType": "GRID",
// //         "gridProperties": {
// //           "rowCount": 1000,
// //           "columnCount": 26
// //         }
// //       }
// //     }
// //   ],
// //   "spreadsheetUrl": "https://docs.google.com/spreadsheets/d/1J07lxrEH-YECkVzYSJQOheL9IHp1AzVGRIjB59bgypo/edit"
// // }
// // }
// }




  function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets"})
        .then(function() {
          console.log("Sign-in successful");
        }, function(error) {
          console.error("Error signing in", error);
        });
  }
  function loadClient() {
    return gapi.client.load()
        .then(function() {
          console.log("GAPI client loaded for API");
        }, function(error) {
          console.error("Error loading GAPI client for API");
        });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.sheets.spreadsheets.create({
      "resource": {}
    })
        .then(function(response) {
          // Handle the results here (response.result has the parsed body).
          console.log("Response", response);
        }, function(error) {
          console.error("Execute error", error);
        });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id:"777685935611-8ijbaab71ets2lg89oaim0u6uq9k2aak.apps.googleusercontent.com"});
  });
