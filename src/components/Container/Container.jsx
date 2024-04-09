import styles from "./style.module.css";
import Input from "../Input";
import { useState } from "react";
import Coment from "../Coment";
import useComentCollection from "../hooks/useComentCollection";

export default function Container() {
  const [email, setEmail] = useState("");
  const [comentario, setComentario] = useState("");

  const { removeComent, addComent, coments } = useComentCollection();

  function handleSubmit(ev) {
    ev.preventDefault();
    addComent({ email, comentario });
    setComentario("");
    setEmail("");
  }
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h1>Seção de Comentários</h1>
        <Input
          label="Email"
          typeInput="text"
          value={email}
          useState={setEmail}
        />
        <Input
          label="Comentario"
          typeInput="textarea"
          value={comentario}
          useState={setComentario}
        />
        <button type="submit">Postar Comentário!</button>
      </form>

      <div className={styles.comentSection}>
        <h3>---- Comentários ----</h3>
        {coments.length > 0 ? (
          coments.map((cmt) => (
            <Coment
              key={cmt.id}
              comentario={cmt.comentario}
              data={cmt.data}
              email={cmt.email}
              onRemove={() => removeComent(cmt.id)}
            />
          ))
        ) : (
          <p>Seja o primeiro a comentar!</p>
        )}
      </div>
    </div>
  );
}
