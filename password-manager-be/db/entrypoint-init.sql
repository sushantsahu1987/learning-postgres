CREATE TABLE Users (
    ID SERIAL,
    Email varchar(100) NOT NULL,
    IsDeleted BOOLEAN DEFAULT False,
    PRIMARY KEY (Email)
);

INSERT INTO Users (Email) VALUES ('sushant87@gmail.com');
INSERT INTO Users (Email, IsDeleted) VALUES ('khushboo.sewak@gmail.com', True);