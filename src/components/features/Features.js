import React from 'react';

import pic1 from '../../images/pic01.jpg';
import pic2 from '../../images/pic02.jpg';
import pic8 from '../../images/pic08.jpeg';

import Feature from './Feature';

const Features = () => {
  const FEATURES = [
    {
      href: '/#',
      image: pic2,
      heading: 'Ingenieria de Software',
      description: 'Experiencia internacional y nacional en nuestros productos. Nos conocen en varios continentes.',
      to: {
        href: '/about',
        label: 'Saber más',
      },
    },
    {
      href: '/#',
      image: pic8,
      heading: 'Consultoria',
      description: 'El conocimiento es poder. Sabemos la solución a tus problemas que saldran desde la oscuridad.',
      to: {
        href: '/about',
        label: 'Saber más',
      },
    },
    {
      href: '/#',
      image: pic1,
      heading: 'Departamento virtual',
      description: 'Ofrecemos las soluciones y herramientas para adaptar tu negocio adaptado a la realidad actual.',
      to: {
        href: '/about',
        label: 'Saber más',
      },
    },
  ];

  const [features] = React.useState(FEATURES);

  return (
    <section id="about" className="wrapper style2 spotlights">
       {features.map(feature => <Feature key={feature.heading} {...feature} />)}
    </section>
  );
}

export default Features;
