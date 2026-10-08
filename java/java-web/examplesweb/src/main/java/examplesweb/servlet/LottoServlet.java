package examplesweb.servlet;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet
public class LottoServlet extends HttpServlet {
	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		int start = Integer.parseInt(request.getParameter("start"));
        int stop = Integer.parseInt(request.getParameter("stop"));

        int Number =
                (int)(Math.random() * (stop - start + 1)) + start;

        response.setContentType("text/html; charset=UTF-8");
        response.getWriter().printf(
                "<h1>행운 번호는 %d입니다.</h1>",
                Number
        );
	}
}
