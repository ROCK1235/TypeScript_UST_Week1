function addition(){
    let n1:number=9;
    let n2:number=10;
    console.log(n1+n2);
}

function subtraction(n1:number,n2:number){
    console.log(n1-n2);
}

function multiplication(num1:number,num2:number):number{
    return num1*num2;
}
addition();
subtraction(5,2);
console.log(multiplication(5,6));