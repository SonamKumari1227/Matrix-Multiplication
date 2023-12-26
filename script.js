function multiplyMatrices() {
    // Get input values
    const matrixARows = parseInt(document.getElementById("matrixARows").value);
    const matrixAColumns = parseInt(document.getElementById("matrixAColumns").value);
    const matrixBRows = parseInt(document.getElementById("matrixBRows").value);
    const matrixBColumns = parseInt(document.getElementById("matrixBColumns").value);

    // Validate input
    if (isNaN(matrixARows) || isNaN(matrixAColumns) || isNaN(matrixBRows) || isNaN(matrixBColumns)) {
        alert("Please enter valid numbers for matrix dimensions.");
        return;
    }

    // Check if matrices can be multiplied
    if (matrixAColumns !== matrixBRows) {
        alert("Matrices cannot be multiplied. The number of columns in Matrix A must be equal to the number of rows in Matrix B.");
        return;
    }

    // Get the result container
    const resultContainer = document.getElementById("result");



   
    // Clear previous result
    resultContainer.innerHTML = "";

    // Create the result matrix
    const resultMatrix = [];
    for (let i = 0; i < matrixARows; i++) {
        resultMatrix[i] = [];
        for (let j = 0; j < matrixBColumns; j++) {
            resultMatrix[i][j] = 0;
            for (let k = 0; k < matrixAColumns; k++) {
                // Multiply and accumulate the values
                resultMatrix[i][j] += getValue("A", i, k) * getValue("B", k, j);
            }
        }
    }

    // Display the result
    resultContainer.innerHTML = "<h2>Result Matrix</h2>";
    const table = document.createElement("table");
    for (let i = 0; i < matrixARows; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < matrixBColumns; j++) {
            const cell = document.createElement("td");
            cell.textContent = resultMatrix[i][j];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    resultContainer.appendChild(table);
}

function getValue(matrix, row, col) {
    return parseInt(prompt(`Enter value for Matrix ${matrix} at position (${row + 1}, ${col + 1}):`)) || 0;
    
}
