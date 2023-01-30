package Model;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;

import org.w3c.dom.Document;
import org.w3c.dom.Element;

public class MetaDataParser {
	// XML 문서 파싱
	//DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
	//DocumentBuilder documentBuilder = factory.newDocumentBuilder();
	//Document document = documentBuilder.newDocument();

	public void getMetaData(Integer is_block, String meta_name, Integer meta_size, String value, String info1, String info2, String info3, String info4, Integer offset, String currentMetaDepthIdHistory) throws ParserConfigurationException, IOException, TransformerException {
		// XML 문서 생성
		DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
		DocumentBuilder documentBuilder = factory.newDocumentBuilder();
		Document document = documentBuilder.newDocument();
		
		//System.out.println(meta_name + " & " + meta_size + " & " + value + " & "+ info1 + " & " + info2 + " & " + info3 + " & " + info4 + " & " + offset);
		//System.out.println(meta_name.getClass().getName() + " & " + meta_size.getClass().getName() + " & " + value.getClass().getName() + " & "+ info1.getClass().getName() + " & " + info2.getClass().getName() + " & " + info3.getClass().getName() + " & " + info4.getClass().getName() + " & " + offset.getClass().getName());
		
		HashMap<String, Element> metaDataIsBlock = new HashMap<String, Element>();
		switch(is_block) {
		case 1: //Block
			Element Block = document.createElement("block");
			if(Integer.toString(offset) != "" && Integer.toString(offset) != null) {
				Block.setAttribute("offset", Integer.toString(offset));
			}
			if(meta_name != "" && meta_name != null) {
				Block.setAttribute("name", meta_name);
			}
			if(Integer.toString(meta_size) != "" && Integer.toString(meta_size) != null) {
				Block.setAttribute("size", Integer.toString(meta_size));
			}
			if(info1 != "" && info1 != null) {
				Block.setAttribute("info", info1);
			}
			if(info2 != "" && info2 != null) {
				Block.setAttribute("info2", info2);
			}
			if(info3 != "" && info3 != null) {
				Block.setAttribute("info3", info3);
			}
			if(info4 != "" && info4 != null) {
				Block.setAttribute("info", info4);
			}
			metaDataIsBlock.put(currentMetaDepthIdHistory, Block);
			document.appendChild(metaDataIsBlock.get(currentMetaDepthIdHistory));
			//System.out.println(metaDataIsBlock.get(currentMetaDepthIdHistory).getClass().getName());
			break;
		case 0: //Data
			Element Data = document.createElement("data");
			if(Integer.toString(offset) != "" && Integer.toString(offset) != null) {
				Data.setAttribute("offset", Integer.toString(offset));
			}
			if(meta_name != "" && meta_name != null) {
				Data.setAttribute("name", meta_name);
			}
			if(Integer.toString(meta_size) != "" && Integer.toString(meta_size) != null) {
				Data.setAttribute("size", Integer.toString(meta_size));
			}
			if(info1 != "" && info1 != null) {
				Data.setAttribute("info", info1);
			}
			if(info2 != "" && info2 != null) {
				Data.setAttribute("info2", info2);
			}
			if(info3 != "" && info3 != null) {
				Data.setAttribute("info3", info3);
			}
			if(info4 != "" && info4 != null) {
				Data.setAttribute("info", info4);
			}
			if(value != "" && value != null) {
				Data.setTextContent(value);
			}
			Integer index = currentMetaDepthIdHistory.replaceAll("/$", "").lastIndexOf("/");
			String key = currentMetaDepthIdHistory.replaceAll("/$", "").substring(0, index+1);
			//metaDataIsBlock.get(key).appendChild(Data);
			break;
		}
		
		// XML 문자열로 변환
		ByteArrayOutputStream out = new ByteArrayOutputStream();

		DOMSource source = new DOMSource(document);
		StreamResult result = new StreamResult(out);

		TransformerFactory transFactory = TransformerFactory.newInstance();
		Transformer transformer = transFactory.newTransformer();

		// 출력 시 문자코드: UTF-8
		transformer.setOutputProperty(OutputKeys.ENCODING, "UTF-8");
		// 들여 쓰기 있음
		transformer.setOutputProperty(OutputKeys.INDENT, "yes");
		transformer.transform(source, result);
		System.out.println(new String(out.toByteArray(), StandardCharsets.UTF_8));
	}
}
