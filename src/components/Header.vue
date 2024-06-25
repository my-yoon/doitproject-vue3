<template>
    <header :class="state.Topclass">
        <div class="topmenu">
            <div class="contentbox">
                <div class="logo"><button v-on:click="goToPage('/main')"> <img src="/images/logo.png" alt="이지스퍼블리싱 로고" /> </button></div>
                <div class="system">
                    <button class="login" @click="isShowModal('isLoginShow')">로그인</button>
                    <button class="member" @click="isShowModal('isMemberShow')">회원가입</button>
                </div>
            </div>
        </div>
        <nav>
            <div class="contentbox">
                <ul>
                    <li v-for="(item, index) in state.menulists" :key="index" v-on:click="goToPage(item.link)">
                        <button v-html="item.menutext"></button>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <Modal v-if="state.isLoginShow">
        <div class="modal">
            <div class="modal_header">
                <span class="modal_title">로그인</span>
                <button class="modal-close" @click="isShowModal('isLoginShow')">close</button>
            </div>
            <div class="modal_content">
                <div class="loginform">
                    <div class="form-group">
                        <label for="id">아이디</label>
                        <div class="formBox">
                            <input type="text" id="id" class="form-control" placeholder="아이디를 입력 해 주세요">
                        </div>
                    </div>
                    <div class="form-group" >
                        <label for="pass">패스워드</label>
                        <div class="formBox">
                            <input type="text" id="pass" class="form-control" placeholder="패스워드를 입력 해 주세요" >
                        </div>
                    </div>
                </div>
                <div class="btnwrap">
                    <button type="button" class="btn btn-login">로그인</button>
                </div>
            </div>
        </div>
    </Modal>
    <Modal v-if="state.isMemberShow">
        <div class="modal">
            <div class="modal_header">
                <span class="modal_title">회원가입</span>
                <button class="modal-close" @click="isShowModal('isMemberShow')">close</button>
            </div>
            <div class="modal_content">
                <form @submit="joinMember">
                    <div class="memberform">
                        <div class="form-group" v-for="(item, index) in state.memberform" :key="index">
                            <label :for="item.id">{{ item.label }}</label>
                            <div class="formBox">
                                <template v-if="item.id==='EMAIL'">
                                    <span class="radiobox"><input type="radio" value="Y" id="typeY"  v-model="formData[item.id]"><label for="typeY">예</label></span>
                                    <span class="radiobox"><input type="radio" value="N" id="typeN"  v-model="formData[item.id]"><label for="typeN">아니오</label></span>
                                </template>
                                <template v-else-if="item.id==='CHECK'">
                                    <span class="checkbox"><input type="checkbox" value="html" id="check1" v-model="formData[item.id]"><label for="check1">HTML/CSS</label></span>
                                    <span class="checkbox"><input type="checkbox" value="javascript" id="check2" v-model="formData[item.id]"><label for="check2">자바스크립트</label></span>
                                    <span class="checkbox"><input type="checkbox" value="python" id="check3" v-model="formData[item.id]"><label for="check3">파이선</label></span>
                                    <span class="checkbox"><input type="checkbox" value="Vue.js" id="check4" v-model="formData[item.id]"><label for="check4">Vue.js</label></span>
                                    <span class="checkbox"><input type="checkbox" value="angular" id="check5" v-model="formData[item.id]"><label for="check5">앵귤러</label></span>
                                    <span class="checkbox"><input type="checkbox" value="react" id="check6" v-model="formData[item.id]"><label for="check6">리액트</label></span>
                                    <span class="checkbox"><input type="checkbox" value="data" id="check7" v-model="formData[item.id]"><label for="check7">자료구조/알고리즘</label></span>
                                    <span class="checkbox"><input type="checkbox" value="cad" id="check8" v-model="formData[item.id]"><label for="check8">오토캐드</label></span>
                                </template>
                                <template v-else>
                                    <input type="text" class="form-control" :id="item.id" :placeholder="item.placeholder" v-model="formData[item.id]">
                                    <div v-if="item.id==='ID'"><button type="button">중복확인</button></div>
                                </template>
                            </div>
                            <div class="form-text">{{ item.description }}</div>
                        </div>
                    </div>
                    <div class="btnwrap half">
                        <button type="submit" class="btn btn-login">확인</button>
                        <button type="reset" class="btn btn-cancel">취소</button>
                    </div>
                </form>
            </div>
        </div>
    </Modal>
</template>
<script setup>
import { reactive, nextTick, onMounted, onBeforeUnmount } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();

const state = reactive({
    menulists: [
        { menutext: '도서 소개', link: '/book' },
        { menutext: '자료실', link: '/reference' },
        { menutext: '동영상 강의', link: '/movieclass' },
        { menutext: '교재 샘플', link: '/classsample' },
        { menutext: '회사 소개', link: '/company' }
    ],
    isLoginShow: false,
    isMemberShow: false,
    memberform: [
        {label: '아이디', id: 'ID', placeholder: '아이디를 입력하세요', description: '4 ~ 15자리 이내의 영문과 숫자로만 입력하세요'},
        {label: '비밀번호', id: 'PASS', placeholder: '비밀번호를 입력하세요',  description: '8자리 이상의 영문과 숫자로만 입력하세요'},
        {label: '이메일 수신', id: 'EMAIL',  placeholder: '',  description: '※ 이메일 수신을 허락하면 독자 혜택을 받을 수 있어요'},
        {label: '관심 분야 선택"', id: 'CHECK',  placeholder: '', description: '※ 관심 분야를 선택하세요. 여러 개 선택할 수 있어요'}
    ]
});
const formData = reactive({
    ID: '',
    PASS: '',
    EMAIL: '',
    CHECK: []
});

const goToPage = (target) => {
    if (route.path !== target) {
        router.push(target);
    }
};
const isShowModal = (type) => {
    state[type] = !state[type];
};
const joinMember = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formData));
    nextTick(() => {
        formData.ID = '';
        formData.PASS = '';
        formData.EMAIL = '';
        formData.CHECK = [];
    });
    
};
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});
const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const headerTop = document.querySelector('header').clientHeight;
    if (scrollTop < headerTop) {
        state.Topclass = '';
    } else {
        state.Topclass = 'scrollTop';
    }
};
</script>

