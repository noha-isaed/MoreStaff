const { throws } = require('assert') ; 
const { resolve } = require('path') ; 
const newConnection = require('../server');


let connection = new newConnection.connection();
database = connection.createConnection('sql12.freemysqlhosting.net', 'sql12591370' ,'yzf7Xs16LR', 'sql12591370');

getEmploymentInformation = async (employmentId) => {
    var sql = `SELECT * FROM Employment_Information WHERE employeeId = ${employmentId}`;
    return new Promise(function (resolve, reject) {
    database.query(sql, function (err, result) {
      if (err) {
        throw err
      }
      else {
        resolve(result);
      }
    });
  });
};

getPersonalData = async (employmentId) => {
    var sql = `SELECT * FROM Personal_Data WHERE empId = ${employmentId}`;
    return new Promise(function (resolve, reject) {
    database.query(sql, function (err, result) {
      if (err) {
        throw err
      }
      else {
        resolve(result);
      }
    });
  });
};


addEmploymentInformation = async (employeeInfo) => {
    var sql = `INSERT INTO Employment_Information VALUES (${employeeInfo})`;
    return new Promise(function (resolve, reject) {
      database.query(sql, function (err, result) {
        if (err) {
          resolve(false);
          throw err;
        }
        else {
          resolve(`The data has been added successfully`);
        }
      });
    });
  };

  addPersonalData = async (personalData) => {
    var sql = `INSERT INTO Personal_Data VALUES (${personalData})`;
    return new Promise(function (resolve, reject) {
      database.query(sql,function (err, result) {
        if (err) {
          resolve(false);
          throw err;
        }
        else {
          resolve(`The data has been added successfully`);
        }
      });
    });
  };

  
  editEmploymentInformation = async (employmentId, newEmployeeInfo) => {
    var sqlToUpdateData = `UPDATE Employment_Information SET ${newEmployeeInfo} WHERE employeeId = ${employmentId}`
    return new Promise(function (resolve, reject) {
      database.query(sqlToUpdateData, function (err, result) {
        if (err) {
          throw err
        }
        else {
          resolve(result);
        }
      });
    });
  };
  

  editPersonalData = async (employmentId, newPersonalData) => {
    var sqlToUpdateData = `UPDATE Personal_Data SET ${newPersonalData} WHERE empId = ${employmentId}`
    return new Promise(function (resolve, reject) {
      database.query(sqlToUpdateData, function (err, result) {
        if (err) {
          throw err
        }
        else {
          resolve(result);
        }
      });
    });
  };


  module.exports = {
    getEmploymentInformation,
    getPersonalData,
    addEmploymentInformation,
    addPersonalData,
    editEmploymentInformation,
    editPersonalData
};