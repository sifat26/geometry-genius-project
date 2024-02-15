function triangleCalculate(){
   
    const triangleBaseInput=document.getElementById("triangle-base");
    const triangleBase=triangleBaseInput.value;
    const base=parseFloat(triangleBase);
    //console.log(base);
    const triangleHeightInput=document.getElementById("triangle-height");
    const triangleHEight=triangleHeightInput.value;
    const height=parseFloat(triangleHEight);
    //console.log(height);
    const Area= 0.5* base* height;
    console.log(Area);
    const setArea=document.getElementById("triangle-area");
    setArea.innerHTML=Area;


}
function rectangleCalculate(){
    const rectangleBaseInput=document.getElementById("rectangle-base");
    const rectangleBase=rectangleBaseInput.value;
    const base=parseFloat(rectangleBase);
    //console.log(base);
    const rectangleHeightInput=document.getElementById("rectangle-height");
    const rectangleHEight=rectangleHeightInput.value;
    const height=parseFloat(rectangleHEight);
    //console.log(height);
    const Area= base* height;
    console.log(Area);
    const setArea=document.getElementById("rectangle-area");
    setArea.innerHTML=Area;
}