const initialState = {
    isLoggedIn: false,
    email: '',
    password: '',
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { isLoggedIn: true, email: action.payload.email, password: action.payload.password };
        case 'LOGOUT':
            return { isLoggedIn: false, email: '', password: '' };
        default:
            return state;
    }
};

export default rootReducer;
