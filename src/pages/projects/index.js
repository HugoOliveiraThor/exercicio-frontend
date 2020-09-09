import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Card from '../../components/card/card';
import project1 from '../../assets/img/project-featured.jpg';
import Button from '../../components/button/button';
import cursor from '../../assets/img/send.png';
import LinkIcon from '../../components/link-icon/linkIcon';
import {
  StyleImg,
  StyleButtonContainer,
  StyleTitle,
  ContainerMainProduct,
} from './styles';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [principalProject, setPrincipalProject] = useState({});

  const images = require.context('../../assets/img', true);

  function removeFirstElementOfAnArray(array) {
    return array.slice(1);
  }

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('projects');
      const projectsList = response.data;
      const cloneObject = [...projectsList];
      const arrayWithoutFirstElement = removeFirstElementOfAnArray(cloneObject);
      setProjects([...arrayWithoutFirstElement]);
      setPrincipalProject({ ...principalProject, ...projectsList[0] });
    }

    loadProducts();
  }, []);

  function normalizePicturesProjects(picture) {
    const img = images(`./${picture}`);
    return img.default;
  }

  return (
    <div>
      <Card title="Latest Projects">
        <ContainerMainProduct>
          <span className="subtitle">{principalProject.title}</span>
          <span className="default-text">{principalProject.subtitle}</span>
          <StyleImg>
            <img className="w-100" src={project1} alt="principal" />
          </StyleImg>
          <p className="default-text">{principalProject.description}</p>
          <StyleButtonContainer>
            <Button img={cursor} label="BACK TO MY PROFILE" color="blue" />
          </StyleButtonContainer>
        </ContainerMainProduct>
        <hr />
        {projects.map((project) => (
          <div className="pb-10" key={project.id}>
            <div className="row">
              <div className="img-container">
                <img
                  className="img-project"
                  alt={project.picture}
                  src={normalizePicturesProjects(project.picture)}
                />
              </div>
              <div className="column pb-20">
                <StyleTitle>{project.title}</StyleTitle>
                <span className="default-text">{project.description}</span>
                <LinkIcon label="Find out more" />
              </div>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
}
