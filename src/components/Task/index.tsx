import { Trash } from '@phosphor-icons/react';
import styles from './styles.module.scss';
import { ITask } from '../../context/AppProvider';

interface IProps {
  values: ITask;
  handleClick: (id: string, status: boolean) => void;
}

export function Task(props: IProps) {
  const { values, handleClick } = props;

  return (
    <div className={styles.taskContainer}>
      <label htmlFor={values.id} className={styles.task}>
        <input
          type="checkbox"
          name={values.id}
          id={values.id}
          checked={values.isCompleted}
          onChange={() => handleClick(values.id, values.isCompleted)}
        />
        <div className={styles.checkbox}></div>
        {values.task}
      </label>
      <button className={styles.trash}>
        <Trash size={20} />
      </button>
    </div>
  );
}
