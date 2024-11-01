import * as React from 'react';
import styles from './Layout.module.css';
import classNames from 'classnames';

interface IBoxProps {
  children: React.ReactNode;
  title?: string;
}

const Box: React.FunctionComponent<IBoxProps> = ({ children, title }) => {
  return (
    <div>
      {title && (
        <div className={classNames(styles.boxHeader)}>
          {title}
        </div>
      )}
      {children}
    </div>
  );
};

export default Box;
