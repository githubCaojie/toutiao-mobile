<template>
  <div class="appTree">
    <app-input
      @click="treeClick()"
      disabled
      v-model="selItem.label"
      :required="required"
      :label="title"
      :labelw="labelw"
      :right-icon="$attrs.disabled?'':require('./tree.png')"
    />

    <van-popup
      :close-on-popstate="true"
      v-model="show"
      position="bottom"
      :round="true"
      style="height: 85%;overflow:hidden;"
    >
      <div class="app-fb" style="padding: 2vw 4vw 0 4vw;">
        <div></div>
        <van-icon @click="show=false" name="cross" />
      </div>

      <van-steps direction="vertical" :active="activeIdx">
        <van-step
          @click.native="reSelLevel(item, idx)"
          v-for="(item,idx) in selArr"
          :key="item.code"
        >{{item.label}}</van-step>
        <van-step v-if="showNext">选择下一级</van-step>
      </van-steps>

      <div
        id="treeWrap"
        class="treeWrap"
        :style="{'height': 'calc(100% - '+ ((10.133*selArr.length) + 6.27 + (showNext?10.133:0))+'vw)'}"
      >
        <van-field
          v-if="!month"
          :class="{'selColor':item.selected}"
          v-for="(item,idx) in treeArr"
          :key="item.code"
          @click="chooseLevel(item,idx)"
          disabled
          :value="item.label"
          :left-icon="(item.children.length==0 && item.isLeaf==='Y')?'description':licon"
          :right-icon="item.selected?'success':''"
        />

        <div
          v-if="month"
          class="app-fb"
          style="padding:10px 16px"
          :class="{'selColor':item.selected}"
          v-for="(item,idx) in treeArr"
          :key="item.code"
          @click="chooseLevel(item,idx)"
        >
          <div class="app-fa">
            <van-icon
              :name="(item.children.length==0 && item.isLeaf==='Y')?'description':licon"
              :color="item.color"
              size="16"
            />
            <div
              :style="{'color':item.color?item.color:''}"
              style="font-size: 14px;margin-left:5px;"
            >{{item.label}}</div>
          </div>
          <van-icon v-if="item.selected" name="success" :color="item.color" size="20" />
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import * as appBaseApi from "../../api/app-base";
import Vue from "vue";
export default {
  name: "appTree",
  props: {
    height: {
      type: Number,
      default: 30,
    },
    labelw: {
      type: Number,
    },
    title: {
      type: String,
    },
    required: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Number],
    },
    retriever: {
      type: String,
    },
    dataProvider: {
      type: String,
    },
    dynamic: {
      type: Boolean,
      default: false,
    },
    rootVisible: {
      type: Boolean,
      default: true,
    },
    rightfilter: {
      type: Boolean,
      default: false,
    },
    rootCode: {
      type: String,
      default: "0",
    },
    expandLevel: {
      type: String,
      default: "2",
    },
    month: {
      type: Boolean,
      default: false,
    },
    labelProvider: {
      type: String
    }
  },
  data() {
    return {
      show: false,
      treeArr: [],
      selArr: [],
      selItem: {},
      activeIdx: -1,
      dataHeight: 0,
      totalData: undefined,
      licon: require("./wjj.png"),
    };
  },
  mounted() {
    this.getTreeData();
  },
  watch: {
    value: function (nval, oldVal) {
      if (this.totalData && this.selItem.code != nval) {
        this.setDefaultVal(this.totalData);
      }
    },
    show: function (nval) {
      this.$emit("treeClose", this.selItem);
    },

    rootCode: function (nval) {
      if (nval) {
        this.selArr = [];
        this.selItem = {};
        this.treeArr = [];
        this.getTreeData();
      }
    },
  },
  computed: {
    showNext: function () {
      let tempArr = this.getChildren(this.selItem);
      return tempArr.length > 0;
    },
  },
  methods: {
    dealTreeBean(item) {
      let temp = {};
      for (let key in item) {
        if (["type", "label", "code"].includes(key)) {
          continue;
        }
        temp["treeBean.extProp." + key] = item[key];
      }
      temp["treeBean.type"] = item["type"];
      temp["treeBean.label"] = item["label"];
      temp["treeBean.code"] = item["code"];
      temp["treeBean.location"] = item["location"];
      temp["treeBean.openIcon"] = item["openIcon"];
      temp["treeBean.closeIcon"] = item["closeIcon"];

      temp["retriever"] = this.retriever;
      temp["id"] = item.id;
      temp["expandLevel"] = 1;
      temp["initData"] = false;
      temp["rightFilter"] = false;
      temp["treeBean.extProp.constructor"] = "undefined";
      temp["treeBean.extProp.__core"] = "undefined";
      temp["treeBean.extProp.extend"] = "[object Window]";

      return new Promise((resolve) => {
        this.appCommon.tloading();
        appBaseApi.frameworkTreeData(temp).then((rdata) => {
          rdata = rdata.replace('<?xml version="1.0" encoding="utf-8"?>', "");
          var parser = new DOMParser();
          var xmlDoc = parser.parseFromString(rdata, "text/xml");
          let obj = this.xmlToJson(xmlDoc);
          item.children = obj.children;
          resolve(obj.children);
        });
      });
    },
    chooseLevel(item, idx) {
      let tempArr = this.getChildren(item);
      if (tempArr.length === 0 && item.isLeaf != "Y" && this.dynamic) {
        this.dealTreeBean(item).then((arr) => {
          if (Object.prototype.toString.call(arr) === "[object Object]") {
            arr = [arr];
          }
          this.chooseLevel1(item, arr, idx);
        });
      } else {
        this.chooseLevel1(item, tempArr, idx);
      }
    },
    chooseLevel1(item, tempArr, idx) {
      this.selArr.splice(this.activeIdx + 1);

      if (tempArr.length > 0) {
        this.selArr.push(item);
        this.treeArr = tempArr;
        for (let item of this.treeArr) {
          if (item.color == "yellow") {
            item.color = "#bc9d2f";
          }
        }
        this.clearSel();
        this.activeIdx++;
      } else {
        this.clearSel();
        Vue.set(item, "selected", !!!item.selected);
        this.show = false;
      }
      this.selItem = item;
      this.$emit("treeNodeClick", item.code);
      this.$emit("input", item.code);
    },
    setPreSelected() {
      this.clearSel();
      for (let item of this.treeArr) {
        for (let sitem of this.selArr) {
          if (item.code == sitem.code) {
            Vue.set(item, "selected", true);
          }
        }
        if (this.selItem.code == item.code) {
          Vue.set(item, "selected", true);
        }
      }
    },
    clearSel() {
      for (let item of this.treeArr) {
        Vue.set(item, "selected", false);
      }
    },
    reSelLevel(item, idx) {
      this.setTreeData(item);
      this.setPreSelected();
      this.activeIdx = idx;
    },
    treeClick() {
      if (this.$attrs.disabled) {
        return;
      }
      if (this.treeArr.length == 0 && this.selArr.length == 0) {
        if (this.totalData) {
          this.setTreeData(this.totalData);
        }
      }
      this.show = true;
    },
    setTreeData(item) {
      let tempArr = this.getChildren(item);
      if (tempArr.length > 0) {
        this.treeArr = tempArr;
      }
    },
    getChildren(item) {
      let tempArr = [];
      if (!item || !item.children) {
        return tempArr;
      }
      if (item.children instanceof Array) {
        tempArr = item.children;
      } else {
        tempArr = [item.children];
      }
      return tempArr;
    },
    getTreeData() {
      this.appCommon.tloading();
      appBaseApi
        .frameworkTreeData({
          retriever: this.retriever,
          dataProvider: this.dataProvider,
          expandLevel: this.expandLevel,
          dynamic: this.dynamic,
          rootVisible: this.rootVisible,
          rightfilter: this.rightfilter,
          rootCode: this.rootCode,
        })
        .then((rdata) => {
          rdata = rdata.replace('<?xml version="1.0" encoding="utf-8"?>', "");
          var parser = new DOMParser();
          var xmlDoc = parser.parseFromString(rdata, "text/xml");
          let obj = this.xmlToJson(xmlDoc);
          // obj = {
          //     label: this.title,
          //     children: [obj],
          // }
          this.selArr.push(obj);
          this.activeIdx = 0;
          this.totalData = obj;
          this.setTreeData(obj);
          if (this.value) {
            this.setDefaultVal(obj);
          }
        });
    },
    setDefaultVal(obj) {
      let tempArr = this.getChildren(obj);
      let larr = [[obj]];
      let num = 1;
      while (tempArr.length > 0) {
        larr[num] = tempArr;
        let tarr = [];
        for (let item of tempArr) {
          if (item.code == this.value) {
            tempArr = [];
            break;
          } else {
            tarr = tarr.concat(this.getChildren(item));
          }
        }
        tempArr = tarr;
        num++;
        if (num > 10) {
          break;
        }
      }
      let sel = {};
      let code = this.value;
      let result = [];
      if (larr.length > 0) {
        for (let i = larr.length - 1; i >= 0; i--) {
          let itemArr = larr[i];
          for (let item of itemArr) {
            let flag = false;
            let carr = this.getChildren(item);
            for (let citem of carr) {
              if (citem.code == code || citem.code.split('_')[1] == code) {
                if (result.length == 0) {
                  sel = citem;
                }
                result.unshift(item);
                code = item.code;
                flag = true;
                break;
              }
            }
            if (flag) {
              break;
            }
          }
        }
      } else if (larr.length > 0) {
        result = larr[0];
      }
      this.selArr = result;
      if (!sel || !sel.code) {
        let params = {
          input: JSON.stringify([{labelProvider: this.labelProvider,codes: [this.value]}])
        }
        appBaseApi.frameworkLabel(params).then(rdata => {
          if (rdata.length > 0) {
            sel = {code: this.value, label: rdata[0].labels[0]}
          }
          Vue.set(sel, "selected", true);
          this.selItem = sel;
          this.activeIdx = this.selArr.length - 1;
          this.treeArr = this.getChildren(this.selArr[this.selArr.length - 1]);
        })
      }else {
        Vue.set(sel, "selected", true);
        this.selItem = sel;
        this.activeIdx = this.selArr.length - 1;
        this.treeArr = this.getChildren(this.selArr[this.selArr.length - 1]);
      }
      
    },
    xmlToJson(xml) {
      var obj = {};
      obj.selected = false; //给前台用的
      if (xml.nodeType == 1) {
        // element
        // do attributes
        if (xml.attributes.length > 0) {
          for (var j = 0; j < xml.attributes.length; j++) {
            var attribute = xml.attributes.item(j);
            obj[attribute.nodeName] = attribute.nodeValue;
          }
        }
      } else if (xml.nodeType == 3) {
        // text
        obj = xml.nodeValue;
      }
      // do children
      if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
          var item = xml.childNodes.item(i);
          var nodeName = "children"; //item.nodeName;
          if (typeof obj[nodeName] == "undefined") {
            obj[nodeName] = this.xmlToJson(item);
          } else {
            if (typeof obj[nodeName].length == "undefined") {
              var old = obj[nodeName];
              obj[nodeName] = [];
              obj[nodeName].push(old);
            }
            obj[nodeName].push(this.xmlToJson(item));
          }
        }
      } else {
        obj.children = []; //没有孩子节点时，创建一个空的children,给vue.js树使用
      }
      if (xml.nodeType == 9)
        //document,不需要第一个children
        obj = obj.children;
      return obj;
    },
  },
};
</script>

<style lang="scss">
.appTree {
  .van-field--disabled .van-field__label {
    span {
      color: black;
    }
  }
  .treeWrap {
    background: #f8f8f8;
    overflow: auto;
    border-top: 2px solid lightgray;

    .van-cell {
      background: #f8f8f8;
    }
    .selColor {
      .van-field__control {
        color: rgb(7, 193, 96);
      }
      .van-field__right-icon {
        color: rgb(7, 193, 96);
      }
    }
  }
}
</style>