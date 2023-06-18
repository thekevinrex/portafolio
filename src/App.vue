<template>
  
	<header>
		<navbar :class="[ clas ]"></navbar>
	</header>

	<div ref="hero">
		<hero-section></hero-section>
	</div>

	<abaut-me></abaut-me>

	<exp></exp>

	<projects></projects>

	<footer class="
		flex
		w-full
		flex-col
		mt-28
		items-center
		text-white
		justify-center
		bg-neutral-900
		min-h-[500px]
		relative
	">
		<foot></foot>
	</footer>

</template>

<script setup>
	import navbar from "./page/navbar.vue";
	import heroSection from "./page/hero-section.vue";
	import abautMe from "./page/abaut-me.vue";
	import exp from "./page/exp.vue";
	import projects from "./page/projects.vue";
	import foot from "./page/footer.vue";

	import { onMounted, inject, ref } from "vue";

	const $theme = inject('$theme');
	const hero = ref(null);
	
	const clas = ref('');

	onMounted(() => {
		$theme.setTheme();
		
		window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => $theme.setTheme()  );
		
		var _this = this;
        window.addEventListener('scroll', function (e) {
			
			clas.value = '';
			if (window.scrollY + 64 >= hero.value.offsetHeight )
				clas.value = 'bg-white dark:bg-neutral-800 text-black';
        });
	});

</script>

