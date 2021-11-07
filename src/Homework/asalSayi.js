for (let i=1;i<=1000;i++){
    let sayac=0
    for(let j=1;j<=i;j++){
        if(i%j==0){
            sayac++;
        }
    }
    if(sayac == 2){
        console.log(i)
    }
}