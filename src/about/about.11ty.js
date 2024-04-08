class About{
    data() {
        let metadata = {
            title: "This is homepage",
            draft: true,
            permalink: false,
            position: 1,
            tags: 'about'
        }
        return metadata
    }

    render(){
        let content = `<section class="py-10 bg-white sm:py-16">
        <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <div class="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
                    <span class="relative inline-block">
                        <span class="absolute inline-block w-full h-2 bg-yellow-300 bottom-1.5"></span>
                        <span class="relative"> About Me </span>
                    </span>
                </h2>
            </div>
            <div class="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
                <div>
                    <img class="w-full mx-auto sm:max-w-xs" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/2/business-man.jpg" alt="" />
                </div>
    
                <div>
                    <h3 class="text-lg font-semibold text-gray-900">Hey! I am Giriraj Soni, Full Stack Developer</h3>
                    <p class="mt-4 text-lg text-gray-700">Experienced Software Engineer (2+ yrs) specializing in Full Stack, Microservices, and Web Development. Proficient in JavaScript,
                    Typescript, ReactJS, and MEAN Stack.</p>
                    <p class="mt-4 text-lg text-gray-700">Strong problem solver, collaborative team player, and dedicated to staying updated with industry
                    trends. Designing and developing interactive, user-friendly interfaces.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="py-10 bg-white sm:py-16">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
            <div>
                <div class="flex items-center justify-center w-20 h-20 mx-auto bg-blue-100 rounded-full">
                <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                class="text-blue-600 w-9 h-9" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
           <g>
               <path fill="#231F20" d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64
                   s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M32,38c-7.732,0-14-6.268-14-14
                   s6.268-14,14-14s14,6.268,14,14S39.732,38,32,38z"/>
               <path fill="#231F20" d="M32,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S38.627,12,32,12z M32,34
                   c-5.523,0-10-4.478-10-10s4.477-10,10-10s10,4.478,10,10S37.523,34,32,34z"/>
           </g>
           </svg>
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">Nanded, India</h3>
            </div>

            <div>
                <div class="flex items-center justify-center w-20 h-20 mx-auto bg-orange-100 rounded-full">
                <svg class="text-orange-600 w-9 h-9"version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 512 512"  xml:space="preserve">
           <style type="text/css">
               .st0{fill:#000000;}
           </style>
           <g>
               <path class="st0" d="M159.131,169.721c5.635,58.338,43.367,96.867,96.871,96.867c53.502,0,91.23-38.53,96.867-96.867l7.988-63.029
                   C365.812,44.768,315.281,0,256.002,0c-59.281,0-109.812,44.768-104.86,106.692L159.131,169.721z"/>
               <path class="st0" d="M463.213,422.569l-3.824-24.35c-3.203-20.417-16.035-38.042-34.475-47.361l-80.473-40.693
                   c-2.519-1.274-4.57-3.194-6.289-5.338c-23.297,24.632-51.6,39.12-82.15,39.12c-30.549,0-58.856-14.488-82.152-39.12
                   c-1.719,2.144-3.77,4.064-6.289,5.338l-80.472,40.693c-18.442,9.319-31.272,26.944-34.475,47.361l-3.826,24.35
                   c-1.363,8.692,0.436,21.448,8.222,27.825C67.42,458.907,105.875,512,256.002,512c150.125,0,188.578-53.093,198.988-61.606
                   C462.779,444.017,464.576,431.261,463.213,422.569z"/>
           </g>
           </svg>
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">Age: 25</h3>
            </div>

            <div>
                <div class="flex items-center justify-center w-20 h-20 mx-auto bg-green-100 rounded-full">
                <svg version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                class="text-green-600 h-9 w-9" viewBox="0 0 32 32" xml:space="preserve">
           <style type="text/css">
               .blueprint_een{fill:#111918;}
           </style>
           <path class="blueprint_een" d="M29,5H3v18h26V5z M28,22H4V6h24V22z M31.01,2H0.99C0.443,2,0,2.443,0,2.99v22.02
               C0,25.557,0.443,26,0.99,26H11v2H9.99C9.443,28,9,28.443,9,28.99v0.02C9,29.557,9.443,30,9.99,30h12.02
               c0.547,0,0.99-0.443,0.99-0.99v-0.02c0-0.547-0.443-0.99-0.99-0.99H21v-2h10.01c0.547,0,0.99-0.443,0.99-0.99V2.99
               C32,2.443,31.557,2,31.01,2z M19,28h-6v-3h6V28z M30,24H2V4h28V24z M21,12H11v-1h10V12z M21,14H11v-1h10V14z M21,16H11v-1h10V16z
                M6,8H5V7h1V8z M8,8H7V7h1V8z"/>
           </svg>
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">2+ Years of Experience</h3>
            </div>

            <div>
                <div class="flex items-center justify-center w-20 h-20 mx-auto bg-red-100 rounded-full">
                <?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
                <svg class="text-red-600 w-9 h-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 7.00013H15V12.0001H9V7.00013ZM10.5 8.50013V10.5001H13.5V8.50013H10.5Z" fill="#1F2328"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 4.00024H6V6.00016H4V7.50016H6V11.0112H4V12.5112H6V16.0223H4V17.5223H6V20.0002H18V4.00024ZM7.5 5.50024V18.5002H16.5V5.50024H7.5Z" fill="#1F2328"/>
                </svg>
                </div>
                <h3 class="mt-8 text-lg font-semibold text-black">3 Projects Undertaken</h3>
            </div>
        </div>
    </div>
</section>
    `
            return content;
    }
}


module.exports = About
