import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const teamData = [
  {
    id: 1,
    name: "Benjamin Evans",
    role: "Product Manager",
    img: "https://i.ibb.co/8X7v6Jp/woman1.jpg",
  },
  {
    id: 2,
    name: "Noah Anderson",
    role: "Co-Founder",
    img: "https://i.ibb.co/0Jmshvb/man1.jpg",
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Design UX",
    img: "https://i.ibb.co/qk6nH0H/woman2.jpg",
  },
  {
    id: 4,
    name: "Amelia Clark",
    role: "Founder",
    img: "https://i.ibb.co/9cZ8g7Y/man2.jpg",
  },
];

const Team = () => {
  return (
    <div className="bg-base-200 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          The Faces of Our Company
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          Our company thrives because of the remarkable individuals who make up
          our team.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member) => (
            <div
              key={member.id}
              data-aos="fade-up"
              className="card bg-base-100 shadow-md hover:shadow-xl transition duration-300"
            >
              <figure className="px-4 pt-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="rounded-xl h-52 w-full object-cover"
                />
              </figure>

              <div className="card-body items-center text-center">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>

                {/* Social Icons */}
                <div className="flex gap-4 mt-3 text-gray-600">
                  <Link to="#">
                    <FaFacebookF className="hover:text-primary" />
                  </Link>
                  <Link to="#">
                    <FaInstagram className="hover:text-primary" />
                  </Link>
                  <Link to="#">
                    <FaLinkedinIn className="hover:text-primary" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Team;