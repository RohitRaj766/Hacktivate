export const loginRequest = (payload) => ({
    type: 'LOGIN_REQUEST',
    payload
  });
  
  export const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user
  });
  
  export const loginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: error
  });

  export const logoutUser = () => ({
    type: 'LOGOUT_USER',
  });
  
  