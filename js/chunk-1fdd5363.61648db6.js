(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fdd5363"],{"45a9":function(t,s,e){"use strict";e("ca62")},"4e8c":function(t,s,e){"use strict";e("7d93")},"6d1a":function(t,s,e){t.exports=e.p+"img/icon_send.2d406717.svg"},"7d93":function(t,s,e){},a71d:function(t,s,e){"use strict";e("e461")},ca62:function(t,s,e){},e39f:function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"container private-message"},[o("Sidebar"),o("div",{staticClass:"private-message-wrap"},[o("section",{staticClass:"private-users"},[o("div",{ref:"userRoomsList",staticClass:"private-users-wrap",on:{scroll:function(s){return t.userRoomsHandleScroll(s)}}},[o("h2",{staticClass:"headbar"},[o("div",{staticClass:"title"},[o("div",{staticClass:"main-title"},[t._v("訊息")]),o("div",{staticClass:"add-msg-user",attrs:{"data-toggle":"modal","data-target":"#newMessageModal"},on:{click:t.showModal}},[o("img",{attrs:{src:e("fc32"),width:"30px",alt:""}})])])]),o("ul",{staticClass:"private-users-list"},[t.isLoading?o("Spinner"):t._e(),t._l(t.userRooms,(function(s){return o("UserRooms",{key:s.id,attrs:{initialUser:s},on:{"after-click-user-room":t.afterClickUserRoom}})})),"limited"===t.userRoomsLimit?o("li",{staticClass:"limited"},[t._v(" 已載入所有聊天室！ ")]):t._e()],2)])]),o("section",{staticClass:"private-chatroom"},[o("div",{staticClass:"private-chatroom-wrap"},[o("h2",{staticClass:"headbar"},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.currentRoom.name,expression:"currentRoom.name"}],staticClass:"title"},[o("div",{staticClass:"main-title"},[t._v(t._s(t.currentRoom.name))]),o("div",{staticClass:"sub-title"},[t._v("@"+t._s(t.currentRoom.account))])])]),o("div",{staticClass:"private-chatroomCard"},[o("PrivateChatroom",{attrs:{initialCurrentRoom:t.currentRoom,initialMessages:t.messages,initialMessageLoadMore:t.messageLoadMore},on:{"after-post-msg":t.afterPostMsg,"after-scroll-top":t.afterScrollTop,"after-show-user-list-modal":t.afterShowUserListModal}})],1)])])]),t.isShowModal?o("div",{staticClass:"modal fade",attrs:{id:"newMessageModal","data-backdrop":"static","data-keyboard":"false",tabindex:"-1","aria-labelledby":"newMessageModalLabel","aria-hidden":"true"}},[o("div",{staticClass:"modal-dialog"},[o("div",{staticClass:"modal-content"},[o("div",{staticClass:"modal-header"},[o("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:t.cancelModal}},[o("img",{attrs:{src:e("8459"),alt:""}})]),o("span",[t._v("新訊息")])]),o("div",{staticClass:"modal-body"},[o("form",{staticClass:"create-tweet",attrs:{action:""}},[o("ul",{staticClass:"message-users"},[t.msgUsersFollowing.length>0?o("li",{staticClass:"following"},[t._v("正在跟隨的使用者")]):t._e(),t._l(t.msgUsersFollowing,(function(s){return o("li",{key:s.id,staticClass:"message-user",on:{click:function(e){return t.joinUserRoomAwait(s)}}},[o("div",{staticClass:"avatar"},[o("img",{attrs:{src:t._f("emptyImage")(s.avatar),alt:""}})]),o("div",{staticClass:"user-info"},[o("span",{ref:"",refInFor:!0,staticClass:"name"},[t._v(t._s(s.name))]),o("span",{staticClass:"account"},[t._v("@"+t._s(s.account))])]),s.joinUserRoomAwait?o("button",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.joinUserRoomConfirm(s)}}},[t._v("開始聊天")]):t._e()])})),t.msgUsersUnFollowing.length>0?o("li",{staticClass:"un-following"},[t._v("其他未跟隨的使用者")]):t._e(),t._l(t.msgUsersUnFollowing,(function(s){return o("li",{key:s.id,staticClass:"message-user",on:{click:function(e){return t.joinUserRoomAwait(s)}}},[o("div",{staticClass:"avatar"},[o("img",{attrs:{src:t._f("emptyImage")(s.avatar),alt:""}})]),o("div",{staticClass:"user-info"},[o("span",{ref:"",refInFor:!0,staticClass:"name"},[t._v(t._s(s.name))]),o("span",{staticClass:"account"},[t._v("@"+t._s(s.account))])]),s.joinUserRoomAwait?o("button",{staticClass:"btn",on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.joinUserRoomConfirm(s)}}},[t._v("開始聊天")]):t._e()])}))],2)])])])])]):t._e()],1)},i=[],a=e("1da1"),r=e("2909"),n=e("5530"),m=(e("96cf"),e("d81d"),e("a9e3"),e("b0c0"),e("2f62")),c=e("2708"),l=e("2fa3"),u=e("4cce"),d=e("5ea5"),h=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",{staticClass:"notice"},[e("router-link",{staticClass:"avatar",attrs:{to:"/users/"+t.user.roomMember.id}},[e("img",{attrs:{src:t._f("emptyImage")(t.user.roomMember.avatar),alt:""}})]),e("div",{staticClass:"notice-info"},[e("div",{staticClass:"user-info"},[e("router-link",{staticClass:"name",attrs:{to:"/users/"+t.user.roomMember.id}},[t._v(" "+t._s(t.user.roomMember.name)+" ")]),e("span",{staticClass:"account"},[t._v("@"+t._s(t.user.roomMember.account))])],1),e("div",{staticClass:"user-msg",class:{"await-msg":"立即開啟對話吧 ▸"===t.user.lastMsg.content}},[e("span",{staticClass:"last-msg"},[t.user.lastMsg.fromRoomMember?t._e():e("small",[t._v("你：")]),t._v(t._s(t.user.lastMsg.content)+" ")]),e("span",{staticClass:"last-time"},[t._v(t._s(t._f("fromNow")(t.user.lastMsg.createdAt)))]),t.user.unreadNum>0?e("span",{staticClass:"unread-number"},[t._v(" "+t._s(t.user.unreadNum)+" ")]):t._e()])]),e("div",{staticClass:"full-link",class:{linked:t.user.isLinked},on:{click:t.handleCLickUserRoom}})],1)},g=[],f={name:"UserRooms",mixins:[c["c"],c["a"]],props:{initialUser:{type:Object,required:!0}},data:function(){return{user:{}}},computed:Object(n["a"])({},Object(m["b"])(["currentUser"])),watch:{initialUser:function(){this.user=this.initialUser}},created:function(){this.fetchUser()},methods:{handleCLickUserRoom:function(){this.user.unreadNum=0,this.$emit("after-click-user-room",this.user)},fetchUser:function(){this.user=this.initialUser}}},v=f,p=(e("4e8c"),e("2877")),R=Object(p["a"])(v,h,g,!1,null,"094a6154",null),M=R.exports,w=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{ref:"messages",staticClass:"chat-wrap",class:{"show-load-more":t.showLoadMore},on:{scroll:function(s){return t.handleScroll(s)}}},[t.initialCurrentRoom.name?t._e():o("div",{staticClass:"privateroom-await"},[o("p",[t._v("你未選取訊息")]),o("span",[t._v("從你現有的訊息中選擇一則，或開始一則新訊息。")]),o("button",{staticClass:"btn",attrs:{"data-toggle":"modal","data-target":"#newMessageModal"},on:{click:t.showUserListModal}},[t._v(" 新訊息 ")])]),t.initialCurrentRoom.name?o("div",{staticClass:"chat messages",attrs:{id:"messages"}},["limited"===t.loadMoreLimit?o("div",{staticClass:"load-text load-limited"},[t._v(" 沒有更多訊息了！ ")]):t._e(),t.showLoadMore?o("div",{staticClass:"load-text load-more"},[o("span",{staticClass:"loading"}),o("span",[t._v("正在載入訊息...")])]):t._e(),t._l(t.messages,(function(s){return o("div",{key:s.id},[s.isSelf?o("div",{staticClass:"self msg"},[o("p",[t._v(" "+t._s(s.content)+" ")]),o("span",[t._v(t._s(t._f("fromNow")(s.createdAt)))])]):o("div",{staticClass:"other msg"},[o("router-link",{staticClass:"avatar",attrs:{to:"/users/"+s.UserId}},[o("img",{attrs:{src:t._f("emptyImage")(s.avatar),alt:""}})]),o("div",{},[o("p",[t._v(" "+t._s(s.content)+" ")]),o("span",[t._v(t._s(t._f("fromNow")(s.createdAt)))])])],1)])}))],2):t._e(),o("div",{staticClass:"d-flex justify-content-center align-items-center send-wrap"},[t.initialCurrentRoom.name?[o("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{placeholder:"請輸入訊息 ...",type:"text",maxlength:"160"},domProps:{value:t.text},on:{keypress:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.postPrivateMsg.apply(null,arguments)},input:function(s){s.target.composing||(t.text=s.target.value)}}}),o("button",{staticClass:"send-btn",attrs:{type:"button"},on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.postPrivateMsg.apply(null,arguments)}}},[o("img",{attrs:{src:e("6d1a"),alt:""}})])]:t._e()],2)])},U=[],_={name:"PrivateChatroom",mixins:[c["c"],c["a"]],props:{initialCurrentRoom:{type:Object,required:!0},initialMessages:{type:Array,required:!0},initialMessageLoadMore:{type:Number,required:!0}},data:function(){return{socket:null,privateRoom:{},text:"",memberNum:0,messages:[],loadMoreLimit:20,showLoadMore:!1,isSelf:!1,isLoading:!0,isPostMsg:!1}},computed:Object(n["a"])({},Object(m["b"])(["currentUser"])),watch:{initialCurrentRoom:function(){this.privateRoom=this.initialCurrentRoom},initialMessages:function(){this.messages=this.initialMessages},initialMessageLoadMore:function(){this.loadMoreLimit=this.initialMessageLoadMore},isPostMsg:function(t){var s=this;t&&setTimeout((function(){s.text=""}),500)},text:function(t){""===t&&this.isPostMsg&&(this.updateScroll(this.$refs.messages.scrollHeight),this.isPostMsg=!1)},loadMoreLimit:function(t){var s=this;"limited"===t&&setTimeout((function(){s.loadMoreLimit="nomore"}),3e3)},showLoadMore:function(t){var s=this;t&&setTimeout((function(){s.showLoadMore=!1}),2500)}},updated:function(){20===this.loadMoreLimit&&this.updateScroll(this.$refs.messages.scrollHeight)},sockets:{get_private_msg:function(t){this.messages.push(t)}},methods:{postPrivateMsg:function(){if(this.text.length){this.$socket.emit("post_private_msg",{SenderId:this.currentUser.id,ReceiverId:this.privateRoom.userId,RoomId:this.privateRoom.id,content:this.text});var t=this.currentUser.avatar,s=this.text,e=new Date,o={avatar:t,content:s,createdAt:e,isSelf:!0};this.messages.push(o),this.$emit("after-post-msg",this.text),this.isPostMsg=!0}else l["a"].fire({icon:"warning",title:"你還沒有填寫訊息"})},updateScroll:function(t){this.$refs.messages.scrollTop=t},handleScroll:function(t){0===t.srcElement.scrollTop&&this.loadMore(),"nomore"===this.loadMoreLimit&&(this.loadMoreLimit="limited")},loadMore:function(){var t=this;if(this.messages.length>=this.loadMoreLimit){this.showLoadMore=!0;var s=this.messages.length+5;setTimeout((function(){t.$emit("after-scroll-top",s),t.loadMoreLimit=s}),2e3)}else this.loadMoreLimit-this.messages.length<=5&&(this.loadMoreLimit="limited")},showUserListModal:function(){this.$emit("after-show-user-list-modal")}}},C=_,b=(e("a71d"),Object(p["a"])(C,w,U,!1,null,"68e430c7",null)),k=b.exports,L=e("2375"),A=e("1157"),I=e.n(A),j={name:"PrivateMessage",mixins:[c["a"]],components:{Sidebar:d["a"],UserRooms:M,PrivateChatroom:k,Spinner:L["a"]},data:function(){return{socket:null,userRooms:[],userRoomsLimit:100,currentRoom:{},userRoomAwait:{},privateRoomAwait:{},getPrivateRoomId:0,messages:[],messageLoadMore:0,msgUnseenNum:0,msgUnseenRooms:[],msgUnreadRooms:[],msgUsersFollowing:[],msgUsersUnFollowing:[],isLoading:!0,isShowModal:!1}},computed:Object(n["a"])({},Object(m["b"])(["currentUser"])),watch:{privateRoomAwait:function(){this.currentRoom=this.privateRoomAwait;var t=this.currentUser.id,s=this.currentRoom.userId,e=this.currentRoom.id;this.joinPrivateRoom({User1Id:t,User2Id:s,RoomId:e}),this.getPrivateHistory(e,20)},msgUnreadRooms:function(){for(var t=this,s=function(s){t.userRooms=t.userRooms.map((function(e){var o=e.id,i=e.lastMsg,a=e.roomMember,r=e.isLinked,n=e.roomMember.id===t.msgUnreadRooms[s].SenderId?t.msgUnreadRooms[s].unreadNum:e.unreadNum;return{id:o,lastMsg:i,roomMember:a,isLinked:r,unreadNum:n}}))},e=0;e<this.msgUnreadRooms.length;e++)s(e)},getPrivateRoomId:function(){var t=this;if(this.currentRoom.id=this.getPrivateRoomId,this.privateRoomAwait=this.currentRoom,localStorage.setItem("privateRoomAwait",JSON.stringify(this.privateRoomAwait)),this.$router.push({name:"message-await",params:{id:this.getPrivateRoomId}}),!(this.userRooms.length<=0)){var s=Number(this.$route.params.id),e=this.userRooms.every((function(t){return t.id!==s}));e&&s&&(this.handleUserRoomAwait("立即開啟對話吧 ▸"),this.userRooms.unshift(this.userRoomAwait)),this.userRooms=this.userRooms.map((function(s){return s.id===t.currentRoom.id?s.isLinked=!0:s.isLinked=!1,s}))}}},created:function(){this.joinPrivatePage(this.currentUser.id),this.catchUserRoomId(),this.msgUnseenNum=localStorage.getItem("msgUnseenNum"),this.fetchMsgUsers(this.currentUser.id)},sockets:{join_private_room:function(t){this.getPrivateRoomId=t},get_msg_notice_details:function(t){var s=t.unseenRooms,e=t.unreadRooms;this.msgUnseenRooms=s,this.msgUnreadRooms=e},update_msg_notice_details:function(t){var s=this;this.messageNotice=t,this.userRooms=this.userRooms.map((function(t){return t.id===s.messageNotice.id&&(t.lastMsg.fromRoomMember=!0,t.lastMsg.content=s.messageNotice.lastMsg.content,t.lastMsg.createdAt=s.messageNotice.lastMsg.createdAt,t.unreadNum=s.messageNotice.unreadNum),t}))},get_private_msg:function(t){var s=this;this.userRooms=this.userRooms.map((function(e){return e.id===s.currentRoom.id&&(e.lastMsg.fromRoomMember=!0,e.lastMsg.content=t.content,e.lastMsg.createdAt=t.createdAt),e}))}},methods:{joinPrivatePage:function(t){this.$socket.emit("join_private_page",{userId:t}),localStorage.removeItem("msgUnseenNum"),this.getPrivateRooms(0,this.userRoomsLimit)},getPrivateRooms:function(t,s){var e=this;this.$socket.emit("get_private_rooms",{offset:t,limit:s},(function(t){e.userRooms=t.map((function(t){var s=t.id,o=t.lastMsg,i=t.roomMember,a=s===e.currentRoom.id;return{id:s,lastMsg:o,roomMember:i,isLinked:a}}));var s=Number(e.$route.params.id),o=e.userRooms.every((function(t){return t.id!==s}));if(o&&s&&(e.handleUserRoomAwait("立即開啟對話吧 ▸"),e.userRooms.unshift(e.userRoomAwait)),e.msgUnreadRooms.length>0)for(var i=function(t){e.userRooms=e.userRooms.map((function(s){var o=s.id,i=s.lastMsg,a=s.roomMember,r=s.isLinked,n=s.roomMember.id===e.msgUnreadRooms[t].SenderId?e.msgUnreadRooms[t].unreadNum:s.unreadNum;return{id:o,lastMsg:i,roomMember:a,isLinked:r,unreadNum:n}}))},a=0;a<e.msgUnreadRooms.length;a++)i(a);e.isLoading=!1}))},joinPrivateRoom:function(t){var s=t.User1Id,e=t.User2Id,o=t.RoomId;this.$socket.emit("join_private_room",{User1Id:s,User2Id:e,RoomId:o})},afterClickUserRoom:function(t){var s=this;this.userRoomAwait={},this.currentRoom={id:t.id,userId:t.roomMember.id,name:t.roomMember.name,account:t.roomMember.account,avatar:t.roomMember.avatar},this.userRooms=this.userRooms.map((function(t){return t.id===s.currentRoom.id?t.isLinked=!0:t.isLinked=!1,t})),this.messageLoadMore=20,this.privateRoomAwait=this.currentRoom,localStorage.setItem("privateRoomAwait",JSON.stringify(this.privateRoomAwait)),this.$router.push({name:"message-await",params:{id:this.currentRoom.id}})},getPrivateHistory:function(t,s){var e=this;this.$socket.emit("get_private_history",{offset:0,limit:s,RoomId:t},(function(t){e.messages=Object(r["a"])(t.reverse()),e.messages=e.messages.map((function(t){var s=t.UserId,o=t.avatar,i=t.content,a=t.createdAt,r=s===e.currentUser.id;return{UserId:s,avatar:o,content:i,createdAt:a,isSelf:r}})),e.isLoading=!1}))},catchUserRoomId:function(){var t=this.$route.params.id;t&&(this.privateRoomAwait=JSON.parse(localStorage.getItem("privateRoomAwait")))},afterPostMsg:function(t){var s=this;this.userRooms=this.userRooms.map((function(e){return e.id===s.currentRoom.id&&(e.lastMsg.fromRoomMember=!1,e.lastMsg.content=t,e.lastMsg.createdAt=new Date),e}))},handleUserRoomAwait:function(t){this.userRoomAwait={awaitMsg:!0,id:this.currentRoom.id,isLinked:!0,lastMsg:{content:t,createdAt:"",fromRoomMember:!0},roomMember:{account:this.currentRoom.account,avatar:this.currentRoom.avatar,id:this.currentRoom.userId,name:this.currentRoom.name}}},userRoomsHandleScroll:function(t){t.srcElement.scrollTop+t.srcElement.offsetHeight>=t.srcElement.scrollHeight&&this.loadMore()},loadMore:function(){if(this.userRooms.length>=this.userRoomsLimit){var t=0,s=this.userRooms.length+5;this.getPrivateRooms(t,s),this.userRoomsLimit=s}else this.userRoomsLimit="limited"},afterScrollTop:function(t){this.getPrivateHistory(this.currentRoom.id,t),this.messageLoadMore=t},fetchMsgUsers:function(t){var s=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u["a"].getFollowings({userId:t,offset:0,limit:50});case 3:return o=e.sent,s.msgUsersFollowing=Object(r["a"])(o.data).map((function(t){var s=t.following,e={id:s.id,account:s.account,name:s.name,avatar:s.avatar,joinUserRoomAwait:!1};return e})),e.next=7,u["a"].getTopUsers({offset:0,limit:50});case 7:i=e.sent,s.msgUsersUnFollowing=Object(r["a"])(i.data),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),l["a"].fire({icon:"warning",title:"無法取得使用者清單，請稍後再試"});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()},joinUserRoomAwait:function(t){this.msgUsersFollowing=this.msgUsersFollowing.map((function(s){return s.id===t.id?s.joinUserRoomAwait=!0:s.joinUserRoomAwait=!1,s})),this.msgUsersUnFollowing=this.msgUsersUnFollowing.map((function(s){return s.id===t.id?s.joinUserRoomAwait=!0:s.joinUserRoomAwait=!1,s}))},joinUserRoomConfirm:function(t){this.userRoomAwait={},this.currentRoom={id:null,userId:t.id,name:t.name,account:t.account,avatar:t.avatar};var s=this.currentUser.id,e=t.id,o=null;this.$socket.emit("join_private_room",{User1Id:s,User2Id:e,RoomId:o}),this.joinUserRoomAwaitToFalse(),I()("#newMessageModal").modal("hide")},joinUserRoomAwaitToFalse:function(){this.msgUsersFollowing=this.msgUsersFollowing.map((function(t){var s=t.id,e=t.account,o=t.name,i=t.avatar,a=!1;return{id:s,account:e,name:o,avatar:i,joinUserRoomAwait:a}})),this.msgUsersUnFollowing=this.msgUsersUnFollowing.map((function(t){var s=t.id,e=t.account,o=t.name,i=t.avatar,a=!1;return{id:s,account:e,name:o,avatar:i,joinUserRoomAwait:a}}))},afterShowUserListModal:function(){this.showModal()},showModal:function(){this.isShowModal=!0},cancelModal:function(){this.joinUserRoomAwaitToFalse(),this.isShowModal=!1},leavePrivatePage:function(){this.$socket.emit("leave_private_page")}},beforeDestroy:function(){this.leavePrivatePage()}},P=j,y=(e("45a9"),Object(p["a"])(P,o,i,!1,null,"291bcd40",null));s["default"]=y.exports},e461:function(t,s,e){},fc32:function(t,s,e){t.exports=e.p+"img/icon_mail-add.86903ff0.svg"}}]);
//# sourceMappingURL=chunk-1fdd5363.61648db6.js.map