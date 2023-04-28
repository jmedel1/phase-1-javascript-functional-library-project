function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else if (typeof collection === 'object') {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key], key, collection);
        }
      }
    }
    return collection;
  }  
  function myMap(collection, callback) {
    let result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i], i, collection));
      }
    } else if (typeof collection === 'object') {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          result.push(callback(collection[key], key, collection));
        }
      }
    }
    return result;
  }
  function myReduce(collection, callback, initialValue) {
    let accumulator = initialValue === undefined ? undefined : initialValue;
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        accumulator = accumulator === undefined ? collection[i] : callback(accumulator, collection[i], i, collection);
      }
    } else if (typeof collection === 'object') {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          accumulator = accumulator === undefined ? collection[key] : callback(accumulator, collection[key], key, collection);
        }
      }
    }
    return accumulator;
  }
  
  function myFind(arr, predicate) {
    for (let i = 0; i < arr.length; i++) {
      if (predicate(arr[i], i, arr)) {
        return arr[i];
      }
    }
    return undefined;
  }
  function myFilter(arr, predicate) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (predicate(arr[i], i, arr)) {
        filteredArr.push(arr[i]);
      }
    }
    return filteredArr;
  }
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else if (typeof collection === 'object') {
      return Object.keys(collection).length;
    }
    return 0;
  }
  function myFirst(collection, n = 1) {
    if (n === 1) {
      return collection[0];
    } else {
      return collection.slice(0, n);
    }
  }
  function myLast(collection, n = 1) {
    if (n === 1) {
      return collection[collection.length - 1];
    } else {
      return collection.slice(-n);
    }
  }
  
  function myKeys(obj) {
    if (typeof obj === 'object') {
      return Object.keys(obj);
    }
    return undefined;
  }
  function myValues(obj) {
    if (typeof obj === 'object') {
      return Object.values(obj);
    }
    return undefined;
  }
                  