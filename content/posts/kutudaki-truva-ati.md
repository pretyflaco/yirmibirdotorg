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

Meseleyi asıl aydınlatan, Mt. Gox'un eski CEO'su ve bugün Tibane Labs'te donanım tersine mühendisliği yapan Mark Karpelès oldu. Karpelès, Ledger'ın duyurusundan önce de implantlı Ledger cihazları üzerinde çalışıyordu ve duyuruyu görünce bunun tam da incelediği şey olabileceğini söyledi. Karpelès'in incelediği Ledger, Amazon'da yarı fiyatına satılıyordu ve Japonya yerine Malezya'dan gönderilmişti; Karpelès'e göre satıcı bir Çin şirketiydi. Cihaz kusursuz bir streç ambalajla gelmişti. Açtığınızda bile ilk bakışta hiçbir şey göremiyordunuz; implant, ekranın arkasındaki dolgu malzemesinin bulunması gereken boşluğa ustaca gizlenmişti.

Karpelès'in tarifine göre implantın içinde bir LTE modülü, bir anten, bir e-SIM ve Ledger'ın ekranına veri gönderdiği SPI hattını dinleyen bir mikrodenetleyici var. Ekrana giden bir dizi bir ve sıfırı okuyarak ekranda ne gösterildiğini birebir görmek mümkün; kurulum sırasında kullanıcıya gösterilen tohum kelimeleri de buna dahil. Tohum oluşturulur oluşturulmaz veri dışarı gönderiliyor, saldırgan da adresleri sessizce izleyip her şeyi boşaltmak için en uygun anı seçiyor. Casus SIM, 2x2 milimetrelik bir çipten ibaret. Karpelès'e göre bu implantlar, elle lehimlenmiş bir avuç kablodan, orijinal donanımla uyum içinde görünecek şekilde tasarlanmış seri üretim baskı devre kartlarına evrilmiş; kayıt altına aldığı en az üç farklı tasarım revizyonu var. Diğer bir deyişle, karşımızdaki şey garajda çalışan amatör bir dolandırıcı değil, sanayi ölçeğinde bir operasyon.

Hikâyenin bir de şirket tarafı var. CryptoBilis'in kurucu ortaklarından Arravind Prabu, şirketin bu yılın başlarında satıldığını, kendilerinin tüm operasyonlardan, sistem erişimlerinden ve yönetimden çekildiklerini, şirketin hesaplarını artık yeni yönetimin işlettiğini ve sözleşmedeki gizlilik hükmü nedeniyle 19 Ekim'e kadar satışı kamuoyuna açıklayamadıklarını söylüyor. Bazı hesaplar şirketi satın alanın bir Çin şirketi olduğunu iddia ediyor; bu iddia henüz bağımsız olarak doğrulanmış değil. Kayıpların boyutuna dair dolaşan rakamlar da öyle.

İddia doğruysa saldırının zarafeti ürkütücü. FatManTerra'nın yorumuyla, karmaşık bir hack geliştirmek yerine zincirin en zayıf halkasını satın almak yeterli: Kâr marjı zaten düşük olan küçük bir yetkili satıcıyı bulursunuz, işletmesini satın alırsınız ve tedarik zincirinin bir düğümüne zahmetsizce sahip olursunuz. Karpelès'in ifadesiyle insanlar bu kez yetkili bir satıcıya fazlasıyla güvendi. Yetkili satıcı etiketi, kutunun içinden ne çıkacağının garantisi değil.

## Orijinallik Kontrolü Neden Kurtarmadı?

Bir donanım cüzdanın vaadi basittir: Bitcoin harcamak için gereken özel anahtarlar internete hiç bağlanmayan ayrı bir cihazda durur, internete bağlı bilgisayarınızdaki cüzdan yazılımı ise yalnızca açık anahtarlarla çalışır. Çoğu ticari cihaz, anahtarları bir de güvenli eleman (secure element) denen özel bir çipte saklar. Bu çip, fiziksel ya da elektriksel yollarla okunmaya çalışıldığında anahtarı yok edecek şekilde tasarlanmıştır; PIN denemelerini sınırlandırarak kaba kuvvet saldırılarını da engeller.

Ledger cihazları, içlerindeki güvenli elemanın orijinal olduğunu kriptografik olarak kanıtlayabilir. Sorun şu ki bu saldırı güvenli elemana dokunmuyor bile. Çip orijinal, yazılım orijinal, imza orijinal. Karpelès'in elindeki implantlı cihaz Ledger'ın orijinallik kontrolünden sorunsuz geçti; ona göre implantı tespit etmenin tek yolu cihazı açmak. Sızıntı, cihazın kullanıcıyla konuştuğu yerden, yani ekrandan yaşanıyor. Karpelès, yıllar önce Ledger'a orijinallik imza şemasının arayüzün araya girilerek dinlenip dinlenmediğini doğrulamanın hiçbir yolu olmadığını ve kurcalanmayı belli eden bir sevkiyat sistemine ihtiyaç olduğunu söylediğini hatırlatıyor.

## Bu İlk Değil

Specter projesinden Marco'nun, Plan ₿ Network'ün "Build your own hardware wallet" başlıklı topluluk yayınında anlattıkları, Malezya vakasının bir istisna olmadığını gösteriyor.

Marco'nun aktardığına göre, geçmişte Trezor cihazlarının kötü niyetli bir satıcısı cihazları açıp çiplerini sökmüş, yerine neredeyse aynı yazılımı çalıştıran benzer çipler lehimlemişti. Tek fark, değiştirilmiş yazılımın tohum üretmek için rastgele sayı üreteci yerine yaklaşık 20 tohumdan oluşan sabit bir liste kullanmasıydı. Kullanıcı birkaç kez yeni tohum ürettiğinde her şey rastgele görünüyordu, oysa saldırganlar bu tohumların hepsini biliyordu. Trezor'un bu işte bir payı yoktu; zincirin kırılan halkası satıcıydı.

Kriptografi tarihi de benzer derslerle dolu. Dünyanın dört bir yanındaki istihbarat servislerinin şifreli iletişim için kullandığı saygın İsviçre firması Crypto AG'nin cihazlarının onlarca yıl boyunca arka kapılı olduğu ancak çok sonra ortaya çıktı. Marco'nun ifadesiyle, bal küpü bu kadar büyükken hiçbir donanım cüzdan şirketinin bir şekilde arka kapılı olmadığını varsaymak saflık olur.

Tehdit yalnızca cihazın içinden de gelmiyor. Marco, Ledger'ın müşteri verilerinin en az iki kez sızdırıldığını, kendisinin de bu sızıntılardan birinden etkilendiğini ve o günden beri Ledger'a özel oltalama e-postaları almaya devam ettiğini anlatıyor. Fransa'da kripto varlık sahiplerine yönelik fiziksel saldırılardaki artışın arkasında da, Marco'nun anladığı kadarıyla, varlıklarını vergi idaresine dürüstçe beyan eden kişilerin listesini suçlulara satan bir vergi dairesi çalışanı var. Yani devlet sizi doğrudan hedef almasa bile, sizin hakkınızda bildikleri suçluların eline geçebilir.

## Neden Kendin Kur? Üç Gerekçe

Marco, kendi imza cihazınızı kurmak için üç temel gerekçe sayıyor.

**Mahremiyet.** Bir donanım cüzdan şirketinden cihaz aldığınızda şirket sizin Bitcoin cihazı aldığınızı bilir, paketin kimden geldiğini gören kargo zincirindeki herkes de öyle. Adınız artık "muhtemelen Bitcoin sahibi" listesindedir. Donanım cüzdanlar genellikle büyük miktarları korumak için kullanıldığından bu liste her türlü saldırgan için değerli bir hedef listesidir; Bitcoin'in yasak olduğu ya da hoş karşılanmadığı ülkelerde ise bir hapis meselesidir. Genel amaçlı parçalarla kurulan bir cihazda kimse sizin Bitcoin'iniz olduğundan şüphelenemez. Marco bir adım ötesini de hatırlatıyor: Kendi kurduğunuz cihazı bir oyun konsoluna benzetebilir, sınırda ya da bir saldırgan karşısında onun bir Bitcoin cihazı olduğunu bile anlaşılmaz kılabilirsiniz.

**Güvenlik.** Cihazın tasarımından üretimine, oradan size teslimine kadar uzanan zincirin herhangi bir halkasında, tedarikçiyle iş birliği yapan ya da paketi yolda ele geçiren biri cihaza müdahale edebilir. Çoklu imza (multisig) kullananlar için bir boyut daha var: Multisig'in amacı tek hata noktalarını ortadan kaldırmaktır; bütün cihazlarınız aynı üreticiden geliyorsa üretici tek hata noktanız olur.

**Özelleştirme.** Bir üreticide çalışmıyorsanız aklınızdaki yeni bir özelliği hayata geçirmeniz zordur. Kendin kur projelerde ise kodu değiştirip denemek ve dünyayla paylaşmak çok daha kolaydır. Marco'ya göre bugün ticari cihazlarda gördüğümüz en iyi özelliklerin bazıları da ilk olarak bu projelerde ortaya çıktı: adres ve işlem ayrıntılarını tek ekranda doğrulamayı kolaylaştıran büyük dokunmatik ekranlar, cihazla bilgisayar arasında hiçbir kablo olmadan QR kodlarıyla iletişim ve çıkarılabilir güvenli eleman olarak kullanılan akıllı kartlar.

SeedSigner topluluğundan @sesi_the_man de bu hafta, tasarımlarının en baştan beri tam da bu tür istismarları öngördüğünü hatırlattı ve modeli beş maddede özetledi:

- **Bitcoin'e özel olmayan parçalar**, üretim öncesi tedarik zinciri saldırılarını zorlaştırır.
- **Cihazı kendiniz monte etmek**, üretim sonrası tedarik zinciri saldırılarını zorlaştırır.
- **Genel parçaları kendiniz satın almak**, sizi bir "Bitcoin müşterisi" listesinden çıkarır; böylece hem oltalama saldırılarının hem de kapınıza dayanan fiziksel tehditlerin hedefi olmazsınız.
- **Zorunlu kendi entropini getir** yaklaşımı, yani tohumu zar ya da kamera görüntüsüyle kendiniz üretmeniz, cihazın size önceden belirlenmiş ya da zayıflatılmış bir anahtar vermesi riskini azaltır. Yukarıdaki 20 tohumluk Trezor vakası tam da bu riskin örneğidir.
- **"Resmi" bir koordinatör yazılımın olmaması**, mahremiyet sızıntılarını azaltır.

## Kendin Kur Ailesi

Marco'nun "kendin kur ailesi" dediği üç büyük proje var. Aralarındaki ilişki ticari rakiplerden çok bir aileye benziyor: Aynı geliştiriciler birden fazla projeye katkı veriyor, özellikler bir projeden diğerine taşınıyor ve üçü de embit adlı ortak bir Bitcoin kütüphanesini kullanıyor.

- **Specter DIY**, büyük dokunmatik ekranlı bir geliştirme kartı ile ona bağlanan bir QR tarayıcıdan oluşur. Temel hâliyle tohumu kalıcı olarak saklamaz; isteyenler akıllı kart okuyucu ve pil ekleyebilir. Multisig, Taproot ve Miniscript desteği temel sürümde bile mevcuttur.
- **SeedSigner**, dünyanın en yaygın genel amaçlı bilgisayarlarından Raspberry Pi üzerine kuruludur. En küçük model olan Pi Zero'ya küçük bir ekran ve düğmeler içeren bir kart ile bir kamera takılır, Linux tabanlı yazılım bir SD karttan yüklenir. Marco'ya göre en ucuz hâliyle 50-60 dolar (~2.450-2.950 TL) civarına mal edilebilir. Güvenli elemanı yoktur ve tohumu kalıcı olarak saklamaz.
- **Krux**, belirli bir yonga setine sahip, piyasada hazır satılan tüketici cihazlarına yüklenen bir yazılımdır. Burada montaj yoktur; hazır cihazı alıp yazılımı kendiniz yüklersiniz. Güvenli elemanı yoktur.

## Nasıl Edinilir?

Marco'ya göre önceliğinize göre üç yol var:

1. **Hazır monte edilmiş cihaz.** Projelerin hepsi güvenilir satıcılara bağlantı verir. En rahat yol budur, ancak mahremiyet önceliğinizse en zayıf seçenektir.
2. **Kit.** Bütün parçalar tek kutuda gelir, montajı siz yaparsınız. Her parçayı inceleme fırsatınız olur ve hiçbir parçayı unutmazsınız; ama kutunun ne için alındığı yine bellidir.
3. **Parçaları tek tek kendiniz almak.** Mahremiyet en üst önceliğinizse tek yol budur. Parçaları farklı kaynaklardan, ayrı ayrı alın ki bir araya geldiklerinde ne yapmaya çalıştığınız anlaşılmasın. Kasa isterseniz 3D yazıcı dosyaları açıkça paylaşılır.

İyi haber şu ki bunların hiçbiri lehim ya da özel bir beceri gerektirmiyor. Marco'nun ifadesiyle en zor kısım, daha önce hiç yapmamışsanız parçaları bir araya getirirken bir şeyi bozacağınız korkusu. Projelerin rehberleri, videoları ve yardım grupları bu korkuyu yenmeye fazlasıyla yetiyor.

## Yazılımı Doğrulamadan Kurmayın

Donanım tek başına bir işe yaramaz; üzerine yazılım yüklemeniz gerekir. İşte burada tedarik zinciri riskini donanımdan yazılıma taşımamak için dikkatli olmak gerekiyor. İki yol var: Ya kaynak kodunu GitHub'dan indirip kendiniz derlersiniz, ya da projenin hazır derlenmiş dosyasını indirip özetinin (hash) projenin yayımladığı özetle aynı olduğunu ve dosyanın geliştiriciler tarafından imzalandığını doğrularsınız. Marco'nun altını çizdiği gibi bu adımlar yalnızca imza cihazları için değil, Sparrow gibi cüzdan yazılımları ya da Bitcoin düğüm yazılımı dâhil indirdiğiniz her kritik yazılım için geçerlidir.

Yükleme kısmı şaşırtıcı derecede kolay. SeedSigner'da yazılımı bir SD karta yazıp cihaza takmanız yeterli. Specter'da ilk kurulum, cihazı USB ile bağlayıp dosyayı sürükleyip bırakmaktan ibaret; bu sırada yazılımla birlikte bir önyükleyici (bootloader) da kurulur. Sonraki güncellemelerde bu önyükleyici, yeni yazılımın değiştirilmediğini ve Specter ekibi tarafından imzalandığını kendisi kontrol eder. Marco'ya göre şu an bu güvenli önyükleyiciye sahip olan tek proje Specter; SeedSigner ve Krux'ta bu doğrulama sizin sorumluluğunuzda.

## Tohum Nerede Durur?

Güvenli elemanı olmayan bir cihazda tohumu nerede tutacağınız kritik bir sorudur. Specter'ın önerdiği yöntem, tohumu her kullanımda cihaza yeniden girmektir: Tohum yalnızca geçici bellekte durur ve cihazın gücü kesildiğinde silinir. Cihazı ele geçiren biri ondan hiçbir şey çıkaramaz. Her seferinde tohum girmek istemeyenler için iki seçenek daha var: Tohumu PIN korumalı bir akıllı kartta saklamak ya da onu cihaz, akıllı kart ve PIN olmak üzere üç sırra bölmek. Bu sonuncusunda üçü bir araya gelmeden tohuma erişilemez. Akıllı kartı çıkardığınızda cihaz her şeyi unutur; böylece tek bir cihaz ve farklı yerlerde saklanan birkaç akıllı kartla fiziksel olarak dağıtılmış bir multisig kurmak bile mümkün. Tohumu doğrudan cihaza şifreli olarak kaydetmek de mümkün ama önerilmiyor; Marco'ya göre fiziksel erişimi olan sabırlı bir saldırgan, güvenli elemanı olmayan Trezor One'da olduğu gibi tohumu çıkarabilir.

SeedSigner ise durumsuzdur (stateless): Tohumu her kullanımda bir QR kodundan (SeedQR) okur ve kapandığında unutur. İnternete, Wi-Fi'ye ya da Bluetooth'a bağlanmaz; bilgisayarla yalnızca kamera ve ekran üzerinden QR kodlarıyla konuşur.

## Bedava Öğle Yemeği Yok

Elbette bu modelin de bedelleri var ve bunları saklamak dürüst olmaz.

Kendin kur cihazların çoğunda güvenli eleman yoktur. Durumsuz tasarım bunu telafi eder, ancak tohum yedeğinizi (kâğıt, çelik plaka ya da SeedQR) korumak tamamen size kalır. Her elektronik cihaz gibi bunlar da bozulabilir; analog bir yedek her koşulda şarttır. Yazılımı doğrulamak sizin işinizdir. Kullanım deneyimi de daha zahmetlidir: kamera, QR kodu, SD kart, zar... Hazır bir cihazın sunduğu "kutudan çıkar, kullan" rahatlığından uzaktır.

Ancak bu zahmetin her bir adımı, sizin yerinize başkasına güvenmek zorunda kaldığınız bir halkayı zincirden çıkarır. Satın aldığınız şey kolaylık olduğunda, karşılığında verdiğiniz şey de güvendir.

## Peki Şimdi Ne Yapmalı?

- Bir Ledger'ınız varsa ve onu tanımadığınız bir satıcıdan, pazar yerindeki üçüncü taraf bir mağazadan ya da ikinci el aldıysanız, Ledger'ın cihaz bütünlüğü kontrol rehberini uygulayın. Şüpheniz varsa yeni bir cihazda yeni bir tohum oluşturup varlıklarınızı taşıyın.
- Hazır bir donanım cüzdan alacaksanız doğrudan üreticiden alın. Bu her riski ortadan kaldırmaz ama zinciri kısaltır.
- Daha ileri gitmek isterseniz bir SeedSigner ya da Specter kurun. Parçaları sıradan elektronik satıcılarından, ayrı ayrı ve Bitcoin'den hiç bahsetmeden alın. Yazılımı doğrulayın, tohumunuzu kendi entropinizle üretin.
- Büyük miktarlar için tek bir cihaza ya da tek bir üreticiye bel bağlamayın. Farklı üreticilerin cihazlarıyla, örneğin bir hazır ve bir kendin kur cihazla kurulmuş bir multisig düzeninde bir halka kırılsa bile zincir kopmaz.

## Sonuç

Truva'lılar, kapılarının önüne bırakılan tahta atı kendi elleriyle şehre çektiler; çünkü atın dışı kusursuzdu ve bir hediyeye benziyordu. Kusursuz bir streç ambalajın içinde gelen bir donanım cüzdan da aynı şekilde güven telkin eder. Ne var ki Bitcoin'in bize öğrettiği ilk ders, güvenin bir ambalaja, bir logoya ya da bir "yetkili satıcı" etiketine değil, doğrulamaya dayanması gerektiğidir.

Güvenme, doğrula. Bu, düğümünüz için geçerli olduğu kadar imza cihazınız için de geçerli.

### Kaynaklar

- [Plan ₿ Network topluluk yayını: Build your own hardware wallet (Marco, Specter)](https://youtu.be/h7r1DjRHsGU)
- [Ledger Support: CryptoBilis açıklaması](https://x.com/Ledger_Support/status/2108551100613714002)
- [Mark Karpelès: implantın Malezya'dan gelen Ledger'daki yeri](https://x.com/MagicalTux/status/2108576506704548179)
- [Mark Karpelès: tohumun nasıl sızdırıldığı](https://x.com/MagicalTux/status/2108579301415436727)
- [Mark Karpelès: 2x2 mm casus SIM çipi](https://x.com/MagicalTux/status/2108619685751374064)
- [Tibane Labs: Ledger Nano X implant araştırması](https://www.tibane.net/research/ledger-nano-x-implant)
- [Arravind Prabu: CryptoBilis'in satışı](https://x.com/PrabuArravind/status/2108579734833738143)
- [Mark Karpelès: cihaz orijinallik kontrolünden geçiyor](https://x.com/MagicalTux/status/2108585908077568277)
- [Mark Karpelès: Amazon'da yarı fiyatına, Malezya'dan](https://x.com/MagicalTux/status/2108586447540547932)
- [Arravind Prabu: gizlilik hükmü ve yeni yönetim](https://x.com/PrabuArravind/status/2108599265832620082)
- [FatManTerra: CryptoBilis'in yeni sahipleri](https://x.com/FatManTerra/status/2108602684563411240)
- [FatManTerra: en zayıf halkayı satın almak](https://x.com/FatManTerra/status/2108604097343430850)
- [@sesi_the_man: kendin kur modelinin önlediği saldırılar](https://x.com/sesi_the_man/status/2108608827574956085)
- [Ledger: cihazınızın kurcalanıp kurcalanmadığını kontrol etme rehberi](https://support.ledger.com/article/4404382029329-zd)
- Projeler: [Specter](https://specter.solutions) · [SeedSigner](https://seedsigner.com) · [Krux](https://selfcustody.github.io/krux/)
