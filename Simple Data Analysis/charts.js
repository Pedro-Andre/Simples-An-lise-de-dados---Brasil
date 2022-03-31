//Population Chart Setup & Data
const populationData = {
    labels: ['Ano de 2015',
        'Ano de 2016',
        'Ano de 2017',
        'Ano de 2018',
        'Ano de 2019',
        'Ano de 2020',
        'Ano de 2021'],

    datasets: [{
        label: ["População residente estimada - Brasil"],
        data: [204, 206, 207, 208, 210, 211, 213],
        fill: true,
        backgroundColor: 'rgba(0, 255, 255, 0.2)',
        borderColor: 'rgb(0, 200, 235)',
        borderWidth: 2,
        pointBackgroundColor: 'aqua', //cor dos pontos no gráfico
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: 'yellow'
    },
    ],
};

//Population Chart Config
let delayed;

const populationConfig = {
    type: 'radar',
    data: populationData,
    options: {
        color: '#8fff98',
        hitRadius: 30,
        responsive: true,
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                let delay = 0;
                if (context.type === "data" && context.mode === "default" && !delayed) {
                    delay = context.dataIndex * 150 + context.datasetIndex * 100;
                }
                return delay;
            },
        },
        scales: {
            r: {
                pointLabels: {
                    color: '#8fff98'
                },
                grid: {
                    color: '#0000ff40'
                },
                ticks: {
                    display: false
                },
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    footer: (context) => {
                        return 'Milhões'
                    }
                },
                backgroundColor: '#00ffff30',
                padding: '12',
                cornerRadius: '10',
            },
        },
    },
};

//Population Chart Render
const populationChart = new Chart(
    document.getElementById("populationChart"),
    populationConfig,
);

//PIB Chart Setup & Data
const pibData = {
    labels: ['2014', '2015', '2016', '2017', '2018', '2019'], // "Labels" = texto/valores indicativo que ficam na parte horizontal inferior do gráfico
    datasets: [{
        data: [28648.74, 29466.85, 30558.75, 31843.95, 33593.82, 35161.70], // valores que ficam na parte esquerda vertical do gráfico
        label: 'PIB per capita: Evolução Anual - Brasil', // "Label" = texto e/ou nome do gráfico que fica na parte superior
        fill: true,
        backgroundColor: 'rgba(0, 255, 255, 0.2)',
        borderColor: '#03fcd3',
        borderWidth: 1.4,
        borderColor: 'rgb(0, 200, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: 'yellow'
    }]
};

//PIB Chart Config 
const pibConfig = {
    type: 'line',
    data: pibData,
    options: {
        color: '#8fff98',
        radius: 3, // altera o tamanho dos pontos no gráfico
        hitRadius: 30, // cria um ponto de aproximação nos pontos para revelar a informação sem precisar passar o cursos diretamente nos pontos
        hoverRadius: 5, // aumenta o tamanho dos pontos ao passar o cursor do mouse sobre eles
        responsive: true,
        animation: { // anima o gráfico
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                let delay = 0;
                if (context.type === "data" && context.mode === "default" && !delayed) {
                    delay = context.dataIndex * 320 + context.datasetIndex * 100;
                }
                return delay;
            },
        },
        scales: {
            y: {
                grace: '5%'
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    footer: (context) => {
                        return 'R$'
                    }
                },
                backgroundColor: '#00ffff30',
                cornerRadius: '10',
            },
        },
    },
};

//PIB Chart Render 
const pibChart = new Chart(
    document.getElementById('pibChart'),
    pibConfig
);

//Comércio Chart Setup & Data
const scaleData = {
    labels: [
        'Jun 2021', 'Jul 2021', 'Ago 2021', 'Set 2021', 'Out 2021', 'Nov 2021', 'Dez 2021', 'Jan 2022'
    ],
    datasets: [{
        label: ['Comércio: Variação mês / Ajuste sazonal'],
        data: [-1.1, 3.6, -4.7, -1, 0.0, 0.4, -1.9, 0.8],
        backgroundColor: 'rgba(0, 255, 255, 0.2)',
        borderColor: 'rgb(0, 200, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: 'yellow'
    }]
};

//Scale Chart Config
const scaleConfig = {
    type: 'line',
    data: scaleData,
    options: {
        color: '#8fff98',
        radius: 3, // altera o tamanho dos pontos no gráfico
        hitRadius: 30, // cria um ponto de aproximação nos pontos para revelar a informação sem precisar passar o cursor diretamente nos pontos
        hoverRadius: 5, // aumenta o tamanho dos pontos ao passar o cursor do mouse sobre eles
        responsive: true,
        animation: { // anima o gráfico
            onComplete: () => {
                delayed = true;
            },
            delay: (context) => {
                let delay = 0;
                if (context.type === "data" && context.mode === "default" && !delayed) {
                    delay = context.dataIndex * 150 + context.datasetIndex * 100;
                }
                return delay;
            },
        },
        scales: {
            y: {
                grace: '15%'
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    footer: (context) => {
                        return 'R$'
                    }
                },
                backgroundColor: '#00ffff30',
                cornerRadius: '10',
            },
        },
    },
};

//Scale Chart Render
const comercioChart = new Chart(
    document.getElementById('comercioChart'),
    scaleConfig
);