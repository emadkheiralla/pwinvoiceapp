package com.utc.pw.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.utc.pw.data.dto.UserSessionDto;
import com.utc.pw.data.entity.Users;
import com.utc.pw.service.UserService;

/**
 * User Controller.
 * @author <a href="mailto:"Wilson.Cursino@pw.utc3.com"> Wilson Soethe Cursino TEKSYSTEMS INC </a>
 * @author <a href="mailto:"Lang.Xu@pw.utc.com"> Xu, Lang TEKSYSTEMS INC </a>
 * @since 1.0
 */
@CrossOrigin(origins = "*", maxAge = 3600000)
@RestController
@RequestMapping({"/api/user" })
public class UserController {

  @Autowired
  private UserService userService;

  @GetMapping("/all")
  @PreAuthorize("hasRole('ROLE_ADMIN')")
  public List<Users> findAll() {
    return userService.getUserDetails();
  }

  @GetMapping("/session/information")
  public UserSessionDto sessionInformation() {
    return userService.getUserSession();
  }

}
