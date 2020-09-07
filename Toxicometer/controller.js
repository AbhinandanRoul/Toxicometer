var c=0;
function acknowledge()
{
  
    
   var k= document.form.client_text_area.value; 
   document.getElementById("show").innerHTML=document.getElementById("show").innerHTML+ "\t"+c+")"+ k;
    c=c+1;
    
    document.form.client_text_area.value="";
   
}



