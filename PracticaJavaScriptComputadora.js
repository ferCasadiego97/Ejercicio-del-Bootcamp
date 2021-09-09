
const randomNum = (min, max) => { 
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function Computadora({ ram, cpu, disco, monitor, gpu }) {
    this.ram = ram;
    this.cpu = cpu;
    this.disco = disco;
    this.monitor = monitor;
    this.gpu = gpu;
}

const marcas = ["Samsung", "Asus", "LG", "Phillip"];
const maxMarcas = marcas.length - 1;

let computadoras = [
    new Computadora({
        ram: randomNum(512, 1024) + " MB",
        cpu: randomNum(1, 2) == 1 ? "Intel" : "Amd",
        disco: randomNum(512, 1024) + " GB",
        monitor: marcas[randomNum(0, maxMarcas)],
        gpu: randomNum(1, 2) == 1,
    }),
    new Computadora({
        ram: randomNum(512, 1024) + " MB",
        cpu: randomNum(1, 2) == 1 ? "Intel" : "Amd",
        disco: randomNum(512, 1024) + " GB",
        monitor: marcas[randomNum(0, maxMarcas)],
        gpu: randomNum(1, 2) == 1,
    }),
    new Computadora({
        ram: randomNum(512, 1024) + " MB",
        cpu: randomNum(1, 2) == 1 ? "Intel" : "Amd",
        disco: randomNum(512, 1024) + " GB",
        monitor: marcas[randomNum(0, maxMarcas)],
        gpu: randomNum(1, 2) == 1,
    }),
    new Computadora({
        ram: randomNum(512, 1024) + " MB",
        cpu: randomNum(1, 2) == 1 ? "Intel" : "Amd",
        disco: randomNum(512, 1024) + " GB",
        monitor: marcas[randomNum(0, maxMarcas)],
        gpu: randomNum(1, 2) == 1,
    }),
    new Computadora({
        ram: randomNum(512, 1024) + " MB",
        cpu: randomNum(1, 2) == 1 ? "Intel" : "Amd",
        disco: randomNum(512, 1024) + " GB",
        monitor: marcas[randomNum(0, maxMarcas)],
        gpu: randomNum(1, 2) == 1,
    }),
];





console.log({computadoras});

const computadorasConGpu = computadoras.filter(computadora => computadora.gpu);

console.log({computadorasConGpu});


const calcularLitrosNafta = kilimetros => 2 * kilimetros / 100; 

const litrosPorKilometros = calcularLitrosNafta(500);

const calcularPrecioRecorrido = (litros, precio) => litros * precio;

console.log(calcularPrecioRecorrido(litrosPorKilometros,200))