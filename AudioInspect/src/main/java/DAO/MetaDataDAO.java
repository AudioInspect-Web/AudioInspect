package DAO;

import java.io.IOException;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.TransformerException;

import Model.MetaDataParser;
import Model.MetaDepthID;
import Util.DB;

public class MetaDataDAO {
	public static String getMetaDataID(String fileId, String fileType) throws ParserConfigurationException, IOException, TransformerException {
		String query;
		if (fileId.contains("원본")) {
			query = "select sf.meta_data_id, sf.file_name\n" 
					+ "from original_speech_file sf\n" + "where sf.original_speech_file_id ="
					+ fileId.replaceAll("[^0-9]", "");
		} else {
			query = "select esf.meta_data_id, esf.file_name\n"
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
		String file_name = null;
		if (rs != null) {
			try {
				while (rs.next()) {
					meta_data_id = rs.getInt("meta_data_id");
					file_name = rs.getString("file_name");
				}
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		fileType = fileType.toLowerCase();
		return getMetaData(meta_data_id, file_name, fileType);
	}

	private static String getMetaData(Integer meta_data_id, String file_name, String fileType) throws ParserConfigurationException, IOException, TransformerException {
		Integer depth = getMetaDataDepth(fileType);
		MetaDepthID meta_depth_id = new MetaDepthID();
		MetaDataParser meta_data_parser = new MetaDataParser();
		ArrayList<ArrayList<String>> MetaData = new ArrayList<ArrayList<String>>();
				
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
						ArrayList<String> values = new ArrayList<String>();
						values.add(metaDepthIdHistory);
						values.add(Integer.toString(rs.getInt("is_block")));
						values.add(Integer.toString(rs.getInt("offset")));
						values.add(rs.getString("meta_name"));
						values.add(Integer.toString(rs.getInt("meta_size")));
						values.add(rs.getString("info1"));
						values.add(rs.getString("info2"));
						values.add(rs.getString("info3"));
						values.add(rs.getString("info4"));
						values.add(rs.getString("value"));
						MetaData.add(values);
					}
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
		//meta_depth_id.printMetaDepthId();
		return meta_data_parser.getMetaData2XML(file_name, fileType, MetaData);
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