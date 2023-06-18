<template>
    <section id="home" class="
        w-full
        h-full
        md:h-screen
        flex 
        flex-row
        flex-wrap
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
            md:w-3/5
            w-full
            h-auto
            flex
            flex-wrap
            justify-center
            items-center
            mt-16
            p-[10%]
            dark:text-white
        ">
            <div class="
                flex
                flex-col
                w-auto
                space-y-5
            ">
                <span class="
                    text-2xl
                    tracking-wide
                    flex
                    items-end
                ">
                    {{ __('Hello') }}
                    <div class="
                        w-8
                        rounded-full
                        h-1
                        ml-1
                        mb-1
                        bg-purple 
                        dark:bg-sky-700
                    "
                    ></div>
                </span>

                <Typed :options="options">
                    <div class="flex flex-row">
                        <h1 class="
                            w-auto
                            text-6xl
                            sm:text-6xl
                            md:text-5xl
                            lg:text-7xl
                            font-black
                        ">
                            <span>{{ __('I´m') }}</span>
                            
                                <span class="typing text-purple dark:text-sky-700 ml-3 break-all"></span>
                                
                            </h1>
                    </div>
                </Typed>

                <p class="
                    w-auto
                    flex
                    max-w-[80%]
                    text-sm
                ">
                    {{ __('hero-des') }}
                </p>

                <div class="flex justify-center space-x-3">

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
            md:w-2/5
            w-full
            h-auto
            flex

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
        String(__('Coder')) ,
        String(__('Designer')),
    ];

    const options = {
        strings : strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 1500,
    }

    const socialLinks = inject('socialLinks');

</script>