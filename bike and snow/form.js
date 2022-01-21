
function fade_bike_custyInfo(){
    var custy_info = document.getElementById('bike_custy_info');
    var bike_info = document.getElementById('bike_info');

    custyInfo(custy_info,bike_info);
}
function fade_bikeInfo(){
    var bike_info = document.getElementById('bike_info');
    var service_sel = document.getElementById('bike_service');

    custyInfo(bike_info,service_sel);
}
function fade_ski_custyInfo(){
    var custy_info = document.getElementById('ski_custy_info');
    var ski_info = document.getElementById('ski_info');

    custyInfo(custy_info,ski_info);
}
function fade_skiInfo(){
    var bike_info = document.getElementById('ski_info');
    var service_sel = document.getElementById('ski_service');

    custyInfo(bike_info,service_sel);
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
function change_service(class_list){
    var service_sel = document.getElementById('ski_service');
    var skier_info = document.getElementById('skier_info');
    var stance_pref = document.getElementById('stance_pref');

    if (class_list == 'ski'){
        switchDisplay(service_sel,skier_info);
        skier_info.classList.add(class_list);
    }
    if (class_list == 'snow'){
        switchDisplay(service_sel,stance_pref);
    }
    if (class_list == 'ski&snow'){
        switchDisplay(service_sel,skier_info);
        skier_info.classList.add(class_list);
    }

}
function change_skier_info(that){
    var skier_info = document.getElementById('skier_info');
    var stance_pref = document.getElementById('stance_pref');
    var boot_info = document.getElementById('boot_info');

    
    if (skier_info.classList.contains('ski')){
        custyInfo(skier_info,boot_info);
    }
    if (skier_info.classList.contains('ski&snow')){
        custyInfo(skier_info,stance_pref);
    }
}
function change_stance(){
    var stance_pref = document.getElementById('stance_pref');
    var boot_info = document.getElementById('boot_info');

    
    switchDisplay(stance_pref,boot_info);
}
function change_boot_info(that){
    var boot_info = document.getElementById('boot_info');
    var notes = document.getElementById('ski_notes');

    custyInfo(boot_info,notes);
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

    var service_sel = document.getElementById(type + '_service');
    var notes = document.getElementById(type +'_notes');
    var ski = false;
    var snow = false;

    ski = ski_skus(arr);
    snow = snow_skus(arr);

    if (ski == true && snow == false){
        var class_list = 'ski';
        change_service(class_list);
    }
    if (ski == false && snow == true){
        var class_list = 'snow';
        change_service(class_list);
    }
    if (ski == true && snow == true){
        var class_list = 'ski&snow'
        change_service(class_list);
    }
    else if (ski == false && snow == false && type == 'bike'){
        switchDisplay(service_sel,parts_sel);
    }
    else if(ski == false && snow == false){
        switchDisplay(service_sel,notes);
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
function show_parts(){
    var service = document.getElementById('bike_service');
    var parts = document.getElementById('parts_search');

    switchDisplay(service,parts);
}
function show_notes(){
    var parts = document.getElementById('parts_search');
    var notes = document.getElementById('bike_notes');

    switchDisplay(parts,notes);
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

    