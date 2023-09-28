
let mesaj = 
`
    Migros'a Hoş Geldiniz.
    Mony Kartınız Var mı?
    1-Evet
    2-Hayır
`;

const urunler = [
    {
        urunIsmi : "Süt",
        fiyat: 15
    },

    {
        urunIsmi: "BebekBezi",
        fiyat:100
    },

    {
        urunIsmi: "Kuşbaşı",
        fiyat:220
    }

]

let sonuc = confirm(mesaj);
let odenecekTutar;

if(sonuc){
    //Money Kartı Vardır.
    let isim = prompt("Adınızı giriniz:");
    let soyisim = prompt("Soyisminizi Giriniz");

    const musteri = new Musteri(isim,soyisim,sonuc,urunler);
    odenecekTutar =  musteri.hesapla();
    
    alert(
        `Müşteri Bilgileri: ${musteri.getIsim()} ${musteri.getSoyisim()} 
        Odenecek Tutar : ${odenecekTutar}
        `)

}else{
    const musteri = new Musteri(null,null,sonuc,urunler);
    odenecekTutar = musteri.hesapla();
    alert(`Ödencek Tutar: ${odenecekTutar} `);

}