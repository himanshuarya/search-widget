# Search Widget

Prerequisite:
1. SASS should be installed on your system.
2. Node version >= 6.6.0 should be installed on your system

Steps to run the Search widget:
1. Clone the code from this repository
2. Run the following commands in order from the command line:
    ```
    npm install gulp
    ```
    ```
    npm install --save-dev gulp-connect
    ```
    ```
    bower install
    ```
3. Run `sass --watch app/components` to compile SASS file to CSS file. Press `Ctrl+C` to stop when the compilation has been completed.
4. Run `gulp` to start the server.
5. Open the server location in any browser to run the Search Widget.

The Search widget is an AngularJS component which can be customised according to your own data input. It has the following configurable inputs:
- `data` - It is the data on which the search functionality needs to be carried out. It is generally an array of objects. It can be modified in `data.json` file in this project.
- `search-fields` - The fields of `data` object on the basis of which the search needs to be carried out. It is also an array of the `data` fields. It can be modified in this project by changing `vm.searchFields` in `app.js`. 
- `placeholder` - The text which needs to be displayed as a placeholder on the search bar. It can be modified in this project by changing `vm.placeholderText` in `app.js`.
