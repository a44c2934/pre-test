import * as React from 'react';

interface ISectionProps {
  children: React.ReactNode;
}

const Section: React.FunctionComponent<ISectionProps> = ({ children }) => {
  return (
    <section>
      {children}
    </section>
  );
};

export default Section;
