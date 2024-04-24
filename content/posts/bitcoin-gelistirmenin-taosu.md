---
index: 15
title: "Bitcoin Geliştirmenin Tao'su "
meta: "Son birkaç senedir Bitcoin ölçeklendirmesi tartışmalarının meydana getirdiği heyecan, kriptopara protokolünün evrimine yön veren geliştirme sürecine yönelik daha önce görülmemiş bir ilgi uyandırmıştır."
author: "Alex B."
authorURL: "https://twitter.com/bergealex4"
translator: "Emir Yorulmaz"
translatorURL: "https://twitter.com/_untreu"
slug: "bitcoin-gelistirmenin-taosu"
flag: "turkey"
img: 'bitcoin-gelistirmenin-taosu'
tags:
    - translation
---

Son birkaç senedir Bitcoin ölçeklendirmesi tartışmalarının meydana getirdiği heyecan, kriptopara protokolünün evrimine yön veren geliştirme sürecine yönelik daha önce görülmemiş bir ilgi uyandırmıştır. Açık kaynak kodlu yazılım projeleri, birbiriyle rekabet eden çıkar gruplarının baskısıyla boğuşsa ve farklı geliştirme timleri tarafından destek verilen farklı vizyonlarla baş etmeke uzun bir geçmişse sahip olsa da Bitcoin'in bu durumda sistemin paydaşı olan çıkar gruplarının kapsamı, çeşitliliği ve haliyle geliştirme sürecinde söz sahibi olma motivasyonu gerçekten benzersiz bir durum ortaya çıkarmaktadır.   
   
Tüm bu zorluklarla mücadele etmek için büyük açık kaynak kodlu projeler, katkıda bulunanların çalışmalarının altında yatan etiği, misyonu ve ilkeleri dikkatlice tanımlamıştır. Bu duruma verilebilecek en iyi örneklerden biri  de IETF'in “[The Tao of IETF: A Novice's Guide to the Internet Engineering Task Force](https://www.ietf.org/tao.html?ref=yirmibir.org)” kitabıdır. Tüm dünyayı kapsayan bileşenleriyle en büyük topluluklardan biri olan IETF, gönüllülerin geliştirme çabalarını organize etme konusunda onlarca yıllık deneyime sahiptir. Daha da mühim olanı, "kaba konsensüs" yaklaşımı Bitcoin'in geliştirme ve karar verme süreciyle ilgili güçlü paralellikler göstermektedir.   
   
Daha öncesinde Bitcoin protokolüne yön veren uygulamalrın anlaşılamaması [gereksiz çatışmalara](https://medium.com/@bergealex4/on-extended-communication-failures-5ffb6fcc6b89?ref=yirmibir.org) yol açmıştı, şimdi de bu; Bitcoin'i ilgili aktörlerin iyi niyetine rağmen ilerlemeyi durdurmakla tehdit ediyor; ancak açık kaynak kodlu yazılımlar geliştirmenin her türlü durumu kapsayan bir emek süreci olduğunu unutmamalıyız. Karşılaştığımız zorluklar, ilgili aktörlerin pozitif enerjisini daha verimli sonuçlara yönlendirmek için konuyla ilgili herkes için bir fırsattır.   
   
Bu makale kendine IETF'in kılavuzunu referans alarak karşılıklı anlayış yaratma girişimidir. Yalnızca Bitcoin'e nasıl katkıda bulunulacağının değil, aynı zamanda bunu yaparken nasıl fikir birliğine varılacağının da ana hatlarını çizmektedir. Burada özetlenen kavramlar yalnızca dışarıdan birinin kendi bakışının ürünüdür ve resmi veya resmi olarak standart haline gelmiş bir şeyle karıştırılamamalıdır.   
   
## Bitcoin Geliştirme Ortamı   
Bitcoin Core Project, bugün Bitcoin geliştirmenin en aktif ve üretken Bitcoin geliştirmenin lideri konumundadır. [Github.com/Bitcoin](http://github.com/bitcoin?ref=yirmibir.org) deposu (repository) altında olan uygulama, dünyanın dört bir yanındaki yüzlerce gönüllüden oluşan dağıtık bir gruptan oluşmaktadır.   
   
Bu projenin bir yönetim organı veya abonelik modeli yoktur: katılımlar açık bir katkıda bulunanlar modeli altında kabul edilir ve daha önce katkıda bulunanlar tarafında değerlendirilmesiyle meritokratik bir süreç gerçekleşir. Bakıcılar (maintainer), geliştirme sürecini kolaylaştırmak için sürüm döngüsünü denetleyerek projeyi ileri taşımaktan sorumlu olan bir lider bakıcı (lead maintainer) tarafından atanır. Bu hiyerarşi ve bu hiyerarşinin katmanları pratik bir konudur, herhangi bir ayrıcalık ya da yetki anlamına gelmez. Bu kişilerden herhangi birinin depo (repository) üzerindeki kontrolünü kötüye kullanması halinde kalan üyeler projeyi forklamakta (çatallamak) ve çalışmalarını sürdürmekte özgürdür.   
   
Projenin görevi asla resmen tanımlanmasa da [geçmiş iletişimlerden](https://bitcoincore.org/en/2015/09/01/open-letter/?ref=yirmibir.org) belirli hedefler çıkarılabilir. Bitcoin Core aşağıdakiler için çalışır:   
   
1) Ağ sağlığını en üst seviyede tutmak   
2) En yüksek performans standartları için çaba vermek   
3) Bitcoin'i herkes için güvenli tutmak   
4) Kullanıcıların değerlendirmesi için Bitcoin topluluğuna yazılım üretmek ve yayınlamak   
5) Kullanıcı seçimini koruyan geriye dönük uyumlu yükseltmeleri tercih etmek   
6) Ağın temelinde yatan özellikler olan merkeziyetsizlik, güvenlik ve izinsiz inovasyonu korumak   
   
Katkıda bulunanların büyük bir kısmı gönüllülük esasına dayansa da geliştirme için harcanan çabalarının sürdürülebilirliğini sağlamak adına artık birkaç kuruluş hibe veya doğrudan istihdam yoluyla mali destek sağlamaktadır. Bunlar arasında [Blockstream](http://blockstream.com/?ref=yirmibir.org), [ChainCode Labs](http://chaincode.com/?ref=yirmibir.org), Ciphrex, [MIT DCI](http://dci.mit.edu/?ref=yirmibir.org) ve [Purse.io](https://bcoin.io/?ref=yirmibir.org) yer almaktadır. Her durumda olmasa da çoğu durumda, geliştiricilerin bağımsızlığını korumak ve onları Bitcoin ya da kullanıcılarına zarar verebilecek çıkar çatışmalarından korumak için özel sözleşme maddeleri ve düzenlemeler yapılmaktadır.  

Youtube: [Bitcoin Core - Development 2016 Activity Report](https://www.youtube.com/watch?v=eK1gfMV2Tqw)  

Yıllar süren ortak çalışma, alanın en deneyimli ve bilgili geliştiricilerden oluşan benzersiz bir koleksiyon ve güvenilir bir sicil, Bitcoin Core'unu alanın en güvenilir uygulaması haline getirmiştir. Buna ek olarak projenin protokolün teknolojik sorumlusu olma statüsü yalnızca dünya çapındaki Bitcoin kullanıcılarının gönüllü eylemleriyle elde edilmiştir. Bitcoin Core, Bitcoin'i kontrol etmez ve mutabakat kurallarında tek taraflı değişiklik yapmaya zorlayamaz. Birçok kullanıcı ve şirket Bitcoin Core yazılımının kendi yamalarını çalıştırmaktadır. Diğer geliştiriciler, bazıları Bitcoin Core kod tabanına dayanan ve diğerleri btcd, Libbitcoin, Bcoin, NBitcoin gibi önemli sürümlerle farklı bir dil kullanarak sıfırdan yazılan kendi uygulamalarını oluşturdular.   
   
Ancak, Bitcoin geliştirme ortamı yalnızca Bitcoin Core projesinden ve bu bireysel geliştiricilerden daha büyüktür. Bitcoin, ekosistemi ve ilgili teknolojileri, bugüne kadar [1150'den fazla makale](https://cdecker.github.io/btcresearch/?ref=yirmibir.org) yayınlayan yüzlerce akademisyen tarafından araştırılmıştır. 2015'te başlatılan [Scaling Bitcoin Çalıştayları](https://scalingbitcoin.org/about?ref=yirmibir.org), geliştiricilerin ve araştırmacıların protokol geliştirme konularında işbirliği yapmaları ve teknolojinin evrimini akademik bir bağlamda tartışmaları için eşsiz bir fırsat sunmuştur. Stanford, Princeton ve ETH Zürih gibi diğer kurumlar da bu alandaki araştırmalara adanmış aktif kaynaklara sahiptir.   
   
## Nasıl katkı yapılır?   
Bitcoin geliştirmeye katkıda bulunmanın çeşitli yolları vardır; hali hazırda işeyen sürecin farkında olamka ve yıllar içinde geliştirilen standartlara saygılı olmak kaydıyla herkes bunu yapabilir.   
   
Katkı sağlayan yeni geliştirmecilerin karşılaştığı en zorlayıcı husulardan biri altyapının (codebase) genişliği ve onu çevreleyen teknolojilerin karmaşıklığıdır.    
   
Yeni katılımcıların karşılaştığı en zorlayıcı hususlardan biri kod tabanının genişliği ve onu çevreleyen teknolojilerin karmaşıklığıdır. Özellikle yeni katkı sağlayanlar genelde yeni fikirlerin aslında nadiren yeni olduğunu ve muhtemelen geçmişte önerilmiş veya düşünülmüş olduğunu fark ederler.   
   
Verimli katkıları teşvik etmek ve yanlış yönlendirilmiş çabalardan kaçınmak için, geliştiricilerin resmi tekliflerde bulunmadan önce aşağıda listelenen çeşitli çevrimiçi kaynaklara başvurmaları teşvik edilmektedir. Özgür ve açık kaynaklı yazılım (FOSS) geliştirme açık iletişimi desteklemektedir ve katkıda bulunanların girişimleri hakkında geri bildirim alabilmeleri için zaman içinde çeşitli platformlar oluşturulmuştur.   
   
## Oku ve Etkileşime Geç:   
Bitcoin geliştirmenin odaklandığı nokta, şu anda Linux Vakfı tarafından barındırılan ve uygulamadan bağımsız bir liste olan [bitcoin-dev](https://lists.linuxfoundation.org/mailman/listinfo/bitcoin-dev?ref=yirmibir.org) (Not: Nisan 2024'de bitcoin-dev posta listesi [buraya](https://groups.google.com/g/bitcoindev/c/aewBuV6k-LI?pli=1?ref=yirmibir.org) taşındı) posta listesidir. Katkı sağlamaya karar vermiş katılımcılara geliştirme süreci hakkında doğru bir fikir edinmek ve aynı zamanda çalışmalarıyla potansiyel olarak ilgili içeriği ortaya çıkarmak için listenin [arşivlerine](https://lists.linuxfoundation.org/pipermail/bitcoin-dev/?ref=yirmibir.org) başvurmaları tavsiye edilir.   
   
Listedeki tartışmalar, teknik tartışma ve tekliflere odaklanmayı korumak için hafifçe denetlenir. Meta tartışmalar genellikle [bitcoin-discuss](https://lists.linuxfoundation.org/mailman/listinfo/bitcoin-discuss?ref=yirmibir.org) posta listesine yönlendirilir.   
   
IRC freenode üzerindeki #bitcoin-dev, #bitcoin-core-dev ve #bitcoin-wizards kanalları gibi diğer ortamlar da fikirler hakkında ilk yorumları almak veya Bitcoin geliştirme ile ilgili sorulara yanıt almak için tavsiye edilir. Yukarıda bahsedilen kanalın geçmiş kayıtları da yeni katılımcılar için değerli olabilecek zengin bilgiler içermektedir. Bunlar şu adreslerde bulunabilir:   
   
1. [#bitcoin-dev](http://bitcoinstats.com/irc/bitcoin-dev/logs/2017/06)   
2. [#bitcoin-core-dev](https://botbot.me/freenode/bitcoin-core-dev/)   
3. [#bitcoin-wizards](https://botbot.me/freenode/bitcoin-wizards/) (older content [here](https://download.wpsoftware.net/bitcoin/wizards/))   

Buna ek olarak, birçok kişi yıllar boyunca çeşitli çevrelerde tartışılan fikirlerin toplandığı ve arşivlendiği kendi sitelerini yürütmektedir. Ayrıştırması zor olsa da en kapsamlılarından biri, geliştirici Bryan Bishop'un [burada bulunan](http://diyhpl.us/wiki/bitcoin/?ref=yirmibir.org) wiki'sidir. Diğer topluluk kaynakları arasında [Bitcoin Wiki](https://en.bitcoin.it/wiki/Main_Page?ref=yirmibir.org) ve Bitcointalk'ın [Geliştirme ve Teknik Tartışma bölümü](https://bitcointalk.org/index.php?board=6.0?ref=yirmibir.org) bulunmaktadır.   
   
Son olarak, teknik iş birliğinin yanında yeni fikirlerin farklı bir sosyal bağlamda tanıtılmasını desteklemek adına yıllar içinde farklı yüz yüze mekanlar ortaya çıkmıştır. Bunlara örnek olarak, bunlarla sınırlı olmamak üzere, [SF Bitcoin Devs](https://www.meetup.com/fr-FR/SF-Bitcoin-Devs/?ref=yirmibir.org) buluşması, [NYC Bitcoin Devs](https://www.meetup.com/fr-FR/BitDevsNYC/?chapter_analytics_code=UA-72468922-1?ref=yirmibir.org), [Bitcoin Milano](https://www.meetup.com/fr-FR/bitcoinmilano/?ref=yirmibir.org) buluşması, [Paralelni Polis](https://www.paralelnipolis.cz/program/bitcoin-meetup/?ref=yirmibir.org) Bitcoin buluşması, [Scaling Bitcoin](https://scalingbitcoin.org/?ref=yirmibir.org) konferansları ve [S3ND](https://s3nd.org/?ref=yirmibir.org) yuvarlak masa toplantıları verilebilir.   
   
## Öneride Bulun & Uygula:   
Koda katkıda bulunmak, inceleme sürecine yardım etmek isteyen geliştiricelrin [burada bulunun](https://bitcoincore.org/en/faq/contributing-code/?ref=yirmibir.org) kılavuza başvurmaları tavsiye edilir. En fazla çaba, Bitcoin'in öutabakat kurallarını etkileyen değişiklikler ve bir bütün halinde ekosistem üzerindeki etkileri göz önüne alındığında standartlaşma gerektirebilecek özellikler için gereklidir.  

Bitcoin Improvement Proposal (BIP) mekanizması, İnternet'in temelini oluşturan çekirdek sistemlerle ilgili yeni standartların, yöntemlerin veya teknolojilerin tanıtımını belgelemek için kullanılan IETF'nin Request For Comment (RFC) mekanizmasının Bitcoin'e ait bir versiyonudur. Bu kavram Bitcoin'e geliştirici Amir Taaki tarafından uygulanmış ve [ilk spesifikasyonu](https://github.com/bitcoin/bips/blob/master/bip-0001.mediawiki?ref=yirmibir.org) büyük ölçüde Python'un [PEP-0001](https://www.python.org/dev/peps/pep-0001/?ref=yirmibir.org)'inden uyarlanmıştır. O zamandan beri geliştirici Luke-Jr. tarafından [revize](https://github.com/bitcoin/bips/blob/master/bip-0002.mediawiki?ref=yirmibir.org) edilmiştir.   
   
> Amacımız; BIP'lerin yeni özellikler öneren, bir konuda topluluk girdisi toplayan ve Bitcoin'e giren tasarım kararlarını belgeyen birincil mekanizmalar olması. BIP yazarı, topluluk içinde fikir mutabakatı oluşturmaktan ve karşıt görüşleri belgelemekten sorumludur. 
- [BIP2](https://github.com/bitcoin/bips/blob/master/bip-0002.mediawiki?ref=yirmibir.org), [BIP süreci, revize edilmiş](https://github.com/bitcoin/bips/blob/master/bip-0002.mediawiki*ref=yirmibir.org).   
   
BIP sürecinin temeli, BIP2'nin iş birliğine dayalı bir araç olarak amacını vurgulayan “[BIP İş Akışı](https://github.com/bitcoin/bips/blob/master/bip-0002.mediawiki#bip-workflow?ref=yirmibir.org” bölümünde bulunabilir.   
   
Bitcoin'in dağıtık güven ve açık kaynak kodlu ilkelerinin doğası, bilimsel hakem değerlendirme modeline sıkı sıkıya bağlı kalmayı gerektirir. Şeffaflık ve açık söylem, herhangi bir teklifin başarısı ve haliyle Bitcoin gelişiminin sağlığı için esastır. Yeni katkı sağlayanlar sürece alçakgönüllülükle yaklaşmalı ve erken reddedilmelerden etkilenmemelidir; çünkü topluluğun yıllar içinde edindiği kolektif bilgi ve deneyim zenginliğini tek bir kişi iddia edemez.   
   
Bu detaylı inceleme süreci, bir öneri etrafında fikir mutabakatı oluşturmak için mümkün olduğunca çok sayıda aktörün katılımını şart kılar. Önerilen değişiklik, sistemin uzlaşma kurallarında değişiklik içeriyorsa bu özellikle kritik önem taşır. Bu bazılarına sıkıcı gelse de, bu geleneğe uyulmaması, güvensizliği ve politikayı ortaya çıkararak gelişimin ilerlemesini daha da geciktirebilir. Yerleşik uygulamaların dışına çıkma girişimi nedeniyle yazarının motivasyonları sorgulanırsa, mükemmel bir teknik teklif önemli bir gecikmeye maruz kalabilir. Bundan kaçınmak için, katkıda bulunanlar ekosistemin ilgili bileşenleriyle proaktif bir şekilde ilişki kurmaya ve özellikle diğer geliştiriciler arasında diyaloğu teşvik etmeye teşvik edilmektedir. Çeşitli katkı sağlayıcıların rolü ve fikir birliğine varmak için gerekenler hakkındaki ayrıntılar BIP0002'nin '[Gerekçe](https://github.com/bitcoin/bips/blob/master/bip-0002.mediawiki#Rationale-2?ref=yirmibir.org)' bölümünde bulunabilir.   
   
> IETF standardı haline gelen bir belge yazmaya kararı alırsanız, tek tek adımlar oldukça basit olsa bile genel sürecin zorlu olabileceğinin farkına varmalısınız. Yine de pekçok insan bu süreçten yara almadan çıkar ve yazarların egolarını az ya da çok sağlam bir şekilde ortaya çıkarmalarına yardımcı olan pek çok yazılı rehber vardır.  
- The Tao of IETF: A Novice's Guide to the Internet Engineering Task Force, [2012](https://www.ietf.org/tao.html#rfcs.ids?ref=yirmibir.org)   
   
Yeni bir fikir yukarıdaki şartları sağladıktan sonra, sponsorlarından kodu spesifikasyonla uyumlu olan çalışan bir uygulama üretmeleri beklenir. Geriye dönük uyumluluğu korumayı ve mümkün olduğunca az yıkıcı olmayı hedeflemelidir. Eric Lombrozo, birlikte çalışabilirliği kolaylaştırmak için teklifleri etkileşimde bulundukları ağ katmanlarına göre kategorize etmeyi kolayalştıran [BIP123](https://github.com/bitcoin/bips/blob/master/bip-0123.mediawiki?ref=yirmibir.org)'ü tanıtmıştır.   
   
## Kaba mutabakat ve koşturulan kod   
> IETF birçok yönden katılımcılarının inançları doğrultusunda çalışır. “Kurucu inançlardan” biri David Clark'ın IETF ile ilgili ilk alıntılarından birinde somutlaşmaktadır: “Kralları, başkanları ve oylamayı reddediyoruz. Biz kaba mutabakata ve koşturulan koda inanıyoruz”. 
- The Tao of IETF: A Novice's Guide to the Internet Engineering Task Force, [2012](https://www.ietf.org/tao.html#rfcs.ids?ref=yirmibir.org)   
   
Yıllar boyunca Bitcoin'in yönetim modeli (ya da eksikliği) hakkında çok şey yazıldı. Satoshi Nakomoto, 2010 yılında geliştirme sahnesinden kaybolduğunda haleflerinin fikir mutabakatına dayalı kritik kararlarla karşı karşıya kaldıklarında dikkate almaları için bir talimat veya kılavuz bırakmadı.   
   
Bitcoin tarihinin hatrı sayılır bölümünde bu bir problem yaratmamıştı; protokoldeki teknik değişiklikler nadiren tartışmalıydı ve kullanıcılar yürürlükteki hakem değerlendirmesi sürecine güveniyorlardı. Teklifler teknik değerlerine göre değerlendirilir ve sonunda “[dahil edilmek için asgari standartları](https://bitcoincore.org/en/faq/contributing-code/?ref=yirmibir.org” karşıladıkları belirlendikten sonra kod tabanına dahil edilirdi.   
   
Zamanla ekosistemdeki aktörlerin artan çeşitliliğinin ve farklılaşan çıkar ve beklentilerinin mutlak sonucu olarak mutabakata varmanın gizli zorlukları ortaya çıktı. Pekçok kişiye göre, sistemin sosyal karmaşıklığı teknik evrimini durma noktasına getirdi. Ortada bir otorite, bir karar mercii yokken çeşitli paydaşlar protokolün temel kurallarını ilgilendiren tartışmalar için kabul edilebilir bir sonuca nasıl yakınlaşabilirdi?   
   
Sabırsızlık, çeşitli katılımcıların tanınmış aktörlere ayrıcalık tanıyacak ve onlara protokolün yönü üzerinde kontrol sağlayacak resmi yönetişim modellerini [savunmalarına](https://freedom-to-tinker.com/2015/05/11/bitcoin-faces-a-crossroads-needs-an-effective-decision-making-process/?ref=yirmibir.org) yol açtı. Ne yazık ki bu tür yapılar, sistemin kurallarını koruyan kullanıcı güdümlü mutabakata ters düşmektedir. Tanınmış kişilere orantısız güç vererek, düşman güçler tarafından zorlama ve aşırı etki için bir hedef oluşturur.   
   
> Kaba mutabakat birçok şekilde tanımlanmıştır; basit bir versiyon, güçlü itirazların, çoğu insan bu itirazların yanlış olduğuna ikna olana kadar tartışılması gerektiği anlamına gelir.  
- The Tao of IETF: A Novice's Guide to the Internet Engineering Task Force, [2012](https://www.ietf.org/tao.html#rfcs.ids?ref=yirmibir.org)    
   
IETF tarafından benimsenen “kaba mutabakat” modelinden daha uygun bir karar alma süreci çıkarılabilir. "[On Consensus and Humming in the IETF](https://tools.ietf.org/html/rfc7282#page-3?ref=yirmibir.org)" belgesinin çeşitli bölümleri, Bitcoin geliştiricilerinin mutabakata dayalı geliştirmeden ne beklendiği konusunda uygun bir bakış açısı edinmelerine yardımcı olabilecek aydınlatıcı bir içerik sunmaktadır.   
   
## [Anlaşmazlık olmaması, anlaşmadan daha önemlidir](https://tools.ietf.org/html/rfc7282#section-2?ref=yirmibir.org)   
Bitcoin geliştirmeyi ilerletmenin büyük bir kısmı, bir teklif için destek oluşturmaktan ibarettir. Ne yazık ki geniş destek görüntüsü genellikle mutabakat ile karıştırılmaktadır. Mutabakat ölçütleri bir fikrin topluluğun beğenisini kazandığını gösterebilir; ancak önemli anlaşmazlıklar devam ediyorsa ortada bir mutabakata olduğu söylenemez. Sadece tek bir katılımcı tarafından bile geçerli bir teknik itiraz ortaya atılırsa, bu itiraz grup tarafından ele alınmalıdır, aksi takdirde yeterince güçlü ise bir önerinin uygulanmasını engelleyebilir.   
   
Bu nedenle geliştiriciler teklifleri “en az anlaşmazlık” ilkesine göre değerlendirmelidir. Herkesin aynı fikirde olmasını sağlamak beyhude bir çaba olsa da, belirli anlaşmazlıklara ağırlık vererek ve bunların uzlaşılamaz konular mı yoksa sadece bir mühendislik tercihi mi olduğunu tespit ederek “kaba mutabakata” ulaşmak mümkündür.   
   
## [Tüm konular ele alındığında kaba mutabakata varılır; ancak mutlaka uzlaşmaya varılması gerekmez](https://tools.ietf.org/html/rfc7282#page-7?ref=yirmibir.org)   
Bir teklifle ilgili potansiyel sorunların dikkate alınması esas olsa da mühendislik dengelerinin varlığını kabul etmek ve bunları en pragmatik şekilde ele almak da önemlidir. Bu konuya yaklaşmanın bir başka yolu da “mükemmelin iyinin düşmanı olmasına” izin vermemektir.   
   
Geliştiriciler grubu, her itirazı ön yargısız bir şekilde değerlendirmeye, inceleme süreci konusunda açık olmaya ve son karar konusunda net olmaya teşvik edilir. Bir bireyin endişesi, grubun potansiyel alternatifler hakkında daha fazla anlayış kazanmasına ve bunların nasıl veya neden daha üstün olabileceği konusunda tutarlı bir şekilde akıl yürütmesine olanak tanıyacak şekilde derinlemesine incelenirse, geliştirme süreci büyük ilerleme kaydedebilir.   
   
> Sadece büyük bir çoğunluğun bir itirazı reddetme konusunda aynı fikirde olması, kaba mutabakatın varlığını iddia etmek için yeterli değildir; grubun itirazı dürüstçe değerlendirmiş ve diğer konuların buna karşı yeterince ağır bastığını değerlendirmiş olması gerekir. Bu muhakeme ve değerlendirmenin yapılmaması, gerçek bir fikir birliği olmadığı anlamına gelir.  
- IETF'de Mutabakat ve Uyuşmazlık Üzerine, [2014](https://tools.ietf.org/html/rfc7282#page-7?ref=yirmibir.org)    
   
Sorunlar çeşitli nitelikte olabilir, bazıları diğerlerinden daha kritik olabilir, ancak grup tüm potansiyel ödünlerin tatmin edici bir şekilde ele alındığını kabul ettiği sürece en iyi teknik sonuca ulaşma olasılığı daha yüksektir. Grup, güçlü ve rasyonel itirazlara rağmen tavizlerin verildiği “at takası” stratejilerini kullanarak geliştirmeyi hızlandırma girişimlerine karşı dikkatli olmalıdır. Mühendisliğin siyasetin gerisinde kaldığı tavizlerin açık kaynak kodlu yazılım geliştirmede yeri yoktur, özellikle de özel çıkarların sistem kullanıcılarının güvenliğinin önüne geçmemesi gereken Bitcoin söz konusu olduğunda.   
   
## [Mutabakat yoldur, varış noktası değil](https://tools.ietf.org/html/rfc7282#section-5?ref=yirmibir.org)   
> Her ne kadar IETF kaba mutabakat konusunda hiçbir zaman mükemmel ilkelere sahip olamasa da, ilkelere bağlı kalma konusunda dikkatli olmamak gelecekte ilkelere bağlı kalmayı giderek zorlaştırır ve daha kötü teknik çıktılar elde etmemize neden olur.  
- IETF'de Uzlaşma ve Uğultu Üzerine, [2014](https://tools.ietf.org/html/rfc7282#page-7?ref=yirmibir.org)   
   
Mutabakat konuları tartışılırken en sık karşılaşılan sorunlardan biri mutabakatın sağlanıp sağlanmadığının değerlendirilmesidir. Tipik girişimler genellikle kolayca yanlış yorumlanabilen veya manipülasyona maruz kalabilen kişi sayısına ve diğer sosyal sinyallere dayanır. Bu çabalar süreçten ziyade sonuçlara çok fazla odaklanarak büyük resmi gözden kaçırmaktadır.   
   
Mutabakat oluşturma, açık iş birliğine yönelik sistematik bir yaklaşım olarak daha iyi kabul edilir: bu, ekosistemdeki her katılımcının girdilerine dayalı olarak en uygun teknik sonuca ulaşmak için çalışan yinelemeli bir süreçtir. Katılımcılar bir dizi en iyi uygulama üzerinde anlaşabildikleri ve temel açık kaynak kodu ilkelerine bağlı kalmak için birlikte çalıştıkları sürece tatmin edici bir sonuca ulaşma olasılığı artar. Doğrudan dahil olmayan kullanıcıların benimsemek isteyebilecekleri değişikliklerin meşruiyetini değerlendirebilmeleri için uygulamanın şeffaflığı esastır.   
   
Bu son nokta vurgulanmaya değerdir;çünkü sistemin mutabakatı en sonunda kullanıcıların çalıştırdığı kod ve kendi doğrulama düğümleri aracılığıyla uyguladıkları kurallar tarafından belirlenir. Bazı değişiklikler ekosistem genelinde uzun ve yorucu bir inceleme süreci olmaksızın gerçekleştirilebilirken, mutabakat katmanını içeren değişiklikler ilgili her aktör arasında olağanüstü bir koordinasyon gerektirir. Belirli bir grup, diğerlerinin zorladığı zaman kısıtlaması nedeniyle kendi sesinin dikkate alınmadığını hissederse, aceleye getirilmiş girişimlerin bir yere varması pek olası değildir.   
   
> Yeni başlayanlar için önemli olan bir şey daha var: IETF, bazı insanların yanlışlıkla söylediklerinin aksine hiçbir şekilde “İnternet'i yönetmez”. IETF, genellikle İnternet kullanıcıları tarafından benimsenen gönüllü standartlar oluşturur, ancak İnternet'i kontrol etmez, denetlemez, hatta devriye gezmez. Eğer IETF'ye olan ilginiz denetleyenlerin bir parçası olmak istemenizden kaynaklanıyorsa, IETF sizi büyük bir hayal kırıklığına uğratabilir.  
- The Tao of IETF: A Novice's Guide to the Internet Engineering Task Force, [2012](https://www.ietf.org/tao.html#rfcs.ids?ref=yirmibir.org)   
   
Bitcoin'in sosyo-ekonomik etkisi, ilgili herkesin çıkarları konsunda mutabakat sağlamak ve protokolün merkeziyetsiz doğasını korumak söz konusu olduğunda benzersiz zorluklar yaratmaktadır. Neyse ki bu durum emsalsiz değildir ve İnternet protokol standartlarının tarihi bu zorluklara nasıl yaklaşmamız gerektiği konusunda değerli bilgiler sunmaktadır. IETF'nin bu makalede vurgulanan kültürel normları birdenbire ortaya çıkmamış, uzun bir deneme ve sıkıntı dönemi boyunca edinilmiştir. Bugün çok az kullanıcı İnternet'in [kendi ölçeklendirme sorunlarıyla](https://twitter.com/i/moments/879724151124115456?ref=yirmibir.org) uğraşmak zorunda kaldığını ve çeşitli bileşenlerin kaderi üzerinde kontrol sahibi olmaya çalıştığını hatırlayabilir. IETF'nin açık geliştirme konusundaki ısrarı, sistemin gönüllü yapısının ve teknik bütünlüğünün korunmasında çok önemli bir rol oynamıştır.   

![Scaling](/images/content/blog/bitcoin-gelistirmenin-taosu/scaling.png)
*[MIT'den David Clark'ın 1992 IETF toplantısında yaptığı ufuk açıcı sunumdan alıntı](https://groups.csail.mit.edu/ana/People/DDC/future_ietf_92.pdf?ref=yirmibir.org)*
   
## İnternet ve onun topluluğu büyüdükçe, bu büyüme değişimiyle ilgili süreci nasıl yöneteceğiz?   
- Açık süreç — tüm seslerin duyulmasına izin verin.   
- Kapalı süreç — ilerleme sağlayın.   
- Hızlı süreç — süreci gerçekçi tutun.   
- Ağır süreç — düşünmeye zaman bırakın.   
- Pazar odaklı süreç — gelecek ticarette.   
- Ölçeklendirme odaklı süreç — gelecek internette.   
   
Bugün, topluluğumuz kendisini yirmi yıldan daha uzun bir süre önce internetin içinde bulunduğu benzer bir çıkmazın ortasında bulmaktadır. Yakın gelecekte alacağımız kolektif kararların Bitcoin'in ileriye dönük evrimi üzerinde kalıcı bir etkisi olması muhtemeldir. Ticari çıkarlar ekosistemin büyümesi için gerekli olsa da, gelişim sürecine müdahale etme konusunda temkinli olmalıdırlar. Kısa vadeli çıkarlar, protokolün uzun vadeli dayanıklılığını korumak için gerekli olan sağlam mühendisliğin önünde duramaz.   
   
Bitcoin ağı nihayetinde dünyanın dört bir yanındaki binlerce bağımsız kullanıcı tarafından gönüllü olarak kendi yazılım uygulamalarının çalıştırılmasıyla desteklenmektedir. Bu kapsamda açık kaynak kodlu yazılım geliştirme sürecini baltalayan herhangi bir eylem, kullanıcı tabanı arasında güvensizliğe yol açacaktır. Bazı aktörler yukarıdan aşağıya bir girişimin teknolojinin ilerlemesini hızlandıracağı izlenimine kapılsa da, bunun teknolojiyi durdurma olasılığı daha yüksektir. Daha da kötüsü bu hızlandırılmış gelişim iştahı bizi protokole onarılamaz zararlar verme riskiyle karşı karşıya bırakır.   
   
Anlaşılacağı üzere pekçok katılımcının kendi çıkarlarını gözettiğini ve yavaş, aşamalı ilerlemenin işletmeleri üzerindeki etkisinden endişe duyabileceğini varsaymak mantıklıdır. Bu sebeple, ilgili herkesin iletişimi geliştirmesi ve açık bir şekilde işbirliği yapması hayati önem taşımaktadır; böylece, umarım hepimizden daha uzun yaşayacak bir teknolojinin uzun vadeli beklentilerini feda etmeden yakın vadeli sorunlarla başa çıkabiliriz.   
   
Nihayetinde, gelecek Bitcoin'de.   

[Orijinal Makale](https://medium.com/@bergealex4/the-tao-of-bitcoin-development-ff093c6155cd?ref=yirmibir.org)  
İlk yayınlanma tarihi: 28/06/2017