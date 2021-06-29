    
const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const randomBoolean = () => {
    return randomInt(0, 1)
}
const depthClic = e => {
    let id = e.target.id
    drawWarehouse(id[1], id[4])
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
    console.log("Calle: " + e.target.calle)
    console.log("Nivel: " + e.target.nivel)
    console.log("Lado: " + e.target.lado)
    console.log("Profundidad: " + e.target.profundidad)
}




const levelClic = e => {
    let id = e.target.id
    drawFloor(id.slice(3))
}

const parseID = (query, id) => {
    switch (query) {
        case 'L':
            return (id.slice(id.indexOf('L') + 1, id.indexOf('N')))
        case 'N':
            return (id.slice(id.indexOf('N') + 1, id.indexOf('C')))
        case 'C':
            return (id.slice(id.indexOf('C') + 1, id.indexOf('P')))
        case 'P':
            return (id.slice(id.indexOf('P') + 1))
    }
}

const highlightLevel = (id) => {
    document.getElementById(`lvl${id}`).classList.remove('levelBox')
    document.getElementById(`lvl${id}`).classList.add('lvl-selected')
}

const lowlightLevel = (id) => {
    document.getElementById(`lvl${id}`).classList.add('levelBox')
    document.getElementById(`lvl${id}`).classList.remove('lvl-selected')
}

const flush = container => {
    while (container.firstChild) container.removeChild(container.firstChild)
}