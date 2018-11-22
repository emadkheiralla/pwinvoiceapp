package com.utc.pw.controller.advice;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.ModelAndView;

import com.utc.pw.exception.SecurityException;

/**
 * Advice for Exceptions Controller.
 * 
 * @author <a href="mailto:"Wilson.Cursino@pw.utc3.com"> Wilson Soethe Cursino
 *         TEKSYSTEMS INC </a>
 * @author <a href="mailto:"Lang.Xu@pw.utc.com"> Xu, Lang TEKSYSTEMS INC </a>
 * @since 1.0
 */
@ControllerAdvice
public class ExceptionControllerAdvice {

	@ExceptionHandler({ Exception.class, RuntimeException.class })
	public ModelAndView handleError(HttpServletRequest req, Exception ex) {
		System.err.println(req.getRequestURL());
		ex.printStackTrace();
		ModelAndView mav = new ModelAndView();
		mav.addObject("msg", "Sorry, we couldn't find what you are looking for." + ex.getMessage());
		mav.addObject("url", req.getRequestURL());
		mav.setViewName("error");
		return mav;
	}

	@ExceptionHandler({ SecurityException.class })
	public ResponseEntity<Object> customException(Exception ex, WebRequest request) {
		return new ResponseEntity<Object>("Access denied: " + ex.getMessage(), new HttpHeaders(), HttpStatus.FORBIDDEN);
	}
}