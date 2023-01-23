<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="java.sql.*"%>    
<%!
	Connection conn = null;
	Statement stmt = null;
	ResultSet rs = null;
	String url = "jdbc:mysql://localhost:3306/audioinspect?serverTimezone=UTC";
	String user = "root";
	String password = "1234";
	String initQueryForOriginal = "select sf.file_name, sf.recording_mode, sf.recording_quality, sf.file_type, sd.smart_device_model_name, sd.smart_device_model_number, osd.os_name, osd.os_version\n"
			+ "from original_speech_file sf, recording_editing_device red, smart_device sd, os_for_smart_devices osd\n"
			+ "where sf.recording_device_id=red.recording_editing_device_id and red.smart_device_id = sd.smart_device_id and red.os_id = osd.os_id;";
%>
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="resources/css/style.css">
<meta charset="UTF-8">
<title>fileListFromDB</title>
</head>
<body>
	<table class="result-style">
		<thead>
			<tr>
				<th class="result-style_th"	style="width: 4%; background-color: lightgray">No.</th>
				<th class="result-style_th"	style="width: 24%; background-color: lightgray">파일명</th>
				<th class="result-style_th"	style="width: 9%; background-color: lightgray">확장자</th>
				<th class="result-style_th"	style="width: 12%; background-color: lightgray">모델명</th>
				<th class="result-style_th"	style="width: 12%; background-color: lightgray">모델 넘버</th>
				<th class="result-style_th"	style="width: 12%; background-color: lightgray">os 정보</th>
				<th class="result-style_th"	style="width: 12%; background-color: lightgray">녹음 모드</th>
				<th class="result-style_th"	style="width: 13%; background-color: lightgray">편집 정보</th>
			</tr>
		</thead>
		<tbody>
		</tbody>
		<%
		try{
			Class.forName("com.mysql.cj.jdbc.Driver");
			conn = DriverManager.getConnection(url, user, password);
			stmt = conn.createStatement();
			rs = stmt.executeQuery(initQueryForOriginal);
			while(rs.next()) {
				int index = 1;
		%>
		<tr>
			<td>index</td>
			<td><%= rs.getString("file_name") %></td>
			<td><%= rs.getString("file_type") %></td>
			<td><%= rs.getString("smart_device_model_name") %></td>
			<td><%= rs.getString("smart_device_model_number") %></td>
			<td><%= rs.getString("os_name") + " " + rs.getString("os_version") %></td>
			<td><%= rs.getString("recording_mode") + " / " + rs.getString("recording_quality") %></td>
			<td>원본</td>
		</tr>
		<%					
			}
		} catch(SQLException se) {
			se.printStackTrace();
		} finally {
			try{
				if(rs != null) rs.close();
				if(stmt != null) rs.close();
				if(conn != null) rs.close();
			}catch(SQLException se){
				se.printStackTrace();
			}
		}
		%>
	</table>
</body>
</html>