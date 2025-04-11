import React from 'react';

const PoliticalPartyBills = () => {
  const bills = [
    {
      id: 1,
      title: 'CLEAN WATER SUPPLY ACT',
      description: 'Ensure 24/7 clean drinking water in rural areas of Bihar and Odisha.',
      date: '2025-04-10',
      sector: 'Health',
      status: 'passed',
    },
    {
      id: 2,
      title: 'ROAD DEVELOPMENT PROJECT',
      description: 'Widen and resurface NH-27 between Kanpur and Lucknow.',
      date: '2025-03-22',
      sector: 'Infrastructure',
      status: 'active',
    },
    {
      id: 3,
      title: 'EDUCATION EQUALITY BILL',
      description: 'Free education up to class 12 for all government school students.',
      date: '2025-01-10',
      sector: 'Education',
      status: 'rejected',
    },
    {
      id: 4,
      title: 'GREEN CITY MISSION',
      description: 'Promote urban greening and pollution control in Tier-1 cities.',
      date: '2025-02-05',
      sector: 'Environment',
      status: 'passed',
    },
    {
      id: 5,
      title: 'AFFORDABLE HOUSING PLAN',
      description: 'Subsidized housing for economically weaker sections in metro areas.',
      date: '2025-04-01',
      sector: 'Housing',
      status: 'active',
    },
    {
      id: 6,
      title: 'DIGITAL LITERACY DRIVE',
      description: 'Train 5 million rural citizens in basic computer skills.',
      date: '2025-02-28',
      sector: 'Education',
      status: 'passed',
    },
    {
      id: 7,
      title: 'MIDDAY MEAL QUALITY BILL',
      description: 'Improve nutrition standards in school meals nationwide.',
      date: '2024-12-15',
      sector: 'Child Welfare',
      status: 'rejected',
    },
    {
      id: 8,
      title: 'SOLAR ENERGY INCENTIVE ACT',
      description: 'Tax rebates for installing rooftop solar panels in homes.',
      date: '2025-01-30',
      sector: 'Energy',
      status: 'passed',
    },
    {
      id: 9,
      title: 'UNEMPLOYMENT BENEFIT PROGRAM',
      description: 'Monthly allowance for individuals actively seeking jobs.',
      date: '2025-03-10',
      sector: 'Employment',
      status: 'active',
    },
    {
      id: 10,
      title: 'PUBLIC TRANSPORT REFORM BILL',
      description: 'Introduce electric buses and card-based ticketing systems.',
      date: '2025-03-18',
      sector: 'Transport',
      status: 'active',
    },
    {
      id: 11,
      title: 'RAINWATER HARVESTING MANDATE',
      description: 'Mandatory rainwater harvesting systems for new constructions.',
      date: '2024-11-10',
      sector: 'Water',
      status: 'rejected',
    },
    {
      id: 12,
      title: 'NATIONAL STARTUP BOOST BILL',
      description: 'Tax breaks and grants for early-stage startups.',
      date: '2025-04-05',
      sector: 'Economy',
      status: 'passed',
    },
  ];

  const statusMap = {
    active: 'Active',
    passed: 'Passed',
    rejected: 'Rejected',
  };

  const sectorColors = {
    Health: 'bg-pink-100 text-pink-800',
    Environment: 'bg-green-100 text-green-800',
    Education: 'bg-blue-100 text-blue-800',
    Agriculture: 'bg-yellow-100 text-yellow-800',
    Infrastructure: 'bg-purple-100 text-purple-800',
    Housing: 'bg-indigo-100 text-indigo-800',
    Employment: 'bg-teal-100 text-teal-800',
    Child: 'bg-red-100 text-red-800',
    Transport: 'bg-gray-100 text-gray-800',
    Water: 'bg-blue-100 text-blue-800',
    Economy: 'bg-orange-100 text-orange-800',
    default: 'bg-gray-200 text-gray-700',
  };

  const getSectorColor = (sector) => {
    const key = Object.keys(sectorColors).find((k) =>
      sector.toLowerCase().includes(k.toLowerCase())
    );
    return sectorColors[key] || sectorColors.default;
  };

  const grouped = {
    active: bills.filter((b) => b.status === 'active'),
    passed: bills.filter((b) => b.status === 'passed'),
    rejected: bills.filter((b) => b.status === 'rejected'),
  };

  const displayOrder = ['active', 'passed', 'rejected'];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Bills Overview</h1>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition">
          + Create New Bill
        </button>
      </div>

      {displayOrder.map((statusKey) => (
        <div key={statusKey} className="mb-12">
          <h2 className="text-xl font-semibold text-gray-700 mb-5">{statusMap[statusKey]} Bills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {grouped[statusKey].map((bill) => (
              <div
                key={bill.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-sm font-semibold px-3 py-1 rounded-full ${getSectorColor(bill.sector)}`}>
                      {bill.sector}
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        bill.status === 'active'
                          ? 'text-green-600'
                          : bill.status === 'passed'
                          ? 'text-blue-600'
                          : 'text-red-600'
                      }`}
                    >
                      {statusMap[bill.status]}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2 truncate">{bill.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{bill.description}</p>

                  <div className="mt-auto space-y-2 text-sm text-gray-500">
                    <div className="flex justify-between">
                      <span>Date Introduced</span>
                      <span>{bill.date}</span>
                    </div>
                  </div>

                  {bill.status === 'active' && (
                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                      <button className="text-sm text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
                        View Details
                      </button>
                      <button className="text-sm text-gray-500 hover:text-gray-700 font-medium cursor-pointer ml-auto">
                        Vote Now
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PoliticalPartyBills;
