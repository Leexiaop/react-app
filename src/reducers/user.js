import { GETUSERINFO, GETMALEINFO, GETFEMALEINFO } from '../constants'
const user = (state = {}, action) => {
    switch(action.type) {
        case GETUSERINFO:
            return Object.assign({},{
                user: action.userList
            })
        case GETMALEINFO:
            return Object.assign({}, {
                name: 'lee', gender: 1, age: 26
            })
        case GETFEMALEINFO:
            return Object.assign({}, {
                name: 'lxp', gender: 0, age: 13
            })
        default:
            return Object.assign({}, state)
    }
}
export default user;