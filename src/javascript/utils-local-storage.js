function storeData(variableName, data){
  let stringifyArrayUsers = JSON.stringify(data);
  localStorage.setItem(variableName, stringifyArrayUsers); 
}

function getData(variableName){
  let retrievedObject = localStorage.getItem(variableName);
  let data = JSON.parse(retrievedObject)
  return data;
}
