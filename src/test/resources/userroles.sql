DROP TABLE appl.userroles; 

CREATE TABLE appl.userroles 
  ( 
     userrolesseq    INT IDENTITY NOT NULL, 
     usersseq        INT NOT NULL, 
     rolename        NVARCHAR(100), 
     roledescription NVARCHAR(300) 
  ); 

ALTER TABLE appl.userroles 
  ADD CONSTRAINT pk_appl_userroles PRIMARY KEY NONCLUSTERED (userrolesseq); 

ALTER TABLE appl.userroles 
  ADD CONSTRAINT fk_usersseq FOREIGN KEY (usersseq) REFERENCES appl.users ( 
  usersseq) ON UPDATE no action ON DELETE no action; 

INSERT INTO appl.userroles 
            (usersseq, 
             rolename, 
             roledescription) 
VALUES      ( 1, 
              N'ROLE_CLIENT', 
              N'Client User' ); 

INSERT INTO appl.userroles 
            (usersseq, 
             rolename, 
             roledescription) 
VALUES      ( 1, 
              N'ROLE_CLIENT', 
              N'Client User' ); 