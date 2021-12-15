<template>
  <div>
    <el-tree :data="data" :lazy="dynamic" :load="loadChildren" :default-expanded-keys="expandedKeys" node-key="code" v-bind="$attrs" v-on="$listeners"></el-tree>
  </div>
</template>

<script>
import { frameworkTreeData } from "@/api/app-base";
export default {
  name: 'app-treeb',
  props: {
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
      default: "3",
    },
  },
  data() {
    return {
      data: [],
      expandedKeys: [],
      iconOpen: require('../imgs/open.png'),
      iconClose: require('../imgs/close.png'),
      iconFile: require('../imgs/file.png'),
    }
  },
  created() {
    this.getTreeData();
  },
  methods: {
    getIcon(node) {
      if (!node.data.haschild) {
        return this.iconFile
      } else {
        return node.expanded ? this.iconOpen : this.iconClose
      }
    },
    loadChildren(node, resolve) {
      if (this.data.length === 0) return;

      let children = node.data.children;
      if (Array.isArray(children)) {
        if (children.length > 0) {
          resolve(node.data.children)
        } else {
          this.dealTreeBean(node.data, node.parent).then(rdata => {
            let children = rdata;
            if (!Array.isArray(rdata)) {
              children = [rdata]
            }
            resolve(children)
          })
        }
      } else {
        resolve([node.data.children])
      }
    },
    dealTreeBean(item, parent) {
      let extProp = {
        byStatus: '',
        byStatusName: '',
        canBy: 'N',
        canClfy: 'N',
        checkEnable: true,
        childNodeIcon: '',
        contractId: item.contractId,
        enabled: true,
        hasZfx: 'N',
        haschild: 1,
        isClfy: 'N',
        isLeaf: 'N',
        isZlpd: 'Y',
        nodeType: item.nodeType,
        stdId: item.stdId,
        parent: parent ? parent.data.code : '',
      };
      let temp = {
        initData: false,
        retriever: this.retriever,
        rightFilter: false,
        dynamic: true,
        expandLevel: 1,
        id: item.id,
        code: item.code,
        label: item.label,
        extProp: extProp
      };
      return new Promise((resolve) => {
        this.appCommon.tloading();
        frameworkTreeData(temp).then((rdata) => {
          rdata = rdata.replace('<?xml version="1.0" encoding="utf-8"?>', "");
          var parser = new DOMParser();
          var xmlDoc = parser.parseFromString(rdata, "text/xml");
          let obj = this.xmlToJson(xmlDoc);
          item.children = obj.children;
          resolve(obj.children);
        });
      });
    },
    openTree(level, treeData) {
      let temp = treeData
      while (level > 0) {
        var arr = []
        for (const item of temp) {
          if (item.children) {
            if (Array.isArray(item.children) && item.children.length > 0) {
              arr.push(...item.children)
            } else {
              arr.push({ ...item.children })
            }

          }
          this.expandedKeys.push(item.code)
        }
        temp = arr
        level--
      }
    },
    getTreeData() {
      this.appCommon.tloading();
      frameworkTreeData({
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
          this.data = [obj];
          this.openTree(this.expandLevel - 1, this.data)
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
  }
}
</script>

<style lang="scss">
.el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content {
  background-color: #3182c4;
  color: white;
}
</style>