	const once=(a,b,c)=>{//a:element,b:eventname,c:callback
		const f=o=>{
			a.removeEventListener(f,c);
			c(o)
		};
		a.addEventListener(b,f)
	};



	cons isReady=evt=>{
		console.info('ready:%O',evt);
		//doReadyStuff..
	}


once(document,'DOMContentLoaded',isReady)

