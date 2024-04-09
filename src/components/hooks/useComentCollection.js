import { useState } from "react";

export default function useComentCollection() {
  const [coments, setComents] = useState(() => {
    const storedComents = localStorage.getItem("obc-coment-lib");
    if (!storedComents) return [];
    return JSON.parse(storedComents);
  });

  function addComent({ email, comentario }) {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const data = today.toLocaleDateString();
    const id = Math.floor(Math.random() * 100000);
    const coment = { id, email, comentario, data };

    setComents((state) => {
      const newState = [...state, coment];
      localStorage.setItem("obc-coment-lib", JSON.stringify(newState));
      return newState;
    });
  }

  const removeComent = (id) => {
    setComents((state) => {
      const newState = state.filter((cmt) => cmt.id !== id);
      localStorage.setItem("obc-coment-lib", JSON.stringify(newState));
      return newState;
    });
  };

  return { removeComent, addComent, coments };
}
