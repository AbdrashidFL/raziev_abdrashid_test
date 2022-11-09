let secondsRemaining;
let intervalHandle;


function tick(){
	let timeDisplay = document.getElementById("time");
	let min = Math.floor(secondsRemaining / 60);
	let sec = secondsRemaining - (min * 60);
	if (sec < 10) {
		sec = "0" + sec;
	}
	let message = min.toString() + ":" + sec;
	timeDisplay.innerHTML = message;
	if (secondsRemaining === 0){
		clearInterval(intervalHandle);
	}
	secondsRemaining--;
}

function startCountdown(){
	let minutes = 10;
	secondsRemaining = minutes * 60;
	intervalHandle = setInterval(tick, 1000);
}
startCountdown();
// countdown

setTimeout(() => {
    $('.popup').fadeIn();
    $('.popup').css('display', 'flex');
    document.body.style.overflow = 'hidden';
}, 5000);
$('.popup-before,.popup-out').on("click", function() {
    setTimeout(() => {
        $('.popup').hide();
        $('.popup').css('display', 'none');
        document.body.style.overflow = 'visible';
    }, 100);
});
// popup
let $page = $('html, body');
$('.link a[href*="#"]').click(function(e) {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 80
    }, 500);
});
