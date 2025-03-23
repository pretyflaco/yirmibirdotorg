import React from 'react';

const quotes = [  {
    text: "No, Neo. When you're ready, you won't have to.",
    author: "pretyflaco"
  },
  {
    text: "Not your keys, not your coins",
    author: "pretyflaco"
  },
  {
    text: "Stay humble, stack sats",
    author: "pretyflaco"
  },
  {
    text: "Study Bitcoin.",
    author: "pretyflaco"
  },
  {
    text: "test",
    author: "pretyflaco"
  },

  {
    text: "Bitcoin, özgürlüğün dijital tezahürüdür.",
    author: "Ali Y."
  },
  {
    text: "Merkez bankası olmayan bir para birimi düşünün. İşte bu Bitcoin.",
    author: "Mehmet K."
  },
  {
    text: "Bitcoin ile tanışmak hayatımın dönüm noktasıydı.",
    author: "Ayşe D."
  }
];

export function QuotesSection() {
  return (
    <section className="mt-32">
      <h2 className="text-3xl md:text-[2.5rem] mb-14 font-bold text-center">Topluluğumuzdan Kesitler</h2>
      <div className="relative bg-gradient-to-r from-purpleGradient/10 to-lightOrangeGradient/10 p-8 rounded-xl border border-purple/20 backdrop-blur-sm">
        <div className="absolute -top-3 -right-3">
          <div className="animate-pulse w-2 h-2 bg-purple rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((quote, index) => (
            <div key={index} className="p-6 bg-dark/50 rounded-lg border border-lightDark/20 backdrop-blur-sm hover:border-purple/30 transition-all duration-300">
              <p className="text-lg mb-4 italic">&ldquo;{quote.text}&rdquo;</p>
              <p className="text-sm text-purple">- {quote.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}