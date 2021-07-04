 days = ["Sunday","Monday","Tuesday","Wednesday","Thusday","Friday","Saturday"];
 months = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];

 date_data = new Date();

 current_day = date_data.getDay();
 document.getElementById('dayname').textContent = days[current_day];

 current_month = date_data.getMonth();
 current_date = date_data.getDate();
 current_year = date_data.getFullYear();
 document.getElementById('date').textContent = `${months[current_month]} ${current_date} ${current_year}`;

 current_hour = date_data.getHours();
 current_minute = date_data.getMinutes();
 
 am_pm = ''

 if (current_hour >= 12) {
   am_pm = 'PM'
   
 }else{
   am_pm = 'AM'
 };

 document.getElementById('clock').textContent = `${current_hour} : ${current_minute} ${am_pm} `