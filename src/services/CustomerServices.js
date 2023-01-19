const {count } = require("console") ; 
const CustomerRepositories = require("../repositories/CustomerRepositories") ; 

const fs = require('fs') ; 

getCustomerInformation = async (customerId) => {
    return await CustomerRepositories.getCustomerInformation(customerId);
};

getAssignedProcessors = async (customerId, orderId) => {
    const processorId = await CustomerRepositories.getProcessorId(customerId, orderId);
    const processor_Id = processorId[0].proId; 
    console.log(processor_Id);
    return await CustomerRepositories.getAssignedProcessors(processor_Id);
};

getAllAssignedOrders = async (customerId) => {
    return await CustomerRepositories.getAllAssignedOrders(customerId);
};

addNewOrder = async (tableData) => {
  const dataOrder = `${tableData.idOrders}, ${tableData.customerId}, "${tableData.name}", 
  "${tableData.contact}", "${tableData.editor}", "${tableData.representation}", ${tableData.existingEmployees}`

    return await CustomerRepositories.addNewOrder(dataOrder);
};

deleteOrder = async (customerId, orderId) => {
    return await CustomerRepositories.deleteOrder(customerId, orderId);
};
  
editOrder = async (customerId, orderId, orderData) => {
  
  const newData = `idOrders = ${orderData.idOrders}, customerId = ${orderData.customerId}, name = "${orderData.name}",
  contact = "${orderData.contact}", editor = "${orderData.editor}", representation = "${orderData.representation}", 
  existingEmployees= ${orderData.existingEmployees}` ; 

  return await CustomerRepositories.editOrder(customerId, orderId, newData);
  
};


module.exports = {
    getCustomerInformation ,
    getAssignedProcessors,
    getAllAssignedOrders,
    addNewOrder,
    deleteOrder, 
    editOrder
};

