function parseCount(count) {
    let parsedCount = Number.parseInt(count);
      
    if (isNaN(parsedCount)) {
      throw parseError = new Error('Невалидное значение');
    }
    return parsedCount;
}

function validateCount(count) {
    try {
      return parseCount(count)
    } catch(parseError){
      return parseError
    }
}