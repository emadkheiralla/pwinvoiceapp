package com.utc.pw.data.entity;

import org.springframework.security.core.GrantedAuthority;

/**
 * The Role class for the Users.
 * @author <a href="mailto:"Wilson.Cursino@pw.utc3.com"> Wilson Soethe Cursino TEKSYSTEMS INC </a>
 * @author <a href="mailto:"Lang.Xu@pw.utc.com"> Xu, Lang TEKSYSTEMS INC </a>
 * @since 1.0
 */
public enum Role implements GrantedAuthority {
  ROLE_ADMIN, ROLE_CLIENT;

  @Override
  public String getAuthority() {
    return name();
  }

}