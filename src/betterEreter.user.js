// ==UserScript==
// @name         betterEreter_Beta
// @version      0.6
// @description  better ereter.net
// @author       lily.C
// @match        https://ereter.net/iidxplayerdata/*/analytics/combined/
// @match        https://ereter.net/iidxplayerdata/*/level/12/
// @match        file:///*/html/index.html
// @grant        GM_setValue
// @grant        GM_getValue
// @updateURL    https://github.com/LilyCodeholic/betterEreterNet/raw/master/src/betterEreter.user.js
// @downloadURL  https://github.com/LilyCodeholic/betterEreterNet/raw/master/src/betterEreter.user.js
// ==/UserScript==

(() =>
{
"use strict"

const titles = [
{category: "A~D"},
{id:  "250", title: `A [A]`},
{id: "5882", title: `A MINSTREL ～ ver. short-scape ～ [L]`},
{id:  "576", title: `AA [A]`},
{id: "3195", title: `AA -rebuild- [A]`},
{id: "4828", title: `ABSOLUTE EVIL [A]`},
{id: "5580", title: `ACT0 [A]`},
{id: "2090", title: `Adularia [A]`},
{id: "3848", title: `Afterimage d'automne [A]`},
{id: "4722", title: `Aftermath [A]`},
{id: "3814", title: `AIR RAID FROM THA UNDAGROUND [L]`},
{id: "4025", title: `AKASHIC BREAK [A]`},
{id: "5762", title: `ALBA -黎明- [L]`},
{id: "1291", title: `Almagest [A]`},
{id: "4734", title: `ALTERNATOR [A]`},
{id: "5206", title: `Always We Trust In You [A]`},
{id: "3342", title: `Amazing Mirage [L]`},
{id: "5494", title: `Ambivalent Vermilia [A]`},
{id: "6126", title: `Amor∞Fati [A]`},
{id: "3515", title: `ANCHOR [A]`},
{id: "2096", title: `Ancient Scapes [A]`},
{id: "2097", title: `Ancient Scapes [L]`},
{id: "4570", title: `Angel's Ladder [A]`},
{id: "1022", title: `Anisakis -somatic mutation type"Forza"- [A]`},
{id: "4561", title: `Anisakis -somatic mutation type"Forza"- [L]`},
{id: "3493", title: `Antigravity [A]`},
{id: "6315", title: `Any％ [A]`},
{id: "2626", title: `AO-1 [A]`},
{id: "3165", title: `Apocalypse [A]`},
{id: "5898", title: `Aqvion [A]`},
{id: "4346", title: `Arabian Rave Night [L]`},
{id: "3213", title: `Arca [A]`},
{id: "4881", title: `Arkadia [A]`},
{id: "4137", title: `Artist [A]`},
{id: "4402", title: `ASIAN VIRTUAL REALITIES (MELTING TOGETHER IN DAZZLING DARKNESS) [A]`},
{id: "6129", title: `Astra Blaze [A]`},
{id: "3812", title: `B4U(BEMANI FOR YOU MIX) [L]`},
{id: "4902", title: `B.O.D.Y. [A]`},
{id: "2918", title: `BabeL ～Grand Story～ [A]`},
{id: "4905", title: `Bad Encryption [A]`},
{id: "1297", title: `Bad Maniacs [A]`},
{id: "2635", title: `Battle Train -IIDX Edition- [A]`},
{id: "1028", title: `Be OK [A]`},
{id: "4458", title: `Be quiet [L]`},
{id: "4105", title: `BEAT PRISONER [A]`},
{id: "2344", title: `Beat Radiance [L]`},
{id: "6135", title: `Begin [A]`},
{id: "5133", title: `Beyond Evolution [A]`},
{id: "5154", title: `BIGWAVERS [A]`},
{id: "4225", title: `BIGソムタム [A]`},
{id: "4752", title: `Binary Black Hole [A]`},
{id: "6138", title: `BitRacer [A]`},
{id: "5763", title: `BITTER CHOCOLATE STRIKER [L]`},
{id: "4463", title: `BLACK or WHITE? [A]`},
{id: "1653", title: `BLACK.by X-Cross Fade [A]`},
{id: "5544", title: `BLAZING_LAZER [A]`},
{id:  "591", title: `BLOCKS [A]`},
{id: "5381", title: `BLUE DRAGON(雷龍RemixIIDX) [L]`},
{id: "3424", title: `Blue Rain [L]`},
{id: "2638", title: `Blue Spring Express [A]`},
{id: "3365", title: `Boomy and The Boost [A]`},
{id: "5883", title: `Bow shock!! [L]`},
{id: "2109", title: `BRAINSTORM [A]`},
{id: "5981", title: `BRAVE OUT [L]`},
{id: "5632", title: `Bring The Fire [A]`},
{id: "4692", title: `BroGamer [L]`},
{id: "1475", title: `Broken [A]`},
{id: "2356", title: `Broken Sword [A]`},
{id: "5125", title: `Burning Flame [L]`},
{id: "5482", title: `CADENZA [A]`},
{id: "5886", title: `Caldwell 99 [L]`},
{id: "6417", title: `Calvados Queen [L]`},
{id:  "906", title: `Candy Galy [A]`},
{id: "4693", title: `Candy Galy [L]`},
{id: "5982", title: `CaptivAte～浄化～ [L]`},
{id: "3746", title: `Carmina [A]`},
{id: "3716", title: `Carry Me Away [A]`},
{id: "3664", title: `Catch Our Fire! [A]`},
{id: "2942", title: `Caterpillar [A]`},
{id: "2644", title: `chaos eater -IIDX edition- [A]`},
{id: "5148", title: `Chaotoxin [A]`},
{id: "6239", title: `chaplet -IIDX re:build- [A]`},
{id: "5983", title: `ChaserXX [L]`},
{id:  "261", title: `Cheer Train [A]`},
{id: "2367", title: `CHRONO DIVER -NORNIR- [L]`},
{id: "2370", title: `Chrono Diver -PENDULUMs- [A]`},
{id: "2376", title: `cinder [A]`},
{id: "6426", title: `Citroforte [A]`},
{id: "2121", title: `Close the World feat.a☆ru [A]`},
{id: "2122", title: `Close the World feat.a☆ru [L]`},
{id: "5382", title: `CODE:0 [L]`},
{id: "2647", title: `CODE:1 [revision1.0.1] [A]`},
{id: "5595", title: `CODE:2 [A]`},
{id: "1183", title: `Colorful Cookie [A]`},
{id:  "210", title: `Colors (radio edit) [A]`},
{id: "6144", title: `CoMAAAAAAA [L]`},
{id:  "805", title: `Concertino in Blue [A]`},
{id: "1857", title: `Confiserie [A]`},
{id:  "808", title: `CONTRACT [A]`},
{id: "3381", title: `CONTRACT [L]`},
{id: "2383", title: `Cosmic Cat [L]`},
{id: "4523", title: `COSMIC RAY [A]`},
{id: "5641", title: `COSMIC V3LOCITY [A]`},
{id: "5904", title: `Cross Fire [A]`},
{id: "5885", title: `CUE CUE RESCUE [L]`},
{id: "5604", title: `Cult Invitation [A]`},
{id: "5272", title: `Dahlia [A]`},
{id: "1481", title: `Dances with Snow Fairies [A]`},
{id: "5256", title: `Dances with Snow Fairies [L]`},
{id: "4187", title: `Dans la nuit de l'eternite [A]`},
{id: "2131", title: `DARK LEGACY [A]`},
{id: "3533", title: `dAuntl3ss [A]`},
{id: "4423", title: `Dawn Saga [A]`},
{id: "1866", title: `DAY DREAM [A]`},
{id: "3240", title: `DEADHEAT [A]`},
{id: "6429", title: `DEADRABBIT!! [A]`},
{id: "3349", title: `DEATH†ZIGOQ ～怒りの高速爆走野郎～ [A]`},
{id: "5615", title: `DEATH†ZIGOQ ～怒りの高速爆走野郎～ [L]`},
{id: "6432", title: `Deathstalker [A]`},
{id: "5556", title: `Demon March [A]`},
{id: "2386", title: `Despair of ELFERIA [A]`},
{id: "5644", title: `destination [A]`},
{id: "2660", title: `Devil's Gear [A]`},
{id: "1869", title: `Devilz Staircase [A]`},
{id: "2663", title: `DIAMOND CROSSING [A]`},
{id: "1665", title: `DIAVOLO [A]`},
{id: "5124", title: `dica dica [A]`},
{id: "6321", title: `Digitized Ocean [A]`},
{id: "6016", title: `Disco Killer Music Lover [A]`},
{id: "5791", title: `DIVINE JUDGEMENT [A]`},
{id: "1045", title: `Do it!! Do it!! [A]`},
{id: "6145", title: `Do it!! Do it!! [L]`},
{id: "6324", title: `Dolphin Kick [A]`},
{id: "1333", title: `DOMINION [A]`},
{id: "4582", title: `Don't believe the hype [A]`},
{id: "2951", title: `DORNWALD ～Junge～ [A]`},
{id: "4108", title: `Double Dribble [A]`},
{id: "3539", title: `Dr. Chemical &amp; Killing Machine [A]`},
{id: "3673", title: `Drastic Dramatic [A]`},
{id: "5653", title: `Drop Syndicate [A]`},
{id: "3442", title: `DropZ-Line- [A]`},
{id: "4544", title: `DUAL STRIKER [A]`},
{id: "3390", title: `DUE TOMORROW [A]`},
{id: "6307", title: `Dusk Endir [A]`},
{id:  "109", title: `DXY! [A]`},
{id:  "108", title: `DXY! [H]`},
{id: "2675", title: `Dynamite [A]`},
{category: "E~H"},
{id: "2389", title: `EBONY &amp; IVORY [A]`},
{id: "2390", title: `EBONY &amp; IVORY [L]`},
{id: "2954", title: `ECHIDNA [A]`},
{id: "3463", title: `Eine Haube ～聖地の果てにあるもの～ [A]`},
{id: "2140", title: `Elektrick U-Phoria [A]`},
{id: "5194", title: `Elektrick U-Phoria [L]`},
{id: "1875", title: `Elemental Creation [A]`},
{id: "6146", title: `Ember Lights [L]`},
{id: "3496", title: `EMERALDAS [A]`},
{id: "4237", title: `Empire of Fury [A]`},
{id: "3368", title: `encounter [A]`},
{id: "2393", title: `entelecheia [A]`},
{id:   "62", title: `era (nostalmix) [A]`},
{id:   "61", title: `era (nostalmix) [H]`},
{id:  "114", title: `era (step mix) [A]`},
{id: "1345", title: `eRAseRmOToRpHAntOM [A]`},
{id: "4193", title: `EROICA [A]`},
{id: "3731", title: `EVANESCENT [A]`},
{id: "1348", title: `Evans [A]`},
{id: "4134", title: `Everlasting Message [A]`},
{id: "5662", title: `EX-MASSIVE FIGHTER [A]`},
{id: "1351", title: `EXUSIA [A]`},
{id: "5907", title: `EYE OF THE HEAVEN [A]`},
{id: "1674", title: `F [A]`},
{id:  "611", title: `FAKE TIME [A]`},
{id:  "610", title: `FAKE TIME [H]`},
{id: "2399", title: `fallen leaves -IIDX edition- [A]`},
{id: "2402", title: `FANTASTIC THREE [A]`},
{id:  "921", title: `Fascination MAXX [A]`},
{id: "2156", title: `Feel The Beat [L]`},
{id: "4591", title: `Fegrix [A]`},
{id: "1680", title: `fffff [A]`},
{id: "4852", title: `Fire Beat [A]`},
{id: "6245", title: `fixer [A]`},
{id: "6149", title: `FiZZλ_POT!0N [A]`},
{id: "5910", title: `Flamingo [A]`},
{id: "2405", title: `Flashes [A]`},
{id: "6150", title: `Flashes [L]`},
{id: "1881", title: `FLOWER [A]`},
{id: "5794", title: `FlyAway [A]`},
{id: "4813", title: `Flying Castle [A]`},
{id: "1054", title: `four pieces of heaven [A]`},
{id: "5197", title: `four pieces of heaven [L]`},
{id: "5284", title: `frequent [A]`},
{id: "4140", title: `Friction[!]Function [A]`},
{id: "6022", title: `From Human Blood [A]`},
{id: "2963", title: `FUZIN RIZIN [A]`},
{id:  "224", title: `G2 [A]`},
{id: "1354", title: `G59 [A]`},
{id: "1887", title: `GAIA [A]`},
{id: "1357", title: `GALGALIM [A]`},
{id: "5287", title: `GAME ON [A]`},
{id:  "823", title: `Ganymede [A]`},
{id: "4460", title: `Ganymede [L]`},
{id:  "696", title: `garden [A]`},
{id: "5986", title: `garden [L]`},
{id: "3820", title: `GENE [A]`},
{id: "6151", title: `GENE [L]`},
{id:  "616", title: `GENOCIDE [A]`},
{id:  "615", title: `GENOCIDE [H]`},
{id: "5293", title: `Ghost Pulse [A]`},
{id:  "524", title: `GHOST REVIVAL [A]`},
{id: "3653", title: `GIGA THRASH [A]`},
{id:  "618", title: `gigadelic [H]`},
{id:  "619", title: `gigadelic [A]`},
{id: "6444", title: `gigadelic (WILD STYLE) [A]`},
{id: "4597", title: `GiGaGaHell [A]`},
{id: "4868", title: `GIGANT [L]`},
{id: "6342", title: `Gimme a Big Beat(青龍 Remix) [A]`},
{id: "5145", title: `glacia [A]`},
{id: "5464", title: `Glitch N Ride [A]`},
{id: "2966", title: `Go Ahead!! [A]`},
{id: "1195", title: `Go Beyond!! [A]`},
{id: "3842", title: `GO OVER WITH GLARE -ROOTAGE 26- [A]`},
{id: "2695", title: `GOBBLE [H]`},
{id: "5916", title: `God Mind [A]`},
{id: "2699", title: `Godspeed [A]`},
{id: "1360", title: `GOLDEN CROSS [A]`},
{id: "2702", title: `Grand Chariot [A]`},
{id: "2408", title: `Gravigazer [A]`},
{id: "4855", title: `GRAVITON [A]`},
{id: "3713", title: `GRID KNIGHT [L]`},
{id: "5614", title: `GUILTY [L]`},
{id: "2969", title: `GuNGNiR [A]`},
{id: "4213", title: `GuNGNiR [L]`},
{id: "2972", title: `HADES [A]`},
{id: "1689", title: `HAERETICUS [A]`},
{id: "3773", title: `HARD BRAIN [A]`},
{id: "4887", title: `hard-wired [A]`},
{id: "5060", title: `Hat Surprise (Season 2) [A]`},
{id: "5674", title: `Here We Go Now [A]`},
{id: "6160", title: `HEROES [A]`},
{id: "2705", title: `Highcharge Divolt [A]`},
{id: "6450", title: `History of dj TAKA - single style collection - [A]`},
{id:   "65", title: `Holic [A]`},
{id: "1893", title: `Hollywood Galaxy [A]`},
{id: "5833", title: `hora de verdad [A]`},
{id: "5888", title: `HYENA [L]`},
{id: "3408", title: `HYPE THE CORE [A]`},
{id: "6169", title: `HyperTwist [A]`},
{category: "I~L"},
{id: "5016", title: `I [A]`},
{id: "2168", title: `I will be back -オレは帰ってきた- [A]`},
{id: "1060", title: `ICARUS [A]`},
{id: "1061", title: `ICARUS [L]`},
{id: "2171", title: `Idola [A]`},
{id: "4506", title: `Ignis†Irae [A]`},
{id: "4875", title: `Illegal Function Call [L]`},
{id: "3487", title: `Illusionary Waterlily [A]`},
{id: "5890", title: `IMPLANTATION [L]`},
{id:  "709", title: `INAZUMA [A]`},
{id: "5984", title: `INAZUMA [L]`},
{id: "4040", title: `Inferno of Fomalhaut [A]`},
{id: "1698", title: `Infinite cave [A]`},
{id: "6170", title: `INHERITANCE [L]`},
{id: "3472", title: `Initiation [A]`},
{id: "4435", title: `innocent revolver [A]`},
{id:  "533", title: `Innocent Walls [A]`},
{id:  "941", title: `INORI [A]`},
{id: "2180", title: `INSOMNIA [A]`},
{id: "3439", title: `Invitation from Mr.C [A]`},
{id: "2186", title: `invoker [A]`},
{id: "2187", title: `invoker [L]`},
{id: "6348", title: `Iridescent Memories [A]`},
{id: "1911", title: `JOMANDA [A]`},
{id: "5305", title: `JUSTICE/GUILTY feat. Nana Takahashi &amp; 709sec. [A]`},
{id: "1515", title: `Kailua [A]`},
{id: "3657", title: `KAISER PHOENIX [L]`},
{id:  "944", title: `KAMAITACHI [A]`},
{id:  "945", title: `KAMAITACHI [L]`},
{id:  "418", title: `Karma [A]`},
{id: "3667", title: `KILL EACH OTHER [A]`},
{id: "5511", title: `KING [L]`},
{id: "6177", title: `King of Tribe [A]`},
{id: "5130", title: `kors k's How to make OTOGE CORE 「LONG」 [A]`},
{id: "3425", title: `Kung-fu Empire [L]`},
{id: "6174", title: `KYAMISAMA ONEGAI! [L]`},
{id: "3563", title: `L.F.O [A]`},
{id: "6118", title: `LAB [L]`},
{id:  "948", title: `LASER CRUSTER [A]`},
{id: "4087", title: `LASER CRUSTER (IGNITE REMIX) [A]`},
{id: "2202", title: `Last Dance [A]`},
{id: "3845", title: `Lethal Weapon [A]`},
{id: "4111", title: `Level 2 [A]`},
{id: "4532", title: `Level 3 [A]`},
{id: "5094", title: `Level 4 [A]`},
{id: "5565", title: `Level 5 [A]`},
{id: "3569", title: `Level One [A]`},
{id: "1914", title: `Liberation [A]`},
{id: "3475", title: `Life Is A Game ft.DD"ナカタ"Metal [A]`},
{id: "4013", title: `LIGHTNING STRIKES [A]`},
{id: "5764", title: `LIGHTNING STRIKES [L]`},
{id: "5680", title: `Lightspeed [A]`},
{id: "6354", title: `Limelight [A]`},
{id: "6186", title: `Lisa-RICCIA [A]`},
{id: "6187", title: `Lisa-RICCIA [L]`},
{id: "3500", title: `Little Little Princess [L]`},
{id: "1920", title: `Little Star [A]`},
{id: "4609", title: `LIVE DRIVING!! feat. 花たん [A]`},
{id: "4535", title: `LOCUS OF THE TRAVEL [A]`},
{id: "5445", title: `Logic Board [A]`},
{id: "4070", title: `Lords Of The Roundtable [A]`},
{id: "5616", title: `Lost Souls [L]`},
{id: "3676", title: `LOST TECHNOLOGIE [A]`},
{id: "5048", title: `LOUDER ROLLING THUNDER [A]`},
{id:  "536", title: `Love Is Eternity [A]`},
{id:  "430", title: `lower world [A]`},
{category: "M~P"},
{id: "2723", title: `M4K3 1T B0UNC3 [A]`},
{id: "3734", title: `Macho Monky [A]`},
{id: "6031", title: `Makin' It [A]`},
{id: "2990", title: `Mare Nectaris [A]`},
{id: "5800", title: `MARLIN [A]`},
{id: "4073", title: `Matt Silver [A]`},
{id: "5184", title: `MAX 300 [A]`},
{id: "5218", title: `MAX 360 [A]`},
{id: "5461", title: `MAXIMUM CHEAT GIRL [A]`},
{id: "4408", title: `MEGAERA [A]`},
{id: "4205", title: `Megalara Garuda [A]`},
{id: "4929", title: `Meissa [A]`},
{id: "6034", title: `Memoria Obscura [A]`},
{id: "1076", title: `MENDES [A]`},
{id: "5803", title: `Mid-Corner (Magic Maker) [A]`},
{id: "6358", title: `Mighty Beat Monsterz [A]`},
{id: "5479", title: `Million Dollar [A]`},
{id:  "132", title: `minimalian [A]`},
{id:  "840", title: `MINT [A]`},
{id: "5513", title: `Miracle 5ympho X [L]`},
{id:  "439", title: `moon_child [A]`},
{id:  "352", title: `murmur twins [A]`},
{id: "4831", title: `n/a [A]`},
{id: "3737", title: `Necroxis Girl [A]`},
{id:  "230", title: `NEMESIS [A]`},
{id: "1932", title: `neu [A]`},
{id: "3712", title: `New Castle Legions [A]`},
{id: "4768", title: `NEW GENERATION -もう、お前しか見えない- [L]`},
{id: "2453", title: `Night sky [A]`},
{id: "3823", title: `Night! Night! Night! [A]`},
{id: "2732", title: `Nightmare before oversleep [A]`},
{id: "2735", title: `NINJA IS DEAD IIDX ver. [A]`},
{id: "3384", title: `NITROUS CANNON [A]`},
{id: "1722", title: `NNRT [A]`},
{id: "4935", title: `No Border [A]`},
{id:  "547", title: `No.13 [A]`},
{id: "5689", title: `NOIXIA [A]`},
{id: "2744", title: `NZM [A]`},
{id: "5514", title: `O/D*20 [L]`},
{id: "6361", title: `OMEGA [A]`},
{id: "5088", title: `ONE AND ONLY [A]`},
{id: "4707", title: `One for All [A]`},
{id:  "550", title: `One More Lovely [A]`},
{id: "4000", title: `one or eight [L]`},
{id: "3767", title: `ONIGOROSHI [A]`},
{id: "3518", title: `op.31 叙情 [A]`},
{id: "1085", title: `oratio [A]`},
{id: "4178", title: `ORCA [A]`},
{id: "3005", title: `OTENAMI Hurricane [A]`},
{id: "5190", title: `OTOKOZAKA [A]`},
{id: "6468", title: `OTOROSHI [A]`},
{id: "5063", title: `Ou Legends [A]`},
{id: "5439", title: `Out of Control [A]`},
{id: "4869", title: `Override [L]`},
{id: "3700", title: `Painful Fate [A]`},
{id: "3402", title: `Papilio ulysses [A]`},
{id: "1536", title: `PARADISE LOST [A]`},
{id: "1088", title: `PARANOiA ～HADES～ [A]`},
{id: "4481", title: `Parvati [A]`},
{id: "5045", title: `Peaktime Booster [A]`},
{id: "1542", title: `perditus†paradisus [A]`},
{id: "6198", title: `PERFECT GREAT!! [A]`},
{id: "3393", title: `Persephone [A]`},
{id: "4835", title: `Phoenix [L]`},
{id: "5925", title: `Pinky Happy Crazy [A]`},
{id: "1941", title: `Plan 8 [A]`},
{id: "4780", title: `PLASMA SOUL NIGHT feat. Nana Takahashi / 709sec. [A]`},
{id: "6199", title: `Plazma [L]`},
{id: "6119", title: `POLKAMANIA [L]`},
{id: "4077", title: `POODLE [L]`},
{id: "2756", title: `POSSESSION [A]`},
{id: "3935", title: `Primitive Vibes [A]`},
{id: "1953", title: `Proof of the existence [A]`},
{id: "5985", title: `Punch Love 仮面 [L]`},
{id: "2235", title: `PUNISHER [A]`},
{id: "4633", title: `Purple Perplex [A]`},
{id: "4789", title: `Push on Beats!～音ゲの国のeX-ストリーマー～ [A]`},
{category: "Q~T"},
{id:  "163", title: `QQQ [H]`},
{id: "3014", title: `Quakes [A]`},
{id: "1731", title: `QUANTUM TELEPORTATION [A]`},
{id: "3501", title: `QUANTUM TELEPORTATION [L]`},
{id:  "448", title: `quasar [A]`},
{id: "1734", title: `quaver♪ [A]`},
{id: "1393", title: `quell～the seventh slave～ [A]`},
{id: "2238", title: `ra'am [A]`},
{id: "5032", title: `rage against usual [L]`},
{id: "4838", title: `RAGE feat.H14 of LEONAIR [A]`},
{id: "3017", title: `RAIN [A]`},
{id: "2241", title: `rainbow guitar weeps [A]`},
{id: "1396", title: `Raison d'etre～交差する宿命～ [A]`},
{id: "6363", title: `Raison d'etre～交差する宿命～ [L]`},
{id: "3414", title: `Rampage [A]`},
{id: "6046", title: `RALLY '25 [A]`},
{id: "3399", title: `Raspberry Railgun [A]`},
{id: "3020", title: `Rave Cannon [A]`},
{id: "4055", title: `Rave Patroller [A]`},
{id: "2468", title: `Rave*it!! Rave*it!! [A]`},
{id: "3362", title: `RED ZONE [L]`},
{id: "1399", title: `Red. by Full Metal Jacket [A]`},
{id: "3691", title: `Red. by Jack Trance [A]`},
{id: "2474", title: `Reflux [A]`},
{id: "2762", title: `refrain [A]`},
{id: "6049", title: `Regina vespaE [A]`},
{id: "5607", title: `Resonant [A]`},
{id: "1551", title: `reunion [A]`},
{id: "4806", title: `REVOLVER [L]`},
{id: "5019", title: `RINNE [A]`},
{id: "6364", title: `Rise'n Beauty [L]`},
{id:  "456", title: `RISLIM -Remix- [A]`},
{id: "2253", title: `RIZING YOU UP [A]`},
{id: "6205", title: `RIZING-GAMERS. [A]`},
{id: "5809", title: `Roar of Chronos [A]`},
{id:  "235", title: `route 80s [A]`},
{id: "4411", title: `Rubrum Piano [A]`},
{id: "3658", title: `RUGGED ASH [L]`},
{id: "3794", title: `ruin of opals [A]`},
{id: "6208", title: `RUINA [A]`},
{id: "1962", title: `rumrum triplets [A]`},
{id: "1557", title: `SABER WING [A]`},
{id: "1563", title: `sakura storm [A]`},
{id: "4563", title: `SAMURAI-Scramble [L]`},
{id: "1100", title: `satellite020712 from "CODED ARMS" [A]`},
{id: "5707", title: `Satellite Burst [A]`},
{id: "5516", title: `Saturn [L]`},
{id: "2483", title: `Say YEEEAHH [A]`},
{id:  "736", title: `SCREAM SQUAD [A]`},
{id: "4046", title: `SCREW //owo //SCREW [A]`},
{id: "4807", title: `Scripted Connection⇒ A mix [L]`},
{id: "5760", title: `Scripted Connection⇒ H mix [L]`},
{id: "4172", title: `Secrets [L]`},
{id:  "969", title: `Sense 2007 [A]`},
{id:  "968", title: `Sense 2007 [H]`},
{id: "3053", title: `SEQUENCE CAT [A]`},
{id: "1566", title: `Session 9 -Chronicles- [A]`},
{id: "5815", title: `Seven Times Four [A]`},
{id: "2492", title: `Shooting Fireball [A]`},
{id: "2259", title: `Sigmund [A]`},
{id: "2260", title: `Sigmund [L]`},
{id: "4755", title: `Silver Bullet [A]`},
{id: "4509", title: `Sinus Iridum [A]`},
{id: "5934", title: `SISYPHUS [A]`},
{id: "5418", title: `Sirius [A]`},
{id: "5940", title: `Skratch Education Lv-1 [A]`},
{id: "3065", title: `Sky High [A]`},
{id: "3490", title: `Slipstream [A]`},
{id: "4841", title: `Smalt #28598F [A]`},
{id: "4199", title: `Smashing Wedge [A]`},
{id:  "972", title: `smile [A]`},
{id: "6370", title: `Smintheus [A]`},
{id: "1761", title: `Snake Stick [A]`},
{id: "3068", title: `Snakey Kung-fu [A]`},
{id:  "975", title: `snow storm [A]`},
{id: "1977", title: `Sol Cosine Job 2 [A]`},
{id: "5317", title: `SOLAR ECLIPSE [A]`},
{id: "1411", title: `SOLID STATE SQUAD [A]`},
{id: "1412", title: `SOLID STATE SQUAD [L]`},
{id: "4414", title: `SOLID STATE SQUAD -RISEN RELIC REMIX- [A]`},
{id: "5617", title: `SOLID WYVERN [L]`},
{id: "5157", title: `Somnidiscotheque [A]`},
{id: "2498", title: `Sounds Of Summer [A]`},
{id: "6061", title: `Space Battleship S4TO [A]`},
{id: "2501", title: `SpaceLand☆TOYBOX [A]`},
{id: "1572", title: `SPECIAL SUMMER CAMPAIGN! [A]`},
{id:  "646", title: `Sphere [A]`},
{id:  "288", title: `Spica [A]`},
{id: "3426", title: `spiral galaxy [L]`},
{id: "3159", title: `STARLIGHT DANCEHALL [L]`},
{id:  "140", title: `starmine [A]`},
{id: "3180", title: `State Of The Art [A]`},
{id: "4503", title: `STEEL NEEDLE [L]`},
{id: "5509", title: `Stereo Beasts [A]`},
{id:  "291", title: `stoic [A]`},
{id: "2792", title: `StrayedCatz [A]`},
{id: "1983", title: `STULTI [A]`},
{id: "5227", title: `Stylus [A]`},
{id: "6218", title: `Submerge Serenade [L]`},
{id:  "240", title: `Summer Vacation(CU mix) [H]`},
{id: "3077", title: `Summerlights(IIDX Edition) [A]`},
{id: "6386", title: `super double play sessions [A]`},
{id: "6219", title: `Super Duper Racers [L]`},
{id: "5091", title: `Super Freak [A]`},
{id: "3080", title: `Super Rush [A]`},
{id: "5239", title: `suspicions [A]`},
{id:  "143", title: `SWEET LAB [A]`},
{id: "5476", title: `Sword of Vengeance [A]`},
{id: "1986", title: `SYNC-ANTHEM [A]`},
{id: "5943", title: `SμG@R RU$# [A]`},
{id: "3953", title: `T-REX vs Velociraptor (In the Far east euphoria) [A]`},
{id: "5824", title: `T.R.O.L.L. [A]`},
{id: "3956", title: `TECHNO Style Essentials [A]`},
{id: "4965", title: `TECHNOPHOBIA [A]`},
{id: "6489", title: `TEKNO KEISER [A]`},
{id: "1584", title: `THE BLACK KNIGHT [A]`},
{id: "6220", title: `THE BLACK KNIGHT [L]`},
{id: "3959", title: `THE BRAVE MUST DIE [A]`},
{id: "3303", title: `The Chase [A]`},
{id: "5115", title: `The Clown of 24stairs [A]`},
{id: "3599", title: `THE DAY OF JUBILATIONS [A]`},
{id: "3162", title: `THE DEEP STRIKER [L]`},
{id: "4058", title: `THE F∀UST [A]`},
{id: "5562", title: `The Last Apocalypse [A]`},
{id: "2516", title: `The Least 100sec [A]`},
{id: "1770", title: `The Limbo [A]`},
{id: "5033", title: `The Limbo [L]`},
{id: "5827", title: `The Onlyonez [A]`},
{id: "4366", title: `THE PEERLESS UNDER HEAVEN [A]`},
{id: "3602", title: `The Rebellion of Sequencer [A]`},
{id: "1773", title: `The Sampling Paradise [A]`},
{id: "4564", title: `the trigger of innocence [L]`},
{id: "1995", title: `Thor's Hammer [A]`},
{id: "4457", title: `thunder HOUSE NATION Remix [L]`},
{id: "6373", title: `THUNDERSTRIKE [A]`},
{id: "2519", title: `TIEFSEE [A]`},
{id: "4432", title: `Tiempo Loco [A]`},
{id: "4845", title: `Time to Air [L]`},
{id: "6224", title: `Time To Empress [L]`},
{id: "2001", title: `Timepiece phase II [A]`},
{id: "2004", title: `Timepiece phase II (CN Ver.) [A]`},
{id: "4078", title: `TITANS RETURN [L]`},
{id: "1782", title: `Todestrieb [A]`},
{id: "3092", title: `TOGAKUSHI [A]`},
{id: "6415", title: `TOGAKUSHI [L]`},
{id: "4710", title: `TOMAHAWK [A]`},
{id: "2522", title: `TOXIC VIBRATION [A]`},
{id:  "984", title: `TRANOID [A]`},
{id: "4162", title: `TRANOID [L]`},
{id: "3860", title: `Trill auf G [A]`},
{id: "2810", title: `Triple Counter [A]`},
{id: "4645", title: `Triple Cross [A]`},
{id:  "861", title: `tripping contact(teranoid&amp;MC Natsack Remix) [A]`},
{id: "3962", title: `TRIUMPH [A]`},
{id: "1127", title: `TROOPERS [A]`},
{id: "2010", title: `True Blue [A]`},
{id: "3839", title: `Twelfth Style [L]`},
{category: "U~Z"},
{id: "5716", title: `u gotta beat [A]`},
{id: "5949", title: `Uaigh Gealai [A]`},
{id: "3512", title: `Ubertreffen [L]`},
{id: "4870", title: `Umbral [L]`},
{id: "3743", title: `Unbelief [A]`},
{id: "6227", title: `UNDO THE NIGHT [A]`},
{id: "2272", title: `Unicorn tail [A]`},
{id: "6374", title: `Urban Constellations [L]`},
{id: "3361", title: `Usual Days-remix [A]`},
{id: "2013", title: `Valanga [A]`},
{id:  "987", title: `VANESSA [A]`},
{id:  "988", title: `VANESSA [L]`},
{id: "2278", title: `Verflucht [A]`},
{id: "2279", title: `Verflucht [L]`},
{id: "5442", title: `Vermilion Carol [A]`},
{id: "4123", title: `Vinculum stellarum [A]`},
{id: "5196", title: `Violet Pulse [L]`},
{id: "4375", title: `Viridian [A]`},
{id: "3797", title: `Visterhv [A]`},
{id: "4312", title: `Vitrum [A]`},
{id: "5233", title: `VOID [A]`},
{id: "5028", title: `VOLAQUAS [A]`},
{id: "3863", title: `voltississimo [A]`},
{id: "2282", title: `VOX UP [A]`},
{id: "5598", title: `Vulnerability [A]`},
{id: "3813", title: `Wanna Party? [L]`},
{id: "3511", title: `waxing and wanding [L]`},
{id: "2528", title: `We're so Happy (P*Light Remix) IIDX ver. [A]`},
{id: "3808", title: `Welcome [L]`},
{id: "4819", title: `WHA [A]`},
{id: "5830", title: `Without Heaven [A]`},
{id: "1788", title: `WONDER WALKER [A]`},
{id: "2828", title: `X [A]`},
{id: "5491", title: `Xb10r [A]`},
{id: "5175", title: `Xerulean [A]`},
{id: "5952", title: `XHRONOXAPSULΞ [A]`},
{id: "3623", title: `Xlo [A]`},
{id: "3312", title: `Xperanza [A]`},
{id: "3433", title: `Y&amp;Co. is dead or alive [A]`},
{id: "1791", title: `YAKSHA [A]`},
{id: "1794", title: `yellow head joe [A]`},
{id: "4562", title: `Ypsilon [L]`},
{id: "6233", title: `ZED [L]`},
{id: "4131", title: `ZEPHYRANTHES [L]`},
{id: "1614", title: `ZETA～素数の世界と超越者～ [A]`},
{id: "2028", title: `Zirkfied [A]`},
{id: "2534", title: `ZZ [A]`},
{category: "0~9"},
{id: "5773", title: `1116 [A]`},
{id: "2617", title: `199024club -Re:BounceKiller- [A]`},
{id:  "481", title: `1st Samurai [A]`},
{id: "5995", title: `2 Be Continued [A]`},
{id: "4792", title: `2 Beasts Unchained [A]`},
{id: "5203", title: `24h Endurance Race [A]`},
{id: "3484", title: `255 [A]`},
{id: "6311", title: `27th style [L]`},
{id: "1156", title: `3y3s [A]`},
{category: "OTHERS"},
{id: "5025", title: `[ ]DENTITY [A]`},
{id: "2855", title: `紫陽花 -AZISAI- [A]`},
{id: "5623", title: `紫陽花 -AZISAI- [L]`},
{id: "2034", title: `アストライアの双皿 [A]`},
{id: "6492", title: `ΛИ0MΛLY [A]`},
{id: "4825", title: `天邪鬼 [A]`},
{id: "5961", title: `アラビアン ハイパー ナイト [A]`},
{id: "5958", title: `uen [A]`},
{id: "6073", title: `ιgniЯRuina [A]`},
{id: "3110", title: `イザナミノナゲキ [A]`},
{id: "6298", title: `色を喪った街 [A]`},
{id: "5151", title: `栄冠のカンパネラ [A]`},
{id: "2852", title: `駅猫のワルツ [A]`},
{id: "2031", title: `ΕΛΠΙΣ [A]`},
{id: "4520", title: `ΕΛΠΙΣ [L]`},
{id: "3122", title: `焔極OVERKILL [A]`},
{id: "5255", title: `ATHER [L]`},
{id: "3832", title: `お菓子の王国 [A]`},
{id: "4351", title: `お米の美味しい炊き方、そしてお米を食べることによるその効果。 [L]`},
{id: "2570", title: `鬼天 [A]`},
{id: "2061", title: `音楽 [A]`},
{id: "3719", title: `X-DEN [A]`},
{id: "5895", title: `蛇神 [L]`},
{id:  "302", title: `革命 [H]`},
{id:  "303", title: `革命 [A]`},
{id:  "881", title: `カゴノトリ～弐式～ [A]`},
{id: "2040", title: `カジノファイヤーことみちゃん [A]`},
{id: "2068", title: `仮想空間の旅人たち [L]`},
{id:  "887", title: `華蝶風雪 [A]`},
{id: "5520", title: `華蝶風雪 [L]`},
{id: "5991", title: `神っぽいな [L]`},
{id: "5169", title: `神のシナリオ [A]`},
{id: "5200", title: `#CMFLG [A]`},
{id: "4034", title: `華麗なる大犬円舞曲 [A]`},
{id: "6387", title: `かわいいだけじゃだめですか？ [L]`},
{id: "4081", title: `がっつり陰キャ!? 怪盗いいんちょの億劫^^; [A]`},
{id: "1806", title: `君のハートにロックオン [A]`},
{id: "2043", title: `キャトられ恋はモ～モク [A]`},
{id: "3131", title: `九尾狐夜行 [A]`},
{id: "2573", title: `共鳴遊戯の華 [A]`},
{id: "4381", title: `閠槞彁の願い [A]`},
{id: "2071", title: `狂イ咲ケ焔ノ華 [A]`},
{id: "6270", title: `クレッシェンド [A]`},
{id: "1623", title: `黒髪乱れし修羅となりて [A]`},
{id: "5988", title: `グッバイ宣言 [L]`},
{id: "1830", title: `恋する☆宇宙戦争っ！！ [A]`},
{id: "5380", title: `恋する☆宇宙戦争っ！！ [L]`},
{id: "6522", title: `恋する☆宇宙戦争っ!! (恋する★ハードコアRemix) [A]`},
{id: "1809", title: `子供の落書き帳 [A]`},
{id: "5589", title: `今宵、ロマンス横丁。 [A]`},
{id: "3670", title: `金野火織の金色提言 [A]`},
{id: "6528", title: `斎戒 [A]`},
{id: "3872", title: `最小三倍完全数 [A]`},
{id: "4798", title: `逆月 [A]`},
{id:  "381", title: `桜 [A]`},
{id: "6397", title: `サタデーナイト☆ギャロップ [A]`},
{id: "6120", title: `≡+≡ [L]`},
{id: "5980", title: `#The_Relentless [L]`},
{id: "5553", title: `残像ニ繋ガレタ追憶ノHIDEAWAY [A]`},
{id: "2315", title: `疾風迅雷 [A]`},
{id: "2316", title: `疾風迅雷 [L]`},
{id: "3423", title: `シムルグの目醒め [A]`},
{id: "2900", title: `〆 [A]`},
{id: "2858", title: `灼熱 Pt.2 Long Train Running [A]`},
{id: "1626", title: `灼熱Beach Side Bunny [A]`},
{id: "5424", title: `灼熱Beach Side Bunny (かめりあ's "Summertime D'n'B" Remix) [A]`},
{id: "5752", title: `灼熱 Lost Summer Dayz [A]`},
{id: "5421", title: `終焔のClaudia [A]`},
{id: "2046", title: `シュレーディンガーの猫 [A]`},
{id: "1151", title: `少年A [A]`},
{id: "2588", title: `少年は空を辿る [A]`},
{id: "3992", title: `深淵に捧ぐレクイエム [A]`},
{id: "3333", title: `神謳 -RESONANCE- [A]`},
{id: "2864", title: `真 地獄超特急 -HELL or HELL- [A]`},
{id: "5894", title: `新宝島 [L]`},
{id: "4330", title: `水鏡の異界 [A]`},
{id: "5881", title: `スキッテイエェエエェ!!!! [A]`},
{id: "5734", title: `スパークリング☆彡ハイパーチューン！！ [A]`},
{id: "4556", title: `スーパー戦湯ババンバーン [A]`},
{id: "1818", title: `聖人の塔 [A]`},
{id: "5992", title: `聖人の塔 [L]`},
{id: "4804", title: `世界の果てに約束の凱歌を -ReUnion- [A]`},
{id:  "573", title: `雪月花 [A]`},
{id: "4893", title: `雪上断火 [A]`},
{id: "2591", title: `千年ノ理 [A]`},
{id: "4001", title: `千年ノ理 [L]`},
{id: "2319", title: `旋律のドグマ～Miserables～ [A]`},
{id: "2077", title: `即席！脳直★ミュージックシステム [A]`},
{id: "2537", title: `それは花火のような恋 [A]`},
{id: "5172", title: `ぞうしょく！？マイデンティティ [A]`},
{id: "3835", title: `泰東ノ翠霞 [A]`},
{id: "1635", title: `旅人リラン [A]`},
{id: "2049", title: `たまゆら [A]`},
{id: "4321", title: `∀ [A]`},
{id: "3725", title: `抱きしめてモナムール [A]`},
{id: "6413", title: `断罪のミメシス [A]`},
{id: "2600", title: `超青少年ノ為ノ超多幸ナ超古典的超舞曲 [A]`},
{id: "2601", title: `超青少年ノ為ノ超多幸ナ超古典的超舞曲 [L]`},
{id: "6261", title: `ちょえちょえまぎか [L]`},
{id: "3146", title: `津軽雪 [A]`},
{id: "6534", title: `月下散刄 [A]`},
{id: "1821", title: `天空の夜明け [A]`},
{id: "5860", title: `天使のカンタータ -Cantata of Angels- [A]`},
{id: "2531", title: `Ｘ↑Ｘ↓ [A]`},
{id: "4466", title: `ディスコルディア [A]`},
{id: "5403", title: `電光 [A]`},
{id: "1013", title: `電人、暁に斃れる。 [A]`},
{id: "5583", title: `電腦都市 [A]`},
{id: "3380", title: `東京神話 [A]`},
{id: "2309", title: `轟け！恋のビーンボール！！ [A]`},
{id: "2052", title: `トリカゴノ鳳凰 [A]`},
{id: "3174", title: `童話回廊 [A]`},
{id: "2190", title: `IX [A]`},
{id: "1833", title: `†渚の小悪魔ラヴリィ～レイディオ†(IIDX EDIT) [A]`},
{id:  "890", title: `嘆きの樹 [A]`},
{id: "2567", title: `夏色DIARY - L.E.D.-G STYLE MIX - [A]`},
{id: "3157", title: `廿 [L]`},
{id: "6410", title: `寝起きヤシの木 [L]`},
{id: "5031", title: `ハイテックトキオ [L]`},
{id: "4992", title: `儚キ戀ノ幻想譚 [A]`},
{id: "4871", title: `華爛漫 -Flowers- [L]`},
{id: "4487", title: `伐折羅-vajra- [A]`},
{id: "3143", title: `刃図羅 [A]`},
{id: "4450", title: `バッド・スイーツ、バッド・ドリーム [A]`},
{id: "2297", title: `バンブーソード・ガール [A]`},
{id: "3125", title: `火影 [A]`},
{id: "1276", title: `卑弥呼 [A]`},
{id: "2607", title: `表裏一体！？怪盗いいんちょの悩み [A]`},
{id: "5446", title: `表裏一体！？怪盗いいんちょの悩み [L]`},
{id: "6094", title: `ビビッド ☆+*。キラキライム [A]`},
{id:  "660", title: `ピアノ協奏曲第１番”蠍火” [A]`},
{id: "4152", title: `ピアノ協奏曲第1番”蠍火” (BlackY Remix) [A]`},
{id: "4844", title: `ピアノ独奏無言歌 "灰燼" [A]`},
{id: "5893", title: `フォニイ [L]`},
{id: "4484", title: `二人ノ廃城幽踊宴 [A]`},
{id: "6260", title: `⁽⁽ଘ( ˙꒳˙ )ଓ⁾⁾ beyond reason [A]`},
{id: "5397", title: `《PL|RAYER》 [A]`},
{id: "6278", title: `ベンガル vs. アムール Battle [A]`},
{id: "4783", title: `烽火連天の刃 [A]`},
{id: "4426", title: `-65℃ [A]`},
{id: "5371", title: `摩天楼 [A]`},
{id: "4345", title: `魔法のかくれんぼ [A]`},
{id: "5550", title: `未完成ノ蒸氣驅動乙女 [A]`},
{id: "4746", title: `禊 [A]`},
{id: "1264", title: `ミッドナイト堕天使 [A]`},
{id: "6279", title: `ミュージック・アワー [L]`},
{id: "1142", title: `ミラージュ・レジデンス [A]`},
{id: "4168", title: `魅惑のYUMMYスイーツ [A]`},
{id:  "785", title: `冥 [A]`},
{id: "2849", title: `めいさいアイドル☆あいむちゃん♪ [A]`},
{id: "6282", title: `ラブコメトキドキシリアス [A]`},
{id: "5127", title: `龍王の霊廟(Mausoleum Of The Primal Dragon) [L]`},
{id: "3343", title: `龍と少女とデコヒーレンス [L]`},
{id: "2564", title: `リリーゼと炎龍レーヴァテイン [A]`},
{id: "3158", title: `凛として咲く花の如く [L]`},
{id: "5118", title: `恋愛＝精度×認識力 [A]`},
{id: "2331", title: `煉獄のエルフェリア [A]`},
{id: "5559", title: `惑星鉄道 [A]`},
{id: "2300", title: `海神 [A]`},
{id: "5622", title: `海神 [L]`},
{id: "1442", title: `ワルツ第17番 ト短調”大犬のワルツ” [A]`},
]

const isCombined = location.pathname.includes("/analytics/combined/") || location.pathname.includes("isCombined.html")
const isLevel12 = location.pathname.includes("/level/12/") || location.pathname.includes("isLevel12.html")
console.log(`[root] isCombined: ${isCombined}, isLevel12: ${isLevel12}`)

//クリアランプ(E, H, X)をランプ列のテキストから取得する関数を定義する
const getClearLampFromRow = (tableRow) =>
{
	const clearLampCell = tableRow.cells[2]
	if(!clearLampCell)
	{
		return ""
	}

	const lampText = clearLampCell.textContent.trim()
	if(lampText.startsWith("EX-HARD") || lampText.startsWith("EXHARD") || lampText.startsWith("EXH"))
	{
		return "X"
	}
	if(lampText.startsWith("HARD"))
	{
		return "H"
	}
	if(lampText.startsWith("EASY"))
	{
		return "E"
	}
	return ""
}

//テーブル全体から譜面IDごとのereter難易度を集約する関数を定義する
const collectDifficultyMapsFromTable = () =>
{
	const difficultyMapsByScoreId = {}
	if(!isCombined || !table)
	{
		return difficultyMapsByScoreId
	}

	for(const tableRow of Array.from(table.rows).slice(1))
	{
		const titleCell = tableRow.cells[1]
		const scoreLinkElement = titleCell && titleCell.querySelector("a")
		if(!scoreLinkElement)
		{
			continue
		}

		const scoreId = scoreLinkElement.getAttribute("href").split("/")[2]
		const clearLamp = getClearLampFromRow(tableRow)
		const currentDifficultyValue = Number(tableRow.cells[3].getAttribute("sort-value")).toFixed(3)
		const existingDifficultyMap = difficultyMapsByScoreId[scoreId] || {}
		const shouldAddDifficulty = Boolean(clearLamp) && !(clearLamp in existingDifficultyMap)
		difficultyMapsByScoreId[scoreId] = shouldAddDifficulty
			? {...existingDifficultyMap, [clearLamp]: currentDifficultyValue}
			: existingDifficultyMap
	}

	return difficultyMapsByScoreId
}

//既存のdiffは上書きせず、足りないクリアランプだけ追加する関数を定義する
const mergeDifficultyMaps = (existingDifficultyMap, incomingDifficultyMap) =>
{
	const safeExistingDifficultyMap = (typeof existingDifficultyMap === "object" && existingDifficultyMap !== null)
		? existingDifficultyMap
		: {}
	return {...incomingDifficultyMap, ...safeExistingDifficultyMap}
}

//データベース名とバージョンを定義する
//バージョン履歴
//～0.4: 1 → 初期バージョン
//  0.5: 2 → ereter難易度の追加
//  0.6: 3 → ereter難易度の削除
//  0.6: 4 → object store未作成のDBを復旧, ereter難易度の再追加
const nameDB = "ereter-options"
const versionDB = 4
const table = document.querySelector("table")

//IndexedDBのobject storeが存在するか確認する関数を定義する
const hasObjectStore = (db) =>
{
	return db.objectStoreNames.contains(nameDB)
}
//IndexedDBのobject storeを作成する関数を定義する
const createObjectStoreIfNeeded = (db) =>
{
	if(hasObjectStore(db))
	{
		return null
	}

	const objectStore = db.createObjectStore(nameDB, {keyPath: "id"})
	objectStore.createIndex("indexTitle", "id", {unique: true})
	return objectStore
}
//IndexedDBに初期レコードを挿入する関数を定義する
const createInitialRecords = (objectStore) =>
{
	///analytics/combined/ページでない場合はereter難易度を取得できないので初期レコードは作らない
	if(!isCombined || !table)
	{
		return
	}

	//同じ譜面IDのE/H/Xを先にまとめてから、譜面IDごとに1回だけ保存する
	const difficultyMapsByScoreId = collectDifficultyMapsFromTable()
	console.log(`[createInitialRecords] ${Object.keys(difficultyMapsByScoreId).length}件の譜面を保存します`)
	Object.entries(difficultyMapsByScoreId).forEach(([scoreId, tableDifficultyMap]) =>
	{
		const getRequest = objectStore.get(scoreId)
		getRequest.onsuccess = () =>
		{
			const existingRecord = getRequest.result || {"id": scoreId, "flip": "-", "left": "-", "right": "-", "diff": {}}
			const updatedRecord =
			{
				...existingRecord,
				"id": scoreId,
				"flip": existingRecord.flip || "-",
				"left": existingRecord.left || "-",
				"right": existingRecord.right || "-",
				"diff": mergeDifficultyMaps(existingRecord.diff, tableDifficultyMap)
			}

			const putRequest = objectStore.put(updatedRecord)
			putRequest.onerror = (event) =>
			{
				console.error("[createInitialRecords] レコードの追加中にエラーが発生しました", event.target.error)
			}
		}
		getRequest.onerror = (event) =>
		{
			console.error("[createInitialRecords] レコードの取得中にエラーが発生しました", event.target.error)
		}
	})
}
//IndexedDBを初期化する関数を定義する
const initDatabase = (onReady) =>
{
	const request = indexedDB.open(nameDB, versionDB)

	//データベースが存在しないか、バージョンが変わった場合に発火する
	request.onupgradeneeded = (event) =>
	{
		const db = event.target.result
		const createdStore = createObjectStoreIfNeeded(db)

		//既存storeのv3未満はdiff項目を削除する
		if(!createdStore && event.oldVersion > 0 && event.oldVersion < 3)
		{
			const existingStore = event.target.transaction.objectStore(nameDB)
			existingStore.openCursor().onsuccess = (e) =>
			{
				const cursor = e.target.result
				if(cursor)
				{
					const data = cursor.value
					delete data.diff
					cursor.update(data)
					cursor.continue()
				}
			}
			console.log("[initDatabase] データベースのアップグレードが完了しました")
			return
		}

		if(createdStore)
		{
			createInitialRecords(createdStore)
		}
	}

	//データベースの取得に成功したときに発火
	request.onsuccess = (event) =>
	{
		onReady(event.target.result)
	}

	//データベースの取得に失敗したときに発火
	request.onerror = (event) =>
	{
		console.log(`[initDatabase] Database error: ${event.target.error}`)
	}
}
//オプション列のドロップダウンメニューの値が変更されたときに発火する関数を定義する
const saveOptions = (event) =>
{
	const selectElement = event.target
	const row = selectElement.closest("tr")
	const id = row.cells[1].querySelector("a").getAttribute("href").split("/")[2]
	const flip = row.querySelector(`select[name="flip"]`).value
	const left = row.querySelector(`select[name="left"]`).value
	const right = row.querySelector(`select[name="right"]`).value

	//IndexedDBに保存する
	const request = indexedDB.open(nameDB, versionDB)
	request.onsuccess = (event) =>
	{
		const db = event.target.result
		if(!hasObjectStore(db))
		{
			console.error("[saveOptions] IndexedDBのobject storeが見つかりません")
			return
		}
		const transaction = db.transaction(nameDB, "readwrite")
		const objectStore = transaction.objectStore(nameDB)
		const getRequest = objectStore.get(id)
		getRequest.onsuccess = () =>
		{
			const existingRecord = getRequest.result || {"id": id, "flip": "-", "left": "-", "right": "-", "diff": {}}
			const data = {...existingRecord, id, flip, left, right}
			objectStore.put(data).onsuccess = () =>
			{
				console.log(`[saveOptions] セーブしました: ${JSON.stringify(data)}`)
			}
			objectStore.getAll().onsuccess = (e) =>
			{
				if(typeof GM_setValue === "function")
				{
					GM_setValue("ereter-options", e.target.result)
				}
			}
		}
	}
}
//IndexedDBからデータを読み込む関数を定義する
const loadDatabase = (db) =>
{
	if(!hasObjectStore(db))
	{
		console.error("[loadDatabase] IndexedDBのobject storeが見つかりません")
		return
	}

	//トランザクションの作成
	const transaction = db.transaction(nameDB, "readwrite")
	const objectStore = transaction.objectStore(nameDB)

	//インデックスを使用してデータを検索する
	const index = objectStore.index("indexTitle")
	const difficultyMapsByScoreId = collectDifficultyMapsFromTable()
	const tableRowsByScoreId = {}

	//行(譜面)の数だけ繰り返す
	for(const tableRow of Array.from(table.rows).slice(1))
	{
		//タイトル列を取得する
		const titleCell = tableRow.cells[1]
		//href部分(→譜面URL)を変数に格納
		const scoreLink = titleCell.querySelector("a").getAttribute("href")
		const scoreId = scoreLink.split("/")[2]
		const tableRows = tableRowsByScoreId[scoreId] || []
		tableRows.push(tableRow)
		tableRowsByScoreId[scoreId] = tableRows
	}

	Object.entries(tableRowsByScoreId).forEach(([scoreId, tableRows]) =>
	{
		//譜面IDと一致するレコードを検索する

		const getRequest = index.get(scoreId)
		getRequest.onsuccess = () =>
		{
			const existingRecord = getRequest.result || {"id": scoreId, "flip": "-", "left": "-", "right": "-", "diff": {}}
			const updatedRecord =
			{
				...existingRecord,
				"id": scoreId,
				"diff": mergeDifficultyMaps(existingRecord.diff, difficultyMapsByScoreId[scoreId] || {})
			}

			if(!getRequest.result || isCombined)
			{
				const updateRequest = objectStore.put(updatedRecord)
				updateRequest.onerror = (event) =>
				{
					console.error("[loadDatabase] レコード更新中にエラーが発生しました", event.target.error)
				}
			}

			tableRows.forEach((tableRow) =>
			{
				createOption(tableRow, updatedRecord, objectStore, scoreId)
			})
		}
		getRequest.onerror = (event) =>
		{
			console.error(`[loadDatabase] エラーが発生しました: ${event.target.error}`)
		}
	})

	transaction.oncomplete = () =>
	{
		const readTransaction = db.transaction(nameDB, "readonly")
		readTransaction.objectStore(nameDB).getAll().onsuccess = (event) =>
		{
			if(typeof GM_setValue === "function")
			{
				GM_setValue("ereter-options", event.target.result)
			}
		}
	}
}

//テーブルの見た目を変更する関数を定義する
//th行の列名を変更する関数を定義する
const renameTH = () =>
{
	//「☆」を「Option」にする
	const columnOption = table.rows[0].cells[0]
	columnOption.textContent = "Option"
	//「☆」列をクリック(ソート)できないようにする
	columnOption.style.pointerEvents = "none"

	if(isCombined)
	{
		//「Clear Lamp」を「Lamp」にする
		table.rows[0].cells[2].textContent = "Lamp"
		//「Difficulty」を「Diff」にする
		table.rows[0].cells[3].textContent = "Diff"
		//「Probability」を「%」にする
		table.rows[0].cells[5].textContent = "%"
	}
	else if(isLevel12)
	{
		//「Clear lamp」を「Lamp」にする
		table.rows[0].cells[5].textContent = "Lamp"
	}
}
//テーブルの行を処理する関数を定義する
const processTableRows = () =>
{
	//th行以外を取得する
	for(const row of Array.from(table.rows).slice(1))
	{
		shortenTitle(row)
		shortenLamp(row)
		removeSpans(row)
	}
}
//曲名の難易度表記を短縮する関数を定義する
const shortenTitle = (row) =>
{
	const title = row.cells[1]
	const href = title.querySelector("a").getAttribute("href")
	const textTitle = title.querySelector("a").textContent.replace(/\s+\((ANOTHER|LEGGENDARIA|HYPER|NORMAL|BEGINNER)\)$/i, "").trim()
	const styleTitle = title.querySelector("span").style.color
	title.innerHTML = `<a href="${href}" target="_blank"><span style="color: ${styleTitle}">${textTitle}</span></a>`
}
//クリアランプを短縮する関数を定義する
const shortenLamp = (row) =>
{
	if(isCombined)
	{
		const lamp = row.cells[2]
		if(lamp.textContent.startsWith("EX-HARD"))
		{
			//EX-HARDをEXHに短縮する
			lamp.innerHTML = `<span style="color: #efef51">EXH</span>`
		}
	}
	else if(isLevel12)
	{
		const lamp = row.cells[5]
		if(lamp.textContent.startsWith("EX-HARD"))
		{
			//EX-HARDをEXHARDに短縮する
			lamp.innerHTML = `<span style="color: #efef51">EXHARD</span>`
		}
	}
}
//「Score rank」のclass="text-nowrap"のspanの下の最初のspan要素を削除する関数を定義する
const removeSpans = (row) =>
{
	if(isLevel12)
	{
		//「Score rank」のclass="text-nowrap"のspanの下の最初のspan要素を削除する
		const scoreRank = row.cells[4].querySelector("span.text-nowrap")
		//NOPLAYのときはspan要素がないので、scoreRankが存在するか確認
		if(scoreRank)
		{
			const firstSpan = scoreRank.querySelector("span")
			if(firstSpan)
			{
				firstSpan.remove()
			}
		}
	}
}

//UIのカスタマイズを行う関数を定義する
//カテゴリ名からアンカーIDを生成する関数を定義する
const getCategoryAnchorId = (category) =>
{
	return `record${category.replace(/~/g, "")}`
}
//タイトル列にsort-valueを付与する関数を定義する
const applyTitleSortValues = () =>
{
	if(!table)
	{
		return []
	}

	const sortIndexById = new Map()
	titles.forEach((item, index) =>
	{
		if(item.id)
		{
			sortIndexById.set(String(item.id), index)
		}
	})

	const fallbackIndex = titles.length
	const rowsByScoreId = new Map()
	for(const tableRow of Array.from(table.rows).slice(1))
	{
		const titleCell = tableRow.cells[1]
		const scoreLinkElement = titleCell && titleCell.querySelector("a")
		if(!scoreLinkElement)
		{
			continue
		}

		const scoreId = String(scoreLinkElement.getAttribute("href").split("/")[2])
		const sortIndex = sortIndexById.has(scoreId) ? sortIndexById.get(scoreId) : fallbackIndex
		titleCell.setAttribute("sort-value", String(sortIndex))
		if(!titleCell.querySelector(".title-sort-key"))
		{
			const sortKey = document.createElement("span")
			sortKey.className = "title-sort-key"
			sortKey.hidden = true
			sortKey.textContent = String(sortIndex).padStart(4, "0")
			titleCell.insertBefore(sortKey, titleCell.firstChild)
		}

		if(!rowsByScoreId.has(scoreId))
		{
			rowsByScoreId.set(scoreId, tableRow)
		}
	}

	const categories = []
	for(let index = 0; index < titles.length; index++)
	{
		const item = titles[index]
		if(!item.category)
		{
			continue
		}

		let targetRow = null
		for(let titleIndex = index + 1; titleIndex < titles.length; titleIndex++)
		{
			const titleItem = titles[titleIndex]
			if(titleItem.category)
			{
				break
			}
			if(!titleItem.id)
			{
				continue
			}

			const tableRow = rowsByScoreId.get(String(titleItem.id))
			if(tableRow)
			{
				targetRow = tableRow
				break
			}
		}

		const anchorId = getCategoryAnchorId(item.category)
		if(targetRow)
		{
			targetRow.id = anchorId
		}
		categories.push({label: item.category, anchorId, hasTarget: Boolean(targetRow)})
	}

	return categories
}
//カテゴリナビゲーションを追加する関数を定義する
const addCategoryNav = (categories) =>
{
	if(!categories.length)
	{
		return
	}

	const fragmentFixed = document.createDocumentFragment()
	const divCategories = document.createElement("div")
	divCategories.className = "categories"

	for(const category of categories)
	{
		const divCategory = document.createElement("div")
		divCategory.textContent = category.label
		if(category.hasTarget)
		{
			divCategory.addEventListener("click", () =>
			{
				const targetElement = document.getElementById(category.anchorId)
				if(!targetElement)
				{
					return
				}

				targetElement.scrollIntoView({block: "start"})
				if(window.history && typeof window.history.replaceState === "function")
				{
					window.history.replaceState(null, "", `#${category.anchorId}`)
				}
				else
				{
					window.location.replace(`#${category.anchorId}`)
				}
			})
		}
		else
		{
			divCategory.style.opacity = "0.4"
		}
		divCategories.appendChild(divCategory)
	}

	fragmentFixed.appendChild(divCategories)
	document.body.appendChild(fragmentFixed)
}
//テーブルのソートを更新する関数を定義する
const refreshTablesorterTitleSort = () =>
{
	const script = document.createElement("script")
	script.textContent = `
		(function()
		{
			if(!window.jQuery)
			{
				return
			}
			var $table = window.jQuery("table[data-sort=table]")
			if(!$table.length)
			{
				return
			}
			$table.trigger("update")
		})()
	`
	document.head.appendChild(script)
	script.remove()
}
//オプション列のドロップダウンメニューを作成する関数を定義する
const createOption = (row, record, objectStore, idScore) =>
{
	//オプション(非公式難易度)列を取得する
	const option = row.cells[0]
	//タイトル列を取得する
	const title = row.cells[1]

	//ドロップダウンメニューを作成する関数
	const createSelect = (classScore, options, name, selected) =>
	{
		const select = document.createElement("select")
		select.setAttribute("class", classScore)
		select.addEventListener("change", saveOptions)
		select.name = name
		//一番左のselect(flip)だけ狭くするためにclassを追加する
		if(name === "flip")
		{
			select.classList.add("first-select")
		}
		options.forEach((option, index) =>
		{
			//パソコン版のページの場合は、最初のoptionsを挿入しない
			if(!navigator.userAgent.match(/iPhone|Android/) && index === 0)
			{
				return
			}

			const opt = document.createElement("option")
			opt.textContent = option
			//モバイル版のページのみ、最初のオプションは曲名なので選択できないようにする
			if(index === 0)
			{
				opt.disabled = true
			}
			else
			{
				opt.value = option
			}
			if(option === selected)
			{
				opt.selected = true
			}
			select.appendChild(opt)
		})

		return select
	}

	//レコードが見つかった場合、そのレコードのoptionパラメータを取得する
	if(record)
	{
		//既存の内容をクリア
		option.innerHTML = ""

		//DocumentFragmentを作成
		const fragment = document.createDocumentFragment()
		const titleText = (title.querySelector("a") || title).textContent
		const shortTitle = omitTextLength(titleText, 19)

		//ドロップダウンメニューを作成
		const optionFlip = [`${shortTitle}: FLIP\u00A0`, "-", "F", "？"]
		const selectFlip = createSelect(idScore, optionFlip, "flip", record.flip)
		const optionLeft = [`${shortTitle}: LEFT\u00A0`, "-", "M", "R", "RR", "SR", "？"]
		const selectLeft = createSelect(idScore, optionLeft, "left", record.left)
		const optionRight = [`${shortTitle}: RIGHT\u00A0`, "-", "M", "R", "RR", "SR", "？"]
		const selectRight = createSelect(idScore, optionRight, "right", record.right)
		fragment.appendChild(selectFlip)
		fragment.appendChild(selectLeft)
		fragment.appendChild(selectRight)

		//Fragmentをcellに追加
		option.appendChild(fragment)
	}
	//レコードが見つからなかった場合、flip, left, rightの初期値と合わせてレコードを追加する
	else
	{
		//譜面IDとオプションの初期値を挿入する
		const put = objectStore.put({"id": idScore, "flip": "-", "left": "-", "right": "-"})
		put.onsuccess = (event) =>
		{
			console.log(`[createOption] レコードが見つからなかったのでレコードを追加しました。"id": ${idScore}`)
		}
		put.onerror = (event) =>
		{
			console.error("[createOption] レコードの追加中にエラーが発生しました", event.target.error)
		}
	}
}
//文字列の長さを計算し、maxLenを超えた場合は省略記号を付けて返す関数を定義する
const omitTextLength = (str, maxLen) =>
{
	let len = 0
	let result = ""
	for(const ch of str)
	{
		len += (ch.charCodeAt(0) > 255) ? 1 : 0.5
		//文字数がmaxLenを超えたら、短縮したことを表す文字を追加してループを抜ける
		if(len > maxLen)
		{
			result += "…"
			break
		}
		result += ch
	}
	return result
}
//テキストファイルをダウンロードする関数を定義する
const downloadTextFile = (filename, text) =>
{
	const blob = new Blob([text], {type: "application/json"})
	const objectUrl = URL.createObjectURL(blob)
	const link = document.createElement("a")
	link.href = objectUrl
	link.download = filename
	document.body.appendChild(link)
	link.click()
	link.remove()
	window.setTimeout(() =>
	{
		URL.revokeObjectURL(objectUrl)
	}, 0)
}
//エクスポート用のファイル名を作成する関数を定義する
const buildOptionsExportFileName = () =>
{
	const now = new Date()
	const yyyy = now.getFullYear()
	const mm = String(now.getMonth() + 1).padStart(2, "0")
	const dd = String(now.getDate()).padStart(2, "0")
	const hh = String(now.getHours()).padStart(2, "0")
	const mi = String(now.getMinutes()).padStart(2, "0")
	const ss = String(now.getSeconds()).padStart(2, "0")
	return `betterEreter-options-${yyyy}${mm}${dd}-${hh}${mi}${ss}.json`
}
//analytics/combined/・/level/12/ページでエクスポートとインポートのボタンを追加する
const addExportImport = () =>
{
	///analytics/combined/・/level/12/ページで同様の処理を行う
	if(!isCombined && !isLevel12)
	{
		return
	}

	//エクスポートとインポートのボタンを追加する
	//DOMを追加する場所のflexboxを調整する
	const divFlex = document.querySelector("div.col-md-3.pt-3")
	divFlex.classList.remove("col-md-3")
	divFlex.classList.add("col-md-9")

	//追加するボタンの作成
	const exportButton = document.createElement("button")
	exportButton.setAttribute("class", "blend")
	exportButton.setAttribute("type", "button")
	exportButton.textContent = "Export OP"
	exportButton.style.marginRight = "1rem"

	const importButton = document.createElement("button")
	importButton.setAttribute("class", "blend")
	importButton.setAttribute("type", "button")
	importButton.textContent = "Import OP"
	importButton.style.marginRight = "1rem"

	const fileInput = document.createElement("input")
	fileInput.setAttribute("type", "file")
	fileInput.setAttribute("accept", "application/json,.json")
	fileInput.style.display = "none"

	//DOMの挿入場所の指定
	const position = document.querySelector("div.input-group")
	//DOMの挿入
	position.insertAdjacentElement("beforeend", exportButton)
	position.insertAdjacentElement("beforeend", importButton)
	position.insertAdjacentElement("beforeend", fileInput)

	//エクスポートボタンクリック時の処理
	exportButton.addEventListener("click", () =>
	{
		const request = indexedDB.open(nameDB, versionDB)
		request.onsuccess = (event) =>
		{
			const db = event.target.result
			if(!hasObjectStore(db))
			{
				console.error("[addExportImport] IndexedDBのobject storeが見つかりません")
				return
			}
			const transaction = db.transaction(nameDB, "readonly")
			const objectStore = transaction.objectStore(nameDB)
			const getAllRequest = objectStore.getAll()

			getAllRequest.onsuccess = () =>
			{
				downloadTextFile(buildOptionsExportFileName(), JSON.stringify(getAllRequest.result, null, 2))
			}
		}
	})
	//インポートボタンクリック時の処理
	importButton.addEventListener("click", () =>
	{
		fileInput.value = ""
		fileInput.click()
	})
	fileInput.addEventListener("change", async () =>
	{
		const [file] = fileInput.files || []
		if(!file)
		{
			return
		}

		let data
		try
		{
			data = JSON.parse(await file.text())
		}
		catch(error)
		{
			console.error("[addExportImport] JSONファイルの読み込みに失敗しました", error)
			window.alert("JSONファイルの読み込みに失敗しました。\nThe JSON file could not be read.")
			return
		}

		if(!Array.isArray(data))
		{
			console.error("[addExportImport] インポートデータが配列ではありません")
			window.alert("インポートデータの形式が不正です。\nThe imported data format is invalid.")
			return
		}

		const request = indexedDB.open(nameDB, versionDB)
		request.onsuccess = (event) =>
		{
			const db = event.target.result
			if(!hasObjectStore(db))
			{
				console.error("[addExportImport] IndexedDBのobject storeが見つかりません")
				return
			}
			const transaction = db.transaction(nameDB, "readwrite")
			const objectStore = transaction.objectStore(nameDB)
			const clearRequest = objectStore.clear()

			clearRequest.onerror = (errorEvent) =>
			{
				console.error("[addExportImport] 既存データの削除に失敗しました", errorEvent.target.error)
			}

			clearRequest.onsuccess = () =>
			{
				data.forEach((item) =>
				{
					objectStore.put(item)
				})
			}

			transaction.oncomplete = () =>
			{
				if(typeof GM_setValue === "function")
				{
					GM_setValue("ereter-options", data)
				}
				//アラートを日本語と英語で表示する
				window.alert("オプションのインポートが完了しました。\nThe import of options is complete.")
			}
		}
	})
}
//CSSを挿入する関数を定義する
const injectStyles = () =>
{
	//cssの設定
	const style = document.createElement("style")
	style.textContent = `
			select{
				-moz-appearance: none;
				appearance: none;
				border-radius: 0.25rem;
				padding: 0.1rem 0.5rem;
				border: 1px solid #434857;
				background-color: #434857;
				color: lightgray;
				font-size: 0.8rem;
				text-align: center;
				cursor: pointer;
				width: 2rem;
			}
			select.first-select{
				width: 1.5rem;
			}
			select:hover{
				background-color: #8690AE;
			}
			select:focus{
				outline: none;
				border-color: #0066cc;
			}
			td{
				padding: 0.1rem 0.3rem !important;
				vertical-align: middle !important;
			}
			td:first-child{
				white-space: nowrap !important;
			}
			.blend{
				background-color: #434857;
				color: lightgray;
				border: 1px solid #434857;
				border-radius: 0.25rem;
				padding: 0.1rem 0.5rem;
				font-size: 0.9rem;
				cursor: pointer;
			}
			.sidebar{
				display: none !important;
			}
			.content{
				flex: 0 0 100% !important;
				max-width: 100% !important;
				width: 100% !important;
			}
			.categories
			{
				position: fixed;
				display: flex;
				height: calc(100vh - 6rem);
				top: 3rem;
				right: 0;
				flex-flow: column;
				justify-content: space-between;
				z-index: 9;
				padding: 0 0.4rem 0.4rem;
			}
			.categories div
			{
				color: lightgray;
				padding: 0.5rem 0;
				font-size: 0.75rem;
				cursor: pointer;
				text-align: center;
				user-select: none;
				background-color: rgba(67, 72, 87, 0.5);
				border-radius: 0.2rem;
			}
			.categories div:hover
			{
				color: #91e1ff;
			}
			tr[id^="record"]
			{
				scroll-margin-top: 1.5rem;
			}
			`
	document.head.append(style)
	console.log("[injectStyles] CSSを挿入しました")
}
//ローカルストレージからereter-optionsを取得する関数を定義する
const getStoredOptions = () =>
{
	if(typeof GM_getValue !== "function")
	{
		return []
	}

	const storedOptions = GM_getValue("ereter-options", [])
	if(Array.isArray(storedOptions))
	{
		return storedOptions
	}
	if(typeof storedOptions === "string" && storedOptions)
	{
		return JSON.parse(storedOptions)
	}
	return []
}
//譜面IDのセットを取得する関数を定義する
const getTitleIdSet = () =>
{
	return new Set(titles.filter((title) => title.id).map((title) => String(title.id)))
}
//テーブルから譜面IDを収集する関数を定義する
const collectScoreIdsFromTable = () =>
{
	if(!table)
	{
		return []
	}

	return Array.from(table.rows).slice(1).flatMap((tableRow) =>
	{
		const scoreLinkElement = tableRow.cells[1] && tableRow.cells[1].querySelector("a")
		if(!scoreLinkElement)
		{
			return []
		}
		return [String(scoreLinkElement.getAttribute("href").split("/")[2])]
	})
}
//譜面IDをソートする関数を定義する
const sortScoreIds = (scoreIds) =>
{
	return [...scoreIds].sort((left, right) => Number(left) - Number(right) || left.localeCompare(right))
}
//サイトと変数との譜面IDの差分をログに出力する関数を定義する
const logScoreIdDifferences = (scoreIds, sourceName) =>
{
	const titleIdSet = getTitleIdSet()
	const sourceIdSet = new Set(scoreIds.map((scoreId) => String(scoreId)).filter(Boolean))
	const missingFromTitles = sortScoreIds([...sourceIdSet].filter((scoreId) => !titleIdSet.has(scoreId)))
	const onlyInTitles = sortScoreIds([...titleIdSet].filter((scoreId) => !sourceIdSet.has(scoreId)))

	console.log(`[${sourceName}] titlesにないid: ${missingFromTitles.length}件`, missingFromTitles)
	console.log(`[${sourceName}] titlesにしかないid: ${onlyInTitles.length}件`, onlyInTitles)
}

//index.htmlページをレンダリングする関数を定義する
const renderIndexPage = () =>
{
	const options = getStoredOptions()
	const tbody = document.querySelector("#titles tbody")
	logScoreIdDifferences(options.map((option) => option.id), "renderIndexPage")

	const categories = []
	let pendingCategory = null
	for(const title of titles)
	{
		if(title.category)
		{
			pendingCategory = title.category
			continue
		}

		const item = options.find((option) => String(option.id) === String(title.id)) ||
			{flip: "-", left: "-", right: "-", id: title.id, diff: {}}
		const difficultyMap = (item.diff && typeof item.diff === "object") ? item.diff : {}

		const tableRow = document.createElement("tr")
		if(pendingCategory)
		{
			const anchorId = getCategoryAnchorId(pendingCategory)
			tableRow.id = anchorId
			categories.push({label: pendingCategory, anchorId, hasTarget: true})
			pendingCategory = null
		}
		const optionCell = document.createElement("td")
		const spanFlip = document.createElement("span")
		const spanLeft = document.createElement("span")
		const spanRight = document.createElement("span")
		optionCell.classList.add("tdOption")
		spanFlip.classList.add("spanFlip")
		spanFlip.textContent = item.flip || "-"
		spanLeft.classList.add("spanLeft")
		spanLeft.textContent = item.left || "-"
		spanRight.classList.add("spanRight")
		spanRight.textContent = item.right || "-"
		optionCell.appendChild(spanFlip)
		optionCell.appendChild(spanLeft)
		optionCell.appendChild(spanRight)
		tableRow.appendChild(optionCell)

		const titleCell = document.createElement("td")
		titleCell.classList.add("tdTitle")
		if(title.title.endsWith("[H]"))
		{
			titleCell.classList.add("dph")
		}
		else if(title.title.endsWith("[A]"))
		{
			titleCell.classList.add("dpa")
		}
		else if(title.title.endsWith("[L]"))
		{
			titleCell.classList.add("dpl")
		}
		titleCell.textContent = title.title
		tableRow.appendChild(titleCell)

		const easyDifficultyCell = document.createElement("td")
		easyDifficultyCell.classList.add("tdEasy")
		easyDifficultyCell.textContent = difficultyMap.E || ""
		tableRow.appendChild(easyDifficultyCell)

		const hardDifficultyCell = document.createElement("td")
		hardDifficultyCell.classList.add("tdHard")
		hardDifficultyCell.textContent = difficultyMap.H || ""
		tableRow.appendChild(hardDifficultyCell)

		const exHardDifficultyCell = document.createElement("td")
		exHardDifficultyCell.classList.add("tdExHard")
		exHardDifficultyCell.textContent = difficultyMap.X || ""
		tableRow.appendChild(exHardDifficultyCell)

		tbody.appendChild(tableRow)
	}
	addCategoryNav(categories)
}

//tableの自動縮小で小さくなりすぎないよう最小scaleを固定する
const minFitTableScale = 0.9
//表示されているtable要素を取得する関数を定義する
const getVisibleTables = () =>
{
	return Array.from(document.querySelectorAll("table")).filter((tableElement) =>
	{
		return tableElement.offsetParent !== null
	})
}
//tableの自動縮小のスタイルをリセットする関数を定義する
const resetFitTableStyles = () =>
{
	const tables = getVisibleTables()
	for(const tableElement of tables)
	{
		tableElement.style.transformOrigin = ""
		tableElement.style.transform = ""
		const parentElement = tableElement.parentElement
		if(parentElement)
		{
			parentElement.style.height = ""
			parentElement.style.marginBottom = ""
		}
	}
}
//元のfitTablesのイベントリスナーを削除する関数を定義する
const detachOriginalFitTableListeners = (originalFitTables) =>
{
	if(typeof originalFitTables !== "function")
	{
		return
	}

	window.removeEventListener("DOMContentLoaded", originalFitTables)
	window.removeEventListener("resize", originalFitTables)

	if(window.jQuery)
	{
		window.jQuery("a").filter("[role=tab]").off("click", originalFitTables)
		window.jQuery("[data-sort]").off("sortEnd", originalFitTables)
		window.jQuery("[data-sort]").off("pagerComplete", originalFitTables)
	}
}
//最小scaleを指定してfitTablesを実行する関数を定義する
const runFitTablesWithMinScale = (minimumScale) =>
{
	requestAnimationFrame(() =>
	{
		const tables = getVisibleTables()
		if(!tables.length)
		{
			return
		}

		let cachedTableWidth = 1
		for(const tableElement of tables)
		{
			const parentElement = tableElement.parentElement
			if(!parentElement)
			{
				continue
			}

			parentElement.style.height = ""

			const hasStickyHeaderClass = tableElement.classList.contains("tablesorter-stickyHeader")
			const tableWidth = hasStickyHeaderClass
				? cachedTableWidth
				: tableElement.scrollWidth + (tableElement.offsetWidth - tableElement.clientWidth)
			const tableHeight = tableElement.scrollHeight + (tableElement.offsetHeight - tableElement.clientHeight)

			const calculatedScale = Math.min(1, parentElement.clientWidth / tableWidth)
			const scale = Math.max(minimumScale, calculatedScale)
			const heightDiff = tableHeight * (1 - scale)

			cachedTableWidth = tableWidth

			tableElement.style.transformOrigin = "0 0"
			tableElement.style.transform = `translate(0px, 0px) scale(${scale})`

			const adjustedHeight = parentElement.clientHeight - heightDiff
			parentElement.style.height = `${Math.max(0, adjustedHeight)}px`
			parentElement.style.marginBottom = window.getComputedStyle(tableElement).marginBottom
		}
	})
}
//fitTablesの最小scaleを指定して有効化する関数を定義する
const enableFitTablesMinScale = (minimumScale) =>
{
	const originalFitTables = window.fitTables
	detachOriginalFitTableListeners(originalFitTables)

	window.addFitTables = () => {}
	window.fitTables = () =>
	{
		runFitTablesWithMinScale(minimumScale)
	}

	const applyMinScale = () =>
	{
		runFitTablesWithMinScale(minimumScale)
	}

	window.addEventListener("DOMContentLoaded", applyMinScale)
	window.addEventListener("resize", applyMinScale)

	if(window.jQuery)
	{
		window.jQuery("a").filter("[role=tab]").on("click", applyMinScale)
		window.jQuery("[data-sort]").on("sortEnd", applyMinScale)
		window.jQuery("[data-sort]").on("pagerComplete", applyMinScale)
	}

	if(document.readyState !== "loading")
	{
		applyMinScale()
	}

	console.log(`[fitTables] minScale mode enabled: ${minimumScale}`)
}

//メイン処理を即時関数で実行する
if(window.location.href.includes("ereter.net"))
{
	enableFitTablesMinScale(minFitTableScale)

	if(isLevel12)
	{
		logScoreIdDifferences(collectScoreIdsFromTable(), "isLevel12")
	}
	initDatabase((db) =>
	{
		loadDatabase(db)

		renameTH()
		processTableRows()
		const categories = applyTitleSortValues()
		if(isLevel12)
		{
			addCategoryNav(categories)
		}
		refreshTablesorterTitleSort()

		addExportImport()
		injectStyles()
	})
}
else if(window.location.pathname.includes("index.html"))
{
	renderIndexPage()
}
else if(isLevel12)
{
	logScoreIdDifferences(collectScoreIdsFromTable(), "isLevel12")
}
})()
