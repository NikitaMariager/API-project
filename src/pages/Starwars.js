import { useEffect, useState } from "react";
import Loader from "../components/loader";
import Error from "../components/Error";

//import eget hook - som laver request til API
import useGetData from "../hooks/useGetData";

const Starwars = () => {
  //request-hook
  const { error, loading, data, getData } = useGetData();

  //state
  const [spaceshipId, setSpaceshipId] = useState(2);

  useEffect(() => {
    if (spaceshipId !== "") {
      getData("https://swapi.dev/api/starships/" + spaceshipId);
    }
  }, [spaceshipId]);

  return (
    <div className="starWarsContainer">
      <h1>Starwars spaceships</h1>

      <div className="msgcontainer">
        {/* error */}
        {error && <Error />}

        {/* loading */}
        {loading && <Loader />}
      </div>

      {/* input felt til at vælge hvilken bruger der bliver vist */}
      <form className="SpaceshipForm">
        <label htmlFor="spaceshipID">Enter a spachip ID</label>
        <input
          id="spaceshipID"
          type="number"
          min="1"
          placeholder="spaceship ID"
          onInput={(e) => setSpaceshipId(e.target.value)}
        ></input>
      </form>

      {/* data - Spaceships */}
      {data && (
        <div>
          <h3> {data.name} </h3>

          {/* loop gennem et object{} (ikke et array[]) */}
          {Object.entries(data)
            .slice(1, 14)
            .map(([k, v]) => (
              <p key={v}>
                {" "}
                <span>{k}: </span>
                {v}
              </p>
            ))}

          <p>
            <span>Films: </span> <a href={data.films}>{data.films[0]} </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Starwars;
