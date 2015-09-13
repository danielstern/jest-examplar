let $ = require('jquery');

module.exports = {
	get(url){
		return new Promise(function(success,error){
			$.ajax({
                type:"GET",
				url:url,
				dataType:"json",
				success,
				error
			});
		});
	}
}
