//excel 저장 저장 버튼 누르면 exportReportToExcel 함수 실행
function exportReportToExcel() {
	var comparemethod = document.querySelector(".compare_button.current").value;
	//xml인 경우
	if (comparemethod == "XML") {
		exportReportToExcel_XML();
	}
	//tree인 경우
	else if (comparemethod == "TREE") {
		exportReportToExcel_TREE();
	}
	//text인 경우
	else if (comparemethod == "TEXT") {
		exportReportToExcel_TEXT();

	}
}

//xml인 경우에서 excel 저장 버튼 누른 경우 함수 실행
function exportReportToExcel_XML() {
	// workbook 생성
	var wb = XLSX.utils.book_new();

	// sheet명 생성
	wb.SheetNames.push("total_result");

	var arr = [];
	//~과 ~은 일치하지 않습니다. or 일치합니다. 비교 결과 부분
	var summary = $("#summary")[0].innerText;
	//불일치 결과
	var total = $(".compareresult");

	var attribute_name = ""
	var standardfile_value_2 = ""
	var attribute_name_1 = ""
	var attribute_name_2 = ""
	var data_block = ""
	var standardfile_value = ""
	var comparefile_value = ""
	var a = "불일치 원인"
	var b = "불일치 속성"
	var c = "Standard File"
	var d = "Compare File"
	
	//두 파일이 일치한 경우는 total.length가 0
	if (total.length == 0) {
		arr[0] = ({ "비교 결과": summary });
	}
	//두 파일이 불일치하는 경우
	for (var i = 0; i < total.length; i++) {
		//불일치 결과 가져오기
		attribute_name = $(".compareresult")[i].firstChild.data;
		//attribute_name_1은 block 이름
		attribute_name_1 = attribute_name.substr(0, attribute_name.indexOf("]"));
		attribute_name_1 = attribute_name_1.replace("[", "");
		//attribute_name_2는 불일치 위치
		attribute_name_2 = attribute.substr(0, attribute.indexOf("<br>"));
		attribute_name_2 = attribute_name_2.substr(attribute_name_2.indexOf("]"));
		attribute_name_2 = attribute_name_2.replaceAll("<b>", "").replaceAll("</b>", "")
		
		//standard, compare 파일 비교 값 (ex, 존재 o, 존재 x 부분)
		attribute = $(".compareresult")[i].innerHTML;
		attribute2 = attribute.substr(attribute.indexOf("<br>"));
		attribute2 = attribute2.replace("<br", "");
		//!= 불일치 아이콘을 기준으로 앞 부분을 standardfile_value 뒷 부분을 comparefile_value
		standardfile_value = attribute2.substr(0, attribute2.indexOf('<i class="fa-sharp fa-solid fa-not-equal"></i>'));
		comparefile_value = attribute2.substr(attribute2.indexOf('<i class="fa-sharp fa-solid fa-not-equal"></i>'));
		standardfile_value = standardfile_value.replace("(", "");
		
		//비교 결과에 ::가 포함된 경우와 아닌 경우로 나뉨
		if (standardfile_value.includes("::")) {
			var standardfile_name = standardfile_value.substr(0, standardfile_value.indexOf("::"));
			//stanardfile_value_2로 ::등 필요없는 부분 삭제
			standardfile_value_2 = standardfile_value.substr(standardfile_value.indexOf("::"));
			standardfile_value_2 = standardfile_value_2.replace(":: ", "");
			var comparefile_name = comparefile_value.substr(0, comparefile_value.indexOf("::"));
			//comparefile_value_2로 ::등 필요없는 부분 삭제
			comparefile_value_2 = comparefile_value.substr(comparefile_value.indexOf("::"));
			comparefile_value_2 = comparefile_value_2.replace(":: ", "");
		}
		else {
			var standardfile_name = standardfile_value.substr(0, standardfile_value.indexOf(")"));
			//standardfile_value_2로 (나 )등 필요없는 부분 삭제
			standardfile_value_2 = standardfile_value.substr(standardfile_value.indexOf(")"));
			standardfile_value_2 = standardfile_value_2.replace(") ", "");
			var comparefile_name = comparefile_value.substr(0, comparefile_value.indexOf(")"));
			//comparefile_value_2로 (나 )등 필요없는 부분 삭제
			comparefile_value_2 = comparefile_value.substr(comparefile_value.indexOf(")"));
			comparefile_value_2 = comparefile_value_2.replace(") ", "");
		}
		//블록 이름과 불일치 위치
		for (var j = 0; j < attribute_name_1.length; j++) {
			//data_block은 블록 이름
			data_block = attribute_name_1
			//attributte_name2는 불일치 위치
			attribute_name_2 = attribute_name_2.replace("]", "");
			var attribute_name2 = attribute_name_2
		}
		//비교 결과는 standard file과 compare file의 길이가 같으므로 standardfile_value.length로 for문 사용
		for (var j = 0; j < standardfile_value.length; j++) {
			//standardfile_value_2는 standard file 비교 결과
			standardfile_value_2
			//comparefile_value_2는 compare file 비교 결과
			comparefile_value_2;
		}
		//summary1 = standrard file이름
		summary1 = summary.substr(0, summary.indexOf("와"));
		summary1 = "Standard file = " + summary1;
		//summary2 = compare file이름	
		summary2 = summary.substr(0, summary.indexOf("는"));
		summary2 = summary2.substr(summary2.indexOf("와"));
		summary2 = summary2.replace("와", "Comparefile = ");
		//summary3 = 일치하지 않습니다. or 일치합니다.
		summary3 = summary.substr(summary.indexOf("는"));
		summary3 = summary3.replace("는", "두 파일은");
		
		//arr[0] = standardfile 이름
		arr[0] = ({ "비교 결과": summary1 });
		//arr[1] = comparefile 이름
		arr[1] = ({ "비교 결과": summary2 });
		//arr[2] = ~는 일치합니다. or 일치하지 않습니다.
		arr[2] = ({ "비교 결과": summary3 });
		//arr[3] = 한 줄 띄려고 사용
		arr[3] = ({});
		//arr[4] = a = 불일치 원인, b = 불일치 속성, c = standard file, d = compare file 나타냄
		arr[4] = ({ "비교 결과": a, "": b, " ": c, "  ": d });
		//arr[i + 5] = data block = 블록 이름, attribute_name2 = 불일치 위치, standardfile_value_2 = standardfile 비교 값(ex:O, X), comparefile_value_2 = comparefile 비교 값
		arr[i + 5] = ({ "비교 결과": data_block, "": attribute_name2, " ": standardfile_value_2, "  ": comparefile_value_2 });

	}


	var ws = XLSX.utils.json_to_sheet(arr);


	//행 별 excel 칸 넓이 수정 가능
	ws['!cols'] = []
	ws['!cols'][0] = { width: 60 }
	ws['!cols'][1] = { width: 70 }
	ws['!cols'][2] = { width: 20 }
	ws['!cols'][3] = { width: 20 }


	//시트 이름 
	//24행의 "total_result"이 부분과 이름이 같아야 함
	// sheet명 생성
	//wb.SheetNames.push("total_result");
	wb.Sheets["total_result"] = ws;

	// 엑셀 파일 쓰기
	var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

	var date = new Date();

	// 파일 다운로드
	//date.toLocaleString로 파일 이름을 현재 시간으로 설정해둠
	saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), 'Result_"' + date.toLocaleString() + '"' + '.xlsx');
}

//text인 경우에서 excel 저장 버튼 누른 경우 함수 실행
function exportReportToExcel_TEXT() {
	// workbook 생성
	var wb = XLSX.utils.book_new();

	// sheet명 생성
	//총 3개의 sheet가 존재하므로 이름을 각각 설정
	wb.SheetNames.push("Standard file");
	wb.SheetNames.push("Compare file");
	wb.SheetNames.push("total_result");

	//arr = standard file 분석 결과 저장
	var arr = [];
	//arr2 = compare file 분석 결과 저장
	var arr2 = [];
	//arr3 = 비교 결과 저장
	var arr3 = [];

	//standard_text 부분의 innerHTML로 불러와 한 줄 씩 읽기
	for (var i = 0; i < $(".standard_text").length; i++) {
		var standard_result = $(".standard_text").children()[i].innerHTML;
		var st_result = standard_result.split(":")
		for (var j = 0; j < st_result.length; j++) {
			//attribute_name은 속성 이름
			var attribute_name = st_result[0]
			//attribute_value는 속성 결과
			var attribute_value = st_result[1]
		}
		//arr 배열에 속성 이름 결과와 속성 값 결과 저장
		arr[i] = ({ "속성 이름": attribute_name, "속성 값": attribute_value });
	}
	//compare file은 현재 비교하는 파일을 불러오므로 $(".comparefile.current")[0].firstElementChild.childNodes로 불러와 한 줄 씩 읽기
	var compare = $(".comparefile.current")[0].firstElementChild.childNodes
	for (var i = 0; i < compare.length; i++) {
		var compare_result = compare[i].innerText;
		var com_result = compare_result.split(":")
		for (var j = 0; j < com_result.length; j++) {
			//attribute_name은 속성 이름
			var attribute_name = com_result[0]
			//attribute_value는 속성 결과
			var attribute_value = com_result[1]
		}
		//arr2 배열에 속성 이름 결과와 속성 값 결과 저장
		arr2[i] = ({ "속성 이름": attribute_name, "속성 값": attribute_value });
	}

	//summary는 ~와 ~는 일치합니다. or 일치하지 않습니다.
	var summary = $("#summary")[0].innerText
	//total은 불일치 위치, 속성 부분
	var total = $(".compareresult");

	var attribute_name = ""
	var attribute_value = ""
	var attribute_value_1 = ""
	var standardfile_value_2 = ""
	var attribute_name_1 = ""
	var attribute_name_2 = ""
	var data_block = ""
	var attribute_value_2 = ""
	var standardfile_value = ""
	var comparefile_value = ""
	var attribute_name2 = ""
	var a = "불일치 원인"
	var b = "불일치 속성"
	var c = "Standard File"
	var d = "Compare File"
	
	//total.length == 0인 경우는 두 파일이 일치하는 경우
	if (total.length == 0) {
		arr3[0] = ({ "비교 결과": summary });
	}
	//불일치 하는 경우
	else {
		for (var i = 0; i < total.length; i++) {
			attribute_name = $(".compareresult")[i].firstChild.data;
			//attribute_name_1은 block이름
			attribute_name_1 = attribute_name.substr(0, attribute_name.indexOf("]"));
			attribute_name_1 = attribute_name_1.replace("[", "");
			//attribute_name_2는 불일치 위치
			attribute_name_2 = attribute_name.substr(attribute_name.indexOf("]"));
			attribute_name_2 = attribute_name_2.replace("] ", "");
			
			//attribute_value_1은 standard file 비교 결과
			attribute_value_1 = $(".compareresult")[i].childNodes[2].data;
			//attribute_value_2는 comapre file 비교 결과
			attribute_value_2 = $(".compareresult")[i].lastChild.data;
			
			//비교 결과에 ::가 포함된 경우
			if (attribute_value_1.includes("::")) {
				//standarfile_value_2는 standardfile 비교 결과
				standardfile_value_2 = attribute_value_1.substr(attribute_value_1.indexOf("::"));
				standardfile_value_2 = standardfile_value_2.replace(":: ", "");
				//comparefile_value_2는 comparefile 비교 결과
				comparefile_value_2 = attribute_value_2.substr(attribute_value_2.indexOf("::"));
				comparefile_value_2 = comparefile_value_2.replace(":: ", "");
			}
			else {
				//standarfile_value_2는 standardfile 비교 결과
				standardfile_value_2 = attribute_value_1.substr(attribute_value_1.indexOf(")"));
				standardfile_value_2 = standardfile_value_2.replace(") ", "");
				//comparefile_value_2는 comparefile 비교 결과
				comparefile_value_2 = attribute_value_2.substr(attribute_value_2.indexOf(")"));
				comparefile_value_2 = comparefile_value_2.replace(") ", "");
			}
			for (var j = 0; j < attribute_name_1.length; j++) {
				//data_block은 block 이름
				data_block = attribute_name_1
				//attribute_name_2는 불일치 위치
				attribute_name_2 = attribute_name_2.replace("]", "");
				attribute_name2 = attribute_name_2
			}
			for (var j = 0; j < attribute_value_1.length; j++) {
				//standardfile_value는 standard file 비교 결과
				standardfile_value = standardfile_value_2
				//comparefile_value는 comparefile 비교 결과
				comparefile_value = comparefile_value_2;
			}
			
			//summary1 = standard file 명
			summary1 = summary.substr(0, summary.indexOf("와"));
			summary1 = "Standard file = " + summary1;
			//summary2 = compare file 명
			summary2 = summary.substr(0, summary.indexOf("는"));
			summary2 = summary2.substr(summary2.indexOf("와"));
			summary2 = summary2.replace("와", "Comparefile = ");
			//summary3 = 일치합니다 or 일치하지 않습니다.
			summary3 = summary.substr(summary.indexOf("는"));
			summary3 = summary3.replace("는", "두 파일은");

			arr3[0] = ({ "비교 결과": summary1 });
			arr3[1] = ({ "비교 결과": summary2 });
			arr3[2] = ({ "비교 결과": summary3 });
			arr3[3] = ({});
			arr3[4] = ({ "비교 결과": a, "": b, " ": c, "  ": d });
			//data_block = block 이름, attribute_name2 = 불일치 속성, standardfile_value = standard file 비교 결과, comaprefile_value = compare file 비교 결과
			arr3[i + 5] = ({ "비교 결과": data_block, "": attribute_name2, " ": standardfile_value, "  ": comparefile_value });


		}
	}




	var ws = XLSX.utils.json_to_sheet(arr);
	var ws2 = XLSX.utils.json_to_sheet(arr2);
	var ws3 = XLSX.utils.json_to_sheet(arr3);

	ws['!cols'] = []
	ws['!cols'][0] = { width: 20 }
	ws['!cols'][1] = { width: 40 }
	ws2['!cols'] = []
	ws2['!cols'][0] = { width: 20 }
	ws2['!cols'][1] = { width: 40 }
	ws3['!cols'] = []
	ws3['!cols'][0] = { width: 50 }
	ws3['!cols'][1] = { width: 30 }
	ws3['!cols'][2] = { width: 35 }
	ws3['!cols'][3] = { width: 35 }


	wb.Sheets["Standard file"] = ws;
	wb.Sheets["Compare file"] = ws2;
	wb.Sheets["total_result"] = ws3;

	// 엑셀 파일 쓰기
	var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

	var date = new Date();

	// 파일 다운로드
	saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), 'Result_"' + date.toLocaleString() + '"' + '.xlsx');
}

//tree인 경우에서 excel 저장 버튼 누른 경우 함수 실행
//exportReportToExcel_TEXT 함수와 변수 명, 코드 대부분 비슷(주석 참고)
function exportReportToExcel_TREE() {
	// workbook 생성
	var wb = XLSX.utils.book_new();

	// sheet명 생성
	wb.SheetNames.push("Standard file");
	wb.SheetNames.push("Compare file");
	wb.SheetNames.push("total_result");

	var arr = [];
	var arr2 = [];
	var arr3 = [];
	
	//standard는 general인 경우
	var standard = $("#standardfile")[0].firstElementChild.childNodes
	//standard2는 Audio인 경우
	var standard2 = $("#standardfile")[0].firstElementChild.nextElementSibling.childNodes
	//general 부분
	for (var i = 0; i < standard.length; i++) {
		var standard_1 = standard[i].innerHTML;
		//아이콘 제외
		standard_1 = standard_1.replace('<i class="fa-regular fa-file"></i>', "").replace("<td>┗  ", "").replace("</td>", "").replace('<td style="color:red">┗  <i class="fa-solid fa-triangle-exclamation style=" color:red"=""></i>', "").replace('<i class="fa-regular fa-file-audio"></i>', "").replace("<td>", "")
		var standard_result = standard_1.split(":")
		for (var j = 0; j < standard_result.length; j++) {
			//attribute_name은 속성 이름
			var attribute_name = standard_result[0]
			//attribute_value는 속성 값
			var attribute_value = standard_result[1]
		}
		arr[i] = ({ "속성 이름": attribute_name, "속성 값": attribute_value });
	}
	//Audio 부분
	for (var i = 0; i < standard2.length; i++) {
		var standard_2 = standard2[i].innerHTML;
		standard_2 = standard_2.replace('<i class="fa-regular fa-file"></i>', "").replace("<td>┗  ", "").replace("</td>", "").replace('<td style="color:red">┗  <i class="fa-solid fa-triangle-exclamation style=" color:red"=""></i>', "").replace('<i class="fa-regular fa-file-audio"></i>', "").replace("<td>", "")
		var standard_result2 = standard_2.split(":")
		for (var j = 0; j < standard_result2.length; j++) {
			//attribute_name은 속성 이름
			attribute_name = standard_result2[0]
			//attribute_value는 속성 값
			attribute_value = standard_result2[1]
		}
		//general 아래로 audio 부분 넣음
		arr[i + standard.length] = ({ "속성 이름": attribute_name, "속성 값": attribute_value });
	}

	//compare는 general인 경우
	var compare = $(".comparefile.current")[0].firstElementChild.childNodes
	//compare2는 Audio인 경우
	var compare2 = $(".comparefile.current")[0].firstElementChild.nextElementSibling.childNodes
	for (var i = 0; i < compare.length; i++) {
		var compare_1 = compare[i].innerHTML;
		//아이콘 제외
		compare_1 = compare_1.replace('<i class="fa-regular fa-file"></i>', "").replace("<td>┗  ", "").replace("</td>", "").replace('<td style="color:red">┗  <i class="fa-solid fa-triangle-exclamation style=" color:red"=""></i>', "").replace('<i class="fa-regular fa-file-audio"></i>', "").replace("<td>", "")
		var com_result = compare_1.split(":")
		for (var j = 0; j < com_result.length; j++) {
			//attribute_name은 속성 이름
			var attribute_name = com_result[0]
			//attribute_value는 속성 값
			var attribute_value = com_result[1]
		}
		arr2[i] = ({ "속성 이름": attribute_name, "속성 값": attribute_value });
	}
	for (var i = 0; i < compare2.length; i++) {
		var compare_2 = compare2[i].innerHTML;
		compare_2 = compare_2.replace('<i class="fa-regular fa-file"></i>', "").replace("<td>┗  ", "").replace("</td>", "").replace('<td style="color:red">┗  <i class="fa-solid fa-triangle-exclamation style=" color:red"=""></i>', "").replace('<i class="fa-regular fa-file-audio"></i>', "").replace("<td>", "")
		var com_result2 = compare_2.split(":")
		for (var j = 0; j < com_result2.length; j++) {
			//attribute_name은 속성 이름
			attribute_name = com_result2[0]
			//attribute_value는 속성 값
			attribute_value = com_result2[1]
		}
		//general 아래로 audio 결과 넣음
		arr2[i + compare.length] = ({ "속성 이름": attribute_name, "속성 값": attribute_value });
	}

	var summary = $("#summary")[0].innerText
	var total = $(".compareresult");

	var attribute_name = ""
	var attribute_value = ""
	var attribute_value_1 = ""
	var standardfile_value_2 = ""
	var attribute_name_1 = ""
	var attribute_name_2 = ""
	var data_block = ""
	var attribute_value_2 = ""
	var standardfile_value = ""
	var comparefile_value = ""
	var a = "불일치 원인"
	var b = "불일치 속성"
	var c = "Standard File"
	var d = "Compare File"

	if (total.length == 0) {
		arr3[0] = ({ "비교 결과": summary });
	}
	for (var i = 0; i < total.length; i++) {
		attribute_name = $(".compareresult")[i].firstChild.data;
		attribute_value_1 = $(".compareresult")[i].childNodes[2].data;
		attribute_value_2 = $(".compareresult")[i].lastChild.data;
		attribute_name_1 = attribute_name.substr(0, attribute_name.indexOf("]"));
		attribute_name_1 = attribute_name_1.replace("[", "");
		attribute_name_2 = attribute_name.substr(attribute_name.indexOf("]"));
		attribute_name_2 = attribute_name_2.replace("] ", "");
		if (attribute_value_1.includes("::")) {
			standardfile_value_2 = attribute_value_1.substr(attribute_value_1.indexOf("::"));
			standardfile_value_2 = standardfile_value_2.replace(":: ", "");
			comparefile_value_2 = attribute_value_2.substr(attribute_value_2.indexOf("::"));
			comparefile_value_2 = comparefile_value_2.replace(":: ", "");
		}
		else {
			standardfile_value_2 = attribute_value_1.substr(attribute_value_1.indexOf(")"));
			standardfile_value_2 = standardfile_value_2.replace(") ", "");
			comparefile_value_2 = attribute_value_2.substr(attribute_value_2.indexOf(")"));
			comparefile_value_2 = comparefile_value_2.replace(") ", "");
		}
		for (var j = 0; j < attribute_name_1.length; j++) {
			data_block = attribute_name_1
			attribute_name_2 = attribute_name_2.replace("]", "");
			var attribute_name2 = attribute_name_2
		}
		for (var j = 0; j < attribute_value_1.length; j++) {
			standardfile_value = standardfile_value_2
			comparefile_value = comparefile_value_2;
		}
		summary1 = summary.substr(0, summary.indexOf("와"));
		summary1 = "Standard file = " + summary1;
		summary2 = summary.substr(0, summary.indexOf("는"));
		summary2 = summary2.substr(summary2.indexOf("와"));
		summary2 = summary2.replace("와", "Comparefile = ");
		summary3 = summary.substr(summary.indexOf("는"));
		summary3 = summary3.replace("는", "두 파일은");

		arr3[0] = ({ "비교 결과": summary1 });
		arr3[1] = ({ "비교 결과": summary2 });
		arr3[2] = ({ "비교 결과": summary3 });
		arr3[3] = ({});
		arr3[4] = ({ "비교 결과": a, "": b, " ": c, "  ": d });
		arr3[i + 5] = ({ "비교 결과": data_block, "": attribute_name2, " ": standardfile_value, "  ": comparefile_value_2 });
	}

	var ws = XLSX.utils.json_to_sheet(arr);
	var ws2 = XLSX.utils.json_to_sheet(arr2);
	var ws3 = XLSX.utils.json_to_sheet(arr3);

	ws['!cols'] = []
	ws['!cols'][0] = { width: 20 }
	ws['!cols'][1] = { width: 40 }
	ws2['!cols'] = []
	ws2['!cols'][0] = { width: 20 }
	ws2['!cols'][1] = { width: 40 }
	ws3['!cols'] = []
	ws3['!cols'][0] = { width: 50 }
	ws3['!cols'][1] = { width: 30 }
	ws3['!cols'][2] = { width: 35 }
	ws3['!cols'][3] = { width: 35 }
	wb.Sheets["Standard file"] = ws;
	wb.Sheets["Compare file"] = ws2;
	wb.Sheets["total_result"] = ws3;

	// 엑셀 파일 쓰기
	var wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

	var date = new Date();
	// 파일 다운로드
	saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), 'Result_"' + date.toLocaleString() + '"' + '.xlsx');
}


function s2ab(s) {
	var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
	var view = new Uint8Array(buf);  //create uint8array as viewer
	for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
	return buf;
}