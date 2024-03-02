<template>


    <a target="_blank" rel="noopener noreferrer" v-if="href" :href="href" class="
                            py-1
                            border
                            border-slate-400
                            px-3
                            font-bold
                            text-sm
                            text-center
                            rounded-full
                            hover:shadow-md
                            hover:scale-105
                            flex items-center gap-x-2
                            transition-all
                            dark:hover:bg-purple
                            hover:bg-sky-700
                            hover:text-white
                        ">

        <slot></slot>
    </a>

</template>

<script setup>
const props = defineProps(['href']);
</script>