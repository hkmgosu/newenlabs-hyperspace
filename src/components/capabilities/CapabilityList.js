import React from 'react';

import Capability from './Capability';

const CapabilityList = () => {
  const CAPABILITIES = [
    {
      heading: 'Trueke Market',
      description: 'Sistema economico de Wallmapu. Mercado que conecta a la humanidad basada en la verdad.',
      iconClass: 'fa-code',
    },
    {
      heading: 'Kimche Consulting & Toki Development',
      description:
        'Nuestros expertos podrán guiarte por el camino correcto para afrontar los desafios del mundo virtual.',
      iconClass: 'fa-desktop',
    },
    {
      heading: 'AD MAPU brotherhood',
      description:
        'Alianzas con sociedades o corporaciones. Lograr un acuerdo, metas y futuros en común para la gente.',
      iconClass: 'fa-cog',
    },
    {
      heading: 'Algoritmo de Bots "Leftraru": Seguridad, Registro y más.',
      description:
        'Proteger y controlar eventos en tu negocio con bots, que detendra ataques a tu terreno y lo más importante a proteger, la información.',
      iconClass: 'fa-lock',
    },
  ];

  const [capabilities] = React.useState(CAPABILITIES);

  return (
    <>
      {capabilities.map(capability => (
        <Capability key={capability.heading} {...capability} />
      ))}
    </>
  );
};

export default CapabilityList;
