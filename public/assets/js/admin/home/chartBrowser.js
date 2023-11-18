$(document).ready(()=>{
    const browserNode = $('#browser')

    browserNode.on('change',()=>{
        setBrowserChart(browserNode)
    })
    setBrowserChart(browserNode)
    console.log(result);
})

function setBrowserChart(browserNode)
{
    $('.metrika-count-browser').text(0)
    $('.progress-metrika-browser').css("width",0)
    const data = JSON.parse(browserNode.val())
    calculatePercentages(data);
}
function calculatePercentages(data) {
    const totalCount = data[data.length - 1].count_browser;
    data.forEach(obj => {
        if (obj.hasOwnProperty('count')) {
            $("."+obj.name+"-count").text(obj.count)
            const percentage = (obj.count / totalCount) * 100;
            $("."+obj.name+"-progress").css("width",percentage.toFixed(1)+"%")
        }
    });

    return data;
}
