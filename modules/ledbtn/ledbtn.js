Module.register("ledbtn", {
	
	getStyles: function () {
		return ["ledbtn.css"];
	},
	getDom: function () {
		
		let table = document.createElement("div");
		table.className = "table"
		let wrapper = document.createElement("div");
		wrapper.className = "wrapper";
		let label1 = document.createElement("div");
		label1.textContent = "Power";
		label1.style.color = "white";
		let wrapperfirstrow = document.createElement("div");
		wrapperfirstrow.className = "wrapperrow"
		var btnon = document.createElement("button");
		btnon.textContent ="on";
		btnon.className = "btnn";
		
		btnon.addEventListener('click', () => {
			this.sendSocketNotification("TURN_ON_LIGHTS")
		});
		var btnoff = document.createElement("button");
		btnoff.textContent ="off";
		btnoff.className = "btnn";
		
		btnoff.addEventListener('click', () => {
			this.sendSocketNotification("TURN_OFF_LIGHTS")
		});
		wrapperfirstrow.appendChild(btnon);
		wrapperfirstrow.appendChild(btnoff);
		
		let label2 = document.createElement("div");
		label2.textContent = "Light sensor";
		label2.style.color = "white";
		let wrappersecondrow = document.createElement("div");
		wrappersecondrow.className = "wrapperrow"
		var btnsensoron = document.createElement("button");
		btnsensoron.textContent ="on";
		btnsensoron.className = "btnn";
		
		btnsensoron.addEventListener('click', () => {
			this.sendSocketNotification("TURN_ON_SENSOR")
		});
		var btnsensoroff = document.createElement("button");
		btnsensoroff.textContent ="off";
		btnsensoroff.className = "btnn";
		
		btnsensoroff.addEventListener('click', () => {
			this.sendSocketNotification("TURN_OFF_SENSOR")
		});
		wrappersecondrow.appendChild(btnsensoron);
		wrappersecondrow.appendChild(btnsensoroff);
		
		let label3 = document.createElement("div");
		label3.textContent = "Color";
		label3.style.color = "white";
		let wrapperthirdrow = document.createElement("div");
		wrapperthirdrow.className = "wrapperrow"
		var btnred = document.createElement("button");
		btnred.textContent ="yellow";
		btnred.className = "btnn";
		
		btnred.addEventListener('click', () => {
			this.sendSocketNotification("TURN_RED")
		});
		var btngreen = document.createElement("button");
		btngreen.textContent ="green";
		btngreen.className = "btnn";
		
		btngreen.addEventListener('click', () => {
			this.sendSocketNotification("TURN_GREEN")
		});
		wrapperthirdrow.appendChild(btnred);
		wrapperthirdrow.appendChild(btngreen);
		let wrapperforthrow = document.createElement("div");
		wrapperforthrow.className = "wrapperrow"
		var btnblue = document.createElement("button");
		btnblue.textContent ="blue";
		btnblue.className = "btnn";
		
		btnblue.addEventListener('click', () => {
			this.sendSocketNotification("TURN_BLUE")
		});
		var btnwhite = document.createElement("button");
		btnwhite.textContent ="white";
		btnwhite.className = "btnn";
		
		btnwhite.addEventListener('click', () => {
			this.sendSocketNotification("TURN_WHITE")
		});
		wrapperforthrow.appendChild(btnblue);
		wrapperforthrow.appendChild(btnwhite);
		
		let submitrow = document.createElement("div");
		submitrow.className = "wrapperrow"
		var btnsubmit = document.createElement("button");
		btnsubmit.textContent ="submit";
		btnsubmit.className = "btnn";
		
		btnsubmit.addEventListener('click', () => {
			this.sendSocketNotification("SUBMIT")
		});
		submitrow.appendChild(btnsubmit);
		let wrapper2 = document.createElement("div");
		wrapper2.className = "wrapperbig";
		let wrapperlabel = document.createElement("div");
		wrapperlabel.className = "wrapperrow"
		var blank = document.createElement("div");
		blank.className = "Label"
		let label4 = document.createElement("div");
		label4.textContent = "Brightness";
		label4.style.color = "white";
		wrapperlabel.appendChild(blank);
		wrapperlabel.appendChild(label4);
		let wrapper2firstrow = document.createElement("div");
		wrapper2firstrow.className = "wrapperrow"
		
		var btnplus = document.createElement("button");
		btnplus.textContent ="-1";
		btnplus.className = "btn";
		
		btnplus.addEventListener('click', () => {
			this.sendSocketNotification("TURN_CUT_ONE")
		});
		var btncut = document.createElement("button");
		btncut.textContent ="+1";
		btncut.className = "btn";
		
		btncut.addEventListener('click', () => {
			this.sendSocketNotification("TURN_PLUS_ONE")
		});
		
		let frame1 = document.createElement("div");
		frame1.className = "show";
		
		var blank0 = document.createElement("div");
		blank0.className = "Label"
		
		
		let label5 = document.createElement("div");
		label5.textContent = "R";
		label5.className = "Label"
		label5.style.color = "white";
		let wrapper2secondrow = document.createElement("div");
		wrapper2secondrow.className = "wrapperrow"
		var btnplustenR = document.createElement("button");
		btnplustenR.textContent ="-10";
		btnplustenR.className = "btn";
		
		btnplustenR.addEventListener('click', () => {
			this.sendSocketNotification("TURN_CUT_TEN_R")
		});
		var btnplusR = document.createElement("button");
		btnplusR.textContent ="-1";
		btnplusR.className = "btn";
		
		btnplusR.addEventListener('click', () => {
			this.sendSocketNotification("TURN_CUT_ONE_R")
		});
		var btncutR = document.createElement("button");
		btncutR.textContent ="+1";
		btncutR.className = "btn";
		
		btncutR.addEventListener('click', () => {
			this.sendSocketNotification("TURN_PLUS_ONE_R")
		});
		var btncuttenR = document.createElement("button");
		btncuttenR.textContent ="+10";
		btncuttenR.className = "btn";
		
		btncuttenR.addEventListener('click', () => {
			this.sendSocketNotification("TURN_PLUS_TEN_R")
		});
		let frame2 = document.createElement("div");
		frame2.className = "show";
		
		let label6 = document.createElement("div");
		label6.textContent = "G";
		label6.className = "Label"
		label6.style.color = "white";
		let wrapper2thirdrow = document.createElement("div");
		wrapper2thirdrow.className = "wrapperrow"
		var btnplustenG = document.createElement("button");
		btnplustenG.textContent ="-10";
		btnplustenG.className = "btn";
		
		btnplustenG.addEventListener('click', () => {
			this.sendSocketNotification("TURN_CUT_TEN_G")
		});
		var btnplusG = document.createElement("button");
		btnplusG.textContent ="-1";
		btnplusG.className = "btn";
		
		btnplusG.addEventListener('click', () => {
			this.sendSocketNotification("TURN_CUT_ONE_G")
		});
		var btncutG = document.createElement("button");
		btncutG.textContent ="+1";
		btncutG.className = "btn";
		
		btncutG.addEventListener('click', () => {
			this.sendSocketNotification("TURN_PLUS_ONE_G")
		});
		var btncuttenG = document.createElement("button");
		btncuttenG.textContent ="+10";
		btncuttenG.className = "btn";
		
		btncuttenG.addEventListener('click', () => {
			this.sendSocketNotification("TURN_PLUS_TEN_G")
		});
		let frame3 = document.createElement("div");
		frame3.className = "show";
		
		
		let label7 = document.createElement("div");
		label7.textContent = "B";
		label7.className = "Label"
		label7.style.color = "white";
		let wrapper2forthrow = document.createElement("div");
		wrapper2forthrow.className = "wrapperrow"
		var btnplustenB = document.createElement("button");
		btnplustenB.textContent ="-10";
		btnplustenB.className = "btn";
		
		btnplustenB.addEventListener('click', () => {
			this.sendSocketNotification("TURN_CUT_TEN_B")
		});
		var btnplusB = document.createElement("button");
		btnplusB.textContent ="-1";
		btnplusB.className = "btn";
		
		btnplusB.addEventListener('click', () => {
			this.sendSocketNotification("TURN_CUT_ONE_B")
		});
		var btncutB = document.createElement("button");
		btncutB.textContent ="+1";
		btncutB.className = "btn";
		
		btncutB.addEventListener('click', () => {
			this.sendSocketNotification("TURN_PLUS_ONE_B")
		});
		var btncuttenB = document.createElement("button");
		btncuttenB.textContent ="+10";
		btncuttenB.className = "btn";
		
		btncuttenB.addEventListener('click', () => {
			this.sendSocketNotification("TURN_PLUS_TEN_B")
		});
		let frame4 = document.createElement("div");
		frame4.className = "show";
		
		var blank1 = document.createElement("br");
		var blank2 = document.createElement("br");
		var blank3 = document.createElement("br");
		
		fetch('./modules/ledbtn/config.json')
			.then(response => response.json())
			.then(data => {
				frame1.textContent = String(Math.trunc(data.brightness/255*10));
				frame2.textContent = String(data.R);
				frame3.textContent = String(data.G);
				frame4.textContent = String(data.B);
			})
			.catch(error => {
				console.error('讀取 JSON 檔案失敗：', error);
			});
			
		wrapper2firstrow.appendChild(blank0);
		
		wrapper2firstrow.appendChild(btnplus);
		wrapper2firstrow.appendChild(frame1);
		wrapper2firstrow.appendChild(btncut);
		
		wrapper2secondrow.appendChild(label5);
		wrapper2secondrow.appendChild(btnplustenR);
		wrapper2secondrow.appendChild(btnplusR);
		wrapper2secondrow.appendChild(frame2);
		wrapper2secondrow.appendChild(btncutR);
		wrapper2secondrow.appendChild(btncuttenR);
		wrapper2thirdrow.appendChild(label6);
		wrapper2thirdrow.appendChild(btnplustenG);
		wrapper2thirdrow.appendChild(btnplusG);
		wrapper2thirdrow.appendChild(frame3);
		wrapper2thirdrow.appendChild(btncutG);
		wrapper2thirdrow.appendChild(btncuttenG);
		wrapper2forthrow.appendChild(label7);
		wrapper2forthrow.appendChild(btnplustenB);
		wrapper2forthrow.appendChild(btnplusB);
		wrapper2forthrow.appendChild(frame4);
		wrapper2forthrow.appendChild(btncutB);
		wrapper2forthrow.appendChild(btncuttenB);
		
		wrapper.appendChild(label1);
		wrapper.appendChild(wrapperfirstrow);
		wrapper.appendChild(label2);
		wrapper.appendChild(wrappersecondrow);
		wrapper.appendChild(label3);
		wrapper.appendChild(wrapperthirdrow);
		wrapper.appendChild(wrapperforthrow);
		wrapper.appendChild(submitrow);
		wrapper2.appendChild(wrapperlabel);
		wrapper2.appendChild(wrapper2firstrow);
		wrapper2.appendChild(blank1);
		wrapper2.appendChild(wrapper2secondrow);
		wrapper2.appendChild(blank2);
		wrapper2.appendChild(wrapper2thirdrow);
		wrapper2.appendChild(blank3);
		wrapper2.appendChild(wrapper2forthrow);
		table.appendChild(wrapper);
		table.appendChild(wrapper2);
	
		return table;
	},
	socketNotificationReceived: function(notification, payload) {
		if (notification === "CHANGE") {
		var self = this
		self.updateDom();
		}
		if (notification === "CHANGE_DALAY") {
		var self = this
		setTimeout(function() {self.updateDom()},1000);
		
		}
	},
	start: function() {
        Log.log("Starting module : ledbtn");
    },
});
