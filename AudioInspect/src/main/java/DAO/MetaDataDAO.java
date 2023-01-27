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
		System.out.println(fileId);
		String query;
		/*
		switch (isItEdited) {
		case "원본":
			query = "select sf.meta_data_id\n"
				+ "from original_speech_file sf\n"
				+ "where sf.file_name =" + fileName + " and sf.file_type = " +fileType;
			break;
		default:
			query = "select sf.meta_data_id\n"
					+ "from original_speech_file sf\n"
					+ "where sf.file_name =" + fileName + " and sf.file_type = " +fileType;
			break;
		}
		*/
	}
}
