function getForm(that){
    var elements = document.querySelectorAll('.element');
    var type = that.id.split("_");
    type = type[0];
    var current = document.getElementById('type_sel');
    var next = document.getElementById(type+"_custy_info");

    enable_form(type);
    do_your_magic(current,next);
    enable_buttons(type);
}

