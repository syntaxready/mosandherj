import React from 'react';
import { Link } from 'react-router-dom';
import { emeone, emetwo, emethree, emefour, conone, contwo, conthree, confour, confive, consix, conseven, rentwo, renfour, rensix, renseven, reneight, rennine, renten, dredone, dredtwo, dredthree, more1, more2, more3, more4, more5, more6, more7, more8, more9, more10, more11, more12, more13, more14, solar1, solar2, solar3, solar4, solar5, solar6, consStamp1, consStamp2, consStamp6, consStamp7, consStamp8, consStamp9, consStamp10, stair1, stair2, stair3, stair4, stair5, roadcons1, roadcons2, roadcons3, consJago1, consJago2, consJago3, consJago4, consJago5, consJago6, consJago7 } from '../../images/index';
import drawingbg from '../../images/drawingbg.png';

const projects = [
  {
    title: "Road Emergency Repair",
    category: "Repair",
    image: emeone,
    description: "Emergency Repair on Patrick Ehimen and adjoining roads off Ugbo Road, GRA Benin City, Edo State.",
  },
  {
    title: "Road Emergency Repair",
    category: "Repair",
    image: emetwo,
    description: "Emergency Repair on Patrick Ehimen and adjoining roads off Ugbo Road, GRA Benin City, Edo State.",
  },
  {
    title: "Road Emergency Repair",
    category: "Repair",
    image: emethree,
    description: "Emergency Repair on Patrick Ehimen and adjoining roads off Ugbo Road, GRA Benin City, Edo State.",
  },
  {
    title: "Road Emergency Repair",
    category: "Repair",
    image: emefour,
    description: "Emergency Repair on Patrick Ehimen and adjoining roads off Ugbo Road, GRA Benin City, Edo State.",
  },
  {
    title: "Construction",
    category: "Water Construction",
    image: conone,
    description: "Construction of 10,000 Gallons Solar Water project, Evboghai community in orhionmon LGA, Edo State.",
  },
  {
    title: "Construction",
    category: "Water Construction",
    image: contwo,
    description: "Construction of 10,000 Gallons Solar Water project, Evboghai community in orhionmon LGA, Edo State.",
  },
  {
    title: "Construction",
    category: "Water Construction",
    image: conthree,
    description: "Construction of 10,000 Gallons Solar Water project, Evboghai community in orhionmon LGA, Edo State.",
  },
  {
    title: "Construction",
    category: "Water Construction",
    image: confour,
    description: "Construction of 10,000 Gallons Solar Water project, Evboghai community in orhionmon LGA, Edo State.",
  },
  {
    title: "Construction",
    category: "Water Construction",
    image: confive,
    description: "Construction of 10,000 Gallons Solar Water project, Evboghai community in orhionmon LGA, Edo State.",
  },
  {
    title: "Construction",
    category: "Water Construction",
    image: consix,
    description: "Construction of 10,000 Gallons Solar Water project, Evboghai community in orhionmon LGA, Edo State.",
  },
  {
    title: "Construction",
    category: "Water Construction",
    image: conseven,
    description: "Construction of 20,000 Gallons Solar Water project in Uheze community, Orhionmon LGA, Edo State.",
  },
  {
    title: "Renovation",
    category: "Renovation Construction",
    image: rentwo,
    description: "Renovation of Owe Grammar School, OWE community in orhionmon LGA, Edo State.",
  },
  {
    title: "Renovation",
    category: "Renovation Construction",
    image: renfour,
    description: "Renovation of Owe Grammar School, OWE community in orhionmon LGA, Edo State.",
  },
  {
    title: "Renovation",
    category: "Renovation Construction",
    image: rensix,
    description: "Renovation of Owe Grammar School, OWE community in orhionmon LGA, Edo State.",
  },
  {
    title: "Renovation",
    category: "Renovation Construction",
    image: renseven,
    description: "Renovation of Owe Grammar School, OWE community in orhionmon LGA, Edo State.",
  },
  {
    title: "Renovation",
    category: "Renovation Construction",
    image: reneight,
    description: "Renovation of Owe Grammar School, OWE community in orhionmon LGA, Edo State.",
  },
  {
    title: "Renovation",
    category: "Renovation Construction",
    image: rennine,
    description: "Renovation of Owe Grammar School, OWE community in orhionmon LGA, Edo State.",
  },
  {
    title: "Renovation",
    category: "Renovation Construction",
    image: renten,
    description: "Renovation of Owe Grammar School, OWE community in orhionmon LGA, Edo State.",
  },
  {
    title: "Road Construction",
    category: "Road Construction",
    image: consJago1,
    description: "Construction of Jalpo close and adjoining roads, Benin City, Edo State.",
  },
  {
    title: "Road Construction",
    category: "Road Construction",
    image: consJago2,
    description: "Construction of Jalpo close and adjoining roads, Benin City, Edo State.",
  },
  {
    title: "Road Construction",
    category: "Road Construction",
    image: consJago3,
    description: "Construction of Jalpo close and adjoining roads, Benin City, Edo State.",
  },
  {
    title: "Road Construction",
    category: "Road Construction",
    image: consJago4,
    description: "Construction of Jalpo close and adjoining roads, Benin City, Edo State.",
  },
  {
    title: "Road Construction",
    category: "Road Construction",
    image: consJago5,
    description: "Construction of Jalpo close and adjoining roads, Benin City, Edo State.",
  },
  {
    title: "Road Construction",
    category: "Road Construction",
    image: consJago6,
    description: "Construction of Jalpo close and adjoining roads, Benin City, Edo State.",
  },
  {
    title: "Road Construction",
    category: "Road Construction",
    image: consJago7,
    description: "Construction of Jalpo close and adjoining roads, Benin City, Edo State.",
  },
  {
    title: "Walkway",
    category: "Walkway",
    image: consStamp1,
    description: "Construction of stamped concrete driveway, walkway and landscaping for landmark village, water corporation road, Oniru, Victoria Island, Lagos State. (Client - Landmark Realty LTD).",
  },
  {
    title: "Walkway",
    category: "Walkway",
    image: consStamp2,
    description: "Construction of stamped concrete driveway, walkway and landscaping for landmark village, water corporation road, Oniru, Victoria Island, Lagos State. (Client - Landmark Realty LTD).",
  },
  {
    title: "Walkway",
    category: "Walkway",
    image: consStamp6,
    description: "Construction of stamped concrete driveway, walkway and landscaping for landmark village, water corporation road, Oniru, Victoria Island, Lagos State. (Client - Landmark Realty LTD).",
  },
  {
    title: "Walkway",
    category: "Walkway",
    image: consStamp7,
    description: "Construction of stamped concrete driveway, walkway and landscaping for landmark village, water corporation road, Oniru, Victoria Island, Lagos State. (Client - Landmark Realty LTD).",
  },
  {
    title: "Walkway",
    category: "Walkway",
    image: consStamp8,
    description: "Construction of stamped concrete driveway, walkway and landscaping for landmark village, water corporation road, Oniru, Victoria Island, Lagos State. (Client - Landmark Realty LTD).",
  },
  {
    title: "Walkway",
    category: "Walkway",
    image: consStamp9,
    description: "Construction of stamped concrete driveway, walkway and landscaping for landmark village, water corporation road, Oniru, Victoria Island, Lagos State. (Client - Landmark Realty LTD).",
  },
  {
    title: "Walkway",
    category: "Walkway",
    image: consStamp10,
    description: "Construction of stamped concrete driveway, walkway and landscaping for landmark village, water corporation road, Oniru, Victoria Island, Lagos State. (Client - Landmark Realty LTD).",
  },
  {
    title: "Stair Threads",
    category: "Stair Threads",
    image: stair1,
    description: "Stair Threads and Anti-slip projects.",
  },
  {
    title: "Stair Threads",
    category: "Stair Threads",
    image: stair2,
    description: "Stair Threads and Anti-slip projects.",
  },
  {
    title: "Stair Threads",
    category: "Stair Threads",
    image: stair3,
    description: "Stair Threads and Anti-slip projects.",
  },
  {
    title: "Stair Threads",
    category: "Stair Threads",
    image: stair4,
    description: "Stair Threads and Anti-slip projects.",
  },
  {
    title: "Stair Threads",
    category: "Stair Threads",
    image: stair5,
    description: "Stair Threads and Anti-slip projects.",
  },
  {
    title: "Road Construction",
    category: "Road Construction",
    image: roadcons1,
    description: "Before and after pictures of the construction of Aighobasimwin road",
  },
  {
    title: "Road Construction",
    category: "Road Construction",
    image: roadcons2,
    description: "Before and after pictures of the construction of Aighobasimwin road",
  },
  {
    title: "Road Construction",
    category: "Road Construction",
    image: roadcons3,
    description: "Before and after pictures of the construction of Aighobasimwin road",
  },
  {
    title: "Solar Installation",
    category: "Solar Installation",
    image: solar1,
    description: "Installation of Solar powered street lights",
  },
  {
    title: "Solar Installation",
    category: "Solar Installation",
    image: solar2,
    description: "Installation of Solar powered street lights",
  },
  {
    title: "Solar Installation",
    category: "Solar Installation",
    image: solar3,
    description: "Installation of Solar powered street lights",
  },
  {
    title: "Solar Installation",
    category: "Solar Installation",
    image: solar4,
    description: "Installation of Solar powered street lights",
  },
  {
    title: "Solar Installation",
    category: "Solar Installation",
    image: solar5,
    description: "Installation of Solar powered street lights",
  },
  {
    title: "Solar Installation",
    category: "Solar Installation",
    image: solar6,
    description: "Installation of Solar powered street lights",
  },
  {
    title: "Other Project",
    category: "Other Project",
    image: more1,
    description: "More projects pictures",
  },
  {
    title: "Other Project",
    category: "Other Project",
    image: more2,
    description: "More projects pictures",
  },
  {
    title: "Other Project",
    category: "Other Project",
    image: more3,
    description: "More projects pictures",
  },
  {
    title: "Other Project",
    category: "Other Project",
    image: more4,
    description: "More projects pictures",
  },
  {
    title: "Other Project",
    category: "Other Project",
    image: more5,
    description: "More projects pictures",
  },
  {
    title: "Other Project",
    category: "Other Project",
    image: more6,
    description: "More projects pictures",
  },
  {
    title: "Other Project",
    category: "Other Project",
    image: more7,
    description: "More projects pictures",
  },
  {
    title: "Other Project",
    category: "Other Project",
    image: more8,
    description: "More projects pictures",
  },
  {
    title: "Other Project",
    category: "Other Project",
    image: more9,
    description: "More projects pictures",
  },
  {
    title: "Other Project",
    category: "Other Project",
    image: more10,
    description: "More projects pictures",
  },
  {
    title: "Other Project",
    category: "Other Project",
    image: more11,
    description: "More projects pictures",
  },
  {
    title: "Other Project",
    category: "Other Project",
    image: more12,
    description: "More projects pictures",
  },
  {
    title: "Other Project",
    category: "Other Project",
    image: more13,
    description: "More projects pictures",
  },
  {
    title: "Other Project",
    category: "Other Project",
    image: more14,
    description: "More projects pictures",
  },
  {
    title: "Dredging",
    category: "Dredging",
    image: dredone,
    description: "Dredging and Shoreline protection works",
  },
  {
    title: "Dredging",
    category: "Dredging",
    image: dredtwo,
    description: "Dredging and Shoreline protection works",
  },
  {
    title: "Dredging",
    category: "Dredging",
    image: dredthree,
    description: "Dredging and Shoreline protection works",
  },
];

function Projects() {
  const [filter, setFilter] = React.useState("All");
  const categories = ["All", ...new Set(projects.map(project => project.category))];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative py-24 bg-gray-900">
        <div className="absolute inset-0">
          <img
            src={drawingbg}
            alt="Projects"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our excellence across construction, oil & gas, and healthcare sectors
          </p>
        </div>
      </div>

      {/* Project Filters */}
      <div className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full ${filter === category
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
                  } transition`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">Completed: {project.completion}</span>
                    <button className="text-orange-500 hover:text-orange-600 font-semibold">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Have a Project in Mind?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can support your construction, oil & gas, or healthcare equipment needs
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-400 transition"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;