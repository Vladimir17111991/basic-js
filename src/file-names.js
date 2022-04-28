const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  
if(names.length === 0){return [];}
let array = [];
let count = 1;
// let obj = {};
for(let i = 0; i < names.length; i++){
  // console.log(names.indexOf(names[i]) + " - " + names[i])
  if(array.includes(names[i])){
    // names[i] = names[i] + `(${count})`;
    names[i] = names[i] + `(${names.includes(names.indexOf(names[i])) + 1 +count})`;
    count++;
    array.push(names[i]);
  } else{
    array.push(names[i])
    count=0;
  }
}
// console.log(array)
return array;

}

module.exports = {
  renameFiles
};
// renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc'])  // ['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']
// renameFiles(['a', 'b', 'cd', 'b ', 'a(3)'])           // ['a', 'b', 'cd', 'b ', 'a(3)']
renameFiles([]); //[]