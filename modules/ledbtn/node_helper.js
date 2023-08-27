const NodeHelper = require("node_helper");
const {spawn} = require('child_process');
const fs = require('fs');


module.exports = NodeHelper.create({

	socketNotificationReceived: function(notification, payload) {
		if (notification === "TURN_OFF_LIGHTS") {
		    var off = spawn('python3',['./modules/ledbtn/off.py']);
		}
		if (notification === "TURN_ON_LIGHTS") {
		    var on = spawn('python3',['./modules/ledbtn/on.py']);
		}
		if (notification === "TURN_OFF_SENSOR") {
			fs.readFile('./modules/ledbtn/config.json', (err,data) => {
				let jsonData = JSON.parse(data);
				jsonData.sensor = 0;
				let updatedData = JSON.stringify(jsonData, null, 2);
				fs.writeFile('./modules/ledbtn/config.json', updatedData, 'utf8',(err) => {});
				this.sendSocketNotification("CHANGE_DALAY", payload);
			});
		}
		if (notification === "TURN_ON_SENSOR") {
			fs.readFile('./modules/ledbtn/config.json', (err,data) => {
				let jsonData = JSON.parse(data);
				jsonData.sensor = 1;
				let updatedData = JSON.stringify(jsonData, null, 2);
				fs.writeFile('./modules/ledbtn/config.json', updatedData, 'utf8',(err) => {});
				spawn('python3',['./modules/ledbtn/sensor.py']);
			})
		}
		if (notification === "TURN_RED") {
			fs.readFile('./modules/ledbtn/config.json', (err,data) => {
				let jsonData = JSON.parse(data);
				jsonData.R = 247;
				jsonData.G = 244;
				jsonData.B = 161;
				let updatedData = JSON.stringify(jsonData, null, 2);
				fs.writeFile('./modules/ledbtn/config.json', updatedData, 'utf8',(err) => {});
				spawn('python3',['./modules/ledbtn/on.py']);
				this.sendSocketNotification("CHANGE", payload);
			})
		}
		if (notification === "TURN_GREEN") {
			fs.readFile('./modules/ledbtn/config.json', (err,data) => {
				let jsonData = JSON.parse(data);
				jsonData.R = 0;
				jsonData.G = 255;
				jsonData.B = 0;
				let updatedData = JSON.stringify(jsonData, null, 2);
				fs.writeFile('./modules/ledbtn/config.json', updatedData, 'utf8',(err) => {});
				spawn('python3',['./modules/ledbtn/on.py']);
				this.sendSocketNotification("CHANGE", payload);
			})
		}
		if (notification === "TURN_BLUE") {
			fs.readFile('./modules/ledbtn/config.json', (err,data) => {
				let jsonData = JSON.parse(data);
				jsonData.R = 0;
				jsonData.G = 0;
				jsonData.B = 255;
				let updatedData = JSON.stringify(jsonData, null, 2);
				fs.writeFile('./modules/ledbtn/config.json', updatedData, 'utf8',(err) => {});
				spawn('python3',['./modules/ledbtn/on.py']);
				this.sendSocketNotification("CHANGE", payload);
			})
		}
		if (notification === "TURN_WHITE") {
			fs.readFile('./modules/ledbtn/config.json', (err,data) => {
				let jsonData = JSON.parse(data);
				jsonData.R = 255;
				jsonData.G = 255;
				jsonData.B = 255;
				let updatedData = JSON.stringify(jsonData, null, 2);
				fs.writeFile('./modules/ledbtn/config.json', updatedData, 'utf8',(err) => {});
				spawn('python3',['./modules/ledbtn/on.py']);
				this.sendSocketNotification("CHANGE", payload);
			})
		}
		if (notification === "TURN_PLUS_ONE") {
			fs.readFile('./modules/ledbtn/config.json', (err,data) => {
				let jsonData = JSON.parse(data);
					if (jsonData.brightness < 231){
						if(Math.trunc(jsonData.brightness/255*10)%2 == 0){
						jsonData.brightness = jsonData.brightness + 26;
						}else{
							jsonData.brightness = jsonData.brightness + 25;
							}
					}
				let updatedData = JSON.stringify(jsonData, null, 2);
				fs.writeFile('./modules/ledbtn/config.json', updatedData, 'utf8',(err) => {});
			})
			this.sendSocketNotification("CHANGE", payload);
		};
		if (notification === "TURN_CUT_ONE") {
			fs.readFile('./modules/ledbtn/config.json', (err,data) => {
				let jsonData = JSON.parse(data);
					if (jsonData.brightness > 25){
						if(Math.trunc(jsonData.brightness/255*10)%2 == 0){
						jsonData.brightness = jsonData.brightness - 25;
						}else{
							jsonData.brightness = jsonData.brightness - 26;
							}
					}
				let updatedData = JSON.stringify(jsonData, null, 2);
				fs.writeFile('./modules/ledbtn/config.json', updatedData, 'utf8',(err) => {});
			})
			this.sendSocketNotification("CHANGE", payload);
		};
		if (notification === "TURN_PLUS_TEN_R") {
			fs.readFile('./modules/ledbtn/config.json', (err,data) => {
				let jsonData = JSON.parse(data);
					if (jsonData.R < 246){
						jsonData.R = jsonData.R + 10;
					}
				let updatedData = JSON.stringify(jsonData, null, 2);
				fs.writeFile('./modules/ledbtn/config.json', updatedData, 'utf8',(err) => {});
			})
			this.sendSocketNotification("CHANGE", payload);
		};
		if (notification === "TURN_PLUS_ONE_R") {
			fs.readFile('./modules/ledbtn/config.json', (err,data) => {
				let jsonData = JSON.parse(data);
					if (jsonData.R < 255){
						jsonData.R = jsonData.R + 1;
					}
				let updatedData = JSON.stringify(jsonData, null, 2);
				fs.writeFile('./modules/ledbtn/config.json', updatedData, 'utf8',(err) => {});
			})
			this.sendSocketNotification("CHANGE", payload);
		};
		if (notification === "TURN_CUT_ONE_R") {
			fs.readFile('./modules/ledbtn/config.json', (err,data) => {
				let jsonData = JSON.parse(data);
					if (jsonData.R > 0){
						jsonData.R = jsonData.R - 1;
					}
				let updatedData = JSON.stringify(jsonData, null, 2);
				fs.writeFile('./modules/ledbtn/config.json', updatedData, 'utf8',(err) => {});
			})
			this.sendSocketNotification("CHANGE", payload);
		};
		if (notification === "TURN_CUT_TEN_R") {
			fs.readFile('./modules/ledbtn/config.json', (err,data) => {
				let jsonData = JSON.parse(data);
					if (jsonData.R > 9){
						jsonData.R = jsonData.R - 10;
					}
				let updatedData = JSON.stringify(jsonData, null, 2);
				fs.writeFile('./modules/ledbtn/config.json', updatedData, 'utf8',(err) => {});
			})
			this.sendSocketNotification("CHANGE", payload);
		};
		if (notification === "TURN_PLUS_TEN_G") {
			fs.readFile('./modules/ledbtn/config.json', (err,data) => {
				let jsonData = JSON.parse(data);
					if (jsonData.G < 246){
						jsonData.G = jsonData.G + 10;
					}
				let updatedData = JSON.stringify(jsonData, null, 2);
				fs.writeFile('./modules/ledbtn/config.json', updatedData, 'utf8',(err) => {});
			})
			this.sendSocketNotification("CHANGE", payload);
		};
		if (notification === "TURN_PLUS_ONE_G") {
			fs.readFile('./modules/ledbtn/config.json', (err,data) => {
				let jsonData = JSON.parse(data);
					if (jsonData.G < 255){
						jsonData.G = jsonData.G + 1;
					}
				let updatedData = JSON.stringify(jsonData, null, 2);
				fs.writeFile('./modules/ledbtn/config.json', updatedData, 'utf8',(err) => {});
			})
			this.sendSocketNotification("CHANGE", payload);
		};
		if (notification === "TURN_CUT_ONE_G") {
			fs.readFile('./modules/ledbtn/config.json', (err,data) => {
				let jsonData = JSON.parse(data);
					if (jsonData.G > 0){
						jsonData.G = jsonData.G - 1;
					}
				let updatedData = JSON.stringify(jsonData, null, 2);
				fs.writeFile('./modules/ledbtn/config.json', updatedData, 'utf8',(err) => {});
			})
			this.sendSocketNotification("CHANGE", payload);
		};
		if (notification === "TURN_CUT_TEN_G") {
			fs.readFile('./modules/ledbtn/config.json', (err,data) => {
				let jsonData = JSON.parse(data);
					if (jsonData.G > 9){
						jsonData.G = jsonData.G - 10;
					}
				let updatedData = JSON.stringify(jsonData, null, 2);
				fs.writeFile('./modules/ledbtn/config.json', updatedData, 'utf8',(err) => {});
			})
			this.sendSocketNotification("CHANGE", payload);
		};
		if (notification === "TURN_PLUS_TEN_B") {
			fs.readFile('./modules/ledbtn/config.json', (err,data) => {
				let jsonData = JSON.parse(data);
					if (jsonData.B < 246){
						jsonData.B = jsonData.B + 10;
					}
				let updatedData = JSON.stringify(jsonData, null, 2);
				fs.writeFile('./modules/ledbtn/config.json', updatedData, 'utf8',(err) => {});
			})
			this.sendSocketNotification("CHANGE", payload);
		};
		if (notification === "TURN_PLUS_ONE_B") {
			fs.readFile('./modules/ledbtn/config.json', (err,data) => {
				let jsonData = JSON.parse(data);
					if (jsonData.B < 255){
						jsonData.B = jsonData.B + 1;
					}
				let updatedData = JSON.stringify(jsonData, null, 2);
				fs.writeFile('./modules/ledbtn/config.json', updatedData, 'utf8',(err) => {});
			})
			this.sendSocketNotification("CHANGE", payload);
		};
		if (notification === "TURN_CUT_ONE_B") {
			fs.readFile('./modules/ledbtn/config.json', (err,data) => {
				let jsonData = JSON.parse(data);
					if (jsonData.B > 0){
						jsonData.B = jsonData.B - 1;
					}
				let updatedData = JSON.stringify(jsonData, null, 2);
				fs.writeFile('./modules/ledbtn/config.json', updatedData, 'utf8',(err) => {});
			})
			this.sendSocketNotification("CHANGE", payload);
		};
		if (notification === "TURN_CUT_TEN_B") {
			fs.readFile('./modules/ledbtn/config.json', (err,data) => {
				let jsonData = JSON.parse(data);
					if (jsonData.B > 9){
						jsonData.B = jsonData.B - 10;
					}
				let updatedData = JSON.stringify(jsonData, null, 2);
				fs.writeFile('./modules/ledbtn/config.json', updatedData, 'utf8',(err) => {});
			})
			this.sendSocketNotification("CHANGE", payload);
		};
		if (notification === "SUBMIT") {
		    var submit = spawn('python3',['./modules/ledbtn/on.py']);
		}
	}
});
