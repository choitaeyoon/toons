(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(e,a,t){e.exports=t(326)},151:function(e,a,t){},269:function(e,a){},326:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(21),o=t.n(i),s=t(16),c=t(17),l=t(19),m=t(18),u=t(20),p=t(330),h=t(328),d=(t(86),t(151),t(31)),g=t(60),f=t.n(g),E=t(42),b=t.n(E),v=t(41),y=t.n(v),w=t(26),j=t.n(w),O=t(23),k=t.n(O),C=t(27),x=t.n(C),N=t(61),S=t.n(N),T=t(29),I=t.n(T),P=t(24),B=t.n(P),A=t(5),D=t.n(A),F=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).handleInputChange=function(e){var a=e.target,n=a.value,r=a.name;t.setState(Object(d.a)({},r,n))},t.onSubmit=function(e){e.preventDefault(),fetch("https://api.toons.tae-yoon.me/api/user/authenticate",{method:"POST",credentials:"include",body:JSON.stringify(t.state),headers:{"Content-Type":"application/json",Accept:"application/json",Cache:"no-cache"}}).then(function(e){if(200!==e.status)throw console.log(e.body),new Error(e.error);console.log("verified"),t.props.history.push("/")}).catch(function(e){console.log(e),alert("Email or Password Incorrect")})},t.state={email:"",password:""},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.props.classes;return r.a.createElement("main",{className:a.main},r.a.createElement(y.a,null),r.a.createElement(I.a,{className:a.paper},r.a.createElement(f.a,{className:a.avatar},r.a.createElement(S.a,null)),r.a.createElement(B.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:a.form,onSubmit:this.onSubmit},r.a.createElement(j.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(x.a,{htmlFor:"email"},"Email Address"),r.a.createElement(k.a,{id:"email",name:"email",autoComplete:"email",value:this.state.email,onChange:this.handleInputChange})),r.a.createElement(j.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(x.a,{htmlFor:"password"},"Password"),r.a.createElement(k.a,{id:"password",name:"password",type:"password",autoComplete:"current-password",value:this.state.password,onChange:this.handleInputChange})),r.a.createElement(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:a.submit},"Sign in")),r.a.createElement(b.a,{variant:"text",size:"small",type:"register",className:a.register,onClick:function(){return e.props.history.push("/register")}},"Register Now")))}}]),a}(r.a.Component),R=D()(function(e){return{html:{fontFamily:"roboto"},main:Object(d.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit,marginBottom:2*e.spacing.unit},submit:{marginTop:3*e.spacing.unit},register:{marginTop:2*e.spacing.unit},facebook:{marginTop:3*e.spacing.unit}}})(F),W=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).handleInputChange=function(e){var a=e.target,n=a.value,r=a.name;t.setState(Object(d.a)({},r,n))},t.onSubmit=function(e){e.preventDefault();var a=t.state;a.password!==a.confirmPassword?alert("Passwords don't match"):fetch("https://api.toons.tae-yoon.me/api/user/register",{method:"POST",credentials:"include",body:JSON.stringify(t.state),headers:{"Content-Type":"application/json"}}).then(function(e){if(200===e.status)t.props.history.push("/signin");else{if(202!=e.status)throw new Error(e.error);alert("User already exists")}}).catch(function(e){console.log(e),alert("Error logging in")})},t.state={email:"",password:"",confirmPassword:"",nickname:""},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.props.classes;return r.a.createElement("main",{className:a.main},r.a.createElement(y.a,null),r.a.createElement(I.a,{className:a.paper},r.a.createElement(f.a,{className:a.avatar},r.a.createElement(S.a,null)),r.a.createElement(B.a,{component:"h1",variant:"h5"},"Register"),r.a.createElement("form",{className:a.form,onSubmit:this.onSubmit},r.a.createElement(j.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(x.a,{htmlFor:"nickname"},"Nickname"),r.a.createElement(k.a,{id:"nickname",name:"nickname",autoComplete:"nickname",value:this.state.nickname,onChange:this.handleInputChange,autoFocus:!0})),r.a.createElement(j.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(x.a,{htmlFor:"email"},"Email Address"),r.a.createElement(k.a,{id:"email",name:"email",autoComplete:"email",value:this.state.email,onChange:this.handleInputChange})),r.a.createElement(j.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(x.a,{htmlFor:"password"},"Password"),r.a.createElement(k.a,{id:"password",name:"password",type:"password",value:this.state.password,onChange:this.handleInputChange})),r.a.createElement(j.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(x.a,{htmlFor:"confirmPassword"},"Confirm Password"),r.a.createElement(k.a,{id:"confirmPassword",name:"confirmPassword",type:"password",value:this.state.confirmPassword,onChange:this.handleInputChange})),r.a.createElement(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:a.submit},"Register")),r.a.createElement(b.a,{variant:"text",size:"small",type:"signin",className:a.signin,onClick:function(){return e.props.history.push("/signin")}},"Already have an account? Click Here")))}}]),a}(r.a.Component),U=D()(function(e){return{main:Object(d.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit},signin:{marginTop:2*e.spacing.unit}}})(W),L=t(144),q=t(129),G=t.n(q),_=t(30),z=t(62),J=t.n(z),M=t(140),H=t.n(M),V=t(141),K=t.n(V),X=t(142),Y=t.n(X),Q=t(143),Z=t.n(Q),$=t(63),ee=t.n($),ae=t(130),te=t(6),ne=t.n(te),re=t(131),ie=t.n(re),oe=t(132),se=t.n(oe),ce=t(133),le=t.n(ce),me=t(134),ue=t.n(me),pe=function(e){function a(){return Object(s.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(ie.a,{position:"absolute",className:ne()(e.appBar)},r.a.createElement(se.a,{className:e.toolbar},r.a.createElement(B.a,{component:"h1",variant:"h5",color:"inherit",noWrap:!0,className:e.title},"Toons Room"),r.a.createElement(J.a,{color:"inherit"},r.a.createElement(le.a,{badgeContent:4,color:"secondary"},r.a.createElement(ue.a,null)))))}}]),a}(n.Component),he=Object(_.withStyles)(function(e){return{appBar:{zIndex:e.zIndex.drawer+1},toolbar:{paddingRight:24},toolbarIcon:Object(ae.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),menuButton:{marginLeft:12,marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1}}})(pe),de=t(135),ge=t.n(de),fe=t(84),Ee=t.n(fe),be=t(136),ve=t.n(be),ye=t(137),we=t.n(ye),je=t(139),Oe=t.n(je),ke=t(138),Ce=t.n(ke),xe=function(e){function a(e){return Object(s.a)(this,a),Object(l.a)(this,Object(m.a)(a).call(this,e))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(ge.a,{className:e.drawer,variant:"permanent",classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.toolbar}),r.a.createElement(Ee.a,null,this.props.onlineUsers.map(function(e){return r.a.createElement(ve.a,{button:!0},r.a.createElement(we.a,null,r.a.createElement(Ce.a,null)),r.a.createElement(Oe.a,{primary:e.nickname}))})),r.a.createElement(ee.a,null))}}]),a}(n.Component),Ne=Object(_.withStyles)(function(e){return{drawer:{width:240,flexShrink:0},drawerPaper:{width:240},toolbar:{marginTop:10*e.spacing.unit}}})(xe),Se=function(e){function a(e){var t;Object(s.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).scrollToBottom=function(){t.messagesEnd.scrollIntoView({behavior:"smooth"})},t.state={email:"",nickname:"",message:"",messages:[],onlineUsers:[]},t.socket=G()("https://api.toons.tae-yoon.me"),t.socket.on("connect",function(){fetch("https://api.toons.tae-yoon.me/api/user/userInfo",{credentials:"include",Cache:"no-cache",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(function(e){return e.json()}).then(function(e){n(e),t.socket.emit("NEW_CONNECTION",{nickname:e.nickname})})});var n=function(e){t.setState({nickname:e.nickname,email:e.email})};t.socket.on("ONLINE_USERS_UPDATE",function(e){r(e)});var r=function(e){t.setState({onlineUsers:e})};t.socket.on("RECEIVE_MESSAGE",function(e){i(e)});var i=function(e){t.setState({messages:[].concat(Object(L.a)(t.state.messages),[e])})};return t.textFieldEnter=function(e){"Enter"===e.key&&(e.preventDefault(),t.socket.emit("SEND_MESSAGE",{author:t.state.nickname,message:t.state.message}),t.setState({message:""}))},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){var e=this,a=this.props.classes;return r.a.createElement("div",{className:a.root},r.a.createElement(y.a,null),r.a.createElement(he,null),r.a.createElement(Ne,{onlineUsers:this.state.onlineUsers}),r.a.createElement("main",{className:a.content},r.a.createElement("div",{className:a.appBarSpacer}),r.a.createElement("div",{className:a.tableContainer},r.a.createElement(H.a,{className:a.chatBox},r.a.createElement(K.a,{className:a.chatLog},this.state.messages.map(function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:a.author},r.a.createElement(B.a,{component:"h1",variant:"h6",color:"secondary"},e.author)),r.a.createElement("div",{className:a.message},r.a.createElement(B.a,{component:"h1",variant:"body1"},e.message)),r.a.createElement(ee.a,{className:a.divider,variant:"middle",light:"true"}))}),r.a.createElement("div",{style:{float:"left",clear:"both"},ref:function(a){e.messagesEnd=a}})),r.a.createElement("cardActions",{className:a.actions,disableActionSpacing:!0},r.a.createElement(Y.a,{className:a.textfield,variant:"filled",multiline:"true",value:this.state.message,onChange:function(a){return e.setState({message:a.target.value})},onKeyPress:this.textFieldEnter}),r.a.createElement(J.a,{"aria-label":"more",className:a.actionsIcons},r.a.createElement(Z.a,null)))))))}}]),a}(n.Component),Te=Object(_.withStyles)(function(e){return{html:{fontFamily:"roboto"},root:{display:"flex"},appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,padding:3*e.spacing.unit,height:"100vh",overflow:"auto"},tableContainer:{height:"90%",display:"flex"},chatBox:{display:"flex",flexDirection:"column",flexGrow:1},chatLog:{height:"90%",width:"100%",margin:"auto",overflowY:"scroll",overflowX:"hidden"},actions:{display:"flex",flexDirection:"row"},textfield:{flexGrow:10},divider:{margin:"10px"}}})(Se),Ie=t(329);var Pe=function(e){function a(){return Object(s.a)(this,a),Object(l.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(h.a,{exact:!0,path:"/",component:(e=Te,function(a){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).state={loading:!0,redirect:!1},e}return Object(u.a)(t,a),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.toons.tae-yoon.me/api/checkToken",{credentials:"include",headers:{"Content-Type":"application/json",Accept:"application/json",Cache:"no-cache"}}).then(function(a){if(200!==a.status)throw new Error(a.error);e.setState({loading:!1})}).catch(function(a){console.error(a),e.setState({loading:!1,redirect:!0})})}},{key:"render",value:function(){var a=this.state,t=a.loading,n=a.redirect;return t?null:n?r.a.createElement(Ie.a,{to:"/signin"}):r.a.createElement(r.a.Fragment,null,r.a.createElement(e,this.props))}}]),t}(n.Component))}),r.a.createElement(h.a,{exact:!0,path:"/signin",component:R}),r.a.createElement(h.a,{exact:!0,path:"/register",component:U}))));var e}}]),a}(n.Component);o.a.render(r.a.createElement(Pe,null),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.a96f1055.chunk.js.map