<template>
    <button
        class="resume-button"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "BaseButton",
    data() {
        return {
        }
    },
}
</script>

<style scoped lang="scss">
.resume-button {
    display: inline-block;
    padding: 11px 15px;
    border-radius: 3px;

    color: $green_color;
    border: 1px solid $green_color;
}
</style>