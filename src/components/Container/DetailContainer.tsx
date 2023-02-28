import styles from "./DetailContainer.module.css";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function DetailContainer({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}
