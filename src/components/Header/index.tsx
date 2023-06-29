import styles from './styles.module.scss';
import logo from '../../assets/logo.png';
import { PlusCircle } from '@phosphor-icons/react';
import { FormEvent, useContext, useState } from 'react';
import { AppContext } from '../../context/AppProvider';

function Header() {
  const context = useContext(AppContext);
  const [taskContent, setTaskContent] = useState('');

  function handleChange(e: { target: HTMLInputElement }) {
    setTaskContent(e.target.value);
  }

  function handleClick(e: FormEvent) {
    e.preventDefault();
    context.setTask([
      ...context.task,
      { id: crypto.randomUUID(), task: taskContent, isComplete: false },
    ]);

    setTaskContent('');
  }

  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <img src={logo} alt="" />
        <form className={styles.newTaskContainer}>
          <input
            type="text"
            name=""
            id=""
            value={taskContent}
            placeholder="Adicione uma nova tarefa"
            onChange={(e) => handleChange(e)}
          />
          <button
            type="submit"
            disabled={taskContent === '' ? false : true}
            onClick={(e) => handleClick(e)}
          >
            Criar <PlusCircle size={22} />
          </button>
        </form>
      </header>
    </div>
  );
}

export default Header;
