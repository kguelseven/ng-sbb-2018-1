# Angular Workshop - SBB Jan 2018

### Overview:

The following steps are needed for the setup. Below are detailed informations for each of the steps.

1. Install Git
2. Install NodeJS
3. Install Chrome
4. Install WebStorm
5. Check out the repo: `https://github.com/jbandi/ng-sbb-2018-1`
6. In the repo in `01-Starter/awesome-ng` run `npm install` and then `npm start`



### Important:

Make sure that you have unrestricted access to the internet! In the steps below you will have to access GitHub and npmjs.org. Some corporate proxies block these sites or block access over https or git!

If you are already using node/npm, make sure that you don't have a global npm-proxy configured. (Check: `npm config get proxy` should return `null`)


## Software Installation
For the workshop the following software should be installed.  

**The version numbers don't have to match exactly, but they should be pretty close!**

### Git
A recent git installation is needed to download the sample code and exercises.  
Git can be downloaded from here: <https://git-scm.com/download/>

Check:  

	> git --version                                                             
	git version 2.14.1



### Node.js & NPM 
Node and NPM are the fundament for the JavaScript toolchain.  
The Node installer can be downloaded here: <https://nodejs.org/>

Install the latest version of Node (version 8 or above).  


**Advanced instructions for OSX/Linux:** If you don't want to install global packages with `sudo` in the steps below, you can either install [Node Version Manager](https://github.com/creationix/nvm) (recommended) or you can perform the instructions here: <https://docs.npmjs.com/getting-started/fixing-npm-permissions>

Check:

	> node --version
	v9.3.0
	> npm --version
	5.5.1
	

### Global NPM Packages

We want to install some JavaScript development tools globally, so that they can be used from the commandline.

**OSX/Linux:** run the following commands:

	sudo npm install -g lite-server http-server 



**Windows:** run the following commands in a Administrator command prompt:

	npm install -g lite-server http-server 


Ignore some scary warnings during the installation. Everything is ok, as long as the final output of the installation command is not an `npm ERR ...`
	
**Background info:** As default (if you did not execute the advanced instructions above to avoid `sudo`) the installation of those tools is placed in `/usr/local/lib/` on OSX/Linux or in `C:\Program Files\nodejs` on Windows. To uninstall the packages, you can always delete the directory `node_modules` there.




### Browser
A recent Chrome browser must be available.  



### WebStorm
WebStorm IDE or IntelliJ IDEA Ultimate from JetBrains should be installed.  
There is a free 30 day trial version of WebStorm available here: <http://www.jetbrains.com/webstorm/>.  
Note: IntelliJ IDEA Ultimate supports the same features as WebStorm.

These IDEs are not a requirement for the workshop. However the examples and demos will be shown with WebStorm. It is up to the attendees to use any other editor of their preference. [VisualStudio Code](https://code.visualstudio.com/) is a very good free alternative. 



## Course Material

All the course material will be provided in the following repository:

	https://github.com/jbandi/ng-sbb-2018-1
	
Please clone the repo like this:

	git clone https://github.com/jbandi/ng-sbb-2018-1
	

To update the repo later during the course:

	cd ng-sbb-2018-1
	git pull
	


## Run the intro example

In order to check that the environment is set up correctly, the intro example should be executed:

	git pull
	cd 01-Starter/awesome-ng
	npm install
	npm start
	
With the last command a browser window should open showing a "Welcome"-screen.
