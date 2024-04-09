class Projects {
    data(){
        let metadata = {
            title: "This is Projects Page",
            draft: true,
            permalink: false,
            position: 1,
            tags: 'projects'
        }
        return metadata
    }


    render(){
        let content = `
        <section class="flex flex-col w-full md:p-0">
            <h1 class="text-3xl font-semibold text-black">Projects are Coming</h1>
        </section>`

        return content
    }
}

module.exports = Projects;