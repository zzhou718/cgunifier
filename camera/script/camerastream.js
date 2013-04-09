//To enable camera streaming
var video_element = document.querySelector('video')[0];

navigator.getUserMedia = navigator.getUserMeida || navigator.webkitGetUserMedia;

if (navigator.getUserMedia) {
	//fallback();
	navigator.getUserMedia('video', success, fallback);
}else{
	alert('This getUserMedia is not supported by your browser.');

	}
			
function success(stream){
	if (window.webkitURL){
		video_element.src = webkitURL.createObjectURL(stream);
	}else{
		video_element.src = stream;
	}
};

function fallback(error){
	//video_element.src = 'fallbackvideo.webm';
	alert("Error:" + error.toString());
	return;
}
	