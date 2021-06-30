const { profundidad, niveles } = unidades

let div_container = document.getElementById('container')
let container_anterior = document.getElementById('boxes-anterior')



//@@ DIBUJAR VISTA ANTERIOR
const drawWarehouse = () => {
    flush(container_anterior)


    // CREAR CAJAS
    for (let j = 0; j < niveles; j++) {

        for (let i = 0; i < profundidad; i++) {

            // PROPS DE CAJAS
            let boxEl = document.createElement('div')
            boxEl.addEventListener('click', boxClic)
            let id = `N${j + 1}P${i + 1}`
            boxEl.nivel = j + 1
            boxEl.profundidad = i + 1
            boxEl.id = id
            boxEl.classList.add('box')
            // Pintado segun estado
            if (positions[id].state == 'full') {
                boxEl.classList.add('state-full')
            } else {
                boxEl.classList.add('state-empty')
            }


            // COORDENADAS DE LAS CAJAS EN CANVAS
            boxEl.style.zIndex = 100
            boxEl.style.width = `${box.w / GS}px`
            boxEl.style.height = `${box.h / GS}px`
            // POSICION DESDE IZQUIERDA
            boxEl.style.left = `${(3595 + i * 1407) / GS}px`
            // POSICION DESDE TOP 
            boxEl.style.top = `${(772 + j * 404) / GS}px`
            container_anterior.appendChild(boxEl)
        }
    }
}

const genRandomPositions = () => {
    // genera todas las IDs del objeto JSON 
    // Aleatoriamente asigna posiciones ocupadas con tiempo de alm.
    let state = 'empty'
    let time = null
    for (let j = 0; j < niveles; j++) {
        for (let p = 0; p < profundidad; p++) {
            let id = `N${j + 1}P${p + 1}`
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
