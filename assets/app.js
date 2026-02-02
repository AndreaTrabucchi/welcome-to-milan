(function(){
  const dl = document.querySelectorAll('[data-download]');
  dl.forEach(a=>{
    a.addEventListener('click', ()=>{
      try{
        window.localStorage.setItem('milan_dl', String(Date.now()));
      }catch(e){}
    });
  });

  // If user opened the PDF instead of downloading, keep UX consistent
  const viewBtn = document.querySelector('[data-view]');
  if(viewBtn){
    viewBtn.addEventListener('click', ()=>{
      try{
        window.localStorage.setItem('milan_view', String(Date.now()));
      }catch(e){}
    });
  }
})();
