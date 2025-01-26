import posterImg from "../../assets/poster.jpg"
import styles from "./styles.module.css"

/*Criação do app Card:
Perceba que estamos importando a imagem q iremos utilizar e estilizand usando as classes atraves
do css.modules */
export default function Card() {
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={posterImg} alt="Star Wars poster" />
      <div>
        <h2 className={styles.title}>Pôster do filme Os Infiltrados</h2>
        <p className={styles.description}>Um pôster decorativo do filme Os Infiltrados, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos  filmes classicos dos ultimos tempos. Este clássico pôster trará a recordação de todos de um filme que junta grandes estrelas do cinema. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
        <button className={styles.button}>Comprar agora</button>
      </div>
    </div>
  )
}
