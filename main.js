var dists = Object.keys(covidData)
var distSet = new Set(dists)

const sb = document.querySelector('#exampleFormControlSelect1')

for (var i = 0; i < dists.length; i++) {
    let newOption = new Option(dists[i].toString(), dists[i].toString())
    sb.add(newOption, undefined)
}

function chart(obj,label){
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Object.keys(obj),
            datasets: [{
                label: label,
                borderColor: 'rgb(255, 99, 132)',
                data: Object.values(obj),
                fill:false,
                lineTension:0
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function fnc() {
    var x = sb.value;
    chart(covidData[x],x)
  
}