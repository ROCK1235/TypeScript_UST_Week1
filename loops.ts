for(let i=1;i<=10;i++){
    console.log("Hello There");
}

//continue
for(let i=1;i<=10;i++){

    if(i==6){
        continue;
    }
    console.log(`Iteration number ${i}`);
}
//Break
for(let i=1;i<=10;i++){

    if(i==6){
        break;
    }
    console.log(`Iteration number ${i}`);
}