'use client';

import { useState } from 'react';
import { makeStyles, shorthands, Title1, Card, CardFooter, CardPreview } from '@fluentui/react-components';
import { Icon } from '@fluentui/react';

const useStyles = makeStyles({
  card: {
    ...shorthands.margin('auto'),
    ...shorthands.padding('20px'),
    width: '360px',
    maxWidth: '100%',
  },
  toggleIcon: {
    cursor: 'pointer',
    userSelect: 'none',
  },
  title: {
    fontSize: '10px',
    userSelect: 'none',
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'green',
  },
});

const CardComponent = ({ title }: { title: string }) => {
  const [toggle, setToggle] = useState(false);
  const styles = useStyles();

  const toggleHandler = () => {
    setToggle((prevToggleState) => !prevToggleState);
  };

  return (
    <Card className={styles.card}>
      <CardPreview>
        <Icon iconName="TVMonitor" style={{ fontSize: '5em' }} />
      </CardPreview>

      <CardFooter className={styles.footer}>
        <Icon iconName={toggle ? 'CircleFill' : 'CircleFill'} onClick={toggleHandler} className={styles.toggleIcon} style={{ color: toggle ? 'green' : 'red' }} />
        <Title1 className={styles.title}>{title}</Title1>
      </CardFooter>
    </Card>
  );
};
export default CardComponent;
