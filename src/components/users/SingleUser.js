import React, { useEffect, Fragment } from "react";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import { FaDirections } from "react-icons/fa";
import CountUp from "react-countup";

const SingleUser = ({
  user,
  isLoading,
  getUser,
  getUserRepos,
  repos,
  match,
}) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
        company,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to search
      </Link>
      Hireable :{" "}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
      <div className="card grid-2">
        <div className="aal-center">
          <img
            src={avatar_url}
            className="round-img"
            alt=""
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>{location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a
            href={html_url}
            className="btn btn-dark my-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Github Profile <FaDirections color="#dc3545" size="1rem" />
          </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Userename:{login}</strong>
                </Fragment>
              )}
            </li>

            <li>
              {company && (
                <Fragment>
                  <strong>Company:{company}</strong>
                </Fragment>
              )}
            </li>

            <li>
              {blog && (
                <Fragment>
                  <strong>Website:{blog}</strong>
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">
          Followers: <CountUp end={followers} />
        </div>
        <div className="badge badge-success">
          Following: <CountUp end={following} />
        </div>
        <div className="badge badge-light">
          Public Repos: <CountUp end={public_repos} />
        </div>
        <div className="badge badge-dark">Public Gist: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};
SingleUser.propTypes = {
  isLoading: PropTypes.bool,
  user: PropTypes.object.isRequired,
  getUser: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
  getUserRepos: PropTypes.func.isRequired,
};
export default SingleUser;
