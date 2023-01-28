package DAO;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import Model.MetaDepthID;
import Util.DB;

public class MetaDataDAO {
	public static void getMetaDataID(String fileId, String fileType) {
		String query;
		if (fileId.contains("원본")) {
			query = "select sf.meta_data_id\n" 
					+ "from original_speech_file sf\n" + "where sf.original_speech_file_id ="
					+ fileId.replaceAll("[^0-9]", "");
		} else {
			query = "select esf.meta_data_id\n"
					+ "from edited_speech_file esf\n"
					+ "where esf.edited_speech_file_id =" + fileId;
		}
		ResultSet rs = null;
		try {
			PreparedStatement pstmt = DB.getConnection().prepareStatement(query);
			rs = pstmt.executeQuery();
		} catch (SQLException e1) {
			e1.printStackTrace();
		}
		Integer meta_data_id = null;
		if (rs != null) {
			try {
				while (rs.next()) {
					meta_data_id = rs.getInt("meta_data_id");
				}
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		fileType = fileType.toLowerCase();
		getMetaData(meta_data_id, fileType);
	}

	private static void getMetaData(Integer meta_data_id, String fileType) {
		Integer depth = getMetaDataDepth(fileType);
		MetaDepthID meta_depth_id = new MetaDepthID();
				
		for (int i = 1; i <= depth; i++) {
			String query = "select *\n"
						+ "from " + fileType + "_meta_depth" + i + "\n"
						+ meta_depth_id.getQueryByMetaDepth(fileType, i, meta_data_id);
			System.out.println(query);
			ResultSet rs = null;
			try {
				PreparedStatement pstmt = DB.getConnection().prepareStatement(query);
				rs = pstmt.executeQuery();
			} catch (SQLException e1) {
				e1.printStackTrace();
			}
			if (rs != null) {
				try {
					while (rs.next()) {
						String metaDepthIdHistory = "";
						for(int j = 1; j <= i ; j++) {
							metaDepthIdHistory += Integer.toString(rs.getInt(fileType + "_meta_depth" + j + "_id")) + "/";
						}
						meta_depth_id.setMetaDepthId(i, metaDepthIdHistory);
						//System.out.println(rs.getString("meta_name") + rs.getInt("meta_size") + rs.getString("meta_value") + rs.getString("info1") + rs.getString("info2") + rs.getString("info3") + rs.getString("info4") + rs.getInt("offset"));
					}
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
		meta_depth_id.printMetaDepthId();
	}

	private static Integer getMetaDataDepth(String fileType) {
		Integer depth = null;
		switch (fileType) {
		case "3ga":
		case "3gp":
		case "m4a":
			depth = 14;
			break;
		case "flac":
			depth = 4;
			break;
		case "wav":
			depth = 5;
			break;
		}
		return depth;
	}
}