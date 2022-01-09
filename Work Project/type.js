function real_bike_hours(that){
    var type_sel = document.getElementById('type_sel');
    var custy_info = document.getElementById('bike_custy_info');

    that.style.color = 'white';
    changeDisplay(type_sel,custy_info);
}
function real_ski_hours(that){
    var type_sel = document.getElementById('type_sel');
    var custy_info = document.getElementById('ski_custy_info');

    that.style.color = 'white';
    changeDisplay(type_sel,custy_info);
}
function changeDisplay(fade_out_element, fade_in_element){
    var fade_in = fade_in_element; 
    var fade_out = fade_out_element;


    fade_out.classList.add('fade_out');
    setTimeout(function(){
        fade_out.style.display = 'none';
        fade_in.style.display = 'flex';
    }, 1500);
    setTimeout(function(){
        fade_in.classList.add('fade_in');
    }, 1600);
}
function setColor(that){
    that.style.setColor = 'white';
}