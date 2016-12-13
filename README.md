# Barber Shop
Projet web réalisé dans le cadre de HETIC.

## Sujet demandé
Nous avons pour sujet de réaliser un **click game**.

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
Nous incarnons un **barbier** du nom de Teddy Abernathy. Celui-ci vient d'ouvrir sa **boutique** et nous devons l'aider à prospérer.
Notre but est de **disposer de la plus grande boutique** de barberie possible. Pour cela, nous devons évoluer dans le jeu en nous reposant sur divers points.

Le principe de base est de **couper la barbe** de chacun des clients faisant la queue.
**Plusieurs clics** sont nécessaires pour chaque client. Chaque fois qu'un client sort de la boutique, nous gagnons de l'argent.

> *Voici Teddy Abernathy. Depuis sa tendre enfance, Teddy ne rêve que d’une chose : Devenir le plus grand barbier du monde.
> Teddy économise depuis des années pour lancer sa première boutique. Aujourd’hui est un grand jour car son ouverture se rapproche grandement. Les clients sont nombreux à attendre et Teddy a hâte de débuter sa nouvelle vie.
> Prenez vos ciseaux et aidez Teddy à prospérer dans le milieu de la barberie. Engagez des employés, améliorez votre matériel, et gagnez en prestige. A vous de jouer !*

**Info :** Avant de commencer la partie, le joueur sera sur un **écran menu** disposant d'un input _"Votre Pseudo"_, d'un bouton _"Jouer"_, et d'un bouton _"Scores"_. Son pseudo sera ainsi enregistré dans la **base de donnée**. Une fois avoir cliqué sur _"Jouer"_, une fenêtre affiche la citation ci-dessus par défilement narratif. Le joueur peut décider de la passer d'un simple double clic (un seul clic ne terminant seulement quele défilement automatique).

### Variables d'achat
**Niveau de la boutique**

La boutique permet au joueur de progresser, car elle lui permet de d'**acheter davantage d'employés**, et de monter en gamme. Les clients deviennent alors bien **plus longs à satisfaire**. Chaque amélioration de la boutique est visible graphiquement.

| Niveau        | Prix          | Employés max.  | Clic par client | Gain par client |
| ------------- |:-------------:|:--------------:|:---------------:| ---------------:|
| Niveau 1      | (défaut)      | 10             | 10 à 30         | $1 à $3         |
| Niveau 2      | $1000         | 100            | 130 à 360       | $15 à $45       |
| Niveau X      | x10           | x10            | x13             | x15             |

**Employés**

Les employés sont les achats **les plus rentables**. Chaque employé va réaliser l'équivalent d'**un clic par seconde**. Selon l'évolution de l'amélioration de la production, chaque employé va alors devenir bien plus efficace.

| Nombre | Prix |
| ------ | ----:|
| 1      | $15  |
| 2      | $23  |
| 3      | x1,5 |

**Amélioration de la production**

Les améliorations permettent de créer et d'**agrandir le coefficient multiplicateur de production de chaque employé**.

**Note :** Chacun des prix de ces améliorations est à multiplier par **1,3** pour chaque montée en niveau.

| Nom                                    | Multiplicateur (pour chaque employé) | Prix au niveau 1 |
| -------------------------------------- |:------------------------------------:| ----------------:|
| Niveau de qualité du matériel          | x1,1                                 | $12              |
| Niveau de qualité de l'ambiance sonore | x3                                   | $100             |
| Niveau de beauté de la décoration      | x8                                   | $1100            |
| Niveau de formation des employés       | x47                                  | $10 100          |
| Niveau des primes                      | x260                                 | $110 000         |

**Achats de campagne de communication**

Les campagnes de communication permettent de **faire venir du monde dans la queue**. Par défaut, il y a un client chaque 2 secondes. Cependant en gagnant en efficacité, les clients vont venir à manquer. Le joueur devra alors **attirer de nouveaux clients**.

Lorsque le joueur va **augmenter le niveau de sa boutique**, le prix de la coupe va augmenter. Ainsi, **les clients à toucher seront différents**. Les anciennes campagnes seront alors obsolètes et le joueur possédera de **nouveaux moyens de communication**, plus ciblés.

| Type de communication   | Personnes par seconde | Prix                     | Niveau correspondant |
| ----------------------- |:---------------------:| ------------------------ |:-------------------- |
| Rien (défaut)           | 0.5                   | $0                       | Niveau 1             |
| Article de journal      | 1                     | $50                      | Niveau 1             |
| Affiche publicitaire    | A voir                | ?                        | Niveau 1             |

### Saisons

Tous les **3 minutes**, les saisons se succèdent, laissant ainsi certains **avantages et inconvéniants** au joueur. Par exemple l'été, la barbe pousse plus vite. Chaque client demande alors davantage de temps, et la queue est plus longue.

* **Printemps :** Normal.
* **Eté :** Nombre de clics par client nécessaire en augmentation de 30%. Nombre de client par seconde en augmentation de 30%.
* **Automne :** Normal
* **Hiver :** Nombre de clics par client nécessaire en diminution de 30%. Nombre de client par seconde en diminution de 30%.

### Messages cycliques

Des messages cycliques apparaîtront dans la fenêtre de jeu pour ajouter une intéraction avec le joueur. Voici la liste des messages qui s'afficheront durant le jeu :

* “News: Une nouvelle barberie vient d’ouvrir à Montreuil. A ce que l’on dit, son propriétaire Teddy Abernathy regorge de motivation.”
* "News : La coupe de la barbe est à la mode cette année, profitez-en pour vous rendre chez votre barbier favori."
* "News: Plus de 12% de la population de Montreuil recommande le barbier Teddy Abernathy pour son professionalisme."
* "News: Couper sa barbe chez un barbier vous donne un air plus séduisant de 36%."
* "Les gens viennent de loin de se faire couper la barbe par vos soins."
* "Attention à ne pas vous couper un doigt pendant votre travail, nous tenons à vous."
* "Qu'est-ce qui est plus agréable que la barbe à papa ? Se faire couper la barbe !"
* "News: D'après les rumeurs, le premier client à s'être fait couper la barbe par Teddy Abernathy fut le célèbre Bruno Simon."


### Évènements

Aléatoirement entre 5 et 15 minutes, un événement aléatoire survient. Indiqué à travers la fenêtre de news, mis davantage en valeur que les messages classiques.

* Teddy Abernathy vient de recevoir une publicité gratuite d’un grand média. La barberie devient très attractive ! (+30% de queue pendant 1 minute)
* Un client généreux vient de vous verser une belle somme d’argent, quelle chance ! (Gain de 10% de tout l’argent gagné depuis le début du jeu)
* Un élan de motivation traverse les employés de la barberie de Teddy Abernathy. Quelle rapidité ! (+30% de clic/seconde pendant 30 secondes)

## Réalisation
Projet réalisé par :
* de la Fouchardière Antoine - @antoinedlf
* Franco Lucille - @lucillef
* Garcia Clarisse
* Habib Duke - @DukeH
* Lucas Simon - @Reelwens
* Maire Paul - @Paul-maire