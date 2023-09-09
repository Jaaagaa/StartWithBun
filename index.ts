const server = Bun.serve({
	port:3000,
	fetch(request){
		return new Response("welcome to Bun");
	},

});

console.log(`Listening on localhost:${server.port}`);

