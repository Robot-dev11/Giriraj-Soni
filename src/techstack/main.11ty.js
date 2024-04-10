exports.data = () => {
    return {
        layout: "base.njk",
        permalink: "/techstack/",
    }
}
exports.render = (data) =>{
    return `
        ${data.collections.tech.sort((a, b) => {
            return a.data.postion - b.data.position
        }).map(
            post => {
                return post.content;
            }
        ).join("\n")}
    `
}