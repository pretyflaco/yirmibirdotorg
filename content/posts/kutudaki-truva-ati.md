---
index: 25
title: "Kutudaki Truva Atı: İmza Cihazınızı Neden Kendiniz Kurmalısınız?"
meta: "Hazır donanım cüzdan yerine genel amaçlı parçalarla kendi imza cihazınızı kurmayı savunan 'aşırı paranoyak' Bitcoin'cileri hatırlıyor musunuz? Malezya'dan çıkan casus çipli Ledger'lardan sonra artık pek de çılgınca gelmiyorlar."
author: "Yirmibir"
authorURL: "https://x.com/yirmibirbitcoin"
translator: ""
translatorURL: ""
slug: "kutudaki-truva-ati"
flag: "turkey"
img: 'kutudaki-truva-ati'
tags:
    - original
---
Hazır, Bitcoin'e özel bir donanım cüzdan satın almak yerine genel amaçlı, piyasada herkesin alıp sattığı parçalarla kendi imza cihazınızı kendi ellerinizle kurmanız gerektiğini savunan ve buna gerekçe olarak da belirsiz "tedarik zinciri saldırılarını" gösteren o aşırı paranoyak Bitcoin'cileri hatırlıyor musunuz?

Artık pek de çılgınca gelmiyorlar.

## Ne Oldu?

Ekim 2026'nın ikinci haftasında Ledger, Güneydoğu Asya'daki bazı kullanıcıların fonlarını kaybettiğine dair raporları incelediğini duyurdu. Mağdurların ortak noktası, cihazlarını Malezya merkezli yetkili satıcı CryptoBilis'ten almış olmalarıydı. Ledger, soruşturma sonuçlanana kadar CryptoBilis'ten tüm satış ve sevkiyatları durdurmasını istedi; son 90 gün içinde bu satıcıdan cihaz alanlara kurulum yapmamalarını, kurulum yapmış olanlara ise varlıklarını yeni bir tohum (seed) ile oluşturulmuş yeni bir cihaza taşımalarını tavsiye etti.

Meseleyi asıl aydınlatan, Mt. Gox'un eski CEO'su ve bugün Tibane Labs'te donanım tersine mühendisliği yapan Mark Karpelès oldu. Karpelès'in elindeki Malezya çıkışlı Ledger, kusursuz bir streç ambalajla gelmişti. Cihazı açtığınızda bile ilk bakışta hiçbir şey göremiyordunuz; implant, ekranın arkasındaki dolgu malzemesinin bulunması gereken boşluğa ustaca gizlenmişti.

İmplantın içinde ne mi var? Bir LTE modülü, bir anten, bir e-SIM ve Ledger'ın ekranına veri gönderdiği SPI hattını dinleyen bir mikrodenetleyici. Karpelès'in tarifiyle, ekrana giden bir dizi bir ve sıfırı okuyarak ekranda ne gösterildiğini birebir görebiliyorsunuz; kurulum sırasında kullanıcıya gösterilen 24 kelime de buna dahil. Tohum oluşturulur oluşturulmaz veri dışarı sızdırılıyor. Saldırgan da sizin adreslerinizi sessizce izleyip her şeyi boşaltmak için en uygun anı seçiyor. Söz konusu SIM, 2x2 milimetrelik bir çipten ibaret.

Karpelès'in tespitine göre bu implantlar, elle lehimlenmiş bir avuç kablodan, orijinal donanımla uyum içinde görünecek şekilde tasarlanmış seri üretim baskı devre kartlarına evrilmiş. Diğer bir deyişle, karşımızdaki şey garajda çalışan amatör bir dolandırıcı değil, sanayi ölçeğinde çalışan bir operasyon.

Hikâyenin bir de şirket tarafı var. CryptoBilis'in kurucu ortaklarından Arravind Prabu, şirketin bu yılın başlarında satıldığını, kendilerinin tüm operasyonlardan, sistem erişimlerinden ve yönetimden tamamen çekildiklerini ve sözleşmedeki gizlilik hükmü nedeniyle 19 Ekim'e kadar bunu kamuoyuna açıklayamadıklarını söylüyor. Bazı hesaplar şirketi satın alanın bir Çin şirketi olduğunu iddia ediyor; bu iddia henüz bağımsız olarak doğrulanmış değil. Kayıpların boyutuna dair dolaşan rakamlar da öyle. Ancak bir şey açık: Yetkili satıcı etiketi, kutunun içinden ne çıkacağının garantisi değil.

## Orijinallik Kontrolü Neden Kurtarmadı?

Ledger cihazları, içlerindeki güvenli elemanın (secure element) orijinal olduğunu kriptografik olarak kanıtlayabilir. Sorun şu ki bu saldırı güvenli elemana dokunmuyor bile. Çip orijinal, yazılım orijinal, imza orijinal. Sızıntı, cihazın kullanıcıyla konuştuğu yerden, yani ekrandan yaşanıyor. Karpelès yıllar önce Ledger'a, orijinallik imza şemasının arayüzün araya girilerek dinlenip dinlenmediğini doğrulamanın hiçbir yolu olmadığını ve kurcalanmayı belli eden bir sevkiyat sistemine ihtiyaç olduğunu söylediğini hatırlatıyor.

Burada asıl mesele teknik bir açıktan çok daha temel bir şey: Güvendiğiniz şey bir şirketin kendisi değil, o şirketin ürününü üretenler, taşıyanlar, depolayanlar ve size satanlardan oluşan uzun bir zincirin tamamıdır. O zincirin herhangi bir halkasında, bu cihazın Bitcoin saklamak için alındığını bilen herhangi biri, ona sizin göremeyeceğiniz bir şey ekleyebilir.

## Kendin Kur Modeli Neyi Çözer?

SeedSigner geliştiricilerinden biri bu hafta, tasarımlarının en baştan beri tam da bu tür istismarları öngördüğünü hatırlattı. SeedSigner'ın modeli birkaç basit fikre dayanıyor:

- **Bitcoin'e özel olmayan parçalar**, üretim öncesi tedarik zinciri saldırılarını zorlaştırır. Bir Raspberry Pi Zero, bir kamera modülü ve küçük bir ekran milyonlarca farklı amaçla satılır. Kimse hangisinin bir gün tohum taşıyacağını bilemez.
- **Cihazı kendiniz monte etmek**, üretim sonrası saldırıları zorlaştırır. Kutuyu açan, parçaları birleştiren ve içine ne girdiğini gören sizsiniz.
- **Genel parçaları kendiniz satın almak**, sizi bir "Bitcoin müşterisi" listesinden çıkarır. Bir donanım cüzdan firmasının müşteri veritabanının sızdırılmasının, kullanıcılarını oltalama saldırılarına ve hatta kapılarına gelen tehditlere açık hâle getirdiğini daha önce gördük. Elektronik dükkânından Raspberry Pi alan biri ise hiçbir listede "Bitcoin sahibi" olarak görünmez.
- **Zorunlu kendi entropini getir** yaklaşımı, yani tohumu zar ya da kamera görüntüsüyle kendiniz üretmeniz, cihazın size önceden belirlenmiş ya da zayıflatılmış bir anahtar vermesi riskini azaltır.
- **"Resmi" bir koordinatör yazılımın olmaması**, mahremiyet sızıntılarını azaltır. Cihaz; Sparrow, Nunchuk ya da kendi düğümünüze bağlı herhangi bir cüzdanla çalışır.

SeedSigner ayrıca durumsuzdur (stateless): Tohumu hafızasında saklamaz, her kullanımda bir QR kodundan okur ve cihaz kapandığında unutur. İnternete, Wi-Fi'ye ya da Bluetooth'a bağlanmaz. Bilgisayarla yalnızca kamera ve ekran üzerinden QR kodlarıyla konuşur. İçine LTE modülü gizlenmiş bir cihaz için bundan daha düşmanca bir ortam düşünmek zor.

Tek seçenek de SeedSigner değil. Krux, Kendryte K210 tabanlı genel geliştirme kartları üzerinde çalışır. Specter DIY, hazır bir STM32 geliştirme kartıyla kurulur. Blockstream Jade'in açık kaynak yazılımı ise piyasada kolayca bulunan ESP32 kartlarına yüklenebilir. Hepsinin ortak noktası aynıdır: Donanım, Bitcoin'den habersiz bir dünyadan gelir; Bitcoin'e dair olan her şeyi ise siz, doğrulayarak, sonradan eklersiniz.

## Bedava Öğle Yemeği Yok

Elbette bu modelin de bedelleri var ve bunları saklamak dürüst olmaz.

Öncelikle, kendin kur cihazların çoğunda güvenli eleman yoktur. SeedSigner bunu durumsuz tasarımla telafi eder, ancak bu, tohum yedeğinizi (kâğıt, çelik plaka ya da SeedQR) korumanın tamamen size kaldığı anlamına gelir. İkincisi, yazılımı doğrulamak sizin işinizdir: İndirdiğiniz imajın imzasını GPG ile kontrol etmeden kartınıza yazarsanız, tedarik zincirindeki riski donanımdan yazılıma taşımış olursunuz. Üçüncüsü, kullanım deneyimi daha zahmetlidir. Kamera, QR kodu, mikro SD kart, zar... Bunların hepsi hazır bir cihazın sunduğu "kutudan çıkar, kullan" rahatlığından uzaktır.

Ancak bu zahmetin her bir adımı, sizin yerinize başkasına güvenmek zorunda kaldığınız bir halkayı zincirden çıkarır. Satın aldığınız şey kolaylık olduğunda, karşılığında verdiğiniz şey de güvendir.

## Peki Şimdi Ne Yapmalı?

- Bir Ledger'ınız varsa ve onu tanımadığınız bir satıcıdan, pazar yerindeki üçüncü taraf bir mağazadan ya da ikinci el aldıysanız, Ledger'ın cihaz bütünlüğü kontrol rehberini uygulayın. Şüpheniz varsa yeni bir cihazda yeni bir tohum oluşturup varlıklarınızı taşıyın.
- Donanım cüzdanı her zaman doğrudan üreticiden alın. Bu, Malezya vakasında görüldüğü gibi her riski ortadan kaldırmaz, ama zinciri kısaltır.
- Daha ileri gitmek isterseniz bir SeedSigner kurun. Parçaları sıradan elektronik satıcılarından, Bitcoin'den hiç bahsetmeden alın. Yazılımı kendiniz doğrulayın, tohumunuzu zarla kendiniz üretin.
- Büyük miktarlar için tek bir cihaza ya da tek bir üreticiye bel bağlamayın. Farklı üreticilerin cihazlarıyla, hatta bir hazır ve bir kendin kur cihazla oluşturulmuş bir çoklu imza (multisig) düzeni, bu tür saldırılara karşı en sağlam savunmalardan biridir. Bir halka kırılsa bile zincir kopmaz.

Konuya pratik olarak girmek isteyenler için Plan ₿ Network'ün "Build your own hardware wallet" başlıklı topluluk yayını iyi bir başlangıç noktası: [youtu.be/h7r1DjRHsGU](https://youtu.be/h7r1DjRHsGU)

## Sonuç

Truva'lılar, kapılarının önüne bırakılan tahta atı kendi elleriyle şehre çektiler; çünkü atın dışı kusursuzdu ve bir hediyeye benziyordu. Kusursuz bir streç ambalajın içinde gelen bir donanım cüzdan da aynı şekilde güven telkin eder. Ne var ki Bitcoin'in bize öğrettiği ilk ders, güvenin bir ambalaja, bir logoya ya da bir "yetkili satıcı" etiketine değil, doğrulamaya dayanması gerektiğidir.

Güvenme, doğrula. Bu, düğümünüz için geçerli olduğu kadar imza cihazınız için de geçerli.

### Kaynaklar

- [Ledger Support: CryptoBilis açıklaması](https://x.com/Ledger_Support/status/2108551100613714002)
- [Mark Karpelès: implantın Malezya'dan gelen Ledger'daki yeri](https://x.com/MagicalTux/status/2108576506704548179)
- [Mark Karpelès: tohumun nasıl sızdırıldığı](https://x.com/MagicalTux/status/2108579301415436727)
- [Mark Karpelès: 2x2 mm casus SIM çipi](https://x.com/MagicalTux/status/2108619685751374064)
- [Tibane Labs: Ledger Nano X implant araştırması](https://www.tibane.net/research/ledger-nano-x-implant)
- [Arravind Prabu: CryptoBilis'in satışı](https://x.com/PrabuArravind/status/2108579734833738143)
- [FatManTerra: CryptoBilis'in yeni sahipleri](https://x.com/FatManTerra/status/2108602684563411240)
- [SeedSigner: kendin kur modelinin önlediği saldırılar](https://x.com/sesi_the_man/status/2108608827574956085)
- [Ledger: cihazınızın kurcalanıp kurcalanmadığını kontrol etme rehberi](https://support.ledger.com/article/4404382029329-zd)
