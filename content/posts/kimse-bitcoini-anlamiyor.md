---
index: 14
title: "Kimse Bitcoin'i Anlamıyor (Sorun Değil)"
meta: "Kimse Bitcoin tavşan deliğinin dibini bulamadı."
author: "Jameson Lopp"
authorURL: "https://blog.lopp.net/"
translator: "Emir Yorulmaz"
translatorURL: "https://twitter.com/_untreu"
slug: "kimse-bitcoini-anlamiyor"
flag: "turkey"
img: 'kimse-bitcoini-anlamiyor'
tags:
    - translation
---

Bitcoin ile ilgilenmeye başladığımda kendimi Bitcoin hakkında olabildiğince çok bilgi edinmek ve parçaları bir araya getirmek için sayısız saatler harcarken buldum.   
   
Yıllar süren bu öğrenmenin ardından şimdilerde zamanımı başkalarının Bitcoin'i daha iyi anlamasına yardımcı olmaya ayırıyorum. Birçoğu bana ''Bitcoin uzmanı'' dese de ben kendimi hala bir öğrenci olarak nitelendiriyorum; çünkü tavşan deliğinin ne kadar derin olduğunu hala kestirebilmiş değilim.   

![Bitcoin Puzzle](/images/content/blog/kimse-bitcoini-anlamiyor/what-is-bitcoin.png)
   
Andreas Antonopoulos, Bitcoin'i açıklamak ve anlamak konusunda şunları söyledi:   
   
> "Bitcoin nedir?" sorusunu cevaplamak için 300 sayfa uzunluğunda bir kitap yazdım, basıldığı anda geçerliliğini kaybetti ve değişikliklere ayak uydurmak için üç ayda bir düzenlenmesi ve güncellenmesi gerekiyordu.   
   
## Bitcoin'in çok yönlü yapısı   
Bunun için yeterince çalışarak Bitcoin'in teknik olarak nasıl çalıştığını kendi kendinize öğrenebilirsiniz.   
   
Bu hedefe ulaşmak için çalışan herkesi birkaç ay meşgul edebilecek eğitim kaynaklarının bir listesini tutuyorum; ancak bu öğrenim yaklaşımı, Bitcoin buzdağının yalnızca görünen kısmını ortaya çıkarabilir.   
   
Meltem Demirors'ün yaptığı paylaşım söylediklerimi doğrular nitelikte:   
[![Meltem Bitcoin](/images/content/blog/kimse-bitcoini-anlamiyor/meltem.png)](https://x.com/Melt_Dem/status/829421449760866304)
   
   
Bitcoin'i anlamanın zor taraflarından biri de Bitcoin'in sürekli evrim halinde, çok yönlü ve disiplinler arası bir sistem olmasıdır.   
   
Ferdinando Ametrano bunu [gayet iyi açıklamıştı](https://www.slideshare.net/Ferdinando1970/about-bitcoin-blockchain-and-the-dlt-chimera?ref=yirmibir.org): 

![Bitcoin Is Hard To Understand](/images/content/blog/kimse-bitcoini-anlamiyor/bitcoin-hard-understand.png)
   
"Bitcoin'i anlamak neden mi zor? 
Bitcoin'i anlamak için 

1. oyun teorisi, 
2. kriptografi, 
3. bilgisayar ağları ve veri aktarımı, 
4. ekonomik ve parasal teori 

hakkında fikir sahibi olmalısınız. 
Temelde bu sadece bir teknoloi değil, kültürel bir paradigma değişimi."   
   
Ferdinando bizzat benim de üzerinde duracağım kilit bir noktaya parmak basıyor: Bitcoin yalnızca bir teknoloji değil, daha da az somut şey temsil eden bir teknoloji.   
   
Bitcoin; fikirlerin, felsefelerin, kültürlerin ve politikaların bir potada eritilip ateşle imtihanının sonucu olarak ortaya çıkan ve yaşayan bir protokoldür.   
   
Bugün olduğumuz noktaya nasıl geldiğimizi tayin etmek için "[Cyberpunkların Yükselişi](https://blog.lopp.net/bitcoin-and-the-rise-of-the-cypherpunks/)"ni okuyabilirsiniz.  
   
## Satoshi'nin Bitcoin anlayışı   
> Bu şeyi genel kitleler için tanımlamak gerçekten zor, bu şeyle ilişkilendirebilecek hiçbir şey yok.  
- Satoshi, [July 5, 2010](https://bitcointalk.org/index.php?topic=234.msg1976&ref=yirmibir.org#msg1976)
   
Satoshi dahi Bitcoin'in güvenlik modeliyle ilgili ne inşa ettiğini tam olarak anlayamadı. Bitcoin'in ortaya çıkışının ilk birkaç yılında çok sayıda hata düzeltmek zorunda kaldı.   
   
İlk 18 ayın ardından hata düzeltmelerinin oranı, yeni güvenlik açıklarının [kategorize edildiği ve belgelendiği](https://en.bitcoin.it/wiki/Common_Vulnerabilities_and_Exposures?ref=yirmibir.org) noktaya gelinene kadar yavaşlamıştı. Bitcoin benimsenmeden önce düzeltilen kusurlardan birkaçına göz atalım.   
   
Bitcoin'in ilk versiyonlarında [herkes herkesin parasını harcayabiliyordu](https://bitcoin.stackexchange.com/questions/29754/history-behind-the-scripting-language-in-bitcoin/29763?ref=yirmibir.org#29763).   
   
> "OP_RETURN işlem kodu başlangıçta script'in başarısız olmak yerine erken sonlanmasına neden oluyordu, bu sebeple yalnızca scriptSig OP_TRUE OP_RETURN kullanarak herhangi birinin bitcoinlerini ele geçirebiliyordunuz. Ayrıca tüm scriptPubKey'i bir sabite (true olarak değerlendirilir) dönüştürmek için bir scriptSig'in hemen sonuna bir pushdata opcode'u koymak da mümkündü. Satoshi, OP_RETURN'ün davranışını değiştirerek işlemin hemen başarısız olmasına neden oldu ve scriptSig ile scriptPubKey'in iki ayrı adımda değerlendirilmesini sağladı."   
- Theymos   
   
Satoshi, ["en iyi zincir" mantığını en uzun zinciri kullanmaktan](https://github.com/bitcoin/bitcoin/commit/40cd0369419323f8d7385950e20342e998c994e1?ref=yirmibir.org#diff-623e3fd6da1a45222eeec71496747b31R420) en fazla iş ispatına (proof-of-work) sahip olan zinciri kullanmaya değiştirerek büyük bir uzlaşı sorununu çözdü. Teknik olarak bunun bir "hard fork" (Fork ya da çatallama, bir projenin kopyalanması ve çoğazaltılması anlamına gelir) [olduğu söylenebilir](https://twitter.com/petertoddbtc/status/749610420005117952?ref=yirmibir.org); ancak bu bir zincir forklanmasına neden olmadı; çünkü o zaman en uzun zincir aynı zamanda en fazla iş ispatına sahip zincirdi.   
   
Ayrıca Satoshi, hizmet reddi saldırılarına karşı koruma olarak [blok boyutunu sınırını ortaya koymuştur](https://sourceforge.net/p/bitcoin/code/103/tree/trunk/main.h?diff=515630145fcbc978e39dbaa5%3A102&ref=yirmibir.org). Blok boyutu ilk başta sadece 32 Megabaytlık bir ağ mesajı boyutuyla dolaylı olarak sınırlıydı.   
   
OP_CHECKMULTISIG'de bugün de var olmayı sürdüren ve [BIP-011](https://github.com/bitcoin/bips/blob/master/bip-0011.mediawiki?ref=blog.lopp.net#Specification)'de bahsi geçen bir hata vardır:   
   
> (OP_0, OP_CHECKMULTISIG'deki bir hata nedeniyle gereklidir; bu yürütme yığınından çok fazla öğe çıkarır; bu nedenle yığına sahte bir değer yerleştirilmelidir).  
- Gavin Andersen   
   
Herhangi birinin 184 milyar Bitcoin yaratmasına olanak sağlayan bir [value overflow hatasını](https://en.bitcoin.it/wiki/Value_overflow_incident?ref=yirmibir.org) unutmak ne mümkün!   
   
Ben Satoshi'nin erken aşamalarındaki pek de bilinmeyen hatalarını ararken Greg Maxwell ilginç bir tanesini hatırladı:   
   
İlk Bitcoin sürümlerinde, herhangi bir kullanıcı piyasaya sürülen herhangi bir sürümü diğer sürümlerden hard fork'layabilirdi! Bu tasarım hatası, Satoshi'nin Bitcoin'i ilk yayınlandığında güvenli yükseltmeler için gerekli koşulları tam olarak anlamadığını gösterdi; ancak düzeltmesi daha sonra bunları anladığını gösterdi.   
   
> OP_VER adında, doğrulama düğümünün sürüm numarasını yığına iten bir işlem kodu vardı. (Satoshi her zaman Bitcoin düğüm yazılımının yalnızca bir parçası olması gerektiğine inanmıştır). Bu işlem kodunun görünürdeki amacı, komut dosyasına özellikler ekleyebilmeniz ve sadece daha yeni destekleyici sürümlerin bu yeni işlem kodlarını görmesini sağlamaktı (ayrıca kod tabanında başlangıçta 16 bitlik işlem kodu alanı vardı.); ancak birisi bunu kötü niyetli olarak "OP_VER 1234 IF FALSE RETURN ENDIF TRUE" gibi kullanarak 1. 234 sürümünün başka herhangi bir sürüm tarafından çıkarılan bir bloğu reddetmesini sağlayabilirdi. Yani herhangi biri sistemi istediği zaman çatallayabilirdi! [OP_VER'i kaldırdığında](https://github.com/bitcoin/bitcoin/commit/a75560d828464c3f1138f52cf247e956fc8f937d?ref=yirmibir.org#diff-8458adcedc17d046942185cb709ff5c3L109), OP_NOP'u ekledi, bu da modern tarzda komut dosyası yumuşak çatallarını mümkün kılan şeydir. Bu değişikliğin kendisi bir soft fork'tu çünkü orijinal versiyonlar bilinmeyen opcode'ları görmezden geliyordu.  
   
Araştırmacılar [Satoshi'nin whitepaper'ında](https://bitcoin.org/bitcoin.pdf?ref=byirmibir.org) da sistemin güvenlik tanımıyla ilgili bazı kusurlar keşfettiler.   
   
Örneğin, '[madenci şansı](https://bitcoinmagazine.com/articles/how-satoshi-messed-his-math-and-how-these-academics-just-fixed-it/?ref=yirmibir.org)' ve '[bencil madencilik](https://bitcoinmagazine.com/articles/selfish-mining-a-25-attack-against-the-bitcoin-network-1383578440/?ref=yirmibir.org)' sorunları vardır. Beyaz kitapla ilgili bilinen sorunların bir derlemesine [buradan ulaşabilirsiniz](https://gist.github.com/harding/dabea3d83c695e6b937bf090eddf2bb3?ref=yirmibir.org).   
   
Bitcoin açıkça 'kod kanundur' görüşünü değil, daha ziyade 'Satoshi'nin vizyonu kanundur' görüşünü benimsemiştir, zira ilk birkaç yıl içinde kodun, kodun yaratıcısının niyetiyle tam olarak örtüşmediği keşfedildikçe bir dizi değişiklik yapılmıştır.   
   
Satoshi'nin seneler öncesinde Bitcoin'e katkıda bulunmayı bıraktığı ve Bticoin'in resmi bir spesifikasyonu bulunmadığı göz önüne alınırsa bu ayrımın özellikle önem arz ettiğini düşünüyorum.   
   
## Yazılım asla tamamlanmaz   
Bitcoin'in ne kadar az anlaşıldığını, Bitcoin'i analiz etmek ve geliştirmek için yapılan araştırmaların sayısından anlayabilirsiniz.   

[![Lopp Google Scholar](/images/content/blog/kimse-bitcoini-anlamiyor/loppgoogle.png)](https://x.com/lopp/status/810157568739966976)

"Yıllara göre Bitcoin'den bahseden Google Scholar makalelerinin sayısı:   
   
2009: 83   
2010: 136   
2011: 218  
2012: 424  
2013: 1,390  
2014: 3,190  
2015: 3,670  
2016: 3,580"   
   
-Jameson Lopp (@lopp), 17 Aralık 2016   
   
Satoshi bir keresinde [çekirdek tasarımın sabit olduğunu](https://bitcointalk.org/index.php?topic=195.msg1611&ref=yirmibir.org#msg1611) ve diğer uygulamaların ağ için bir tehdit oluşturacağını belirtmişti. İnsanlar çoğu zaman bu alıntıyı (ve Satoshi'nin diğer sözlerini) alır ve Bitcoin protokolünün bir şekilde gelişmesi gerektiğini (otoriteye başvurarak) yanlış bir şekilde savunmak için kullanır.   
   
Size bunun Satoshi'nin yanıldığı başka bir konu olduğunu iddia ediyorum.   
   
Gördüğümüz üzere, Satoshi esasında ilk geliştiriciler kodu ve uç durumları keşfederken Bitcoin üzerinde pekçok değişiklik yapmak zorunda kaldı. Buna ek olarak bugün çalışan ve ağı bozmayan yarım düzineden fazla Bitcoin istemci uygulaması var. Hatta [2013 yılında](https://github.com/bitcoin/bips/blob/master/bip-0050.mediawiki?ref=yirmibir.org) Berkeley DB zincir fork'unda (çattlamasında) olduğu gibi makine düzeyindeki farkılılıklar uzlaşmasının bozulmasına neden olabildiğinde tek bir uygulamanın ağ için tehdit oluşturabildiğini gözlemledik.   
   
Bitcoin'in katkıların bir potada eritilmesiyle oluştuğu hakkındaki açıklamamı hatırlayın. Satoshi birkaç yıl boyunca gizlice üstünde çalıştığı projesini yayındalıktan sonra bu gerçek anlamda ortaya çıktı.   
   
Bitcoin piyasaya sürüldüğü ilk hafta iş birlikçisi Hal Finney'i de kazandı. Hal, Satoshi'nin orijinal whitepaper açıklmasından da anlaşılacağı gibi Bitcoin'in gerçekten işe yarayabileceğine erkenden inanan birkaç kişiden biriydi.   
   
> [Hal Finney] iddiaya göre ilk kodlarda birçok kusur tespit etti ve bunlar işlem kodlarının azaltılmasıyla düzeltildi. Hal Finney cypherpunk'ların cypherpunk'ıydı. Hem üstün kodlama hem de ormanı ve ağaçları görme ve gördüklerini açıklama konusunda ender bir yeteneği vardı. Hepimiz onun yazılarını dikkatle okurduk, bu kadar saygı gören başka biri olduğunu sanmıyorum."   
– Ian Grigg   
   
Finney, [Satoshi ile olan e-postalarının](http://online.wsj.com/public/resources/documents/finneynakamotoemails.pdf?ref=yirmibir.org) bir kısmını Wall Street Journal'da yayınladı; ki ilginç bir okumadır. Finney, Satoshi'nin "yoğun bir şekilde test etmesine" rağmen beklemediği birkaç hatayı bulmayı başardığında Satoshi'nin şaşkınlığını görebilirsiniz.   
   
Bazı sistemlerin ([ethereum gibi](https://ethereum.github.io/yellowpaper/paper.pdf?ref=yirmibir.org)) aksine, Bitcoin'in resmi bir spesifikasyonu yoktur. Bitcoin'in bir spesifikasyonu olsaydı bile protokolde değişiklik yapmak teknik açıdan daha kolay ya da daha zor olmazdı; ancak sosyal açıdan daha kolay olabilirdi.   
   
Charlie Lee'nin [Andresen'in önerdiği tanıma](http://gavinandresen.ninja/a-definition-of-bitcoin?ref=yirmibir.org) yanıt olarak belirttiği gibi, bu tanım biçimsizdir:   

[![Charlie Lee](/images/content/blog/kimse-bitcoini-anlamiyor/charlielee.png)](https://twitter.com/SatoshiLite/status/829076341613998080)
   
Bitcoin'in tanımı bir kelimenin tanımı gibidir. Zamanla şekli değiştirilebilir ve yavaşça değişebilir, kimse onu kontrol edemez.   
   
-Charlie Lee (@SatoshiLite), 7 Şubat 2017   
   
Değişikliklerin yürürlüğe girdiği nesnel bir süreç de bulunmaz:   
   
[![Lopp Consensus](/images/content/blog/kimse-bitcoini-anlamiyor/loppconsensus.png)](https://x.com/lopp/status/835581727032684544)

Bitcoin protokolü; konsensüsü nesnel olarak belirlerken, nesnel konsensüsteki değişiklikleri belirleme araçları özneldir.
- Jameson Lopp (@lopp), 25 Şubat 2017   
   
Paul Stzorc, bitcoin geliştirme konusunda objektif kararlar almaktan bahsetti; ancak bu gerçekleşmekten çok uzak.   
   
Sunumu [bu blog yazısına](https://www.truthcoin.info/blog/win-win-blocksize/?ref=yirmibir.org) dayanıyordu.   

Youtube: [Scaling Bitcoin Day 2](https://www.youtube.com/embed/TgjrS-BPWDQ)

   
Bitcoin'in gücünün değişmezlik, ademi merkeziyetçilik ya da diğer moda sözcüklerle ilgili dogmatik inançların somutlaşmış hali olmasından değil, işbirliğinden kaynaklandığını ileri sürüyorum. İş birliğini alıp insan konsensüsünü belirlemek için kullanma süreci gürültülü ve dağınık olabilir; ancak içinde çalışmamız gereken yönetişim modeli budur.   
   
Gördüğüm gibi [gönüllülük](http://www.notbeinggoverned.com/introduction-to-voluntaryism/?ref=yirmibir.org) esasına dayanan bu [idare sistemi](https://thecontrol.co/the-governance-of-blockchains-5ba17a4f5da6?ref=yirmibir.org#.wrijnsojo), bitcoin'in 'sabit' olan tek yönüdür.   
   
## Bitcoin'in sihri   
Sergej Kotliar [bu yazıyı](http://ziggamon.tumblr.com/post/93502914957/why-bitcoin-is-religious?ref=yirmibir.org) yıllar önce kaleme almış ve Bitcoin'in neden din ile benzerlikler taşıdığını anlatmıştı. Kotliar'ın da ifade ettiği gibi: Sistemin bir bütün olarak çalışmasında biraz sihir var; çünkü teknik olmayan bileşenlere dayanıyor.   
   
Sistemin iyi hizalanmış teşvikleri, ona rehberlik eden bir "görünmez el" oluşturuyor.   
   
Çoğu Bitcoin kullanıcısı muhtemelen farkında değildir; ancak Bitcoin'i oluşturan kurallar sistemine olan bu kolektif olarak güçlendirilmiş inanca katılarak [sofistike bir öznelci var oluşa](https://philosophicaldisquisitions.blogspot.com/2015/04/bitcoin-and-ontology-of-money.html?ref=yirmibir.org) üye olmaktadırlar.   
   
Daha basit bir şekilde ifade etmek gerekirse:   

[![Lopp Simple](/images/content/blog/kimse-bitcoini-anlamiyor/loppsimple.png)](https://x.com/lopp/status/747087056141164545)
   
1) Herkese açık ve izinsiz mutabakat sistemleri, herhangi kimseye güvenmeden bunları kullanmanıza izin verir. Ancak genel toplamda herkese güvenmeniz gerekir.   

-Jameson Lopp (@lopp), 26 Haziran 2016   
   
Bitcoin, tam bir düğüm operatörünün ağdaki diğer katılımcılara güvenmesi gerekmediği anlamında güvensiz olarak tanımlanabilirken, meta düzeyde genellikle bir tür güven söz konusudur.   
   
Örneğin, Bitcoin kullanıcılarının neredeyse hiçbiri yazılımı ve protokolün kendisini okuyup anlamamaktadır.   
   
Geliştiricilerin kusurları ortaya çıkarmamak için dikkatli olacaklarına güveniyorlar.   
   
Bence çok az kişinin Bitcoin'in teknik operasyonları hakkında derin bir anlayışa sahip olması, daha az anlayışa sahip kişilerin hangi 'uzmanlara' güveneceklerine karar vermeleriyle sonuçlanıyor. Bu yüzden, uzmanlar çatıştığında kalabalık bölünüyor ve argümanlarını en ikna edici buldukları uzmanların arkasında saf tutuyor.   
   
Ne yazık ki bu durum bazen karar alma sürecine siyasetin de dahil olduğu anlamına gelmektedir.   
   
Shaolin Fry'ın [yakın zamanda ifade ettiği](https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2017-February/013643.html?ref=yirmibir.org) gibi, önerilen protokol iyileştirmelerinin siyasallaşmasını önlemek için çaba vermeliyiz. Açık olmak gerekirse bu 'ekosistemdeki hiç kimsenin siyasi ideallerle motive olmadığı' anlamına gelmiyor. Daha ziyade, sistemin yönünün, bir grup insanın inançlarını diğerine dayattığı politikalar tarafından yönlendirilmediği anlamına geliyor.   
   
Örneğin, 'oy verme' kavramı genellikle siyasi bir sürecin yaşandığı anlamına gelir. Bunun yerine, katılımcıların diğer katılımcıların sinyallerinden bağımsız olarak belirli şekillerde etkileşimde bulunmak istediklerine dair sinyal verebilecekleri izinsiz bir yenilik sistemi için çaba vermeliyiz.   
   
> Zaten (dolaylı olarak) siyasi kaprisler tarafından kontrol edilen çok sayıda para birimi seçeneğimiz var.     
Bitcoin bundan daha sağlam bir şey olmalı. İlk günkü tam mutabakat kurallarının değişmez ('taşa oturtulmuş') olduğunu söyleyebilmeyi çok isterdim ancak mühendislik gerçekliği bunu gerçekçi kılmıyor. Bitcoin için bu hayal, ilk kesin ve ciddi mutabakat kusurunun bulunduğu gün öldü. Hatalı işlem kodlarının devre dışı bırakılması, onu daha da zayıflattı ve tekrar tamamen genel olması için daha fazla değişiklik yapılmasını gerektirdi. Ancak dünya nadiren bu kadar uygun bir şekilde siyah ve beyazdır. Bitcoin halen daha az politik bir para olma vaadini yerine getirebilir; ama bu vaat tamamen gerçekleşmiş sayılmaz.   
- Greg Maxwell   
   
## Projeksiyon sorunları   
Bazı bitcoin kullanıcıları protokol hakkında o kadar yeterli bir anlayışa sahip olurlar ki potansiyel iyileştirmeleri öngörmeye başlarlar ve bu noktada sistemi kendi bakış açılarına daha uygun hale getirmek için değiştirmeye çalışırlar.   
   
Bu, insan doğasında olan bir 'komuta ve kontrol' zihniyetidir; ben de geçmişte aynı hatayı, topluluğun bakış açılarını sindirmek yerine kendi bakış açımı bitcoin'e yansıtmaya çalışarak yaptım.   
   
Bitcoin'in evrimine ilişkin tartışmalarda, değişikliklerin ağı nasıl etkileyeceğine ilişkin teknik hususlardan çok daha fazla husus dikkate alınmaktadır.   
   
Ryan X Charles, ölçeklendirme tartışmalarındaki en popüler iki bakış açısının [üst düzey felsefelerini](https://ryanxcharlestimes.com/blockicans-and-blockocrats-73a9a594f1e5?ref=yirmibir.org#.uuts1r5x5) ele aldı. Bu tartışmalardaki çekişmelerin çoğu: a- farklı öncelikler ve b- Bitcoin için kullanım durumlarına ilişkin farklı inançlardan kaynaklanmaktadır.   
   
Maalesef bu tartışmalara katılanların önemli bir kısmı kendi bakış açılarını dogmatik bir inanç noktasına taşımış ve bu da entelektüel bir söylemde bulunmayı neredeyse imkansız kılmıştır.   
   
[![Lopp Attack](/images/content/blog/kimse-bitcoini-anlamiyor/loppattack.png)](https://x.com/lopp/status/836707734804385792)

Dogma: "X eylemi Bitcoin'e saldırıdır!"   
Söylem: "X eylemi yapılmamalı; çünkü benim Bitcoin anlayışım Y'dir."   
   
-Jameson Lopp (@lopp), 28 Şubat 2017   
   
İnsanların Bitcoin'e bakış açılarını yansıtmalarının kolay olduğuna inanıyor olmamın bir sebebi de spesifikasyon eksikliğinden ve dolayısıyla net gayelerin olmamasından kaynaklanıyor.   
   
Örneğin, Satoshi Bitcoin'i 'uçtan uca elektronik nakit sistemi' olarak tanımladı; ancak bu basit tanım bile kolaylıkla birçok şekilde yorumlanabilir. "Uçtan uca" kaç uç olması gerektiğine dair bir bağlam sunmaz; 'nakit' işlemlerin hızının veya maliyetinin ne olması gerektiğine dair bir bağlam sunmaz.   
   
ABD Anayasası, İncil ya da Kur'an'ın çeşitli bakış açıları ve yorumlarını bulabileceğiniz gibi, Satoshi'nin yazıları da yorumlanabilir ve tartışılabilir.   
   
Bireysel bakış açılarının Bitcoin'e yansıtılması, siyasi, felsefi ve dini sistemlerde gözlemleyebileceğimiz aynı türden bir parçalanmaya sebebiyet vermiştir. Bir grup çoğunlukla aynı fikirde başlar; ancak daha sonra grubun mutabakata varamadığı bir konu ortaya çıkar.   
   
Bireyler bakış açılarını kutuplaştırmaya ve kabileciliği besleyen eylemleri desteklemeye başlar. Parti çizgileri çizilir, yeni gelenlere turnusol testleri uygulanır, muhalif söylemler bastırılır, propaganda devam ettirilir, iletişim kopar ve yankı odaları oluşur.  

![Change Mind](/images/content/blog/kimse-bitcoini-anlamiyor/change-mind.png)
   
Sonuç olarak, günümüzde Bitcoin tartışmaları çoğunlukla bir tarafın diğer tarafın cahil ya da kötü niyetli olduğunu düşündüğü yanlış iddialara ve isim takmaya dönüşmektedir. Bu talihsiz bir durumdur; çünkü insanlar genellikle kendilerinin haklı, karşı tarafın haksız olduğu varsayımı altında birbirlerini geçiştirmektedir.   
   
Bakış açılarının, toplumdaki söylemin kalitesini düşüren dogmatik inançlara dönüştüğünü görmek rahatsız edici.   
   
Bitcoin'e bakışta tek bir 'doğru' yaklaşım olmadığını, aksine çok sayıda bakış açısı olduğunu belirtmek isterim. Bakış açılarının ve kullanım durumlarının çeşitliliği, Bitcoin hakkında yazdığım [ilk makalelerden](https://blog.lopp.net/the-multifaceted-nature-of-bitcoin/) birinin konusuydu.   
   
Bitcoin'in ne olması gerektiğine dair çelişkili bakış açılarına sahip kişiler tarafından yayılan söylemlere katılmak zorunda olduğunuzu söylemiyorum. Buna ek olarak bunu doğrudan bir karşı saldırı ile savunmanız gereken kötü niyetli bir saldırı olarak değil, böyle kabul etmenizi önereceğim.   
   
Eğer bir tartışma çok hararetli bir hal alırsa ve söylem kopmaya başlarsa, her zaman aradan çekilebilirsiniz.   
   
Unutmayın ki tüm insanlar ön yargıların kurbanı olur; onlardan etkilenmekten kaçınamayız, ancak diğer önyargılı insanlara nasıl tepki vereceğimizi bilinçli olarak seçebiliriz. **Bitcoin'in sizin onu savunmanıza ihtiyacı olmadığını** hatırlamak da yardımcı olabilir - hangi yazılımı çalıştıracağınızı ve paranızı sakladığınız sistemi seçerek kendi Bitcoin perspektifinizi savunursunuz.   
   
### Bitcoin'in Tao'su   
Andreas bir keresinde "gürültülü" ölçeklendirme tartışması hakkında konuşmuştu.   
Her ne kadar tatsız olsa da, bunun Bitcoin'deki bir kusur olmaktan ziyade bir özelliğin neticesi olduğunu aklımızdan çıkarmamalıyız.   
   
Youtube: [Scaling Bitcoin and the Blocksize Debate](https://www.youtube.com/watch?v=4IT4s-6T__k)

Bitcoin ekosisteminin katılımcıları, sistemi anlayışımızın tartışmaya katılan diğer kişilerden daha üstün olduğuna inanmak yerine, tartışırken mütevazı olmalıdır. Ben kendi adıma bu farkındalığı edindikten sonra yaptığım konuşmaların daha verimli olduğunu gözlemledim.   
   
Ayrıca karşı tarafın ifade ettiği dogmatik görüşler nedeniyle verimsiz olacağı açık olan konuşmalardan kaçınarak çok daha az zaman kaybettim.   
   
Bitcoin'in kontrolünüz dışında kendi yolunda ilerlediğini kabul ederek 'Bitcoin Tao'suna ulaşabilirsiniz. Bitcoin anlayışınız diğer kullanıcılarınkiyle uyuşmuyorsa hayal kırıklığına uğramayın. Bitcoin doğal olarak insan konsensüsünün en az ortak paydasında birleşecektir - katılımcıların en büyük alt kümesi için faydalı olan (veya en azından zararlı olmayan).   
   
**Bitcoin'in Tao'su Bitcoin'i anlamak değil, Bitcoin'in ne ise o olduğunu kabul etmektir.**  

[![Lopp Thanks](/images/content/blog/kimse-bitcoini-anlamiyor/loppthanks.png)](https://x.com/lopp/status/837346594852831232)
   
Oynadığınız için teşekkürler millet, hepiniz haklısınız! Çıkarı olan herkes Bitcoin'i etkilemeye çalışabilir, hiçbiri kontrol edemez.    
   
- Jameson Lopp (@lopp), 2 Mart 2017   
   
## Bitcoin Bitkin Düşüyor  

[![Lopp First Step](/images/content/blog/kimse-bitcoini-anlamiyor/loppfirststep.png)](https://x.com/lopp/status/829419398708486145)
   
Bitcoin'i anlamanın ilk adımı: Bitcoin'i anlamadığınızı kabul etmek.  
Son adım: "anlamanın" sabit bir hedef olmadığının farkına varmak.   

-Jameson Lopp (@lopp) 8 Şubat 2017   
   
Bitcoin'in geleneksel eğitim yaklaşımlarına ve hatta onu anladığına emin olan otoritelere meydan okuduğunu anlatmaya çalıştım. Sonuç şaşırtıcı olabilir; ama olumsuzluğa gerek yok.   
   
Bitcoin'in de tıpkı internet gibi 'ölçeklenmeyi başaramayacağı' konusunda umutlu olmaya devam etmeliyiz.   
   
Youtube: [Bitcoin scaling with Andreas Antonopoulos](https://www.youtube.com/watch?v=Ul-WFb9MHR8)
   
Jimmy Song da çıkmaz ve umutsuzluk karşısında [iyimserlik için](https://medium.com/@jimmysong/why-Bitcoin-will-get-scaling-without-segwit-or-large-blocks-772799fab021?ref=yirmibir.org#.trvv9cxuu) harika bir örnek oluşturdu.   
   
> Kısacası, Bitcoin olgunlaşıyor ve piyasa Bitcoin'in ne olacağını tanımlamaya başlıyor. Eminim ki tartışmanın her iki tarafında da ne olacağından hoşlanmayacak insanlar vardır; ancak merkeziyetsiz bir para birimiyle elde edeceğiniz şey budur.   
   
Bu yeni ekosistem hakkında mümkün olduğunca çok bilgi tüketme arayışımı sürdüreceğim; ancak Bitcoin'i anlama hedefimden vazgeçeli çok oldu.   
   
Bitiş çizgisine doğru ne kadar hızlı koşarsam, o da benden o kadar çok uzaklaşıyor. Bu alandaki kimi insanlar gelecekteki yönü konusunda diğerlerinden daha emin olsa da, gerçek şu ki yeni yollar açıyoruz ve ilerledikçe öğreniyoruz.   
   
Bitcoin'i anlamıyorsunuz ve bu bir sorun değil; çünkü kimse anlamıyor.   
   
Bir balina yatırımcı, Bitcoin'i erken benimseyen biri, C-Seviye yönetici, geliştirici veya madenci olabilirsiniz. Yine de Bitcoin'i anlamayacaksınız.   
   
[![Lopp Final](/images/content/blog/kimse-bitcoini-anlamiyor/loppwhale.png)](https://x.com/lopp/status/829415824326852611)

Jameson Lopp (@lopp), 8 Şubat 2017