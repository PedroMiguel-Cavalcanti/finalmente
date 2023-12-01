document.addEventListener('DOMContentLoaded', function () {
    var filterSelect = document.getElementById('filtro');

// Define datasets for variations
var variation1 = {
    data1: {
        tipo: 'bar',
        labels: ["Label 1", "Label 2", "Label 3"],
        datasets: [{
            label: "Dados 1 - Variação 1",
            data: [30, 50, 20],
            backgroundColor: ["red", "green", "blue"],
        }]
    },
    data2:{
        tipo: 'pie',
        labels: ["A", "B", "C"],
        datasets: [{
            label: "Dados 2 - Variação 1",
            data: [10, 20, 30],
            backgroundColor: ["orange", "purple", "cyan"],
        }]
    }
};

var variation2 = {
    data1: {
        tipo: 'bar',
        labels: ["Label 1", "Label 2", "Label 3"],
        datasets: [{
            label: "Dados 1 - Variação 2",
            data: [50, 10, 20],
            backgroundColor: ["red", "green", "blue"],
        }]
    },
    data2:{
        tipo: 'pie',
        labels: ["A", "B", "C"],
        datasets: [{
            label: "Dados 2 - Variação 2",
            data: [30, 40, 30],
            backgroundColor: ["orange", "purple", "cyan"],
        }]
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
var myChart1 = criarGrafico(ctx1, variation1.data1);
var myChart2 = criarGrafico(ctx2, variation1.data2);

// Add event listener to filter change
filterSelect.addEventListener('change', function () {
    // Update selected variation based on the selected filter
    var selectedFilter = filterSelect.value;

    if (selectedFilter === 'filtro1') {
        selectedVariation = variation1.data1;
         myChart1.destroy();
         myChart2.destroy();
         myChart1 = criarGrafico(ctx1, variation1.data1);
         myChart2 = criarGrafico(ctx2, variation1.data2);
    } else if (selectedFilter === 'filtro2') {
        selectedVariation = variation2.data1;
         myChart1.destroy();
         myChart2.destroy();
         myChart1 = criarGrafico(ctx1, variation2.data1);
         myChart2 = criarGrafico(ctx2, variation2.data2);
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