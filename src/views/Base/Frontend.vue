<template>
    <div class="content">
        <MainHeader></MainHeader>
        <main class="main-content">
            <Home></Home>
        </main>
        <MainFooter></MainFooter>
    </div>
</template>

<script>
import Home from "@/views/Home";
import MainHeader from "@/components/Header/MainHeader";
import MainFooter from "@/components/Footer/MainFooter";

export default {
    name: "Frontend",
    components: {
        Home,
        MainHeader,
        MainFooter
    }
}
</script>

<style lang="scss">
.content {
    color: $slate;
    font-size: $fz-xl;
    line-height: 1.1;
    font-family: $font_sans;
    background-color: $background-color;
}

ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
}

.container {
    margin: 0 auto;
    max-width: 930px;
}

.big-heading {
    font-size: clamp(40px, 8vw, 80px);
    font-weight: 600;
    font-family: $font_sans;
}

.section {
    margin: 100px 0;
    counter-reset: section;
    @include media_screen($tablet-screen) {
        margin: 80px 0;
    }
    @include media_screen($mobile-screen) {
        margin: 60px 0;
    }
}

.section-title {
    display: flex;
    font-size: clamp(26px,5vw, $fz-heading);
    font-weight: 500;
    color: $lightest-slate;
    align-items: center;
    width: 100%;
    margin-bottom: 25px;
    line-height: 30px;

    &::before {
        counter-increment: section 1;
        content: "0" counter(section) ".";
        margin-right: 10px;
        color: $green_color;
    }

    &::after {
        content: "";
        display: inline-block;
        height: 1px;
        width: 50px;
        flex-grow: 1;
        background-color: $lightest-navy;
        margin-left: 20px;
        position: relative;
        top: -5px
    }
}

.main-content {
    padding: 0 50px 100px 50px;

    @include media_screen($mobile-screen) {
        padding: 0 25px 100px 25px;
    }
}

</style>