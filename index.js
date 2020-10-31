const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
    each: function(arr, callbackFunc) {
      Object.keys(arr).forEach((el) => {
        callbackFunc(arr[el])
        return arr
      })
      return arr
    },

    map: function(arr, callbackFunc) {
      return Object.keys(arr).map((el,ind,col) => {
        console.log(arr[el])
        callbackFunc(arr[el], ind, arr)
        return arr
      })

    },

    reduce: function(arr, callbackFunc,acc) {
        arr.reduce((acc, el) => callbackFunc(acc,el,arr),0)
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
