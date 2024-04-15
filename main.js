//ushtrim1

function isIPv4Address(inputString) {
    const parts = inputString.split('.');
    if (parts.length !== 4) {
        return false;
    }

    for (let part of parts) {

        const num = parseInt(part, 10);
        if ( part.length <= 0 || typeof(num) != 'number'){
            return false;
        }

        if (num < 0 || num > 255) {
            return false;
        }
        if (part.length > 1 && part[0] === '0') {
            return false;
        }
      }
          return true;
    }

    console.log(isIPv4Address("172.16.254.1")); //TRUE
    console.log(isIPv4Address("172.316.254.1")); //false
    console.log(isIPv4Address(".245.255.1")); //false


    //ushtrim2

    function addBorder(matrix) {
        const width = matrix[0].length;
        const border = '*'.repeat(width + 2);
        const borderedMatrix = [];

     bordereMatrix.push(border);

        for (let row of matrix) {
            bordereMatrix.push('*' + row + '*');
        }
        bordereMatrix.push(border);
        return bordereMatrix;
    }



    const matrix = [
        "abc",
        "ded"
    ];

    const bordereMatrix = addBorder(matrix);
    for (let row of bordereMatrix) {
        console.log(row);
        let paratext = document.getElementById("matrix").textContent;
        var brelement = document.createElement('br');
        var textnode = document.createTextNode(row);
        var targetelement = document.getElementById("matrix");
        targetelement.appendChild(brelement);
        targetelement.appendChild(textnode);
    }