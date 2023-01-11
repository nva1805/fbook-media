import { LOGIN_ACTION } from "../action/Action";



const INITIAL_STATE = {
    account: {
        id: null,
        name: null,
        profilePic: null
      },
    isAuthenticated: false
}



const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN_ACTION:
            console.log(action);
            return {
                ...state, account: {
                    id: 1,
                    name: "John Doe",
                    profilePic:
                      "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
                  },
                isAuthenticated: true
            };
        default:
            return state
    }
}


export default userReducer