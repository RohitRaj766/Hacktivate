import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const forumTopics = [
  {
    id: 1,
    title: 'How can we ensure clean water access in rural areas?',
    description: 'Let’s brainstorm sustainable and cost-effective ways to provide clean drinking water.',
    messages: 20,
    category: 'Environment',
  },
  {
    id: 2,
    title: 'Road safety in highway development projects',
    description: 'What are the key aspects to focus on when widening highways to avoid accidents?',
    messages: 15,
    category: 'Infrastructure',
  },
  {
    id: 3,
    title: 'Improving midday meals in government schools',
    description: 'How do we balance nutrition, cost, and logistics for daily school meals?',
    messages: 34,
    category: 'Education',
  },
  {
    id: 4,
    title: 'Making urban spaces greener and cleaner',
    description: 'What role can citizens play in urban greening initiatives?',
    messages: 8,
    category: 'Urban Planning',
  },
  {
    id: 5,
    title: 'Boosting digital literacy among senior citizens',
    description: 'How can we make tech education accessible and friendly to older generations?',
    messages: 12,
    category: 'Technology',
  },
];

const categoryStyles = {
  Environment: 'border-l-4 border-green-500 bg-green-50',
  Infrastructure: 'border-l-4 border-yellow-500 bg-yellow-50',
  Education: 'border-l-4 border-blue-500 bg-blue-50',
  'Urban Planning': 'border-l-4 border-purple-500 bg-purple-50',
  Technology: 'border-l-4 border-pink-500 bg-pink-50',
};

const badgeColors = {
  Environment: 'bg-green-100 text-green-800',
  Infrastructure: 'bg-yellow-100 text-yellow-800',
  Education: 'bg-blue-100 text-blue-800',
  'Urban Planning': 'bg-purple-100 text-purple-800',
  Technology: 'bg-pink-100 text-pink-800',
};

const Forum = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [opinion, setOpinion] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser).LoggedInUser;
      setUsername(`${user?.firstname} ${user?.lastname}`);
    } else {
      setUsername('Guest');
    }
  }, []);

  const handleCardClick = (topic) => {
    setSelectedTopic(topic);
    setOpinion('');
  };

  const handleOpinionChange = (event) => {
    setOpinion(event.target.value);
  };

  const handleSubmitOpinion = () => {
    if (opinion.trim()) {
      toast.success(`Thanks for your opinion: "${opinion}"`);
      setOpinion('');
      setSelectedTopic(null);  // Close the modal after submission
    } else {
      toast.error('Please provide your opinion before submitting.');
    }
  };

  const closeModal = () => {
    setSelectedTopic(null);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen text-gray-800">
      <h1 className="text-3xl font-bold mb-10">Community Forum</h1>

      <div className="space-y-4">
        {forumTopics.map((topic) => (
          <div
            key={topic.id}
            onClick={() => handleCardClick(topic)}
            className={`flex justify-between items-start rounded-xl p-6 shadow-sm hover:shadow-md transition-all cursor-pointer ${categoryStyles[topic.category]}`}
          >
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${badgeColors[topic.category]}`}>
                  {topic.category}
                </span>
              </div>
              <h2 className="text-lg font-bold mb-1">{topic.title}</h2>
              <p className="text-sm text-gray-700">{topic.description}</p>
            </div>
            <div className="text-sm text-gray-600 whitespace-nowrap pl-6 pt-2">
              {topic.messages} {topic.messages === 1 ? 'Reply' : 'Discussions'}
            </div>
          </div>
        ))}
      </div>

      {selectedTopic && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-3xl w-full">
            <h2 className="text-2xl font-bold mb-4">{selectedTopic.title}</h2>
            <p className="text-gray-700 mb-4">{selectedTopic.description}</p>
            <p className="text-sm text-gray-500">Category: {selectedTopic.category}</p>
            <p className="text-sm text-gray-500">Discussions: {selectedTopic.messages}</p>

            <div className="mt-6">
              <h3 className="text-lg font-semibold">Hi {username}, tell us your opinion on this topic:</h3>
              <textarea
                value={opinion}
                onChange={handleOpinionChange}
                rows="4"
                className="w-full mt-2 p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your opinion here..."
              ></textarea>
              <button
                onClick={handleSubmitOpinion}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Submit Opinion
              </button>
            </div>

            <button
              onClick={closeModal}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default Forum;
