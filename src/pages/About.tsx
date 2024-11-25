import React from 'react';
import Container from '../components/Container';
import PageTransition from '../components/PageTransition';

const About = () => {
  return (
    <PageTransition>
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="page-title text-center">Notre vision et notre mission</h1>
        </div>
      </Container>
    </PageTransition>
  );
};

export default About;