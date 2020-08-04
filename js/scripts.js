let myChart = document.getElementById('myChart').getContext('2d');

let massPopChart = new Chart(myChart, {
  type:'bar',
  data: {
    labels:['July 31', 'Aug 1', 'Aug 2', 'Aug 3'],
    datasets:[{
      label:'cases',
      data:[
        11000, 12000, 13000, 14000, 15000
      ]
    }]
  },
  options: {}

})