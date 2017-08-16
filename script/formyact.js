    //取消报名
    function cancelSign(applyId,userId){
   		
   		var clickConfirm = confirm("确认要取消活动吗？");
   		
   		if(clickConfirm==false){
   			return false;
   		}

    	api.ajax({
	        url:'http://192.168.19.239/dataapi.php?mod=activity&action=removeapply',
	        method:"post",
	        data: {
		        values:{
		        	"uid":userId,
		        	"apply_id":applyId
		        }
		    },
	        cache:true
        },function(ret,err){

        	if(ret){
        		
        		if(ret.code==-1){
        			alert(ret.msg)
        			return false;
        		}else if(ret.code==0){
        			alert(ret.msg)
        			
        			$api.remove($api.dom(".act"+applyId).parentNode.parentNode.nextSibling);
        			$api.remove($api.dom(".act"+applyId).parentNode.parentNode);
        			
        		}
        		
        	}
        	if(err){
        		alert(err.msg)
        	}
        });
    }
    
    function goMyActView(applyId,userId){

//  	api.openFrame({
//		    name: 'myactivityview',
//		    url: 'myactivityview.html?apply_id='+applyId+"&uid="+userId,
//		    rect: {
//		        x: 0,
//		        y: 0,
//		        w: api.winWidth,
//				h: "auto"
//		    },
//		    bounces: false,
//		    bgColor: 'rgba(0,0,0,0)',
//		    vScrollBarEnabled: true,
//		    hScrollBarEnabled: true
//		});
		api.openWin({
	        name: 'myactivityview',
	        url: 'myactivityview.html?apply_id='+applyId+"&uid="+userId,
        });
		
    }
    
	//去支付
	function goApplyPay(applyId,userId){
//		alert(applyId+"---------"+userId)
		api.ajax({
	        url:'http://192.168.19.239/dataapi.php?mod=order&action=orderinfo_by_apply',
	        method:"post",
	        data: {
		        values:{
		        	"uid":userId,
		        	"apply_id":applyId,
		        	"type":"activity"
		        }
		    },
	        cache:true
        },function(ret,err){
			//alert(JSON.stringify(ret))
        	if(ret){
        		
        		if(ret.code==-1){
        			alert(ret.msg)
        			return false;
        		}else if(ret.code==0){
        			// alert(userId+"，"+applyId+"，"+ret.data.activity.tp_type+"，"+ret.data.price_total+"，"+ret.data.apply.adult_num+"，"+ret.data.apply.child_num+"，"+ret.data.coupon_total);
        			api.openFrame({
			            name: 'applypay',
			            url: 'applypay.html?'+ 'userid='+userId+'&apply_id='+applyId+'&tp_type='+ret.data.activity.tp_type+'&totalprice='+ret.data.price_total+'&adultnumber='+ret.data.apply.adult_num+'&childnumber='+ret.data.apply.child_num+'&youhuiquan_price='+ret.data.coupon_total,
			            bounces: false,
			            rect: {
				            x:0,
				            y:0,
				            w:api.winWidth,
				            h:"auto"
			            }
			        });
        			
        		}
        		
        	}
        	if(err){
        		alert(err.msg)
        	}
        });
	}












