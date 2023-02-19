function Card({ r, dodaj, mod, izbaci }) {
  return (
    <div className="card">
      <img src={r.slika} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{r.naziv}</h5>
        <p className="card-text">
          {r.opis} <br /> Vreme spusta: {r.vreme}
        </p>
        {mod === 1 ? (
          <button className="dodaj" onClick={() => dodaj(r.id)}>
            Dodaj u omiljene
          </button>
        ) : (
          <button className="izbaci" onClick={() => izbaci(r.id)}>
            Izbaci iz omiljenih
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
