
var settingsButton = document.getElementById('settingsButton');
var modal = document.getElementById('settingsModal');

var closeButton = document.querySelector('.close');

var audio = document.querySelector('audio');

settingsButton.addEventListener('click', function() {
    modal.style.display = 'block';
    audio.play(); 
});

closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
    
});


window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
         
    }
});


var volumeInput = document.getElementById('volume');
volumeInput.addEventListener('input', function() {
    audio.volume = this.value / 100; 
});
