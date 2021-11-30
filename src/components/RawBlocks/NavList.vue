<template>
    <nav>
        <ol class="list">
            <li class="list-item">
                <a class="list-link" href="/#about">About</a>
            </li>
            <li class="list-item">
                <a class="list-link" href="/#about">Experience</a>
            </li>
            <li class="list-item">
                <a class="list-link" href="/#about">Contact</a>
            </li>
        </ol>
    </nav>
</template>

<script>
export default {
    name: "NavList"
}
</script>

<style scoped lang="scss">
.list {
    display: flex;
    counter-reset: item;

    font-size: 13px;

    color: #ccd6f6;
    font-family: $font_mono;
}

.list-link {
    display: inline-block;
    padding: 10px;
    margin: 0 5px;
    text-decoration: none;
    color: inherit;
}

.list-link::before {
    counter-increment: item;
    content: "0" counter(item) ".";
    margin-right: 5px;
    color: $green_color;

}
</style>