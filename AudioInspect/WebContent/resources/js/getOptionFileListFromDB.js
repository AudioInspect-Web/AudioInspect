var initQueryForOriginal = "select sf.file_name, sf.recording_mode, sf.recording_quality, sf.file_type, sd.smart_device_model_name, sd.smart_device_model_number, osd.os_name, osd.os_version\n"
	+ "from original_speech_file sf, recording_editing_device red, smart_device sd, os_for_smart_devices osd\n"
	+ "where sf.recording_device_id=red.recording_editing_device_id and red.smart_device_id = sd.smart_device_id and red.os_id = osd.os_id"
var initQueryForEdited = "select esf.file_name, esf.editing_app_name, esf.recording_mode, esf.recording_quality, esf.file_type, sd.smart_device_model_name, sd.smart_device_model_number, osd.os_name, osd.os_version\n"
	+ "from edited_speech_file esf, recording_editing_device red, smart_device sd, os_for_smart_devices osd\n"
	+ "where esf.editing_device_id=red.recording_editing_device_id and red.smart_device_id = sd.smart_device_id and red.os_id = osd.os_id"
function manuclick() {
	var resultarr = [];
	var resultarr_2 = [];
	$(".result_list").empty();
	// 선택된 목록 가져오기
	const query = 'input[type="checkbox"]:checked';
	const selectedEls = document.querySelectorAll(query);
	// 선택된 목록에서 value 찾기
	let result = "";
	let result2 = '';
	selectedEls.forEach((el) => {
		result = el.name + '';
		resultarr.push(result);
		result2 = el.className + '';
		resultarr_2.push(result2)
	});
	for (var i = 0; i < resultarr.length; i++) {
		if (resultarr[i] == "manuAll") {
			getFileListFromDB(initQueryForOriginal)
			getFileListFromDB(initQueryForEdited)
			$("input[id = 'nonck']").attr("checked", false);
		} else {
			if (resultarr[i] == "manuAll") {
				resultarr.splice(0)
			}
			var selectmanufacturer = initQueryForOriginal + " and sf.recording_app_manufacturer='" + resultarr[i] + "'";
			var selectmanufacturer2 = initQueryForEdited + " and esf.editing_app_manufacturer='" + resultarr[i] + "'";
			getFileListFromDB(selectmanufacturer)
			getFileListFromDB(selectmanufacturer2)
			$("input[name = 'manuAll']").attr("checked", false);
		}
	}
	console.log(resultarr)
}

function editclick() {
	var resultarr2 = [];
	$("input[name='editAll2']").attr("checked", false);
	$("input[id = 'sweditnonck']").attr("checked", false);
	$(".result_list").empty();
	const query = 'input[class="editlist"]:checked';
	const selectedEls =
		document.querySelectorAll(query);
	let result = '';
	selectedEls.forEach((el) => {
		result = el.name + '';
		resultarr2.push(result);
	});
	for (var i = 0; i < resultarr2.length; i++) {
		if (resultarr2[i] == "editAll") {
			$("input[id = 'editnonck']").attr("checked", false);
			getFileListFromDB(initQueryForOriginal)
			getFileListFromDB(initQueryForEdited)
		} if (resultarr2[i] == "original") {
			$("input[name='editAll']").attr("checked", false);
			getFileListFromDB(initQueryForOriginal)
		} if (resultarr2[i] == "edit") {
			$("input[name='editAll']").attr("checked", false);
			getFileListFromDB(initQueryForEdited)
		}
		else {
			$(".result_list").empty();
			//$("input[id = 'editnonck']").attr("checked", false);
			//$("input[name='editAll']").attr("checked", false);
			var selectEdit = initQueryForEdited + " and esf.editing_app_name='" + resultarr2[i] + "'";
			getFileListFromDB(selectEdit)
		}
	}
}
function editclick2() {
	$("input[name='editAll']").attr("checked", false);
	$("input[id = 'editnonck']").attr("checked", false);
	$(".result_list").empty();
	const query = 'input[class="editlist2"]:checked';
	const selectedEls =
		document.querySelectorAll(query);
	let result = '';
	var resultarr3 = [];
	selectedEls.forEach((el) => {
		result = el.name + '';
		resultarr3.push(result);
	});
	for (var i = 0; i < resultarr3.length; i++) {
		if (resultarr3[i] == "editAll2") {
			$("input[id = 'sweditnonck']").attr("checked", false);
			getFileListFromDB(initQueryForEdited)
		}
		else {
			$(".result_list").empty();
			$("input[name='editAll2']").attr("checked", false);
			var selectEdit = initQueryForEdited + " and esf.editing_app_name='" + resultarr3[i] + "'";
			getFileListFromDB(selectEdit)
		}
	}
}
function OSclick() {
	$(".result_list").empty();
	const query = 'input[class="OSlist"]:checked';
	const selectedEls =
		document.querySelectorAll(query);
	let result = '';
	var resultarr4 = [];
	selectedEls.forEach((el) => {
		result = el.name + '';
		resultarr4.push(result);
	});
	for (var i = 0; i < resultarr4.length; i++) {
		if (resultarr4[i] == "OSAll") {
			$("input[id='OSnonck']").attr("checked", false);
			getFileListFromDB(initQueryForOriginal)
			getFileListFromDB(initQueryForEdited)
		} else {
			$("input[name='OSAll']").attr("checked", false);
			var selectOS = initQueryForEdited + " and osd.os_name='" + resultarr4[i] + "'";
			var selectOS2 = initQueryForEdited + " and osd.os_name='" + resultarr4[i] + "'";
			getFileListFromDB(selectOS)
			getFileListFromDB(selectOS2)
		}
	}
}
function searchclick() {
	$(".result_list").empty();
	const query = 'input[class="searchlist"]:checked';
	const selectedEls = document.querySelectorAll(query);
	let result = '';
	var resultarr5 = [];
	selectedEls.forEach((el) => {
		result = el.name + '';
		resultarr5.push(result);
	});
	for (var i = 0; i < resultarr.length; i++) {
		if (resultarr5[i] == "searchAll") {
			$("input[id='searchnonck']").attr("checked", false);
			getFileListFromDB(initQueryForOriginal)
			getFileListFromDB(initQueryForEdited)
		}
		if (resultarr5[i] == "original") {
			$("input[name='searchAll']").attr("checked", false);
			getFileListFromDB(initQueryForOriginal)
		}
		if (resultarr5[i] == "edit") {
			$("input[name='searchAll']").attr("checked", false);
			getFileListFromDB(initQueryForEdited)
		}
	}
}
function textclick() {
	const query = 'input[class="text_search"]:checked';
	const selectedEls = document.querySelectorAll(query);
	let result = '';
	var resultarr6 = [];
	selectedEls.forEach((el) => {
		result = el.name + '';
		resultarr6.push(result);
	});
	for (var i = 0; i < resultarr6.length; i++) {
		if (resultarr6[i] == "file_name") {
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
		if (resultarr6[i] == "record_device") {
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
		if (resultarr6[i] == "record_device_num") {
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

}
function recordclick() {
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
}
function deleteclick() {
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
		if (checkbox4[i].name == "file_name") {
			$("input[name='file_name']").attr("checked", true);
		}
		else {
			checkbox4[i].checked = false;
		}
	}
	getFileListFromDB(initQueryForOriginal)
	getFileListFromDB(initQueryForEdited)
}