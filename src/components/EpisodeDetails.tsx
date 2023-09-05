import React, { useEffect, useState } from "react";

function EpisodeDetails({ ep }: { ep: string }) {
  const [episode, setEpisode] = useState<{
    id: number;
    name: string;
    air_date: string;
    episode: string;
  }>({
    id: 0,
    name: "",
    air_date: "",
    episode: "",
  });
  useEffect(() => {
    fetch(ep)
      .then((resp) => resp.json())
      .then((data) => {
        setEpisode(data);
      })

      .catch((error) => console.warn(error));
  }, [ep]);
  return (
    <div>
      <p>
        {"\u2b62"} {episode.episode} - {episode.name}
      </p>
      <p className="ml-5 text-slate-500">{episode.air_date}</p>
    </div>
  );
}

export default EpisodeDetails;
