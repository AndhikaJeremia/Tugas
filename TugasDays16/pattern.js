function patternClick () {
    let input = 4
    let p = document.getElementById('px')
    let Pattern = ""
for (let a = 0; a <= input; a++) {
    for (let b = 0; b < 5 - a - 1; b++) {
        Pattern = Pattern + " &nbsp&nbsp"
    }
    for (let c = 0; c < a * 2 + 1; c++) {
        if ( c === 3 && a === 4) {
            Pattern += ' 4 3 2 1 0 1 2 3 4'
        }else if (c === 2 && a === 3) {
            Pattern += ' 3 2 1 0 1 2 3'
        }else if (c === 1 && a === 2) {
            Pattern += ' 2 1 0 1 2'
        }else if (c === 0 && a === 1) {
            Pattern += ' 1 0 1'
        }else if (c === 0 && a === 0){
            Pattern += ' 0'
        }
    }
    Pattern = Pattern + "<br>"
}
p.innerHTML = Pattern
}