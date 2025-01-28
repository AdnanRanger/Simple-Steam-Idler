const SteamUser = require('steam-user');

const user = new SteamUser();

const logOnOptions = {
	accountName: 'larbom',  //Enter here your account login
	password: 'Sami007AD'		 //Enter your password
}

user.logOn(logOnOptions);

user.on('loggedOn', () => {
	console.log(logOnOptions.accountName + ' - Successfully logged on');
	user.setPersona(1);                 //1 - online, 7 - invisible
	user.gamesPlayed([1091500]);    //List app IDs
});
