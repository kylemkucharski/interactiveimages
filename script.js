$(document).ready(function () {


	var allTheThings = function () {
		$(".hotspot").addClass("hide_btn"); //.hotspot so it closes all hotspots, not just the one
		$('#x-close').addClass('btn_close_show'); //show the x (close) button in the corner
		$('#slide').addClass('info_slides_show'); //show the slide that the information will appear on
	}

	$("#dotB").click(function () {
		allTheThings();
		$('#popIn').text("Gucci Gang, Gucci Gang / Spend ten racks on a new chain / My bitch love do cocaine / I fuck a bitch, I forgot her name / I can't buy a bitch no wedding ring / Rather go and buy Balmains -Gucci Gang by Lil Pump").addClass('popIn-info');
	});


	$("#dotA").click(function () {
		allTheThings();
		$('#popIn').text("The trend of Hip Hop stars wearing designer labels dates back to when streetwear designer Dapper Dan of Harlem appropriated fashion labels and incorporated them into Hip Hop clothing. “Gucci has always been a part of Hip Hop style,” said Joseph Ferreira, 23, the brand marketer of Divine Minds, a clothing line that does frequent collaborations with SoundCloud rappers.").addClass('popIn-info');
	});


	$('#x-close').click(function () {
		$('#x-close').removeClass("btn_close_show")
		$('.hotspot').removeClass("hide_btn")
		$("#slide").removeClass('info_slides_show')
	});

	//Begin 2nd function

	var allTheThings2 = function () {
		$(".hotspot").addClass("hide_btn"); //.hotspot so it closes all hotspots, not just the one
		$('#x-close2').addClass('btn_close_show'); //show the x (close) button in the corner
		$('#slide2').addClass('info_slides_show'); //show the slide that the information will appear on
	}

	$("#xanA").click(function () {
		allTheThings2();
		$('#popIn2').text("Lil Tracy, a close friend of the late Cloud Rap artist Lil Peep, goes on Instagram Live to address his friend’s death.").addClass('popIn-info');
	});

	$("#xanB").click(function () {
		allTheThings2();
		$('#popIn2').text("You're like a switchblade, cut right through me / I kinda like it though, baby, cut through me / Vampire in the club in the back now / Heartthrob girls have me as their background / I don't care though, I want you to care though / I cast a love spell, baby, you'll be back though -Backseat by Lil Peep and Lil Tracy").addClass('popIn-info');
	});

	$('#x-close2').click(function () {
		$('#x-close2').removeClass("btn_close_show")
		$('.hotspot').removeClass("hide_btn")
		$("#slide2").removeClass('info_slides_show')
	});

	//End 2nd function

	//Begin 3rd function
	var allTheThings3 = function () {
		$(".hotspot").addClass("hide_btn"); //.hotspot so it closes all hotspots, not just the one
		$('#x-close3').addClass('btn_close_show'); //show the x (close) button in the corner
		$('#slide3').addClass('info_slides_show'); //show the slide that the information will appear on
	}

	$("#peepA").click(function () {
		allTheThings3();
		$('#popIn3').text("'I can't feel that much sometimes / These drugs could kill me, yeah / Disappear into my mind where I can't feel a thing / When the sky falls down and no one here can think that clearly / I'll be by your side, let's get high one last time.' -Come Around by Lil Peep, who died from a drug overdose on Nov. 15, 2017 ").addClass('popIn-info');
	});

	$("#peepB").click(function () {
		allTheThings3();
		$('#popIn3').text("Drug use is glorified right now. The anxiety and depression is at an all time high. People feel pressured to have clout, and act a certain way, and essentially be fake to get what they want through their career. That is really what is eternally pressing on them to act a certain way. And so they push that anger out through their music,” said Dommy Cicione, 23,  who is the tour manager for SoundCloud rappers Xavier Wulf and Chxpo.").addClass('popIn-info');
	});

	$('#x-close3').click(function () {
		$('#x-close3').removeClass("btn_close_show")
		$('.hotspot').removeClass("hide_btn")
		$("#slide3").removeClass('info_slides_show')
	});
	//End 3rd function

	//Begin 4th function
	var allTheThings4 = function () {
		$(".hotspot").addClass("hide_btn"); //.hotspot so it closes all hotspots, not just the one
		$('#x-close4').addClass('btn_close_show'); //show the x (close) button in the corner
		$('#slide4').addClass('info_slides_show'); //show the slide that the information will appear on
	}

	$("#purpA").click(function () {
		allTheThings4();
		$('#popIn4').text("'Rampant drug use in both movements offer unpredictability and a fixation on death,' said Jacques Morel on a recent video posted by Genius News that compared the SoundCloud rap movement to the likes of punk rock.").addClass('popIn-info');
	});

	$("#purpB").click(function () {
		allTheThings4();
		$('#popIn4').text("In 2017, SoundCloud rapper Smokepurpp released his mixtape Deadstar. The mixtape’s photo was made to resemble the iconic open casket funeral of punk rocker GG Allin. Allin died of a drug overdose from heroin in 1993.").addClass('popIn-info');
	});

	$('#x-close4').click(function () {
		$('#x-close4').removeClass("btn_close_show")
		$('.hotspot').removeClass("hide_btn")
		$("#slide4").removeClass('info_slides_show')
	});
	//End 4th function







});