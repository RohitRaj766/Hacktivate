import React from 'react';

const sectors = [
  {
    name: 'Healthcare',
    color: 'bg-orange-200',
    textColor: 'text-orange-900',
    budget: 1000000,
    allocated: 750000,
  },
  {
    name: 'Education',
    color: 'bg-amber-200',
    textColor: 'text-amber-900',
    budget: 800000,
    allocated: 500000,
  },
  {
    name: 'Infrastructure',
    color: 'bg-rose-200',
    textColor: 'text-rose-900',
    budget: 1200000,
    allocated: 900000,
  },
  {
    name: 'Environment',
    color: 'bg-lime-200',
    textColor: 'text-lime-900',
    budget: 500000,
    allocated: 200000,
  },
  {
    name: 'Technology',
    color: 'bg-yellow-200',
    textColor: 'text-yellow-900',
    budget: 600000,
    allocated: 300000,
  },
  {
    name: 'Public Safety',
    color: 'bg-red-200',
    textColor: 'text-red-900',
    budget: 700000,
    allocated: 450000,
  },
  {
    name: 'Transport',
    color: 'bg-pink-200',
    textColor: 'text-pink-900',
    budget: 900000,
    allocated: 600000,
  },
];

const getProgressBarColor = (percentageLeft) => {
  if (percentageLeft < 25) return 'bg-red-500';
  if (percentageLeft < 60) return 'bg-yellow-400';
  return 'bg-green-500';
};

const FundManagment = () => {
  return (
    <div className="px-4 py-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center">Fund Management</h2>
      <div className="flex flex-col gap-6">
        {sectors.map((sector) => {
          const fundsLeft = sector.budget - sector.allocated;
          const percentageLeft = (fundsLeft / sector.budget) * 100;
          const progressColor = getProgressBarColor(percentageLeft);

          return (
            <div key={sector.name} className="relative w-full rounded-xl shadow-lg overflow-hidden">
              {/* Left color stripe */}
              <div className={`absolute top-0 left-0 h-full w-2 ${sector.color}`} />

              {/* Right color stripe */}
              <div className={`absolute top-0 right-0 h-full w-2 ${sector.color}`} />

              {/* Card Content */}
              <div className="bg-white p-6 sm:p-8">
                <h3 className={`text-2xl font-semibold mb-3 ${sector.textColor}`}>{sector.name}</h3>
                <p><span className="font-medium">Budget:</span> ₹{sector.budget.toLocaleString()}</p>
                <p><span className="font-medium">Allocated:</span> ₹{sector.allocated.toLocaleString()}</p>
                <p><span className="font-medium">Funds Left:</span> ₹{fundsLeft.toLocaleString()}</p>

                <div className="mt-4">
                  <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
                    <div
                      className={`h-full ${progressColor}`}
                      style={{ width: `${percentageLeft}%` }}
                    />
                  </div>
                  <p className="text-sm mt-1 text-gray-700">
                    {percentageLeft.toFixed(1)}% funds remaining
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FundManagment;
