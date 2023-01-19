const CraftsPeopleService = require("../services/CraftspeopleServices");
const requestResponse = require('../Core/responseHandler' ) ; 

getEmploymentInformation = async(req , res , next) => {

    try {
        let employmentId = req.params.employmentId;

        const response = await CraftsPeopleService.getEmploymentInformation(employmentId);
        res
          .status(201)
          .send(requestResponse.successResponse(201, "success", response));
    }catch (err) {
        next(err) ;
    }
};



getPersonalData = async(req , res , next) => {

    try {
        let employmentId = req.params.employmentId;

        const response = await CraftsPeopleService.getPersonalData(employmentId);
        res
          .status(201)
          .send(requestResponse.successResponse(201, "success", response));
    }catch (err) {
        next(err) ;
    }
};




addEmploymentInformation = async (req, res, next) => {
    try {
      let employmentInformation = req.body;

      const response = await CraftsPeopleService.addEmploymentInformation(employmentInformation);
      res
        .status(201)
        .send(requestResponse.successResponse(201, "success", response));
    } catch (err) {
      next(err);
    }
  };

 
  addPersonalData = async (req, res, next) => {
    try {
      let personalData = req.body;

      const response = await CraftsPeopleService.addPersonalData(personalData);
      res
        .status(201)
        .send(requestResponse.successResponse(201, "success", response));
    } catch (err) {
      next(err);
    }
  };

  
  editEmploymentInformation = async (req, res, next) => {
    try {
  
        let employmentId = req.params.employmentId;
        let employmentInformation = req.body;
  
      const response = await CraftsPeopleService.editEmploymentInformation(employmentId, employmentInformation);
      res
        .status(201)
        .send(requestResponse.successResponse(201, "success", response));
    } catch (err) {
      next(err);
    }
  };



    
  editPersonalData = async (req, res, next) => {
    try {
  
        let employmentId = req.params.employmentId;
        let personalData = req.body;
  
      const response = await CraftsPeopleService.editPersonalData(employmentId, personalData);
      res
        .status(201)
        .send(requestResponse.successResponse(201, "success", response));
    } catch (err) {
      next(err);
    }
  };
  

module.exports = {
    getEmploymentInformation,
    getPersonalData,
    addEmploymentInformation,
    addPersonalData,
    editEmploymentInformation,
    editPersonalData
};