function fade_bike_custyInfo(){
    var custy_info = document.getElementById('bike_custy_info');
    var bike_info = document.getElementById('bike_info');

    switchDisplay(custy_info,bike_info);
}
function fade_bikeInfo(){
    var bike_info = document.getElementById('bike_info');
    var service_sel = document.getElementById('bike_service');

    switchDisplay(bike_info,service_sel);
}
function fade_ski_custyInfo(){
    var custy_info = document.getElementById('ski_custy_info');
    var ski_info = document.getElementById('ski_info');

    switchDisplay(custy_info,ski_info)
}
function fade_skiInfo(){
    var bike_info = document.getElementById('ski_info');
    var service_sel = document.getElementById('ski_service');

    switchDisplay(bike_info,service_sel);
}
function switchDisplay(fade_out_element, fade_in_element){
    var fade_in = fade_in_element; 
    var fade_out = fade_out_element;

    fade_out.classList.remove('fade_in');
    fade_out.classList.add('fade_out');
    setTimeout(function(){
        fade_out.style.display = 'none';
        fade_in.style.display = 'flex';
    }, 1500);
    setTimeout(function(){
        fade_in.classList.add('fade_in');
    }, 1600);
}