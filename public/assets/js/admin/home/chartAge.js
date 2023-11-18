$(document).ready(()=>{
    const ageNode = $('#age')
    let chart
    let metrikaAge = document.getElementById('age-template').content.children[0].cloneNode(true)
    let metrikaAgeContainer = $('.toby-age-container')
    function setDataAge(){
        const metrika = JSON.parse(ageNode.val())
        console.log(metrikaAgeContainer)
        metrikaAgeContainer.html("")
        const age = [];
        const count = [];
        const colorsFull = [
            '#e82646',
            '#a100ff',
            '#6c5ffc',
            '#0020ec',
            '#05c3fb',
            '#7bf800',
        ]
        const colors = [];
        metrika.forEach((el,key)=>{
            age.push(el.name)
            count.push(el.count)
            colors.push(colorsFull[key])

            let metrikaAgeNode = $(metrikaAge).clone()

            metrikaAgeNode.find('.text-age').text(el.name)
            metrikaAgeNode.find('.age-count').text(el.count)
            metrikaAgeContainer.append(metrikaAgeNode)
        })
        chart = setChart('age-chart',count,age,colors)
    }
    function setChart(id,count,age,colors) {
        const myCanvas = document.getElementById(id);
        if (chart) {
            chart.destroy();
        }
        return new Chart(myCanvas, {
            type: 'doughnut',
            data: {
                labels: age,
                datasets: [{
                    data: count,
                    weight: 1,
                    backgroundColor: colors,
                    hoverOffset: 4
                }]
            }
        })
    }
    setDataAge()

    ageNode.on('change',()=>{
        setDataAge()
    })
})

