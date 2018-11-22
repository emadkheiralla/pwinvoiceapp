package com.utc.pw.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.utc.pw.data.dto.UserSessionDto;
import com.utc.pw.data.entity.Role;
import com.utc.pw.data.entity.Users;
import com.utc.pw.data.repository.UserRepository;
import com.utc.pw.exception.SecurityException;
import com.utc.pw.security.JwtTokenProvider;
import com.utc.pw.service.UserService;

/**
 * Service implementation for User.
 * @author <a href="mailto:"Wilson.Cursino@pw.utc3.com"> Wilson Soethe Cursino TEKSYSTEMS INC </a>
 * @author <a href="mailto:"Lang.Xu@pw.utc.com"> Xu, Lang TEKSYSTEMS INC </a>
 * @since 1.0
 */
@Service
public class UserServiceImpl implements UserService {

  @Autowired
  private UserRepository repository;

  @Override
  public List<Users> getUserDetails() {
    return repository.findAll();
  }

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private JwtTokenProvider jwtTokenProvider;

  @Autowired
  private AuthenticationManager authenticationManager;

  @Override
  public String signin(String clockNumber, String password) {
    try {
      Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(clockNumber, password));
      List<GrantedAuthority> roles = new ArrayList<>();
      for (GrantedAuthority authority : authentication.getAuthorities()) {
        roles.add(authority);
      }
      return jwtTokenProvider.createToken(clockNumber, roles);
    } catch (Exception e) {
      throw new SecurityException("Invalid clockNumber/password supplied", HttpStatus.UNPROCESSABLE_ENTITY);
    }
  }

  @Override
  public UserSessionDto getUserSession() {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    Users users = userRepository.findByClockNumber(authentication.getName());

    UserSessionDto user = new UserSessionDto();
    user.setFirstName(users.getFirstName());
    user.setLastName(users.getLastName());

    List<Role> roles = new ArrayList<>();
    for (GrantedAuthority authority : authentication.getAuthorities()) {
      roles.add(Role.valueOf(authority.getAuthority()));
    }
    user.setRoles(roles);

    return user;
  }

}
