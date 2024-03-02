<template>
    <section id="about_mi" class="
        bg-neutral-900
        text-white
        w-full
        flex
        justify-center
        flex-col
        relative
        pt-10
        mb-5
        items-center
    ">

        <div class="
            space-y-3
            w-full
            max-w-screen-md
        ">
            <h1 class="text-3xl flex items-center font-bold gap-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="32"
                    height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                    <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                </svg>
                {{ __('Abaut mi') }}
            </h1>

            <p class="mb-5 text-base max-w-prose" v-html="__('abaut-des')">
            </p>
        </div>
        <svg alt="" class="-mb-1 w-full" height="120px" preserveAspectRatio="none" role="presentation" version="1.1"
            viewBox="0 0 1440 278" xmlns="http://www.w3.org/2000/svg">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <path
                    d="M0,260.670469 C268,291.980818 533.333333,258.847538 796,161.270627 C1058.66667,63.6937169 1273.33333,9.93684108 1440,0 L1440,278 L0,278 L0,260.670469 Z"
                    class="fill-gray-100 dark:fill-neutral-800">
                </path>
            </g>
        </svg>

    </section>
</template>

<script setup>
import { __ } from '../translator';



</script>