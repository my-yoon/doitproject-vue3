<template>
    <section class="subpage">
        <div class="contentbox">
            <div class="titlebar">
                <h1>{{ state.pagetit  }}</h1>
                <div class="pagenavi">
                    <span>홈</span>
                    <strong>{{ state.pagetit }}</strong>
                </div>
            </div>
            <slot></slot>
        </div>
    </section>
</template>
<script setup>
import { reactive, computed } from 'vue';
const props = defineProps(
    {
        pagetit: String
    });
const state = reactive({
    pagetit: computed(() => props.pagetit)
});
</script>