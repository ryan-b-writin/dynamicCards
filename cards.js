var createBtn = document.getElementById("createButton");
var outputTarget = document.getElementById("outputTarget");

//click event listener-create
createBtn.addEventListener("click", function() {
    var inputText = document.getElementById("inputText").value;
    console.log("click");
    var cardString = "<div class='card'> <h3>"+inputText+"</h3> <button id='delete'>Delete!</button> </div>";
    outputTarget.innerHTML += cardString;
    inputText = "";
});


//click event listener-delete
outputTarget.addEventListener("click", function(e){
  // on click, remove this
    if (e.target.id === "delete") {
      var whereamI = e.target.parentNode;
      outputTarget.removeChild(whereamI);
    }
});
