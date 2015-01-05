function once(e,s,l){
 function f(o){l(o);o.target.removeEventListener(o.type,f);}
 e.addEventListener(s,f);
}




function ready(o){
log('ready');
}


once(document,'DOMContentLoaded',ready)

