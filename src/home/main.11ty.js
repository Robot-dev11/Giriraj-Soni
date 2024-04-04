exports.data = () => {
    return {
        layout: "base.njk",
        permalink: "/",
    }
}
exports.render = (data) =>{
    return `
        ${data.collections.demo.sort((a, b) => {
            return a.data.postion - b.data.position
        }).map(
            post => {
                return post.content;
            }
        ).join("\n")}
    `
}