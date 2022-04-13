// For Creation of database



// con.connect(function(err) {
//     if (err) throw err;
//     con.query("CREATE DATABASE studentDB", function (err, result) {
//       if (err) throw err;
//       console.log('created');
//     });
// });

// For Creation of Tables

// con.connect(function(err) {
//     if (err) throw err;
//     con.query(`CREATE TABLE student(
//             rollno VARCHAR(30) PRIMARY KEY,
//             name VARCHAR(40),
//             semester INT,
//             branch VARCHAR(10),
//             gender VARCHAR(20),
//             dob VARCHAR(20),
//             email VARCHAR(50)

//         );`, function (err, result) {
//       if (err) throw err;
//       console.log('created');
//     });
// });

// INSERT into Tables
// con.connect(function (err) {
//     if (err) throw err;
//     con.query(
//       `INSERT INTO student VALUES 
//       ('2001023','HARSH RASTOGI',4,'CSE','MALE','2002-12-15 ','harsh.cse.2001023@iiitbh.ac.in')`,
//       function (err, result, fields) {
//         if (err) throw err;
//         console.log(result);
//       }
//     );
//   });