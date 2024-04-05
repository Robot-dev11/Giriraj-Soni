exports.data = () => {
    return {
        permalink: "/contact/",
        layout: "base.njk",
    }
}
exports.render = (data) =>{
    return `
        ${data.collections.contact.sort((a, b) => {
            return a.data.postion - b.data.position
        }).map(
            post => {
                return post.content;
            }
        ).join("\n")}
    `
}