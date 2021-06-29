// Escala global
const GS = 18

// Dimensiones generales del depósito
// IZQUIERDO    1
// DERECHO      0
const unidades = {
    lado: 2,
    profundidad: 2,
    filas: 4,
    calles: 35,
    niveles: 18,
    posiciones: 2520
}

/*
14 profundidades
23 niveles
1297*280
*/

const warehouse = {
    w: 24200,
    h: 7200,
}

const box = {
    w: 1297,
    h: 280,
    l: 600,
}


// Pasillo
let middleSpace = 1400
let posPlantaTop = warehouse.h + middleSpace
let gripStatus = 0
let actualDepth
let actualSide
let actualFloor
let coordinates = {}
let actualLevel
let carriedBox
let floorCoordinates
let positions = {}
let estadoDesposito = {
    libres: 0,
    ocupadas: 0
}

let stopBit = 0