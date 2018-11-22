package com.utc.pw.service;

import java.util.List;

import com.utc.pw.data.dto.UserSessionDto;
import com.utc.pw.data.entity.Users;

/**
 * Service definition for User.
 * 
 * @author <a href="mailto:"Wilson.Cursino@pw.utc3.com"> Wilson Soethe Cursino TEKSYSTEMS INC </a>
 * @author <a href="mailto:"Lang.Xu@pw.utc.com"> Xu, Lang TEKSYSTEMS INC </a>
 * @since 1.0
 */
public interface UserService {

  List<Users> getUserDetails();

  UserSessionDto getUserSession();

  String signin(String clockNumber, String password);

}
