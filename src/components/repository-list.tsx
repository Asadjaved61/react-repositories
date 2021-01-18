import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import RepositoryProps from "../interfaces/repository";
import RepositoriesService from "../services/repositories.service";
import Repository from "./repository";

const repositoriesService = new RepositoriesService();

const RepositoryList = () => {
  const [repositories, setRepositories] = useState<RepositoryProps[] | null>(
    null
  );
  const [searchResult, setSearchResult] = useState<RepositoryProps[] | null>(
    null
  );

  useEffect(() => {
    repositoriesService
      .getRepositories()
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data.items);
      });
  }, []);

  const onSearch = (e: any) => {
    // search for repository that matches with name
    let repositoriesClone = repositories;

    repositoriesClone =
      repositoriesClone &&
      repositoriesClone.filter((repo) => {
        return repo.full_name.indexOf(e.target.value) >= 0 ? true : false;
      });

    // if found set searchResult
    setSearchResult(repositoriesClone);
  };
  return (
    <div className="container">
      <div className="form-group row justify-content-center">
        <label htmlFor="searchRepository" className="col-sm-2 col-form-label">
          <b>Search Repository</b>
        </label>
        <div className="col-sm-6">
          <input
            type="text"
            className="form-control"
            id="searchRepository"
            placeholder="Search Repository..."
            onChange={onSearch}
          />
        </div>
      </div>
      {repositories && (
        // if search value is empty then show the repositories from api
        <Row>
          {!searchResult
            ? repositories.map((repo: RepositoryProps) => {
                return (
                  <Col
                    key={repo.id}
                    className="col-md-4 mb-3"
                    style={{ height: "180px" }}
                  >
                    <Repository repository={repo} />
                  </Col>
                );
              })
            : searchResult.map((repo: RepositoryProps) => {
                return (
                  <Col
                    key={repo.id}
                    className="col-md-4 mb-3"
                    style={{ height: "180px" }}
                  >
                    <Repository repository={repo} />
                  </Col>
                );
              })}
        </Row>
      )}
    </div>
  );
};

export default RepositoryList;
