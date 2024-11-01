let numinput = document.getElementById('numinput')
let runbtn = document.getElementById('run-btn')
let output = document.getElementById('output')

function runMath() {
    let num = Number(numinput.value)
    let outputHTML = ''

    if (num === 0) {
        output.innerHTML = 'Please enter a number;('
        return
    } 
    
    for (let i = 1; i <= 12; i++) {
        outputHTML += '<p>'
        outputHTML += num + ' x ' + i + ' = ' + (num*i)
        outputHTML += '</p>'
    }
    output.innerHTML = outputHTML
}

runbtn.addEventListener('click', runMath)