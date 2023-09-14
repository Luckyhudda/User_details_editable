export const users = () => {
  return fetch("https://jsonplaceholder.typicode.com/users").then((data) =>
    data.json()
  );
};

export const user = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
    (data) => data.json()
  );
};
