package com.utc.pw.data.dto;

import java.util.List;

import com.utc.pw.data.entity.Role;

/**
 * User Session Data Transfer Object.
 * @author <a href="mailto:"Wilson.Cursino@pw.utc3.com"> Wilson Soethe Cursino TEKSYSTEMS INC </a>
 * @author <a href="mailto:"Lang.Xu@pw.utc.com"> Xu, Lang TEKSYSTEMS INC </a>
 * @since 1.0
 */
@lombok.Getter
@lombok.Setter
public class UserSessionDto {
  String firstName;
  String lastName;
  List<Role> roles;
}
