import React from 'react';

export default function Project({ projectData }) {
const { title, content, github, imageAlt, pictures } = projectData;

  return (
    <>
    <article className="Project">
      <h1 className='TitleProject'>{title}</h1>
      <a href={github} className="ProjectWrapper" target="_blank" rel="noopener noreferrer">
          <img
            className="ProjectImg"
            src={pictures}
            alt={imageAlt}
          />
      </a>
      <p className="description">{content}</p>
    </article>
    </>
  );
}
