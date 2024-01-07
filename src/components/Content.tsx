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
      {results ? (
        results.map((character) => (
          <CharacterCard
            character={character}
            key={character.id}
            onShowDetails={onShowDetails}
          />
        ))
      ) : (
        <p className="dark:text-gray-300">No characters meet your criteria</p>
      )}
    </div>
  );
}

export default Content;
