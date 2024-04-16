const mobileDisplayKeystrokes = (word) => {
  // work your magic here...
  const oneStroke = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "*",
    "#",
  ];
  const twoStrokes = ["a", "d", "g", "j", "m", "p", "t", "w"];
  const threeStrokes = ["b", "e", "h", "k", "n", "q", "u", "x"];
  const fourStrokes = ["c", "f", "i", "l", "o", "r", "v", "y"];
  const fiveStrokes = ["s", "z"];
  let count = 0;
  for (let i of word) {
    if (oneStroke.includes(i)) {
      console.log(i, "<<<1");
      count++;
    } else if (twoStrokes.includes(i)) {
      console.log(i, "<<<2");
      count += 2;
    } else if (threeStrokes.includes(i)) {
      console.log(i, "<<<3");
      count += 3;
    } else if (fourStrokes.includes(i)) {
      console.log(i, "<<<4");
      count += 4;
    } else if (fiveStrokes.includes(i)) {
      console.log(i, "<<<5");
      count += 5;
    }
  }
  return count;
};

module.exports = { mobileDisplayKeystrokes };
