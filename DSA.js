//valid parenthesis
const isBalanced = (str, N) => {
  let stack = [];
  for (let i = 0; i < N; i++) {
    let char = str[i];

    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      if (stack.length == 0) return false;
      let temp = stack.pop();
      if (char === ")" && temp !== "(") return false;
      if (char === "]" && temp !== "[") return false;
      if (char === "}" && temp !== "{") return false;
    }
  }
  return stack.length == 0;
};

let str = "{[()]}";
// console.log(isBalanced(str, str.length)); // true

let str2 = "{[(])}";
// console.log(isBalanced(str2, str2.length)); // false

//remove duplicates

let list = [1, 5, 2, 3, 6, 3, 5, 6, 1];

console.log([...new Set(list)]);

const unique = list.filter((items, index) => list.indexOf(items) === index);

// console.log(unique)
