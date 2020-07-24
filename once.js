  
	const once=(elem,eventType,callback)=>{
		const f=event=>{
			elem.removeEventListener(event.type,f);
			callback(event)
		};
		elem.addEventListener(eventType,f)
	};

 


once(document,'DOMContentLoaded',event=>{
  console.info('ready:%O',event);
  //doReadyStuff..
})
