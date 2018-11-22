package com.utc.pw.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.utc.pw.data.entity.Users;
import com.utc.pw.data.repository.UserRepository;

/**
 *  User details class.
 *  
 * @author <a href="mailto:"Wilson.Cursino@pw.utc3.com"> Wilson Soethe Cursino TEKSYSTEMS INC </a>
 * @author <a href="mailto:"Lang.Xu@pw.utc.com"> Xu, Lang TEKSYSTEMS INC </a>
 * @since 1.0
 */
@Service
public class MyUserDetails implements UserDetailsService {

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private PasswordEncoder passwordEncoder;

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    final Users user = userRepository.findByClockNumber(username);

    if (user == null) {
      throw new UsernameNotFoundException("User '" + username + "' not found");
    }

    return org.springframework.security.core.userdetails.User//
        .withUsername(username)//
        .password(passwordEncoder.encode(user.getPassword()))//
        .authorities(user.getRoles())// 
        .accountExpired(false)//
        .accountLocked(false)//
        .credentialsExpired(false)//
        .disabled(false)//
        .build();
  }

}