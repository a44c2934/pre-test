import * as React from 'react';

interface IMainProps {
  children: React.ReactNode;
}

const Main: React.FunctionComponent<IMainProps> = ({ children }) => {
  return (
    <main>
      {children}
    </main>
  );
};

export default Main;
