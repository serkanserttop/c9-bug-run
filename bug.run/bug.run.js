define(function(require, exports, module) {
	main.consumes = ["Plugin", 'run', 'commands', 'c9', 'proc'];
	main.provides = ["bug.run"];
	return main;

	function main(options, imports, register) {
		var Plugin = imports.Plugin;
		var run = imports.run;
		var commands = imports.commands;
		var c9 = imports.c9;
		var proc = imports.proc;

		/***** Initialization *****/
		var plugin = new Plugin("Serkan", main.consumes);
		var emit = plugin.getEmitter();


		function load() {
			commands.addCommand({
				name: "callNodeViaProc",
				isAvailable: function() {
					return true;
				},
				exec: function() {
					callNodeViaProc();
				}
			}, plugin);

			commands.addCommand({
				name: "callNodeViaRun",
				isAvailable: function() {
					return true;
				},
				exec: function() {
					callNodeViaRun();
				}
			}, plugin);

		}

		function callNodeViaRun() {
			var process = run.run("auto", {
				path: c9.workspaceDir + "/server.js"
			}, function(err, pid) {
				console.log("in the process callback");
			});
		}

		function callNodeViaProc() {
			proc.spawn("node", {
				args: ['server.js'],
				cwd: c9.workspaceDir,
			}, function(err, process) {
				if (err) throw err;
				process.stdout.on("data", function(chunk) {
					console.log(chunk);
				});
				process.stderr.on("data", function(chunk) {
					console.error(chunk);
				});
			});
		}
		/***** Methods *****/

		/***** Lifecycle *****/

		plugin.on("load", function() {
			load();
		});
		plugin.on("unload", function() {

		});

		/***** Register and define API *****/

		plugin.freezePublicAPI({

		});

		register(null, {
			"bug.run": plugin
		});
	}
});