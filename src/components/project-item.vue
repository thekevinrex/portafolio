<template>

    <article class="w-full h-auto rounded-md flex flex-col">

        <header class="flex flex-col gap-y-1 mb-4">

            <h2 class="text-2xl font-bold text-purple dark:text-purple-800">
                {{ item.name }}
            </h2>

            <p class="text-sm max-w-prose" v-html="item.des"></p>

            <div class="flex flex-row flex-wrap gap-2">
                <Badge v-for="tag in item.tags">
                    {{ tag }}
                </Badge>
            </div>
        </header>

        <img v-if="item.image" :src="item.image" alt="Project image"
            class="w-full h-auto aspect-video rounded-md shadow-md">

        <div v-if="Object.keys(item.url).length > 0" class="flex py-3 flex-row space-x-4">
            <ProjectLink v-for="url in item.url" :href="url.href" :key="url.href" v-html="url.icon + ' ' + url.name">
            </ProjectLink>
        </div>
    </article>

</template>


<script setup>
import { __ } from '../translator';
import Badge from './badge.vue'
import ProjectLink from './project-link.vue'

const props = defineProps(['item']);

</script>