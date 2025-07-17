const Lessons: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-center w-full space-y-6">
        <div className="primary-content-spacer">
          <h2 className="text-center text-2xl font-bold mb-6">
            How to enquire and/or book a lesson
          </h2>
          <ol className="space-y-2 text-gray-700 ml-4">
            <li>
              1. View the lesson availability for available dates and times{" "}
              <a
                href="/schedule"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                here
              </a>
            </li>
            <li>
              2. Text your name and preferred date & time to{" "}
              <a href="tel:0487397625">0487 397 625</a>
            </li>
            <li>
              3. Bowen Driving School will contact you to confirm your booking
            </li>
          </ol>
        </div>

        <div className="primary-content-spacer">
          <h2 className="text-center text-2xl font-bold mb-6">Lesson Cost</h2>
          <ul className="space-y-2 text-gray-700 ml-4">
            <li>
              <strong>Individual lesson:</strong> $80
            </li>
            <li>
              <strong>Three Lessons:</strong> $230
            </li>
            <li>
              <strong>Ten lessons:</strong> $760
            </li>
          </ul>
          <div className="space-y-3 mt-4 text-gray-700">
            <p>Lessons delivered outside Bowen may incur a small surcharge.</p>
            <p>
              Community network providers will be charged at the individual
              lesson rate.
            </p>
            <p>
              The driving school car is available for test hire for those who
              have completed a minimum of two lessons beforehand.
            </p>
            <p>
              Call or text Bowen Driving School{" "}
              <a href="tel:0487397625">0487 397 625</a> to discuss your options.
            </p>
          </div>
          <div className="mt-6 space-y-1">
            <div className="disclaimer-text text-gray-600">
              * Refunds of packaged lessons will be calculated at the individual
              lesson cost
            </div>
            <div className="disclaimer-text text-gray-600">
              ** A copy of the{" "}
              <a
                href="/CancellationPolicy.pdf"
                className="disclaimer-text text-blue-600 hover:text-blue-800 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                cancellation policy can be found here
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
