import { useContext } from 'react';
import { Task } from '../Task';
import styles from './styles.module.scss';
import { AppContext, ITask } from '../../context/AppProvider';
import { ClipboardText } from '@phosphor-icons/react';

export function TaskList() {
  const context = useContext(AppContext);

  function handleChange(id: string, status: boolean) {
    const updatedTasks = context.task.reduce((acc: ITask[], t) => {
      if (t.id === id) {
        return [...acc, { ...t, isCompleted: !status }];
      } else {
        return [...acc, t];
      }
    }, []);

    context.setTask(updatedTasks);
  }

  function handleClick(id: string) {
    const updatedTasks = context.task.filter((t) => t.id !== id);
    context.setTask(updatedTasks);
  }

  const tasksCreated = context.task.length;
  const tasksDone = context.task.filter((t) => t.isCompleted === true).length;

  return (
    <div className={styles.taskListContainer}>
      <header className={styles.header}>
        <p>
          Tarefas criadas <span>{tasksCreated}</span>
        </p>
        <p>
          Concluídas <span>{`${tasksDone} de ${tasksCreated}`}</span>
        </p>
      </header>
      <main className={styles.main}>
        {context.task.length === 0 ? (
          <div className={styles.messageContainer}>
            <ClipboardText size={65} weight="light" className={styles.messageIcon} />
            <p>
              <strong>Você ainda não tem tarefas cadastradas.</strong>
            </p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          context.task.map((task) => (
            <Task
              key={task.id}
              values={task}
              handleChange={handleChange}
              handleClick={handleClick}
            />
          ))
        )}
      </main>
    </div>
  );
}
