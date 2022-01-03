
function scrollTop(){
    document.documentElement.scrollTop = 0;
}

function info_display(){
if (ski_skus() > 0 && snow_skus() == 0) {
    //console.log(div.classList.contains('notActive'));
    document.getElementById("skier_info").style.display = "block";
    document.getElementById("boot_binding").style.display = "block";
    document.getElementById("stance").style.display = "none";
} 
else if(ski_skus() == 0 && snow_skus() > 0){
    document.getElementById("skier_info").style.display = "none";
    document.getElementById("boot_binding").style.display = "block";
    document.getElementById("stance").style.display = "block";
}
else if (check_skus() == true){
    document.getElementById("skier_info").style.display = "none";
    document.getElementById("boot_binding").style.display = "none";  
    document.getElementById("stance").style.display = "none";        
}
else if (ski_skus() > 0 && snow_skus() > 0){
    document.getElementById("skier_info").style.display = "block";
    document.getElementById("boot_binding").style.display = "block";
    document.getElementById("stance").style.display = "block";
}
}

function ski_skus(){
    var sku_1= $("#sku_1").val();
    var sku_2= $("#sku_2").val();
    var sku_3= $("#sku_3").val();
    var sku_4= $("#sku_4").val();
    var sku_5= $("#sku_5").val();
    var qty = 0;
        if (sku_1 == "4234102" || sku_2 == "4234102" || sku_3 == "4234102" || sku_4 == "4234102" || sku_5 == "4234102"){
            qty++;
        }
        if (sku_1 == "4234103" || sku_2 == "4234103" || sku_3 == "4234103" || sku_4 == "4234103" || sku_5 == "4234103"){
            qty++;
        }
        if (sku_1 == "4234101" || sku_2 == "4234101" || sku_3 == "4234101" || sku_4 == "4234101" || sku_5 == "4234101"){
            qty++;
        }
        if (sku_1 == "4234106" || sku_2 == "4234106" || sku_3 == "4234106" || sku_4 == "4234106" || sku_5 == "4234106"){
            qty++;
        }
        if (sku_1 == "4234108" || sku_2 == "4234108" || sku_3 == "4234108" || sku_4 == "4234108" || sku_5 == "4234108"){
            qty++;
        }
        return qty;
}

function snow_skus(){
    var sku_1= $("#sku_1").val();
    var sku_2= $("#sku_2").val();
    var sku_3= $("#sku_3").val();
    var sku_4= $("#sku_4").val();
    var sku_5= $("#sku_5").val();
    var qty = 0;
        if (sku_1 == "4234111" || sku_2 == "4234111" || sku_3 == "4234111" || sku_4 == "4234111" || sku_5 == "4234111"){
            qty++;
        }
        if (sku_1 == "4234105" || sku_2 == "4234105" || sku_3 == "4234105" || sku_4 == "4234105" || sku_5 == "4234105"){
            qty++;
        }
        if (sku_1 == "4234104" || sku_2 == "4234104" || sku_3 == "4234104" || sku_4 == "4234104" || sku_5 == "4234104"){
            qty++;
        }
        return qty;
}

function check_skus(){
    var sku_1= $("#sku_1").val();
    var sku_2= $("#sku_2").val();
    var sku_3= $("#sku_3").val();
    var sku_4= $("#sku_4").val();
    var sku_5= $("#sku_5").val();
    var done = false;
        if (sku_1 == "" && sku_2 == "" && sku_3 == "" && sku_4 == "" && sku_5 == ""){
            done = true;
        }
        return done;
}

        function clearCheck(){
       $('input[type="checkbox"]').click(function() {
       $('input[type="checkbox"]').not(this).prop("checked", false);
    });
    }

        
        
