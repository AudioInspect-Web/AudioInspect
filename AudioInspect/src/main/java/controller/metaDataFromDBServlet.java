package controller;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.TransformerException;

import DAO.MetaDataDAO;

public class metaDataFromDBServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String fileId = request.getParameter("fileId");
		String fileType = request.getParameter("fileType");
		//System.out.println(fileId);
		//System.out.println(fileType);
		try {
			PrintWriter out = response.getWriter();
			//System.out.println(MetaDataDAO.getMetaDataID(fileId, fileType));
			out.print(MetaDataDAO.getMetaDataID(fileId, fileType));
			out.flush();
		} catch (ParserConfigurationException | IOException | TransformerException e) {
			e.printStackTrace();
		}
	}

}
