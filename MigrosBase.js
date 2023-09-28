class MigrosBase{

    indirimOrani= 20;



    constructor(isim,soyisim,kartVarmi,urunler){
        this.isim = isim;
        this.soyisim = soyisim;
        this.kartVarmi= kartVarmi;
        this.urunler = urunler;
    }

    hesapla(){

        let odenecekTutar =0;

        if(this.urunleriKontrolEt(this.urunler)){
            //sepetim dolu
            if(this.kartVarmi){
                    //Money kartı vardır
                    this.urunler.forEach((urun) => {
                        odenecekTutar += (urun.fiyat*(100-this.indirimOrani)/100) ;
                     });
         
            }else{
                    //Yoktur
                    this.urunler.forEach((urun) => {
                        odenecekTutar +=urun.fiyat; 
                     });
         
            }
           
        }else{
            alert("En Az Bir Tane Ürün Satın Almaslısınız...")
        }
        return odenecekTutar;

    }

    urunleriKontrolEt(urunler){
        if(urunler != null && urunler.length>0){
            return true;
        }
        return false;
    }

    getIsim(){
        return this.isim;
    }
    getSoyisim(){
        return this.soyisim;
    }
}