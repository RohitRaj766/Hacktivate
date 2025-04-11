const initialState = {
    isAuthenticated: false,
    isLoading: false,
    user: null,
    error: null
  };
  
  const userauth = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_REQUEST':
        return {
          ...state,
          isLoading: true,
          error: null
        };
  
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isLoading: false,
          isAuthenticated: true,
          user: action.payload,
          error: null
        };
  
      case 'LOGIN_FAILURE':
        return {
          ...state,
          isLoading: false,
          isAuthenticated: false,
          user: null,
          error: action.payload
        };
  
      case 'LOGOUT_USER':
        return {
          ...initialState // Reset state on logout
        };
  
      default:
        return state;
    }
  };
  
  export default userauth;
  