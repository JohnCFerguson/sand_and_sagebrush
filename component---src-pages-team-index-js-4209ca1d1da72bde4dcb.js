"use strict";(self.webpackChunksand_and_sagebrush=self.webpackChunksand_and_sagebrush||[]).push([[164],{3630:function(e,t,i){var o=i(7462),l=i(5987),n=i(7294),a=(i(7301),i(5505)),r=i(4621),s=n.forwardRef((function(e,t){var i=e.cellHeight,r=void 0===i?180:i,s=e.children,c=e.classes,m=e.className,d=e.cols,p=void 0===d?2:d,f=e.component,u=void 0===f?"ul":f,h=e.spacing,g=void 0===h?4:h,v=e.style,w=(0,l.Z)(e,["cellHeight","children","classes","className","cols","component","spacing","style"]);return n.createElement(u,(0,o.Z)({className:(0,a.Z)(c.root,m),ref:t,style:(0,o.Z)({margin:-g/2},v)},w),n.Children.map(s,(function(e){if(!n.isValidElement(e))return null;var t=e.props.cols||1,i=e.props.rows||1;return n.cloneElement(e,{style:(0,o.Z)({width:"".concat(100/p*t,"%"),height:"auto"===r?"auto":r*i+g,padding:g/2},e.props.style)})})))}));t.Z=(0,r.Z)({root:{display:"flex",flexWrap:"wrap",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"}},{name:"MuiGridList"})(s)},4023:function(e,t,i){i.r(t),i.d(t,{default:function(){return b}});var o=i(5905),l=i(7294),n=i(5444),a=i(2335),r=i(8254),s=i(3630),c=i(7462),m=i(5987),d=i(2982),p=i(5505),f=i(1510),u=i(4621),h=i(1008),g=function(e,t){var i,o,l,n;e&&e.complete&&(e.width/e.height>e.parentElement.offsetWidth/e.parentElement.offsetHeight?((i=e.classList).remove.apply(i,(0,d.Z)(t.imgFullWidth.split(" "))),(o=e.classList).add.apply(o,(0,d.Z)(t.imgFullHeight.split(" ")))):((l=e.classList).remove.apply(l,(0,d.Z)(t.imgFullHeight.split(" "))),(n=e.classList).add.apply(n,(0,d.Z)(t.imgFullWidth.split(" ")))))};var v=l.forwardRef((function(e,t){var i=e.children,o=e.classes,n=e.className,a=(e.cols,e.component),r=void 0===a?"li":a,s=(e.rows,(0,m.Z)(e,["children","classes","className","cols","component","rows"])),d=l.useRef(null);return l.useEffect((function(){!function(e,t){e&&(e.complete?g(e,t):e.addEventListener("load",(function(){g(e,t)})))}(d.current,o)})),l.useEffect((function(){var e=(0,f.Z)((function(){g(d.current,o)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}),[o]),l.createElement(r,(0,c.Z)({className:(0,p.Z)(o.root,n),ref:t},s),l.createElement("div",{className:o.tile},l.Children.map(i,(function(e){return l.isValidElement(e)?"img"===e.type||(0,h.Z)(e,["Image"])?l.cloneElement(e,{ref:d}):e:null}))))})),w=(0,u.Z)({root:{boxSizing:"border-box",flexShrink:0},tile:{position:"relative",display:"block",height:"100%",overflow:"hidden"},imgFullHeight:{height:"100%",transform:"translateX(-50%)",position:"relative",left:"50%"},imgFullWidth:{width:"100%",position:"relative",transform:"translateY(-50%)",top:"50%"}},{name:"MuiGridListTile"})(v),Z=l.forwardRef((function(e,t){var i=e.actionIcon,o=e.actionPosition,n=void 0===o?"right":o,a=e.classes,r=e.className,s=e.subtitle,d=e.title,f=e.titlePosition,u=void 0===f?"bottom":f,h=(0,m.Z)(e,["actionIcon","actionPosition","classes","className","subtitle","title","titlePosition"]),g=i&&n;return l.createElement("div",(0,c.Z)({className:(0,p.Z)(a.root,r,"top"===u?a.titlePositionTop:a.titlePositionBottom,s&&a.rootSubtitle),ref:t},h),l.createElement("div",{className:(0,p.Z)(a.titleWrap,{left:a.titleWrapActionPosLeft,right:a.titleWrapActionPosRight}[g])},l.createElement("div",{className:a.title},d),s?l.createElement("div",{className:a.subtitle},s):null),i?l.createElement("div",{className:(0,p.Z)(a.actionIcon,"left"===g&&a.actionIconActionPosLeft)},i):null)})),E=(0,u.Z)((function(e){return{root:{position:"absolute",left:0,right:0,height:48,background:"rgba(0, 0, 0, 0.5)",display:"flex",alignItems:"center",fontFamily:e.typography.fontFamily},titlePositionBottom:{bottom:0},titlePositionTop:{top:0},rootSubtitle:{height:68},titleWrap:{flexGrow:1,marginLeft:16,marginRight:16,color:e.palette.common.white,overflow:"hidden"},titleWrapActionPosLeft:{marginLeft:0},titleWrapActionPosRight:{marginRight:0},title:{fontSize:e.typography.pxToRem(16),lineHeight:"24px",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},subtitle:{fontSize:e.typography.pxToRem(12),lineHeight:1,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},actionIcon:{},actionIconActionPosLeft:{order:-1}}}),{name:"MuiGridListTileBar"})(Z),y=i(2359),b=(0,o.Z)((function(e){var t=e.data.allMarkdownRemark.edges;return l.createElement(r.Z,{title:"Meet the Team"},l.createElement(a.Z,{title:"Meet the Team"}),l.createElement(s.Z,{cellHeight:"auto",cols:1},t.map((function(e){var t=e.node.frontmatter,i=t.path,o=t.title,a=t.image,r=t.jobtitle,s=(0,y.d)(a);return l.createElement(n.rU,{key:i,to:i},l.createElement(w,{cols:1},l.createElement(y.G,{alt:o,image:s}),l.createElement(E,{subtitle:r,title:o})))}))))}))}}]);
//# sourceMappingURL=component---src-pages-team-index-js-4209ca1d1da72bde4dcb.js.map