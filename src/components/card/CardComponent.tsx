"use client";

import { useState } from "react";
import {
  makeStyles,
  Body1,
  Caption1,
  shorthands,
  Title1,
} from "@fluentui/react-components";
import {
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
} from "@fluentui/react-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faTv } from "@fortawesome/free-solid-svg-icons";
import { faToggleOff } from "@fortawesome/free-solid-svg-icons/faToggleOff";

const useStyles = makeStyles({
  card: {
    ...shorthands.margin("auto"),
    ...shorthands.padding("20px"),
    width: "240px",
    maxWidth: "100%",
  },
  toggleIcon: {
    cursor: "pointer",
  },
  tvIcon: {
    fontSize: "10px",
  },
  title: {
    userSelect: "none",
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "green",
  },
});

const CardComponent = ({ title }: { title: string }) => {
  const [toggle, setToggle] = useState(false);
  const styles = useStyles();

  const toggleHandler = () => {
    setToggle((prevToggleState) => !prevToggleState);
  };

  return (
    <Card className={styles.card} style={{ borderColor: "green !important" }}>
      <CardPreview>
        <FontAwesomeIcon className={styles.tvIcon} icon={faTv} size="2x" />
      </CardPreview>

      <CardFooter className={styles.footer}>
        <FontAwesomeIcon
          icon={toggle ? faToggleOn : faToggleOff}
          onClick={toggleHandler}
          className={styles.toggleIcon}
        />
        <Title1 className={styles.title}>{title}</Title1>
      </CardFooter>
    </Card>
  );
};
export default CardComponent;
