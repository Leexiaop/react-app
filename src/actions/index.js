import { GETUSERINFO, GETMALEINFO, GETFEMALEINFO, GETDETAILS, GETMALEDETAILS, GETFEMALEDETAILS } from '../constants'
let userList = [
    { name: 'lee', gender: 1, detail: { age: 25 } },
    { name: 'lxp', gender: 2, detail: { age: 13 } }
]
export const getUserInfo = () => {
    return {
        type: GETUSERINFO,
        userList
    }
}

export const getMaleInfo = () => {
    return {
        type: GETMALEINFO
    }
}

export const getFemaleInfo = () => {
    return {
        type: GETFEMALEINFO
    }
}
export const getDetails = () => {
    return {
        type: GETDETAILS,
        userList
    }
}

export const getMaleDetails = () => {
    return {
        type: GETMALEDETAILS
    }
}

export const getFemaleDetails = () => {
    return {
        type: GETFEMALEDETAILS
    }
}