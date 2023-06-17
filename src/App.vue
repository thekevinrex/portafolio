<template>
  
	<header>
		<navbar></navbar>
	</header>

	<hero-section>
		
	</hero-section>
	
</template>

<script setup>
	import navbar from "./page/navbar.vue";
	import { onMounted, inject } from "vue";

	const $theme = inject('$theme');

	onMounted(() => {
		$theme.setTheme();

		window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => $theme.setTheme()  );
	});

</script>

