class AlarmClock {

	constructor () {
		this.alarmCollection=[];
		this.intervalId=null;
	}

	addClock(time, call){
		if (!time||!call){
			throw new Error('Отсутствуют обязательные аргументы');
		}
		if (this.alarmCollection.some((alarm)=>alarm.time===time)) {
			console.warn('Уже присутствует звонок на это же время');
		}
		this.alarmCollection.push({callback: call, time: time, canCall: true});
	}

	removeClock(time) {
		this.alarmCollection=this.alarmCollection.filter((ringing) => ringing.time !== time);
	}

	getCurrentFormattedTime() {
		let time=new Date();
		let hours=String(time.getHours());
			if (hours.length<2) {
					hours="0"+hours;
				}
		let minutes=String(time.getMinutes());
			if (minutes.length<2) {
					minutes="0"+minutes;
				}
		time=String(hours)+':'+String(minutes);
		return time;
	}

	start() {
		if (this.intervalId){
			return;
		}
		this.intervalId=setInterval(()=> {
			this.alarmCollection.forEach(alarma => {
			if (alarma.time === this.getCurrentFormattedTime() && alarma.canCall) {
					alarma.canCall=false;
					alarma.callback();
				}
			})
		} , 1000);
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