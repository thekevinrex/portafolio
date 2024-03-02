<template>
    <section id="home" class="
        w-full
        h-full
        min-h-screen
        
        flex 
        flex-col
        lg:flex-row

        items-center
        justify-center
        
        overflow-hidden
        relative
    ">

        <ul class="bg-bubbles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>

        <div class="
            max-w-3/5
            w-full
            h-auto
            flex
            p-20
            dark:text-white
        ">
            <div class="
                flex
                flex-col
                w-full
                space-y-5
            ">

                <img src="../assets/20160804_140543-1-removebg-preview.png"
                    class="flex lg:hidden w-32 h-32 rounded-full" alt="User image">

                <span class="
                    text-2xl
                    tracking-wide
                    flex
                    items-end
                    font-black
                ">
                    {{ __('¡Hello! I`m Kevin González') }}
                    <div class="
                        w-8
                        rounded-full
                        h-1
                        ml-1
                        mb-1
                        bg-purple 
                        dark:bg-sky-700
                    "></div>
                </span>

                <Typed :options="options">
                    <div class="flex flex-row">
                        <h1 class="
                            w-auto
                            text-3xl
                            sm:text-4xl
                            md:text-5xl
                            lg:text-6xl
                            font-black
                        ">
                            <span>{{ __('I´m') }}</span>

                            <span class="typing text-purple dark:text-sky-700 ml-3 break-all"></span>

                        </h1>
                    </div>
                </Typed>

                <p class="
                    w-auto
                    max-w-prose
                    text-lg
                " v-html="__('hero-des')"></p>


                <div class="flex mt-4 gap-3 flex-wrap">

                    <a href="CV.pdf" download class="
                        py-2
                        px-4
                        font-bold
                        text-base
                        bg-slate-800
                        text-white
                        shadow-lg
                        rounded-md
                        hover:bg-purple
                        dark:hover:bg-sky-700
                    ">{{ __('Download CV') }}</a>

                    <a :href="socialLinks.mail" class="
                        py-2
                        px-4
                        font-bold
                        text-base
                        bg-slate-800
                        text-white
                        shadow-lg
                        rounded-md
                        hover:bg-purple
                        dark:hover:bg-sky-700
                    ">{{ __('Hire me') }}</a>

                </div>
            </div>
        </div>

        <div class="
            shrink-0
            w-[530px]
            h-screen
            lg:flex
            hidden
        ">
            <img src="../assets/20160804_140543-1-removebg-preview.png" class="
                w-full
                relative
                h-full
                animate-user-image
                top-0
                right-[50px]
            " alt="User image">
        </div>

    </section>
</template>

<script>
</script>

<script setup lang="ts">


import { inject } from 'vue';
import { __ } from '../translator';
import { Typed } from "@duskmoon/vue3-typed-js";

let strings = [
    String(__('Coder')),
    String(__('Designer')),
];

const options = {
    strings: strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500,
}

const socialLinks = inject('socialLinks');

</script>