package DAO;

import java.io.IOException;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.TransformerException;

import Model.MetaDataParser;
import Model.MetaDepthID;
import Util.DB;

public class MetaDataDAO {
	public static void getMetaDataID(String fileId, String fileType) throws ParserConfigurationException, IOException, TransformerException {
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

	private static void getMetaData(Integer meta_data_id, String fileType) throws ParserConfigurationException, IOException, TransformerException {
		Integer depth = getMetaDataDepth(fileType);
		MetaDepthID meta_depth_id = new MetaDepthID();
		MetaDataParser meta_data_parser = new MetaDataParser();
				
		for (int i = 1; i <= depth; i++) {
			String query = "select *\n"
						+ "from " + fileType + "_meta_depth" + i + "\n"
						+ meta_depth_id.getQueryByMetaDepth(fileType, i, meta_data_id);
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
						Integer is_block = rs.getInt("is_block");
						String meta_name = rs.getString("meta_name");
						Integer meta_size = rs.getInt("meta_size");
						String value = rs.getString("value");
						String info1 = rs.getString("info1");
						String info2 = rs.getString("info2");
						String info3 = rs.getString("info3");
						String info4 = rs.getString("info4");
						Integer offset = rs.getInt("offset");
						String currentMetaDepthIdHistory = metaDepthIdHistory;
						meta_data_parser.getMetaData(is_block, meta_name, meta_size, value, info1, info2, info3, info4, offset, currentMetaDepthIdHistory);
						//System.out.println(currentMetaDepthIdHistory + " & " + is_block);
						//System.out.println(meta_name + " & " + meta_size + " & " + value + " & " + info1 + " & " + info2 + " & " + info3 + " & " + info4 + " & " + offset);
					}
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
		//meta_depth_id.printMetaDepthId();
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