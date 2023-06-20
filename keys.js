function grabKeys(obj) {
    let keys = [];
  
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
  
    return keys;
  }

  const obj1 = {
    a:'AA',
    b:'BB',
    c:'CC'
  };
  console.log(grabKeys(obj1));