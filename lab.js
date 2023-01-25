//starting array
const theList = ['Bander', 'Henderson', true, 37, null, undefined, {test: 'one', score: 55}, ['one', 'two']];

//removed the first item
theList.shift();

//removed the last item
theList.pop();

//added FIRST to the starting index
theList.unshift("FIRST");

//added MIDDLE and hello World to the 2nd and 3rd indexes
theList.splice(2, 0, "MIDDLE", "hello World");

//removed the last 4 values in the array
theList.splice(5, 4);

//removed the 4th value in the array
theList.splice(4, 1);

//added LAST to the last index
theList.push("LAST");

//printed the array to the console
console.log(theList);