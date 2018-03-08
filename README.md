# BAP Blue Project - Lecteur vidéo personnalisé

*Lecteur vidéo personnalisé qui utilise la librairie [Video.js](https://videojs.com/).*

## Requirements

* [NodeJS](https://nodejs.org/fr/)
* Un peu de skill (no link :/)

## Initialiser le projet

1. Télécharger/Cloner le projet et l'ouvrir dans le Terminal

```bash
git clone git@github.com:mcarpen/blueproject_custom_video_player.git blueproject_custom_video_player
cd blueproject_custom_video_player 
```

2. Installer les dépendances du projet

```bash
npm install 
```

3. Ouvrir l'`index.html` dans votre navigateur préféré

## TODO

### Projet

**Deadline :** Jeudi 8 mars 9h00

**Méthode de rendu :** Github, envoyer le lien du repo (ne pas envoyer pas le dossier `node_modules`)

### Général

**Structure :**

├── src/
├───── css/
├───── js/
├───── video.mp4
├───── index.html
├───── poster.png
├── package.json
├── package-lock.json  

#### To do list

La base du projet est déjà présente, cela permettra de comprendre un peu plus simplement comment fonctionne la librairie [Video.js](https://videojs.com/) mais ne pas hésiter pas à consulter la [documentation](http://docs.videojs.com/).
Libre à vous de suivre les tâches dans l'ordre, c'est peut-être fait de façon plus ou moins logique ;)

Avant toutes choses, checker la console vous verrez :
```bash
The element or ID supplied is not valid.
```

Il faut résoudre cette erreur...

> Il y a un indice dans le **main.js** et le **index.html**, il y a des noms plutôt ressemblants qui devraient être pareils pour tout faire fonctionnet

* Changer la vidéo et mettre le bon poster en conséquence (screenshot)

### Fonctionnalités natives à la librairie

* Faire en sorte que la vidéo soit toujours en "16:9"
* Ne pas faire commencer la vidéo au chargement de la page
* Possibilité de choisir la vitesse de la vidéo (0.5, 1, 1.5, 2)
* Placer la barre de volume en verticale et non horizontale lors d'un hover sur l'icône du volume
* Créer un log *VideoJS* lorsque la vidéo est en cours de lecture

### Installation de [plugins tiers](http://videojs.com/plugins/)

**[Watermark](https://npmjs.org/package/videojs-watermark)** :
* Installer le plugin (via npm)
* Changer l'image + le lien
* À l'aide du CSS faire en sorte que celui-ci soit positionné de façon cohérente (taille notamment)

**[Hotkeys](https://www.npmjs.com/package/videojs-hotkeys)** :
* Installer le plugin (via npm)
* Configurer le plugin suivant ces paramètres :
    * Monter et descendre le volume de 0.2 en 0.2
    * Avancer et reculer la vidéo de 3 secondes en 3 secondes
    
### Mise en forme

> Utiliser notre bon vieux CSS et l'inspecteur d'éléments du navigateur pour bien cibler ce qu'il faut modifier

* Customisation du bouton Play : centrer et le rendre plus "beau"
* Centrer le lecteur vidéo (horizontalement et verticalement) au milieu de la page en fonction de l'écran utilisé
> Penser aux unités `vw` et `vh` ;) 
* Mettre un fond noir sur la page et ajouter une "ombre portée" blanche pour démarquer le bloc (légère ombre pour que ça reste "beau")
* Manipuler les éléments du lecteur vidéo afin de le customiser au maximum (en utilisant le CSS et l'inspecteur d'élément) tout en gardant un côté esthétique et cohérent entre les éléments

## Good luck !

N'hésitez pas à me demander quelques pistes d'orientations et astuces si vraiment vous bloquer sur un truc mais surtout n'oubliez pas que [Google est votre ami](http://www.laissemoichercherca.com/?q=vid%C3%A9ojs%20%5Bce%20que%20je%20cherchea)
