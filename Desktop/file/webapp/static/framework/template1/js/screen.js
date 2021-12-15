if(!localStorage.defaultCloseFirstTask){
	localStorage.defaultCloseFirstTask = false; 
}

var vm5 = new Vue({
 	el:"#screen",
 	data: {
		bdId:'0',
	},
 	methods :{
 	handleNodeClick(node){
 		debugger;
			var index = node.code.indexOf('_');
			var codeStr = '';
			if(index != -1){
				codeStr = node.code.substring(index+1, node.code.length);
			}
			this.bdId=node.code;
			bdIdStr=codeStr;
			MultitaskPanelManager.freshAllPage('{"bdId":"'+codeStr+'"}');
		}
 	}
});




