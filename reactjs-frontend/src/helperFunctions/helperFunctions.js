
export default function checkForDBResponse(input) {
  let isArray = input.isArray();
  let isObject = typeof input === 'object';

  if (typeof input === 'object') {
    if (input.length > 0){
      return true
    }

  } else if (typeof input === 'array') {
    if (input.length > 0) {
      return true;
    }

  } else {
    console.error("Error, invalid input not array or object")
    
  }
  return false;
}





const waitForDatabaseResponse = () => {
  if (films) {
    return true
  } else {
    return false
  }
}