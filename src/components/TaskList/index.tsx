import { useContext } from 'react';
import { Task } from '../Task';
import styles from './styles.module.scss';
import { AppContext, ITask } from '../../context/AppProvider';

export function TaskList() {
  const context = useContext(AppContext);

  function handleClick(id: string, status: boolean) {
    const updatedTasks = context.task.reduce((acc: ITask[], t) => {
      if (t.id === id) {
        return [...acc, { ...t, isCompleted: !status }];
      } else {
        return [...acc, t];
      }
    }, []);

    context.setTask(updatedTasks);
  }

  return (
    <div className={styles.taskListContainer}>
      <header className={styles.header}>
        <p>
          Tarefas criadas <span>5</span>
        </p>
        <p>
          Concluídas <span>2 de 5</span>
        </p>
      </header>
      <main className={styles.main}>
        {context.task.map((task) => (
          <Task key={task.id} values={task} handleClick={handleClick} />
        ))}
      </main>
    </div>
  );
}
