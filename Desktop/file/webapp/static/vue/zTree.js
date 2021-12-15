        var isShow = false;  //标识树结构的弹出框是否是显示的
        var zNodes = [];
        var treeObj = null;  //存储树结构的所有数据，是在初始化树后，对树的数据进行获取得到的
        var setting = {
            view: {
                dblClickExpand: false,
                selectedMulti: false, //设置是否能够同时选中多个节点,此处设置为 否
                showIcon: true,  //设置是否显示节点图标
                showLine: false,  //设置是否显示节点与节点之间的连线
                showTitle: true  //设置是否显示节点的title提示信息
            },
            data: {
                simpleData: {
                    enable: true, //设置是否启用简单数据格式（zTree支持标准数据格式跟简单数据格式，上面例子中是标准数据格式）
                    idKey: "id",  //设置启用简单数据格式时id对应的属性名称
                    pidKey: "pId" //设置启用简单数据格式时parentId对应的属性名称,ztree根据id及pid层级关系构建树结构
                }
            },
            edit:{
                drag:{
                    autoExpandTrigger: false,
                    isCopy : false,
                    isMove : false, //拖拽节点按下 Ctrl 或 Cmd 键表示 copy; 否则为 move
                    prev: false,
                    next: false,
                    inner: false

                },
                enable: true,
                renameTitle:'Rename',
                removeTitle:'Remove',
                showRemoveBtn:false,  //是否显示移除按钮，默认为true ，即显示
                showRenameBtn:false   //是否显示重命名按钮，默认为true ，即显示

            },
            check: {
                enable : false
            },
            callback: {
                onClick:onClick,   //定义节点单击事件回调函数
            }
        };
//点击树结构的某个节点
        function onClick(e,treeId,treeNode){
            $('.select-options').css("display","none");
            //$('.select-content').text(treeNode.name);
             change(treeNode.id,treeNode.name);
        }
//获取树结构的数据，在点击选择框时执行
        function getTreeData(){
            $.ajax({
                type:"get",
                url:$$pageContextPath+"mainScreem/select",
                success:function(data){
                	var json = data.parameters.json;
					var nueda =  eval("("+json+")"); 
                    zNodes = nueda;
                    $.fn.zTree.init($("#selectTree"), setting, zNodes);
                    treeObj = $.fn.zTree.getZTreeObj("selectTree");
                    expandNodes(treeObj.getNodes(),treeObj); 
                     if(zNodes.length>0){
                     	$('.select-content').text(zNodes[0].name);
                    	change(zNodes[0].id,zNodes[0].name);
                    }
                },
                error:function(data){
                    alert('get data error');
                }
            });
        }
     //获取树结构的数据，在点击选择框时执行   
            function getTreeData1(){
            $.ajax({
                type:"get",
                url:$$pageContextPath+"proScreen/select",
                success:function(data){
                	var json = data.parameters.json;
					var nueda =  eval("("+json+")"); 
                    zNodes = nueda;
                    $.fn.zTree.init($("#selectTree"), setting, zNodes);
                    treeObj = $.fn.zTree.getZTreeObj("selectTree");
                    expandNodes(treeObj.getNodes(),treeObj); 
                     if(zNodes.length>0){
                    	change(zNodes[0].id,zNodes[0].name);
                    }
                },
                error:function(data){
                    alert('get data error');
                }
            });
        }
//点击选择框时触发
        function showTree(){
            isShow = !isShow;  //点一下选择框，弹出树，再点一下选择框，弹出树隐藏
            if(isShow){
                $('.select-box').css("outline","#acacac solid 1px");//设置选择框的描边样式，模拟select框获取焦点时的效果，不需要的可以删掉
                $('.select-options').css("display","block");
                zNodes.length == 0 && (getTreeData());//如果没有获取过树结构的数据，就获取树结构的数据；如果已经获取过树结构的数据，就不执行获取树结构数据的函数
                $(document).off().on('click',function(e){  //绑定click事件，当弹出框已经弹出时，点击除弹出框以外的区域，弹出框消失
                    var parent = $(".select-wrapper");   // 设置目标区域
                    if(!parent.is(e.target) && (parent.has(e.target).length == 0)){//如果当前点击区域不是目标区域或者点击区域不是目标区域的子代元素，就将弹出框隐藏
                        $('.select-box').css("outline","none");
                        $('.select-options').css("display","none");
                        isShow = false;
                    }
                });
           }else{
                $('.select-box').css("outline","none");
                $('.select-options').css("display","none");
            }
       }
       
       //点击选择框时触发
        function showTree1(){
            isShow = !isShow;  //点一下选择框，弹出树，再点一下选择框，弹出树隐藏
            if(isShow){
                $('.select-box').css("outline","#acacac solid 1px");//设置选择框的描边样式，模拟select框获取焦点时的效果，不需要的可以删掉
                $('.select-options').css("display","block");
                zNodes.length == 0 && (getTreeData1());//如果没有获取过树结构的数据，就获取树结构的数据；如果已经获取过树结构的数据，就不执行获取树结构数据的函数
                $(document).off().on('click',function(e){  //绑定click事件，当弹出框已经弹出时，点击除弹出框以外的区域，弹出框消失
                    var parent = $(".select-wrapper");   // 设置目标区域
                    if(!parent.is(e.target) && (parent.has(e.target).length == 0)){//如果当前点击区域不是目标区域或者点击区域不是目标区域的子代元素，就将弹出框隐藏
                        $('.select-box').css("outline","none");
                        $('.select-options').css("display","none");
                        isShow = false;
                    }
                });
           }else{
                $('.select-box').css("outline","none");
                $('.select-options').css("display","none");
            }
       }
       
function expandNodes(nodes,treeObj){
    for (var i = 0 ; i < nodes.length; i++){
        treeObj.expandNode(nodes[i],true,false,false);
    //递归 如果子节点的是父节点则进行递归操作
        if(nodes[i].isParent && nodes[i].zAsync){
            expandNodes(nodes[i].children,treeObj);
        } else {
            goAsync = true;
        }
    }
}