exports.data = () => {
    return {
        layout: "base.njk",
        permalink: "/projects/",
    }
}
exports.render = (data) =>{
    return `
        ${data.collections.projects.sort((a, b) => {
            return a.data.postion - b.data.position
        }).map(
            post => {
                return post.content;
            }
        ).join("\n")}
    `
}