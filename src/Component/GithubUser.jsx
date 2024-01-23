
import CustomHook from "../Hook/CustomHook";
const GithubUser = ({ username }) => {
  const { user, error, loading } = CustomHook(username );

  return (
    <>
      <div className="container mt-4">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {user && (
          <div>
            <img src={user.avatar_url} style={{ borderRadius: '50px', height: '150px' }} alt="" />
            <p>Name: {user.name}</p>
            <p>Public Repositories: {user.public_repos}</p>
            <p>Bio: {user.bio || "NA"}</p>
            <p>Location: {user.location || "NA"}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default GithubUser;
