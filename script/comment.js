	// 取得url参数
	function GetString(name){
	
	    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	    var r = window.location.search.substr(1).match(reg);
	    if(r!=null)return  unescape(r[2]); return null;
	}
	
    //进入每个活动的详情页
	function goActivity(activityId){
		api.openWin({
	        name: 'activity',
	        url: 'activity.html?activityId='+activityId
	        
        });
	}
	
    //进入每个活动的回顾详情页
	function goReview(tid){
		api.openWin({
	        name: 'framereview',
	        url: 'framereview.html?activityId='+tid
	        
        });
	}
	
	function forTimeAddress(){
		api.closeFrame();
	}