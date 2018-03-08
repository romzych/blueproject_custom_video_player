// Options générales natives du lecteur VideoJS
var options = {
    controls: true,
    autoplay: false,
    playbackRate: 4,
    controlBar: {
        volumePanel: {inline: false}
    }
};

var player = videojs('player_id_tag', options, function () {
    videojs.log('Le lecteur est prêt !');

    // Exemple de log VideoJS en fonction d'un évènement
    this.on('ended', function () {
        videojs.log('Awww... déjà fini ?!');
    });

    this.on('playing', function () {
        videojs.log('Regarde la video batard!!!!');
    });

    // Paramètres pour configurer le plugin, mais il faut l'installer avant !
    this.watermark({
        image: 'http://tous-logos.com/wp-content/uploads/2017/03/YouTube-logo-500x255.png',
        url: 'https://www.youtube.com/watch?v=nZMrbGyfx0U'
    });

    // En se basant sur la configuration des paramètres du plugin Watermark, établissez les paramètres du plugin Hotkeys ci-dessous (en consultant la doc du plugin bien sûr)

});

var player = videojs('player_id_tag').ready(function() {
    this.hotkeys({
        volumeStep: 0.2,
        seekStep: 3,
        enableModifiersForNumbers: false,
        enableVolumeScroll: false
    });
});
