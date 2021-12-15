<template>
  <div class="app-full">
    <van-nav-bar title="质量单元" :border="false" @click-left="goPrev" left-arrow>
      <template v-if="unitId" #right>
        <van-icon @click="sureSel" name="success" size="20" />
      </template>
    </van-nav-bar>
    <div class="app-main">
      <div class="app-fa">
        <app-input style="width: 80%" v-model="queryParam.unitName" placeholder="请输入质量单元名称"></app-input>
        <van-button v-if="queryParam.unitName" @click="queryUnit" type="info" size="small" style="border-radius: 3px;">查询</van-button>
      </div>
      <article class="tree-content">
        <section class="van-hairline--bottom van-ellipsis app-fs item-wrap" v-for="node in treeArr" :key="node.code">
          <van-radio-group v-if="node.canBy==='Y'" class="left-radio" v-model="unitId">
            <van-radio @click="curNode = node" :name="node.code"></van-radio>
          </van-radio-group>
          <van-cell
          class="van-ellipsis content"
            @click="nodeClick(node)"
            :key="node.code"
            :title="node.label+ (node.byStatusName? ('（' + node.byStatusName +'）'): '')"
            :is-link="node.isLeaf==='N'"
          ></van-cell>
        </section>
      </article>
    </div>
  </div>
</template>

<script>
import { postAction, frameworkTreeData } from "@/api/app-base";
export default {
  name: "unitChoose",
  data() {
    return {
      retriever: "com.haiyisoft.pmzl.tree.ZlUnitByTree",
      code: this.$store.state.user.bdId,
      disArr: ['10', '20', '30'],
      queryParam: {
        unitName: '',
      },
      treeArr: [],
      codeArr: [],
      unitId: '',
      curNode: undefined,
      subscribeName: undefined,
      goNext: false,  //回调跳转页面
      test: ''
    };
  },
  mounted() {
    this.subscribeName = this.$route.query.subscribeName || undefined;
    this.treeData();
  },
  activated(){
    this.treeData();
  },
  methods: {
    sureSel() {
      // this.goNext = true;
      this.$emit('nodeSel', this.curNode);
    },
    goPrev () {
      if (this.goNext) {
        this.goNext = false;
        this.$root.appBack();
        return;
      }
      if (this.codeArr.length <= 0) {
        this.$root.appBack();
      } else {
        this.code = this.codeArr.pop();
        this.treeData();
      }
    },
    nodeClick(node) {
      if (node.isLeaf !== "Y") {
        this.codeArr.push(this.code);
        this.code = node.code;
        this.treeData();
      }
    },
    queryUnit(){
      let params = {
        dc: JSON.stringify({}),
        bdId: this.$store.state.user.bdId,
        unitName: this.queryParam.unitName,
      }
      this.appCommon.tloading();
      postAction('/zlUnit/quickQuery', params).then(rdata => {
        console.log(rdata);
        this.treeArr = rdata.dataWraps.dataWrap.dataList;
      })
    },
    treeData() {
      let params = {
        retriever: this.retriever,
        code: this.code,
        rightFilter: false,
        initData: false,
        expandLevel: 1,
        dynamic: true,
      };
      frameworkTreeData(params).then((rdata) => {
        rdata = rdata.replace('<?xml version="1.0" encoding="utf-8"?>', "");
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(rdata, "text/xml");
        let obj = this.xmlToJson(xmlDoc);
        if (Object.prototype.toString.call(obj.children) === '[object Object]') {
          this.treeArr = [obj.children];
        } else {
          this.treeArr = obj.children;
        }
      });
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

<style lang="scss" scoped>
.tree-content {
  height: calc(100% - 45px);
}
.item-wrap {
  padding-left: 10px;
  box-sizing: border-box;
}
.content {
  flex: 1;
  .van-cell__title {
    width: calc(100% - 60px);
    overflow: auto;
  }
}
</style>