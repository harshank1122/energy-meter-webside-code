var config = {
    apiKey: "AIzaSyAtktO0KVIJw_uHwkKeTuc-dqnxt5p5i1Q",
    authDomain: "garbage-3d535.firebaseapp.com",
    databaseURL: "https://garbage-3d535-default-rtdb.firebaseio.com",
    projectId: "garbage-3d535",
    storageBucket: "garbage-3d535.appspot.com",
    messagingSenderId: "499865296233",
  };
  firebase.initializeApp(config);
  
  $(document).ready(function(){
    var database = firebase.database();
    var red;
  
    database.ref().on("value", function(snap){
      red = snap.val().red;
      if(red == 1){
        $(".lightStatus").text("HOME POWER IS ON");
      } else {
        $(".lightStatus").text("HOME POWER IS OFF");
      }
    });
  
    $(".lightButton").click(function(){
      var firebaseRef = firebase.database().ref().child("red");
  
      if(red == 0){
        firebaseRef.set(1);
        red = 1;
      } else {
        firebaseRef.set(0);
        red = 0;
      }
    });
  });
  