import React from 'react';
import Container from '../components/Container';
import PageTransition from '../components/PageTransition';

const Testimonials = () => {
  return (
    <PageTransition>
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="page-title text-center">Ils ont choisi Tokyo Coaching</h1>
        </div>
      </Container>
    </PageTransition>
  );
};

export default Testimonials;