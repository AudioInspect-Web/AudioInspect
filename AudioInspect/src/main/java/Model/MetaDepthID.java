package Model;

import java.util.ArrayList;

public class MetaDepthID {
	ArrayList<String> meta_depth1_id = new ArrayList<String>();
	ArrayList<String> meta_depth2_id = new ArrayList<String>();
	ArrayList<String> meta_depth3_id = new ArrayList<String>();
	ArrayList<String> meta_depth4_id = new ArrayList<String>();
	ArrayList<String> meta_depth5_id = new ArrayList<String>();
	ArrayList<String> meta_depth6_id = new ArrayList<String>();
	ArrayList<String> meta_depth7_id = new ArrayList<String>();
	ArrayList<String> meta_depth8_id = new ArrayList<String>();
	ArrayList<String> meta_depth9_id = new ArrayList<String>();
	ArrayList<String> meta_depth10_id = new ArrayList<String>();
	ArrayList<String> meta_depth11_id = new ArrayList<String>();
	ArrayList<String> meta_depth12_id = new ArrayList<String>();
	ArrayList<String> meta_depth13_id = new ArrayList<String>();
	ArrayList<String> meta_depth14_id = new ArrayList<String>();
	
	public void setMetaDepthId(Integer depth, String id) {
		switch(depth) {
		case 1:
			this.meta_depth1_id.add(id);
			break;
		case 2:
			this.meta_depth2_id.add(id);
			break;
		case 3:
			this.meta_depth3_id.add(id);
			break;
		case 4:
			this.meta_depth4_id.add(id);
			break;
		case 5:
			this.meta_depth5_id.add(id);
			break;
		case 6:
			this.meta_depth6_id.add(id);
			break;
		case 7:
			this.meta_depth7_id.add(id);
			break;
		case 8:
			this.meta_depth8_id.add(id);
			break;
		case 9:
			this.meta_depth9_id.add(id);
			break;
		case 10:
			this.meta_depth10_id.add(id);
			break;
		case 11:
			this.meta_depth11_id.add(id);
			break;
		case 12:
			this.meta_depth12_id.add(id);
			break;
		case 13:
			this.meta_depth13_id.add(id);
			break;
		case 14:
			this.meta_depth14_id.add(id);
			break;		
		}
	}
	
	public void getQueryByMetaDepth(String fileType, Integer depth) {
		System.out.println("호출");
		System.out.println(fileType);
		System.out.println(depth);
		String query = null;
		switch(depth) {
		case 1:
			System.out.println(meta_depth1_id);
			for(int i = 0; i<meta_depth1_id.size() ; i++) {
				System.out.println(meta_depth1_id.get(i));
			}
			//return query;
		case 2:
			//return query;
		case 3:
			//return query;
		case 4:
			//return query;
		case 5:
			//return query;
		case 6:
			//return query;
		case 7:
			//return query;
		case 8:
			//return query;
		case 9:
			//return query;
		case 10:
			//return query;
		case 11:
			//return query;
		case 12:
			//return query;
		case 13:
			//return query;
		case 14:
			//return query;		
		}
		//return query;
	}
	
	public void printMetaDepthId() {
		System.out.println("Depth1: " + meta_depth1_id);
		System.out.println("Depth2: " + meta_depth2_id);
		System.out.println("Depth3: " + meta_depth3_id);
		System.out.println("Depth4: " + meta_depth4_id);
		System.out.println("Depth5: " + meta_depth5_id);
		System.out.println("Depth6: " + meta_depth6_id);
		System.out.println("Depth7: " + meta_depth7_id);
		System.out.println("Depth8: " + meta_depth8_id);
		System.out.println("Depth9: " + meta_depth9_id);
		System.out.println("Depth10: " + meta_depth10_id);
		System.out.println("Depth11: " + meta_depth11_id);
		System.out.println("Depth12: " + meta_depth12_id);
		System.out.println("Depth13: " + meta_depth13_id);
		System.out.println("Depth14: " + meta_depth14_id);
	}
}
