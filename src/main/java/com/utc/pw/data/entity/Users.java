package com.utc.pw.data.entity;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Arrays;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

/**
 * The persistent class for the Users database table.
 * @author <a href="mailto:"Wilson.Cursino@pw.utc3.com"> Wilson Soethe Cursino TEKSYSTEMS INC </a>
 * @author <a href="mailto:"Lang.Xu@pw.utc.com"> Xu, Lang TEKSYSTEMS INC </a>
 * @since 1.0
 */
@Entity
@Table(name = "Users", schema = "appl")
@NamedQuery(name = "Users.findAll", query = "SELECT u FROM Users u")
@lombok.Getter
@lombok.Setter
@lombok.NoArgsConstructor
public class Users implements Serializable {
  private static final long serialVersionUID = 1L;

  @Id
  @SequenceGenerator(name = "USERS_CLOCKNUMBER_GENERATOR")
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "USERS_CLOCKNUMBER_GENERATOR")
  @Column(name = "ClockNumber")
  private String clockNumber;

  @Column(name = "UserPassword")
  private String password;

  // @ElementCollection(fetch = FetchType.EAGER) //TODO: Add has the Roles table to the DB.
  // List<Role> roles;

  public List<Role> getRoles() { //TODO: delete this once the db has the Roles table.
    return Arrays.asList(new Role[] {Role.ROLE_ADMIN, Role.ROLE_CLIENT });
  }

  @Column(name = "created_by")
  private String createdBy;

  @Column(name = "created_time")
  private Timestamp createdTime;

  @Column(name = "Email")
  private String email;

  @Column(name = "FirstName")
  private String firstName;

  private String GTFISProfile;

  @Column(name = "LastName")
  private String lastName;

  @Column(name = "modified_by")
  private String modifiedBy;

  @Column(name = "modified_time")
  private Timestamp modifiedTime;

  @Column(name = "V2500ISProfile")
  private String v2500ISProfile;

}