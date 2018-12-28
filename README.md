# telegramRedditBot
This is a telegram bot for sending images from reddit

***

It let's you automatically send new images from subreddits of your choice to everyone with bot activated. It's small and fast.  
This bot can be useful if you want to create channel with content from reddit or if you just try to minimize number of installed apps. 

***
<h3 align="center">Settings</h3>

<h4 align="center">Settings are stored in config.json</h4>

<center>

|setting      | description |
|-------------|-------------|
| `url`       | This is array of subreddits from which bot will take content |
| `frequency` | This setting specifies frequency (in miliseconds) in which bot will look for content |
| `token`     | This is your bot token. It's required and can be easily obtained from [Bot Father](https://telegram.me/BotFather)|

</center>

***

<h3 align="center">Bot commands</h3>

<h4 align="center">Commands to send to a bot</h4>

<center>

| command  | description |
|----------|-------------|
| `/help`  | Displays list of commands |
| `/start` | Adds user to database |
| `/stop`  | Removes user from database |

</center>

***

<h3 align="center">Start guide</h3>
<p>
First of all you need to create bot token.<br/>
Then put token and subreddit url in your `config.json`.<br/>
Before first usage you should run `npm install` in directory of downloaded program.<br/>
The only thing you need to do now is to launch a program by executing command: 
`node main.js`
</p>
