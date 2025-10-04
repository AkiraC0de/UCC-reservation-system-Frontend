import { Link } from 'react-router';

export default function MeetTheTeam() {
  const titleStyles = `xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-bold mb-4 text-green-700`;
  const subtitleStyles = `xl:text-2xl md:text-2xl sm:text-xl text-lg font-semibold text-green-600`;
  const descriptionStyles = `xl:text-lg md:text-md sm:text-md text-sm text-gray-700 leading-relaxed text-justify`;

  return (
    <div className="flex justify-center items-center bg-gray-50 min-h-screen p-6">
      <div className="max-w-3xl flex flex-col p-10 gap-6 border border-green-300 shadow-lg rounded-2xl bg-white">
        
        <div>
          <Link to="/about">
            <div className="flex items-center gap-3 text-green-700 hover:text-green-900 transition">
              <p>←</p>
              <p className="font-medium">Back to About</p>
            </div>
          </Link>
        </div>

        <div>
          <p className={titleStyles}>Meet the Team</p>
        </div>

        <div className="flex flex-col gap-4">
          <p className={descriptionStyles}>
            The <strong>MRERS Development Team</strong> is composed of dedicated
            Bachelor of Science in Computer Science students from the
            <strong> University of Caloocan City – North Campus</strong>. United by
            their shared passion for technology, the team developed the
            <strong> Management Information System Room and Equipment Reservation System (MRERS)</strong> to modernize the manual reservation process into a
            faster, more efficient, and reliable platform.
          </p>

          <p className={descriptionStyles}>
          Each member contributed their expertise in system design, frontend and backend development, database management, and documentation. Their collaboration reflects a strong commitment to innovation, teamwork, and excellence—showcasing their capability to deliver practical and scalable technological solutions for the university community.
          </p>

          <p>
          <div className="mt-6">
        <h3 className="text-lg font-semibold text-green-700 mb-2">Development Team:</h3>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
          <li><strong>Mcraven Akira Fernandez</strong> – Team Leader / Full Stack Developer</li>
          <li><strong>Mary Sembrero</strong> – Quality Assurance / Front-end Developer</li>
          <li><strong>Attila Sabiniano</strong> – Backend Developer</li>
          <li><strong>Jan Aryan Bebania</strong> – UI/UX Designer</li>
        </ul>
      </div>
          </p>
        
        </div>

      </div>
    </div>
  );
}
