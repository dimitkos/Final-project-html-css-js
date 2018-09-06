function check(){


	//kanoume metavlites tis erwtiseis, tha psaksei olo to arxeio gia ena onoma quiz, meta question 1 kai telika to value
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;

	//dhmiourgia counter gia tis swstes apantiseis
	var correct = 0 ;

	//elexgos an h kathe erwtisi einai swsti, se periptosi p einai o counter ayksanetai kata 1
	if (question1=="athens") {
		correct++;
	}

	if (question2=="athens") {
		correct++;
	}

	if (question3=="kalamata") {
		correct++;
	}

	//dhmiourgia array messages
	var message = ["Excellent", "Good Job", "Oh, you need more practice"]
	//dhmjiourgia pinaka ston opoio tha prosthesw tis fotografies, img einai o fakos kai akolouthe to onoma toy arxeioy
	var pictures = ["img/excellent.png","img/good_job.jpg","img/try_again.png"]
	var range;

	if (correct == 0) {
		range=2;
	}

	if (correct > 0 && correct < 3) {
		range = 1;
	}

	if (correct == 3) {
		range = 0;
	}

	//theloume na broume to antikeimeno apo to id
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = message[range];
	//theloume na broume to antikeimeno apo to id, afou vrei to number_correct einai adeio sto >< sto opoio prosthetoume to you got ...
	document.getElementById("number_correct").innerHTML = "You got " + correct +"correct.";
	//prosthe src to opoio tha ginei fvtografia toy pinaka
	document.getElementById("picture").src = pictures[range];

}

