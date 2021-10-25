
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCH4ocgyoc1v-K6Yz1pVU9qt80T50eMwTw",
      authDomain: "kwitter-d0ecf.firebaseapp.com",
      projectId: "kwitter-d0ecf",
      storageBucket: "kwitter-d0ecf.appspot.com",
      messagingSenderId: "567085439465",
      appId: "1:567085439465:web:06f10bb0347a77e6c81378"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    console.log(user_name);
    document.getElementById("user_name").innerHTML="welcome"+user_name+"!";

    function addroom()
    {
          room_name=document.getElementById("room name").value;
          firebase.database().ref("/").child("room_name").update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kiwtter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-"+Room_names)
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",name);window.location
"kwitter page.html"
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}