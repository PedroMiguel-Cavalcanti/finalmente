// Variável para armazenar o gráfico atual
var meuGrafico;

// Variável para armazenar o tipo de gráfico selecionado
var tipoGraficoSelecionado = 'bar';

// Função para gerar uma cor aleatória
function gerarCorAleatoria() {
    var letras = '0123456789ABCDEF';
    var cor = '#';
    for (var i = 0; i < 6; i++) {
        cor += letras[Math.floor(Math.random() * 16)];
    }
    return cor;
}

// Função para atualizar o tipo de gráfico selecionado
function atualizarTipoGrafico() {
    tipoGraficoSelecionado = document.getElementById('tipoGrafico').value;
    lerCSV(); // Recria o gráfico com o novo tipo
}

// Função para ler e processar o arquivo CSV
function lerCSV() {
    var inputCSV = document.getElementById('inputCSV');
    var file = inputCSV.files[0];

    if (file) {
        Papa.parse(file, {
            complete: function(result) {
                // Os dados CSV estão em result.data
                // Exemplo: console.log(result.data);

                // Mapeia os dados para o formato esperado pela função renderizarGrafico
                var dadosFormatados = result.data.map(function(row) {
                    return {
                        Label: row['Nome do Cliente'],
                        Valor: parseFloat(row['Saldo']) // Converte o saldo para número
                    };
                });

                // Chama a função para renderizar o gráfico com os dados
                renderizarGrafico(dadosFormatados);
            },
            header: true, // Assume que a primeira linha contém cabeçalhos
            dynamicTyping: true // Converte automaticamente tipos de dados
        });
    }
}

// Função para renderizar o gráfico com base nos dados fornecidos
function renderizarGrafico(dados) {
    // Se o gráfico atual existir, destrua-o antes de criar um novo
    if (meuGrafico) {
        meuGrafico.destroy();
    }

    // Extraia as labels e os dados do CSV
    var labels = dados.map(function(row) {
        return row.Label;
    });

    var valores = dados.map(function(row) {
        return row.Valor;
    });

    // Configurações do gráfico
    var configuracao = {
        type: tipoGraficoSelecionado,
        data: {
            labels: labels,
            datasets: [{
                label: 'Valores',
                data: valores,
                backgroundColor: labels.map(function() {
                    return gerarCorAleatoria();
                }),
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    // Obtém o contexto do canvas
    var contexto = document.getElementById('meuGrafico').getContext('2d');

    // Cria o gráfico
    meuGrafico = new Chart(contexto, configuracao);
}
