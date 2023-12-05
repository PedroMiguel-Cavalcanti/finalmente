document.addEventListener('DOMContentLoaded', function () {
    var filterSelect = document.getElementById('filtro');

// Define datasets for variations
var variation1 = {
    data1: {
        tipo: 'pie',
        labels: ["presença escolar","evasão escolar"],
        datasets: [{
            label: "taxa de evasão escolar em porcemtagem total",
            data: [62,38],
            backgroundColor: ["rgb(60, 200, 60)", "rgb(255, 120, 120)"],
        }]
    },
    data2:{
        tipo: 'pie',
        labels: ["Escola Municipal", "Escola Estadual", "Escola Federal", "Comunitária", "Confessional", "Filantrópica"],
        datasets: [{
            label: "Taxa de Evasão Escolar por tipo escolar",
            data: [12, 8, 5, 6, 4, 3],
            backgroundColor: ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082"],
        }]
    },
    data3:{
        tipo: 'bar',
        labels: ["Escola Municipal", "Escola Estadual", "Escola Federal", "Comunitária", "Confessional", "Filantrópica"],
        datasets:[{
            label: "Afrodescendentes",
            data: [25,10,18,12,30,22],
            backgroundColor: ["#FF0000"],
        },
        {
            label: "Caucasiano",
            data: [20,30,22,18,15,18],
            backgroundColor: ["#FF7F00"],
        },
        {
            label: "Indígena",
            data: [15,20,25,25,18,25],
            backgroundColor: ["#FFFF00"],
        },
        {
            label: "Mestiço",
            data: [25,15,20,30,22,15],
            backgroundColor: ["#0000FF"],
        },
        {
            label: "Asiático",
            data: [15,25,15,15,15,20],
            backgroundColor: ["#4B0082"],
        }
    ]
    }
};

var variation2 = {
    data1: {
        tipo: 'pie',
        labels: ["presença escolar","evasão escolar"],
        datasets: [{
            label: "taxa de evasão escolar em porcentagem total",
            data: [45,55],
            backgroundColor: ["rgb(60, 200, 60)", "rgb(255, 120, 120)"],
        }]
    },
    data2:{
        tipo: 'pie',
        labels: ["Escola Municipal", "Escola Estadual", "Escola Federal", "Comunitária", "Confessional", "Filantrópica"],
        datasets: [{
            label: "Taxa de Evasão Escolar por tipo escolar",
            data: [10, 5, 8, 6, 12, 14],
            backgroundColor: ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082"],
        }]
    },
    data3:{
        tipo: 'bar',
        labels: ["Escola Municipal", "Escola Estadual", "Escola Federal", "Comunitária", "Confessional", "Filantrópica"],
        datasets:[{
            label: "Afrodescendentes",
            data: [15,5,10,20,30,25],
            backgroundColor: ["#FF0000"],
        },
        {
            label: "Caucasiano",
            data: [20,15,25,15,20,30],
            backgroundColor: ["#FF7F00"],
        },
        {
            label: "Indígena",
            data: [10,25,5,25,10,10],
            backgroundColor: ["#FFFF00"],
        },
        {
            label: "Mestiço",
            data: [25,20,30,5,15,15],
            backgroundColor: ["#0000FF"],
        },
        {
            label: "Asiático",
            data: [30,35,30,35,25,20],
            backgroundColor: ["#4B0082"],
        }
    ]
    }
};
function criarGrafico(ctx, dados, tipo) {
    return new Chart(ctx, {
        type: dados.tipo,
        data: dados,
        options: options,
    });
}
// Set initial data
var selectedVariation = variation1.data1;

// Create the initial chart using the first variation
var ctx1 = document.getElementById('canvas1').getContext('2d');
var ctx2 = document.getElementById('canvas2').getContext('2d');
var ctx3 = document.getElementById('canvas3').getContext('2d');
var myChart1 = criarGrafico(ctx1, variation1.data1);
var myChart2 = criarGrafico(ctx2, variation1.data2);
var myChart3 = criarGrafico(ctx3, variation1.data3);

// Add event listener to filter change
filterSelect.addEventListener('change', function () {
    // Update selected variation based on the selected filter
    var selectedFilter = filterSelect.value;

    if (selectedFilter === 'filtro1') {
        selectedVariation = variation1.data1;
         myChart1.destroy();
         myChart2.destroy();
         myChart3.destroy();
         myChart1 = criarGrafico(ctx1, variation1.data1);
         myChart2 = criarGrafico(ctx2, variation1.data2);
         myChart3 = criarGrafico(ctx2, variation1.data3);
    } else if (selectedFilter === 'filtro2') {
        selectedVariation = variation2.data1;
         myChart1.destroy();
         myChart2.destroy();
         myChart3.destroy();
         myChart1 = criarGrafico(ctx1, variation2.data1);
         myChart2 = criarGrafico(ctx2, variation2.data2);
         myChart3 = criarGrafico(ctx3, variation2.data3);
    }

    // Update the chart with the new selected variation
    myChart1.data = selectedVariation;
    myChart1.update();
});
    // Configuração padrão para os gráficos
    var options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    });
