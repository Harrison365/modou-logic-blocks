// const mobileDisplayKeystrokes = (word) => {
//   // work your magic here...
//   const oneStroke = [
//     "0",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "*",
//     "#",
//   ];
//   const twoStrokes = ["a", "d", "g", "j", "m", "p", "t", "w"];
//   const threeStrokes = ["b", "e", "h", "k", "n", "q", "u", "x"];
//   const fourStrokes = ["c", "f", "i", "l", "o", "r", "v", "y"];
//   let count = 0;
//   for (let i of word) {
//     if (oneStroke.includes(i)) {
//       count++;
//     } else if (twoStrokes.includes(i)) {
//       count += 2;
//     } else if (threeStrokes.includes(i)) {
//       count += 3;
//     } else if (fourStrokes.includes(i)) {
//       count += 4;
//     } else {
//       count += 5;
//     }
//   }
//   return count;
// };

const mobileDisplayKeystrokes = (word) => {
  // work your magic here...
  const refObj = {
    0: 1,
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
    6: 1,
    7: 1,
    8: 1,
    9: 1,
    "*": 1,
    "#": 1,
    a: 2,
    d: 2,
    g: 2,
    j: 2,
    m: 2,
    p: 2,
    t: 2,
    w: 2,
    b: 3,
    e: 3,
    h: 3,
    k: 3,
    n: 3,
    q: 3,
    u: 3,
    x: 3,
    c: 4,
    f: 4,
    i: 4,
    l: 4,
    o: 4,
    r: 4,
    v: 4,
    y: 4,
    s: 5,
    z: 5,
  };

  let count = 0;
  for (let i of word) {
    count += refObj[i];
  }
  return count;
};

module.exports = { mobileDisplayKeystrokes };
