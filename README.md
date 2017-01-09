 URL_Shortener Static API developed by Jeff Namenye
https://github.com/jeffnamenye/URL_Shortener

To install follow link to my git repo and click the green clone or download
button to install on your PC

If you don't already have them installed you will need **Node and NPM** you can do that through brew or through their web sites [Node.js(https://nodejs.org/en/)and NPM((https://www.npmjs.com))]

In your command line change your directory to **URL_Shortener** and then **npm install** this should install all dependencies in the **package.json** file into your directory.

Still in your command line type and still in your directory URL_Shortener type
**node src/server**👍🏻 it should say 'Good to go on port 300'.

Now you need to use "postman"(https://www.getpostman.com/) once thats loaded change your drop down arrow next to the search style bar, change it to get and than type in **localhost:3000/api/v1.0/url** inside of your search style bar and hit send. You should see something like this **{
  "URL": "http://achme.comb6f8c0du"
}** in your results box about middle of the page.
