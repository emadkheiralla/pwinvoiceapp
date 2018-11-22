package com.utc.pw.data.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.utc.pw.data.entity.Users;

/**
 * Repository class for the User.
 * 
 * @author <a href="mailto:"Wilson.Cursino@pw.utc3.com"> Wilson Soethe Cursino TEKSYSTEMS INC </a>
 * @author <a href="mailto:"Lang.Xu@pw.utc.com"> Xu, Lang TEKSYSTEMS INC </a>
 * @since 1.0
 */
@Repository
public interface UserRepository extends CrudRepository<Users, String> {

  @Override
  List<Users> findAll();

  Users findByClockNumber(String clockNumber);
}
