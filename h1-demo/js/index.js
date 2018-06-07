
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
    $('.textbox').html('Please wait ~15 seconds while I think...');
	getRepeated('https://hackerone.com/bugs.json?subject=user&report_id=0&view=custom&substates%5B%5D=pre-submission&substates%5B%5D=new&substates%5B%5D=needs-more-info&substates%5B%5D=triaged&substates%5B%5D=duplicate&substates%5B%5D=informative&substates%5B%5D=resolved&substates%5B%5D=not-applicable&substates%5B%5D=spam&reported_to_team=&text_query=' + word1  +'&program_states%5B%5D=2&program_states%5B%5D=3&program_states%5B%5D=4&program_states%5B%5D=5&sort_type=pg_search_rank&sort_direction=descending&limit=25&page=1', 10, 0, (total1) => {
	    getRepeated('https://hackerone.com/bugs.json?subject=user&report_id=0&view=custom&substates%5B%5D=pre-submission&substates%5B%5D=new&substates%5B%5D=needs-more-info&substates%5B%5D=triaged&substates%5B%5D=duplicate&substates%5B%5D=informative&substates%5B%5D=resolved&substates%5B%5D=not-applicable&substates%5B%5D=spam&reported_to_team=&text_query=' + word2 + '&program_states%5B%5D=2&program_states%5B%5D=3&program_states%5B%5D=4&program_states%5B%5D=5&sort_type=pg_search_rank&sort_direction=descending&limit=25&page=1', 10, 0, (total2) => {
		    console.log('and we get: ' + total1 + ', ' + total2)
		    if (total1 > total2) {
			    $('.textbox').html(word1 + ' fits you better!');
		    } else {
			    $('.textbox').html(word2 + ' fits you better!');
		    }
		});
	});
}



$(function() {$('.eball').mouseenter(function(){
    });

});