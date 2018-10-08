var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/irikapoet.jpg') {
      myImage.setAttribute ('src','images/svetlana.jpg');
    } else {
      myImage.setAttribute ('src','images/irikapoet.jpg');
    }
}