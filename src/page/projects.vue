<template>
    <section id="projects" class="
        w-full
        flex 
        justify-center
        items-center
        flex-col
        dark:text-white
    ">
        
        <div class="
            flex
            justify-center
            items-center
            flex-col
            space-y-5
            mb-5    
            px-2
        ">
            <h1  class="
                text-2xl
                font-bold
                tracking-tight
            ">
                {{ __('Recent Projects') }}
            </h1>

            <p>
                {{ __('projects-des') }}
            </p>
        </div>

        <div class="block w-full h-auto max-w-screen-xl">

            <div class="
                xl:w-1/4
                md:w-1/3
                sm:w-1/2
                w-full
                flex
                p-4
            " :class="[ item.float ]" v-for="(item, index) in projects" :key="index">
                <div class="
                    w-full 
                    h-auto 
                    border 
                    dark:border-neutral-700
                    overflow-hidden 
                    rounded-md flex 
                    flex-col
                ">
                    <div class="w-full flex h-[150px]">
                        <img :src="item.image" alt="Project image">
                    </div>

                    <h2 class="
                        text-lg
                        font-bold
                        py-2
                        px-2
                    ">
                        {{ item.name }}
                    </h2>

                    <p class="
                        px-2
                        py-1
                        text-sm
                    " v-html="item.des">
                    </p>

                    <div class="
                        flex flex-row
                        p-2
                        flex-wrap
                    ">
                        <span class="bg-sky-600 dark:bg-purple font-semibold text-sm py-[2px] m-1 text-white rounded-md px-1" v-for="tag in item.tags">{{ tag }}</span>

                    </div>

                    <div v-if="Object.keys(item.url).length > 0" class="flex justify-between flex-row space-x-4 p-2">
                        <a target="_blank" rel="noopener noreferrer" v-if="item.url.github" :href="item.url.github" class="
                            py-2
                            w-full
                            px-4
                            font-bold
                            text-sm
                            text-center
                            rounded-full
                            dark:hover:bg-purple
                            hover:bg-sky-700
                            hover:text-white
                        ">{{ __('See on Github') }}</a>
                    </div>
                </div>
            </div>

        </div>


        <div class="my-5">

            <a target="_blank" rel="noopener noreferrer" :href="socialLinks.github" class="
                py-2
                px-4
                font-bold
                text-base
                bg-sky-800
                text-white
                shadow-lg
                rounded-md
                hover:bg-sky-700

                dark:bg-purple
                dark:hover:bg-purple-900
            ">{{ __('See more projects') }}</a>

        </div>

    </section>
</template>

<script setup>
import { inject } from 'vue';
import { __ } from '../translator';

const socialLinks = inject('socialLinks');
const projects = [

    {
        name : __('Portafolio'),
        image : 'projects/portafolio.png',
        des  : __('portafolio-des'),
        url  : {
            github : 'https://github.com',
        },
        float : 'float-left',
        tags : ['Html', 'TailwindCSS', 'Vue Js']
    },

]

</script>