
var    apiKey= config.apiKey;
var    authDomain= config.authDomain;
var    databaseURL= config.databaseURL;
var    projectId= config.projectId;
var    storageBucket= config.storageBucket;
var    messagingSenderId= config.messagingSenderId;
var    appId= config.appId;
var    measurementId= config.measurementId;

  // Initialize Firebase
  const db = firebase.initializeApp(config);
  const analytics = firebase.analytics();
  //console.log(firebase);

const database = firebase.database();
const ref = db.database().ref('subscribers');


const form = document.getElementById('submit-email');

form.addEventListener("submit", processSubmit);

function processSubmit() {
  //console.log('submitted');
  const email = document.querySelector("input[name='email']").value;
  let data = {
    type: email
  };

  ref.push(data);
}
