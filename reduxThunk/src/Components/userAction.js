// actions/userActions.js
export const fetchUserData = () => {
    return (dispatch) => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => {
          dispatch({
            type: 'FETCH_USER_DATA',
            payload: data,
          });
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    };
  };
  