<template>
    <div>
        To be continued.
    </div>
</template>
<script>
    export default{
        beforeRouteEnter(to, from) {
        console.log("beforeRouteEnter");
        setTimeout(() => {
        document.getElementById("loading")?.classList.remove("--active");
        }, 1000);
    },
        beforeRouteLeave(to, from) {
        console.log("beforeRouteLeave");
        document.getElementById("loading")?.classList.add("--active");
  },
    }
</script>