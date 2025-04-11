import React from 'react';

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
  return (
    <div className="p-8 bg-gray-50 min-h-screen text-gray-800">
      <h1 className="text-3xl font-bold mb-10">Community Forum</h1>

      <div className="space-y-4">
        {forumTopics.map((topic) => (
          <div
            key={topic.id}
            className={`flex justify-between items-start rounded-xl p-6 shadow-sm hover:shadow-md transition-all ${categoryStyles[topic.category]}`}
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
    </div>
  );
};

export default Forum;
