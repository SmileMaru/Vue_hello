<template>
    <div class="cursor"></div>
</template>
<style>
    .cursor {
    z-index: 999;
    position: fixed;
    background: #528260;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    pointer-events: none;
    box-shadow: 0 0 20px #9D8977,
        0 0 60px #e8e8e4,
        0 0 100px #ddbea9;
    animation: colors 5s infinite;
    transform: translate(-50%, -50%);
    display: none;
}

@keyframes colors {
    0% {
        filter: hue-rotate(0deg);
    }

    100% {
        filter: hue-rotate(360deg);
    }
}

.cursor:before {
    content: '';
    position: absolute;
    background: #2696E8;
    width: 50px;
    height: 50px;
    opacity: 0.2;
    transform: translate(-30%, -30%);
    border-radius: 50%;
}
</style>
<script>
    export default {
        mounted() {
            const cursor = document.querySelector(".cursor");
        var timeout;

        //follow cursor on mousemove
        document.addEventListener("mousemove", (e) => {
            let x = e.pageX;
            let y = e.pageY;

            cursor.style.top = y + "px";
            cursor.style.left = x + "px";
            cursor.style.display = "block";

            //cursor effects when mouse stopped
            function mouseStopped() {
                cursor.style.display = "none";
            }
            clearTimeout(timeout);
            timeout = setTimeout(mouseStopped, 1000);
        });

        //cursor effects when mouseout
        document.addEventListener("mouseout", () => {
            cursor.style.display = "none";
        });
        }
    }
</script>