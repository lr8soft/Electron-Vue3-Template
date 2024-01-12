class ClientController {
	static _WIN = null
	static initElectronTitleButtonFunction(ipc, window) {
		ClientController._WIN = window
		// 网页要求最小化
		ipc.on('min',function(){
			ClientController._WIN.minimize();
		})
		// 网页要求最大化
		ipc.on('max',function(){
			if(ClientController._WIN.isMaximized()){
				ClientController._WIN.restore();
			}else{
				ClientController._WIN.maximize();
			}
		})
		// 网页要求关闭
		ipc.on('close',function(){
			ClientController._WIN.close();
		})
	}
}

module.exports = ClientController