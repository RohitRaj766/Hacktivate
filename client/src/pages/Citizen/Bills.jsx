import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Modal = ({ isOpen, onClose, onVote, bill }) => {
  if (!isOpen) return null;

  const handleVote = (vote) => {
    onVote(vote);

    if (vote === 'YES') {
      toast.success('You voted YES!');
      triggerGlitterEffect();
      triggerBurstEffect();
    } else if (vote === 'NO') {
      toast.error('You voted NO!');
    } else if (vote === 'NOTA') {
      toast.info('You voted NOTA!');
    }
  };

  const triggerGlitterEffect = () => {
    const glitterContainer = document.getElementById('glitter-container');
    glitterContainer.classList.add('glitter-effect');
    setTimeout(() => {
      glitterContainer.classList.remove('glitter-effect');
    }, 3000);
  };

  const triggerBurstEffect = () => {
    const burstContainer = document.getElementById('burst-container');
    burstContainer.classList.add('burst-effect');
    setTimeout(() => {
      burstContainer.classList.remove('burst-effect');
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative">
        <div className="flex justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Vote on Bill</h3>
          <button
            className="text-gray-600 hover:text-gray-800 cursor-pointer"
            onClick={onClose}
          >
            ✖️
          </button>
        </div>

        <div className="mb-6">
          <p className="text-gray-700 mb-4">Do you support this bill: <span className="font-semibold">{bill?.title}</span>?</p>
          <div className="flex justify-around space-x-4">
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 cursor-pointer transition-all"
              onClick={() => handleVote('YES')}
            >
              YES
            </button>
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 cursor-pointer transition-all"
              onClick={() => handleVote('NO')}
            >
              NO
            </button>
            <button
              className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 cursor-pointer transition-all"
              onClick={() => handleVote('NOTA')}
            >
              NOTA
            </button>
          </div>
        </div>

        <div id="burst-container" className="absolute inset-0 pointer-events-none"></div>

        <div id="glitter-container" className="absolute inset-0 pointer-events-none"></div>
      </div>
    </div>
  );
};

const Bills = () => {
  const initialBills = [
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
    return sectorColors[sector] || 'bg-gray-200 text-gray-700';
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);
  const [bills, setBills] = useState(initialBills);

  const openModal = (bill) => {
    setSelectedBill(bill);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBill(null);
  };

  const handleVote = (vote) => {
    const updatedBills = bills.map((bill) => {
      if (bill.id === selectedBill.id) {
        // Update the bill status based on vote
        const newStatus = vote === 'YES' ? 'passed' : 'rejected'; 
        return { ...bill, status: 'active', voted: vote }; 
      }
      return bill;
    });

    setBills(updatedBills);
    closeModal();
  };

  const grouped = {
    active: bills.filter((b) => b.status === 'active'),
    passed: bills.filter((b) => b.status === 'passed'),
    rejected: bills.filter((b) => b.status === 'rejected'),
  };

  const displayOrder = ['active', 'passed', 'rejected'];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Bills Overview</h1>

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
                      className={`text-sm font-medium ${bill.status === 'active' ? 'text-green-600' : bill.status === 'passed' ? 'text-blue-600' : 'text-red-600'}`}
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
                      {bill.voted ? (
                        <span className="text-sm text-gray-500 italic">
                          You voted: <strong className="capitalize">{bill.voted && (
                          <span className="text-sm text-gray-500 italic">
                            <strong className={`capitalize ${bill.voted === 'YES' ? 'text-green-600' : bill.voted === 'NO' ? 'text-red-600' : 'text-yellow-600'}`}>
                              {bill.voted}
                            </strong>
                          </span>
                        )}
                        </strong>
                        </span>
                      ) : (
                        <button
                          className="text-sm text-blue-600 hover:text-blue-800 font-medium cursor-pointer"
                          onClick={() => openModal(bill)}
                        >
                          Vote Now
                        </button>
                      )}
                      {bill.voted && (
                        <button
                          disabled
                          className="ml-2 text-xs bg-gray-200 text-gray-500 px-3 py-1 rounded cursor-not-allowed"
                        >
                          Already Voted
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <ToastContainer />
      <Modal isOpen={isModalOpen} onClose={closeModal} onVote={handleVote} bill={selectedBill} />
    </div>
  );
};

export default Bills;
