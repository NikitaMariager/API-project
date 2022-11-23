import { useEffect, useState } from "react";

//import eget hook - som laver request til API
import useGetData from "../../hooks/useGetData";

const Users = () => {
  //request-hook
  const { error, loading, data, getData } = useGetData();

  //state
  const [userId, setUserId] = useState(4);

  useEffect(() => {
    if (userId !== "") {
      getData("https://jsonplaceholder.typicode.com/users/" + userId);
    }
  }, [userId]);

  return (
    <>
      <div className="userContainer">
        <h1>Users</h1>

        {/* error */}
        {error && (
          <h2>
            Der er sket en fejl - måske er der ikke en bruger der matcher det
            indtastet ID
          </h2>
        )}
        {/* loading */}
        {loading && <h2>Der loades</h2>}

        {/* input felt til at vælge hvilken bruger der bliver vist */}
        <form className="userForm">
          <label htmlFor="UserId">Tast en brugers ID</label>
          <input
            id="UserId"
            type="number"
            min="1"
            placeholder="Brugers ID"
            onInput={(e) => setUserId(e.target.value)}
          ></input>
        </form>

        {/* data - users */}
        {data && data.address && (
          <div>
            <h3> {data.name} </h3>
            <p>
              {" "}
              <a href={"mailto:" + data.email}>{data.email}</a>
            </p>
            <p>{data.address.city}</p>

            {/* loop gennem et object{} (ikke et array[]) */}
            {Object.entries(data.address)
              .slice(0, 4)
              .map(([k, v]) => (
                <p key={v}>
                  {k}:{v}
                </p>
              ))}
          </div>
        )}
      </div>
    </>
  );
};
export default Users;
