"use Strict";
(function(global){

    function ChangeData() {
        this.active = 'blue-color';
    }

    ChangeData.prototype.change = function(imagename, idname, colorname) {
        document.getElementById(this.active).classList.remove("active");
        this.active = idname;
        document.getElementById(this.active).className += " active";   
        document.getElementById("text").innerHTML = colorname;            
        document.getElementById("carimage").src='assets/'+imagename+'.jpg';
    };     
    
    global.changedata = new ChangeData();
    document.addEventListener("DOMContentLoaded", ChangeData,false);

})(window);    




 

