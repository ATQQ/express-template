const fs = require("fs");

module.exports = {
    "GET /": async (ctx, next) => {
        ctx.response.body = fs.readFileSync(__dirname + "/../src/index.html", "utf-8");
        next();
    }
}