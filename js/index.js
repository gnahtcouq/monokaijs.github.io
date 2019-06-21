(() => {
	$.get("https://api.github.com/repos/monokaijs/monokaijs.github.io/contents/projects").done(projects => {
		console.log(projects);
	});
})();
