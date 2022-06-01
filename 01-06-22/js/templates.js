// JS --> tek satırlık yorumlama
/*çok satırlı yorumlama (multi-line comment) */

//console.log("Merhaba")
// pop-up alert
/* alert("deneme")
window.alert("deneme window") */

/////////////////////////////////////
// window >> Hepsi
// document >> HTML

// alert("pop-up")
//alert("windows pop-up")
// console.log("asd")

// document.write("deneme")
/////////////////////////////////////

/* Kullanıcan Veri Almak
var name = prompt("Adınız");
console.log(name) 
*/

/////////////////////////////////////
// Variable
// var isim = "Yiğit";
// isim = "Yiğit Ö"; // String
// isim = true; // boolen
// isim = 44; // number - int
// console.log(isim);

// var soyisim = "Özen";
// $soyisim = "Özen"
// console.log(soyisim);

// camselCase ile değişken adlarını oluşturalım
// unique
// İngilizce kelimler

/////////////////////////////////////
// JS " ", '' , ` `, " ' ' " 

// variable initialization
// var deneme;  undefined - tanımsız
// console.log(deneme)

/////////////////////////////////////
// Operator
// logic operator         :  && = VE || = VEYA
// mathematics operator   :  + - * / %
// comparations(karşılaştırma) operators : > >= < <= ! == 
// = atama , == eşittir, === eşitmi (türüne bak)
// postfix --> x++, ++x, y--, --y

// bit < byte < GB < TB
// 1 byte = 8 bit
// 1 bit = 0
// Binary Codes
// Octal (8) --> (01234567)
// decimal (10) --> (0123456789)
// hexadecmal (16) --> (0123456789abcdef)

/////////////////////////////////////
// var result = "Malatya";
// console.log(typeof(result)) // typeof --> tür bulmak içn

// var result2 = 44;
// console.log(typeof(result2))

// var result = "Malatya";
// console.log(typeof(result))

// var result3 = 4>1;
// console.log(typeof result3 )

////////////////////////////////////
// Örnek-1
// var x1, x2, x3;
// x1 = 9;
// x2 = 2;
// x3 = x1 + x2;
// console.log("Toplam : " + x3)

// x3 = x1 * x2;
// console.log(x3)

// x3 = x1 / x2;
// console.log(x3)

// x3 = x1 % x2;
// console.log(x3)

////////////////////////////////////

// CAST : dönüştürmek
// string number boolen 
// database - api - socket : Database'den veya apiden gelen değerler string'dir fakat biz bunları int dönüştürmek isteyebiliriz.

// Number()
// String()
// var x1 = Number(prompt("Lütfen bir sayı giriniz :"));
// console.log(x1 * x1);

////////////////////////////////////

// undefined : tanımlı değer vermezsek bu sorunu yaşarız
// var x1;
// console.log(x1)

// NaN : sayı değil
// var x2 = 9/"asd";
// console.log(x2);

// İsNaN


// Infinity : sonsuz
// var3 = 8 / 0;
// console.log(var3);

// new : ram hafızasında yer açmak (Doğar)

// null : hafızayı boşaltmak - boş değer döndüğünde
// x4 = null;

// sıfır : bir değeri vardır, çarpmada yutan , toplamada etkisiz elemandır

////////////////////////////////////
// escape karakter
console.log("\"");
console.log("'");


////////////////////////////////////
// Math : static 

// sabitler
// document.write(Math.PI + "<br>")
// document.write(Math.E + "<br>")

//  Math
// document.write(Math.random() + "<br>");
// document.write(Math.min(5,2,5,21,-525) + "<br>");
// document.write(Math.max(5,2,5,2151,-525)+ "<br>");
// document.write(Math.sqrt(16) + "<br>")
// document.write(Math.pow(2,5) + "<br>")
// document.write(Math.abs(-4)+ "<br>") // mutlak değer

// // yuvarlama
// document.write(Math.floor(3.9)+ "<br>") // aşağı yuvarlar
// document.write(Math.ceil(5.1)+ "<br>") // yukarı yuvarlar
// document.write(Math.round(2.5) + "<br>")

// Kullanıcıda tarafından aldığımız 2 tane sayının
// s1-) Bu sayılardan en küçüğü nedir ?
// s2-) Bu sayılardan en büyüğü nedir ?
// s3-) Bu sayılardan en büyüğü karekökü nedir ?
// s4-) Bu sayılardan en büyüğü karekökünün üste yuvarlıyalım nedir ?
// s5-) Bu sayılardan en küçüğü mutlak nedir ?
// s6-) Bu sayılardan en küçüğü alt taban en büyüğü üst taban şeklinde üstünü alalım

// ödev - ters değiştir
// Kullanıcıda tarafından aldığımız 2 tane sayının
// s1-) Bu sayılardan en küçüğü nedir ?
// s2-) Bu sayılardan en büyüğü nedir ?
// s3-) Bu sayılardan en büyüğü karekökü nedir ?
// s4-) Bu sayılardan en büyüğü karekökünün üste yuvarlıyalım nedir ?
// s5-) Bu sayılardan en küçüğü mutlak nedir ?
// s6-) Bu sayılardan en küçüğü alt taban en büyüğü üst taban şeklinde üstünü alalım

// document.write("-------------------------" + "<br>")

// var number1 = Number(prompt("1.sayıyı giriniz"));
// var number2 = Number(prompt("2. sayıyı giriniz"));

// // s1-) Bu sayılardan en küçüğü nedir ?
// document.write("En küçüğü : " + Math.min(number1,number2) + "<br>")
// // s2-) Bu sayılardan en büyüğü nedir ?
// document.write("En büyüğü : " + Math.max(number1,number2) + "<br>")

// // s3-) Bu sayılardan en büyüğü karekökü nedir ?
// document.write("En büyüğü karekök : " + Math.sqrt(Math.abs(Math.max(number1,number2))) + "<br>")

// // s4-) Bu sayılardan en büyüğü karekökünün üste yuvarlıyalım nedir ?
// document.write("En küçü karekök : " + Math.ceil(Math.sqrt(Math.max(number1,number2))) + "<br>")

// // s5-) Bu sayılardan en küçüğü mutlak nedir ?
// document.write("En küçüğü mutlak değer : " + Math.abs(Math.min(number1,number2)) + "<br>")

// // s6-) Bu sayılardan en küçüğü alt taban en büyüğü üst taban şeklinde üstünü alalım
// document.write(
//     Math.pow(Math.abs(Math.min(number1,number2)), Math.abs(Math.max(number1,number2))) + "<br>"
// )


////////////////////////////////////
// Number
// var number = 44;
// document.write(number + "<br>");

// var bilimsel = 14E+5; // 14 üzeri 10 üzeri 5
// bilimsel = 14E-5; // sondan 5 sıfır kaydırır
// document.write(bilimsel + "<br>") ;

// // Sayı Sistemleri: 2,8,16 ==> onluk tabanda gösterimi
// // 16 tabanda 10 tabanına çevirme

// // 2'lik tabanda 10 tabanına çevirme
// var binary = 0b00111;
// document.write("2'lik tabanda : " + binary + "<br>");

// var octal = 070111;
// document.write("8'lik tabanda : " + octal + "<br>");

// // 16 tabanda 10 tabanına çevirme
// var hexadecimal = 0xFF;
// document.write("16'lık tababanda : " + hexadecimal + "<br>");


// // 10'luk tabandan diğer tabanlara
// var decimal = 10;
// document.write(decimal.toString(2) + "<br>")
// document.write(decimal.toString(8) + "<br>")
// document.write(decimal.toString(16) + "<br>")

// // CAST
// var castNumber = "14";
// document.write(castNumber + castNumber  + "<br>")
// document.write(Number(castNumber) + Number(castNumber)  + "<br>");

// // Nan : Not a Number
// document.write("result : " + (16/"asd")  + "<br>");

// // İsNan : Bu bir sayımıdır, bu bir sayı değilmidir
// // isNaN = false ise burdaki yapı sayıdır
// // isNaN = true ise burdaki yapı sayı değildir
// var numberx = 200/"asd";
// document.write("result2 : " + isNaN(numberx)  + "<br>");

////////////////////////////////////
// String
// Dikkat : length aç akapa parantez yok
// var kelime = "html5 css3 responsive Bootstrap JAVASCRIPT ";
// document.write(kelime + "<br>");
// document.write("Harf sayısı  :" + kelime.length + "<br>");  // baştaki ve sondaki boşlukları almaz
// document.write("trimlenmiş harf sayısı  :" + kelime.trim().length + "<br>"); 

// document.write("Hepsi küçük harf  :" + kelime.toLocaleLowerCase() + "<br>"); 
// document.write("Hepsi büyük harf  :" + kelime.toUpperCase() + "<br>");  

// document.write("startsWith  : " + kelime.startsWith('h') + "<br>"); //bu harf ilemi başlıyor
// document.write("endWith  : " + kelime.endsWith(' ') + "<br>"); //bu harf ilemi bitiyor

// document.write("concat  : " + kelime.concat("sona eklendi") + "<br>"); // sona ekleme

// var degistirilmis = "Merhabalar";
// document.write("Replace  : " + kelime.replace(kelime, degistirilmis) + "<br>"); // kelime veya harf değiştirme

// document.write("subString-1  : " + kelime.substring(6) + "<br>"); // 6.index'ten itibaren al öncesini alma
// document.write("subStirng-2  : " + kelime.substring(0,4) + "<br>"); //  0-4. indeksleri alır

// document.write("charAt  : " + kelime.charAt(0) + "<br>"); //0.indeks'te ne var
// document.write("indexOf  : " + kelime.indexOf("css3") + "<br>"); // kaçıncı index'te 
// document.write("lastIndexOf: " + kelime.lastIndexOf("css3") + "<br>");

// Ödev
// Kullanıcı tarafından verilen bir kelime
// s1- Kaç karakterli 
// s2- Boşluklar alınarak kaç karakterli
// s3- Bütün kelimeyi küçük harfle göstermek
// s4- Bütün kelimeyi büyük harfle göstermek
// s5- ilk harf nedir
// s6- girdiğini kelime java ile başlıyormu
// s6- girdiğini kelime java ile bitiyormu
// s7- girdiğiniz kelimenin sonuda "-ben js öğreniyorum"
// girdiğiniz 0-4 arasındaki indexi ekranda göster
// kullanıcıdan alınan başka bir kelimeyle birinci olan kelimeyi yer değiştirmek

// JSON nedir ? javascrip object notation

// stringify: json verisini string'e çevirme
var obje = {
    "adi": "yiğit",
    "soyadi" : "özen",
    "diller": 5,
    "turkish": true
};
console.log(obje);
document.write(obje + "<br>")

// json tipini string'e çevir
var objectToString = JSON.stringify(obje);
document.write(objectToString + "<br>")


// 1.adım : adınızı ve soyadınızı jspn objesine ekleyinp
// 2.adım : bu json objesini string'e çeviriyoruz
// 3.adım : bu json objesinin String'e çevirilmiş kısmından substring fonksiyonu metodu ile isim ve soyismini ayrıştır
// 4.adım : adınızı ve soyadınızı document.write ile ekranda gösterelim
// ip ucu : JSON:stringify ve substring()

// ödev - adınızı ve soyaınızı json objesine ekleyip daha sonra bu json objesini String'e çevirip daha sonra adınızı ve soyadınızı
// document.write ile ekrana yazdır. ip ucu : JSON.stringf ve sub string

var nameSurname = {
    "name":"Yiğit",
    "surname":"Özen"
};

var nameAndSurnameJsontoString = JSON.stringify(nameSurname);
var name = nameAndSurnameJsontoString.substring(9,14);
var surname = nameAndSurnameJsontoString.substring(27,31);
document.write("Adım : " + name + " <br> Soyadım : " + surname + "<br>");

var searchResult = nameAndSurnameJsontoString.search("Yiğit");
document.write(searchResult + "<br>");
// çıktısı :  9 başlıyor o üzden bizde 9.,indek ile başladık

// Dinamik hali
var js={
    "name":"yiğit",
    "surname":"özen"
};

var js_string=JSON.stringify(js);
var obj=JSON.parse(js_string)

document.write(obj.name);

///////////////////////////////////////////////

// Fonksiyonlar
// Normal Function
// Anonymous Function
// Arrow Function
// Immedia Function