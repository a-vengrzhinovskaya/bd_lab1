const multiplyer = 5

function getTable() {
    for (let number = 2; number <= 9; ++number) {
        document.write(`${multiplyer}*${number}= ${multiplyer * number}<br>`)
    }
}

getTable()