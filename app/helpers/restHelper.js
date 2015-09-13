"use strict";
let $ = require('jquery');

module.exports = {
	get(url){
		return new Promise(function(success,error){
			$.ajax({
				url:url,
				dataType:"json",
				success,
				error
			});
		});
	}
}
