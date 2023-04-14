import Card from "./Card";

export default function Cards({ characters, onClose }) {
  return (
    <div>
      {characters.map(
        ({ id, name, status, species, gender, origin, image }) => {
          return (
            <Card
              name={name}
              id={id}
              status={status}
              species={species}
              gender={gender}
              origin={origin.name}
              onClose={onClose}
              image={image}
            />
          );
        }
      )}
    </div>
  );
}
