
if ('serviceWorker' in navigator) {
 window.addEventListener('load', ()=>{
  navigator.serviceWorker.register('service-worker.js',{scope:'/Health/'});
 });
}

let deferred;
window.addEventListener('beforeinstallprompt',e=>{
 e.preventDefault();
 deferred=e;
 document.getElementById('installBtn').hidden=false;
});

document.getElementById('installBtn').onclick=async()=>{
 if(!deferred) return;
 deferred.prompt();
 await deferred.userChoice;
 deferred=null;
 document.getElementById('installBtn').hidden=true;
};
