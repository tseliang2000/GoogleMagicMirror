/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	zoom: 2,
	port: 8080,
	basePath: "/",			// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					  		// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	
	modules: [
		{
			module: "alert",
		},
		// {
		// 	module: "updatenotification",
		// 	position: "top_bar"
		// },
		{
			module: "clock",
			position: "top_left",
			config: {
				timeFormat:12,
				showPeriod:true,
				timezone: 'Etc/GMT+4',
				displaySeconds:'false'
				// The config property is optional.
				// See 'Configuration options' for more information.
			  },
		},

		{
			module: "calendar",
			header: "Calendar",
			position: "bottom_left",
			config: {
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: 'https://calendar.google.com/calendar/ical/nthu.acad%40gmail.com/public/basic.ics'
					}
				]
			}
		},
		// {
		// 	module: 'MMM-GoogleCalendar',
		// 	header: "My Google Private Cal",
		// 	position: "top_left",
		// 	config: {
		// 		calendars: [
		// 			{
		// 			  symbol: "calendar-week",
		// 			  calendarID: "en.taiwan#holiday@group.v.calendar.google.com"
		// 			},
		// 			// add another calendar HERE if needed
		// 		],
		// 	}
		// },
		{
			module: "compliments",
			position: "bottom_center"
		},
		{
			module: "MMM-Face-Recognition-SMAI",
			position: "top_right",
			config: {
			  //prompt: "Put in your own text"
			}
			
		  },
		  {
			module: "weather",
			position: "top_center",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Taipei",
				locationID: "1668341", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "7aae758a120444e8cd40f19387e7d782"
			}
		},
		// {
		// 	module: "newsfeed",
		// 	position: "bottom_bar",
		// 	config: {
		// 		feeds: [
		// 			{
		// 				title: "New York Times",
		// 				url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
		// 			}
		// 		],
		// 		showSourceTitle: true,
		// 		showPublishDate: true,
		// 		broadcastNewsFeeds: true,
		// 		broadcastNewsUpdates: true
		// 	}
		// },

		{
			module: "MMM-GoogleAssistant",
			configDeepMerge: true,
			config: {
			  debug: false,
			  stopCommand: "stop",
			  assistantConfig: {
				lang: "en-US",
				latitude: 25.04776,
				longitude: 121.53185,
				deviceRegistred: false
				},
			  responseConfig: {
				useFullscreen: false,
				responseOutputCSS: "response_output.css",
				screenOutputTimer: 5000,
				useChime: true,
				confirmationChime: true,
				chimes: {
				  beep: "beep.mp3",
				  error: "error.mp3",
				  continue: "continue.mp3",
				  confirmation: "confirmation.mp3",
				  open: "Google_beep_open.mp3",
				  close: "Google_beep_close.mp3",
				  warning: "warning.ogg"
				},
				imgStatus: {
				  hook: "hook.gif",
				  standby: "standby.gif",
				  reply: "reply.gif",
				  error: "error.gif",
				  think: "think.gif",
				  continue: "continue.gif",
				  listen: "listen.gif",
				  confirmation: "confirmation.gif",
				  information: "information.gif",
				  warning: "warning.gif",
				  userError: "userError.gif"
				},
				zoom: {
				  transcription: "80%",
				  responseOutput: "60%"
				}
			  },
			  recipes: [
				"../../EXT-Bard/recipe/EXT-Bard.js",
				"../../EXT-Spotify/recipe/EXT-Spotify.js"
			]
			}
		  },
		  {
			module: "Gateway",
			config: {
			  debug: false,
			  username: "admin",
			  password: "admin",
			  CLIENT_ID: null
			}
		  },
		  {
			module: "EXT-Detector",
			position: "top_left",
			config: {
			  debug: false,
			  useIcon: true,
			  touchOnly: false,
			  porcupineAccessKey: null,
			  porcupineCustomModel: null,
			  detectors: [
				{
				  detector: "Snowboy",
				  Model: "jarvis",
				  Sensitivity: null
				},
				{
				  detector: "Porcupine",
				  Model: "ok google",
				  Sensitivity: null
				},
				{
				  detector: "Porcupine",
				  Model: "hey google",
				  Sensitivity: null
				}
			  ]
			}
		  },
		  {
			module: 'EXT-Bard',
			config: {
			  COOKIE_KEY: "aAhWkbPSpqF09DH8qOyRgGUIdrQZw7TDhi_uOCcBTo9nmzrIrH6fZxUrokUjvne_0Tsh3g.",
			  scrollActivate: true,
			  scrollStep: 25,
			  scrollInterval: 1000,
			  scrollStart: 10000
			}
		  },
		  {
			module: 'EXT-Librespot',
			config: {
			  debug: false,
			  email: "tse.liang2000@gmail.com",
			  password: "123454321",
			  deviceName: "MagicMirror",
			  minVolume: 40,
			  maxVolume: 100
			}
		  },
		  {
			module: 'EXT-Spotify',
			position: 'top_left',
			config: {
			  updateInterval: 1000,
			  idleInterval: 10000,
			  useBottomBar: false,
			  CLIENT_ID: "6c1b15a1f4374657b2dd03175ac87657",
			  CLIENT_SECRET: "ea77681c2dcd4cda82a2c767f7d52b1b",
			  mini: true,
			  forceSCL: false,
			  noCanvas: false
			}
		  },
		  {
			module: "ledbtn",
			position: "bottom_right"
		},
		
		// {
		// 	module: "newsfeed",
		// 	position: "bottom_bar",
		// 	config: {
		// 		feeds: [
		// 			{
		// 				title: "New York Times",
		// 				url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
		// 			}
		// 		],
		// 		showSourceTitle: true,
		// 		showPublishDate: true,
		// 		broadcastNewsFeeds: true,
		// 		broadcastNewsUpdates: true
		// 	}
		// },
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
