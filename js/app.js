
const popUp = document.getElementById('pop-up');
const hourTrafficChart= document.getElementById('hourlyChart');
const dayTrafficChart= document.getElementById('dailyChart');
const weekTrafficChart= document.getElementById('weeklyChart');
const monthTrafficChart= document.getElementById('monthlyChart');
const barChart= document.getElementById('dailyTraffic');
const doughnutChart=document.getElementById('mobileChart');



//Close button alert
$('.closebtn').on("click", function(){ 
$(popUp).slideUp();
});


//Notification slide down on click 

$('.bell-badge').on("click", function(){
    $("#pop-up").slideDown();
    
});






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
    responsive: 'true',
     maintainAspectRatio: false,
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
         responsive: 'true',
     maintainAspectRatio: false,
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
         responsive: 'true',
     maintainAspectRatio: false,
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
        responsive: 'true',
     maintainAspectRatio: false,
          
          legend: {display: false}
      }
        
    });



//Charts hidden, except the Hoyrly one

  $('#dailyChart').hide();
  $('#weeklyChart').hide();
  $('#monthlyChart').hide();

//Change Color to selected buttons

$('li.button-chart').on("click", function(){
     $('li.button-chart').removeClass('clicked'); 
    $(this).addClass('clicked');
    
});







//***Hourly**//

$('#hour-nav').click(function() {
  
  $('#hourlyChart').show();
  $('#dailyChart').hide();
  $('#weeklyChart').hide();
  $('#monthlyChart').hide();
  
     
 

 
});


//***Daily**//

$('#day-nav').click(function() {
  $('#hourlyChart').hide();
  $('#dailyChart').show();
  $('#weeklyChart').hide();
  $('#monthlyChart').hide();
  
 
});


//***Weekly**//

$('#week-nav').click(function() {
  $('#hourlyChart').hide();
  $('#dailyChart').hide();
  $('#weeklyChart').show();
  $('#monthlyChart').hide();
  
 
});


//***Monthly**//

$('#month-nav').click(function() {
  $('#hourlyChart').hide();
  $('#dailyChart').hide();
  $('#weeklyChart').hide();
  $('#monthlyChart').show();
  
});


// Bar Chart Daily Traffic


const myBarChart = new Chart(barChart, {
    type: 'bar',
    data: {
        labels: ['S','M','T','W','T','F','S'],
        datasets:[
            { data: [160, 75, 150, 90, 200, 100, 230],
         borderColor: '#65cc65',
         backgroundColor: '#74d174',
         borderWidth: 1,
        
          
        }],
        

    },
             options: {
        responsive: 'true',
        
     
         legend: {display: false}
      }
    
  
});


// Doughnut Chart for Mobile Users


const myMobileChart= new Chart(doughnutChart,{
    type:'doughnut',
    data:{
        labels:['Phone','Tablets','Desktop'],
        datasets: [
            {  data:[160, 80, 280],
             backgroundColor:['#81de7e','#7e81de','#de7e81'],
             }
        ],
      
    },
    
      options: {
        responsive: 'true',
          maintainAspectRatio: false,
        legend: {
        display: true,
        position: 'right',
        labels:{boxWidth: 20,
                fontSize: 12,
                fontColor:'#007a4b',
                fontStyle:'bold'},
        
      },
          layout: {
      padding: 20
    },
              
      cutoutPercentage: 50,
      animation: {
        animateScale: true
      }
   
        
      }
});





 //Form validation
      function validateForm() {
        const userSearch = document.forms["form"]["searchUser"].value;
        const userMessage = document.forms["form"]["userMessage"].value;
          if (userSearch == "" || userMessage == "") {
           $('.errorMessage').show();
              
              return false;
          } else {
             $('.successMessage').show();
          }
             
      }
      
$("#form").submit(function(e) {
    e.preventDefault();
});
       