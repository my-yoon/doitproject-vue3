<template>
    <Subpage :pagetit="'교재 샘플'">
        <div class="classsample">
            <div class="subpageguide">대학이나 학원 등 교육 기관에서 이지스퍼블리싱 도서를 교재로 채택하고 싶으신 선생님은 아래 내용대로 접수해 주세요.</div>
            <form @submit="classCall">
                <div class="memberform">
                    <div class="form-group" v-for="(item, index) in state.classform" :key="index">
                        <label :for="item.id">{{ item.label }}</label>
                        <div class="formBox">
                            <template v-if="item.id==='checkedtype'">
                                <span class="checkbox"><input type="checkbox" value="paper" id="check1" v-model="formData[item.id]"><label for="check1">종이책</label></span>
                                <span class="checkbox"><input type="checkbox" value="ebook" id="check2" v-model="formData[item.id]"><label for="check2">전자책</label></span>
                                <span class="checkbox"><input type="checkbox" value="textbook" id="check3" v-model="formData[item.id]"><label for="check3">강의자료</label></span>
                            </template>
                            <template v-else>
                                <input type="text" class="form-control" :id="item.id" :placeholder="item.placeholder" v-model="formData[item.id]">
                                
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
    </Subpage>
</template>
<script setup>
import { reactive, nextTick } from 'vue';
import Subpage from '@/components/Subpage.vue';
const state = reactive({
    classform: [
        {label: '요청도서', id: 'bookname', placeholder: '', description: '도서명을 확인 후 정확하게 입력해 주세요'},
        {label: '기관이름', id: 'companyname', placeholder: '',  description: '기관이름을 정확하게 입력해 주세요'},
        {label: '학과/과정', id: 'class',  placeholder: '',   description: '요청이 필요한 학과/과정을 입력주세요'},
        {label: '이름', id: 'name',  placeholder: '', description: '담당자 이름을 입력해 주세요'},
        {label: '연락처', id: 'phonenum',  placeholder: '',  description: '연락이 가능한 번호를 입력 주세요'},
        {label: '이메일', id: 'email',  placeholder: '',  description: '연락이 가능한 이메일을 입력 주세요'},
        {label: '추가 요청 및 건의사항"', id: 'memo',  placeholder: '', description: '요청사항을 작성해 주세요'},
        {label: '신청유형"', id: 'checkedtype',  placeholder: '',  description: '※ 관심 분야를 선택하세요. 여러 개 선택할 수 있어요'}
    ]
});
const formData = reactive({
    bookname: '',
    companyname: '',
    class: '',
    name: '',
    phonenum: '',
    email: '',
    memo: '',
    checkedtype: []
});
const classCall = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formData));
    nextTick(() => {
        formData.bookname = '';
        formData.companyname = '';
        formData.class = '';
        formData.name = '';
        formData.phonenum = '';
        formData.email = '';
        formData.memo = '';
        formData.checkedtype = [];
    });
};
</script>