
function testMatrix() {
    
    // Creating entire matrix: 
    const matrix = [];
    for(let i = 0; i < 10; i++) {

        // Creating one array: 
        const arr = [];
        for(let j = 0; j < 20; j++) {
            const num = Math.floor(Math.random() * 100);
            arr.push(num);
        }

        // Adding the array to the matrix:
        matrix.push(arr);
    }

    // Display Matrix (regular for): 
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            document.write(matrix[i][j] + " ");
        }
        document.write("<br>");
    }
    document.write("<hr>");

    // Display Matrix (for-of): 
    for(const arr of matrix) {
        for(const num of arr) {
            document.write(num + " ");
        }
        document.write("<br>");
    }
    document.write("<hr>");

    // Display average of entire matrix (for-of):
    let sum = 0;
    let count = 0;
    for(const arr of matrix) {
        for(const num of arr) {
            sum += num;
            count++;
        }
    }
    let avg = sum / count;
    document.write("Average: " + avg + "<br>");

    // Display average of entire matrix (regular for):
    sum = 0;
    count = 0;
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j];
            count++;
        }
    }
    avg = sum / count;
    document.write("Average: " + avg + "<br>");

}

