(() => {
 const menu=document.querySelector('[data-menu]'); const nav=document.querySelector('#primary-nav');
 if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'Close menu −':'Menu +';});}
 const rotator=document.querySelector('[data-quote]');const button=document.querySelector('[data-next-quote]');
 const quotes=[
  ['I opened main.go once. It looked complicated.','Takeshi, CEO'],
  ['Work smarter, not harder. Preferably, don’t work at all.','Takeshi, visionary'],
  ['We have a banner. That’s basically infrastructure.','Takeshi, CTO'],
  ['My job is to inspire the code. The AI handles the typing.','Takeshi, employee of the month'],
  ['Testing is important. That’s why we hired testers.','Takeshi, QA strategy meeting'],
  ['I don’t interfere with the engineers. Especially because I am the engineers.','Takeshi, management seminar']
 ];
 let index=0;if(rotator&&button){button.addEventListener('click',()=>{index=(index+1)%quotes.length;rotator.textContent='“'+quotes[index][0]+'”';const by=document.querySelector('[data-quote-by]');if(by)by.textContent='— '+quotes[index][1];});}
 document.querySelectorAll('[data-year]').forEach(n=>n.textContent=String(new Date().getFullYear()));
})();
