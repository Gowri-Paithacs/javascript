//Print a spiral matrix 
let n = 3;
function spiralMatrix(n) {
    let matrix = [];
    for (let i = 0; i < n; i++) {
        matrix.push([]);
    }
    let startRow = 0;
    let endRow = n - 1;
    let startCol = 0;
    let endCol = n - 1;
    let value = 1;
    while (startRow <= endRow && startCol <= endCol) {
        // Left to Right
        for (let col = startCol; col <= endCol; col++) {
            matrix[startRow][col] = value++;
        }
        startRow++;
        // Top to Bottom
        for (let row = startRow; row <= endRow; row++) {
            matrix[row][endCol] = value++;
        }
        endCol--;
        // Right to Left
        if (startRow <= endRow) {
            for (let col = endCol; col >= startCol; col--) {
                matrix[endRow][col] = value++;
            }
            endRow--;
        }
        // Bottom to Top
        if (startCol <= endCol) {
            for (let row = endRow; row >= startRow; row--) {
                matrix[row][startCol] = value++;
            }
            startCol++;
        }
    }
    return matrix;
}
let result = spiralMatrix(n);
for (let row of result) {
    console.log(row.join(" "));
}