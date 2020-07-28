import React from 'react';
import './Home.scss';
import { Helmet } from 'react-helmet';

const title = 'Conditions générales';

function GeneralConditions () {
  return (
    <div className='home'>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div className='form' />
      <main className='homepage'>
        <h1>Conditions générales d’utilisation</h1>

        <div className='paragraphe'>
          <h3>Article 1 - Dispositions Générales</h3>
          <p>Le site annuaire.freelancelyon.fr (ci-après le « Site ») est la propriété de la société WebAnyOne, SAS (ci-après la Société) au capital de 8000 €, inscrite au RCS de Lyon et dont le siège social est sis 18-20 rue Tronchet 69006 Lyon France.</p>
          <p>L’identité du directeur de la publication et de l’hébergeur figure dans les Mentions Légales accessible via le lien en pied de page.</p>
          <p>Pour toutes questions relatives à l’utilisation du Site, vous pouvez contacter la société via le chat présent sur toutes les pages, par e-mail (pierre at webanyone point fr) ou par courrier à l’adresse de son siège sociale.</p>
        </div>

        <div className='paragraphe'>
          <h3>Article 2 - Définitions</h3>
          <p>Voici les termes clefs utilisés dans les présentes CGU :</p>
          <p>“CGU” : Conditions générales d’utilisation auxquelles doivent se conformer les utilisateurs et inscrits sur le présent site internet.</p>
          <p>“Utilisateur” : désigne toute personne navigant sur le Site.</p>
          <p>“Site” : désigne le service électronique interactif édité et exploité par la Société, accessible via l’URL : annuaire.freelancelyon.fr</p>
          <p>“Inscrit” ou “Freelance” ou “Freelance inscrit” ou “Compte Freelance” : désigne l’Utilisateur ayant créé un compte gratuit auprès du Site.</p>
          <p>“Services” : désigne l’ensemble des fonctionnalités accessibles depuis le Site. Ces Services sont décrits à l’article 8 des présentes.</p>
        </div>

        <div className='paragraphe'>
          <h3>Article 3 - Objet</h3>
          <p>Le Site met à la disposition de ses Utilisateurs une plateforme proposant un annuaire de Freelances basé à Lyon.</p>
          <p>Cet annuaire permet à chaque Freelance étant basé dans un périmètre de 50 km (à vol d’oiseau) de la ville de Lyon en France de se créer une fiche pour présenter son activité et ses compétences.</p>
          <p>L’annuaire permet aussi aux Utilisateurs de consulter les fiches des Freelances afin de pouvoir faire appel à eux pour réaliser une ou plusieurs prestations.</p>
          <p>Les présentes conditions générales régissent les modalités et conditions d’accès et d’utilisation du Site et des Services.</p>
          <p>Ces conditions s’appliquent à tous les Utilisateurs et sont accessibles en ligne sur le Site.</p>
        </div>

        <div className='paragraphe'>
          <h3>Article 4 - Acceptation des Conditions Générales d’Utilisation</h3>
          <p>Toute personne qui accède au Site et aux Services s’engage à respecter, sans réserve, les présentes conditions d’utilisation.</p>
          <p>L’accès aux Services est subordonné à l’acceptation des présentes conditions générales d’utilisation (ci-après les “CGU”) accessibles à tout moment sur le Site.</p>
          <p>L’acceptation des présentes CGU par les Utilisateurs qui s’inscrivent sur le Site est matérialisée par une case à cocher lors de l’inscription sur le Site.</p>
          <p>L’acceptation des présentes CGU par les Utilisateurs ne peut être que pleine et entière.</p>
          <p>Tout accès ou utilisation du Site suppose l’acceptation concomitante et sans réserve des termes des présentes CGU.</p>
        </div>

        <div className='paragraphe'>
          <h3>Article 5 - Accès au Site</h3>
          <p>Pour se connecter au Site, l’Utilisateur doit vérifier qu’il dispose des équipements matériels et logiciels, ainsi que d’une connexion à internet compatible avec les conditions de fourniture du Service.</p>
          <p>Le Site est accessible gratuitement et sans engagement à tout Utilisateur souhaitant bénéficier des Services et disposant d’un accès à internet. Tous les coûts afférents à l’accès à internet sont exclusivement à la charge de l’Utilisateur.</p>
          <p>Le Site met en œuvre tous les moyens raisonnables à sa disposition pour assurer un accès de qualité au Site mais n’est tenu à aucune obligation d’y parvenir.</p>
          <p>Le Site ne saurait pas plus être tenu responsable du fait de détérioration ou perte de données dues à un dysfonctionnement des réseaux ou toute autre raison indépendante de sa volonté échappant à son contrôle, et d’une façon générale, de toute détérioration ou dysfonctionnement.</p>
          <p>Le Site se réserve la possibilité d’interrompre, de suspendre momentanément ou de modifier temporairement sans préavis l’accès à tout ou partie du Site, afin d’en assurer la maintenance, sans que l’interruption n’ouvre droit à aucune obligation ni indemnisation.</p>
          <p>L’Utilisateur accepte expressément que la Société ne saurait être tenue responsable des dommages directs, indirects, fortuits, spéciaux, accidentels, consécutifs ou punitifs, etc., ainsi que pour toute perte de profits ou de revenus, pouvant être encourus par l’Utilisateur directement ou indirectement liés :</p>
          <ul>
            <li>à l’accès ou à l’utilisation du Site ;</li>
            <li>à l’incapacité de l’Utilisateur d’accéder ou d’utiliser ledit Site ;</li>
            <li>à tout comportement ou contenus soumis, publiés ou postés sur ledit Site ;</li>
            <li>à tout accès, utilisation ou altération non autorisés des transmissions de l’Utilisateur.</li>
          </ul>
          <p>Les Services sont accessibles, sous réserve des restrictions prévues sur le Site :</p>
          <ul>
            <li>à toute personne physique majeure disposant de la pleine capacité juridique pour s’engager au titre de présentes conditions générales. La personne physique qui ne dispose pas de la pleine capacité juridique ne peut accéder au Site et aux Services qu’avec l’accord de son représentant légal ;</li>
            <li>à toute personne morale agissant par l’intermédiaire d’une personne physique majeure disposant de la capacité juridique pour contracter au nom et pour le compte de la personne morale.</li>
          </ul>
        </div>

        <div className='paragraphe'>
          <h3>Article 6 - Fonctionnalités et utilisation des Services</h3>
          <p>La Société met à disposition une plateforme qui permet :</p>
          <ul>
            <li>aux Freelances basés dans un périmètre de 50 km (à vol d’oiseau) de la ville de Lyon en France de se créer une fiche pour présenter son activité et ses compétences</li>
            <li>aux Utilisateurs de consulter les fiches des Freelances afin de pouvoir faire appel à eux pour réaliser une ou plusieurs prestations.</li>
          </ul>
        </div>

        <div className='paragraphe'>
          <h3>Article 7 - Inscription sur le Site et création de compte</h3>
          <h4>Préambule</h4>
          <p>Pour se connecter au Site, l’Utilisateur doit vérifier qu’il dispose des équipements matériels et logiciels, ainsi que d’une connexion à internet compatible avec les conditions de fourniture du Service.</p>
          <h4>Identification</h4>
          <p>Le Compte Freelance est protégé par des éléments d’identification, un identifiant (adresse email) et un mot de passe.</p>
          <p>L’Utilisateur peut accéder à tout moment à son Compte après s’être identifié à l’aide de son identifiant et de son mot de passe via le bouton “Connexion” en haut à droite dans le menu.</p>
          <p>Le mot de passe de l’Utilisateur est personnel et confidentiel. L’Utilisateur s’engage à assurer la confidentialité de son mot de passe. L’Utilisateur assume, seul, la responsabilité de toutes les connexions effectuées à partir de ses identifiants et mot de passe. En cas de soupçon d’utilisation frauduleuse de son Compte par l’Utilisateur, ce dernier doit en aviser dans les plus brefs délais la Société à l’adresse indiqué en haut des présentes CGU afin qu’elle prenne toutes mesures appropriées pour y remédier.</p>
          <p>La Société ne saurait être tenue responsable d’une usurpation et/ou d’une utilisation frauduleuse d’un Compte Freelance en cas d’usage non-autorisé, frauduleux ou abusif ou dû à une divulgation volontaire ou involontaire par l’Utilisateur à un tiers de ses éléments d’identification. L’Utilisateur demeure seul responsable de l’usage qui pourrait être fait de son Compte Freelance par un tiers qui aurait accédé au Site avec ses éléments d’identification.</p>
          <p>L’Utilisateur garantit que toutes les informations communiquées par lui dans le formulaire d’inscription sont exactes, conformes à la réalité et sincères et ne sont entachées d’aucun caractère trompeur. Il appartient à l’Utilisateur de communiquer tout changement relatif à ses informations personnelles. Les informations demandées sont les suivantes : adresse(s) mail(s), nom(s), prénom(s), nationalité(s).</p>
          <p>Toute inscription contenant des informations inexactes ne sera pas prise en compte.</p>
          <p>L’Utilisateur peut à tout moment se désinscrire de son Compte Freelance en se connectant sur la page “Mon compte” et en cliquant sur le bouton à fond rouge “Supprimer”. La désinscription est automatique et immédiate.</p>
          <p>L’Utilisateur peut également effectuer une demande de suppression de son Compte en adressant un courriel à l’adresse de contact en haut des présente CGU. Dans la mesure où l’effet de cette demande est la suppression définitive du Compte et de ses données, le Site enverra un courriel demandant à l’Utilisateur de confirmer sa demande. Si l’Utilisateur confirme son souhait de suppression de Compte, ledit Compte sera supprimé.</p>
          <h4>Interdiction d’accès au Compte</h4>
          <p>Le Site se réserve par ailleurs la possibilité de suspendre le Compte si elle considère que l’Abonné a violé une des dispositions des CGU.</p>
          <h4>Courriel et Newsletters</h4>
          <p>En créant un Compte sur le Site, l’Utilisateur est informé qu’il autorise la Société à lui envoyer des notifications par courrier électronique à l’adresse électronique indiquée lors de l’inscription. Ces notifications peuvent comprendre, sans s’y limiter : des mises à jour du Service, des conseils et des tutoriels sur l’utilisation du Service et des messages du système.</p>
          <p>L’Utilisateur peut se désabonner à tout moment de la newsletter en utilisant le lien de désabonnement en bas de chaque courriel envoyé.</p>
        </div>

        <div className='paragraphe'>
          <h3>Article 8 - Contenu des Services</h3>
          <p>Les Services permettent aux Freelances Inscrits de créer et d’éditer une fiche freelance.</p>
          <p>Cette fiche peut être mise hors ligne simplement sans avoir à supprimer son Compte.</p>
          <p>Cette fiche sera accessible publiquement, ainsi que toutes les informations qu’elle contient sur le listing des Freelances.</p>
          <p>Cette fiche sera consultable par tous les Utilisateurs du site.</p>
          <p>Les informations renseignées sur la fiche seront mis à jour instantanément une fois ces dernières validé par le Freelance Inscrit.</p>
        </div>
        
        <div className='paragraphe'>
          <h3>Article 9 - Garanties et obligations des Utilisateurs</h3>
          <p>En accédant au Site, l’Utilisateur déclare, garantit et s’engage à :</p>
          <ol>
            <li>accéder aux Services en toute bonne foi, de manière raisonnable, et non contraire aux termes des présentes ;</li>
            <li>ne pas commercialiser directement ou indirectement les Services et/ou l’accès aux Services ;</li>
            <li>ne pas réutiliser tout ou partie des Services qu’il contient, en particulier à des fins commerciales et/ou collectives et/ou à des fins personnelles sous une forme et/ou un média non autorisé par la Société ;</li>
          </ol>
          <p>En cas de manquement à l’une ou l’autre de ces obligations et ce, sans que cette liste soit limitative, l’Utilisateur reconnaît et accepte que la Société se réserve le droit de lui refuser l’accès à tout ou partie du Site.</p>
          <p>Il est strictement interdit d’utiliser les Services aux fins suivantes :</p>
          <ol>
            <li>l’exercice d’activités illégales, frauduleuses ou portant atteinte aux droits ou à la sécurité des tiers,</li>
            <li>l’atteinte à l’ordre public ou la violation des lois et règlements en vigueur,</li>
            <li>l’intrusion dans le système informatique d’un tiers ou toute activité de nature à nuire, contrôler, interférer, ou intercepter tout ou partie du système informatique d’un tiers, en violer l’intégrité ou la sécurité,</li>
            <li>l’envoi de courriels non sollicités et/ou de prospection ou sollicitation commerciale,</li>
            <li>l’aide ou l’incitation, sous quelque forme et de quelque manière que ce soit, à un ou plusieurs des actes et activités décrits ci-dessus, et
        plus généralement toute pratique détournant les Services à des fins autres que celles pour lesquelles ils ont été conçus.</li>
            <li>copier et/ou de détourner à leurs fins ou à celles de tiers le concept, les technologies ou tout autre élément du Site ;</li>
          </ol>
          <p>Sont également strictement interdits :</p>
          <ol>
            <li>tous comportements de nature à interrompre, suspendre, ralentir ou empêcher la continuité des Services,</li>
            <li>toutes intrusions ou tentatives d’intrusions dans les systèmes de la Société,</li>
            <li>tous détournements des ressources système du site,</li>
            <li>toutes actions de nature à imposer une charge disproportionnée sur les infrastructures de ce dernier,</li>
            <li>toutes atteintes aux mesures de sécurité et d’authentification,</li>
            <li>tous actes de nature à porter atteinte aux droits et intérêts financiers, commerciaux ou moraux de la Société ou des usagers de son Site, et enfin plus généralement ;</li>
            <li>tout manquement aux présentes conditions générales.</li>
          </ol>
          <p>Il est strictement interdit de monnayer, vendre ou concéder tout ou partie de l’accès aux Services ou au Site, ainsi qu’aux informations qui y sont hébergées et/ou partagées.</p>
          <p>En cas de manquement à l’une quelconque des dispositions des présentes conditions générales ou plus généralement, d’infraction aux lois et règlements en vigueur par un Utilisateur, la Société se réserve le droit de prendre toute mesure appropriée et notamment de :</p>
          <ul>
            <li>à tout moment, sans notification préalable, interrompre ou suspendre, de manière temporaire ou définitive, tout ou partie du Site ou de l’accès aux Services de l’Utilisateur, auteur du manquement ou de l’infraction, ou y ayant participé ;</li>
            <li>dans le cas où l’accès du Site et/ou du Service serait suspendu et quelle que soit la raison, les Utilisateurs ne pourront prétendre en aucun cas à l’allocation d’une indemnité de quelque nature que ce soit.</li>
            <li>publier sur le Site tout message d’information que la Société jugera utile ;</li>
            <li>avertir toute autorité concernée ;</li>
            <li>engager toute action judiciaire.</li>
          </ul>
        </div>

        <div className='paragraphe'>
          <h3>Article 10 - Responsabilité et garantie de la Société</h3>
          <p>L’Utilisateur accepte et reconnaît qu’il est seul responsable des informations contenues sur le Site et qu’il a transmises à la Société.</p>
          <p>La Société décline toute responsabilité en cas de perte éventuelle des informations accessibles sur le Compte de l’Utilisateur, celui-ci devant en sauvegarder une copie et ne pouvant prétendre à aucun dédommagement à ce titre.</p>
          <p>La Société n’intervient pas en qualité de fournisseur d’accès à internet. A ce titre, La Société ne peut garantir ni la qualité de la connexion internet, ni l’absence d’interruption propre au réseau.</p>
          <p>La Société s’engage à procéder régulièrement à des contrôles afin de vérifier le fonctionnement et l’accessibilité du Site. A ce titre, La Société se réserve la faculté d’interrompre momentanément l’accès au Site pour des raisons de maintenance.</p>
          <p>De même, la Société ne saurait être tenue responsable des difficultés ou impossibilités momentanées d’accès au Site qui auraient pour origine des circonstances qui lui sont extérieures, la force majeure, ou encore qui seraient dues à des perturbations des réseaux de télécommunication.</p>
          <p>La Société ne garantit pas aux Utilisateurs que les Services, soumis à une recherche constante pour en améliorer notamment la performance et le progrès, seront totalement exempts d’erreurs, de vices ou défauts, que les Services, étant standard et nullement proposés à la seule intention d’un Utilisateur donné en fonction de ses propres contraintes personnelles, répondront spécifiquement à ses besoins et attentes.</p>
          <p>La Société ne saurait être responsable à l’égard de l’Utilisateur de toute perte ou dommage qu’il pourrait subir du fait de tout changement ou de toute suppression temporaire ou définitive de la part de la Société dans l’offre du Service ou des fonctions proposées sur le Site.</p>
          <p>L’Utilisateur ne saurait opposer à la Société les conditions générales d’utilisation et/ ou les conditions générales de vente des éventuels sites partenaires et s’engage à en prendre connaissance et à les accepter avant tout achat sur lesdits sites partenaires.</p>
          <p>En tout état de cause, la responsabilité susceptible d’être encourue par la Société au titre des présentes est expressément limitée aux seuls dommages directs avérés subis par l’Utilisateur.</p>
        </div>

        <div className='paragraphe'>
          <h3>Article 11 - Propriété Intellectuelle</h3>
          <p>La Société est propriétaire exclusive des droits de propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles sur le Site parmi lesquels les composantes visuelles et textuelles du Site, la marque et les logos, la charte graphique du Site, les codes sources, les algorithmes, la structure et le logiciel mis en œuvre pour le fonctionnement du Site.</p>
          <p>L’ensemble de ces éléments est protégé par tous droits de propriété intellectuelle ou droits des producteurs de base de données en vigueur. Toute utilisation ou reproduction, même partielle, non autorisée, du Site ou de l’un des éléments qu’il contient est strictement interdite et sera considérée comme constitutive d’une contrefaçon. Tout contrevenant sera poursuivi devant les juridictions compétentes.</p>
          <p>A l'exception des éléments publiés sous une licence libre, toutes reproductions ou représentations, même partielles, par quelque procédé que ce soit, toutes requêtes automatisées ou non visant la récupération des données publiées sur cette plateforme, faites sans l'autorisation de l'éditeur sont illicites et constituent une contrefaçon conformément aux dispositions de la loi du 11 mars 1957, articles 40,41 et 42 du Code Pénal.</p>
        </div>

        <div className='paragraphe'>
          <h3>Article 12 - Données Personnelles</h3>
          <p>La Société peut être amenée à collecter des données personnelles en fonction du Compte dont bénéficie l’Utilisateur.</p>
          <p>Par conséquent la Société invite l’Utilisateur à lire la politique de confidentialité et de traitement des données personnelles présente sur cette même page.</p>
          <p>Cette politique fait partie intégrante des présentes CGU. L’acceptation des présentes CGU emporte l’acceptation de la politique de confidentialité attachée.</p>
          <p>Il est précisé que la politique de confidentialité est conforme au Règlement européen 2016/679 du 27 avril 2016 relatif à la protection des personnes physiques à l’égard du traitement des données à caractère personnel (RGPD).</p>
        </div>

        <div className='paragraphe'>
          <h3>Article 13 - Liens et sites tiers</h3>
          <p>La Société ne pourra en aucun cas être tenue pour responsable de la disponibilité technique de sites internet ou d’applications mobiles exploités par des tiers (y compris ses éventuels partenaires) auxquels l’Utilisateur accédera par l'intermédiaire du Site.</p>
          <p>La Société n'endosse aucune responsabilité au titre des contenus, publicités, produits et/ou services disponibles sur de tels sites et applications mobiles tiers dont il est rappelé qu’ils sont régis par leurs propres conditions d’utilisation.</p>
          <p>La Société n'est pas non plus responsable des transactions intervenues entre l’Utilisateur et un quelconque annonceur, professionnel ou commerçant (y compris ses éventuels partenaires) vers lequel l’Utilisateur serait orienté par l'intermédiaire du Site et ne saurait en aucun cas être partie à quelques litiges éventuels que ce soit avec ces tiers concernant notamment la livraison de produits et/ou services, les garanties, déclarations et autres obligations quelconques auxquelles ces tiers sont tenus.</p>
        </div>
        
        <div className='paragraphe'>
          <h3>Article 14 - Modification des Conditions Générales d’Utilisation</h3>
          <p>Afin de se conformer à la législation en vigueur ou afin d’améliorer l’utilisation du Site, il est possible que la Société révise les présentes CGU.</p>
          <p>Toute modification est applicable quinze (15) jours après la notification par courriel de la mise à jour des CGU aux Utilisateurs.</p>
          <p>L’utilisation continue du Site par l’Utilisateur après la publication des CGU révisées signifie qu’il accepte et agrée ces modifications.</p>
          <p>En cas de désaccord avec les nouvelles dispositions des CGUV, l’Utilisateur s’engage à cesser toute utilisation du Site et à demander la suppression de son Compte à l’adresse indiqué en haut des présentes CGU.</p>
        </div>
        
        <div className='paragraphe'>
          <h3>Article 15 - Droit applicable & Litiges</h3>
          <p>Les présentes CGU sont régies par la loi française.</p>
          <p>Dans l’hypothèse d’un désaccord entre les Parties, l’une des Parties devra en informer l’autre par le biais d’une lettre recommandée avec accusé de réception. Dès réception de cette lettre, et dans un délai de quinze (15) jours, l’une des Parties devra proposer une solution de règlement amiable du différend. En cas d’échec de cette tentative ou d’absence de réponse, elle pourra porter son litige devant les juridictions compétentes.</p>
          <p>Les Parties s’engagent par conséquent à suivre la procédure de règlement amiable avant de saisir les juridictions, cette tentative de médiation étant une condition de recevabilité à toute action en justice.</p>
          <p>Tout litige né de l’exécution des présentes CGU ou en relation avec les présentes CGU sera soumis aux juridictions compétentes, sous réserve des dispositions applicables aux consommateurs.</p>
          <p>En cas de litiges survenu suite à l’interprétation des présentes CGU seul le tribunal de commerce de Lyon pourra trancher.</p>
        </div>
        
        <div className='paragraphe'>
          <h3>Article 18 - Dispositions diverses</h3>
          <p>La langue d’interprétation des présentes CGU est la langue française.</p>
          <p>En cas de contradiction entre les CGU et d’autres éléments, règles ou lignes directrices figurants sur le site, les CGU prévaudront.</p>
          <p>Si une ou plusieurs stipulations des présentes CGU étai(en)t déclarée(s) nulle(s) en application d’une loi, d’un règlement ou à la suite d’une décision définitive d’une juridiction compétente, les autres stipulations garderont tous leurs effets.</p>
          <p>Aucune tolérance quelle qu'en soit la nature, l'ampleur, la durée ou la fréquence ne pourra être considérée comme créatrice d'un quelconque droit, ni être interprétée comme une renonciation à l'une quelconque des dispositions des CGU.</p>
        </div>
        
        <div className='paragraphe'>
          <h3>Article 18 - Entrée en vigueur et mise à jour</h3>
          <p>Les présentes CGU sont entrées en vigueur le 01/08/2020.</p>
          <h4>Politique de Confidentialité</h4>
          <p>La Société met en œuvre des traitements de données à caractère personnel à travers le Site tel que défini dans les conditions générales d’utilisation.</p>
          <p>Le Site met en œuvre un traitement de données à caractère personnel aux fins d’utilisation des Services du Site.</p>
          <p>Les données à caractère personnel qui sont collectées varient en fonction de la façon dont le Site est utilisé. Les données à caractère personnel collectées ou détenues sont directement communiquées par la personne elle-même, soit proviennent de tiers.</p>
          <p>La Société respecte l’ensemble des lois et règlements relatifs à la protection des données à caractère personnel en vigueur dans les pays où elle exerce ses activités, incluant notamment mais non limitativement le règlement européen 2016/679 du 27 avril 2016 (Règlement Général sur la Protection des Données, souvent appelé RGPD) et la loi du 6 janvier 1978 Informatique et Libertés.</p>
          <p>En utilisant le Site, l’Utilisateur ou toute autre personne utilisant le Site accepte les pratiques décrites dans la présente politique de traitement des données personnelles.</p>
          <h4>Responsable de Traitement</h4>
          <p>Le responsable de traitement est la société qui définit pour quel usage et comment vos données personnelles sont utilisées.</p>
          <p>Les données personnelles collectées sur le Site sont traitées par la Société.</p>
          <h4>Création de compte/ Utilisation des services</h4>
          <p>Tout Utilisateur devra créer un Compte pour utiliser certains Services.</p>
          <p>Les informations suivantes de l’Utilisateur seront demandées afin de créer un Compte : identifiant (adresse email), mot de passe, prénom, nom, SIRET, numéro de téléphone.</p>
          <p>Le Site collecte des informations destinées à permettre aux Utilisateurs de créer un Compte. Il s’agit des données d’identification et de contact décrites ci-dessus.</p>
          <h4>Finalité du traitement</h4>
          <p>L’utilisation de l’ensemble des informations citées ci-dessus est faite uniquement aux fins de création de Compte et d’utilisation des Services telle que définies dans les conditions générales d’utilisation du Site. Ces informations sont utilisées pour honorer les finalités liées aux prestations et Services sollicités.</p>
          <p>L’utilisation de ces informations telle que décrite ci-dessus est autorisée par la réglementation applicable à la protection des données personnelles et dans tous les cas repose sur le fondement juridique du consentement.</p>
          <h4>Utilisation du Site</h4>
          <p>Le Site utilise la technologie des cookies pour améliorer la navigation ainsi que l’expérience des utilisateurs du site. Lors de la consultation de celui-ci, ces cookies peuvent être enregistrés sur les navigateurs du support utilisé, quel que soit le terminal (ordinateur, tablette, smartphone).</p>
          <p>Ils servent notamment lors de l’identification pour des analyses de la fréquentation et de l’utilisation des éléments du Site. À tout moment, les visiteurs peuvent décider d’accepter ou de refuser l’utilisation des cookies ainsi que modifier leurs préférences. Le cookie possède une durée de validité qui varie en fonction du type de cookie et permet la reconnaissance du visiteur lors d’une prochaine utilisation du site internet. En tout état de cause, cette durée n’excède pas treize mois.</p>
          <p>Les visiteurs peuvent décider d’accepter ou de refuser les cookies lors de leur navigation sur le site.</p>
          <p>Il existe plusieurs types de cookies :</p>
          <h4>Cookies de navigation</h4>
          <p>Ils sont indispensables pour permettre l’utilisation des fonctionnalités disponibles sur le Site et d’en optimiser la navigation.</p>
          <h4>Cookies de personnalisation</h4>
          <p>Ces cookies permettent au Site d’enregistrer les choix et préférences des Utilisateurs ou de toute personnes utilisant les Site et de les conserver afin d’optimiser les navigations ultérieures sur le Site à partir des mêmes terminaux.</p>
          <h4>Cookies de mesure d’audience</h4>
          <p>Il s’agit de cookies permettant au Site de mesurer l’audience d’Utilisateurs, de manière anonymisée, sur son Site et notamment les pages vues, le nombre de visites, la récurrence, etc.</p>
          <p>Pour gérer les cookies, l’Utilisateur peut paramétrer son navigateur et décider, notamment de refuser tout ou partie des cookies, de les supprimer, etc. Cependant, nous attirons l’attention des Utilisateurs ou de toute personne navigant sur le Site sur le fait que certaines fonctionnalités du Site ou l’affichage de certaines pages ne s’effectuerait plus correctement, si celui-ci décidait de refuser l’enregistrement des cookies.</p>
          <h4>Finalités complémentaires du traitement des données collectées par les cookies</h4>
          <p>La Société est amenée à traiter certaines données collectées par les cookies dans un but légitime, comme la gestion de la relation client ou avec les prospects, ainsi que l’amélioration de ses services.</p>
          <p>La Societé peut également être amenée à utiliser ces données notamment afin d’effectuer des enquêtes et mesures de satisfaction, gérer des animations commerciales et une communication marketing dans le cadre de ses partenariats, etc. Ces données sont utilisées dans un intérêt légitime dès lors que les droits et libertés des personnes concernées n’y font pas obstacle. La Société ne vend jamais ces informations à des entreprises tierces.
        Durée de conservation des données</p>
          <p>La durée de conservation des données dépend de la finalité poursuivie. Elles sont ensuite archivées le temps nécessaire pour permettre à la Société de répondre à ses obligations légales.</p>
          <h4>Sur les données des Comptes</h4>
          <p>La Société conserve ces données d’identification tant que le compte est actif, puis pendant une durée de cinq (5) ans.</p>
          <h4>Adresses IP et cookies</h4>
          <p>La Société conserve ces données tant que le compte est actif.</p>
          <h4>Sécurité des Données</h4>
          <p>Les données traitées par la Société sont protégées par des mesures de sécurité adaptées en fonction du caractère des données traitées.</p>
          <p>Les utilisateurs du Site ont accès à leur espace personnel grâce à un mot de passe dont ils sont seuls responsables. La Société décline toute responsabilité en cas de partage de ce mot de passe avec un quelconque tiers.</p>
          <h4>Partage des données</h4>
          <p>Certaines informations sont transmises aux prestataires de service, qui agissent en qualité de sous-traitants dans le but de concourir techniquement et administrativement à la réalisation des Services et aux Partenaires de la Société pour permettre l’utilisation des Services proposés par la Société dans la limite nécessaire à leur intervention. Les tiers et partenaires sont principalement :</p>
          <ul>
            <li>les prestataires d’hébergement de données et autres prestataires de services informatiques ;</li>
            <li>les partenaires marketing et publicitaires,</li>
            <li>les autorités fiscales, administratives ou judiciaires compétentes, ainsi que certaines professions réglementées tels que les avocats et experts-comptables, etc.</li>
          </ul>
          <p>Des données peuvent également être partagées dans des cas non prévus ci-dessus avec le consentement des personnes concernées ou parce que la Société y est soumis par la législation applicable.</p>
          <p>La Société prend toutes les mesures nécessaires pour que les données soient traitées en toute sécurité et conformément à la présente politique de confidentialité quand elles sont communiquées à des tiers.</p>
          <h4>Transfert de Données en dehors de l’Union Européenne</h4>
          <p>La Société traite les données au sein de l’Union Européenne et les conserve au sein de ce même espace.</p>
          <h4>Droit d’accès, de rectification et de suppression</h4>
          <p>Toute personne dont les données personnelles ont été collectées et traitées dans le cadre de la mise en œuvre de la présente politique de confidentialité disposent des droits ci-après mentionnés :</p>
          <ul>
            <li>le droit d'accéder à ses données à caractère personnel</li>
            <li>le droit de corriger toute erreur figurant dans les fichiers</li>
            <li>le droit de faire effacer ses données à caractère personnel, de limiter leur traitement ou de s'y opposer</li>
            <li>le droit de retirer son consentement</li>
            <li>le droit de s'opposer à la réception de documents de prospection commerciale à l'avenir</li>
            <li>dans certaines circonstances, le droit de veiller à ce que ces informations soient transférées à un tiers</li>
            <li>le droit de définir des directives générales et particulières définissant la manière dont elle souhaitent que soient exercés, après son décès, les droits mentionnés ci-dessus par courrier électronique à l'adresse de la société</li>
          </ul>
          <h4>Contact et réclamations</h4>
          <p>Toute personne dispose d'une faculté de déposer une réclamation auprès de la CNIL. Toutes les questions soulevées dans la présente Politique et les demandes d'exercice des droits de la personne concernée sont gérées par le Délégué à la Protection des Données qui peut être contacté par courrier électronique à l'adresse de la société.</p>
          <p>Toute demande d'exercice des droits d'accès, de rectification, de suppression ou de limitation du traitement doit être accompagnée de la copie d'une pièce d'identité du demandeur.</p>
          <h4>Statut de la présente politique de confidentialité</h4>
          <p>La présente politique de confidentialité a été mise à jour le 01/08/20.</p>
          <p>La Société se réserve le droit de la modifier à tout moment afin de fournir une information à jour sur la façon dont sont collecté et traité les données.</p>
        </div>
      </main>
    </div>
  );
}

export default GeneralConditions;
