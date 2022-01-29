function put_it_in_reverse_terry(){
    var elements = document.getElementsByClassName("element");
    for(var index=0;index<elements.length;index++){ 
        var current = elements[index];
        if(current.style.display == "flex"){
            reverse_your_magic(current,index,elements);
            break;
        }
    }
}
function reverse_your_magic(current,index,elements){
    for(var i=index;i>0;i--){
        var last = elements[i-1];
        var type = document.getElementById('type_sel');
        var classCheck = last.classList.contains("false");
        if (current.id != 'ski_custy_info' && current.id != 'bike_custy_info' && classCheck != true) {
            swapDisplay(current,last);
            break;
        }
        else if (current.id == 'ski_custy_info' || current.id == 'bike_custy_info') {
            type_sel(current,type);
            break;
        }
        if (classCheck == true) {
            last.classList.remove('false');
        }
    }
    
}
function type_sel(current,type){
    var btn = document.getElementById('backButton');
    btn.classList.remove('fade_in')
    current.classList.remove('fade_in');
    btn.classList.add('fade_out')
    current.classList.add('fade_out');
    setTimeout(function(){
        btn.style.display = 'none';
        current.style.display = 'none';
        type.style.display = 'flex';
    }, 0500);
    setTimeout(function(){
        type.classList.add('fade_in');
    }, 0600);
}
function switchDisplay(){
    var elements = document.getElementsByClassName("element");
    for(var index=0;index<elements.length;index++){ 
        var current = elements[index];
        if(current.style.display == "flex"){
            do_your_magic(current,index,elements);
            break;
        }
    }
}
function do_your_magic(current,index,elements){
    
    for (var i=index;i<elements.length;i++){
        var next = elements[i+1];
        var servicecheck = current.classList.contains("service");
        if(servicecheck == true){
            var id = current.id.split("_");
            id = id[0];
            run_dem_skus_ya_heard(id);
        }
        var classCheck = next.classList.contains("false");
        if(classCheck != true){
            swapDisplay(current,next);
            break;
        }
    }
}
function getForm(that){
    var type = that.id.split("_");
    type = type[0];
    var current = document.getElementById('type_sel');
    var next = document.getElementById(type+"_custy_info");
    swapDisplay(current,next);
}
function swapDisplay(current,next){
    var btn = document.getElementById('backButton');
    btn.classList.remove('fade_in')
    current.classList.remove('fade_in');
    btn.classList.add('fade_out')
    current.classList.add('fade_out');
    setTimeout(function(){
        btn.style.display = 'none';
        current.style.display = 'none';
        btn.style.display = 'grid';
        next.style.display = 'flex';
    }, 0500);
    setTimeout(function(){    
        next.classList.add('fade_in');
        btn.classList.add('fade_in');
    }, 0600);
}
function run_dem_skus_ya_heard(type){
    var sku1= $('#'+type+'_sku1').val();
    var sku2= $('#'+type+'_sku2').val();
    var sku3= $('#'+type+'_sku3').val();
    var sku4= $('#'+type+'_sku4').val();
    var sku5= $('#'+type+'_sku5').val();
    var sku6= $('#'+type+'_sku6').val();
    var sku7= $('#'+type+'_sku7').val();
    var sku8= $('#'+type+'_sku8').val();
    var sku9= $('#'+type+'_sku9').val();
    var sku10= $('#'+type+'_sku10').val();

    var arr = [sku1,sku2,sku3,sku4,sku5,sku6,sku7,sku8,sku9,sku10];
    var snowElements = document.querySelectorAll('.snow');
    var skiElements = document.querySelectorAll('.ski');
    var ski = false;
    var snow = false;

    ski = ski_skus(arr);
    snow = snow_skus(arr);

    if (ski == true && snow == false){
        snowElements.forEach(element => {
            element.classList.add('false');
        });
    }
    if (ski == false && snow == true){
        skiElements.forEach(element => {
            element.classList.add('false');
        });
    }
    else if(ski == false && snow == false){
        snowElements.forEach(element => {
            element.classList.add('false');
        });
        skiElements.forEach(element => {
            element.classList.add('false');
        });
    }
}
function ski_skus(array){
    var to_monkey = false;
    array.forEach(element => {
        if (element == '4234102' || element == '4234103' || element == '4234101' || element == '4234106' || element == '4234108'){  to_monkey = true;} 
    });    
    return to_monkey;
}
function snow_skus(array){
    var to_monkey = false;
    array.forEach(element => {
        if (element == '4234111' || element == '4234105' || element == '4234104'){ to_monkey = true;}
    });
    return to_monkey;
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
function fade_home(){
    var type_sel = document.getElementById("type_sel");
    var notes = document.getElementById("notes");

    switchDisplay(type_sel,notes);
}
function fade_another(){
    var notes = document.getElementById("notes");
    var ski_info = document.getElementById('ski_info');

    switchDisplay(notes,ski_info) 
}