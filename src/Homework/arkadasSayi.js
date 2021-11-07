function arkadasSayi(sayi1,sayi2){
    let buyukSayi
    let toplam1=1   
    let toplam2=1
    if(sayi1>sayi2){
        buyukSayi=sayi1
    }
    else{
        buyukSayi=sayi2
    }
    for(let i=2;i<=buyukSayi/2;i++){
        if(sayi1%i==0){
            toplam1=toplam1+i
        }
        if(sayi2%i==0){
            toplam2=toplam2+i
        }
    }
    if(sayi1==toplam2 && sayi2==toplam1){
        console.log(sayi1 + ","+sayi2 + " arkadaş sayılardır.")
    }
    else{
        console.log(sayi1 + ","+sayi2 + " arkadaş sayı değildir.")
    }
}
arkadasSayi(220,284)