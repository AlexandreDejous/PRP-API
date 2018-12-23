console.log('Client-side code running');

//method = "POST" , "GET", etc
//adress = "/clicke" , "/clicked", etc
//ID = "HTML_ID"
function XHR1(method, address,ID){
  var req = new XMLHttpRequest();
  req.open(method,address);
  req.onreadystatechange = function(){
      if(req.readyState == 4){
          document.getElementById(ID).innerHTML = req.responseText;
      }
  }
  req.send();
}

/*function XHR2(method, address, ID, data[]){
  var req = new XMLHttpRequest();
  req.open(method,address);
  req.onreadystatechange = function(){
      if(req.readyState == 4){
          document.getElementById(ID).innerHTML = req.responseText;
      }
  }
  req.send();
}*/

$( "#addProductForm" ).submit(function( event ) {
  var Form = $( "#addProductForm" ).serializeArray();
  var Arr = [Form[0].value,Form[1].value,Form[2].value,Form[3].value,Form[4].value,Form[5].value];
  // array of string values of the form 
  //XHR2("POST","/addProduct","add_area", Arr);
  //var test = JSON.stringify(Form[0]);
  //window.alert(Form[0].value);
  //alert(Arr[1]);
  /*if ( $( "input:first" ).val() === "correct" ) {
    alert("correct");
    event.preventDefault();
    return;
  }*/
  event.preventDefault();


});

/*window.onload = function() {
    if (window.jQuery) {  
        // jQuery is loaded  
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}*/

const button = document.getElementById('queryAll');
button.addEventListener('click', function(e) {
  console.log('button was clicked');
  XHR1("GET","/clicke","text_area");

    
}


);