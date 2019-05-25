const form = document.querySelector('form')
let move 
let error = document.querySelector('.error')
let alhaalla = true
let robo = document.querySelector('.robo')
console.log("ROBO: ", robo.src)

const wave = () => {
    robo.src = alhaalla ? "https://public.bc.fi/s1900008/OTTO/photos/heiluu.png" : "https://public.bc.fi/s1900008/OTTO/photos/perus.png"
  
    alhaalla = alhaalla ? false : true
    console.log(alhaalla, robo.src)
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log('click')
    let value = form.code.value
    console.log("VALUE: ", value)

    if (value === 'robotto.wave()') {

        console.log("wave")
        error.innerHTML = ''
        move = setInterval(() => {
            wave()
        }, 400)
    } else if (value === 'robotto.stop()') {
        console.log("stop")
        error.innerHTML = ''
        clearTimeout(move)
        move = null
    } else {
        console.log('ERROR!!')
        error.innerHTML = 'SYNTAX ERROR!!'
    }

})