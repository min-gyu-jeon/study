import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;


public class LottoDao {
	private static final String URL = "jdbc:mariadb://localhost:3306/labdb";
	private static final String USER = "human", PASSWORD = "CHANGE_ME";

	//입력회차 검색
	public LottoDto selectByRnd(int rnd) {
        LottoDto lotto = null;

        String sql = """
                SELECT rnd, number1, number2, number3,
                       number4, number5, number6, bonus
                FROM lotto
                WHERE rnd = ?
                """;

        try (
            Connection conn =
                    DriverManager.getConnection(URL, USER, PASSWORD);
            PreparedStatement pstmt = conn.prepareStatement(sql)
        ) {
            // SQL의 첫 번째 ?에 사용자가 입력한 회차를 넣음
            pstmt.setInt(1, rnd);

            try (ResultSet rs = pstmt.executeQuery()) {
                if (rs.next()) {
                    lotto = new LottoDto();

                    lotto.setRnd(rs.getInt("rnd"));
                    lotto.setNumber1(rs.getInt("number1"));
                    lotto.setNumber2(rs.getInt("number2"));
                    lotto.setNumber3(rs.getInt("number3"));
                    lotto.setNumber4(rs.getInt("number4"));
                    lotto.setNumber5(rs.getInt("number5"));
                    lotto.setNumber6(rs.getInt("number6"));
                    lotto.setBonus(rs.getInt("bonus"));
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return lotto;
    }
	
	public int deleteAll() {
	    String sql = "DELETE FROM labdb.lotto";

	    try (
	        Connection conn =
	                DriverManager.getConnection(URL, USER, PASSWORD);
	        PreparedStatement pstmt = conn.prepareStatement(sql)
	    ) {
	        return pstmt.executeUpdate();

	    } catch (SQLException e) {
	        e.printStackTrace();
	        return -1;
	    }
	}
}