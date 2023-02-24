//standardfile, 비교 결과 저장 함수
function exportReportToXML() {
	var comparemethod = document.querySelector(".compare_button.current").value;
	let element = document.createElement('a');
	//standardfile xml 결과 가져오기
	var standardfile = standardfilesData.metaData[0]
	if (comparemethod == "XML") {
		var xml = '<?xml version="1.0" encoding="UTF-8"?>';
		//standardfile 한 줄씩 자르고, root, MediaTrace, media 블록 추가해서 정리
		xml += "\n";
		xml += "<Root>"
		xml += "\n";
		xml += "<MediaTrace>"
		xml += "\n";
		xml += '<media>';
		xml += "\n";
		for (var k = 0; k < standardfile.length; k++) {
			xml += standardfile[k];
			xml += "\n"
		}
		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(xml));
		//audiofile.xml이 저장 파일 이름
		element.setAttribute('download', 'audiofile.xml');
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
		
		//비교 결과 부분
		var resultline = $(".compareresult");
		if (resultline.length != 0) {
			var xml3 = '<?xml version="1.0" encoding="UTF-8"?>';
			xml3 += "\n";
			xml3 += '<root>'
			xml3 += "\n";

			var cnt = 0;
			var arr = [];
			var arr2 = [];
			var arr3 = [];
			var arr4 = [];

			for (var i = 0; i < resultline.length; i++) {
				//비교 결과 innerHTML로 불러오기
				attribute = $(".compareresult")[i].innerHTML;
				//<br>기준으로 나누기
				attribute2 = attribute.substr(0, attribute.indexOf("<br>"));
				attribute_name = $(".compareresult")[i].firstChild.data;
				//불일치 원인 = attribute_name_1 ex)data_missing
				attribute_name_1 = attribute_name.substr(0, attribute_name.indexOf("]"));
				attribute_name_1 = attribute_name_1.replace("[", "").replace(" ", "");
				attribute_name_2 = attribute2.substr(attribute2.indexOf("]"));
				attribute_name_2 = attribute_name_2.replace("]", "")
				attribute_name_2 = attribute_name_2.replaceAll("<b>", "").replaceAll("</b>", "");
				
				//standardfile_value = 기준 파일 비교 결과
				var standardfile_value = $(".compareresult")[i].childNodes[2].data;
				//comparefile_value = 비교 파일 비교 결과
				var comparefile_value = $(".compareresult")[i].lastChild.data;
				//비교 결과에 ::가 있는 경우와 없는 경우로 나뉨
				if (standardfile_value.includes("::")) {
					//standardfile_name = 기준 파일 이름
					var standardfile_name = standardfile_value.substr(0, standardfile_value.indexOf("::"));
					standardfile_name = standardfile_name.replace("(", "").replace(" ", "").replace(")", "");
					var standardfile_value_2 = standardfile_value.substr(standardfile_value.indexOf("::"));
					standardfile_value_2 = standardfile_value_2.replace(":: ", "").replace(" ", "");
					//comparefile_name = 비교 파일 이름
					var comparefile_name = comparefile_value.substr(0, comparefile_value.indexOf("::"));
					comparefile_name = comparefile_name.replace("(", "").replace(" ", "").replace(")", "");
					var comparefile_value_2 = comparefile_value.substr(comparefile_value.indexOf("::"));
					comparefile_value_2 = comparefile_value_2.replace(":: ", "").replace(" ", "");
				}
				else {
					//standardfile_name = 기준 파일 이름
					var standardfile_name = standardfile_value.substr(0, standardfile_value.indexOf(")"));
					standardfile_name = standardfile_name.replace("(", "").replace(")", "");
					standardfile_value_2 = standardfile_value.substr(standardfile_value.indexOf(")"));
					standardfile_value_2 = standardfile_value_2.replace(")", "").replace(" ", "").replace("존재 O ", "존재O").replace("존재 X ", "존재X");
					//comparefile_name = 비교 파일 이름
					var comparefile_name = comparefile_value.substr(0, comparefile_value.indexOf(")"));
					comparefile_name = comparefile_name.replace("(", "").replace(")", "");
					comparefile_value_2 = comparefile_value.substr(comparefile_value.indexOf(")"));
					comparefile_value_2 = comparefile_value_2.replace(")", "").replace(" ", "").replace("존재 O", "존재O").replace("존재 X", "존재X")
				}
				//불일치 원인에 따라 배열에 나눠서 저장
				if (attribute_name_1 == "BLOCK_MISSING") {
					arr[i] = [attribute_name_1, attribute_name_2, standardfile_name, standardfile_value_2, comparefile_name, comparefile_value_2];
				}
				else if (attribute_name_1 == "BLOCK_LOCATION_MISMATCHING") {
					arr2[i - arr.length] = [attribute_name_1, attribute_name_2, standardfile_name, standardfile_value_2, comparefile_name, comparefile_value_2];
				}
				else if (attribute_name_1 == "DATA_MISSING") {
					arr3[i - (arr.length + arr2.length)] = [attribute_name_1, attribute_name_2, standardfile_name, standardfile_value_2, comparefile_name, comparefile_value_2];

				}
				else if (attribute_name_1 == "DATA_VALUE_MISMATCHING") {
					arr4[i - (arr.length + arr2.length + arr3.length)] = [attribute_name_1, attribute_name_2, standardfile_name, standardfile_value_2, comparefile_name, comparefile_value_2];
				}
			}
			//배열 길이로 불일치 원인 나눠서 xml 만들기
			//arr은 불일치 원인이 BLOCK_MISSING인 경우
			if (arr.length > 0) {
				var blockMissing = "";
				blockMissing = '   <BLOCK_MISSING>'
				blockMissing += ("\n");
				for (var i = 0; i < arr.length; i++) {
					//불록 이름
					blockMissing += '      <block name ="' + arr[i][1] + '">'
					blockMissing += ("\n");
					//standardfile 파일 명
					blockMissing += '         <standardfile name ="' + arr[i][2] + '">'
					//불일치 위치
					blockMissing += arr[i][3];
					blockMissing += '</standardfile>'
					blockMissing += ("\n");
					//comparefile 파일 명
					blockMissing += '         <comparefile name ="' + arr[i][4] + '">'
					//불일치 위치
					blockMissing += arr[i][5];
					blockMissing += '</comparefile>'
					blockMissing += ("\n");
					blockMissing += '      </block>'
					blockMissing += ("\n");
				}
				blockMissing += '   </BLOCK_MISSING>'
				blockMissing += ("\n");
				xml3 += blockMissing;
			}
			//arr2은 불일치 원인이 BLOCK_LOCATION_MISMATCHING인 경우
			if (arr2.length > 0) {
				var blockLocationMismatching = "";
				blockLocationMismatching += '   <BLOCK_LOCATION_MISMATCHING>'
				blockLocationMismatching += ("\n");
				for (var i = 0; i < arr2.length; i++) {
					//불록 이름
					blockLocationMismatching += '      <block name ="' + arr2[i][1] + '">'
					blockLocationMismatching += ("\n");
					//standardfile 파일 명
					blockLocationMismatching += '         <standardfile name ="' + arr2[i][2] + '">'
					//불일치 위치
					blockLocationMismatching += arr2[i][3];
					blockLocationMismatching += '</standardfile>'
					blockLocationMismatching += ("\n");
					//comparefile 파일 명
					blockLocationMismatching += '         <comparefile name ="' + arr2[i][4] + '">'
					//불일치 위치
					blockLocationMismatching += arr2[i][5];
					blockLocationMismatching += '</comparefile>'
					blockLocationMismatching += ("\n");
					blockLocationMismatching += '      </block>'
					blockLocationMismatching += ("\n");
				}
				blockLocationMismatching += '   </BLOCK_LOCATION_MISMATCHING>'
				blockLocationMismatching += ("\n");
				xml3 += blockLocationMismatching;
			}
			//arr2은 불일치 원인이 DATA_MISSING인 경우
			if (arr3.length > 0) {
				var dataMissing = "";
				dataMissing += '   <DATA_MISSING>'
				dataMissing += ("\n");
				for (var i = 0; i < arr3.length; i++) {
					//불록 이름
					dataMissing += '      <block name ="' + arr3[i][1] + '">'
					dataMissing += ("\n");
					//standardfile 파일 명
					dataMissing += '         <standardfile name ="' + arr3[i][2] + '">'
					//불일치 위치
					dataMissing += arr3[i][3];
					dataMissing += '</standardfile>'
					dataMissing += ("\n");
					//comparefile 파일 명
					dataMissing += '         <comparefile name ="' + arr3[i][4] + '">'
					//불일치 위치
					dataMissing += arr3[i][5];
					dataMissing += '</comparefile>'
					dataMissing += ("\n");
					dataMissing += '      </block>'
					dataMissing += ("\n");
				}
				dataMissing += '   </DATA_MISSING>'
				dataMissing += ("\n");
				xml3 += dataMissing;
			}
			if (arr4.length > 0) {
				var dataValueMismatching = "";
				//arr2은 불일치 원인이 DATA_VALUE_MISMATCHING인 경우
			if (arr3.length > 0) {
				dataValueMismatching += '   <DATA_VALUE_MISMATCHING>'
				dataValueMismatching += ("\n");
				for (var i = 0; i < arr4.length; i++) {
					//불록 이름
					dataValueMismatching += '      <block name ="' + arr4[i][1] + '">'
					dataValueMismatching += ("\n");
					//standardfile 파일 명
					dataValueMismatching += '         <standardfile name ="' + arr4[i][2] + '">'
					//불일치 위치
					dataValueMismatching += arr4[i][3];
					dataValueMismatching += '</standardfile>'
					dataValueMismatching += ("\n");
					//comparefile 파일 명
					dataValueMismatching += '         <comparefile name ="' + arr4[i][4] + '">'
					//불일치 위치
					dataValueMismatching += arr4[i][5];
					dataValueMismatching += '</comparefile>'
					dataValueMismatching += ("\n");
					dataValueMismatching += '      </block>'
					dataValueMismatching += ("\n");
				}
				dataValueMismatching += '   </DATA_VALUE_MISMATCHING>'
				dataValueMismatching += ("\n");
				xml3 += dataValueMismatching;
			}
			xml3 += '</root>'
			element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(xml3));
			//totla_result.xml은 비교 결과 파일 이름
			element.setAttribute('download', 'total_result.xml');
			element.style.display = 'none';
			document.body.appendChild(element);
			element.click();
			document.body.removeChild(element);
		}

	}
	//xml이 아닌 경우 저장 불가, 알림창 띄우기
	else if (comparemethod == "TEXT") {
		alert("XML 포맷 저장은 TEXT 형식에서 지원하지 않습니다.")
	}
	else if (comparemethod == "TREE") {
		alert("XML 포맷 저장은 TREE 형식에서 지원하지 않습니다.")
	}
}



//comparefile xml 내용 저장 부분
function exportReportXMlCompare(tab_id, standardfile, comparefile, comparefile_name) {
	let xml2 = "";
	//value 값 사용
	var comparemethod = document.querySelector(".compare_button.current").value;
	let element = document.createElement('a');
	//XML인 경우
	if (comparemethod == "XML") {
		xml2 = '<?xml version="1.0" encoding="UTF-8"?>';
		//value 한 줄씩 잘르고 root, mediaTracem media 블록 추가
		xml2 += "\n";
		xml2 += "<Root>"
		xml2 += "\n";
		xml2 += "<MediaTrace>"
		xml2 += "\n";
		xml2 += '<media>';
		xml2 += "\n";
		xml2 += comparefile;

		element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(xml2));
		//compareAudiofile.xml이 저장될 파일 이름
		element.setAttribute('download', 'compareAudiofile.xml');
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
	}

}