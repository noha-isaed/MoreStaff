const CustomerService = require("../services/CustomerServices");
const requestResponse = require('../Core/responseHandler' ) ; 

getCustomerInformation = async(req , res , next) => {

    try {
        let customerId = req.params.customerId;

        const response = await CustomerService.getCustomerInformation(customerId);
        res
          .status(201)
          .send(requestResponse.successResponse(201, "success", response));
    }catch (err) {
        next(err) ;
    }
};
getAssignedProcessors = async(req , res , next) => {

    try {
        let customerId = req.params.customerId;
        let orderId = req.params.orderId;

        const response = await CustomerService.getAssignedProcessors(customerId, orderId);
        res
          .status(201)
          .send(requestResponse.successResponse(201, "success", response));
    }catch (err) {
        next(err) ;
    }
};

getAllAssignedOrders = async(req , res , next) => {

    try {
        let customerId = req.params.customerId;

        const response = await CustomerService.getAllAssignedOrders(customerId);
        res
          .status(201)
          .send(requestResponse.successResponse(201, "success", response));
    }catch (err) {
        next(err) ;
    }
};

addNewOrder = async (req, res, next) => {
    try {
      let tableData = req.body;

      const response = await CustomerService.addNewOrder(tableData);
      res
        .status(201)
        .send(requestResponse.successResponse(201, "success", response));
    } catch (err) {
      next(err);
    }
  };

  deleteOrder = async (req, res, next) => {
    try {
        let customerId = req.params.customerId;
        let orderId = req.params.orderId;

        console.log(orderId)

      const response = await CustomerService.deleteOrder(customerId, orderId);
      res
        .status(201)
        .send(requestResponse.successResponse(201, "success", response));
    } catch (err) {
      next(err);
    }
  };
  
  
  editOrder = async (req, res, next) => {
    try {
  
        let customerId = req.params.customerId;
        let orderId = req.params.orderId;
        let orderData = req.body;

      const response = await CustomerService.editOrder(customerId, orderId, orderData);
      res
        .status(201)
        .send(requestResponse.successResponse(201, "success", response));
    } catch (err) {
      next(err);
    }
  };
  

module.exports = {
    getCustomerInformation ,
    getAssignedProcessors,
    getAllAssignedOrders,
    addNewOrder,
    deleteOrder, 
    editOrder
};