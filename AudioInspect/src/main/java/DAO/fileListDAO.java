package DAO;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;

import Util.DB;

public class fileListDAO {
	public static ArrayList<String> getFileList(String query) {
		ResultSet rs = null;
		try {
			PreparedStatement pstmt = DB.getConnection().prepareStatement(query);
			rs = pstmt.executeQuery();
		} catch (SQLException e1) {
			e1.printStackTrace();
		}
		LinkedHashMap<String, ArrayList<String>> exportData = new LinkedHashMap<String, ArrayList<String>>();
		if (rs != null) {
			try {
				while (rs.next()) {
					String file_name = '"' + rs.getString("file_name") + '"';
					String recording_mode = '"' + rs.getString("recording_mode") + " / " + rs.getString("recording_quality") + '"';
					String file_type = '"' + rs.getString("file_type") + '"';
					String smart_device_model_name = '"' + rs.getString("smart_device_model_name") + '"';
					String smart_device_model_number = '"' + rs.getString("smart_device_model_number") + '"';
					String os_name = '"' + rs.getString("os_name") + " " + rs.getString("os_version") + '"';
					String editing_app_name;
					try {
						editing_app_name = '"' + rs.getString("editing_app_name") + '"';
					}catch(SQLException e) {
						editing_app_name= '"' + "원본" + '"';
					}

					ArrayList<String> values = new ArrayList<String>();
					// Modal창의 검색 결과 테이블에서 보여질 속성 순서대로 담는다.
					values.add(file_type);
					values.add(smart_device_model_name);
					values.add(smart_device_model_number);
					values.add(os_name);
					values.add(recording_mode);
					values.add(editing_app_name);
					exportData.put(file_name, values);
				}
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		ArrayList<String> exportData2Array = new ArrayList<String>();		
		Iterator<String> it = exportData.keySet().iterator();
		while(it.hasNext()){
			String key = (String) it.next();
			exportData2Array.add(key+" : "+exportData.get(key));
		}
		return exportData2Array;
	}
}