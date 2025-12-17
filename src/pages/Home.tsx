const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-[60vh] lg:items-start lg:justify-start">
      <div className="home-content w-full max-w-4xl lg:max-w-md p-12 lg:p-8 text-center lg:text-left lg:ml-8 lg:mt-8">
        <h1 className="text-4xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-4">
          Welcome to Bowen Driving School
        </h1>
        <p className="text-xl lg:text-lg text-gray-600">
          Professional driving lessons in Bowen, Queensland
        </p>
      </div>

      {/* Commented out seasonal notices - can be uncommented as needed */}

      <div className="home-message flex flex-col items-center justify-center w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg lg:ml-8 lg:mt-8">
        <div className="main-header-message text-2xl font-bold mb-4">
          Merry Christmas!
        </div>
        <div className="message-content text-center text-lg">
          Bowen Driving School is currently closed and will re-open on the 20th
          of January 2026.
        </div>
      </div>

      {/* 
      <div className="home-message2 w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
        <div className="main-header-message2 text-xl font-bold mb-4 text-center">Customer Notice</div>
        <div className="message-content2 text-center mb-4 text-lg">
          Bowen Driving School will be closed 7th to the 20th of August.
        </div>
        <div className="message-sub-text2 text-center text-base">
          Call or text 0487397625 if you have any questions!
        </div>
      </div>
      */}
    </div>
  );
};

export default Home;
