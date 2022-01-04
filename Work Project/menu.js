
function ski_click(){
    var ski_button = document.getElementById('ski');
    var bike_button = document.getElementById('bike');
    var bike_form = document.getElementById('bike_form');

    ski_button.style.color = "white";
}

function fade_bike(){
    var ski_button = document.getElementById('ski');
    var bike_button = document.getElementById('bike');

    bike_button.style.color = "white";
    bike_button.classList.toggle('fade_out');
    ski_button.classList.toggle('fade_out');
    setTimeout(function(){
        changeDisplay('bike_form')
    }, 1500);
}
function fade_ski(){
    var ski_button = document.getElementById('ski');
    var bike_button = document.getElementById('bike');

    bike_button.style.color = "white";
    bike_button.classList.toggle('fade_out');
    ski_button.classList.toggle('fade_out');
    setTimeout(function(){
        changeDisplay('ski_form')
    }, 1500);
}

function changeDisplay(element){
    var type = document.getElementById('type_sel');
    var form = document.getElementById(element);

    type.style.display = 'none';
    form.style.display = 'flex';
    form.classList.add('fade_in');
    
    
}