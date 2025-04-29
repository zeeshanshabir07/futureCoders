let userData = [{
    "username": "Hamdan123",
    "email": "hamdan@example.com",
    "password": "securePass123",
    "role": "admin"
  }
  ]

  export const setData = () => {
  localStorage.setItem("userData", JSON.stringify(userData));

  }
  export const getStorage = () => {
   let userShow = localStorage.getItem("userData");
    if(userShow){
        userShow = JSON.parse(userShow)
        return userShow; 
    } else {
        console.log("No data found in localStorage");
    }
};
