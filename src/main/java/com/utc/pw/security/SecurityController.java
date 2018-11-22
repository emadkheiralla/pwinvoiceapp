package com.utc.pw.security;

import java.util.Collections;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.utc.pw.exception.SecurityException;
import com.utc.pw.service.UserService;

import io.swagger.annotations.ApiParam;

/**
 * User Controller.
 * 
 * @author <a href="mailto:"Wilson.Cursino@pw.utc3.com"> Wilson Soethe Cursino
 *         TEKSYSTEMS INC </a>
 * @author <a href="mailto:"Lang.Xu@pw.utc.com"> Xu, Lang TEKSYSTEMS INC </a>
 * @since 1.0
 */
@CrossOrigin(origins = "*", maxAge = 3600000)
@RestController
@RequestMapping({"/api/security" })
public class SecurityController {

  @Autowired
  private UserService userService;

  @PostMapping(path = "/signin", produces = MediaType.APPLICATION_JSON_VALUE)
  public Map<String, String> login(@ApiParam(defaultValue = "M107042", name = "clockNumber") @RequestParam String clockNumber, @ApiParam(defaultValue = "ChangeMe?", name = "password") @RequestParam(required = false) String password)
      throws SecurityException {
    String response = userService.signin(clockNumber, password);
    return Collections.singletonMap("TOKEN_KEY", response);
  }
}
