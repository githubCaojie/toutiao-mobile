<template>
    <van-field :required="required" :label-width="labelWidth" disabled @click="choosePerson" :label="title" v-model="selPersonNames" 
        :right-icon="require('./more.png')" />
</template>

<script>
import * as appBase from '../../api/app-base'
export default {
    name: 'appChoosePerson',
    props: {
        title: {
            type: String,
            default: '人员',
        },
        labelWidth: {
            type: Number,
            default: 50,
        },
        required: {
            type : Boolean,
            default: false,
        },
        value: {
            type: [Number, String]
        },
        multi: {
            type: Boolean,
            default: false,
        },
        queryMethod: {
            type: String,
        },
        disabled: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            selPersonNames: '',
            persons: [],
        }
    },
    mounted(){
        
    },
    watch: {
        'value': function(nval, oldVal) {
            if (nval) {
                appBase.persons({partyIds: nval}).then((rdata) => {
                    this.persons = rdata.list;
                    this.setName(this.persons);
                })
            }
        }
    },
    methods : {
        choosePerson(){
            if (this.disabled) {
                return;
            }
            this.$router.push({
                path: '/appPersonList',
                query: {
                    sureMethod: (persons) => {
                        this.persons = persons;
                        this.setName(this.persons);
                    },
                    queryMethod: this.queryMethod,
                    multi: this.multi,
                    persons: this.persons
                }
            })
        },
        setName(persons){
            var partyIds = '';
            this.selPersonNames = '';
            for(let person of persons) {
                this.selPersonNames += person.personName + ';';
                partyIds += person.partyId + ';';
            }
            this.selPersonNames = this.selPersonNames.substring(0, this.selPersonNames.length-1);
            partyIds = partyIds.substring(0, partyIds.length -1);
            this.$emit('input',partyIds);
        }
    }
}
</script>

<style lang="" scoped>
    
</style>