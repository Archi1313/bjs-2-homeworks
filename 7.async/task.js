class AlarmClock {

	constructor () {
		this.alarmCollection=[];
		this.intervalId;
	}

	addClock(time, call,){
		if (!time||!call){
			throw new Error('Отсутствуют обязательные аргументы');
		}
		if (this.alarmCollection.filter((alarm)=>alarm.time==time)) {
			console.warn('Уже присутствует звонок на это же время');
		}
		this.alarmCollection.push({callback: call, time: time, canCall: true});
	}

	removeClock(time) {
		this.alarmCollection=this.alarmCollection.filter((ringing, i) => ringing.alarmCollection[i].time != time);
	}

	getCurrentFormattedTime() {
		let time=new Date();
		let hours=time.getHours();
		let minutes=time.getMinutes();
		time=String(hours)+':'+String(minutes);
		return time;
	}

	start() {
		if (this.intervalId){
			return;
		}
		function alarm(){
		 this.alarmCollection.forEach(alarma => {
			if (alarma.time == this.getCurrentFormattedTime() && alarma.canCall) {
					alarma.canCall=false;
					alarma.callback;
					}
				})
			}
		setInterval(()=> {alarm();
			this.intervalId=setInterval(alarm(), 1000)}, 1000);
		;
		}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId=null;

	}

	resetAllCalls(){
		this.alarmCollection.forEach(alarma=>{
			alarma.canCall=true});
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection=[];
	}
}