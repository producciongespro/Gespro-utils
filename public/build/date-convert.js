export default function _dateConvert (param) {
    let arrayDate = param.split("-");
    let newDate = `${arrayDate[2]}/${arrayDate[1]}/${arrayDate[0]}`; 
    return newDate;     
};
