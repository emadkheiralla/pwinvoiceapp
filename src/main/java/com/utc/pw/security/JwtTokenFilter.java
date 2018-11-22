package com.utc.pw.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;

import com.utc.pw.exception.SecurityException;

/**
 *  Jason Web Token (JWT) Token Filter class.
 *  
 * @author <a href="mailto:"Wilson.Cursino@pw.utc3.com"> Wilson Soethe Cursino TEKSYSTEMS INC </a>
 * @author <a href="mailto:"Lang.Xu@pw.utc.com"> Xu, Lang TEKSYSTEMS INC </a>
 * @since 1.0
 */
public class JwtTokenFilter extends GenericFilterBean {

  private JwtTokenProvider jwtTokenProvider;

  public JwtTokenFilter(JwtTokenProvider jwtTokenProvider) {
    this.jwtTokenProvider = jwtTokenProvider;
  }

  @Override
  public void doFilter(ServletRequest req, ServletResponse res, FilterChain filterChain) throws IOException, ServletException {

    String token = jwtTokenProvider.resolveToken((HttpServletRequest) req);
    try {
      if (token != null && jwtTokenProvider.validateToken(token)) {
        Authentication auth = token != null ? jwtTokenProvider.getAuthentication(token) : null;
        SecurityContextHolder.getContext().setAuthentication(auth);
      }
    } catch (SecurityException ex) {
      HttpServletResponse response = (HttpServletResponse) res;
      response.sendError(ex.getHttpStatus().value(), ex.getMessage());
      return;
    }

    filterChain.doFilter(req, res);
  }

}