var fr = {
    // Menu strings
    'menu_welcome' : 'Localisation',
    'menu_form' : 'Forms',
    'menu_placeholders' : 'Placeholders',
    'menu_special_chars' : 'Special Characters',

    // First panel
    'app_heading' : 'Bonjour',
    'app_introduction' : 'This application shows how with clever manipulation of the "shared" folder, we can easily create a multi-lingual application.',
    'app_about_fh_heading' : 'About Feed Henry',
    'app_about_fh' : 'Plat&agrave;-forme de cloud FeedHenrys soutient le d&egrave;veloppement, le d&egrave;pliement, l\'int&egrave;gration et la gestion de s&egrave;curit&egrave; des applications mobiles pour les march&egrave;s d\'affaires et de l\'entreprise. Nos pouvoirs plate-forme d\'applications mobiles ? partir du nuage, ce qui rend la solution simple, s&egrave;curis&egrave;e et &egrave;volutive.',

    // Panel 2
    'tab3' :	'The "default" package contains the core of the app. It is represented by the directory /client/default.'+
    'The main start file for this app is index.html - it\'s full path is /client/default/index.html.'+
    'To begin exploring this app, start by looking at the index.html file.',

    // Form Labels
    'label_name' : 'Name',
    'label_email' : 'Email',
    'label_male' : 'Male',
    'label_female' : 'Female',
    'label_newsletter' : 'Newsletter',
    'label_language' : 'Language',

    // Tabs
    'tab3' :'The "bottom_nav" package contains an override prefs.js which positions the tabs at the bottom of the app.' +
    'The "theme2" package contains a different UI theme - which consists of some different css and different images.' +
    'Try adding each of these packages to the Studio Preview under the Configuration accordion item and see the differences after refreshing this preview.',
    'tab4' :'The content for the tabs in this app are configured in /shared/config.js' +
    'When the app starts up, the latest config is read from the server, and used.' +
    'If the config can\'t be retrieved, a fallback of the last known configuration is used.' +
    'If there was no last configuration, the app defaults to using the config bundled with the app.' +
    'To demonstrate the usefulness of this pattern, the Reload button can be used to update the tab contents after the app has been deployed. From the Studio, edit the contents for any of the tab data in /shared/config.js (after deploying the app to a device) and press the Reload button.'
}