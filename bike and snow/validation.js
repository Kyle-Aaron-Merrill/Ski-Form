function setQty(){
var select = document.getElementsByClassName('skus');
var qty = document.getElementsByClassName('qty');


for(var i = 0; i<select.length;i++){
    if(select[i].value != ''){
        qty[i].value = '1';
    }
}
}

function custyInfo(curElement,nextElement){
    var poop_time = curElement.querySelectorAll('.custy');
    

    var to_monkee = true;
        for (var i=0;i<poop_time.length;i++){
            if (poop_time[i].value == ''){
                poop_time[i].style.border = 'groove 2.7px rgb(0 255 8 )'
                poop_time[i].placeholder = 'Please Enter ' + poop_time[i].name;
                to_monkee = false;
            }
            if (poop_time[i].value.length != 10 && poop_time[i].name == 'Phone Number'){
                poop_time[i].style.border = 'groove 2.7px rgb(0 255 8 )'
                poop_time[i].value = '';
                poop_time[i].placeholder = 'Please Enter ' + poop_time[i].name;
                to_monkee = false;
            }
            if (poop_time[i].value != '' && poop_time[i].name == 'Phone Number' && poop_time[i].value.length == 10){
                var phoneNumba = phoneBuilder(poop_time[i].value);
                poop_time[i].value = phoneNumba;
            }
            if (poop_time.value == 'height_select'){
                poop_time[i].style.border = 'groove 2.7px rgb(0 255 8 )'
            }
        }
    if (to_monkee == true){
        switchDisplay(curElement,nextElement);
    }
}

function phoneBuilder(number){
    var format = "(xxx) xxx-xxxx";

    for (var i=0;i<number.length;i++){
        format = format.replace('x', number[i]);
    }
    return format;
}
