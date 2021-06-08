import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { skills } from '../data';

export default function About() {
  const [useFilteredProjects, setFilteredProjects] = useState(skills);
  const [useIsOnFocus, setIsOnFocus] = useState(false);

  const handleChange = ({ target: { value } }) => {
    const filteredProjects = skills.filter(({ skill, description }) => {
      if (skill.toLowerCase().includes(value.toLowerCase())) return true;
      if (description.toLowerCase().includes(value.toLowerCase())) return true;
      return false;
    });

    setFilteredProjects(filteredProjects);
  };

  return (
    <div id="about-page" className="page-content">
      <NavBar />
      <header className="page-header">
        <h1>Sobre</h1>
      </header>
      <main className="page-main">
        <section className="picture">
          <div className="profile-picture"></div>
        </section>
        <section className="text">
          <h2>Um pouco sobre mim...</h2>
          <p>
            Gosto muito de comunicação e trabalhar em equipe. Sou apaixonado por
            desenvolvimento de software e por empresas que usam tecnologia para
            desenvolver serviços que facilitam a vida das pessoas.
          </p>
          <p>
            Meus conhecimentos em física e matemática me proporcionaram
            habilidades que julgo importantíssimas na área de programação.
          </p>
          <p>
            Sou estudante de desenvolvimento de software na Trybe, uma escola
            que estimula os alunos a trabalharem em equipe, simulando situações
            reais de trabalho em um time de desenvolvimento.
          </p>
          <p>
            Acredito que a boa convivência com colegas de trabalho é tão
            importante quanto as habilidades técnicas para realizar uma tarefa.
            Portanto, valorizo imensamente as soft-skills, pois prezo muito por
            bons relacionamentos.
          </p>
        </section>
      </main>
      <main className="page-main skills-content">
        <div className="skills-title">
          <h2>Skills</h2>
        </div>
        <div
          id="filter-container"
          className={`${useIsOnFocus ? 'focus' : undefined} long-filter`}
        >
          <input
            type="text"
            onFocus={() => setIsOnFocus(true)}
            onBlur={() => setIsOnFocus(false)}
            onChange={(event) => handleChange(event)}
            placeholder="Filtrar tecnologias"
          />
          <i className="material-icons">search</i>
        </div>
        {useFilteredProjects.map(({ skill, logo, description }, index) => (
          <div
            key={skill}
            className={`skill ${index % 2 === 0 ? 'row' : 'row-reverse'}`}
          >
            <section
              className={`picture ${
                index % 2 === 0
                  ? 'top-left bottom-left'
                  : 'top-right bottom-right'
              }`}
            >
              <img
                className="skill-image top-left top-right bottom-right bottom-left"
                src={logo}
                alt={`${skill} logo`}
              />
            </section>
            <section
              className={`text ${
                index % 2 === 0
                  ? 'top-right bottom-right'
                  : 'top-left bottom-left'
              }`}
            >
              <p>{description}</p>
            </section>
          </div>
        ))}
      </main>
    </div>
  );
}
