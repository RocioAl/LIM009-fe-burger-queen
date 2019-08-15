const validate = (number) => {
    if(number<=9){
      number ="0"+number;
    }
    return number 
  }

export const systemDate = (fullDate )=>{
    const getDate = validate(fullDate.getDate());
    const getMonth = validate(fullDate.getMonth()+1);
    const getFullYear = fullDate.getFullYear()
    
    const minutes =  validate(fullDate.getMinutes());
    const seconds =  validate(fullDate.getSeconds());
    let  hours = validate(fullDate.getHours());
    
    const myClock = `${hours}:${minutes}:${seconds}`;
    const day = `${getDate}/${getMonth}/${getFullYear}`;
    const date = `${day} - ${myClock}`
    return date;  
  }