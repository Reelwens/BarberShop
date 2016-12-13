# Barber Shop
Projet web réalisé dans le cadre de HETIC.

## Sujet demandé
Nous avons pour sujet de réaliser un click game.

Les contraintes :
* Système d'incrémentation
* Répétitions
* Multiples améliorations
* Durée de vie large
* Système de gammification
* Contexte/Scénario
* Originalité
* Sur un site internet

## Principe de notre jeu
Nous incarnons un barbier du nom de Teddy Lowe. Celui-ci vient d'ouvrir sa boutique et nous devons l'aider à prospérer. Notre but est de disposer de la plus grande boutique de barberie possible. Pour cela, nous devons évoluer dans le jeu en nous reposant sur divers points.
Le principe de base est de couper la barbe de chacun des clients faisant la queue. Plusieurs clics sont nécessaires pour chaque client. Chaque fois qu'un client sort de la boutique, nous gagnons de l'argent.

> *Voici Teddy Lowe. Depuis sa tendre enfance, Teddy ne rêve que d’une chose : Devenir le plus grand barbier du monde.
> Teddy économise depuis des années pour lancer sa première boutique. Aujourd’hui est un grand jour car son ouverture se rapproche grandement. Les clients sont nombreux à attendre et Teddy a hâte de débuter sa nouvelle vie.
> Prenez vos ciseaux et aidez Teddy à prospérer dans le milieu de la barberie. Engagez des employés, améliorez votre matériel, et gagnez en prestige. A vous de jouer !*

Info : Avant de commencer la partie, le joueur sera sur un écran menu disposant d'un input "Votre Pseudo", d'un bouton "Jouer", et d'un bouton "Scores". Son pseudo sera ainsi enregistré dans la base de donnée. Une fois avoir cliqué sur "Jouer", une fenêtre affiche la citation ci-dessus par défilement narratif. Le joueur peut décider de la passer d'un simple double clic (un clic terminant le défilement automatique).

### Variables d'achat
**Niveau de la boutique**

La boutique permet au joueur de progresser, car elle lui permet de d'acheter davantage d'employés, et de monter en gamme. Les clients deviennent alors bien plus longs à satisfaire. Chaque amélioration de la boutique est visible graphiquement.

| Niveau        | Prix          | Employés max.  | Clic par client | Gain par client |
| ------------- |:-------------:|:--------------:|:---------------:| ---------------:|
| Niveau 1      | (défaut)      | 10             | 10 à 30         | $1 à $3         |
| Niveau 2      | centered      | 100            | 130 à 360       | $15 à $45       |
| Niveau X      | are neat      | x10            | x13             | x15             |

**Employés**

Les employés sont les achats les plus rentables. Chaque employé va réaliser l'équivalent d'un clic par seconde. Selon l'évolution de l'amélioration de la production, chaque employé va alors devenir bien plus efficace.

| Nombre | Prix |
| ------ | ----:|
| 1      | $15  |
| 2      | $23  |
| 3      | x1,5 |

**Amélioration de la production**

Les améliorations permettent de créer et d'agrandir le coefficient multiplicateur de production de chaque employé.
Note : Chacun des prix de ces améliorations est à multiplier par *1,3* pour chaque montée en niveau.

| Nom                                    | Multiplicateur (pour chaque employé) | Prix au niveau 1 |
| -------------------------------------- |:------------------------------------:| ----------------:|
| Niveau de qualité du matériel          | x1,1                                 | $12              |
| Niveau de qualité de l'ambiance sonore | x3                                   | $100             |
| Niveau de beauté de la décoration      | x8                                   | $1100            |
| Niveau de formation des employés       | x47                                  | $10 100          |
| Niveau des primes                      | x260                                 | $110 000         |

**Achats de campagne de communication**

Les campagnes de communication permettent de faire venir du monde dans la queue. Par défaut, il y a un client chaque 2 secondes. Cependant en gagnant en rapidité, les clients vont venir à manquer. Le joueur devra alors attirer de nouveaux clients.

Lorsque le joueur va augmenter le niveau de sa boutique, le prix de la coupe va augmenter. Ainsi, les clients à toucher seront différents. Les anciennes campagnes seront alors obsolètes et le joueur devra recommencer sa communication du début, de façon plus ciblée (nouvelles campagnes, par niveau ?).

| Type de communication   | Personnes par seconde | Prix (exclusif niveau 1) |
| ----------------------- |:---------------------:| ------------------------:|
| Rien (défaut)           | 0.5                   | $0                       |
| Article de journal      | 1                     | $50                      |
| Affiche publicitaire    | A voir                | ?                        |

### Saisons

Tous les 3 minutes, les saisons se succèdent, laissant ainsi certains avantages et inconvéniants au joueur. Par exemple l'été, la barbe pousse plus vite. Chaque client demande alors davantage de temps, et la queue est plus longue.

Printemps : Normal
Eté : Nombre de clics par client nécessaire en augmentation de 30%. Nombre de client par seconde en augmentation de 30%.
Automne : Normal
Hiver : Eté : Nombre de clics par client nécessaire en diminution de 30%. Nombre de client par seconde en diminution de 30%.

### Messages cycliques

Des messages cycliques apparaitront dans la fenêtre de jeu pour ajouter une intéraction avec le joueur. Voici la liste des messages qui s'afficheront durant le jeu :
“News: Une nouvelle barberie vient d’ouvrir à Montreuil. A ce que l’on dit, son propriétaire Teddy Lowe regorge de motivation.”

### Evenements

Aléatoirement entre 5 et 15 minutes, un événement aléatoire survient. Indiqué à travers la fenêtre de news, mis davantage en valeur que les messages classiques.

* Teddy Lowe vient de recevoir une publicité gratuite d’un grand média. La barberie devient très attractive ! (+30% de queue pendant 1 minute)
* Un client généreux vient de vous verser une belle somme d’argent, quelle chance ! (Gain de 10% de tout l’argent gagné depuis le début du jeu)
* Un élan de motivation traverse les employés de la barberie de Teddy Lowe. Quelle rapidité ! (+30% de clic/seconde pendant 30 secondes)

## Réalisation
Projet réalisé par :
* de la Fouchardière Antoine
* Franco Lucille
* Garcia Clarisse
* Habib Duke
* Lucas Simon
* Maire Paul