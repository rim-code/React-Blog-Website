
// Login all possibilities 
export const LoginStart = (userCredentials) => ({
    //userCredentials  username and password
    type: "LOGIN_START"
});


// two actions successful or failure
//login success
export const LoginSuccess = (user) =>({
  type:"LOGIN_SUCCESS",
  payload: user,
});

//failure

export const LoginFailure =()=>({
  type:"LOGIN_FAILURE",
});

// to dispatch actions and update state we are going to use reducer

//Logout
export const Logout =()=>({
  type:"LOGOUT",
});

export const UpdateStart = (userCredentials) => ({
  type: "UPDATE_START",
});

export const UpdateSuccess = (user) => ({
  type: "UPDATE_SUCCESS",
  payload: user,
});

export const UpdateFailure = () => ({
  type: "UPDATE_FAILURE",
});
