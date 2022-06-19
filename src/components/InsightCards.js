import React from 'react';

let data = [
  {
    id: 1,
    title: 'Total Revenues',
    value: '$2,129,430',
    icon: 'fa-solid fa-money-bill-trend-up',
    color: 'bg-lightGreen'
  },
  {
    id: 2,
    title: 'Total Transactions',
    value: '$1,520',
    icon: 'fa-solid fa-tag',
    color: 'bg-lightYellow'
  },
  {
    id: 3,
    title: 'Total Likes',
    value: '$9,721',
    icon: 'fa-solid fa-thumbs-up',
    color: 'bg-lightRed'
  },
  {
    id: 4,
    title: 'Total Users',
    value: '$892',
    icon: 'fa-solid fa-user-group',
    color: 'bg-lightPurple'
  }
];

function InsightCards() {
  return (
    <section className="grid  sm:grid-cols-1 md:grid-cols-2  lg:grid-rows-1 lg:grid-cols-4 gap-y-10 gap-x-10 my-8">
      {data.map((item) => (
        <div
          key={item.id}
          className={`${item.color} p-4 px-6 rounded-3xl max-h-28`}
        >
          <div className="text-right text-2xl">
            <i className={`${item.icon}`}></i>
          </div>
          <div>
            <p className="text-sm mb-1">{item.title}</p>
            <h1 className="text-xl font-black">{item.value}</h1>
          </div>
        </div>
      ))}
    </section>
  );
}

export default InsightCards;
