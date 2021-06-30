    
const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const randomBoolean = () => {
    return randomInt(0, 1)
}

const boxClic = e => {

    let id = e.target.id
    let t = positions[id].time
    let time
    if (e.altKey) {
        if (positions[id].state == 'full') {
            vaciar(id)
        } else {
            llenar(id)
        }
        return
    }
    // console.log("Calle: " + e.target.calle)
    console.log("Nivel: " + e.target.nivel)
    // console.log("Lado: " + e.target.lado)
    console.log("Profundidad: " + e.target.profundidad)
}

const flush = container => {
    while (container.firstChild) container.removeChild(container.firstChild)
}