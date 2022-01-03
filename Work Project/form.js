src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"

var script_url = "https://script.google.com/macros/s/AKfycbzrwZfsGjcl4r_BAejwEzzMjjh69kHypGrH7ksy_FYYsKPbqHly3KPIF5epmn4LsPEM/exec";
  //This Script is for the google web app/api
  // Make an AJAX call to Google Script
    

  function insert_value() {
    $("#re").css("visibility","hidden");
     document.getElementById("loader").style.visibility = "visible";
    
    var f_name= $("#f_name").val();
    var l_name= $("#l_name").val();
    var ph_num= $("#ph_num").val();
    var blank = $("#blank").val();
    var blank2 = $("#blank2").val();
    var date_in= $("#date_in").val();
    var date_out= $("#date_out").val();
    var ski_snow= $('input[name=ski_snow]:checked').val();
    var weight= $("#weight").val();
    var height= $("#height").val();
    var skier_type= $('input[name=skier_type]:checked').val();
    var stance= $('input[name=stance]:checked').val();
    var age= $("#age").val();
    var make= $("#make").val();
    var mdl= $("#mdl").val();
    var size= $("#size").val();
    var boot_make= $("#boot_make").val();
    var boot_mdl= $("#boot_mdl").val();
    var bindings= $("#bindings").val();
    var bootLength= $("#bootLength").val();
    var notes= $("#notes").val();
    var sku_1= $("#sku_1").val();
    var sku_2= $("#sku_2").val();
    var sku_3= $("#sku_3").val();
    var sku_4= $("#sku_4").val();
    var sku_5= $("#sku_5").val();
    


    var url = script_url+"?callback=ctrlq&age="+age+"&bootLength="+bootLength+"&bindings="+bindings+"&boot_mdl="+boot_mdl+"&boot_make="+boot_make+"&size="+size+"&skier_type="+skier_type+"&height="+height+"&weight="+weight+"&stance="+stance+"&ski_snow="+ski_snow+"&date_out="+date_out+"&date_in="+date_in+"&notes="+notes+"&sku_5="+sku_5+"&sku_4="+sku_4+"&sku_3="+sku_3+"&sku_2="+sku_2+"&sku_1="+sku_1+"&mdl="+mdl+"&make="+make+"&blank2="+blank2+"&blank="+blank+"&ph_num="+ph_num+"&l_name=" + l_name + "&f_name=" + f_name + "&action=insert";
  

    var request = jQuery.ajax({
      crossDomain: true,
      url: url ,
      method: "GET",
      dataType: "jsonp"
    });
    
  

    document.getElementById("snow_tech").reset();
    $("html, body").animate({ scrollTop: 0 }, "slow");
  }

  // print the returned data
  function ctrlq(e) {
  
    
    $("#re").html(e.result);
    $("#re").css("visibility","visible");
    read_value();
    
  }
  
  
  function read_value() {

$("#re").css("visibility","hidden");
   
   document.getElementById("loader").style.visibility = "visible";
 var url = script_url+"?action=read";

$.getJSON(url, function (json) {

    // Set the variables from the results array
   
   
  

        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");

        

        var header = table.createTHead();
        var row = header.insertRow(0);  

        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);
        var cell6 = row.insertCell(6);  
        var cell7 = row.insertCell(7);
        var cell8 = row.insertCell(8);  
        var cell9 = row.insertCell(9);
        var cell10 = row.insertCell(10);
        var cell11 = row.insertCell(11);
        var cell12 = row.insertCell(12);
        var cell13 = row.insertCell(13);
        var cell14 = row.insertCell(14);
        var cell15 = row.insertCell(15);
        var cell16 = row.insertCell(16);
        var cell17 = row.insertCell(17);
        var cell18 = row.insertCell(18);
        var cell19 = row.insertCell(19);
        var cell20 = row.insertCell(20);
        var cell21 = row.insertCell(21);
        var cell22 = row.insertCell(22);
        var cell23 = row.insertCell(23);
        var cell24 = row.insertCell(24);
        var cell25 = row.insertCell(25);
        var cell26 = row.insertCell(26);     
            
        

        cell1.innerHTML = "<b>f_name</b>";
        cell2.innerHTML = "<b>l_name</b>";
        cell3.innerHTML = "<b>ph_num</b>";
        cell4.innerHTML = "<b>blank<b>";
        cell5.innerHTML = "<b>blank<b>";
        cell6.innerHTML = "<b>make</b>";
        cell7.innerHTML = "<b>mdl</b>";
        cell8.innerHTML = "<b>sku_1</b>";
        cell9.innerHTML = "<b>sku_2</b>";
        cell10.innerHTML = "<b>sku_3</b>";
        cell11.innerHTML = "<b>sku_4</b>";
        cell12.innerHTML = "<b>sku_5</b>";
        cell13.innerHTML = "<b>notes</b>";
        cell14.innerHTML = "<b>date_in</b>";
        cell15.innerHTML = "<b>date_out</b>";
        cell16.innerHTML = "<b>ski_snow</b>";
        cell17.innerHTML = "<b>stance</b>"
        cell18.innerHTML = "<b>weight</b>";
        cell19.innerHTML = "<b>height</b>";
        cell20.innerHTML = "<b>skier_type</b>";
        cell21.innerHTML = "<b>size</b>";       
        cell22.innerHTML = "<b>boot_make</b>";      
        cell23.innerHTML = "<b>boot_mdl</b>";       
        cell24.innerHTML = "<b>bindings</b>";
        cell25.innerHTML = "<b>bootLength<b>";
        cell26.innerHTML = "<b>age<b>";                 
        

        
        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < json.records.length; i++) {

            tr = table.insertRow(-1);
                var tabCell = tr.insertCell(-1);
                         tabCell.innerHTML = json.records[i].f_name;
        tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = json.records[i].l_name;
        tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = json.records[i].ph_num;
        tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = json.records[i].blank;                
        tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = json.records[i].blank2;                
        tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = json.records[i].make;
        tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = json.records[i].mdl;
        tabCell = tr.insertCell(-1);        
                        tabCell.innerHTML = json.records[i].sku_1;      
        tabCell = tr.insertCell(-1);        
                        tabCell.innerHTML = json.records[i].sku_2;      
        tabCell = tr.insertCell(-1);        
                        tabCell.innerHTML = json.records[i].sku_3;      
        tabCell = tr.insertCell(-1);        
                        tabCell.innerHTML = json.records[i].sku_4;      
        tabCell = tr.insertCell(-1);        
                        tabCell.innerHTML = json.records[i].sku_5;
        tabCell = tr.insertCell(-1);        
                        tabCell.innerHTML = json.records[i].notes;
        tabCell = tr.insertCell(-1);        
                        tabCell.innerHTML = json.records[i].date_in;
        tabCell = tr.insertCell(-1);        
                        tabCell.innerHTML = json.records[i].date_out;
        tabCell = tr.insertCell(-1);        
                        tabCell.innerHTML = json.records[i].ski_snow;
        tabCell = tr.insertCell(-1);               
                        tabCell.innerHTML = json.records[i].stance;               
        tabCell = tr.insertCell(-1);        
                        tabCell.innerHTML = json.records[i].weight;
        tabCell = tr.insertCell(-1);        
                        tabCell.innerHTML = json.records[i].height;
        tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = json.records[i].size;
        tabCell = tr.insertCell(-1);        
                        tabCell.innerHTML = json.records[i].boot_make;
        tabCell = tr.insertCell(-1);        
                        tabCell.innerHTML = json.records[i].boot_mdl;                       
        tabCell = tr.insertCell(-1);        
                        tabCell.innerHTML = json.records[i].bindings;  
        tabCell = tr.insertCell(-1);        
                        tabCell.innerHTML = json.records[i].bootLength;
       tabCell = tr.insertCell(-1);        
                        tabCell.innerHTML = json.records[i].age;
              
              
       
            }
      

        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("showData");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
        document.getElementById("loader").style.visibility = "hidden";
        $("#re").css("visibility","visible");
    });
    }
