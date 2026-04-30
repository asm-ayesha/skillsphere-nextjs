const LearningTips = () => {
  return (
    <div className="container mx-auto px-6 py-16">

      {/* Section Title */}
      <h2 className="text-2xl font-bold  text-sky-900 mb-10">
        Learning Tips for Success
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Study Techniques Card */}
        <div className="card bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center mb-4">
            <span className="text-4xl text-sky-600 mr-4">📚</span>
            <h3 className="text-xl font-semibold text-sky-800">Study Techniques</h3>
          </div>
          <p className="text-gray-600 text-lg mb-4">
            Effective study techniques can help you learn more efficiently. Here are a few:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Active recall: Test yourself frequently.</li>
            <li>Spaced repetition: Review material at increasing intervals.</li>
            <li>Pomodoro technique: Study in short bursts with breaks.</li>
          </ul>
        </div>

        {/* Time Management Tips Card */}
        <div className="card bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center mb-4">
            <span className="text-4xl text-sky-600 mr-4">⏰</span>
            <h3 className="text-xl font-semibold text-sky-800">Time Management Tips</h3>
          </div>
          <p className="text-gray-600 text-lg mb-4">
            Managing your time well is crucial to avoid stress and be productive. Try these tips:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Prioritize tasks: Focus on what matters most first.</li>
            <li>Break tasks into smaller steps: Avoid overwhelm by breaking tasks down.</li>
            <li>Set clear goals: Track your progress with clear, achievable targets.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default LearningTips;