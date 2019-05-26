import { GETDETAILS, GETMALEDETAILS, GETFEMALEDETAILS } from '../constants'

const details = (state = {}, action) => {
    switch(action.type) {
        case GETDETAILS: 
            return Object.assign({},{ name: 'xiaoming' })
        case GETMALEDETAILS:
            return Object.assign({}, { name: 'xiaogang' })
        case GETFEMALEDETAILS:
            return Object.assign({}, { name: 'xiaohong' })
        default:
            return Object.assign({},state)
    }
}
export default details;