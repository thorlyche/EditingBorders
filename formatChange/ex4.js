function validate()
{
  let input1 = document.getElementById("redBorder").value;
  let input2 = document.getElementById("greenBorder").value;
  let input3 = document.getElementById("blueBorder").value;
  let input4 = document.getElementById("widthBorder").value;
  let input5 = document.getElementById("redBack").value;
  let input6 = document.getElementById("greenBack").value;
  let input7 = document.getElementById("blueBack").value;

  if(checkValid(input1)&&checkValid(input2)&&checkValid(input3)&&checkValid(input4)&&checkValid(input5)&&checkValid(input6)&&checkValid(input7)){
    document.getElementById("editedClass").style.borderStyle = "solid";
    document.getElementById("editedClass").style.borderColor = rgb(input1, input2, input3);
    document.getElementById("editedClass").style.borderWidth = input4+"px";
    document.getElementById("editedClass").style.backgroundColor = rgb(input5, input6, input7);
  }
  else{
    window.alert("Invalid Range! ")
  }

}




function checkValid(x){
  if((x<256) && (x>0)){
    return true;
  }
  return false;
}
function rgb(red, green, blue){
  return(["rgb("+red+","+green+","+blue+")"]);
}
