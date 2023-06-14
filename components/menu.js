import styles from "../style.module.css"
function Menu() {
  return (
    <div >
      <nav className={styles.menu}>
       
            <a className={styles.infoBotaoMenu} href="/">Inicio</a>
        
            <a className={styles.infoBotaoMenu} href="/projetos">Projetos</a>
         
            <a className={styles.infoBotaoMenu} href="/sobre">Sobre</a>
        
      </nav>
    </div>
  );
}

export default Menu;
