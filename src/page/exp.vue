<template>
    <section class="
        w-full
        h-auto
        flex
        justify-center
        items-center
        dark:text-white
        max-md:px-2
    " id="expertise">

        <div class="
            max-w-screen-md
            flex
            flex-col
            md:flex-row
            gap-2
        ">

            <div class="
                w-full
                h-auto
                flex
                flex-col
                items-center
                justify-center
                border
                p-4
                hover:bg-neutral-700
                hover:text-white
                hover:border-neutral-700
                space-y-3

                dark:border-neutral-700
            ">
                <div class="
                    w-16
                    h-16
                    rounded-full
                    bg-sky-700
                    dark:bg-purple
                    text-white
                    flex
                    items-center
                    justify-center
                ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-laptop" viewBox="0  0 16 16">
                        <path
                            d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                    </svg>
                </div>

                <div class="
                    font-bold
                    text-lg
                ">
                    {{ __('Web Development') }}
                </div>

                <p class="
                    text-sm
                " v-html="__('web-des')">
                </p>

                <div class="
                    flex flex-row gap-2 flex-wrap
                ">
                    <Badge v-for="item in webLangs">{{ item }}</Badge>
                </div>
            </div>


            <div class="
                w-full
                h-auto
                flex
                flex-col
                items-center
                justify-center
                border
                p-4
                space-y-3
                hover:bg-neutral-700
                hover:text-white
                hover:border-neutral-700

                dark:border-neutral-700
            ">
                <div class="
                    w-16
                    h-16
                    rounded-full
                    text-white
                    flex
                    items-center
                    justify-center

                    bg-sky-700
                    dark:bg-purple
                ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                        class="bi bi-buildings" viewBox="0 0 16 16">
                        <path
                            d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z" />
                        <path
                            d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z" />
                    </svg>
                </div>

                <div class="
                    font-bold
                    text-lg
                ">
                    {{ __('Student') }}
                </div>

                <p class="
                    text-sm
                " v-html="__('student-des')">
                </p>

                <div class="
                    flex flex-row
                    flex-wrap
                    gap-2
                ">
                    <Badge v-for="item in studentLangs">{{ item }}</Badge>
                </div>
            </div>



        </div>

    </section>
</template>

<script setup>
import { __ } from '../translator';
import Badge from '../components/badge.vue'
const webLangs = [
    'Html',
    'Css',
    'JavaScript',
    'React',
    'Next.JS',
    'PHP',
    'Laravel',
    'Vue 3',
    'Splade.Js',
    'Clerk',
    'Supabase',
    'Prisma',
    'TailwindCSS',
    'Bootstrap',
];

const studentLangs = [
    'PostreSql',
    'Java',
    'C++',
    __('Database Design'),
];

</script>