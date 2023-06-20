function grabValues(obj){
    const values = [];

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        values.push(obj[key]);
      }
    }
  
    return values;
};

const obj1 = {
    a:'AA',
    b:'BB',
    c:'CC'
  };
  console.log(grabValues(obj1));