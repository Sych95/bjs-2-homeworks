function cachingDecoratorNew(func) {
  let cache = [];
  
  function wrapper(...args) {
      const hash = args.join(','); // получаем правильный хэш
      let idx = cache.findIndex((item)=> item.hash === hash); // ищем элемент, хэш которого равен нашему хэшу
      if (idx !== -1 ) { // если элемент не найден
          console.log("Из кэша: " + cache[idx].value )// индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
          return "Из кэша: " + cache[idx].value;
      }
      let result = func(...args); // в кэше результата нет - придётся считать
      cache.push({'hash': hash, 'value': result }) ; // добавляем элемент с правильной структурой
      if (cache.length > 5) { 
        cache.splice(0,1) 
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
    }
  return wrapper;
  }


function debounceDecoratorNew(func, ms) {
  let check = false, count = 0;

  function wrapper (...args) {
    if(check === false) {
      check = true;
      setTimeout(() => {
        check = false;
        func(...args);
      }, ms);
    }
  }
  return wrapper;
} 

function debounceDecorator2(func,ms) {
  let check = false;

  setTimeout(()=> console.log(), 10000)

  function wrapper(...args) {
    wrapper.count += 1;
    if(check === false) {
      check = true;
      setTimeout(() => {
        check = false;
        func(...args);
      }, ms);
    }
    
  }
  wrapper.count = 0;
  return wrapper;
}