
var firebaseConfig = {
  apiKey: "AIzaSyDLYn0uzbN4KTi3-_vD1l2iAOXOMBkLCUI",
  authDomain: "kwitter-48ecc.firebaseapp.com",
  databaseURL: "https://kwitter-48ecc-default-rtdb.firebaseio.com",
  projectId: "kwitter-48ecc",
  storageBucket: "kwitter-48ecc.appspot.com",
  messagingSenderId: "359199582339",
  appId: "1:359199582339:web:68dc9b20f39ce4d52893b6",
  measurementId: "G-SSC0MEE7LV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
