const request = require("request");
const cheerio = require("cheerio");

request('https://www.baidu.com',
    function (err, response, body) {
        if (!err && response.statusCode == 200) {
            filter(body);
        } else {
            console.error(err);
        }
    }
)

function filter(data) {
    var $ = cheerio.load(data);
    console.log(data);
}