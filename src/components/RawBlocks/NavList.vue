<template>
    <nav>
        <ol class="list" :class="classList">
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
    name: "NavList",
    props: {
        classList: String
    }
}
</script>

<style scoped lang="scss">
.list {
    display: flex;
    counter-reset: item;

    font-size: 13px;
    color: #ccd6f6;
}

.list-link {
    display: inline-block;
    padding: 10px 15px;
    margin: 0;
    text-decoration: none;
    color: inherit;
}

.list-link::before {
    counter-increment: item;
    content: "0" counter(item) ".";
    margin-right: 5px;
    color: $green_color;
}

.menu {
    &.list {
        flex-direction: column;
        text-align: center;
        margin-bottom: 50px;
        font-family: $font_mono;

        font-size: clamp($fz-sm, 4vw, $fz-lg);;
    }

    .list {
        &-item {
            margin-bottom: 15px;
        }
        &-link {
            &::before {
                display: block;
                margin: 0;
            }
        }
    }
}
</style>