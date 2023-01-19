 
 const CustomerController = require("../controllers/CustomerController");
 const CraftspeopleController = require("../controllers/CraftspeopleControllers");

 const express = require('express') ; 
 const router = express.Router() ; 

 router.get("/customerInformation/:customerId", CustomerController.getCustomerInformation);
 router.get("/assignedProcessors/:customerId/:orderId", CustomerController.getAssignedProcessors); 
 router.get("/assignedOrders/:customerId", CustomerController.getAllAssignedOrders); 
 router.post("/addOrder", CustomerController.addNewOrder);
 router.delete("/deleteRow/:customerId/:orderId", CustomerController.deleteOrder);
 router.put("/editOrder/:customerId/:orderId", CustomerController.editOrder);

 router.get("/employmentInformation/:employmentId", CraftspeopleController.getEmploymentInformation);
 router.get("/personalData/:employmentId", CraftspeopleController.getPersonalData);
 router.post("/employmentInformation", CraftspeopleController.addEmploymentInformation);
 router.post("/personalData", CraftspeopleController.addPersonalData);
 router.put("/employmentInformation/:employmentId", CraftspeopleController.editEmploymentInformation);
 router.put("/personalData/:employmentId", CraftspeopleController.editPersonalData);



 module.exports = router; 