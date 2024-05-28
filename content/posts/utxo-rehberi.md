---
index: 19
title: "UTXO Rehberi"
meta: "Bitcoin cidden uçtan uca iletilen elektronik nakittir. Özünde bile nakit gibi davranır. Bitcoin'in içinde hesap ve bakiye kavramı yoktur. Bir banka hesabı gibi değil, faturalar ve madeni paralar gibi çalışır."
author: "Theo Mogenet"
authorURL: "https://x.com/theomogenet"
translator: "Emir Yorulmaz"
translatorURL: "https://twitter.com/_untreu"
slug: "utxo-rehberi"
flag: "turkey"
img: 'utxo-rehberi'
tags:
    - translation
---

Bitcoin cidden uçtan uca iletilen elektronik nakittir. Özünde bile nakit gibi davranır. Bitcoin'in içinde hesap ve bakiye kavramı yoktur. Bir banka hesabı gibi değil, faturalar ve madeni paralar gibi çalışır. Bir bankanın yaptığı gibi hesapları takip etmek ve bakiyelerini düzenli olarak güncellemek yerine, Bitcoin protokolü bir işlem ağacı kaydeder; faturaların ve madeni paraların sahiplik geçmişini izler. Bu ağacın en tepesinde coinbase işlemleri, yani bir blok çıkarıldığında yaratılan yeni bitcoinler yer alır. Harcandıklarında, satoshilerin bir kısmı - işlemlerin ifade edildiği daha küçük bitcoin alt birimleri, alacaklı adrese, bazıları işlem ücretlerini ödemek için bir madenciye gidecek ve değişiklik, büyük olasılıkla yeni bir adrese, harcama yapana geri dönecektir. Tüm bu "işlem dalları" çıktı olarak adlandırılır.   
   
Burada akılda tutulması gereken, Bitcoin muhasebe sisteminin yapı taşlarının girdiler, çıktılar ve satoshi cinsinden tutarlar olduğudur. Girdi ya bir coinbase işlemidir (yeni çıkarılmış bitcoin) ya da Harcanmamış İşlem Çıktısı (UTXO) olarak adlandırılan daha önce harcanmamış bir işlemin çıktısıdır ya da bir işlemin birçok girdisi olabileceğinden her ikisinin karışımıdır. Aşağıda, 2009'un başlarında ağın başlatılmasından birkaç gün sonra Satoshi Nakamoto'dan Hal Finney'e, bir girdi - bir coinbase işlemi ve iki çıktı ile Bitcoin Tarihindeki ilk eşler arası işlemin diyagramını görebilirsiniz: Hal'in adresi 10 BTC alıyor ve Satoshi'nin adresinde 40 BTC'lik bir değişim meydana geliyor.   
   
![Mempool](/images/content/blog/utxo-rehberi/mempool.jpg)    
*[Bitcoin tarihindeki ilk işlemin grafiği (Satoshi'den Hal Finney'e).](https://mempool.space/tx/f4184fc596403b9d638783cf57adfe4c75c605f6356fbc91338530e9831e9e16)*   
   
Bitcoin ile ödeme yapmak tıpkı nakitle ödeme yapmak gibidir. Belirli bir kullanıcının toplam varlıklarını değil, yalnızca coinleri ve banknotları takip edebilirsiniz. Burada Satoshi Nakamoto 50 BTC'lik bir banknot harcamış, Hal 10 BTC'lik bir banknot almış ve Satoshi para üstü olarak 40 BTC'lik bir banknot almış gibi. Sadece 10 BTC'yi doğrudan harcayamaz, 50'nin tamamını taşıması gerekir; tıpkı 50 dolarlık bir banknotla 10 dolar ödediğinizde, 50'yi harcamanız ve para üstünü almanız gerektiği gibi, sadece bir parçasını ayıramazsınız. Bu ilk başta açık değildir, çünkü cüzdanınıza baktığınızda bir bakiye gösterir, ancak UTXO'larınızın ayrıntılarını göstermez. Bu bakiye, anahtarlarınızla ilişkili tüm UTXO'ların arayüzde hesaplanan bir toplamıdır, Bitcoin zaman zincirinde var olacak "cüzdan" adı verilen bir şey değildir: harcayabileceğiniz her şeydir, ancak faturalarınızın ve madeni paralarınızın ayrıntıları değildir.   
   
Protokole göre yalnızca coinbase işlemleri ve bunların dalları, çocukları, soyağacı oluşturan ve yapısı gereği süreçte hiçbir şeyin yaratılmamasını sağlayan bir ağaç vardır. Bu, farklı adreslerden bir grup ödeme aldığınızda ki bu DCA veya herhangi bir modern kendi kendine emanet cüzdanı kullandığınızda olağan bir durumdur, birçok UTXO'ya yayılmış coinlerle sonuçlanacağınız anlamına gelir. Ve yüksek ücretler bağlamında, büyük bir işlem yapmak, bu UTXO'ların çoğunu bu yeni işlem için girdi olarak birleştirmeyi gerektireceğinden, bu yüksek işlem maliyetlerine dönüşebilir.   
   
Bu tıpkı alışveriş yaparken kasaptan, süpermarketten, fırıncıdan ve diğer yerlerden aldığınız para üstlerini büyük değerli bir ürün satın almak için kullanmanız gibidir. Daha önce para üstü olarak aldığınız çok sayıda banknot ve bozuk para ile ödeme yapmanın zahmetli olması gibi, aynı anda çok sayıda UTXO harcamak da Bitcoin ağı için zahmetlidir ve bu nedenle sizden yüksek bir ücret talep edilir. Kullandığınız banknotlar ve madeni paralar, önceki alışverişlerinizin para üstü (çıktısı) olup, bir sonraki alışveriş için girdi görevi görecektir. Buradaki ana fikir, Bitcoin'de ne kadar farklı banknot ve jeton kullanırsanız (UTXO'lar), işleminizin veri yükünün o kadar yüksek olacağı ve dolayısıyla işlem ücretinin de o kadar büyük olacağıdır.   
   
## Bitcoin'in İşlem Ücreti Yapısı   
Aslında, işlem ücretlerini belirleyen iki bileşen vardır: ücret oranı ve işlemin byte cinsinden veri boyutu. Ücret oranı, blok alanı için talep ve arzın kesiştiği noktada oluşan bir piyasa oranıdır: bu, biz bitcoin kullanıcılarının başa çıkması gereken bir gerçekliktir. "Ücretler yüksek" dediğimizde, kastettiğimiz şey "ücret oranının yüksek" olduğudur. Çünkü diğer faktör olan işlemin büyüklüğü bir işlemden diğerine değişir ve bu konuda bir şeyler yapabilirsiniz. Bitcoin'de ödenen işlem ücreti gönderilen miktardan bağımsızdır; kişinin kaç satoshi harcadığının değil, zincire ne kadar veri koyduğunun bir fonksiyonudur. Dolayısıyla, bir işlemde ne kadar çok girdi varsa, ücret de o kadar yüksek olacaktır.   
   
Hatta bazen kullanıcılar mevcut ücret ortamında satoshilerinin harcanamaz hale geldiğini fark etmektedir. Bu durum, ücretler UTXO'ları harcamanın taşıdıkları miktardan daha fazla işlem ücretine mal olacağı bir seviyeye ulaştığında ortaya çıkar. Bu nedenle, UTXO'ları periyodik olarak konsolide etmek yaygın bir uygulamadır. Yani, tüm bu şubeleri alın ve gelecekte harcama yapmak için ucuz hale gelecek şekilde tek bir şubede birleştirin. Aşağıda, birçok UTXO'nun tek bir UTXO'da birleştiği varsayımsal bir konsolidasyon işleminin grafik gösterimini ve madencilere ödenen ücreti temsil eden küçük bir çıktıyı görebilirsiniz.   
   
![Consolidation](/images/content/blog/utxo-rehberi/inputs.jpg)    
*Varsayımsal Bir Konsolidasyon İşleminin Grafiksel Gösterimi*   
   
## UTXO'larınızı Nasıl Konsolide Edebilirsiniz?   
Pratikte bu, yeni bir adres oluşturarak ve cüzdanınızda bulunan tüm coinleri bu adrese göndererek yapılır. Sparrow veya Electrum gibi gelişmiş cüzdanlarda, UTXO'larınızın ayrıntılarını görebilir, bu dalların birleşmesine tanık olabilir ve hatta bunları nasıl yeniden gruplandırmak istediğinizi seçebilirsiniz. Bununla birlikte, daha kullanıcı dostu self-custodial cüzdanlarda kullanıcının kafasını karıştırmamak için UTXO'nun ayrıntıları genellikle gizlenir. Bu durumda, sadece yeni bir adres oluşturun ve tüm bakiyenizi bu adrese gönderin. Bitcoin'in tasarımı sayesinde bu işlem tam olarak aynı sonucu verecektir.   
   
Bu mutlaka acilen yapmanız gereken bir şey değildir. UTXO'larınızı birleştirmek için orta ila düşük ücretlerin olduğu bir dönemi bekleyebilirsiniz. Yakın zamana kadar bunu günün her saati zincir üzerindeki etkinliği izleyen bir bitcoin nerd'ü olmadan yapmanın kolay bir yolu yoktu; ancak artık konsolidasyon fırsatlarını yakalamak için [https://feemultiple.bullbitcoin.com/chart/index](https://feemultiple.bullbitcoin.com/chart/index) adresini kullanabilir veya belirli bir eşiğe ulaşıldığında tetiklenen otomatik konsolidasyonları programlamak için API'ımızı kullanabilirsiniz.   
   
Bitcoin'in ücret piyasasının değişken doğasıyla başa çıkmanın bir başka yolu da Bull Bitcoin'de Lightning Network'ü (LN) kullanarak satoshilerinizi bir lightning saklama cüzdanına veya Liquid'de (L-BTC) almak ve ardından ana zincirde takas etmektir. Ancak, UTXO konsolidasyonunda olduğu gibi, zamanlama çok önemlidir, bu nedenle gerçek güç, her iki stratejiyi de verimli bir şekilde uygulamak için BullBitcoin Fee Multiple'ı kullanmaya devam etmektedir.  
   
[Orijinal Makale](https://www.bullbitcoin.com/blog/a-primer-on-utxos?ref=yirmibir.org)  
İlk yayınlanma tarihi: 14/05/2024