import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import Content from "./components/Content";
import NavigationButtons from "./components/NavigationButtons";
import CharacterDetails from "./components/CharacterDetails";

function App() {
  const [theme, setTheme] = useState<string>("");
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [details, setDetails] = useState<object>({});
  const [pageInfo, setPageInfo] = useState<{
    count: number;
    pages: number;
    next: string;
    prev: null;
  }>({ count: 1, pages: 1, next: "", prev: null });
  const [page, setPage] = useState<number>(1);
  const [params, setParams] = useState<{
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
  }>({ name: "", status: "", species: "", type: "", gender: "" });
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character/?name=${params.name}&status=${params.status}&species=${params.species}&type=${params.type}&gender=${params.gender}&page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        setResults(data.results);
        setPageInfo(data.info);
      })
      .catch((error) => console.warn(error.message));
  }, [params, page]);

  function handleNextPage() {
    page < pageInfo.pages && setPage((cur) => cur + 1);
  }
  function handlePrevPage() {
    page > 1 && setPage((cur) => cur - 1);
  }

  function handleShowDetails(character: any) {
    setDetails(character);
    setShowDetails(true);
  }

  function handleHideDetails() {
    setShowDetails(false);
  }

  return (
    <div className={theme}>
      <Header theme={theme} setTheme={setTheme} />
      {showDetails ? (
        <CharacterDetails details={details} onHideDetails={handleHideDetails} />
      ) : (
        <>
          <Filters setParams={setParams} />
          <NavigationButtons
            pageInfo={pageInfo}
            page={page}
            onNextPage={handleNextPage}
            onPrevPage={handlePrevPage}
          />
          <Content results={results} onShowDetails={handleShowDetails} />
        </>
      )}
    </div>
  );
}

export default App;
