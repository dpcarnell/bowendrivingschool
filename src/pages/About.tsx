const About: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="primary-content-spacer">
          <h2 className="text-center text-2xl font-bold mb-6">About Us</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Bowen driving school is a locally owned and operated driving
              school aimed at providing a safe, enjoyable and supportive
              learning experience for learner drivers in Bowen and the
              surrounding region.
            </p>
            <p>
              Owner/operator, and local Bowen resident David has over 20yrs
              experience as a Queensland registered teacher, including time
              spent as a senior training advisor in the resources industry
              coordinating and delivering 4WD and low risk driving.
            </p>

            <ul className="space-y-3 ml-4">
              <li>
                <strong>For new drivers:</strong> Bowen Driving School has a
                flexible and integrated training program that is aimed to meet
                individual learning needs. The program highlights both
                capability and areas for improvement to ensure training is
                relevant and effective each time.
              </li>
              <li>
                <strong>For drivers with existing skills:</strong> Bowen Driving
                School will diagnose the skill level of each learner and
                identify a customised training plan aimed to close the skills
                gap and ensure training is relevant and effective each time.
              </li>
            </ul>

            <p>
              Bowen driving school will provide an on-going progress report
              after each lesson. The report will identify areas to focus on
              practicing skills development between lessons. Bowen Driving
              School aims to prepare students for a safe and prolonged driving
              experience, having the ability to drive consistently in a
              responsible and safe manner.
            </p>
            <p>
              Bowen Driving School incorporates practical knowledge of the
              Queensland road rules and Low Risk Driving into each lesson
              delivered.
            </p>
            <p>
              Bowen Driving School provides a dual controlled manual vehicle for
              your driving lessons.
            </p>
            <p>
              Lessons may be delivered using your vehicle, automatic or manual,
              on condition that it is road legal in Queensland.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
