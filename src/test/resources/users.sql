CREATE SCHEMA appl;

DROP TABLE appl.users; 

CREATE TABLE appl.users 
  ( 
     clocknumber    NVARCHAR(10) NOT NULL, 
     userpassword   NVARCHAR(100) DEFAULT('ChangeMe?')  NOT NULL, 
     firstname      NVARCHAR(50), 
     lastname       NVARCHAR(50), 
     email          NVARCHAR(50), 
     gtfisprofile   NVARCHAR(20), 
     v2500isprofile NVARCHAR(20), 
     created_time   DATETIME DEFAULT (Getdate()) NOT NULL, 
     created_by     NVARCHAR(128) DEFAULT (Suser_sname()) NOT NULL, 
     modified_time  DATETIME DEFAULT (Getdate()) NOT NULL, 
     modified_by    NVARCHAR(128) DEFAULT (Suser_sname()) NOT NULL 
  ); 

INSERT INTO appl.users 
            (clocknumber, 
             firstname,
             lastname, 
             email, 
             gtfisprofile, 
             v2500isprofile, 
             created_time, 
             created_by, 
             modified_time, 
             modified_by) 
VALUES      ( N'M107042', 
              N'Kimberly', 
              N'Rose', 
              N'Kimberly.Rose2@pw.utc.com', 
              NULL, 
              NULL, 
              {ts '2018-10-16 00:53:08.303'}, 
              N'DSG1_ITEMS_dvDev_User1', 
              {ts '2018-10-16 00:53:08.303'}, 
              N'DSG1_ITEMS_dvDev_User1' ); 

INSERT INTO appl.users 
            (clocknumber, 
             firstname, 
             lastname, 
             email, 
             gtfisprofile, 
             v2500isprofile, 
             created_time, 
             created_by, 
             modified_time, 
             modified_by) 
VALUES      ( N'M311711', 
              N'Joanne', 
              N'Dahill', 
              N'Joanne.Dahill2@pw.utc.com', 
              N'No Filters', 
              N'No Filters', 
              {ts '2018-10-16 00:53:08.303'}, 
              N'DSG1_ITEMS_dvDev_User1', 
              {ts '2018-10-16 00:53:08.303'}, 
              N'DSG1_ITEMS_dvDev_User1' ); 

INSERT INTO appl.users 
            (clocknumber, 
             firstname, 
             lastname, 
             email, 
             gtfisprofile, 
             v2500isprofile, 
             created_time, 
             created_by, 
             modified_time, 
             modified_by) 
VALUES      ( N'M315425', 
              N'Imaad', 
              N'Tanveer', 
              N'Imaad.Tanveer@pw.utc.com', 
              NULL, 
              NULL, 
              {ts '2018-10-16 00:53:08.303'}, 
              N'DSG1_ITEMS_dvDev_User1', 
              {ts '2018-10-16 00:53:08.303'}, 
              N'DSG1_ITEMS_dvDev_User1' ); 

INSERT INTO appl.users 
            (clocknumber, 
             firstname, 
             lastname, 
             email, 
             gtfisprofile, 
             v2500isprofile, 
             created_time, 
             created_by, 
             modified_time, 
             modified_by) 
VALUES      ( N'M317159', 
              N'Sharon', 
              N'Jacobs', 
              N'Sharon.Jacobs@pw.utc.com', 
              N'No Filters', 
              N'No Filters', 
              {ts '2018-10-16 00:53:08.303'}, 
              N'DSG1_ITEMS_dvDev_User1', 
              {ts '2018-10-16 00:53:08.303'}, 
              N'DSG1_ITEMS_dvDev_User1' ); 

INSERT INTO appl.users 
            (clocknumber, 
             firstname, 
             lastname, 
             email, 
             gtfisprofile, 
             v2500isprofile, 
             created_time, 
             created_by, 
             modified_time, 
             modified_by) 
VALUES      ( N'M319322', 
              N'Vidya', 
              N'Sridhar', 
              N'Vidya.Sridhar2@pw.utc.com', 
              NULL, 
              NULL, 
              {ts '2018-10-16 00:53:08.303'}, 
              N'DSG1_ITEMS_dvDev_User1', 
              {ts '2018-10-16 00:53:08.303'}, 
              N'DSG1_ITEMS_dvDev_User1' ); 

INSERT INTO appl.users 
            (clocknumber, 
             firstname, 
             lastname, 
             email, 
             gtfisprofile, 
             v2500isprofile, 
             created_time, 
             created_by, 
             modified_time, 
             modified_by) 
VALUES      ( N'M320005', 
              N'Thomas', 
              N'Costello', 
              N'Thomas.Costello2@pw.utc.com', 
              NULL, 
              NULL, 
              {ts '2018-10-16 00:53:08.303'}, 
              N'DSG1_ITEMS_dvDev_User1', 
              {ts '2018-10-16 00:53:08.303'}, 
              N'DSG1_ITEMS_dvDev_User1' ); 

INSERT INTO appl.users 
            (clocknumber, 
             firstname, 
             lastname, 
             email, 
             gtfisprofile, 
             v2500isprofile, 
             created_time, 
             created_by, 
             modified_time, 
             modified_by) 
VALUES      ( N'M320229', 
              N'Lizalyn', 
              N'Eib', 
              N'Lizalyn.Eib2@pw.utc.com', 
              NULL, 
              NULL, 
              {ts '2018-10-16 00:53:08.303'}, 
              N'DSG1_ITEMS_dvDev_User1', 
              {ts '2018-10-16 00:53:08.303'}, 
              N'DSG1_ITEMS_dvDev_User1' ); 

INSERT INTO appl.users 
            (clocknumber, 
             firstname, 
             lastname, 
             email, 
             gtfisprofile, 
             v2500isprofile, 
             created_time, 
             created_by, 
             modified_time, 
             modified_by) 
VALUES      ( N'M321176', 
              N'Jeffrey', 
              N'Murray', 
              N'Jeffrey.Murray2@pw.utc.com', 
              NULL, 
              NULL, 
              {ts '2018-10-16 00:53:08.303'}, 
              N'DSG1_ITEMS_dvDev_User1', 
              {ts '2018-10-16 00:53:08.303'}, 
              N'DSG1_ITEMS_dvDev_User1' ); 

INSERT INTO appl.users 
            (clocknumber, 
             firstname, 
             lastname, 
             email, 
             gtfisprofile, 
             v2500isprofile, 
             created_time, 
             created_by, 
             modified_time, 
             modified_by) 
VALUES      ( N'M321340', 
              N'Kevin', 
              N'Hayes', 
              N'Kevin.Hayes@pw.utc.com', 
              NULL, 
              NULL, 
              {ts '2018-10-16 00:53:08.303'}, 
              N'DSG1_ITEMS_dvDev_User1', 
              {ts '2018-10-16 00:53:08.303'}, 
              N'DSG1_ITEMS_dvDev_User1' ); 

INSERT INTO appl.users 
            (clocknumber, 
             firstname, 
             lastname, 
             email, 
             gtfisprofile, 
             v2500isprofile, 
             created_time, 
             created_by, 
             modified_time, 
             modified_by) 
VALUES      ( N'M321514', 
              N'Andrew', 
              N'Mulcahy', 
              N'Andrew.Mulcahy@pw.utc.com', 
              NULL, 
              NULL, 
              {ts '2018-10-16 00:53:08.303'}, 
              N'DSG1_ITEMS_dvDev_User1', 
              {ts '2018-10-16 00:53:08.303'}, 
              N'DSG1_ITEMS_dvDev_User1' ); 

INSERT INTO appl.users 
            (clocknumber, 
             firstname, 
             lastname, 
             email, 
             gtfisprofile, 
             v2500isprofile, 
             created_time, 
             created_by, 
             modified_time, 
             modified_by) 
VALUES      ( N'M321930', 
              N'Nicole', 
              N'Kupstas', 
              N'Nicole.Kupstas@pw.utc.com', 
              NULL, 
              NULL, 
              {ts '2018-10-16 00:53:08.303'}, 
              N'DSG1_ITEMS_dvDev_User1', 
              {ts '2018-10-16 00:53:08.303'}, 
              N'DSG1_ITEMS_dvDev_User1' ); 

INSERT INTO appl.users 
            (clocknumber, 
             firstname, 
             lastname, 
             email, 
             gtfisprofile, 
             v2500isprofile, 
             created_time, 
             created_by, 
             modified_time, 
             modified_by) 
VALUES      ( N'M322313', 
              N'Ashley', 
              N'Zupp', 
              N'Ashley.Zupp@pw.utc.com', 
              NULL, 
              NULL, 
              {ts '2018-10-16 00:53:08.303'}, 
              N'DSG1_ITEMS_dvDev_User1', 
              {ts '2018-10-16 00:53:08.303'}, 
              N'DSG1_ITEMS_dvDev_User1' ); 

INSERT INTO appl.users 
            (clocknumber, 
             firstname, 
             lastname, 
             email, 
             gtfisprofile, 
             v2500isprofile, 
             created_time, 
             created_by, 
             modified_time, 
             modified_by) 
VALUES      ( N'Tsunami', 
              N'Tsunami', 
              N'Tsolutions', 
              NULL, 
              NULL, 
              NULL, 
              {ts '2018-10-16 00:53:08.303'}, 
              N'DSG1_ITEMS_dvDev_User1', 
              {ts '2018-10-16 00:53:08.303'}, 
              N'DSG1_ITEMS_dvDev_User1' ); 