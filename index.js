// Write your solution in this file!
const employee = {};

function  updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployees = {...employee}; 
    newEmployees[key] = value;
    return newEmployees;
}

function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]=value;
    return employee;
}

function  deleteFromEmployeeByKey(employee, key) {
    const newEmployees = {...employee};
    delete newEmployees[key];
    return newEmployees;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}