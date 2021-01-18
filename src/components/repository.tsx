import React from "react";
import { Col } from "react-bootstrap";
import RepositoryProps from "../interfaces/repository";

interface Props {
  repository: RepositoryProps;
}

const Repository: React.FC<Props> = ({ repository }) => {
  return (
    <div className="card" style={{ height: "100%" }}>
      <div className="card-body">
        <a href={repository.html_url} target="_blank">
          <h5 className="card-title">{repository.full_name}</h5>
        </a>
        <div className="text-left mt-4" style={{ fontSize: "20px" }}>
          <b>Stars: </b>
          <span>{repository.stargazers_count}</span>
        </div>
        <div className="text-left" style={{ fontSize: "20px" }}>
          <b>Forks: </b>
          <span>{repository.forks}</span>
        </div>
      </div>
    </div>
  );
};

export default Repository;
