class Experience {
    data(){
        let metadata = {
            title: "This is homepage",
            draft: true,
            permalink: false,
            position: 1,
            tags: 'experience'
        }
        return metadata
    }


    render(){
        let content = `
        <section class="flex flex-col w-1/2 gap-4 py-10 mt-5 md:p-0">
            <h1 class="text-3xl font-semibold text-black">Work Experience and Education</h1>
            <ol class="mt-10 relative border-s border-gray-200 dark:border-gray-700">
                <li class="mb-10 ms-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2017 - May 2021</time>
                    <h3 class="text-lg font-semibold text-black">MGM's College of Engineering, Nanded</h3>
                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Passed with 7.46 CGPA</p>
                </li>                  
                <li class="mb-10 ms-4">
                    <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">November 2021</time>
                    <h3 class="text-lg font-semibold text-black">Exela Technologies</h3>
                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Software Engineer</p>
                </li>
            </ol>
        </section>`

        return content
    }
}

module.exports = Experience;