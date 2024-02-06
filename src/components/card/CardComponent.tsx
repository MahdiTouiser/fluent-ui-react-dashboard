'use client';
import { useState } from 'react';
import { makeStyles, shorthands, Title1, Card, CardFooter, CardPreview } from '@fluentui/react-components';
import { Icon } from '@fluentui/react';

const useStyles = makeStyles({
  card: {
    ...shorthands.margin('15px'),
    ...shorthands.padding('30px'),
    width: '360px',
    height: '180px',
    userSelect: 'none',
  },
  toggleIcon: {
    cursor: 'pointer',
    userSelect: 'none',
  },
  title: {
    fontSize: '20px',
    userSelect: 'none',
  },
  footer: { display: 'flex', justifyContent: 'end', alignItems: 'center' },
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
        <Icon iconName="TVMonitor" style={{ fontSize: '100px' }} />
      </CardPreview>

      <CardFooter className={styles.footer}>
        <Icon iconName="CircleFill" onClick={toggleHandler} className={styles.toggleIcon} style={{ color: toggle ? 'green' : 'red' }} />
        <Title1 className={styles.title}>{title}</Title1>
      </CardFooter>
    </Card>
  );
};
export default CardComponent;
