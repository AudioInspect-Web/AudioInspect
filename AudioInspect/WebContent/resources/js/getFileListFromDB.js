function getFileListFromDB(query) {
	$.ajax({
		method: "POST",
		url: '/fileListServlet; charset=utf-8',
		dataType: 'text',
		data: {
			sqlQuery: query
		},
		complete: function(data) {
			makeFileListFromDB(JSON.parse(data.responseText.replace("[","{").replace(/]$/, '}')))
		},
		error: function(request, status, error) {
			console.log(request.responseText)
			console.log(status.responseText)
			console.log(error.responseText)
			alert("ajax 에러 발생")
			return
		}
	})
}


function makeFileListFromDB(data){
	var result_length = $(".result-style_th").length;
	if(result_length == 8){
		var index = 1;
	}
	else{
		var index = result_length + 1 - 8;
	}
	for(key in data){
		var exportdata = Object.entries(data[key])
		var fileInfoFromDB = "<tr>"
		fileInfoFromDB += "<td class='result-style_th'>" + index + "</td>"
		fileInfoFromDB += "<td class='result-style_td'>" + key + "</td>"
		fileInfoFromDB += "<td class='result-style_td'>" + exportdata[0][1] + "</td>"
		fileInfoFromDB += "<td class='result-style_td'>" + exportdata[1][1] + "</td>"
		fileInfoFromDB += "<td class='result-style_td'>" + exportdata[2][1] + "</td>"
		fileInfoFromDB += "<td class='result-style_td'>" + exportdata[3][1] + "</td>"
		fileInfoFromDB += "<td class='result-style_td'>" + exportdata[4][1] + "</td>"
		fileInfoFromDB += "<td class='result-style_td'>" + exportdata[5][1] + "</td>"
		fileInfoFromDB += "</tr>"
		$('table.result-style tbody').append(fileInfoFromDB)
		index++;
	}
}
