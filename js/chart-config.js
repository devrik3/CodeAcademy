const ctx = document.getElementById('myChartLine').getContext('2d');
    ctx.canvas.parentNode.style.height = '246px';
    ctx.canvas.parentNode.style.width = '376px';
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun'],
        datasets: [{
            label: 'Conversoes p/ Usuarios | 6 Meses',
            data: [41, 52, 67, 39, 48, 45],
            backgroundColor: [
                'rgb(246,249,252)',
                'rgb(246,249,252)',
                'rgb(246,249,252)',
                'rgb(246,249,252)',
                'rgb(246,249,252)',
                'rgb(246,249,252)'
            ],
            borderColor: [
                'rgb(181,98,57)',
                'rgb(181,98,57)',
                'rgb(181,98,57)',
                'rgb(181,98,57)',
                'rgb(181,98,57)',
                'rgb(181,98,57)'
            ],
            padding: [
                '.5rem'
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

 const ctxPie = document.getElementById('myChartPie').getContext('2d');
    ctxPie.canvas.parentNode.style.height = '146px';
    ctxPie.canvas.parentNode.style.width = '256px';
const myChartPie = new Chart(ctxPie, {
    type: 'pie',
    data: {
        labels: ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado', 'Domingo'],
        datasets: [{
            label: 'Dias Mais Acessados',
            data: [1982, 2180, 2120, 2259, 2140, 2338, 2370],
            backgroundColor: [
                'rgb(21,104,255, .50)', // segunda
                'rgb(1,253,34, .50)', // terca
                'rgb(181,98,57, .50)', // quarta
                'rgb(1,184,253 ,.50)', // quinta
                'rgb(35,35,46, .50)', // sexta
                'rgb(244,253,1, .50)', //sabado
                'rgb(146,23,82, .50)' // domingo
            ],
            borderColor: [
                'rgb(21,104,255, .50)',
                'rgb(1,253,34, .50)',
                'rgb(181,98,57, .50)',
                'rgb(1,184,253, .50)',
                'rgb(35,35,46, .50)',
                'rgb(244,253,1)',
                'rgb(146,23,82)'
            ],
            padding: [
                '.5rem'
            ],
            borderWidth: 2
        }]
    },
    options: {
      plugins: {
        legend: {
          display: false,
          color: 'rgba(0,0,0,0)',
        },
        title: {
          display: true,
          text: 'Acessos Diários',
        }
      }
    }
});