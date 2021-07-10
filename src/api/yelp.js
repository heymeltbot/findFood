import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer WjNyHNWcnfLNv5HYS9x0DFUTXfgWw0yFNLQowjFdQbT3Thu491gUDLwE5aOPXZUEu8Gj0TMD7vQ7mzQtpQwyKrGZH-7ijkCHY4rBAjVb_54tazHXzR54VztJu93pYHYx",
  },
});
