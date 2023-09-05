import React from "react";

function CharacterCard({
  character,
  onShowDetails,
}: {
  character: any;
  onShowDetails(character: any): void;
}) {
  return (
    <div className="outline outline-2 outline-gray-300 dark:outline-gray-500 rounded pb-2">
      <div>
        <img
          src={character.image}
          alt="character"
          height="260px"
          width="260px"
        />
      </div>
      <div className="p-2 dark:text-neutral-200">
        <p className="font-bold">
          {character.name.length > 25
            ? character.name.substr(0, 20).concat(" ...")
            : character.name}
        </p>
        <p className="text-sky-600">{character.species}</p>
      </div>
      <div className="px-2 dark:text-neutral-200">
        <p
          className={
            character.status === "Alive" ? "text-green-600" : "text-red-600"
          }
        >
          {character.status}
        </p>
        <p className="text-sky-400">{character.gender}</p>
        <p className="text-sm">
          {character.location.name.substr(0, 20).concat(" ...")}
        </p>
      </div>
      <div className="px-2">
        <button
          className="bg-teal-400 w-full rounded py-1 mt-2"
          onClick={() => onShowDetails(character)}
        >
          Details {"\u2b62"}
        </button>
      </div>
    </div>
  );
}

export default CharacterCard;
