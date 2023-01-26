function modal_view() {
	if (document.querySelector("#selectStandardFileLocation")) {
		var selectStandardFileLocation = document.querySelector("#selectStandardFileLocation")
		document.body.removeChild(selectStandardFileLocation)
	} else if (document.querySelector("#selectCompareFileLocation")) {
		var selectCompareFileLocation = document.querySelector("#selectCompareFileLocation")
		document.body.removeChild(selectCompareFileLocation)
	}
	const DB_html =
		`<script src="https://kit.fontawesome.com/a4a9a94dd2.js" crossorigin="anonymous"></script>
      	 <div id="selectFileDatabase">
        	<div id="selectFileDatabaseContent">
	            <div>
	               <button class="btn btn-danger" id="quit">X</button>
	               <button class = "selectdelete">선택 초기화</button>
	            </div>
	            <h4 class="top">
	               AudioInspect DB 선택
	            </h4>
	            <div class="menu-div">
	               <ul class="menu-style">
	                  <li class="menu"><i class="fa-duotone fa-play"></i><a>디바이스 제조사 설정</a>
	                     <ul class="hide">
	                        <li class = "select-text">검색할 제조사를 선택해주세요.</li>
	                        <li class = "select-list"><input type="checkbox" class ="manufacturerlist" name = "manuAll">전체보기</li>
	                        <li class = "select-list"><input type="checkbox" class ="manufacturerlist" name = "Samsung" id = "nonck">Samsung</li>
	                        <li class = "select-list"><input type="checkbox" class ="manufacturerlist" name = "LG" id = "nonck">LG</li>
	                        <li class = "select-list"><input type="checkbox" class ="manufacturerlist" name = "Apple" id = "nonck">Apple</li>
	                        <li class = "select-list"><input type="checkbox" class ="manufacturerlist" name = "Xiaomi" id = "nonck">샤오미</li>
	                        <li class = "select-list"><input type="checkbox" class ="manufacturerlist" name = "Huawei" id = "nonck">화웨이</li>
	                     </ul>
	                  </li>
	                  <li class="menu"><i class="fa-duotone fa-play"></i><a>원본/편집 설정</a>
	                     <ul class="hide">
	                        <li class = "select-text">표시할 파일의 원본/편집 여부를 선택해주세요.</li>
	                        <li class = "select-list"><input type="checkbox" class ="editlist" name = "editAll">전체 파일 보기</li>
	                        <li class = "select-list"><input type="checkbox" class ="editlist" name = "original" id = 'editnonck'>원본 파일만 보기</li>
	                        <li class = "select-list"><input type="checkbox" class ="editlist" name = "edit" id = 'editnonck'>편집 파일만 보기</li>
	                        <hr>
	                        <li class = "select-text">편집 소프트웨어 설정</li>
	                        <li class = "select-list"><input type="checkbox" class ="editlist" name = "editAll">전체 보기</li>
	                        <li class = "select-list"><input type="checkbox" class ="editlist" name = "BuiltinSW" id = 'sweditnonck'>자체 탑제 소프트웨어 편집 본</li>
	                        <li class = "select-text">PC 기반 소프트웨어</li>
	                        <li class = "select-list"><input type="checkbox" class ="editlist" name = "Gold wave" id = 'sweditnonck'>Gold wave</li>
	                        <li class = "select-list"><input type="checkbox" class ="editlist" name = "Wave pad" id = 'sweditnonck'>Wave pad</li>
	                        <li class = "select-list"><input type="checkbox" class ="editlist" name = "Audacity" id = 'sweditnonck'>Audacity</li>
	                        <li class = "select-text">안드로이드 기반 소프트웨어</li>
	                        <li class = "select-list"><input type="checkbox" class ="editlist" name = "302 lock screen" id = 'sweditnonck'>302 lock screen</li>
	                        <li class = "select-list"><input type="checkbox" class ="editlist" name = "inshot inc." id = 'sweditnonck'>inshot inc.</li>
	                        <li class = "select-list"><input type="checkbox" class ="editlist" name = "Recorder & smart apps" id = 'sweditnonck'>Recorder & smart apps</li>
	                        <li class = "select-text">iOS 기반 소프트웨어</li>
	                        <li class = "select-list"><input type="checkbox" class ="editlist" name = "Garageband" id = 'sweditnonck'>Garageband</li>
	                        <li class = "select-list"><input type="checkbox" class ="editlist" name = "Lexis Audio Editor" id = 'sweditnonck'>Lexis Audio Editor</li>
	                        <li class = "select-list"><input type="checkbox" class ="editlist" name = "Wave pad mobile" id = 'sweditnonck'>Wave pad mobile</li>
	                     </ul>
	                  </li>
	                  <li class="menu"><i class="fa-duotone fa-play"></i><a>검색 키워드 설정</a>
	                     <ul class="hide">
	                        <li class = "select-text">검색 키워드와 검색 옵션을 선택해주세요.</li>
	                        <hr>
	                        <li class = "select-text">검색 키워드</li>
	                        <li class = "select-list"><input type="text" class="search_text" placeholder="검색 키워드를 입력해주세요."></li>
	                        <li class = "select-list"><input type="button" class = "search_button" value="검색 키워드 적용"></li>
	                        <hr>
	                        <li class = "select-text">검색 옵션</li>
	                        <li class = "select-list"><input type="checkbox" class ="text_search" name = "file_name" checked = "on">파일 이름으로 검색</li>
	                        <li class = "select-list"><input type="checkbox" class ="text_search" name = "record_device">녹음 모델명으로 검색</li>
	                        <li class = "select-list"><input type="checkbox" class ="text_search" name = "record_device_num">녹음 모델 넘버로 검색</li>
	                     </ul>
	                  </li>
	                  <li class="menu"><i class="fa-duotone fa-play"></i><a>OS 설정</a>
	                     <ul class="hide">
	                        <li class = "select-text">OS 종류</li>
	                        <li class = "select-text">디바이스 제조사 선택 시 OS 종류는 자동으로 선택됩니다.</li>
	                        <li class = "select-list"><input type="checkbox" class ="OSlist" name = "OSAll">전체 보기</li>
	                        <li class = "select-list"><input type="checkbox" class ="OSlist" name = "Android" id = "OSnonck">Android</li>
	                        <li class = "select-list"><input type="checkbox" class ="OSlist" name = "iOS" id = "OSnonck">iOS</li>
	                        <hr>
	                        <li class = "select-text">OS 버전</li>
	                        <li class = "select-text">현재 검색 결과에 나타나는 버전만 출력됩니다.</li>
	                        <li class = "select-list"><input type="checkbox" class ="OSlist" name = "OSAll">전체 보기</li>
	                        <li class = "select-list"><input type="checkbox">OS 버전 선택</li>
	                        <li class = "select-list"><input type="text" class="search" placeholder="직접 입력"></li>
	                     </ul>
	                  </li>
	                  <li class="menu"><i class="fa-duotone fa-play"></i><a>녹음 모드 선택</a>
	                     <ul class="hide">
	                        <li class = "select-list"><input type="checkbox" class = "recordlist" name = "recordAll">전체 보기</li>
	                        <hr>
	                        <li class = "select-list">녹음 모드</li>
	                        <li class = "select-list">녹음 퀄리티</li>
	                     </ul>
	                 </li>
	               </ul>
	            </div>
	            <hr>
                <span>검색 결과</span>
                <div class="result-div">
	               <table class = "result-style">
	                  <thead>
		                  <th class="result-style_th" style="width: 4%; background-color: lightgray">No.</th>
		                  <th class="result-style_th" style="width: 24%; background-color: lightgray">파일명</th>
		                  <th class="result-style_th" style="width: 9%; background-color: lightgray">확장자</th>
		                  <th class="result-style_th" style="width: 12%; background-color: lightgray">모델명</th>
		                  <th class="result-style_th" style="width: 12%; background-color: lightgray">모델 넘버</th>
		                  <th class="result-style_th" style="width: 12%; background-color: lightgray">os 정보</th>
		                  <th class="result-style_th" style="width: 12%; background-color: lightgray">녹음 모드</th>
		                  <th class="result-style_th" style="width: 13%; background-color: lightgray">편집 정보</th>
		              </thead>
		              <tbody class = "result_list">
		              </tbody>
	               </table>
	            </div>
	            <div>
	            	<button>선택 완료</button>
	            </div>	            
         	</div>
      </div>`
	const dom = new DOMParser().parseFromString(DB_html, 'text/html')
	const selectFileDatabase = dom.querySelector("#selectFileDatabase")
	document.body.appendChild(selectFileDatabase)
	//X 버튼 클릭 시, Modal Window 사라짐.
	selectFileDatabase.querySelector("#quit").addEventListener("click", () => {
		document.body.removeChild(selectFileDatabase)
	})
	//Modal Window 외부 클릭 시, Modal Window 사라짐.
	window.addEventListener('click', (e) => {
		e.target === selectFileDatabase ? document.body.removeChild(selectFileDatabase) : false
	})

	var initQueryForOriginal = "select sf.file_name, sf.recording_mode, sf.recording_quality, sf.file_type, sd.smart_device_model_name, sd.smart_device_model_number, osd.os_name, osd.os_version\n"
		+ "from original_speech_file sf, recording_editing_device red, smart_device sd, os_for_smart_devices osd\n"
		+ "where sf.recording_device_id=red.recording_editing_device_id and red.smart_device_id = sd.smart_device_id and red.os_id = osd.os_id"
	var initQueryForEdited = "select esf.file_name, esf.editing_app_name, esf.recording_mode, esf.recording_quality, esf.file_type, sd.smart_device_model_name, sd.smart_device_model_number, osd.os_name, osd.os_version\n"
		+ "from edited_speech_file esf, recording_editing_device red, smart_device sd, os_for_smart_devices osd\n"
		+ "where esf.editing_device_id=red.recording_editing_device_id and red.smart_device_id = sd.smart_device_id and red.os_id = osd.os_id"

	// html dom 이 다 로딩된 후 실행된다.
	$(document).ready(function() {
		getFileListFromDB(initQueryForOriginal)
		getFileListFromDB(initQueryForEdited)
		//체크박스 확인
		$(".manufacturerlist").click(function() {
			$(".result_list").empty();
			// 선택된 목록 가져오기
			const query = 'input[class="manufacturerlist"]:checked';
			const selectedEls = document.querySelectorAll(query);
			// 선택된 목록에서 value 찾기
			let result = "";
			var resultarr = [];
			selectedEls.forEach((el) => {
				result = el.name + '';
				resultarr.push(result);
			});
			for (var i = 0; i < resultarr.length; i++) {
				if (resultarr[i] == "manuAll") {
					$("input[id = 'nonck']").attr("checked", false);
					getFileListFromDB(initQueryForOriginal)
					getFileListFromDB(initQueryForEdited)
				} else {
					$("input[name = 'manuAll']").attr("checked", false);
					var selectmanufacturer = initQueryForOriginal + " and sf.recording_app_manufacturer='" + resultarr[i] + "'";
					var selectmanufacturer2 = initQueryForEdited + " and esf.editing_app_manufacturer='" + resultarr[i] + "'";
					getFileListFromDB(selectmanufacturer)
					getFileListFromDB(selectmanufacturer2)
				}
			}
		})
		$(".editlist").click(function() {
			$(".result_list").empty();
			const query = 'input[class="editlist"]:checked';
			const selectedEls =
				document.querySelectorAll(query);
			let result = '';
			var resultarr = [];
			selectedEls.forEach((el) => {
				result = el.name + '';
				resultarr.push(result);
			});
			for (var i = 0; i < resultarr.length; i++) {
				if (resultarr[i] == "editAll") {
					$("input[id = 'editnonck']").attr("checked", false);
					$("input[id = 'sweditnonck']").attr("checked", false);
					getFileListFromDB(initQueryForOriginal)
					getFileListFromDB(initQueryForEdited)
				} if (resultarr[i] == "original") {
					$("input[name='editAll']").attr("checked", false);
					getFileListFromDB(initQueryForOriginal)
				} if (resultarr[i] == "edit") {
					$("input[name='editAll']").attr("checked", false);
					getFileListFromDB(initQueryForEdited)
				}
				else {
					$("input[name='editAll']").attr("checked", false);
					var selectEdit = initQueryForEdited + " and esf.editing_app_name='" + resultarr[i] + "'";
					getFileListFromDB(selectEdit)
				}
			}
		})
		$(".OSlist").click(function() {
			$(".result_list").empty();
			const query = 'input[class="OSlist"]:checked';
			const selectedEls =
				document.querySelectorAll(query);
			let result = '';
			var resultarr = [];
			selectedEls.forEach((el) => {
				result = el.name + '';
				resultarr.push(result);
			});
			for (var i = 0; i < resultarr.length; i++) {
				if (resultarr[i] == "OSAll") {
					$("input[id='OSnonck']").attr("checked", false);
					getFileListFromDB(initQueryForOriginal)
					getFileListFromDB(initQueryForEdited)
				} else {
					$("input[name='OSAll']").attr("checked", false);
					var selectOS = initQueryForEdited + " and osd.os_name='" + resultarr[i] + "'";
					var selectOS2 = initQueryForEdited + " and osd.os_name='" + resultarr[i] + "'";
					getFileListFromDB(selectOS)
					getFileListFromDB(selectOS2)
				}
			}
		})
		$(".searchlist").click(function() {
			$(".result_list").empty();
			const query = 'input[class="searchlist"]:checked';
			const selectedEls = document.querySelectorAll(query);
			let result = '';
			var resultarr = [];
			selectedEls.forEach((el) => {
				result = el.name + '';
				resultarr.push(result);
			});
			for (var i = 0; i < resultarr.length; i++) {
				if (resultarr[i] == "searchAll") {
					$("input[id='searchnonck']").attr("checked", false);
					getFileListFromDB(initQueryForOriginal)
					getFileListFromDB(initQueryForEdited)
				}
				if (resultarr[i] == "original") {
					$("input[name='searchAll']").attr("checked", false);
					getFileListFromDB(initQueryForOriginal)
				}
				if (resultarr[i] == "edit") {
					$("input[name='searchAll']").attr("checked", false);
					getFileListFromDB(initQueryForEdited)
				}
			}
		})
		$(".text_search").click(function() {
			const query = 'input[class="text_search"]:checked';
			const selectedEls = document.querySelectorAll(query);
			let result = '';
			var resultarr = [];
			selectedEls.forEach((el) => {
				result = el.name + '';
				resultarr.push(result);
			});
			for (var i = 0; i < resultarr.length; i++) {
				if (resultarr[i] == "file_name") {
					$("input[name='record_device']").attr("checked", false);
					$("input[name='record_device_num']").attr("checked", false);
					$(".search_button").click(function() {
						$(".result_list").empty();
						var search = $(".search_text").val();
						var search_text = initQueryForOriginal + " and sf.file_name like'%" + search + "%'";
						var search_text2 = initQueryForEdited + " and esf.file_name like'%" + search + "%'";
						getFileListFromDB(search_text)
						getFileListFromDB(search_text2)

					})
				}
				if (resultarr[i] == "record_device") {
					$("input[name='file_name']").attr("checked", false);
					$("input[name='record_device_num']").attr("checked", false);
					$(".search_button").click(function() {
						$(".result_list").empty();
						var search = $(".search_text").val();
						var search_text = initQueryForOriginal + " and sd.smart_device_model_name like'%" + search + "%'";
						var search_text2 = initQueryForEdited + " and sd.smart_device_model_name like'%" + search + "%'";
						getFileListFromDB(search_text)
						getFileListFromDB(search_text2)

					})
				}
				if (resultarr[i] == "record_device_num") {
					$("input[name='file_name']").attr("checked", false);
					$("input[name='record_device']").attr("checked", false);
					$(".search_button").click(function() {
						$(".result_list").empty();
						var search = $(".search_text").val();
						var search_text = initQueryForOriginal + " and sd.smart_device_model_number like'%" + search + "%'";
						var search_text2 = initQueryForEdited + " and sd.smart_device_model_number like'%" + search + "%'";
						getFileListFromDB(search_text)
						getFileListFromDB(search_text2)

					})
				}
			}

		})
		$(".recordlist").click(function() {
			$(".result_list").empty();
			const query = 'input[class="recordlist"]:checked';
			const selectedEls = document.querySelectorAll(query);
			let result = '';
			selectedEls.forEach((el) => {
				result = el.name + '';
			});
			if (result == "recordAll") {
				getFileListFromDB(initQueryForOriginal)
				getFileListFromDB(initQueryForEdited)
			}
		})
		//체크박스 체크 초기화
		$(".selectdelete").click(function() {
			$(".result_list").empty();
			// 초기화할 checkbox 선택
			const checkbox = $(".manufacturerlist");
			const checkbox2 = $(".OSlist");
			const checkbox3 = $(".editlist");
			const checkbox4 = $(".text_search")
			// 체크박스 목록을 순회하며 checked 값을 초기화
			for (var i = 0; i < checkbox.length; i++) {
				checkbox[i].checked = false;
			}
			for (var i = 0; i < checkbox2.length; i++) {
				checkbox2[i].checked = false;
			}
			for (var i = 0; i < checkbox3.length; i++) {
				checkbox3[i].checked = false;
			}
			for (var i = 0; i < checkbox4.length; i++) {
				checkbox4[i].checked = false;
			}
			getFileListFromDB(initQueryForOriginal)
			getFileListFromDB(initQueryForEdited)
		});
		// menu 클래스 바로 하위에 있는 a 태그를 클릭했을때
		$(".menu>a").click(function() {
			if ($(".hide").is(":visible")) {
				$(".hide").slideUp()
				var removeIcon = $(".menu>i")
				removeIcon.removeClass("fa-solid fa-chevron-down").addClass("fa-duotone fa-play")
			}
			var submenu = $(this).next("ul")
			var clickIcon = $(this).prev("i")
			if (submenu.is(":visible")) {
				submenu.slideUp()
				clickIcon.removeClass("fa-solid fa-chevron-down").addClass("fa-duotone fa-play")
			} else {
				submenu.slideDown()
				clickIcon.removeClass("fa-duotone fa-play").addClass("fa-solid fa-chevron-down")
			}
		});
		$(".result>a").click(function() {
			var submenu = $(this).next("ul")
			if (submenu.is(":visible")) {
				submenu.slideUp()
			} else {
				submenu.slideDown()
			}
		})
	})


}