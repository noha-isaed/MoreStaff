const { throws } = require('assert') ; 
const { resolve } = require('path') ; 
const newConnection = require('../server');

let connection = new newConnection.connection();
database = connection.createConnection('sql12.freemysqlhosting.net', 'sql12591370' ,'yzf7Xs16LR', 'sql12591370');

getCustomerInformation = async (customerId) => {
  console.log(customerId) ;
    var sql = `SELECT * FROM Costomer_Information WHERE customerId = ${customerId}`;
    return new Promise(function (resolve, reject) {
    database.query(sql, function (err, result) {
      if (err) {
        throw err
      }
      else {
        console.log(customerId) ;
        resolve(result);
      }
    });
  });
};


getAssignedProcessors = async (processorId) => {
    var sql = `SELECT * FROM Processors WHERE processorId = ${processorId}`;
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

getProcessorId = async (customerId, orderId) => {
    var sql = `SELECT proId FROM Requests WHERE customId = ${customerId} AND requestId = ${orderId}`;
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
getAllAssignedOrders = async (customerId) => {
    var sql = `SELECT * FROM Orders WHERE customerId = ${customerId}`;
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

addNewOrder = async (dataOrder) => {
  var sql = `INSERT INTO Orders VALUES (${dataOrder})`;
    return new Promise(function (resolve, reject) {
      database.query(sql, function (err, result) {
        if (err) {
          resolve(false);
          throw err;
        }
        else {
          resolve(`The order has been added successfully`);
        }
      });
    });
};


deleteOrder = async (customerId, orderId) => {
    var sql = `DELETE FROM Orders WHERE idOrders = ${orderId} AND customerId = ${customerId} `;
    return new Promise(function (resolve, reject) {
      database.query(sql, function (err, result) {
        if (err) {
          resolve(false);
          throw err
        }
        else {
          resolve(true);
        }
      });
    });
};
  
  
editOrder = async (customerId, idOrders, newData) => {

    var sqlToUpdateData = `UPDATE Orders SET ${newData} WHERE idOrders = ${idOrders} AND customerId = ${customerId}`
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
    getCustomerInformation ,
    getAssignedProcessors,
    getAllAssignedOrders,
    addNewOrder,
    getProcessorId,
    deleteOrder, 
    editOrder
};