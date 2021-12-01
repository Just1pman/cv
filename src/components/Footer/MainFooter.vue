<template>
    <footer class="main-footer">
        <p class="main-footer__description">Designed & Built by Alexander Olkhovik</p>
    </footer>
</template>

<script>
export default {
    name: "MainFooter"
}
</script>

<style scoped lang="scss">
.main-footer {
    padding: 20px 0;
    color: $light-slate;
}
.main-footer__description {
    font-family: $font_mono;
    font-size: 12px;
    text-align: center;
}
</style>