document.getElementById("uno").onclick = () => VisualizzaDisplay("1")
document.getElementById("due").onclick = () => VisualizzaDisplay("2")
document.getElementById("tre").onclick = () => VisualizzaDisplay("3")
document.getElementById("quattro").onclick = () => VisualizzaDisplay("4")
document.getElementById("cinque").onclick = () => VisualizzaDisplay("5")
document.getElementById("sei").onclick = () => VisualizzaDisplay("6")
document.getElementById("sette").onclick = () => VisualizzaDisplay("7")
document.getElementById("otto").onclick = () => VisualizzaDisplay("8")
document.getElementById("nove").onclick = () => VisualizzaDisplay("9")
document.getElementById("zero").onclick = () => VisualizzaDisplay("0")

document.getElementById("aggiungi").onclick = () => VisualizzaDisplay("+")
document.getElementById("sottrai").onclick = () => VisualizzaDisplay("-")
document.getElementById("moltiplica").onclick = () => VisualizzaDisplay("*")
document.getElementById("divisione").onclick = () => VisualizzaDisplay("/")
document.getElementById("esponente").onclick = () => VisualizzaDisplay("**")
document.getElementById("punto").onclick = () => VisualizzaDisplay(".")

document.getElementById("clear").onclick = clearDisplay
document.getElementById("delete").onclick = deleteLast
document.getElementById("uguale").onclick = calcola
document.getElementById("posneg").onclick = posNeg


const display = document.getElementById("display")
const cron = document.getElementById("cronologia")

function VisualizzaDisplay(v) {
    display.textContent += v
}

function clearDisplay() {
    display.textContent = ""
}

function deleteLast() {
    display.textContent = display.textContent.slice(0, -1)
}

function posNeg() {
    if (display.textContent.startsWith("-")) {
        display.textContent = display.textContent.slice(1)
    } else if (display.textContent.length > 0) {
        display.textContent = "-" + display.textContent
    }
}

function addCronologia(expr, res) {
    const r = document.createElement("div")
    r.textContent = `${expr} = ${res}`
    cron.prepend(r)
}

    
function calcola() {
    const exp = display.textContent
    let risultato

    try {
        risultato = eval(exp)

        display.textContent = risultato

        requestAnimationFrame(() => {
            if (exp && !isNaN(risultato)) {
                addCronologia(exp, risultato)
            }
        })

    } catch {
        display.textContent = "Errore"
    }
}


