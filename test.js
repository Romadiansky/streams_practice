

function mode(arr) {

  var counter = [];
  var unique = [];

  for (var i = 0; i < arr.length; i++) {
    var repeats = false
    for (var x = 0; x < unique.length; x ++) {
      if (arr[i] == unique[x]) {
        repeats = true;
      }
    }
    if (!repeats) {
      unique.push(arr[i]);
    }
  }

  for (var y = 0; y < unique.length; y++) {
    var count = 0;
    for (var z = 0; z < arr.length; z++) {
      if (unique[y] == arr[z]) {
        count += 1;
      }
    }
    counter.push(count);
  }

  var maxFreq = counter[0];
  var maxIndex = 0;
  for (var c = 0; c < counter.length; c++) {
    if (counter[c] > maxFreq) {
      maxFreq = counter[c];
      maxIndex = c;
    }
  }
  return unique[maxIndex];
}

console.log(mode(arr));

// Brian code below:

// function mode(arr) {
//     // new object to store our occurrence counts of each number
//     counts = {}

//     // go through all the numbers in the input array
//     for (var i = 0; i<arr.length; i++){
//         // cache the number we're looking at
//         var num = arr[i];

//         // if we have never seen this number before, set its count to 0 so that we can add to it
//         if (counts[num] === undefined) {
//             counts[num] = 0;
//         }

//         // add 1 to the number of times that we have seen this number
//         counts[num] += 1;
//     }
//     //console.log(counts);

//     // go through all of the elements in the count object
//     var highestNumberCount = 0;
//     var highestNumber = 0;
//     for (e in counts) {
//         //console.log(e + ' occurs ' + counts[e] + ' times');
//         if (counts[e] > highestNumberCount) {
//             highestNumberCount = counts[e];
//             highestNumber = e;
//         }
//     }
//     return highestNumber;
// }
// console.log(mode([4,1,4,3,5,3,4]));
// }


// console.log(mode());