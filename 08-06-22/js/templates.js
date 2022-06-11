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
// console.log("\"");
// console.log("'");


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
// var obje = {
//     "adi": "yiğit",
//     "soyadi" : "özen",
//     "diller": 5,
//     "turkish": true
// };
// console.log(obje);
// document.write(obje + "<br>")

// // json tipini string'e çevir
// var objectToString = JSON.stringify(obje);
// document.write(objectToString + "<br>")


// // 1.adım : adınızı ve soyadınızı jspn objesine ekleyinp
// // 2.adım : bu json objesini string'e çeviriyoruz
// // 3.adım : bu json objesinin String'e çevirilmiş kısmından substring fonksiyonu metodu ile isim ve soyismini ayrıştır
// // 4.adım : adınızı ve soyadınızı document.write ile ekranda gösterelim
// // ip ucu : JSON:stringify ve substring()

// // ödev - adınızı ve soyaınızı json objesine ekleyip daha sonra bu json objesini String'e çevirip daha sonra adınızı ve soyadınızı
// // document.write ile ekrana yazdır. ip ucu : JSON.stringf ve sub string

// var nameSurname = {
//     "name":"Yiğit",
//     "surname":"Özen"
// };

// // 1.Çözüm static
// var nameAndSurnameJsontoString = JSON.stringify(nameSurname);
// var name = nameAndSurnameJsontoString.substring(9,14);
// var surname = nameAndSurnameJsontoString.substring(27,31);
// document.write("Adım : " + name + " <br> Soyadım : " + surname + "<br>");

// var searchResult = nameAndSurnameJsontoString.search("Yiğit");
// document.write(searchResult + "<br>");
// // çıktısı :  9 başlıyor o üzden bizde 9. indeks ile başladık

// // Dinamik hali
// var js={
//     "name":"yiğit",
//     "surname":"özen"
// };

// var js_string=JSON.stringify(js);
// var obj=JSON.parse(js_string)

// document.write(obj.name);

// //2-Çözüm (static)
// //json'ı string'e çevirdim
// var nameAndSurnameJsontoString2 = JSON.stringify(nameSurname) 
// //ipucu almak (indexOf veya search)
// var searchResult = nameAndSurnameJsontoString2.search('Hamit');
// var searchResult2 = nameAndSurnameJsontoString2.search('Mızrak')

// //çıktısı: 9 başlıyor
// var name = nameAndSurnameJsontoString2.substring(searchResult, (searchResult+5))
// var surname = nameAndSurnameJsontoString2.substring(searchResult2, (searchResult2+6))
// document.write('<br>' + 'Adım: ' + name + '<br> Soyadım: ' + surname)
// var adi=JSON.parse

// document.writeln('<br>'+"****************************")

// // 3.çözüm
// // JSON.stringify()
// // JSON.parse()
// var dinamic = JSON.stringify(obje) 
// var parse = JSON.parse(dinamic);

// var name = parse.adi;
// document.writeln("<br>" + name);
// var surname = parse.soyadi;
// document.writeln("<br>" + surname);

// // Dinamik - 2 clean code
// document.writeln("<br>" + JSON.parse(JSON.stringify(obje)).adi.toUpperCase()+" "+JSON.parse(JSON.stringify(obje)).soyadi);


///////////////////////////////////////////////

// Fonksiyonlar
// Yazdığımız kodları tekrar etmemek için kullanırız. Javdaki karşılığı metod'dur

//1-) returnsuz parametresiz function
// function functionName1(){
//     document.writeln("<br>" + "returnsuz parametresiz function");
// }
// functionName1(); // fonksiyonu çağırdık

// //2-) returnsuz parametreli function
// function functionName2(ekmekTuru){
//     document.writeln("<br>" + "returnsuz, parametresiz function : " + ekmekTuru + "<br>");
// }
// functionName2("Trabzon ekmeği");

// //3-) return'lu parametresiz function
// function functionName3(){
//     return 'returnlu, parametresiz function 200 - 6 = 194';
// }
// var temp3 = functionName3();
// document.writeln(temp3 + "<br>");

// //4-) return'lu parametreli function
// function functionName4(money){
//     var count = money -6;
//     return 'returnlu parametreli function Kalan Para : ' + count;
// }
// var temp4 = functionName4(200);
// document.writeln(temp4);


// Normal Function
// Anonymous Function
// Arrow Function
// Immedia Function


//////////////////////////////////////////////////////////
// setTimeOut()
// senkron : bir işlem biter diğerine geçer
// setTimeOut() ==> function'un istediğimiz zaman aralığında çalışmasını sağlarız

// function merhaba1(){
//     document.write("<br>" + "1.function");
//     console.log("1.fonksiyon")
// }

// //setTimeout(merhaba1,3000) // 3 saniye sonra geliyor

// setTimeout(merhaba1, 3000);

// function merhaba2(){
//     document.write("<br>" + "2.function");
//     console.log("2.fonksiyon");
// }
// merhaba2()

//////////////////////////////////////////////////////////
// try-catch : exception handling

// try {
//     var zeroException = 8/0;
//     //alert(zeroException);
// } catch (err) {
//     console.log(err.message);
//     console.log(err.name);
// } finally {
//     document.writeln("<br>" + "db.close()");
// }

// try {
//     alert44("Merhaba")
// } catch (err) {
//     document.writeln("<br>" + err.message);
//     document.writeln("<br>" + err.name)
// } finally {
//     document.writeln("<br>" + "db.close()");
// }

// document.writeln("<br>" + "diğer satır");

//////////////////////////////////////////////////////////
// conditional : if-else 
// ternary
// if else if
// switch-case

// var number = 4;

// // if-else
// if (number == 4){
//     document.write("<br>" + "eşittir");
// } else {
//     document.write("<br>" + "eşit değil");
// }

// // tenary
// var ternary = (number == 4) ? "eşittir":"eşit değildir";
// document.write("<br>" + ternary); 

// // if - else if - else
// var day="persembe";
// if(day==="pazartesi"){
//   document.write('<br>' + "1-pazartesi");
// } else if(day==="sali"){
//   document.write('<br>' + "2-sali");
// } else if(day==="carsamba"){
//   document.write('<br>' + "3-carsamba");
// } else if(day==="persembe"){
//   document.write('<br>' + "4-persembe");
// } else if(day==="cuma"){
//   document.write('<br>' + "5-cuma");
// } else if(day==="cumartesi"){
//   document.write('<br>' + "6-cumartesi");
// } else if(day==="pazar"){
//   document.write('<br>' + "7-pazar");
// } else {
//   document.write('<br>' + "gün yanlış çalışıldı");
// }

// // switch - case

// switch(day){
//     case "pazartesi":
//         document.write('<br>' + "1-pazartsi");
//         break;
//     case "sali":
//         document.write('<br>' + "2-sali");
//         break;
//     case "carsamaba":
//         document.write('<br>' + "3-carsamba");
//         break;
//     case "persembe":
//         document.write('<br>' + "4-persembe");
//         break;
//     case "cuma":
//         document.write('<br>' + "5-cuma");
//         break;
//     case "cumartesi":
//         document.write('<br>' + "2-cumartesi");
//         break;
//     case "pazar":
//         document.write('<br>' + "7-pazar");
//         break;
// }

// return break continue
// return : bir şey döndürüyor (function durdurmak)
// break : döngüyü kırmak
// continue : sadece o şart için çalışma ama sonrasında devam et

//////////////////////////////////////////////////////////
// LOOP : DÖNGÜLER
// iterative fro
// 1 arttrımak
// i++
// i = i + 1
// i += 1

// document.writeln("<br>" + (1+2+3+4+5+6+7+8+9+10) + "<br>");

// var sum = 0;
// for (var i = 1; i <= 10; i++) {
//     // document.writeln(i)
//     sum += i;
// }
// document.writeln("<br>" + sum + "<br>");

// // while 
// var  x = 1;
// sum2 = 0;
// while (x <= 10){
//     sum2 = sum2 + x;
//     x++;
// }
// document.writeln("<br>" + sum2 + "<br>");

// // do-while : şart sağlansın yada sağlanmasın en az bir kere çalışır
// var sum3 = 0;
// var y = 1;
// do{
//     sum3 = sum3 + y;
//     y++;
// } while(y <= 10);
// document.writeln("<br>" + sum3 + "<br>");

// ÖDEV (if else for break continu)
// Fonksiyonlarla yapın
// Örnek: 1 ile kullanıcın vereceği (prompt) bitiş sayısını belirleyelim Exam göre 
// kullanıcı : 5 verdi diyelim 1<=X<=5
// 1.adım kaç tane sayı alır
// 2.adım sayı toplamarı var
// 3.adım kaç tane tek sayı var
// 4.adım : kaç tane çift sayı var

// Eğer verilen sayılardan 7 sayısı varsa bunu eklemesin (continue) 1-8 verdi mesela
// Eğer bitiş sayısı 100 fazla ise çalışmasın (break)
// Eğer kullanıcı başlangıç sayıdan küçük girerse uyaralım başlangıçtan büyük sayı istesin
// Eğer kullanıcı secret key girerse yani 44 sayısını girerse program çalışmasın dursun

//UserData
// function userData(){
//     var number = Number(prompt("Lütfen bitiş sayısnı giriniz : "));
//     if(number <= 1){
//         return "Lütfen 1'den büyük sayı giriniz."
//     }
//     else{
//         return number;
//     }
// }

// // main function
// function main(){
//     var number = userData();
//     // document.write("<br>" + number);
//     var sum = 0, 
//     couner=0; // toplam ve sayı adeti
//     var even=0, 
//     evenSum=0,
//      evenNumber=0; // çift sayı
//     var odd=0,
//      oddSum=0, 
//      oddNumber=0; // tek sayı

//     for(var i=1; i <= number; i++){
//         // SecretKey
//         if(number === 44){
//             alert(number + " SecretKey verildi. Çıkış yapıldı.")
//             break;
//         }

//         // 100'den fazla
//         if(i == 100){
//             alert("Sayı : " + number + " - 100'den fazla hesaplayamam.");
//             break;
//         }

//         // Special Data : 7
//         if(i == 7){
//             alert("Sayı : " + number + " dahil etmiyorum");
//             continue;
//         }

//         // toplam
//         sum += i;
//         // sum = sum + i;
//         // sum++ 

//         // çift
//         if(i % 2 == 0){
//             evenSum += i;
//             even++;
//             evenNumber = String(evenNumber).concat("-" + i);
//         }

//         if(i % 2 == 1){
//             oddSum += i;
//             odd++;
//             oddNumber = String(oddNumber).concat("-" + i);
//         }

//     }

//     document.write("<br>" + "verilen Sayı : " + number);
//     document.write("<br>" + "dahil edilen Sayı : " + (number-1));
//     document.write("<br>" + "verilen Sayı Toplamı : " + sum + "<br>");
    

//     document.write("<br>" + "çift sayı adeti : " + even);
//     document.write("<br>" + "çift sayı toplamı : " + evenSum);
//     document.write("<br>" + "çift sayı nelerdir : " + evenNumber + "<br>");

//     document.write("<br>" + "tek sayı adeti : " + odd);
//     document.write("<br>" + "tek sayı toplamı : " + oddSum);
//     document.write("<br>" + "tek sayı nelerdir : " + oddNumber);

// }
// main();

//////////////////////////////////////////////////////
/// Debug nasıl atılır ?
// http://127.0.0.1:5501/tutorials/js/javascript.html
//.vscode ==> launch.json
//////////////////////////////////////////////////////

// DATE GET
// var tarih = new Date();
// document.write("<br>" + tarih);
// document.write("<br>" + "Gün : " + tarih.getDate());
// document.write("<br>" + "Yıl : " + tarih.getFullYear());
// document.write("<br>" + "Dakika : " + tarih.getMinutes());
// document.write("<br>" + "Ay (0) : " + tarih.getMonth());
// document.write("<br>" + "<br>");

// // DATE SET
// var tarih2 = new Date("2015-1-1");
// document.write("<br>" + tarih);
// document.write("<br>" + "Gün : " + tarih2.getDate());
// document.write("<br>" + "Yıl : " + tarih2.getFullYear());
// document.write("<br>" + "Dakika : " + tarih2.getMinutes());
// document.write("<br>" + "Ay (0) : " + tarih2.getMonth());

// function getDateHoursControl(){
//    var hour = new Date().getHours();
//     if(hour >= 13){
//         document.write("<br>" + "Öğleden sonra");
//     } else{
//         document.write("<br>" + "Öğeleden önce");
//     }
// }
// getDateHoursControl();

// Ödev: Kullanıcı tarafından girilen şifre ve şifre doğrulama
// validation password - repassword

//////////////////////////////////////////////////////
// JavaScript single Thread

// function bodyFunction(){
//     document.write("<br>" + " 3 saniye sonra gel");
// }

// setTimeout(bodyFunction, 3000);

// 1- Callback Function
// Bir fonksiyonunun bitip diğerinin başlaması
// function ikinci(value){
//     document.write("<br>" + "ikinci fonksiyon çalıştı " + value);
// }

// // Ana fonksiyon
// function birinci(number1, number2,callback){
//     var result = number1 * number2;
//     callback(result);
// }

// birinci(4,6, ikinci);

//++++++++++++++++++++++++++
// 2- Immedia function : Fonksiyonu çağırmadan gelsin - doğrudan, dolaysız, derhal 
// ()();

// (function deneme44(){
//     document.write("<br>" + "deneme");
// })();


///////////////////////////////////////////////////////////////////////////////////////
// Dizi :  birden fazla değer tutmak - colection mantığı var
// push() -> dizide sona 1 eleman ekleme
// unshift()  -> dizide başa 1 eleman ekelme
// pop() -> dizide son elemanı çıkartır
// shift()  -> dizide ilk elemanı çıkartır
// toString() -> diziyi string'e çevirir
// sort()  -> küçükten büyüğe sıralama
// reverse() -> dizide ters sıralama yapar
// join() -> dizide her bir elemana ekleme yapar
// concat() -> String'de en sona ekleme yapar
// split() -> String verileri dizye çevirir

// 1.gösterim ==> var dizi=[]  
// 2.gösterim ==> var dizi2 = new Array();

// var array = [1,5,true,"merhabalar",55];
// console.log(array);
// diziler sıfırdan indis başlar
// dizi.length ==> son elemana erişmek

// Dinizin elemanlarını ekrana yazdırma
// iterative for
// for(var i=0; i < array.length; i++){
//     document.write("<br>" + array[i]);
// }
// document.write('<br>' +"****************")

// // for-in (for ever index)  - javdaki foreach
// for(temp in array){
//     document.write("<br>" + temp + "==>" +array[temp]);
// }
// document.write('<br>' +"****************")

// // for-of (for over members)
// // index numrası lazım değilse bunu kullanabiliriz.
// for(temp of array){
//     document.write("<br>" + temp);
// }

// ++++++++++++++++++++++++++++++++++++++++++++
// Dizi fonksiyonları

// EKLEME
// push() -> Var olan dizinin son elemanına veri eklemek
// array.push(" son");
// for(temp of array){
//     document.write("<br>" + temp);
// }
// document.write('<br>' +"****************")

// // unshift() -> Var olan dizinin başına veri eklemek
// array.unshift(" önce");
// for(temp of array){
//     document.write("<br>" + temp);
// }
// document.write('<br>' +"****************")

// ÇIKARMA
// var dizi = [1,5,true,"merhabalar",55]

// // pop() -> Sondan bir eleman çıkarmak
// dizi.pop()
// for(temp of dizi){
//     document.write("<br>" + temp);
// }
// document.write('<br>' +"****************")

// var dizi = [1,5,true,"merhabalar",55]

// // shift() -> Başlangıçtan bir eleman çıkarmak
// dizi.shift()
// for(temp of dizi){
//     document.write("<br>" + temp);
// }

// +++++++++++++++++++++++++++++++++++++
// sort() -> kçükten büyüğe sıralama

// var array = ["malatya","istanbul","ankara","izmir","muş","bitlis","sivas"]

// array.sort();
// for (var temp of array){
//     document.write("<br>" + temp);
// }

// reverse() -> büyükten küçüğe sıralama, ters sıralama
// var dizi = ["malatya","istanbul","ankara"]
// dizi.reverse();
// for (var temp of dizi){
//     document.write("<br>" + temp);
// }

// büyükten küçüğe sıralama -> dizi.sort().reverse();
// diziyi önce küçükten büyüğe sonra reverse
// var dizi = ["malatya","istanbul","ankara"]
// dizi.sort().reverse();
// for (var temp of dizi){
//     document.write("<br>" + temp);
// }

// +++++++++++++++++++++++ Dizi konuları
// function arrayValue(){
//     var dizi = ["java","spring","hibernate","spring"]
//     document.write("<br>" + dizi[0] +dizi[1] + dizi[2]);

//     // dizinin ilk elemanına erişmek
//     document.write("<br>" + "dizinin ilk elemanı : " + dizi[0]);

//     // dizinin son elemanına erişmek
//     document.write("<br>" + "dizinin son elemanı :" + dizi[dizi.length-1]);
    
//     var diziEleman = dizi[0]; //string
//     document.write("<br>" + typeof diziEleman);
// }
// arrayValue()

// // diziyi string'e nasıl çeviririm
// var aylar = ['Ocak', 'Şubat', 'Mart', 'Nisan'];  
// document.write(aylar.toString());

// ---------------------------------------------
// +++++++++++++++++++++ dizi string'e çevirme
// dizi string'e çevirme --> dizi.toString();
// string, concat() --> concat sadece kelimenin sonuna ekler

// function arrayToString(){
//     var dizi2 = ["java","spring","hibernate","MVC","Data"];
//     document.write("<br>" + dizi2.toString());
//     console.log(dizi2.toString().toUpperCase().concat(" 1 kere ekle"));
// }
// arrayToString();

// ++++++++++++++++++++++++++++ join
// join -> her bir elemana erişim sağlamak
// join -> string verilere çevirmek
// function arrayJoin(){
//     var dizi3 = ["java","spring","hibernate","MVC","Data"];
//     document.write("<br/>" + dizi3.join())
//     document.write("<br/>" + dizi3.join(' '))
//     document.write("<br/>" + dizi3.join('-'))

//     var value = dizi3.join();
//     document.write("<br/>" + typeof value)

//     var value2 = dizi3.join().startsWith("j");
//     document.write("<br/>" + value2)
// }
// arrayJoin()

// split() -> string elemanları dizyie çevirmek

// function arraySplit(){
//     var dizi4 = "java , spring, +hibernate, MVC, Data";
//     document.write("<br>" + dizi4);
    
//     var dizi5 = [];
//     console.log(dizi4.split(" ")) // regex
    
//     dizi5 = dizi4.split("+"); // + işaretine göre parçalama
//     console.log(dizi5)

//     for(var i=0; i < dizi5.length; i++){
//         console.log(dizi5[i])
//     }
 
// }
// arraySplit();

// -----------------------------------
// ÖDEV..
// bilgisayar tarafından rastgele rastgele oluşturulmuş kullanıcı tarfaından
// bitiş sayısına göre sayılar oluşturulsun. Bu sayıları bir diziye atama
// yapalım. 1 ile 10 arasında
// bu sayılardan ilk eleman -> dizi[0]
// bu sayılardan son eleman
// bu sayıların küçükten büyüğe sıralama
// bu sayıları büyükten küçüğe sıralama
// bu sayıların toplamları
// bu sayıların çift sayı toplamları
// bu sayıların tek sayı toplamları
// bu sayıların her birine 1 ekleyerek yeni bir dizi oluşturalım

// var bitis = prompt("Bitiş sayısı giriniz :")
// Math.round(Math.random()*11);

/* 
var bitis = prompt("Bitis sayısını giriniz: ")
var sayilar = [];

for(var i=1; i <= bitis; i++){
    var sayi = Math.floor(Math.random() * 10) + 1;
    sayilar.push(sayi);
}
document.write("<br>" + sayilar);

// 1- Dizinin ilk elemanı
document.write("<br>" + "İlk eleman : " + sayilar[0])

// 2- Dizinin son elemanı
document.write("<br>" + "Son eleman : " + sayilar[sayilar.length-1])

// 3- Sayıların küçükten büyüğe sırlanması
var temp = sayilar.sort()
document.write("<br>" + "Küçükten büyüğe sıralama : " + temp)

// 4 Sayıların  büyükten küçüğe sırlanması
var temp2 = sayilar.sort().reverse();
document.write("<br>" + "Büyükten küçüğe sıralama : " + temp2)

// 5- Bu sayıların toplamı
var sum = 0;
for(var i=0; i <= sayilar.length; i++){
    sum = sum + Number(sayilar[i]);
}
document.write("<br>" + "Toplam : " + sum);

for(temp3 of sayilar){
    sum = sum + temp3;
}
document.write("<br>" + "Toplam : " + sum);
 */

// --------------------------------------

// slice() -> dizi clone
// slice : bize dizi döndürür
// function arrayIndexClone(){
//     var dizi = [1,2,3,4,5,6,7,8,9]
//     console.log(dizi)

//     // 3.indis'ten itibaren diziyi kopyaladı
//     console.log(dizi.slice(3))

//     // istediğimiz dizi aralığını vererek dizi döndürme
//     console.log(dizi.slice(0,2));
// }
// arrayIndexClone();

// splice() -> diziye veri ekleme silme 
// bloklar şeklinde

// console.log("***************************")

/*function arrayBlockDelete(){
    var dizi = [1,2,3,4,5,6,7,8,9]
    // verilen idisten itibaren kopyaladı (indis dahildir)
    // console.log(dizi.splice(3));
    
    // 0 başlama indisi, 2.bitiş indisi ()
    //console.log(dizi.splice(0,2));

    // 0: başlama indisi
    console.log(dizi);
    dizi = dizi.splice(0,3,44)
    console.log(dizi);

    for(temp of dizi){
        console.log(temp)
    }
}*/
// arrayBlockAddDelete();

// function arrayBlockAdd(){
//     var dizi = ["1","2","3","4"];

//     console.log(dizi.splice(2, 0, "Lemon", "Kivi"));
//     console.log(dizi);
// }
// arrayBlockAdd();

// https://www.w3schools.com/js/js_es5.asp
// https://www.w3schools.com/js/js_es6.asp

// housting : önce değeri daha sonra türü belirttiğimiz durumlara
// housting denir.
// deneme = 44;
// var deneme;
// document.write("<br>" + deneme);


////////////////////////////////////////////////////////////////////
// OBJECT : özellikleri
// this : unutma
// anonymous function

// var obj = {
//     "adi" : "Yiğit",
//     "soyadi" : "Özen"
// };
// console.log(obj);

// var obj2 = new Object();
// console.log(obj2)

/*
var person = {
    "adi" : "Yiğit",
    "soyadi" : "Özen",
    "deneyim" : 9,
    "isLogin" : true,
    "teknolojiler" : ["servlet","jsp","jsf","spring"],
    "adiSoyadi" : function(){
        return this.adi.toUpperCase();
    },
    "java" : {
        "adi" : "JavaSe",
        "db" : "H2DB"
    }
};
console.log(person);
console.log(person.adi);             // string
console.log(person.soyadi);          // string
console.log(person.deneyim);         // number
console.log(person.isLogin);         // true
console.log(person.teknolojiler[0]); // dizi
console.log(person.adiSoyadi())      // fonksiyon
console.log(person.java.db)          // object

// obje'ye sonradan veri eklemek için kullanıyoruz
person.eklenen = "Eklenen veri";
console.log(person.eklenen);

*/

// Literal Template
// function esLitealTemplateMultiline(){
//     var valueTem1 = "Merhabalar <br> nasılsınız <br> yeni " + 
//      "teknolojiler öğreniyorum";
//     document.writeln("<br>" + valueTem1);
//     console.log(valueTem1 + "\ndiğer kelime");

//     // Multiline : back tagi alta atti
//     var valueTem2 = `Merhabalar
//     nasılsınız`;
//     console.log(valueTem2);
    
// }
// esLitealTemplateMultiline();

// // 2- Interpolation `${}`
// function esLitealInterpolation(){
//     var adi44 = "Yiğit";
//     var soyadi44 = "Özen";
//     var valueInter1 = adi44 + " \n" + soyadi44;
//     console.log(valueInter1);

//     var valueInter2 = `adım : ${adi44} soyadım : ${soyadi44}`
//     console.log(valueInter2);
// }
// esLitealInterpolation();

// 3- Html Teplate
/*
function normalHtmlTeplate(){
    var country = "Turkey";
    var html = 
    "<ul>" + 
        "<li>"+
            country+
        "</li>"+
            country.toUpperCase()+
    "</ul>";

    document.body.innerHTML=html;
}
normalHtmlTeplate()

function esLiterallHtmlTeplate(){
    var country = "Turkey";
    var html = 
    `
    <ul>
        <li>${country}</li>
        <li>${country}</li>
    </ul>
    `;   

    document.body.innerHTML = html
}
esLiterallHtmlTeplate() */

////////////////////////////////////////////////////////////////////////////

//ÖDEV-1
//y=3x+4k ==> 1.dereceden 2 bilinmyenli denklem
//Kullanıcı tarafından alınan x ve k değerlerini hesaplayan algoritma yazınız ?

//ÖDEV-2
//Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
//Formül:(x*9/5)+32

//ÖDEV-3 verilen bir sayının negatif mi pozitif mi olduğunu bulan algoritma ?

//ÖDEV-4 Kullanıcı tarafından aldığımız password ile repassword girilsin doğru ve yanlışı göstersin ?

//ÖDEV-5
//Zamanın dinamik olarak alıp hangi gün olduğunu gösteren arrow function algoritmasını yazalım switch-case  
// new Date().getDay() 0=pazar 1=pazartesi

//ÖDEV-6
//Login userEmail,userPassword kullanıcıdan aldığımız değeri db ile karşılaştıracak eğer doğru ise 
//adminFunction'a gönderecek 4 kalan haktan aşağı doğru düşecek eğer kalan hak sayımız 0 olursa kullanıcı bloke olsun
// dbUserEmail="deneme@gmail.com"
// dbUserPassword="root"

//ÖDEV-7
//Zamanın dinamik olarak alıp hangi gün olduğunu gösteren Immedia function algoritmasını yazalım switch-case 
//  new Date().getDay()
// ()()

//ÖDEV-8
//Zamanın dinamik olarak alıp hangi gün olduğunu gösteren Arrow function algoritmasını 
//yazalım switch-case   new Date().getDay()
// let deneme= ()=>{ }

//ÖDEV-9
//Zamanın dinamik olarak alıp hangi gün olduğunu gösteren Anonymous function algoritmasını yazalım switch-case   new Date().getDay()
// let deneme= function (){ }

//ÖDEV-10
//Sayı bulma oyunu: 1-10 arasında rastgele sayılar olsun bizde tahmin etmeye çalışalım bizim tahmin sayımız 5 olsun eğer biz sayıdan büyükse büyük tahmin eğer sayıdan küçükse küçük tahmin. ve sonunda eğer bulursak kaçıncı tahminde bulduğumuz bize söylesin ?

////////////////////////////////////////////////////////////////////////////

let object= {
    "adi":"Yiğit",
    "soyadi":"Özen",
    "isTurkis":true,
    "diller":2,
    "frontend":["Html5","css3"],
    "fullStack":function(){ 
        return this.adi.toUpperCase()
    },
    "spring":{
        "core":"ioc",
        "database":"h2db",
        "mvc":"@controller"
    }
}
// Anonymous - ismi olmayan fonksiyonlar
// console.log(object);
// console.log(object.adi  + " " + object.soyadi);
// console.log(object.fullStack());

// create object
// object'imize daha sonra bir eleman eklemek istersek yazıyoruz.
object.database = "postgresql";

// delete object attributes
delete object.soyadi;

// Nested Object class : obje içinde obje oluşturmak isteyebiliriz
// obje içindeki objeye erişmek - 2 şekilde de gösterebiliriz
//alert(object.spring.database);
// alert(object.spring["mvc"]);
// alert(object["spring"]["core"])

// Object Array
// alert(object.frontend[1])


// for-in
var result = "";
for(let temp in object){
    result += object[temp] + " "
}
// alert(result)

// ++++++++++++++++++++++++++++++++++++++++++
// Object Constrouctor : Nesne ilk oluşturulduğunda oulşacak olan yapılar
// parametreli constructor
function Student(adi, soyadi,plaka){
    this.adi = adi;
    this.soyadi = soyadi;
    this.plaka = plaka;
    console.log(this);
}

var result = new Student("Yiğit","Özen","10.5");

///////////////////////////////////////////////////////////////777
function toplam(){
    let number1=10,number2=20,sum=0;
    sum=number1+number2;
    console.info(sum)
    console.log(sum)
    console.warn(sum)
    console.error(sum)
   // console.clear();
  }

  function domFunction(){
    // alert("deneme")
    //document.getElementById("dom_id").innerHTML="<b><i>Değiştirildi</i></b>";
    //document.getElementsByName("dom_name")[0].innerHTML="<b><i>Değiştirildi</i></b>";
    //document.getElementsByTagName("h5")[0].innerHTML="<b><i>Değiştirildi</i></b>";
    //document.getElementsByClassName("dom_class")[0].innerHTML="<b><i>Değiştirildi</i></b>";
    document.getElementsByClassName("dom_class")[0].innerText="Değiştirildi";
   
    document.getElementsByClassName("dom_class")[0].style.color="yellow";
    document.getElementsByClassName("dom_class")[0].style.backgroundColor="black";
    document.getElementsByClassName("dom_class")[0].style.fontSize="15px";
   
   
   console.log(document.getElementById("a_id").getAttribute("href"))
   let href=document.getElementById("a_id").setAttribute("href","http://www.deneme.com")
   console.log(href)
   }


/////////////////////////////////////////////////////////////////////////////////////////
// JS > HTML > CSS      alert("deneme")

function dom_javascript(){
    //document.getElementById("jquery_id").innerHTML="<b><mar>JavaScript Buradaydı</mar></b>";
    document.getElementById("jquery_id").innerText="JavaScript sadece text";
    document.getElementById("jquery_id").style.color="red";
    document.getElementById("jquery_id").style.fontSize="55px";
}


// $(document).ready(function(){}) - altaki ile aynı şey
//$(function(){})

/*function dom_jquery(){
    $('#jquery_id').html("<b><mar>JQuery Buradaydı</mar></b>");
    $('#jquery_id').text("JQuery sadece text");
    
    $('#jquery_id').css("color","blue").css("fontSize","45px");

    let allCssObject = {
        color:"blue",
        fontSize:"45px",
        boxShadow:"1px 1px 3px 1px rgba(255,255,255,.8)"
    }
    $('#jquery_id').css(allCssObject);
}*/


// jquery
// $(selector).attributes();
// $('#jquery_id').html("<b><mar>JQuery Buradaydı</mar></b>")
//document.getElementById("jquery_id").innerHTML="<b><mar>JQuery Buradaydı</mar></b>";

/*$( "#target" ).click(function() {
    alert( "Handler for .click() called." );
}); */

function dom_jquery(){
    $('#jquery_id').html("<b><mark><i>jQuery</i></mark></b>");
    $('#jquery_id').text("jQuery sadece text");
    
    $('#jquery_id').css("color","blue").css("fontSize","45px");
    let allCssObject={
      color:"blue",
      fontSize:"45px",
      boxShadow:"1px 1px 3px 1px rgba(255,255,255,.8)"
    };
    $('#jquery_id').css(allCssObject);
    }
    
    
      $("#target").click(function() {
        alert( "Handler for .click() called." );
      });
    
      $( "p" ).click(function() {
        $( this ).slideUp();
      });


   
