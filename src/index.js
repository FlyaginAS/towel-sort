// You should implement your task here.
// Your task is to implement the so-called 'towel sort' algorithm.
// towelSort function should expect matrix of any shape for example:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ],
// ]
// Following matrix should be 'sorted' to:
// [1, 2, 3, 6, 5, 4, 7, 8, 9 ]

module.exports = function towelSort(matrix) {
  // я могу заюзать алгоритим обходпа матрицы змейкой - как из лекции РССкул Антона Белого
  // для четных строки слева направо, для нечетных справа налево
  // Should return empty array if no params passed:
  if (arguments.length === 0) {
    return [];
  }

  const result = [];

  for (let i = 0; i < matrix.length; i += 1) {
    // const row = [];

    if (i % 2 === 0) {
      for (let j = 0; j < matrix[i].length; j += 1) {
        // row.push(matrix[i][j]);
        result.push(matrix[i][j]);
      }
    } else {
      for (let j = matrix[i].length - 1; j > -1; j -= 1) {
        // row.push(matrix[i][j]);
        result.push(matrix[i][j]);
      }
    }

    // result.push(row);
  }

  return result;
};

// function towelSort(matrix) {
//     //я могу заюзать алгоритим обходпа матрицы змейкой - как из лекции РССкул Антона Белого
//     // для четных строки слева направо, для нечетных справа налево
//     const result = [];

//     for (let i = 0; i < matrix.length; i++) {
//         // const row = [];

//         if (i % 2 === 0) {
//             for (let j = 0; j < matrix[i].length; j++) {
//                 // row.push(matrix[i][j]);
//                 result.push(matrix[i][j]);
//             }
//         } else {
//             for (let j = matrix[i].length - 1; j > -1; j--) {
//                 // row.push(matrix[i][j]);
//                 result.push(matrix[i][j]);
//             }
//         }

//         // result.push(row);
//     }

//     return result;
// }

// console.log(
//     towelSort([
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9],
//     ])
// );
