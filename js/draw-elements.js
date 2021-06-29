const { lado, profundidad, calles, niveles } = unidades

let div_container = document.getElementById('container')
let container_anterior = document.getElementById('boxes-anterior')
let bodyCSS = document.body


const drawStorageInit = () => {


}

//@@ DIBUJAR VISTA ANTERIOR
const drawWarehouse = (side, depth) => {
    // DERECHA      0
    // IZQUIERDA    1

    flush(container_anterior)
    actualDepth = depth
    actualSide = side
    let aOmitir = [];

    // CREAR CAJAS
    for (let j = 0; j < niveles; j++) {

        let correction = 0

        for (let i = 0; i < calles; i++) {



            let boxEl = document.createElement('div')
            boxEl.addEventListener('click', boxClic)
            let id = `L${side}N${j + 1}C${i + 1}P${depth}`
            boxEl.lado = side
            boxEl.nivel = j + 1
            boxEl.calle = i +1 
            boxEl.profundidad = depth
            boxEl.id = id
            boxEl.classList.add('box')
            // Pintado segun estado
            if (positions[id].state == 'full') {
                boxEl.classList.add('state-full')
            } else {
                boxEl.classList.add('state-empty')
            }

            boxEl.style.zIndex = 100
            boxEl.style.width = `${box.w / GS}px`
            boxEl.style.height = `${box.h / GS}px`
            boxEl.style.left = `${(3595 + correction + i * 498.5) / GS}px`
            boxEl.style.top = `${(6256.5553 - j * 303.2) / GS}px`
            container_anterior.appendChild(boxEl)
        }
    }
}

const genRandomPositions = () => {
    // genera todas las IDs del objeto JSON 
    // Aleatoriamente asigna posiciones ocupadas con tiempo de alm.
    let state = 'empty'
    let time = null
    for (let l = 0; l < lado; l++) {
        for (let j = 0; j < niveles; j++) {
            for (let p = 0; p < profundidad; p++) {
                for (let i = 0; i < calles; i++) {
                    let id = `L${l}N${j + 1}C${i + 1}P${p + 1}`
                    if (randomBoolean()) {
                        state = 'full';
                        time = Number((Date.now() - Math.random() * 30 * 86400000).toFixed())
                    } else {
                        state = 'empty'
                        time = null
                    }
                    let pos = {
                        state,
                        time,
                    };
                    positions[id] = pos
                }
            }
        }
    }
}

const initiateCoords = () => {

    for (let l = 0; l < lado; l++) {

        for (let j = 0; j < niveles; j++) {

            let correction = 0

            for (let i = 0; i < calles; i++) {
                if (i != 0 && i % 5 == 0) {
                    correction += 190
                }
                for (let p = 0; p < profundidad; p++) {
                    let id = `L${l}N${j + 1}C${i + 1}P${p + 1}`
                    let coords = {
                        left: 3595 + correction + i * 500,
                        top: 6256.5553 - j * 304.8,
                    }
                    coordinates[id] = coords
                }
            }
        }
    }
}
