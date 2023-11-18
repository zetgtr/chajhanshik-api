$(document).ready(()=>{
    const devicesNode = $('#devices')
    let chart
    function setDataDevices(){
        const metrika = JSON.parse(devicesNode.val())
        $('.metrika-device').addClass('d-none')
        const devices = [];
        const count = [];
        const colorsFull = {
            mobile: '#6c5ffc',
            desktop: '#05c3fb',
            tablet: '#e82646'
        };
        const colors = [];
        metrika.forEach(el=>{
            $('.'+el.type+"-count").text(el.users)
            devices.push(el.name)
            count.push(el.users)
            console.log(el.type)
            $('.'+el.type+'-metrika').removeClass('d-none')
            colors.push(colorsFull[el.type])
        })
        chart = setChart('device-chart',count,devices,colors)
    }
    function setChart(id,count,devices,colors) {
        const myCanvas = document.getElementById(id);
        if (chart) {
            chart.destroy();
        }
        return new Chart(myCanvas, {
            type: 'doughnut',
            data: {
                labels: devices,
                datasets: [{
                    label: 'My First Dataset',
                    data: count,
                    weight: 1,
                    backgroundColor: colors,
                    hoverOffset: 4
                }]
            }
        })
    }
    setDataDevices()

    devicesNode.on('change',()=>{
        setDataDevices()
    })
})

