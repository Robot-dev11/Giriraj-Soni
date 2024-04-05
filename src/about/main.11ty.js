exports.data = () => {
    return {
        layout: "base.njk",
        permalink: "/about/",
    }
}
exports.render = (data) =>{
    return `
        ${data.collections.about.sort((a, b) => {
            return a.data.postion - b.data.position
        }).map(
            post => {
                return post.content;
            }
        ).join("\n")}
    `
}