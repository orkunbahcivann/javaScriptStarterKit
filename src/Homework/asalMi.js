
function asalMi(...sayilar) {

    for (let i=1;i<sayilar.length;i++){
        let sayac=0
        for(let j=1;j<=sayilar[i];j++){
            if(sayilar[i]%j==0){
                sayac++;
            }
        }
        if(sayac == 2){
            console.log(sayilar[i]+" asal sayıdır.")
        }
        else{
            console.log(sayilar[i]+ " asal sayı değildir.")
        }

    }
}
asalMi(1,3,5,10,8,21)

