# AudioInspect<div align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=200&section=header&text=AudioInspect&fontSize=90" />
</div>
<div align=center>
	<h3>π Tech Stack π</h3>
	<p>β¨ Platforms & Languages β¨</p>
</div>
<div align="center">
	<img src="https://img.shields.io/badge/Java-007396?style=flat&logo=Java&logoColor=white" />
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white" />
	<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white" />
	<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white" />
	
</div>
<div align=center>
	<p>π  Tools π </p>
</div>
<div align=center>
	<img src="https://img.shields.io/badge/Eclipse%20IDE-2C2255?style=flat&logo=EclipseIDE&logoColor=white" />
	<img src="https://img.shields.io/badge/Tomcat-F8DC75?style=flat&logo=ApacheTomcat&logoColor=white" />
</div>

## π μλΉμ€ μκ°

AudioInspect - μΉμ ν΅ν μμ± νμΌμ λ©νλ°μ΄ν° λΆμ μλΉμ€μλλ€.

- 2κ° μ΄μμ νμΌκ°μ μμ± λΉκ΅λ₯Ό ν΅ν΄ μμ± νμΌμ λ©νλ°μ΄ν° λΆμ, λΉκ΅ μλΉμ€μλλ€.

- μΈλ―Έ λ©ν λ°μ΄ν°μ λ©νλ°μ΄ν°λ‘ μ¬μ©μμ νμμ±μ λ°λ₯Έ μμ± νμΌ λΆμμ΄ κ°λ₯ν©λλ€. 

- νμΌ λΆμ, λΉκ΅ κ²°κ³Όλ₯Ό Excel, XMLμΌλ‘ μ μ₯μ΄ κ°λ₯ν©λλ€. 

--- 

## π μλΉμ€ μ€λͺ

1. AudioInspectμ μμ± λΆμ μλΉμ€λ₯Ό μ κ³΅ λ°μ μ μλ νμΌ νμ₯μλ m4aλ§ κ°λ₯ν©λλ€.
2. μΉ μλΉμ€ νλ©΄ μμμ μΌμͺ½μμ λ€λ£¨λ νμΌμ κΈ°μ€ νμΌμ΄λΌ μΉ­ν©λλ€.
3. μΉ μλΉμ€ νλ©΄ μμμ μ€λ₯Έμͺ½μμ λ€λ£¨λ νμΌμ λΉκ΅ νμΌμ΄λΌ μΉ­ν©λλ€.
4. κΈ°μ€ νμΌμ κ²½μ° 1κ°κΉμ§λ§ μλ‘λ κ°λ₯νλ©°, λΉκ΅ νμΌμ κ°μ μ ν μμ΄ μλ‘λ κ°λ₯ν©λλ€.
5. TEXT, TREE λΉκ΅ νμμΌλ‘ μΆμΆν μμ± νμΌμ λ°μ΄ν°λ μΈλ―Έ λ©ν λ°μ΄ν°λΌ μΉ­ν©λλ€.
6. XML λΉκ΅ νμμΌλ‘ μΆμΆν μμ± νμΌμ λ°μ΄ν°λ λ©ν λ°μ΄ν°λΌ μΉ­ν©λλ€.
7. Excelλ‘ λΉκ΅ κ²°κ³Όλ₯Ό μΆμΆνλ μλΉμ€λ λΉκ΅ νμμ΄ TEXT, TREEμΌ λλ§ μ§μν©λλ€.
8. XMLλ‘ λΉκ΅ κ²°κ³Όλ₯Ό μΆμΆνλ μλΉμ€λ λΉκ΅ νμμ΄ XMLμΌ λλ§ μ§μ.

## βοΈ AudioInspect μ€μ λ°©λ²

<details>
<summary>AudioInspect μ€μ  νΌμ³λ³΄κΈ°</summary>

## 1. tomcat μ€μ νκΈ°

server μ¬μ©μ Tomcat versionμ 10.0μΌλ‘ λ§μΆ° μ¬μ©ν΄ μ£ΌμμΌ ν©λλ€.

---
	
## 2. ν΄λ κ²½λ‘ μ€μ νκΈ°

[νλ‘μ νΈ ν΄λ]/src/main/java/controller/fileUploadServlet.java νμΌμ μ° ν 
	
local PCμ μμΉμ μνλ ν΄λλͺμ ν΄λ μμ± ν ν΄λΉ κ²½λ‘μ ν΄λ λͺμΌλ‘ μ½λλ₯Ό μμ  ν μ¬μ©ν΄ μ£ΌμμΌ ν©λλ€.
	
```ruby
  //27ν
	String savefilePath = "C:\\[ν΄λ λͺ]";
  //42ν
	result.add(MediaInfo.getXMLString("C:\\[ν΄λ λͺ]\\"+fileName));
```
--- 
	
## 3. MedeaInfo.exe μ¬μ©νκΈ°

local PCμ MediaInfo_CLI_21.03_Windows_x64 μ€μΉ ν μ½λ λ΄μ ν΄λΉ κ²½λ‘λ₯Ό μ€μ ν΄ μ£ΌμμΌ ν©λλ€.

### [MediaInfo λ€μ΄λ‘λ λ§ν¬](https://mediaarea.net/en/MediaInfo/Download)

[νλ‘μ νΈ ν΄λ]/src/main/java/MediaInfo/MediaInfo.java νμΌμ μ° ν 
	MediaInfo.exeμ μ€μ  μ μ₯ μμΉλ‘ λ³κ²½ν΄ μ£ΌμμΌ ν©λλ€. 
	
```ruby
   //9ν
        static final String MedeaInfoPath = "C:\\MediaInfo_CLI_21.03_Windows_x64\\MediaInfo.exe";
```
</details>

## π Contribute κ·μΉ
μ½λ μμ μ μλμ κ·μΉμ λ°λΌ μμ±ν΄ μ£ΌμκΈΈ λ°λλλ€.

1. μμ± νμΌμ λ€λ£¨λ νμΌ, λ³μ, ν¨μ λ±μ κ²½μ°, ν΄λΉ μμ± νμΌμ μ­ν μ λ°λΌ μ΄λ¦μ stand(ard), comp(are)μ΄ ν¬ν¨λμ΄μΌ νλ€.
2. TEXT, TREE λΉκ΅ νμμ λ€λ£¨λ νμΌ, λ³μ, ν¨μ λ±μ κ²½μ°, μ΄λ¦μ semimetadataμ΄ ν¬ν¨λμ΄μΌ νλ€.
3. XML λΉκ΅ νμμ λ€λ£¨λ νμΌ, λ³μ, ν¨μ λ±μ κ²½μ°, μ΄λ¦μ metadataκ° ν¬ν¨λμ΄μΌ νλ€.

## π₯ μν μ΄λ―Έμ§
<p float = "left";>
<img src = "https://user-images.githubusercontent.com/80144964/203689996-f4dd8de6-5799-415e-b130-9001e4388cb1.png">
<img src = "https://user-images.githubusercontent.com/80144964/203690246-b0b13db5-44fc-4378-8894-ada019532ca7.png">

