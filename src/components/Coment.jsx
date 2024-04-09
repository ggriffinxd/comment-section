export default function Coment({ email, comentario, data, onRemove }) {
  return (
    <>
      <h4>{email}</h4>
      <p>
        {comentario} <button onClick={onRemove}>EXCLUIR</button>
      </p>
      <p>{`Publicado em ${data}`}</p>
    </>
  );
}
