import { Trash } from '@phosphor-icons/react';
import styles from './styles.module.scss';
import { ITask } from '../../context/AppProvider';

interface IProps {
  values: ITask;
  handleChange: (id: string, status: boolean) => void;
  handleClick: (id: string) => void;
}

export function Task(props: IProps) {
  const { values, handleChange, handleClick } = props;

  return (
    <div className={styles.taskContainer}>
      <label htmlFor={values.id} className={styles.task}>
        <input
          type="checkbox"
          name={values.id}
          id={values.id}
          checked={values.isCompleted}
          onChange={() => handleChange(values.id, values.isCompleted)}
        />
        <div className={styles.checkbox}></div>
        {values.task}
      </label>
      <button className={styles.trash} onClick={() => handleClick(values.id)}>
        <Trash size={20} />
      </button>
    </div>
  );
}
