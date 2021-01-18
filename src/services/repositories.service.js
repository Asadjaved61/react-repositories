class RepositoriesService {
  getRepositories = () => {
    return fetch("https://api.github.com/search/repositories?q=react").then(
      (response) => response
    );
  };
}

export default RepositoriesService;
