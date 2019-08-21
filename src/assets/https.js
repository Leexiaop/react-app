//  对fetch进行封装
import fetch from 'cross-fetch'

class FetchHttps {
    get(url) {
        return new Promise((resolve, reject) => {
            fetch('https://localhost:3000/story/list')
                .then( res => res.json())
                .then( data => resolve("data"))
                .catch(err => reject(err))
        })
    }
    post() {}
}
let https = new FetchHttps()

export default https;