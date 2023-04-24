import styles from './styles.module.scss';
import logo from '../../assets/logo.png';
import { PlusCircle } from '@phosphor-icons/react';

function Header() {
  return (
    <div className={styles.headerContainer}>
      <header>
        <img src={logo} alt="" />
        <form className={styles.newTaskContainer}>
          <input type="text" name="" id="" placeholder="Adicione uma nova tarefa" />
          <button type="submit">
            Criar <PlusCircle size={22} />
          </button>
        </form>
      </header>
    </div>
  );
}

export default Header;
