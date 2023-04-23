import { MeetupPreview } from "./meetup-preview";
import { format } from "date-fns";
import { EventType } from "../utils/types";
import { ActionLink } from "./action-link";

function getPastEvents(events: EventType[]) {
  return events
    .filter((event) => new Date(event.date) < new Date())
    .sort((a, z) => z.date.localeCompare(a.date));
}

export function MeetupsSection({ events }: { events: EventType[] }) {
  const pastEvents = getPastEvents(events);

  return (
    <section className="mt-14">
      <div className="w-5/6 m-auto">
        <p className="mb-16 text-xl font-medium text-center md:text-xl mt-14">
          Grubun şu anda yüzlerce üyesi var ve bölge genelinde düzenli toplantılar düzenliyor.
          Bitcoin&apos;in benzersizliğini ve önemini anlayan ve bunun hakkında bilgi edinmek isteyen herkesi bekliyoruz.
          Bitcoin tutkunları olarak bilgi ve deneyimlerimizi herkesle paylaşmaktan mutluluk duyuyoruz.
          Bazılarımız bitcoin endüstrisinde çalışıyor, bazılarımızın bitcoin ile ilgili işletmeleri varken, 
          onlar bazıları sadece meraklı. Bizi birleştiren bu teknolojiye olan sevgimiz.
          Bu size ilginç geliyorsa, söyleyeceklerimizi duymak ister misiniz
          veya bizimle paylaşmak istediğiniz bir şey var mı?
        </p>
        <div className="flex justify-center w-full">
          <ActionLink href="https://www.meetup.com/istanbul-bitcoin-meetup-group/">
            Naredni događaj
          </ActionLink>
        </div>
      </div>
      {/* <div className="px-4 mt-32 3xl:px-20"> */}
      {/*   <h3 className="mb-14 text-3xl md:text-[2.5rem] font-bold text-center">Nedavni Događaji</h3> */}
      {/*   <div className="justify-between grid grid-cols-1 gap-y-10 sm:gap-20 sm:grid-cols-2 md:grid-cols-3"> */}
      {/*     {[...pastEvents].splice(0, 3).map((event) => ( */}
      {/*       <div key={new Date(event.date).toString()}> */}
      {/*         <MeetupPreview */}
      {/*           {...event} */}
      {/*           imgSrc={`/${event.imgSrc}`} */}
      {/*           date={format(new Date(event.date), "EEEE, MMMM dd, yyyy")} */}
      {/*         /> */}
      {/*       </div> */}
      {/*     ))} */}
      {/*   </div> */}
      {/* </div> */}
      {/* <div className="flex justify-center w-full mt-14"> */}
      {/*   <ActionLink href="https://www.meetup.com/istanbul-bitcoin-meetup-group/"> */}
      {/*     Pregledaj događaje */}
      {/*   </ActionLink> */}
      {/* </div> */}
    </section>
  );
}
