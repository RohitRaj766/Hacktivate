import React from 'react';

const forumTopics = [
  {
    id: 1,
    title: 'How can we ensure clean water access in rural areas?',
    description: 'Let’s brainstorm sustainable and cost-effective ways to provide clean drinking water.',
    messages: 20,
  },
  {
    id: 2,
    title: 'Road safety in highway development projects',
    description: 'What are the key aspects to focus on when widening highways to avoid accidents?',
    messages: 15,
  },
  {
    id: 3,
    title: 'Improving midday meals in government schools',
    description: 'How do we balance nutrition, cost, and logistics for daily school meals?',
    messages: 34,
  },
  {
    id: 4,
    title: 'Making urban spaces greener and cleaner',
    description: 'What role can citizens play in urban greening initiatives?',
    messages: 8,
  },
  {
    id: 5,
    title: 'Boosting digital literacy among senior citizens',
    description: 'How can we make tech education accessible and friendly to older generations?',
    messages: 12,
  },
];

const Forum = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen text-gray-800">
      <h1 className="text-3xl font-semibold mb-10">Forum</h1>

      <div className="space-y-4">
        {forumTopics.map((topic) => (
          <div
            key={topic.id}
            className="flex justify-between items-start bg-white border border-gray-200 rounded-xl p-5 hover:shadow-sm transition-all"
          >
            <div className="max-w-3xl">
              <h2 className="text-lg font-semibold mb-1">{topic.title}</h2>
              <p className="text-sm text-gray-600">{topic.description}</p>
            </div>
            <div className="text-sm text-gray-500 whitespace-nowrap pl-4 pt-1">
              {topic.messages} {topic.messages === 1 ? 'Reply' : 'Discussions'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forum;
