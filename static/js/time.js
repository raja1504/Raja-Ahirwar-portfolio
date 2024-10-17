
var datetime;
setInterval(()=> getTime(),1000);
datetime = document.getElementById("datetime");
function getTime()
{
    var dt = new Date();
    datetime.innerHTML = "<i class='far fa-calendar-alt' style='font-size:15px; margin-top:5px;'></i>  " + dt.toDateString() + " <i class='far fa-clock' style='font-size:15px'></i> " + dt.toLocaleTimeString();
}