<template>
    <div class="app-dropmenu">
        <van-dropdown-menu>
            <van-dropdown-item @change="dpmChange" v-model="curVal" :options="options" />
        </van-dropdown-menu>
        
    </div>
</template>

<script>
export default {
    name: '',
    props: {
        dropName: {
            type: String,
        },
        dropFilter: {
            type: String,
        },
        title: {
            type: String,
            default: '下拉'
        },
        value: {
            type: String,
        },
        dpData: {
            type: Array
        },
        empty: {
            type: Boolean,
            default: true,
        }
    },
    data() {
        return {
            curVal: '',
            options: [],
        }
    },
    mounted(){
        if(this.dpData && this.dpData.length > 0){
            this.options = this.dpData;
            this.setDpValue(this.dpData);
        }else if(this.dropName) {
            this.dropInfo();
        }
    },
    watch: {
        dpData: function(nval, oldVal) {
            this.columns = nval;
            this.setDpValue(nval);
        },
        value: function(nval, oldVal){
            if(nval !== oldVal){
                this.curVal = nval;
                if(this.options.length>0){
                    this.emitMethod();
                }
            }
        }
    },
    methods: {
        emitMethod(){
            let curItem = undefined;
            for(let item of this.options){
                if(item.value === this.curVal){
                    curItem = item;
                    break;
                }
            }
            if(curItem){
                this.$emit("dpmChange", curItem);
                this.$emit("input", curItem.value);
            }
        },
        dropInfo(){
            let data = this.$store.getters['moduleDrop/getDropData'](this.dropName);
            if(data){
                this.columns = data;
                this.setDpValue(data);
            }else {
                this.appCommon.once(this.dropName, (data)=>{
                    this.columns = data;
                    this.setDpValue(data);
                });
                this.$store.dispatch('moduleDrop/asyncDropData', {dropName: this.dropName, filter: this.dropFilter, cashFlag: this.cashFlag});
            }
        },
        setDpValue(rdata){
            let tempArr = [];
            for(let item of rdata){
                tempArr.push({text: item.label,value: item.value})
            }
            this.options = tempArr;
            this.curVal = this.value;
            if (!this.curVal && !this.empty) {
                this.curVal = tempArr[0].value;
            }
            this.emitMethod();
        },
        dpmChange(event){
            this.emitMethod();
        }
    }
}
</script>

<style lang="scss">
.app-dropmenu{
    .van-overlay{
        background-color: rgba(0,0,0,.7);
    }
}
</style>