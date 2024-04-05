class Home {
    data(){
        let metadata = {
            title: "This is homepage",
            draft: true,
            permalink: false,
            position: 1,
            tags: 'demo'
        }
        return metadata
    }


    render(){
        let content = `
        <section class="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
            <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div class="grid items-center grid-cols-1 md:grid-cols-2">
                    <div>
                        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Hi There 👋</h2>
                        <h2 class="text-3xl mt-5 font-bold leading-tight text-black sm:text-3xl lg:text-3xl">I am a FullStack Developer</h2>
                        <div class="flex flex-row mt-10">
                            <a type="button" href="/contact/" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">Hire Me</a>
                            <a href="/assets/Giriraj_Soni_Resume.pdf" download="Giriraj_Soni">
                                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 text-black focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white  rounded-md group-hover:bg-opacity-0">
                                        Download CV
                                    </span>
                                </button>
                            </a>   
                        </div>
                        
                    </div>
    
                    <div class="relative">
                        <img class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />
                        <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="../../assets/Giriraj-Soni.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>`
        return content
    }
}

module.exports = Home;

    