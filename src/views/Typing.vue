<template>
	<NotFound></NotFound>
	<div class="go_top">
		<div class="go_top_wrapper">
			
		</div>
	</div>
</template>
<script>

import NotFound from "../components/NotFound.vue";

	export default{
    components: { NotFound },
		methods(){

		},
		beforeRouteEnter(to, from) {
        console.log('beforeRouteEnter about')
        setTimeout(() => {
            document.getElementById('loading')?.classList.remove('--active');
        }, 1000)
		},
		beforeRouteLeave(to, from) {
			console.log('beforeRouteLeave about')
			document.getElementById('loading')?.classList.add('--active');
		},
	}
</script>

<style scoped>


</style>