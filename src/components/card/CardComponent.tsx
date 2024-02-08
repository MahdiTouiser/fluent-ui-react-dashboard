'use client';

import { useState } from 'react';
import { makeStyles, shorthands, Title1, Card, CardFooter, CardPreview, Image } from '@fluentui/react-components';
import { Icon } from '@fluentui/react';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    width: '360px',
    maxWidth: '100%',
    userSelect: 'none',
    ...shorthands.margin('5px'),
    ...shorthands.padding('20px'),
    ...shorthands.borderRadius('5px'),
    ...shorthands.border('0 '),
  },
  cardFooter: {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
  },
  toggleIcon: {
    cursor: 'pointer',
    userSelect: 'none',
  },
  title: {
    fontSize: '15px',
    userSelect: 'none',
  },
  moreIcon: {
    fontSize: '24px',
    position: 'absolute',
    top: '10px',
    right: '10px',
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
      <CardPreview style={{ position: 'relative' }}>
        <Image alt="Server's background" src={'/background.jpg'} style={{ width: '125px', height: '100px', borderRadius: '10px', marginTop: '10px' }} />
      </CardPreview>
      <Icon iconName="More" className={styles.moreIcon} />

      <CardFooter className={styles.cardFooter}>
        <Icon iconName="CircleFill" onClick={toggleHandler} className={styles.toggleIcon} style={{ color: toggle ? 'green' : 'red' }} />
        <Title1 className={styles.title}>{title}</Title1>
      </CardFooter>
    </Card>
  );
};
export default CardComponent;
