import React from 'react';
import Card from '../../components/card/card';

export default function AboutMe() {
  return (
    <Card title="About Me">
      <p className="default-text">
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced
        below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus
        Bonorum et Malorum by Cicero are also reproduced in their exact original
        form, accompanied by English versions from the 1914 translation by H.
        Rackham.
      </p>
    </Card>
  );
}
