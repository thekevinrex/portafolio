<template>
    <section id="projects" class="
        w-full
        flex 
        justify-center
        items-center
        flex-col
        max-w-screen-md
        dark:text-white
        gap-y-5
        px-4 md:px-0
    ">

        <div class="
            flex
            flex-col
            space-y-2
            w-full
        ">
            <h1 class="
                text-3xl
                font-bold
                flex
                tracking-tight
                items-center gap-x-2
            ">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-presentation" width="32"
                    height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 4l18 0" />
                    <path d="M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10" />
                    <path d="M12 16l0 4" />
                    <path d="M9 20l6 0" />
                    <path d="M8 12l3 -3l2 2l3 -3" />
                </svg>
                {{ __('Recent Projects') }}
            </h1>
        </div>

        <div class="flex flex-col w-full h-auto gap-y-5">

            <div class="
                w-full
                flex
            " v-for="(item, index) in projects" :key="index">
                <projectItem :item="item" />
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
import projectItem from "../components/project-item.vue";

const socialLinks = inject('socialLinks');
const projects = [
    {
        name: __('TCP Manager'),
        image: 'projects/tcp_manager.png',
        des: __('TCP_manager_des'),
        url: [
            {
                name: __('see_live'),
                href: 'https://tcp-manager.vercel.app/',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-external-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" /><path d="M11 13l9 -9" /><path d="M15 4h5v5" /></svg>`
            },
        ],
        tags: ['Next Js', 'React', 'TailwindCSS', 'Clerk', 'Supabase', 'Prisma', 'Vercel']
    },
    {
        name: __('OJS Migrator'),
        image: 'projects/ojs_migrator.png',
        des: __('ojs_migrator_des'),
        url: [
            {
                name: __('see_github'),
                href: 'https://github.com/thekevinrex/ojs-migrator',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>`
            },
        ],
        tags: ['PHP', 'Laravel', 'TailwindCSS', 'Splade JS', 'Vue Js']
    },
    {
        name: __('MVC Framework'),
        image: 'projects/mvc_framework_2.png',
        des: __('mvc_framework_des'),
        url: [
            {
                name: __('see_github'),
                href: 'https://github.com/thekevinrex/mvc-framework',
                icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>`
            },
        ],
        tags: [__('Work in progress'), 'PHP', 'Vue Js']
    },

]

</script>