

export const LoginAction = (data) => {
    return {
        type: "LOGIN",
        payload: data
    }
}

export const LogoutAction = () => {
    return {
        type: "LOGOUT"
    }
}