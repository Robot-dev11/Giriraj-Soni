exports.data = () => {
    return {
        layout: "base.njk",
        permalink: "/experience/",
    }
}
exports.render = (data) =>{
    return `
        ${data.collections.experience.sort((a, b) => {
            return a.data.postion - b.data.position
        }).map(
            post => {
                return post.content;
            }
        ).join("\n")}
    `
}