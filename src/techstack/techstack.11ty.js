class TechStack {
    data(){
        let metadata = {
            title: "This is techstack page",
            draft: true,
            permalink: false,
            position: 1,
            tags: 'tech'
        }
        return metadata
    }


    render(){
        let content = `
                        <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5 mt-5 md:p-0">
                            <div class="col-span-2 p-6 md:col-span-2 lg:col-span-3">
                                <div class="text-3xl font-bold mt-2 text-black-600 mb-5">What I know</div>
                                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                                    <div class="flex-1 flex flex-col gap-4 bg-cardPrimary p-4 rounded-md shadow-lg">
                                        <div class="text-primary font-medium text-lg tracking-wider">Frontend</div>
                                        <div class="flex flex-wrap gap-2">
                                        <div class="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">HTML</div>
                                        <div class="rounded-md bg-body text-xs text-primary p-2 border border-yellow-500/60">CSS</div>
                                        <div class="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">Eleventy</div>
                                        <div class="rounded-md bg-body text-xs text-primary p-2 border border-black/60">Gatsby</div>
                                        <div class="rounded-md bg-body text-xs text-primary p-2 border border-yellow-500/60">Angular 13</div>
                                        <div class="rounded-md bg-body text-xs text-primary p-2 border border-black/60">Gitlab</div>
                                        <div class="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">Github</div>
                                        <div class="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">Tailwind</div>
                                        <div class="rounded-md bg-body text-xs text-primary p-2 border border-yellow-500/60">Javascript</div>
                                        <div class="rounded-md bg-body text-xs text-primary p-2 border border-black/60">Typescript</div>
                                        <div class="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">React Js</div>
                                        <div class="rounded-md bg-body text-xs text-primary p-2 border border-black/60">Next Js 13</div>
                                    </div>
                                </div>
                                <div class="flex-1 flex flex-col gap-4 bg-cardPrimary p-4 rounded-md shadow-lg">
                                    <div class="text-primary font-medium text-lg tracking-wider">Backend</div>
                                    <div class="flex flex-wrap gap-2">
                                        <div class="rounded-md bg-body text-xs text-primary p-2 border border-green-500/60">Node Js</div>
                                        <div class="rounded-md bg-body text-xs text-primary p-2 border border-gray-500/60">Express Js</div>
                                        <div class="rounded-md bg-body text-xs text-primary p-2 border border-green-500/60">Next Auth</div>
                                        <div class="rounded-md bg-body text-xs text-primary p-2 border border-gray-500/60">Loopback 4</div>
                                    </div>
                                </div>
                                <div class="flex-1 flex flex-col gap-4 bg-cardPrimary p-4 rounded-md shadow-lg">
                                    <div class="text-primary font-medium text-lg tracking-wider">Database</div>
                                    <div class="flex flex-wrap gap-2">
                                        <div class="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">MSSQL</div>
                                        <div class="rounded-md bg-body text-xs text-primary p-2 border border-emerald-500/60">MongoDB</div>
                                        <div class="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">FireBase</div>
                                    </div>
                                </div>
                                <div class="flex-1 flex flex-col gap-4 bg-cardPrimary p-4 rounded-md shadow-lg">
                                    <div class="text-primary font-medium text-lg tracking-wider">Devops</div>
                                    <div class="flex flex-wrap gap-2">
                                        <div class="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">Docker</div>
                                        <div class="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">Kubernetes</div>
                                        <div class="rounded-md bg-body text-xs text-primary p-2 border border-orange-500/60">GIT</div>
                                        <div class="rounded-md bg-body text-xs text-primary p-2 border border-purple-500/60">Jenkins</div>
                                        <div class="rounded-md bg-body text-xs text-primary p-2 border border-purple-500/60">Azure</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>`
        return content
    }
}

module.exports = TechStack;

    