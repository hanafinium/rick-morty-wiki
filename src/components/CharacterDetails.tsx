import React from "react";
import EpisodeDetails from "./EpisodeDetails";

function CharacterDetails({
  details,
  onHideDetails,
}: {
  details: any;
  onHideDetails(): void;
}) {
  return (
    <div className="dark:bg-sky-950 dark:text-neutral-200 h-screen pt-5">
      <div className="m-4 font-bold flex flex-row">
        <button onClick={onHideDetails}> {"<-"} Go Back</button>
      </div>
      <div className="flex flex-row justify-center gap-10">
        <div className="shadow-md dark:shadow-slate-800 p-4 rounded w-2/6">
          <div className="flex flex-col items-center border-b-2 mb-3 pb-4">
            <img
              src={details.image}
              alt="character"
              height="230px"
              width="230px"
              className="rounded-full place-self-center"
            />
            <p className="text-2xl">{details.name}</p>
          </div>
          <div>
            <p>
              Status:{" "}
              <span
                className={
                  details.status === "Alive" ? "text-green-600" : "text-red-600"
                }
              >
                {details.status}
              </span>
            </p>
            <p>
              Gender:{" "}
              <span
                className={
                  details.gender === "Male" ? "text-sky-400" : "text-red-400"
                }
              >
                {details.gender}
              </span>
            </p>
            <p>Species: {details.species}</p>
            <p>Type: {details.type || "n/a"}</p>
            <p>Origin: {details.origin.name}</p>
            <p>Location: {details.location.name}</p>
          </div>
        </div>
        <div className="shadow-lg dark:shadow-gray-800 rounded p-4 h-96 overflow-y-auto">
          <p className="border-b-2 mb-2 text-lg">Featured In</p>
          {details.episode.map((ep: string) => (
            <EpisodeDetails ep={ep} key={ep} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CharacterDetails;
