/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
function factorial(num) {
  if (num === -1 || num === '') {
    console.log('please input positive number');
  } else if (num === 0 || num === 1) { return 1; }

  for (let i = num - 1; i >= 1; i--) {
    num *= i;
    console.log(num);
  }
  console.log(num);
  return num;
}
