# nest-cli

An unofficial command-line tool for managing your Nest thermostat.  This was built as an exercise for learning the API.  Pull requests are welcome if you experience issues or want to improve the feature set.


## Requirements

* node 11+
* A nest device of some sort


## Installing

### From this repo

* `git clone git@github.com:kmalinich/nest-cli.git`
* `cd nest-cli && npm install && npm link`


### Configuring the application

* Register a Nest application https://developers.nest.com/products/new
  * Set the Default OAuth Redirect URI to `http://localhost:3000/auth/nest/callback`
  * Be sure to check: Away, Thermostat, Smoke+CO Alarm all with read/write access
  * Copy the generated product ID and product secret
* `nest-cli config PRODUCT_ID <ID>`
* `nest-cli config PRODUCT_SECRET <SECRET>`
* `nest-cli login` (if a window does not open, navigate to `http://localhost:3000/auth/nest` in a browser)
* Done, you never have to do this again.


## Usage

`nest-cli --help`

```sh
Commands:

  login                                login to your nest account via oauth
  logout                               logout of nest account
  config <key> [value]                 get/set a configuration option
  default-thermostat <thermostatId>    sets the default thermostat device id
  devices|ls [options]                 get a list of known devices
  temp|t <mode> <temp> [thermostatId]  modes: cool, heat, heat-cool
  away <mode> [structureId]            available modes: home, away, auto-away, unknown
  structures [options]                 list of structures associated with account
  state|s <mode> [thermostatId]        available modes: cool, heat, heat-cool, off
  read|r [thermostatId]                read a thermostat by device id
  off [thermostatId]                   turns off the HVAC

Options:

  -h, --help     output usage information
  -V, --version  output the version number
```


## Set default thermostat

To avoid the tedious task of entering in your thermostat device ID each time, you can mark a thermostat as the default.  

List all devices linked to your account:  
`nest-cli ls`

Once you determine which device you want to mark as your default:  
`nest-cli default-thermostat <device ID>`


## TODO

* Away mode
* Fan mode
* Fan scheduling
* Live UI for monitoring stats (https://github.com/yaronn/blessed-contrib)
* Support Nest cam and Nest protect
