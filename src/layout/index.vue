<template>
    <section id="wrap">
        <h1 class="blind">Do it! 프런트엔드 UI 개발 with Vue.js</h1>
        <Header />
        <section id="container">
            <RouterView /> <!-- 각 메뉴에 따라 변경할 컴포넌트 영역의 라우터 태그 -->
        </section>
        <Footer />
    </section>
</template>
<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
</script>