import React from "react";
import CharacterCard from "./CharacterCard";

function Content({
  results,
  onShowDetails,
}: {
  results: any[];
  onShowDetails(character: any): void;
}) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-7 place-items-center px-5 py-3 dark:bg-sky-950">
      {results.map((character) => (
        <CharacterCard
          character={character}
          key={character.id}
          onShowDetails={onShowDetails}
        />
      ))}
    </div>
  );
}

export default Content;
