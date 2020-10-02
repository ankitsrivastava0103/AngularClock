let secondsHand = document.getElementById('seconds');
let minutesHnad = document.getElementById('minutes');
let hourHand= document.getElementById('hour');


let timeToDegree = (time) =>{
    return time * 360;
}

let updateTime = () => {
	let now = new Date();
	let seconds = now.getSeconds() / 60;
	let minutes = (now.getMinutes() + seconds) / 60;
	let hour = (now.getHours() + minutes) / 12;
	secondsHand.style.transform = `rotate(${timeToDegree(seconds)}deg)`;
	minutesHnad.style.transform = `rotate(${timeToDegree(minutes)}deg)`;
	hourHand.style.transform = `rotate(${timeToDegree(hour)}deg)`;
}

updateTime();
setInterval(updateTime, 1000);