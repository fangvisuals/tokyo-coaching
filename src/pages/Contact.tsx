import React from 'react';
import Container from '../components/Container';
import PageTransition from '../components/PageTransition';

const Contact = () => {
  return (
    <PageTransition>
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="page-title text-center">Parlons de vos objectifs</h1>

          <div className="mt-8 flex justify-center">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfA0HmTTCNgIv2g2b5TsLxDim5miB8TaH8xvQjqgjleh0fALw/viewform?embedded=true" 
          width=" 700" 
          height="3808"
           frameborder="0"
           marginheight="0" marginwidth="0">
            Chargement…
          </iframe>
          </div>
        </div>
      </Container>
    </PageTransition>
  );
};

export default Contact;