import { useEffect, useState } from "react";
import Titel from "../components/Titel";
import Loader from "../components/loader";
import Error from "../components/Error";

//import eget hook - som laver request til API
import useGetData from "../hooks/useGetData";

const StarwarsPages = () => {
  //request-hook
  const { error, loading, data, getData } = useGetData();

  //state
  const [pageNumber, setpageNumber] = useState(1);

  useEffect(() => {
    if (pageNumber !== "") {
      getData("https://swapi.dev/api/starships/?page=" + pageNumber);
    }
  }, [pageNumber]);

  return (
    <div className="starWarsContainer">
      <h1>Starwars spaceships</h1>

      <div className="msgcontainer">
        {/* error */}
        {error && <Error />}

        {/* loading */}
        {loading && <Loader />}
      </div>

      {/* data - Spaceships */}
      {data && (
        <div>
          <Titel headline="Spaceships" />

          <button
            disabled={data.previous ? false : true}
            onClick={() => {
              setpageNumber(pageNumber - 1);
            }}
          >
            &lt;&lt; Previous
          </button>
          <button
            disabled={data.next ? false : true}
            onClick={() => {
              setpageNumber(pageNumber + 1);
            }}
          >
            Next &gt;&gt;
          </button>

          <div className="threeColGrid">
            {/* loop gennem et object{} (ikke et array[]) */}
            {data.results.map((d, i) => (
              <div>
                <h2 key={i}>{d.name}</h2>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StarwarsPages;
