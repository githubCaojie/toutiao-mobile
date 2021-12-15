<input type='hidden' id='${parameters.id?string}-tab-num' value='${parameters.maxTabNum?string}'>
<input type="hidden" id="${parameters.id?string}-taskDirectClosable" value="${parameters.taskdirectclosable?string}">

<#if parameters.titleposition=="top">
	<div id="${parameters.id?string}_mainDiv" class="multitaskDiv i-layout-div i-layout-full" style="padding-top:${parameters.topoffset}px;">
		<div class="multitask-top-banner">
			<@topandbottomTitle titleposition="bottom" ></@topandbottomTitle>
		</div>
		<div  class="multitask-top-content i-layout-div">
			 <@bodyTdDiv titleposition="${parameters.titleposition}"></@bodyTdDiv>
		</div>
		
	</div>
<#elseif parameters.titleposition=="bottom">
	<div id="${parameters.id?string}_mainDiv" class="multitaskDiv i-layout-div i-layout-full" style="padding-top:${parameters.topoffset}px;">
		<div  class="multitask-bottom-content i-layout-div">
			 <@bodyTdDiv titleposition="${parameters.titleposition}"></@bodyTdDiv>
		</div>
		<div  class="multitask-bottom-banner">
			<@topandbottomTitle titleposition="bottom" ></@topandbottomTitle>
		</div>
	</div>
</#if>

<#macro topandbottomTitle   titleposition> 
	<table style="width:100%;height:100%;border-collapse:collapse;" cellspacing="0" cellpadding="0"  border="0" >
				<#--多任务菜单div-->
				<tr id="${parameters.id?string}_tableTitleTr">
					<td >
						<table id="multitaskMenuTitleTable"  width="100%" height="100%" class='tab-container-table'  border="0"  cellspacing="0" cellpadding="0">
							<tr id="multitaskMenuTitleTr" height="100%"  style='vertical-align: bottom;' >
								<td class='addMenuTd' height="100%"  align='left' width='70' id='multitaskMenuTitleTd_0'  onclick="MultitaskPanelManager.showPage('SYS_MAINPAGEPANEL','0')">
									
									<span id='multitaskMenuTitleButton_0' class='multitask-active-firtpage'></span>
								</td>
								<td width="5">
									<span class="multitask-space"></span>
								  
								</td>
								<td  id='multitaskMenuTitleLastTd'>&nbsp</td>
								<td width="300"  id="showloginInfo"  align="right" valign="middle" style="color:#FF6633;cursor:pointer;"  onclick="MultitaskPanelManager.showLogininfo('loginInfo_div')"  onmouseout="MultitaskPanelManager.hiddenLogininfo('loginInfo_div')" >
								    
								    <span class='multitask-personal'></span>
								    <span style="color:#ffffff; white-space:nowrap; " id="loginInfoSpan">${parameters.operatorName}(${parameters.deptName})</span> &nbsp;
								</td>
								<td class="multitask-shortcut-size" nowrap  align="center" valign="middle" style="cursor:pointer;text-overflow: ellipsis;"  id="mainShortcutmenu_shortcutmenu" onclick="mainShortcutmenu.showShortCutMenu('${parameters.titleposition}')" >
								  <span class="multitask-shortcut-background"></span>		
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
</#macro>

<#macro bodyTdDiv   titleposition> 
	<table cellspacing="0" cellpadding="0"  border="0" width="100%" height="100%" class="i-layout-relative">
				<tr>
					<td id='leftShortCut'   nowrap  style=' height:100%;word-break : keep-all;overflow: hidden;'
						<#if parameters.leftOffset?exists>
					   	width="${parameters.leftOffset?string}"
					 	</#if>
						>
						<div id='leftShortCutDiv' style='width:100%;height:100%;overflow: hidden;border-left:0px solid #ADAA9C;border-right:1px solid #ADAA9C;border-bottom:0px solid red; background-color:inherit;'>
						</div>
					</td>
					<td style="height:100%;">
						<#--加载tab页的表头部分和显示菜单内容-->
							<#list 0..parameters.maxTabNum?number-1 as i>
								<#if i==0 >
									<div  id="${i}_bodyDiv" multitask="true"  class='tab-page-bodyDiv' style=";width:100%;height:100%;overflow:hidden">
											<iframe id="${i}_bodyFrame" name="${i}_bodyFrame"  src="${parameters.contextPath?string}/framework/commonjsp/mainPage.jsp" 
											   scrolling="auto" attr="multitask" width="100%" height="100%" marginwidth="0" marginheight="1" border="0" frameborder="0" style='padding-top:-2px;margin-top:1px;background:#ffffff' >
											</iframe>
									</div>
								<#else>
									<div  id="${i}_bodyDiv" multitask="true"  class='tab-page-bodyDiv' style="position:absolute;top:-9999px;width:100%;height:100%;overflow:hidden">
									
										<iframe id="${i}_bodyFrame" attr="multitask" class="bodyFrame" name="${i}_bodyFrame" src="" scrolling="auto" width="100%" height="100%"  border="0" frameborder="0" style='background:#ffffff' >
										</iframe>
										
								</div>
								</#if>
							</#list>
					
					</td>
				</tr>
			</table>
</#macro>
	
	
<#--提示登录信息-->
<div style="display:none;z-index:9999;height:140px;width:230px;position:absolute;background:#ffffff;border:1px solid #ADAA9C;filter:alpha(opacity=70);-moz-opacity:.70;opacity:.70;" id="loginInfo_div">
   <iframe    src="${parameters.contextPath?string}/framework/loginInfoWidget.do?source=multi_loginInfo"  scrolling="no" width="100%" height="140"  border="0" frameborder="0" style='background:#ffffff' >
   </iframe>
</div>	


<#--标题按钮右键菜单-->
<div style='display:none;position:absolute;border:0px;z-index:999;height:82px;background-color:#ffffff;width:120px;' id='SYS_MAINPAGEPANEL-oncontextmenu' onmouseover="clearsetTime()" onmouseout="closeThiscontextMenu(event,this)" class="contextmenuDiv" >
	<table  width="100%" height="100%" cellspacing="0" cellpadding="0" border="0"  class="contextmenuDiv">
		<tr width='100%' height='25px' bgcolor="#f5f6f7" onmouseover="parent.MultitaskPanelManager.multitaskmaxbuttonmouseover(this,'max')" onmouseout="parent.MultitaskPanelManager.multitaskmaxbuttonmouseout(this,'max')" onclick="parent.MultitaskPanelManager.closeOtherPage()">
		     <td width="30" height="25" align='center' > </td>
			 <td >关闭其它</td>
		</tr>
		<tr height="2">
			<td width="30" height="2" bgcolor="#e8ecf0"></td>
			<td colspan="2" height="2" bgcolor="#e8ecf0"></td>
		</tr>
		
		<tr width='100%' height='25px' bgcolor="#f5f6f7" onmouseover="parent.MultitaskPanelManager.multitaskmaxbuttonmouseover(this,'max')" onmouseout="parent.MultitaskPanelManager.multitaskmaxbuttonmouseout(this,'max')" onclick="parent.MultitaskPanelManager.closeAllPage()">
		     <td width="30" height="25" align='center' > </td>
			 <td >关闭所有</td>
		</tr>
		<tr height="2">
			<td width="30" height="2" bgcolor="#e8ecf0"></td>
			<td colspan="2" height="2" bgcolor="#e8ecf0"></td>
		</tr>
		<tr width='100%' height='20px' onmouseover="parent.MultitaskPanelManager.multitaskmaxbuttonmouseover(this,'max')" onmouseout="parent.MultitaskPanelManager.multitaskmaxbuttonmouseout(this,'max')" onclick="parent.MultitaskPanelManager.maxMenuPage('SYS_MAINPAGEPANEL')">
		     <td width="22" height="20" align='center' style="border-right:1px inset #cccccc;"><img style='width:14px;height:14px'  id='SYS_MAINPAGEPANEL-maxContMenu' src="${parameters.contextPath?string}/css/css/haiyisoft/multitask/images/max.png"/> </td>
			 <td >&nbsp;&nbsp;&nbsp; 最大化</td>
		</tr>
		<tr width='100%' height='20px' onmouseover="parent.MultitaskPanelManager.multitaskmaxbuttonmouseover(this,'min')" onmouseout="parent.MultitaskPanelManager.multitaskmaxbuttonmouseout(this,'min')" onclick="parent.MultitaskPanelManager.minMenuPage('SYS_MAINPAGEPANEL')" >
			<td  width="22" height="20" align='center' style="border-right:1px inset #cccccc;"><img style='width:14px;height:14px' id='SYS_MAINPAGEPANEL-minContMenu' src="${parameters.contextPath?string}/css/css/haiyisoft/multitask/images/mina.png"/></td>
		    <td >&nbsp;&nbsp;&nbsp; 最小化</td>
		</tr>
		<tr height="1">
							<td width="22" height="1" bgcolor="#cccccc" style="border-right:1px inset #cccccc;"></td>
							<td colspan="2" height="1" bgcolor="#cccccc"></td>
						</tr>
		<tr width='100%' height='20px' onmouseover="parent.MultitaskPanelManager.multitaskmaxbuttonmouseover(this,'addCont')" onmouseout="parent.MultitaskPanelManager.multitaskmaxbuttonmouseout(this,'addCont')" onclick="parent.MultitaskPanelManager.addShotcutMenu('SYS_MAINPAGEPANEL')" >
			<td  width="22" height="20"  align='center' style="border-right:1px inset #cccccc;"><img  style='width:14px;height:14px' id='SYS_MAINPAGEPANEL-addContMenu' src="${parameters.contextPath?string}/css/css/haiyisoft/multitask/images/addmenu.png"/></td>
		    <td >&nbsp;&nbsp;&nbsp; 添加快捷方式</td>
		</tr>
		<tr width='100%' height='20px' onmouseover="parent.MultitaskPanelManager.multitaskmaxbuttonmouseover(this,'help')" onmouseout="parent.MultitaskPanelManager.multitaskmaxbuttonmouseout(this,'help')" onclick="openHelpPage();" >
			<td  width="22" height="20"  align='center' style="border-right:1px inset #cccccc;"><img  style='width:16px;height:16px' id='SYS_MAINPAGEPANEL-helpContMenu' src="${parameters.contextPath?string}/css/css/haiyisoft/multitask/images/51.png"/></td>
		    <td >&nbsp;&nbsp;&nbsp; 帮助</td>
		</tr>
	</table>
</div>
<iframe style="position:absolute;display:none;border:0px;z-index:998;height:82px;background-color:#ffffff;width:94;"  id="SYS_MAINPAGEPANEL-oncontextmenu-iframe" ></iframe><input type='hidden' id='SYS_MAINPAGEPANEL-menuNum' value>
<script>
multiTaskInit('${parameters.titleposition}','haiyisoft');
</script>	