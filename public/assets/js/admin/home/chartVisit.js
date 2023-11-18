$(document).ready(()=>{
    const metrika = JSON.parse($('#metrika').val())
    const dates = [];
    const visits = [];
    const pageviews = [];
    const users = [];
    metrika.forEach(el=>{
        dates.push(el.date)
        visits.push(el.visits)
        pageviews.push(el.pageviews)
        users.push(el.users)
    })


    const visitsChart = setChart('visits-table',visits,dates,'Количество визитов')
    const pageviewsChart = setChart('pageviews-table',pageviews,dates,'Количество просмотров')
    const usersChart = setChart('users-table',users,dates,'Количество пользователей')
    const charts = [visitsChart,pageviewsChart,usersChart]
    function setChart(id,data,dates,text) {
        const myCanvas = document.getElementById(id);
        const myCanvasContext = myCanvas.getContext("2d");
        const gradientStroke1 = myCanvasContext.createLinearGradient(0, 80, 0, 280);
        gradientStroke1.addColorStop(0, 'rgba(108, 95, 252, 0.8)');
        gradientStroke1.addColorStop(1, 'rgba(108, 95, 252, 0.2) ');

        const gradientStroke2 = myCanvasContext.createLinearGradient(0, 80, 0, 280);
        gradientStroke2.addColorStop(0, 'rgba(5, 195, 251, 0.8)');
        gradientStroke2.addColorStop(1, 'rgba(5, 195, 251, 0.2) ');
        document.getElementById(id).innerHTML = '';
        const colors = dates.map(() => '#fff')
        colors[colors.length - 1] = "red"
        return new Chart(myCanvas, {
            type: 'line',
            data: {
                labels: dates,
                type: 'line',

                datasets: [{
                    label: text,
                    data: data,
                    backgroundColor: gradientStroke1,
                    borderColor: "#05c3fb",
                    pointBackgroundColor: colors,
                    pointHoverBackgroundColor: gradientStroke1,
                    pointBorderColor: "#05c3fb",
                    pointHoverBorderColor: gradientStroke1,
                    pointBorderWidth: 1,
                    pointRadius: 5,
                    pointHoverRadius: 5,
                    borderWidth: 3,
                    fill: 'origin',
                    cursor: 'pointer',
                    lineTension: 0.3
                }]
            },
            options: {
                elements: {
                    shadow: false // отключение теней на графике
                },

                responsive: true,
                maintainAspectRatio: false,
                onClick: function (e, activeElements) {
                    if (activeElements.length > 0) {
                        const index = activeElements[0].index;
                        const selectedDate = dates[index];

                        // Выполняйте нужные вам действия при клике на точку графика
                        console.log('Выбранный день:', selectedDate);

                        axios.post('/api/admin/get_devices',{
                            date: selectedDate
                        }).then(({data})=>{
                            $('.device-title').text("Устройства на "+selectedDate)
                            $('#devices').val(JSON.stringify(data)).trigger('change');
                        })
                        axios.post('/api/admin/get_browsers',{
                            date: selectedDate
                        }).then(({data})=>{
                            $('.title-browser').text("Браузеры на "+selectedDate)
                            $('#browser').val(JSON.stringify(data)).trigger('change');
                        })
                        axios.post('/api/admin/get_age',{
                            date: selectedDate
                        }).then(({data})=>{
                            $('.age-title').text("Возраст на "+selectedDate)
                            $('#age').val(JSON.stringify(data)).trigger('change');
                        })

                        const colors = this.data.labels.map(() => '#fff')
                        charts.forEach(el=>{
                            el.data.datasets[0].pointBackgroundColor = colors;
                            el.data.datasets[0].pointBackgroundColor[index] = 'red';
                            el.update();
                        })
                    }
                },
                plugins: {
                    legend: {
                        display: false,
                        labels: {
                            usePointStyle: false,
                        }
                    },
                    tooltip: {
                        enabled: true,
                        callbacks: {
                            label: function (context) {
                                var label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                label += context.parsed.y || '';
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        display: true,
                        grid: {
                            display: false,
                            drawBorder: false,
                            color: 'rgba(119, 119, 142, 0.08)'
                        },
                        ticks: {
                            autoSkip: true,
                            color: '#b0bac9'
                        },
                        scaleLabel: {
                            display: false,
                            labelString: 'Month',
                            fontColor: 'transparent'
                        }
                    },
                    y: {
                        ticks: {
                            min: 0,
                            max: 200,
                            stepSize: 10,
                            color: "#b0bac9",
                        },
                        display: true,
                        grid: {
                            display: true,
                            drawBorder: false,
                            zeroLineColor: 'rgba(142, 156, 173,0.1)',
                            color: "rgba(142, 156, 173,0.1)",
                        },
                        scaleLabel: {
                            display: false,
                            labelString: 'sales',
                            fontColor: 'transparent'
                        }
                    }
                },
                title: {
                    display: false,
                    text: 'Normal Legend'
                }
            }
        })
    }

})

