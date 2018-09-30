

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
