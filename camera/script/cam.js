
var video = document.getElementsByTagName('video')[0], 
       heading = document.getElementsByTagName('h1')[0];
	   
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;

if(navigator.getUserMedia) {
  navigator.getUserMedia('video', successCallback, errorCallback);
  function successCallback( stream ) {
	  if(window.webkitURL){
		  video.src = webkitURL.createObjectURL(stream);
	  }else{
		  video.src = stream;
	  }
  }
  function errorCallback( error ) {
    heading.textContent = 
        "An error occurred: [CODE " + error.code + "]";
  }
} else {
  heading.textContent = 
      "Native web camera streaming is not supported in this browser!";
}
