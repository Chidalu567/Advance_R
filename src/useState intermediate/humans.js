const Modal = () => {
  //define my useState
  const [people, setPeople] = useState(data);
  const removeItem = (param) => {
    const keep_them = people.filter((person) => person.id == param);
    setPeople(keep_them);
  }; //javascript function definition
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Modal;
