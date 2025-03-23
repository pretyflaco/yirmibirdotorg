
import React from 'react';

const quotes = [
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
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {quotes.map((quote, index) => (
          <div key={index} className="p-6 bg-gray-800 rounded-lg">
            <p className="text-lg mb-4 italic">"{quote.text}"</p>
            <p className="text-sm text-gray-400">- {quote.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
