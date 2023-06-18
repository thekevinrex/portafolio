<template>
    <section id="about_mi" class="
        bg-neutral-900
        text-white
        py-[5%]
        w-full
        flex
        justify-center
        flex-col
        items-center
        space-y-5
    ">
        <h1 class="
            text-2xl
            font-bold
        ">
            {{ __('Abaut Kevin González Gómez') }}
        </h1>

        <div class="
            w-auto
            text-sm
            max-w-[600px]
            text-center
            p-5
        ">
            <p class="mb-5" v-html="__('abaut-des')">
            </p>
            
        </div>

    </section>
</template>

<script setup>
import { __ } from '../translator';



</script>