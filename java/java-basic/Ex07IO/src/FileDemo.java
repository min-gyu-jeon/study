import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class FileDemo {

	public static void main(String[] args) throws IOException {
		
		String path = "C:\\mingyu\\workspace\\java-basic\\Ex07IO";
		File file = new File(path);
		
		if(file.exists()) { //파일또는 디렉토리가 있는지 없는지 검사
			System.out.println("존재하는 경로입니다.");
		}else {
			System.out.println("존재하지 않는 경로입니다.");
		}
		
		path = "C:\\mingyu\\workspace\\java-basic\\Ex07IO\\newfile.txt";
		file = new File(path);
		if(file.exists()) {
			file.delete();
			System.out.println("파일을 삭제했습니다.");
		}
		file.createNewFile();
		
		path = "C:\\mingyu\\workspace\\java-basic\\Ex07IO\\newdir";
		file = new File(path);
		file.mkdir(); //지정된 경로에 디렉토리 만들기
		
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd a hh:mm"); //날짜의 문자열 표현 형식을 지정하는 도구
		path = "C:\\Users\\human";
		File currentDir = new File(path);
		File[] filesAndDirs = currentDir.listFiles();
		
		for (File f : filesAndDirs) {
			Date d = new Date(f.lastModified());
			if (f.isDirectory()) {//디렉토리인 경우
				System.out.printf("%s %5s %13s %s\n", sdf.format(d),
													  "<DIR>",
													  "",
													  f.getName());
			}
			if (f.isFile()) {//파일인 경우
				System.out.printf("%s %5s %,13d %s\n", sdf.format(d),
													  "",
													  f.length(),
													  f.getName());
			}
		}
	}

}
