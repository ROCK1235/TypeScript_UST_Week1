let weight:number=72.5;
let height:number=172.2/100;
let bmi:number=weight/(height*height)

if(bmi<18.5){
    console.log("Under Weight");
}else if(bmi>=18.5 && bmi<25){
    console.log("Normal Weight");
}
else if(bmi>=25 && bmi<30){
    console.log("Over Weight");
}else{
    console.log("Obesity")
}






