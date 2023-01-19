const {count } = require("console") ; 
const CraftspeopleRepositories = require("../repositories/CraftspeopleRepositories") ; 
const fs = require('fs') ; 

getEmploymentInformation = async (employmentId) => {
    return await CraftspeopleRepositories.getEmploymentInformation(employmentId);
};

getPersonalData = async (employmentId) => {
    return await CraftspeopleRepositories.getPersonalData(employmentId);
};


addEmploymentInformation = async (tableData) => {

 const employeeInfo = `${tableData.employeeId}, "${tableData.employees_at}", "${tableData.employment_status}", 
  "${tableData.type_of_employee}", ${tableData.hours}, "${tableData.start_date}", "${tableData.setting_status}" , ${tableData.img} , "${tableData.eliminated_om} "
  , "${tableData.remark}", "${tableData.exc_procedures}"`;

    return await CraftspeopleRepositories.addEmploymentInformation(employeeInfo);
};

addPersonalData = async (tableData) => {

const personalData = `${tableData.dataId}, ${tableData.empId}, "${tableData.track}", "${tableData.speech}", 
  "${tableData.middleName}", "${tableData.sumame}", "${tableData.street}", ${tableData.zipCode} , "${tableData.fixed}" , ${tableData.mobile}
  , "${tableData.email}", ${tableData.social_securety_number}  , "${tableData.nationality}" , "${tableData.residenceTitle}" , 
  "${tableData.work_permit}" , "${tableData.app_for_asylumvisa}"`;

    return await CraftspeopleRepositories.addPersonalData(personalData);
};


editEmploymentInformation = async (employmentId, employmentInformation) => {

  const newEmployeeINfo = `employeeId = ${employmentInformation.employeeId}, employees_at = "${employmentInformation.employees_at}", employment_status = "${employmentInformation.employment_status}", 
  type_of_employee = "${employmentInformation.type_of_employee}", hours = ${employmentInformation.hours}, start_date = "${employmentInformation.start_date}", setting_status = "${employmentInformation.setting_status}" ,
  img = ${employmentInformation.img} ,eliminated_om =  "${employmentInformation.eliminated_om} ", remark= "${employmentInformation.remark}", exc_procedures= "${employmentInformation.exc_procedures}"`;

    return await CraftspeopleRepositories.editEmploymentInformation(employmentId, newEmployeeINfo);
  
  };


  editPersonalData = async (employmentId, personalData) => {
 
    const newPersonalData = `dataId = ${personalData.dataId}, empId = ${personalData.empId}, track= "${personalData.track}", speech = "${personalData.speech}", 
    middleName= "${personalData.middleName}",sumame= "${personalData.sumame}", street = "${personalData.street}",zipCode=  ${personalData.zipCode} , fixed= "${personalData.fixed}" ,
    mobile= ${personalData.mobile}, email = "${personalData.email}", social_securety_number = ${personalData.social_securety_number}  , nationality ="${personalData.nationality}" , 
    residenceTitle = "${personalData.residenceTitle}" ,work_permit = "${personalData.work_permit}" , app_for_asylumvisa ="${personalData.app_for_asylumvisa}"`;

    return await CraftspeopleRepositories.editPersonalData(employmentId, newPersonalData);
  
  };


  module.exports = {
    getEmploymentInformation,
    getPersonalData,
    addEmploymentInformation,
    addPersonalData,
    editEmploymentInformation,
    editPersonalData
};

