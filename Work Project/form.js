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
        switchDisplay(skier_info,boot_info);
    }
    if (skier_info.classList.contains('ski&snow')){
        switchDisplay(skier_info,stance_pref);
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

    switchDisplay(boot_info,notes);
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

    var service_sel = document.getElementById(type + '_service');
    var notes = document.getElementById(type +'_notes');
    var ski = false;
    var snow = false;

    ski = ski_skus(sku1,sku2,sku3,sku4,sku5,sku6,sku7,sku8,sku9,sku10);
    snow = snow_skus(sku1,sku2,sku3,sku4,sku5,sku6,sku7,sku8,sku9,sku10);

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
function ski_skus(sku_1,sku_2,sku_3,sku_4,sku_5,sku_6,sku_7,sku_8,sku_9,sku_10){
    var to_monkey = false;
    if (sku_1 == "4234102" || sku_2 == "4234102" || sku_3 == "4234102" || sku_4 == "4234102" || sku_5 == "4234102" || sku_6 == "4234102" || sku_7 == "4234102" || sku_8 == "4234102"  || sku_9 == "4234102"  || sku_10 == "4234102" && to_monkey != true){
        to_monkey = true;
    }
    if (sku_1 == "4234103" || sku_2 == "4234103" || sku_3 == "4234103" || sku_4 == "4234103" || sku_5 == "4234103"  || sku_6 == "4234103" || sku_7 == "4234103" || sku_8 == "4234103" || sku_9 == "4234103" || sku_10 == "4234103" && to_monkey != true){
        to_monkey = true;
    }
    if (sku_1 == "4234101" || sku_2 == "4234101" || sku_3 == "4234101" || sku_4 == "4234101" || sku_5 == "4234101" || sku_6 == "4234101" || sku_7 == "4234101" || sku_8 == "4234101" || sku_9 == "4234101" || sku_10 == "4234101" && to_monkey != true){
        to_monkey = true;
    }
    if (sku_1 == "4234106" || sku_2 == "4234106" || sku_3 == "4234106" || sku_4 == "4234106" || sku_5 == "4234106" || sku_6 == "4234106" || sku_7 == "4234106" || sku_8 == "4234106" || sku_9 == "4234106" || sku_10 == "4234106" && to_monkey != true){
        to_monkey = true;
    }
    if (sku_1 == "4234108" || sku_2 == "4234108" || sku_3 == "4234108" || sku_4 == "4234108" || sku_5 == "4234108" || sku_6 == "4234106" || sku_7 == "4234106" || sku_8 == "4234106" || sku_9 == "4234106" || sku_10 == "4234106" && to_monkey != true){
        to_monkey = true;
    }
    return to_monkey;
}
function snow_skus(sku_1,sku_2,sku_3,sku_4,sku_5,sku_6,sku_7,sku_8,sku_9,sku_10){
    var to_monkey = false;
    if (sku_1 == "4234111" || sku_2 == "4234111" || sku_3 == "4234111" || sku_4 == "4234111" || sku_5 == "4234111" || sku_6 == "4234111" || sku_7 == "4234111" || sku_8 == "4234111"  || sku_9 == "4234111"  || sku_10 == "4234111" && to_monkey != true){
        to_monkey = true;
    }
    if (sku_1 == "4234105" || sku_2 == "4234105" || sku_3 == "4234105" || sku_4 == "4234105" || sku_5 == "4234105"  || sku_6 == "4234105" || sku_7 == "4234105" || sku_8 == "4234105" || sku_9 == "4234105" || sku_10 == "4234105" && to_monkey != true){
        to_monkey = true;
    }
    if (sku_1 == "4234104" || sku_2 == "4234104" || sku_3 == "4234104" || sku_4 == "4234104" || sku_5 == "4234104" || sku_6 == "4234104" || sku_7 == "4234104" || sku_8 == "4234104" || sku_9 == "4234104" || sku_10 == "4234104" && to_monkey != true){
        to_monkey = true;
    }
    return to_monkey;
}

    

