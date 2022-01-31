function setQty(){
var select = document.getElementsByClassName('skus');
var qty = document.getElementsByClassName('qty');


for(var i = 0; i<select.length;i++){
    if(select[i].value != ''){
        qty[i].value = '1';
    }
}
}

function custyInfo(current,next,div_enabled,next_enabled,next_btn,button_div,button_type){
    var poop_time = current.querySelectorAll('.custy');
    

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
    if (to_monkee == true || button_type == 'back'){
        fuck_these_buttons(div_enabled,next_enabled,next_btn,button_div);
        do_your_magic(current,next);
    }
}

function phoneBuilder(number){
    var format = "(xxx) xxx-xxxx";

    for (var i=0;i<number.length;i++){
        format = format.replace('x', number[i]);
    }
    return format;
}
function ask_da_q(f_name,l_name,ph_num,type){
    var element = document.getElementById('customer_txt');
    var first = f_name;
    var last = l_name;
    var phone = ph_num;
    var name = f_name + " " + l_name;
    var txt = name + "'s ticket was submitted" + '\n' + "click OK to submit another ticket for " + name; 
    var form = document.getElementById('snow_tech'); 

    if (confirm(txt)) {
        form.reset();
        please_sir_may_I_have_another(first,last,phone,type)
        fade_another();
      } else {
        form.reset();
        fade_home();
      }
    
}
function please_sir_may_I_have_another(f_name,l_name,ph_num,type){
    var first_name = document.getElementById(type+"_f_name");
    var last_name = document.getElementById(type+"_l_name");
    var phone_number = document.getElementById(type+"_ph_num");


    first_name.value = f_name;
    last_name.value = l_name;
    phone_number.value = ph_num;
}