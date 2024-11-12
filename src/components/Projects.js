import React from "react";

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Recipe Website (11/2023 - 11/2023)</h3>
        <p>
          I designed and developed a simple recipe website using HTML and CSS,
          highlighting my expertise in crafting engaging and responsive
          interfaces. Utilized CSS for styling & HTML for layout.
        </p>
        <a
          href="https://recipezonebyswathi.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
        <p>
          <strong>Technologies:</strong> HTML, CSS, JavaScript
        </p>
      </div>
      <div className="project">
        <h3>Internet Banking (12/2023 - 12/2023)</h3>
        <p>
          Internet banking, also known as online banking, e-banking or virtual
          banking, is an electronic payment system that enables customers of a
          bank or other financial institution to conduct a range of financial
          transactions through the financial institution's website.
        </p>
        <p>
          <strong>Technologies:</strong> C language
        </p>
      </div>
      <div className="project">
        <h3>TO-DO List (04/2024 - 06/2024)</h3>
        <p>
          A to-do list is a list of items that need to be completed. The items
          on the list can range from simple activities like replying to an
          email, to more complex tasks like creating project briefs.
        </p>
        <a
          href="https://github.com/SwathiMugidi/To-do-List"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
        <p>
          <strong>Technologies:</strong> ReactJs, JavaScript, HTML, CSS
        </p>
      </div>
    </section>
  );
};

export default Projects;
