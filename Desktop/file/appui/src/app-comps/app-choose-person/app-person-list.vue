<template>
    <div class="app-parent app-person-list">
        <van-nav-bar :z-index="2999" @click-left="$root.appBack" :title="title" left-text="返回" left-arrow>
            <!-- <van-icon @click="showQuery=!showQuery" size="22px" :name="require('../../assets/imgs/query.png')" slot="right"  /> -->
        </van-nav-bar>
        <div class="app-main" style="background:#F8F8F8;">
            <app-list ref="appPersonList">
                <template v-slot:default="item">
                    <div style="position:relative;" class="app-list" :class="{'sel-border': item.data.selected}" @click="toggleItem(item.data)">
                        <div class="app-list-item">
                            <span>{{item.data.personName}}</span>
                        </div>
                    </div>
                </template>
            </app-list>
        </div>
        <van-popup v-model="showQuery" position="top" style="background:transparent;">
            <div class="popup-top"></div>
            <van-cell-group>
                <van-field v-model="personName" label="人员名称" type="text" />
                <van-button @click="queryData" size="large" type="info" style="margin: 4vw 0;">查询</van-button>
            </van-cell-group>
        </van-popup>
        <div class="deal-btn" :style="{'right':selArr.length>=0?'4vw': '-15vw'}">
            <img @click="sureSel" src="../../assets/imgs/sure.png" style="width: 10vw" />
            <img @click="cancelSel" src="../../assets/imgs/cancel.png" style="width: 11vw;margin-top:4vw;" />
        </div>
    </div>
</template>

<script>
import * as appBase from '../../api/app-base'
import appConstant from '@/utils/appConstant.js'
import Vue from 'vue'
export default {
    name: '',
    data() {
        return {
            pageInfo: {curPageNum: 1, rowOfPage: appConstant.rowOfPage},
            dataArr: [],
            showQuery: false,//是否显示查询条件
            personName: '',
            title: '人员',

            selArr: [],
            hisArr: [],
            multi: false,
            selItem: undefined,
            sureMethod: undefined,
            queryMethod: '',
        }
    },
    mounted(){
        this.multi = this.$route.query.multi || false;
        this.queryMethod = this.$route.query.queryMethod;
        this.sureMethod = this.$route.query.sureMethod;
        this.hisArr = this.$route.query.persons;
    },
    methods: {
        sureSel(){
            this.sureMethod(this.selArr);
            this.$root.appBack();
        },
        cancelSel(){
            this.$root.appBack();
        },
        toggleItem(data){
            if(this.multi){
                Vue.set(data, 'selected', !data.selected);
                if(data.selected){
                    this.selArr.push(data);
                }else {
                    this.selArr.splice(this.selArr.indexOf(data),1);
                }
            }else {
                if(this.selItem){
                    Vue.set(this.selItem, 'selected', false);
                }
                Vue.set(data, 'selected', true);
                this.selItem = data;
                this.selArr = [this.selItem]
            }
        },
        clearSel(){
            this.selArr = [];
        },
        queryData(){
            this.showQuery = false;
            this.$refs.appPersonList.onRefresh();
            this.clearSel();
        },
        dataList(pageInfo){
            this.appCommon.tloading();
            let params = {
                modelData: JSON.stringify({
                    instanceId: this.instanceId,
                    taskId: this.taskId,
                    pageInfo: pageInfo,
                }),
            };
            return new Promise((resolve)=>{
                appBase[this.queryMethod](params).then((rdata)=>{
                    this.appCommon.tloadingc();
                    if(this.hisArr.length > 0){
                        for(let data of rdata.list){
                            for (let sel of this.hisArr) {
                                if (data.partyId == sel.partyId) {
                                    this.toggleItem(data);
                                }
                            }
                        }
                    }
                    resolve(rdata);
                })
            });
        },
    }
}
</script>

<style lang="scss" scoped>
.app-person-list{
    .deal-btn{
        display: flex;
        flex-direction: column;
        position:absolute;bottom:4vw;right: 4vw;
        transition: all 0.5s ease-in-out;
    }
    .sel-border{
        border: 1px solid green;
        box-sizing: border-box;
    }
    .sel-border:after{
        content: '';
        position: absolute;
        bottom: -3px;
        right: -10px;
        border-bottom: 15px solid green;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        transform: rotate(135deg)
    }
}
</style>