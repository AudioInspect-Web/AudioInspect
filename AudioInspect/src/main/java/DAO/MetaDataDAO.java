package DAO;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import Model.MetaData;
import Model.MetaDataDepth;
import Util.DB;

public class MetaDataDAO {
	public static void getMetaDataID(String fileId) {
		String query;
		if(fileId.contains("원본")) {
			System.out.println("원본 : " + fileId.replaceAll("[^0-9]", ""));
			query = "select sf.meta_data_id\n"
					+ "from original_speech_file sf\n"
					+ "where sf.original_speech_file_id =" + fileId.replaceAll("[^0-9]", "");
		}else {
			System.out.println("편집 : " + fileId);
			query = "select esf.meta_data_id\n"
					+ "from edited_speech_file esf\n"
					+ "where esf.edited_speech_file_id =" + fileId;
		}
	}
}
