import classNames from 'classnames';
import * as React from 'react';
import styles from './Layout.module.css';

interface IContentProps {
  children: React.ReactNode;
}

const Content: React.FunctionComponent<IContentProps> = ({ children }) => {
  return (
    <div className={classNames(styles.content)}>
      {children}
    </div>
  );
};

export default Content;
