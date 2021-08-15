function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    /* if last recursion, the array starts the chain back up the recursion tree
    or returns correctly if initial numbers are same */
    return [endNum];
  } else {
    /* increments startNum by 1 for next recursion until both are equal
    ALSO, constArray is why the array has the endNum in it even though
    base case does not name the array: constArray is not the name of the
    array, it is the recursion that builds an unnamed array until
    the first recursion returns the value of itself, the completed
    unnamed array :mindblown:
    it took me ages to realize that's why this works, helped by
    http://pythontutor.com/javascript.html#mode=display via
    https://forum.freecodecamp.org/t/help-with-recursive-arrays/326343/4
    when desperately trying to understand why my solution worked at all
    because I did *not* understand why it passed the tests */
    const constArray = rangeOfNumbers(startNum + 1, endNum);
    /* builds array "backwards" starting with last recursion where numbers
    are equal, then calls each recursion to unshift() currennt startNum
    until the first recursion returns the startNum
    to the beginning of constArray */
    constArray.unshift(startNum);
    return constArray;
  }
};
