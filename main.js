const isComplete = function(entry) {
    return entry.complete;
  }
  const compareCompleteFirst = function(a, b) {
    if(isComplete(a)) {
      return -1;
    } else if(a.complete == b.complete) {
      return 0;
    } else if(isComplete(b)) {
      return 1;
    }
  }
  const compareNonCompleteFirst = function(a, b) {
    if(!isComplete(a)) {
      return -1;
    } else if(a.complete == b.complete) {
      return 0;
    } else if(!isComplete(b)) {
      return 1;
    }
  }
  const notCompleteFirst = function(todo) {
    const sorted = [...todo];
    return sorted.sort(compareNotCompleteFirst);
  }