<template>
    <section class="
        w-full
        h-auto
        flex
        justify-center
        items-center
        dark:text-white
    " id="expertise">

        <div class="
            md:max-w-[80%]
            max-w-[90%]
            flex
            flex-wrap
            flex-row
            p-10
        ">

            <div class="
                w-full
                md:w-1/2
                h-auto
                flex
                flex-col
                items-center
                justify-center
                border-2
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-laptop" viewBox="0  0 16 16">
                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
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
                    px-4
                " v-html="__('web-des')">
                </p>

                <div class="
                    flex flex-row justify-evenly flex-wrap
                ">
                    <span class="bg-sky-600 dark:bg-purple font-semibold text-sm py-[2px] m-1 text-white rounded-md px-1" v-for="item in webLangs">{{ item }}</span>
                </div>
            </div>


            <div class="
                w-full
                md:w-1/2
                h-auto
                flex
                flex-col
                items-center
                justify-center
                border-2
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-buildings" viewBox="0 0 16 16">
                        <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z"/>
                        <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z"/>
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
                    px-4
                " v-html="__('student-des')">
                </p>

                <div class="
                    flex flex-row justify-evenly
                    flex-wrap
                ">
                    <span class="bg-sky-600 dark:bg-purple font-semibold text-sm py-[2px] m-1 text-white rounded-md px-1" v-for="item in studentLangs">{{ item }}</span>

                </div>
            </div>



        </div>
        
    </section>
</template>

<script setup>
    import { __ } from '../translator';

    const webLangs = [
        'Html',
        'Css',
        'JavaScript',
        'PHP',
        'Laravel',
        'Vue Js',
        'Splade Js',
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