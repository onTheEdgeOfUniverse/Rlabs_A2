// const express = require("express");
// const app = express();
// app.listen(8000);
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
positions = [];
readline.question(`Enter the knight initaial position`, (pos) => {
  function getNext(ch, inc, row_inc) {
    let nextLetter = String.fromCharCode(ch.charCodeAt(0) + inc);
    if (nextLetter > "a" && nextLetter < "h") {
      positions.push(
        nextLetter.concat(parseInt(row) - row_inc),
        "-->",
        nextLetter.concat(parseInt(row) + row_inc),
        "--->"
      );
    }
    // return nextLetter;
  }
  row = pos[2];
  col = pos[1];
  //   //   console.log(row,col);
  //   //   var pos_itr={1:};
  // //   console.log(
  getNext(pos[1], 2, 1),
    getNext(pos[1], -2, 1),
    getNext(pos[1], +1, 2),
    getNext(pos[1], -1, 2);
});
// app.get("/", (req, res) => {
//   res.send(positions);
// });
