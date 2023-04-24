import styles from './styles.module.scss';

export function TaskList() {
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
    </div>
  );
}
