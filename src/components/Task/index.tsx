import { Trash } from '@phosphor-icons/react';
import styles from './styles.module.scss';

export function Task() {
  return (
    <div className={styles.taskContainer}>
      <label htmlFor="task" className={styles.task}>
        <input type="checkbox" name="" id="task" />
        <div className={styles.checkbox}></div>
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames
        integer.
      </label>
      <button className={styles.trash}>
        <Trash size={20} />
      </button>
    </div>
  );
}
