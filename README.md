This is a simple example demonstrating a bug with `run.run` call.

Call command: callNodeViaProc -> Works without any problem.

Call command: callNodeViaRun -> Errors received

		reliable_socket.js:129 TypeError: Cannot read property 'map' of undefined
				at bashQuote (http://localhost:8181/static/plugins/c9.ide.run/run.js:814:31)
				at getVariable (http://localhost:8181/static/plugins/c9.ide.run/run.js:436:28)
				at http://localhost:8181/static/plugins/c9.ide.run/run.js:486:48
				at String.replace (native)
				at insertVariables (http://localhost:8181/static/plugins/c9.ide.run/run.js:483:31)
				at http://localhost:8181/static/plugins/c9.ide.run/run.js:325:27
				at Array.map (native)
				at run (http://localhost:8181/static/plugins/c9.ide.run/run.js:304:30)
				at http://localhost:8181/static/plugins/c9.ide.run/run.js:286:25
				at done (http://localhost:8181/static/plugins/c9.ide.run/run.js:115:32)ReliableSocket.onMessage @ reliable_socket.js:129EventEmitter.emit @ events.js:78ReconnectSocket.onMessage @ reconnect_socket.js:10012.Emitter.emit @ engine.io.js:22813.Socket.onPacket @ engine.io.js:449(anonymous function) @ engine.io.js:26612.Emitter.emit @ engine.io.js:22814.Transport.onPacket @ engine.io.js:8734.Transport.onData @ engine.io.js:8659.WS.addEventListeners.ws.onmessage @ engine.io.js:1928


		reliable_socket.js:132 Uncaught TypeError: Cannot read property 'map' of undefined
				bashQuote @ run.js:814getVariable @ run.js:436(anonymous function) @ run.js:486insertVariables @ run.js:483(anonymous function) @ run.js:325run @ run.js:304(anonymous function) @ run.js:286done @ run.js:115(anonymous function) @ run.js:108(anonymous function) @ run.js:70cb @ fs.js:133(anonymous function) @ fs.streams.js:131processCallback @ consumer.js:399(anonymous function) @ consumer.js:428Agent._storeFunction.callbacks.(anonymous function) @ smith.js:508Agent._onMessage @ smith.js:471EventEmitter.emit @ events.js:78onMessage @ smith.js:773EventEmitter.emit @ events.js:78ReliableSocket.onMessage @ reliable_socket.js:127EventEmitter.emit @ events.js:78ReconnectSocket.onMessage @ reconnect_socket.js:10012.Emitter.emit @ engine.io.js:22813.Socket.onPacket @ engine.io.js:449(anonymous function) @ engine.io.js:26612.Emitter.emit @ engine.io.js:22814.Transport.onPacket @ engine.io.js:8734.Transport.onData @ engine.io.js:8659.WS.addEventListeners.ws.onmessage @ engine.io.js:1928