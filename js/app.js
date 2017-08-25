
const popUp = document.getElementById('pop-up');
const hourTrafficChart= document.getElementById('hourlyChart');
const dayTrafficChart= document.getElementById('dailyChart');
const weekTrafficChart= document.getElementById('weeklyChart');
const monthTrafficChart= document.getElementById('monthlyChart');


//hour Traffic//

const hourlyChart = new Chart( hourTrafficChart, {
    type: 'line',
     data: {
        labels:['0-2', '3-5', '6-8', '9-12', '13-15', '16-18', '19-21', '22-24'], 
    
        datasets:[
      { data: [425, 550, 775, 675, 995, 1004, 1560, 2100],
       borderWidth: 1,
       tension: 0,
       radius: 4,
       borderColor: '#65cc65',
       backgroundColor: 'rgba(101, 204, 101, 0.2)',
       
       
       
      }
     ]
    },
    
    options:{
      legend: {display:false} ,
      
       
    },
    
    
});

//Daily Traffic//

const dailyChart = new Chart( dayTrafficChart, { 
     type: 'line',
     data: {
        labels:['M', 'T', 'W', 'T', 'F', 'S', 'S', ],
    
        datasets: [
       { data: [325, 650, 255, 65, 185, 504, 850],
        borderWidth: 1,
       tension: 0,
       radius: 4,
       hoverRadius: 5,
         borderColor: '#7489d1',
         backgroundColor: 'rgba(116, 137, 209, 0.2)',
        }
        ]
    
      },
    
     options:{
      legend: {display:false}  
    },
        
    });
    

//Weekly Traffic//

const weeklyChart = new Chart( weekTrafficChart, {
       type: 'line',
     data: {
        labels:['Week1', 'Week2', 'Week3', 'Week4'],
    
        datasets: [
       {  data: [ 500, 900, 100, 750],
        borderWidth: 1,
       tension: 0,
       radius: 4,
       hoverRadius: 5,
          borderColor: '#5ca7a5',
         backgroundColor: 'rgba(92, 167, 165, 0.2)',
          
        }
        ]
     },
    
     options:{
      legend: {display:false}  
    },
        
    });
    
//Monthly Traffic//

const montlyChart = new Chart( monthTrafficChart, { 
     type: 'line',
      data: {
        labels:['Jan-Feb', 'Mar-Apr', 'May-Jun', 'Jul-Aug', 'Sep-Oct', 'Nov-Dec'],
    
        datasets: [
       { data: [805, 640, 1500, 1700, 900, 750, 100, 990, 1080, 1900,650],
         borderColor: '#e7f057',
         borderWidth: 1,
        tension: 0,
        radius: 4,
        hoverRadius: 5, 
        backgroundColor: 'rgba(231, 240, 87, 0.2)',
          
        }
        ]
      },
    
    options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          },
          legend: {display: false}
      }
        
    });



//Setting defaults
  



       