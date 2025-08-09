import{r as A,l as M,k as B,b as a,o as u,c as h,d as e,i as D,w as i,e as t,f as v,t as l,y as r,q as f,z as C,u as P,E as y,A as N,B as V,C as E,D as I}from"./index-1093a8fd.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";const H={class:"announcement-detail"},L={class:"main-content"},R={class:"announcement-header"},q={class:"header-main"},S={class:"title-section"},j={class:"priority-badge"},F={class:"announcement-title"},G={class:"back-button-wrapper"},J={class:"meta-section"},K={class:"meta-simple"},O={class:"meta-item"},Q={class:"meta-item"},U={class:"meta-item"},W={class:"announcement-body"},X={class:"content-wrapper"},Y=["innerHTML"],Z={key:0,class:"loading-container"},$={__name:"AnnouncementDetail",setup(ee){const _=C(),d=P(),n=A(null),p=async()=>{try{const s=_.params.id,o={1:{id:1,title:"系统维护通知 - 重要升级公告",content:`
          <div class="announcement-content">
            <h3>尊敬的用户：</h3>
            <p>为了提供更好的服务体验，我们将于 <strong>2024年1月20日 02:00-06:00</strong> 进行系统维护升级。</p>
            
            <h4>维护内容：</h4>
            <ul>
              <li>🔧 系统核心功能优化</li>
              <li>🛡️ 安全性能提升</li>
              <li>⚡ 响应速度优化</li>
              <li>🐛 已知问题修复</li>
            </ul>
            
            <h4>影响范围：</h4>
            <p>维护期间，以下功能将暂时不可用：</p>
            <ul>
              <li>API接口调用</li>
              <li>文件加密服务</li>
              <li>账户充值功能</li>
            </ul>
            
            <div class="notice-box">
              <h4>⚠️ 重要提醒：</h4>
              <p>请您提前做好相关准备，避免在维护期间进行重要操作。如有紧急需求，请联系客服。</p>
            </div>
            
            <p>感谢您的理解与支持！</p>
            <p><strong>技术团队</strong><br>2024年1月15日</p>
          </div>
        `,publishTime:"2024-01-15 14:30",updateTime:"2024-01-15 16:20",author:"系统管理员",priority:"high",views:1250},2:{id:2,title:"新功能上线公告 - API接口升级",content:`
          <div class="announcement-content">
            <h3>功能升级通知</h3>
            <p>我们很高兴地宣布，新版本API接口已正式上线！</p>
            
            <h4>新增功能：</h4>
            <ul>
              <li>✨ 批量处理接口</li>
              <li>📊 实时状态监控</li>
              <li>🔄 自动重试机制</li>
            </ul>
            
            <p>详细文档请查看开发者中心。</p>
          </div>
        `,publishTime:"2024-01-10 10:00",author:"产品团队",priority:"medium",views:890},3:{id:3,title:"安全提醒 - 账户保护建议",content:`
          <div class="announcement-content">
            <h3>账户安全提醒</h3>
            <p>为保障您的账户安全，请注意以下事项：</p>
            
            <ul>
              <li>🔐 定期更换密码</li>
              <li>📱 启用双因素认证</li>
              <li>🚫 不要在公共网络进行敏感操作</li>
            </ul>
          </div>
        `,publishTime:"2024-01-08 16:45",author:"安全团队",priority:"medium",views:567}};if(n.value=o[s],!n.value){y.error("公告不存在"),d.push("/user/dashboard");return}}catch(s){console.error("获取公告详情失败:",s),y.error("获取公告详情失败"),d.push("/user/dashboard")}},g=s=>({urgent:"danger",high:"warning",medium:"primary",low:"info"})[s]||"info",b=s=>({urgent:"紧急",high:"重要",medium:"一般",low:"低"})[s]||"一般",w=()=>{d.go(-1)};return M(()=>{p()}),B(()=>_.params.id,(s,o)=>{s&&s!==o&&p()},{immediate:!1}),(s,o)=>{const k=a("el-tag"),c=a("el-icon"),T=a("el-button"),m=a("el-card"),x=a("el-skeleton");return u(),h("div",H,[e("div",L,[n.value?(u(),D(m,{key:0,class:"announcement-card"},{default:i(()=>[e("div",R,[e("div",q,[e("div",S,[e("div",j,[t(k,{type:g(n.value.priority),size:"large",effect:"plain",round:""},{default:i(()=>[v(l(b(n.value.priority)),1)]),_:1},8,["type"])]),e("h2",F,l(n.value.title),1),e("div",G,[t(T,{onClick:w,type:"primary",plain:""},{default:i(()=>[t(c,null,{default:i(()=>[t(r(N))]),_:1}),o[0]||(o[0]=v(" 上一页 ",-1))]),_:1,__:[0]})])]),e("div",J,[e("div",K,[e("div",O,[t(c,null,{default:i(()=>[t(r(V))]),_:1}),e("span",null,l(n.value.publishTime),1)]),e("div",Q,[t(c,null,{default:i(()=>[t(r(E))]),_:1}),e("span",null,l(n.value.views)+" 次阅读",1)]),e("div",U,[t(c,null,{default:i(()=>[t(r(I))]),_:1}),e("span",null,l(n.value.author),1)])])])])]),o[1]||(o[1]=e("div",{class:"content-divider"},null,-1)),e("div",W,[e("div",X,[e("div",{innerHTML:n.value.content,class:"content-text"},null,8,Y)])])]),_:1,__:[1]})):f("",!0)]),n.value?f("",!0):(u(),h("div",Z,[t(m,{class:"loading-card"},{default:i(()=>[t(x,{rows:8,animated:""})]),_:1})]))])}}},se=z($,[["__scopeId","data-v-0977ccd1"]]);export{se as default};
