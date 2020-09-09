import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/card/card';
import ProgressSkills from '../../components/progress-skill';
import LinkIcon from '../../components/link-icon/linkIcon';

export default function Skills() {
  const dispatch = useDispatch();

  const skills = useSelector((state) => state.skills);

  function handleAddSkills() {
    dispatch({
      type: 'ADD_SKILLS',
      skill: {
        name: `Python & Django ${skills.length}`,
        percentage: 20 + skills.length * 8,
      },
    });
  }

  return (
    <Card title="Skills">
      <p className="default-text pb-10">
        Intro about your skills goes here. Keep the list lean and only show your
        primary skillsets. You can always provide a link to your linkedin or
        CoderWall profile so people can get more info there
      </p>
      <section className="container-progress">
        {skills.map((skill) => (
          <ProgressSkills
            key={skill.name}
            label={skill.name}
            percentage={skill.percentage}
          />
        ))}
        <LinkIcon
          label="More on CoderWall"
          handleClick={() => handleAddSkills()}
        />
      </section>
      <section />
    </Card>
  );
}
