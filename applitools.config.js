

module.exports = {
    concurrency: 1,
    apiKey: 'APPLITOOLS_API_KEY',
    //
    appName:"AppliFashions",
    batchName: "Holiday Shopping",
    BROWSER: [
        {width: 1200, height: 800, name: 'chrome'},
        {width: 1200, height: 800, name: 'firefox'},
        {width: 1200, height: 800, name: 'edgechromium'},
        {width: 1200, height: 800, name: 'safari'},
        {deviceName: "iPhone X", screenOrientation: "portrait", name: 'chrome'},

    ]
    // set batch name to the configuration
    // batchName: 'Holiday Shopping'

}