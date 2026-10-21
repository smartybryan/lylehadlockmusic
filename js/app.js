'use strict';

// Declare app level module which depends on views, and components
var mainApp = angular.module('mainApp', [
    'ngRoute',
    'mainApp.main',
    'mainApp.cdinfo',
    'mainApp.bio',
    'mainApp.contactlyle',
    'mainApp.contactlyle_success',
    'mainApp.gallery',
    'mainApp.gallery_show',
    'mainApp.reviews',
    'mainApp.reviews_submit',
    'mainApp.reviews_success',
    'mainApp.links',
    'mainApp.sheetmusic',
    'mainApp.videos',
    'mainApp.sitefeedback',
    'mainApp.sitefeedback_success'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/main'});
}]).controller('MainAppCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {
    $scope.navOpen = false;
    $scope.toggleNav = function () {
        $scope.navOpen = !$scope.navOpen;
    };
    $scope.closeNav = function () {
        $scope.navOpen = false;
    };

    // highlight the nav link for the current page, including its sub-pages (e.g. /gallery_show)
    $scope.isActive = function (path) {
        var current = $location.path();
        return current === path || current.indexOf(path + '_') === 0;
    };

    $scope.$on('$routeChangeSuccess', function () {
        $scope.navOpen = false;
        $window.scrollTo(0, 0);
    });
}]);

mainApp.factory("cd_data", function() {
    return [
        {
            "id": "ss",
            "title": "Simply Sacred",
            "info": "Released in 2018, &quot;<b><i>Simply Sacred</i></b>&quot; is Lyle's eighth CD. Featuring two selections of original music by Lyle Hadlock; Look to the East and I Sing This Song About My Jesus,and eight other beloved hymn favorites, Simply Sacred will help bring the spirit into your home.",
            "image": "img/CdCover_SS_75dpi.jpg",
            "add_id": "MAVPKPBQPFKP2",
            "spotify": "https://open.spotify.com/album/2mUJjy0KTWoJ6tkQeG9MIR?si=r9s63dcfTXqQEStb7_Z_7Q",
            "itunes": "http://itunes.apple.com/WebObjects/MZStore.woa/wa/viewAlbum?id=1382536807&s=143441",
            "amazon": "https://www.amazon.com/Simply-Sacred-Lyle-K-Hadlock/dp/B07CZXWD3J/ref=sr_1_8?ie=UTF8&qid=1547100115&sr=8-8&keywords=lyle+hadlock+cd",
            "free_download": {
                "title": "Look to the East",
                "url": "music/Simply%20Sacred/09%20Look%20to%20the%20East.mp3"
            },
            "tracks": [
                {
                    "number": "1",
                    "title": "Now Let Us Rejoice",
                    "length": "4:07",
                    "url": "music/Simply%20Sacred/01%20Now%20Let%20Us%20Rejoice.mp3"
                },
                {
                    "number": "2",
                    "title": "I Sing This Song About My Jesus",
                    "length": "3:44",
                    "url": "music/Simply%20Sacred/02%20I%20Sing%20This%20Song%20About%20My%20Jesus.mp3"
                },
                {
                    "number": "3",
                    "title": "Jesus, The Very Thought of Thee",
                    "length": "4:40",
                    "url": "music/Simply%20Sacred/03%20Jesus%20The%20Very%20Thought%20of%20Thee.mp3"
                },
                {
                    "number": "4",
                    "title": "Redeemer of Israel",
                    "length": "5:00",
                    "url": "music/Simply%20Sacred/04%20Redeemer%20of%20Israel.mp3"
                },
                {
                    "number": "5",
                    "title": "Nearer, Dear Savior to Thee",
                    "length": "5:25",
                    "url": "music/Simply%20Sacred/05%20Nearer%20Dear%20Savior%20to%20Thee.mp3"
                },
                {
                    "number": "6",
                    "title": "Father In Heaven",
                    "length": "3:54",
                    "url": "music/Simply%20Sacred/06%20Father%20In%20Heaven.mp3"
                },
                {
                    "number": "7",
                    "title": "Thankful Medley",
                    "length": "5:02",
                    "url": "music/Simply%20Sacred/07%20Thankful%20Medley.mp3"
                },
                {
                    "number": "8",
                    "title": "Behold the Great Redeemer Die",
                    "length": "5:35",
                    "url": "music/Simply%20Sacred/08%20Behold%20the%20Great%20Redeemer%20Die.mp3"
                },
                {
                    "number": "9",
                    "title": "Look to the East",
                    "length": "4:50",
                    "url": "music/Simply%20Sacred/09%20Look%20to%20the%20East.mp3"
                },
                {
                    "number": "10",
                    "title": "God Be With You Till We Meet Again",
                    "length": "5:07",
                    "url": "music/Simply%20Sacred/10%20God%20Be%20With%20You%20Till%20We%20Meet%20Again.mp3"
                }
            ]
        },
        {
            "id": "ttblh",
            "title": "Try to Be Like Him",
            "info": "Released in 2012, &quot;<b><i>Try to Be Like Him</i></b>&quot; is Lyle's seventh CD. Based mainly on traditional hymns, the peaceful feelings this CD brings to your soul makes it perfect for studying the gospel or simply reflecting about all that the Savior has given us.",
            "image": "img/CdCover_TTBLH_75dpi.jpg",
            "add_id": "RA4QP3CXF7V8W",
            "spotify": "https://open.spotify.com/album/7Duqn3XfKOW5m1jwP27ytD?si=bSPihOZgSTCz307i9bW_Dg",
            "itunes": "http://itunes.apple.com/WebObjects/MZStore.woa/wa/viewAlbum?id=526877503&s=143441",
            "amazon": "https://www.amazon.com/Try-Like-Him-Lyle-Hadlock/dp/B0082JYPS4/ref=sr_1_3?ie=UTF8&qid=1547100115&sr=8-3&keywords=lyle+hadlock+cd",
            "free_download": {
                "title": "The Spirit of God",
                "url": "music/Try%20to%20Be%20Like%20Him/11%20The%20Spirit%20of%20God.mp3"
            },
            "tracks": [
                {
                    "number": "1",
                    "title": "Come Ye Children of the Lord",
                    "length": "4:06",
                    "url": "music/Try%20to%20Be%20Like%20Him/01%20Come%20Ye%20Children%20of%20the%20Lord.mp3"
                },
                {
                    "number": "2",
                    "title": "Let Us Oft Speak Kind Words",
                    "length": "4:43",
                    "url": "music/Try%20to%20Be%20Like%20Him/02%20Let%20Us%20Oft%20Speak%20Kind%20Words.mp3"
                },
                {
                    "number": "3",
                    "title": "God is Love",
                    "length": "5:32",
                    "url": "music/Try%20to%20Be%20Like%20Him/03%20God%20Is%20love.mp3"
                },
                {
                    "number": "4",
                    "title": "Dare To Do Right",
                    "length": "3:22",
                    "url": "music/Try%20to%20Be%20Like%20Him/04%20Dare%20To%20Do%20Right.mp3"
                },
                {
                    "number": "5",
                    "title": "More Holiness Give Me",
                    "length": "4:38",
                    "url": "music/Try%20to%20Be%20Like%20Him/05%20More%20Holiness%20Give%20Me.mp3"
                },
                {
                    "number": "6",
                    "title": "How Great the Wisdom and the Love",
                    "length": "3:40",
                    "url": "music/Try%20to%20Be%20Like%20Him/06%20How%20Great%20the%20Wisdom%20and%20the%20Love.mp3"
                },
                {
                    "number": "7",
                    "title": "Children of Our Heavenly Father",
                    "length": "2:55",
                    "url": "music/Try%20to%20Be%20Like%20Him/08%20Children%20of%20Our%20Heavenly%20Father.mp3"
                },
                {
                    "number": "8",
                    "title": "Primary Medley",
                    "length": "5:15",
                    "url": "music/Try%20to%20Be%20Like%20Him/09%20Primary%20Medley.mp3"
                },
                {
                    "number": "9",
                    "title": "Jesus Once Was a Little Child",
                    "length": "6:11",
                    "url": "music/Try%20to%20Be%20Like%20Him/10%20Jesus%20Once%20Was%20a%20Little%20Child.mp3"
                },
                {
                    "number": "10",
                    "title": "The Spirit of God",
                    "length": "4:23",
                    "url": "music/Try%20to%20Be%20Like%20Him/11%20The%20Spirit%20of%20God.mp3"
                }
            ]
        },
		{
            "id": "igtd",
            "title": "In Good, Take Delight",
            "info": "Released in 2011, &quot;<b><i>In Good, Take Delight</i></b>&quot; is Lyle's sixth CD. This CD contains some well-known and some not-so-well-known hymns, but all beautifully composed and performed.",
            "image": "img/CdCover_IGTD_75dpi.jpg",
            "add_id": "XLUTP8QCKXKX2",
            "spotify": "https://open.spotify.com/album/1hfMCj77TyrmZwgPnzUYI7?si=oGGshgtmQU2qVviACVOcxQ",
            "itunes": "http://itunes.apple.com/WebObjects/MZStore.woa/wa/viewAlbum?id=438333140&s=143441",
            "amazon": "https://www.amazon.com/Good-Take-Delight-Lyle-Hadlock/dp/B005180EES/ref=sr_1_5?ie=UTF8&qid=1547100115&sr=8-5&keywords=lyle+hadlock+cd",
            "free_download": {
                "title": "Jesus of Nazereth",
                "url": "music/In%20Good%20Take%20Delight/11%20Jesus%20of%20Nazareth.mp3"
            },
            "tracks": [
                {
                    "number": "1",
                    "title": "Thanks for the Sabbath School",
                    "length": "2:54",
                    "url": "music/In%20Good%20Take%20Delight/01%20Thanks%20for%20the%20Sabbath%20School.mp3"
                },
                {
                    "number": "2",
                    "title": "Choose the Right",
                    "length": "4:27",
                    "url": "music/In%20Good%20Take%20Delight/02%20Choose%20the%20Right.mp3"
                },
                {
                    "number": "3",
                    "title": "Ye Simple Souls Who Stray",
                    "length": "3:49",
                    "url": "music/In%20Good%20Take%20Delight/03%20Ye%20Simple%20Souls%20Who%20Stray.mp3"
                },
                {
                    "number": "4",
                    "title": "Though Deepening Trials",
                    "length": "5:02",
                    "url": "music/In%20Good%20Take%20Delight/04%20Though%20Deepening%20Trials.mp3"
                },
                {
                    "number": "5",
                    "title": "O Home Beloved",
                    "length": "4:25",
                    "url": "music/In%20Good%20Take%20Delight/05%20O%20Home%20Beloved.mp3"
                },
                {
                    "number": "6",
                    "title": "In Our Lovely Deseret",
                    "length": "2:18",
                    "url": "music/In%20Good%20Take%20Delight/06%20In%20Our%20Lovely%20Deseret.mp3"
                },
                {
                    "number": "7",
                    "title": "The Lord Is My Shepherd",
                    "length": "4:37",
                    "url": "music/In%20Good%20Take%20Delight/07%20The%20Lord%20Is%20My%20Shepherd.mp3"
                },
                {
                    "number": "8",
                    "title": "Primary Medley",
                    "length": "4:39",
                    "url": "music/In%20Good%20Take%20Delight/08%20Primary%20Medley.mp3"
                },
                {
                    "number": "9",
                    "title": "We Thank Thee, O God, for a Prophet",
                    "length": "4:30",
                    "url": "music/In%20Good%20Take%20Delight/09%20We%20Thank%20Thee%20O%20God%20for%20a%20Prophet.mp3"
                },
                {
                    "number": "10",
                    "title": "Come Unto Jesus",
                    "length": "4:41",
                    "url": "music/In%20Good%20Take%20Delight/10%20Come%20Unto%20Jesus.mp3"
                },
				{
                    "number": "11",
                    "title": "Jesus of Nazareth",
                    "length": "3:33",
                    "url": "music/In%20Good%20Take%20Delight/11%20Jesus%20of%20Nazareth.mp3"
                },
                {
                    "number": "12",
                    "title": "The Iron Rod",
                    "length": "4:32",
                    "url": "music/In%20Good%20Take%20Delight/12%20The%20Iron%20Rod.mp3"
                },
            ]
        },
        {
            "id": "ttbh",
            "title": "Take Time To Be Holy",
            "info": "Released in 2009, &quot;<b><i>Take Time To Be Holy</i></b>&quot; is Lyle's fifth CD. As with Lyle's other CD's, Take Time To Be Holy features a full, rich orchestral sound.  It includes traditional hymns, as well as original music, with the contemplative and comforting, yet stirring signature that Lyle is known for.",
            "image": "img/CdCover_TTBH_75dpi.jpg",
            "add_id": "10283746",
            "spotify": "https://open.spotify.com/album/7aFRjE35lIorTJ7Ac0DfHi?si=p9mdMUMCRa6pLgHM18mcmA",
            "itunes": "http://itunes.apple.com/WebObjects/MZStore.woa/wa/viewAlbum?id=341205385&s=143441",
            "amazon": "https://www.amazon.com/gp/product/B002XOWRMK/ref=dm_ws_sp_ps_dp",
            "free_download": {
                "title": "Amazing Grace",
                "url": "music/Take%20Time%20To%20Be%20Holy/06%20Amazing%20Grace.mp3"
            },
            "tracks": [
                {
                    "number": "1",
                    "title": "I Stand All Amazed",
                    "length": "5:17",
                    "url": "music/Take%20Time%20To%20Be%20Holy/01%20I%20Stand%20All%20Amazed.mp3"
                },
                {
                    "number": "2",
                    "title": "Come, Ye Disconsolate / Sheep May Safely Graze",
                    "length": "4:16",
                    "url": "music/Take%20Time%20To%20Be%20Holy/02%20Come%20Ye%20Disconsolate%20-%20Sheep%20May.mp3"
                },
                {
                    "number": "3",
                    "title": "Sweet Is The Work",
                    "length": "5:19",
                    "url": "music/Take%20Time%20To%20Be%20Holy/03%20Sweet%20Is%20The%20Work.mp3"
                },
                {
                    "number": "4",
                    "title": "Take Time To Be Holy",
                    "length": "4:39",
                    "url": "music/Take%20Time%20To%20Be%20Holy/04%20Take%20Time%20To%20Be%20Holy.mp3"
                },
                {
                    "number": "5",
                    "title": "Have I Done Any Good In The World?",
                    "length": "4:28",
                    "url": "music/Take%20Time%20To%20Be%20Holy/05%20Have%20I%20Done%20Any%20Good%20In%20The%20World.mp3"
                },
                {
                    "number": "6",
                    "title": "Amazing Grace",
                    "length": "4:23",
                    "url": "music/Take%20Time%20To%20Be%20Holy/06%20Amazing%20Grace.mp3"
                },
                {
                    "number": "7",
                    "title": "I'll Go Where You Want Me To Go",
                    "length": "3:29",
                    "url": "music/Take%20Time%20To%20Be%20Holy/07%20Ill%20Go%20Where%20You%20Want%20Me%20To%20Go.mp3"
                },
                {
                    "number": "8",
                    "title": "A Mighty Fortress Is Our God",
                    "length": "4:26",
                    "url": "music/Take%20Time%20To%20Be%20Holy/08%20A%20Mighty%20Fortress%20Is%20Our%20God.mp3"
                },
                {
                    "number": "9",
                    "title": "There Is Sunshine In My Soul Today",
                    "length": "2:34",
                    "url": "music/Take%20Time%20To%20Be%20Holy/09%20There%20Is%20Sunshine%20In%20My%20Soul%20Toda.mp3"
                },
                {
                    "number": "10",
                    "title": "O' God The Eternal Father / Handel's Season Music (Spring)",
                    "length": "6:31",
                    "url": "music/Take%20Time%20To%20Be%20Holy/10%20O%20God%20The%20Eternal%20Father%20-%20Hande.mp3"
                },
                {
                    "number": "11",
                    "title": "He Lives!",
                    "length": "5:39",
                    "url": "music/Take%20Time%20To%20Be%20Holy/11%20He%20Lives.mp3"
                }
            ]
        },
        {
            "id": "wepft",
            "title": "We Ever Pray For Thee",
            "info": "We Ever Pray For Thee is Lyle's fourth CD and was released in 2008 just a few days after the passing of President Gordon B. Hinckley - a fitting tribute for a wonderful prophet.&nbsp; This CD is rich in content with full orchestral arrangements.",
            "image": "img/CdCover_WEPFT_75dpi.jpg",
            "add_id": "7759188",
            "spotify": "https://open.spotify.com/album/27dKGqQTfRxx2PgjYMi0pw?si=ggwOHZIBT7y74OkgRBLE0Q",
            "itunes": "http://itunes.apple.com/WebObjects/MZStore.woa/wa/viewAlbum?id=328444511&s=143441",
            "amazon": "https://www.amazon.com/Ever-Pray-Thee-Lyle-Hadlock/dp/B002MIGJD0/ref=sr_1_7?ie=UTF8&qid=1547100115&sr=8-7&keywords=lyle+hadlock+cd",
            "free_download": {
                "title": "Gethsemane",
                "url": "music/We%20Ever%20Pray%20For%20Thee/08%20Gethsemane.mp3"
            },
            "tracks": [
                {
                    "number": "1",
                    "title": "If You Could Hie to Kolob",
                    "length": "6:00",
                    "url": "music/We%20Ever%20Pray%20For%20Thee/01%20If%20You%20Could%20Hie%20to%20Kolob.mp3"
                },
                {
                    "number": "2",
                    "title": "All Creatures of Our God and King",
                    "length": "3:00",
                    "url": "music/We%20Ever%20Pray%20For%20Thee/02%20All%20Creatures%20of%20Our%20God%20and%20King.mp3"
                },
                {
                    "number": "3",
                    "title": "We Ever Pray For Thee",
                    "length": "5:22",
                    "url": "music/We%20Ever%20Pray%20For%20Thee/03%20We%20Ever%20Pray%20For%20Thee.mp3"
                },
                {
                    "number": "4",
                    "title": "Come, Follow Me",
                    "length": "5:04",
                    "url": "music/We%20Ever%20Pray%20For%20Thee/04%20Come%20Follow%20Me.mp3"
                },
                {
                    "number": "5",
                    "title": "'Tis Sweet to Sing the Matchless Love",
                    "length": "3:33",
                    "url": "music/We%20Ever%20Pray%20For%20Thee/05%20Tis%20Sweet%20to%20Sing%20the%20Matchless.mp3"
                },
                {
                    "number": "6",
                    "title": "Abide With Me",
                    "length": "3:09",
                    "url": "music/We%20Ever%20Pray%20For%20Thee/06%20Abide%20With%20Me.mp3"
                },
                {
                    "number": "7",
                    "title": "God Loved Us, So He Sent His Son",
                    "length": "3:44",
                    "url": "music/We%20Ever%20Pray%20For%20Thee/07%20God%20Loved%20Us%20So%20He%20Sent%20His%20Son.mp3"
                },
                {
                    "number": "8",
                    "title": "Gethsemane",
                    "length": "4:50",
                    "url": "music/We%20Ever%20Pray%20For%20Thee/08%20Gethsemane.mp3"
                },
                {
                    "number": "9",
                    "title": "God of Our Fathers, Known of Old",
                    "length": "3:15",
                    "url": "music/We%20Ever%20Pray%20For%20Thee/09%20God%20of%20Our%20Fathers%20Known%20of%20Old.mp3"
                },
                {
                    "number": "10",
                    "title": "Largo",
                    "length": "3:57",
                    "url": "music/We%20Ever%20Pray%20For%20Thee/10%20Largo.mp3"
                },
                {
                    "number": "11",
                    "title": "Master, the Tempest is Raging",
                    "length": "3:51",
                    "url": "music/We%20Ever%20Pray%20For%20Thee/11%20Master%20the%20Tempest%20Is%20Raging.mp3"
                },
                {
                    "number": "12",
                    "title": "Behold The Great Redeemer Die",
                    "length": "5:52",
                    "url": "music/We%20Ever%20Pray%20For%20Thee/12%20Behold%20The%20Great%20Redeemer%20Die.mp3"
                }
            ]
        },
		{
            "id": "tiaghfa",
            "title": "There Is A Green Hill Far Away",
            "info": "There Is A Green Hill Far Away is Lyle's second CD, released in 2004.&nbsp; On this CD, Lyle added more instruments to the arrangements, providing a full, rich sound.&nbsp; In Lyle's words, &quot;My hope is that this music will touch your heart and soothe your soul.&quot;&nbsp; This CD is truly a masterpiece that will be enjoyed by all.",
            "image": "img/CdCover_TIAGHFA_75dpi.jpg",
            "add_id": "7759246",
            "spotify": "https://open.spotify.com/album/5pRau9S8fcBUWw6SG9D480?si=WsxVxNGzQfe3bWbTA0qSPQ",
            "itunes": "http://itunes.apple.com/WebObjects/MZStore.woa/wa/viewAlbum?id=329074434&s=143441",
            "amazon": "https://www.amazon.com/There-Green-Hill-Far-Away/dp/B002N7KO36/ref=sr_1_6?ie=UTF8&qid=1547100115&sr=8-6&keywords=lyle+hadlock+cd",
            "free_download": {
                "title": "Come Thou Fount",
                "url": "music/There%20is%20a%20Green%20Hill%20Far%20Away/01%20Come%20Thou%20Fount%20of%20Every%20Blessing.mp3"
            },
            "tracks": [
                {
                    "number": "1",
                    "title": "Come Thou Fount of Every Blessing",
                    "length": "6:03",
                    "url": "music/There%20is%20a%20Green%20Hill%20Far%20Away/01%20Come%20Thou%20Fount%20of%20Every%20Blessing.mp3"
                },
                {
                    "number": "2",
                    "title": "My Heavenly Father Loves Me",
                    "length": "4:28",
                    "url": "music/There%20is%20a%20Green%20Hill%20Far%20Away/02%20My%20Heavenly%20Father%20Loves%20Me.mp3"
                },
                {
                    "number": "3",
                    "title": "There is a Green Hill Far Away",
                    "length": "8:02",
                    "url": "music/There%20is%20a%20Green%20Hill%20Far%20Away/03%20There%20is%20a%20Green%20Hill%20Far%20Away.mp3"
                },
                {
                    "number": "4",
                    "title": "Be Still, My Soul",
                    "length": "5:01",
                    "url": "music/There%20is%20a%20Green%20Hill%20Far%20Away/04%20Be%20Still%20My%20Soul.mp3"
                },
                {
                    "number": "5",
                    "title": "Come, Come, Ye Saints",
                    "length": "6:20",
                    "url": "music/There%20is%20a%20Green%20Hill%20Far%20Away/05%20Come%20Come%20Ye%20Saints.mp3"
                },
                {
                    "number": "6",
                    "title": "Dearest Children, God is Near You",
                    "length": "5:01",
                    "url": "music/There%20is%20a%20Green%20Hill%20Far%20Away/06%20Dearest%20Children%20God%20is%20Near%20You.mp3"
                },
                {
                    "number": "7",
                    "title": "In Humility, Our Savior",
                    "length": "4:30",
                    "url": "music/There%20is%20a%20Green%20Hill%20Far%20Away/07%20In%20Humility%20Our%20Savior.mp3"
                },
                {
                    "number": "8",
                    "title": "Lead, Kindly Light",
                    "length": "4:58",
                    "url": "music/There%20is%20a%20Green%20Hill%20Far%20Away/08%20Lead%20Kindly%20Light.mp3"
                },
                {
                    "number": "9",
                    "title": "I Am a Child of God",
                    "length": "5:53",
                    "url": "music/There%20is%20a%20Green%20Hill%20Far%20Away/09%20I%20Am%20a%20Child%20of%20God.mp3"
                },
                {
                    "number": "10",
                    "title": "Nearer, My God to Thee",
                    "length": "5:10",
                    "url": "music/There%20is%20a%20Green%20Hill%20Far%20Away/10%20Nearer%20My%20God%20to%20Thee.mp3"
                },
				{
                    "number": "11",
                    "title": "How Great Thou Art",
                    "length": "4:16",
                    "url": "music/There%20is%20a%20Green%20Hill%20Far%20Away/11%20How%20Great%20Thou%20Art.mp3"
                }
            ]
        },
        {
            "id": "sfts",
            "title": "Songs for The Sabbath",
            "info": "Songs for the Sabbath is Lyle's first CD, released in 2003.&nbsp; All songs are taken from the LDS Hymnal; arranged by Lyle, and performed by Lyle Hadlock at the Piano and Daron Bradford on woodwinds.&nbsp; Inside the CD jacket, Lyle said, &quot;I hope you feel the spirit in which this CD was created.&nbsp; Its intent is to bring about a reverent atmosphere in your home on the Sabbath Day - or any day.",
            "image": "img/CdCover_SFTS_75dpi.jpg",
            "add_id": "7759318",
            "spotify": "https://open.spotify.com/album/2ZwcN2RkOJDeBEwAyi2De3?si=ai_2Qu8qTBeTQWHYG4JvrA",
            "itunes": "http://itunes.apple.com/WebObjects/MZStore.woa/wa/viewAlbum?id=438326194&s=143441",
            "amazon": "https://www.amazon.com/Songs-Sabbath-Lyle-Hadlock/dp/B0051AOF8W/ref=sr_1_4?ie=UTF8&qid=1547100115&sr=8-4&keywords=lyle+hadlock+cd",
            "free_download": {
                "title": "Abide With Me",
                "url": "music/Songs%20for%20the%20Sabbath/01%20Abide%20With%20Me%20Tis%20Eventide.mp3"
            },
            "tracks": [
                {
                    "number": "1",
                    "title": "Abide With Me; 'Tis Eventide",
                    "length": "4:41",
                    "url": "music/Songs%20for%20the%20Sabbath/01%20Abide%20With%20Me%20Tis%20Eventide.mp3"
                },
                {
                    "number": "2",
                    "title": "Dear To the Heart of the Shepherd",
                    "length": "5:03",
                    "url": "music/Songs%20for%20the%20Sabbath/02%20Dear%20To%20the%20Heart%20of%20the%20Shepherd.mp3"
                },
                {
                    "number": "3",
                    "title": "Did You Think to Pray",
                    "length": "5:35",
                    "url": "music/Songs%20for%20the%20Sabbath/03%20Did%20You%20Think%20to%20Pray.mp3"
                },
                {
                    "number": "4",
                    "title": "How Gentle God's Commands",
                    "length": "3:01",
                    "url": "music/Songs%20for%20the%20Sabbath/04%20How%20Gentle%20Gods%20Commands.mp3"
                },
                {
                    "number": "5",
                    "title": "Hymn Medley: Joseph Smith's First Prayer, A Poor Wayfaring Man of Grief, If You Could Hie to Kolob",
                    "length": "5:48",
                    "url": "music/Songs%20for%20the%20Sabbath/05%20Hymn%20Medley_%20Joseph%20Smiths%20First.mp3"
                },
                {
                    "number": "6",
                    "title": "I Know That My Redeemer Lives",
                    "length": "4:41",
                    "url": "music/Songs%20for%20the%20Sabbath/06%20I%20Know%20That%20My%20Redeemer%20Lives.mp3"
                },
                {
                    "number": "7",
                    "title": "I Need Thee Every Hour",
                    "length": "4:01",
                    "url": "music/Songs%20for%20the%20Sabbath/07%20I%20Need%20Thee%20Every%20Hour.mp3"
                },
                {
                    "number": "8",
                    "title": "Jesus, Once of Humble Birth",
                    "length": "3:43",
                    "url": "music/Songs%20for%20the%20Sabbath/08%20Jesus%20Once%20of%20Humble%20Birth.mp3"
                },
                {
                    "number": "9",
                    "title": "Love at Home",
                    "length": "4:10",
                    "url": "music/Songs%20for%20the%20Sabbath/09%20Love%20at%20Home.mp3"
                },
                {
                    "number": "10",
                    "title": "O My Father",
                    "length": "3:35",
                    "url": "music/Songs%20for%20the%20Sabbath/10%20O%20My%20Father.mp3"
                },
                {
                    "number": "11",
                    "title": "Sweet Hour of Prayer",
                    "length": "3:59",
                    "url": "music/Songs%20for%20the%20Sabbath/11%20Sweet%20Hour%20of%20Prayer.mp3"
                }
            ]
        },
        {
            "id": "eaic",
            "title": "An Ebony & Ivory Christmas",
            "info": "Recorded in 2006, &quot;<b><i>An Ebony & Ivory Christmas</i></b>&quot; is Lyle's third CD, and first Christmas CD.&nbsp; It radiates the true spirit of Christmas with thought provoking and inspiring arrangements of everyone's favorite songs, plus a Lyle Hadlock original, Christmas Mourning. This CD is a must have for Christmas.",
            "image": "img/CdCover_EAIC_75dpi.jpg",
            "add_id": "7759293",
            "spotify": "https://open.spotify.com/album/3l2leO5dBEMo1vxH4WHk92?si=ELMORJvSR4e3aB1122dQEQ",
            "itunes": "http://itunes.apple.com/WebObjects/MZStore.woa/wa/viewAlbum?id=328933304&s=143441",
            "amazon": "https://www.amazon.com/Ebony-Ivory-Christmas-Lyle-Hadlock/dp/B002MTS6AI/ref=sr_1_2?ie=UTF8&qid=1547100115&sr=8-2&keywords=lyle+hadlock+cd",
            "free_download": {
                "title": "I Wonder As I Wander",
                "url": "music/An%20Ebony%20and%20Ivory%20Christmas/03%20I%20Wonder%20As%20I%20Wander.mp3"
            },
            "tracks": [
                {
                    "number": "1",
                    "title": "O Come, O Come, Emmanuel",
                    "length": "5:23",
                    "url": "music/An%20Ebony%20and%20Ivory%20Christmas/01%20O%20Come%20O%20Come%20Emmanuel.mp3"
                },
                {
                    "number": "2",
                    "title": "Away in a Manger",
                    "length": "4:26",
                    "url": "music/An%20Ebony%20and%20Ivory%20Christmas/02%20Away%20In%20A%20Manger.mp3"
                },
                {
                    "number": "3",
                    "title": "I Wonder As I Wander",
                    "length": "3:45",
                    "url": "music/An%20Ebony%20and%20Ivory%20Christmas/03%20I%20Wonder%20As%20I%20Wander.mp3"
                },
                {
                    "number": "4",
                    "title": "Coventry Carol",
                    "length": "4:18",
                    "url": "music/An%20Ebony%20and%20Ivory%20Christmas/04%20Coventry%20Carol.mp3"
                },
                {
                    "number": "5",
                    "title": "In The Bleak Mid Winter",
                    "length": "6:32",
                    "url": "music/An%20Ebony%20and%20Ivory%20Christmas/05%20In%20The%20Bleak%20Mid%20Winter.mp3"
                },
                {
                    "number": "6",
                    "title": "O Holy Night",
                    "length": "6:56",
                    "url": "music/An%20Ebony%20and%20Ivory%20Christmas/06%20O%20Holy%20Night.mp3"
                },
                {
                    "number": "7",
                    "title": "What Child Is This?",
                    "length": "4:57",
                    "url": "music/An%20Ebony%20and%20Ivory%20Christmas/07%20What%20Child%20Is%20This.mp3"
                },
                {
                    "number": "8",
                    "title": "Hark! The Herald Angels Sing",
                    "length": "4:32",
                    "url": "music/An%20Ebony%20and%20Ivory%20Christmas/08%20Hark%20The%20Herald%20Angels%20Sing.mp3"
                },
                {
                    "number": "9",
                    "title": "Still, Still, Still",
                    "length": "4:23",
                    "url": "music/An%20Ebony%20and%20Ivory%20Christmas/09%20Still%20Still%20Still.mp3"
                },
                {
                    "number": "10",
                    "title": "Wexford Carol",
                    "length": "4:22",
                    "url": "music/An%20Ebony%20and%20Ivory%20Christmas/10%20Wexford%20Carol.mp3"
                },
                {
                    "number": "11",
                    "title": "Silent Night",
                    "length": "5:41",
                    "url": "music/An%20Ebony%20and%20Ivory%20Christmas/11%20Silent%20Night.mp3"
                },
                {
                    "number": "12",
                    "title": "Christmas Mourning",
                    "length": "4:37",
                    "url": "music/An%20Ebony%20and%20Ivory%20Christmas/12%20Christmas%20Mourning.mp3"
                }
            ]
        }
    ];
});

mainApp.factory("galleries", function() {
    return [
        {
            "id": "2011-igtd",
            "name": "Recording 'In Good, Take Delight' 2011",
            "description": "Featuring Lyle Hadlock, Guy Randle, Stephanie Cathcart (violin),<br>Meredith Campbell (violin), Nicole Pinnell Jackson (cello), Candace Wagner (viola), <br>(Rosewood Studio - Provo, UT)",
            "thumbnail": "photos/lyle-igtd.JPG",
            "photos": [
                {
                    "url": "photos/lyle-igtd.JPG",
                    "caption": "Lyle - Leader of the Band"
                },
                {
                    "url": "photos/lyle-and-guy(santa)-igtd.JPG",
                    "caption": "Who is that 'Guy' with Lyle - it's Santa!"
                },
                {
                    "url": "photos/guy-randall-igtd.JPG",
                    "caption": "Guy Randall - getting it all setup"
                },
                {
                    "url": "photos/strings-warming-igtd.JPG",
                    "caption": "Strings tuning up"
                },
                {
                    "url": "photos/strings-igtd.JPG",
                    "caption": "Nicole 'Takes Delight'"
                },
                {
                    "url": "photos/candice-wagner-igtd.JPG",
                    "caption": "Candace Wagner (Viola)"
                },
                {
                    "url": "photos/candice-nicole-igtd.JPG",
                    "caption": "Candace Wagner & Nicole Pinnell Jackson"
                },
                {
                    "url": "photos/nicole-pinnell-jackson-igtd.JPG",
                    "caption": "Nicole Pinnell Jackson (Cello)"
                },
                {
                    "url": "photos/merideth-campbell-igtd.JPG",
                    "caption": "Meredith Campbell (Violin)"
                },
                {
                    "url": "photos/merideth2-igtd.JPG",
                    "caption": "Meredith during a take"
                },
                {
                    "url": "photos/merideth-stephanie-igtd.JPG",
                    "caption": "Meredith Campbell & Stephanie Cathcart"
                },
                {
                    "url": "photos/stephanie-cathcart-igtd.JPG",
                    "caption": "Stephanie Cathcart (Violin)"
                },
                {
                    "url": "photos/nicole-igtd.JPG",
                    "caption": "Nicole - in great concentration"
                }
            ]
        },
        {
            "id": "2009-tttbh",
            "name": "Recording 'Take Time To Be Holy' 2009",
            "description": "Featuring Lyle Hadlock, Guy Randle, Monte Belknap (violin),<br>Meredith Campbell (violin), Nicole Pinnell Jackson (cello), Claudine Bigelow (viola), <br>(Rosewood Studio - Provo, UT)",
            "thumbnail": "photos/CD5-Lyle%20at%20piano%20(5).JPG",
            "photos": [
                {
                    "url": "photos/CD5-Lyle%20(2).JPG",
                    "caption": "Lyle at the piano"
                },
                {
                    "url": "photos/CD5-Lyle%20at%20piano%20(2).JPG",
                    "caption": "Lyle at the piano (again)"
                },
                {
                    "url": "photos/CD5-Lyle%20at%20piano%20(3).JPG",
                    "caption": "...and again..."
                },
                {
                    "url": "photos/CD5-Lyle%20at%20piano%20(4).JPG",
                    "caption": "...and again..."
                },
                {
                    "url": "photos/CD5-Lyle%20at%20piano%20(5).JPG",
                    "caption": "...and again..."
                },
                {
                    "url": "photos/CD5-Lyle%20at%20piano%20(6).JPG",
                    "caption": "...and again..."
                },
                {
                    "url": "photos/CD5-Piano%20wired%20for%20sound.JPG",
                    "caption": "Piano wired for sound"
                },
                {
                    "url": "photos/CD5-Strings%20in%20studio.JPG",
                    "caption": "Strings tuning up"
                },
                {
                    "url": "photos/CD5-Strings%20warmup.JPG",
                    "caption": "Warmup"
                },
                {
                    "url": "photos/CD5-Strings.JPG",
                    "caption": "The String section"
                },
                {
                    "url": "photos/CD5-Merideth%20and%20Claudine.JPG",
                    "caption": "Meredith Campbell and Claudine Bigelow"
                },
                {
                    "url": "photos/CD5-Lyle%20smiling.JPG",
                    "caption": "Lyle enjoying a good joke"
                },
                {
                    "url": "photos/CD5-Claudine%20(2).JPG",
                    "caption": "Claudine Bigelow on Viola"
                },
                {
                    "url": "photos/CD5-Claudine%20on%20viola.JPG",
                    "caption": "Claudine Bigelow"
                },
                {
                    "url": "photos/CD5-Claudine.JPG",
                    "caption": "Claudine Bigelow"
                },
                {
                    "url": "photos/CD5-Merideth%20(2).JPG",
                    "caption": "Meredith Campbell on Violin"
                },
                {
                    "url": "photos/CD5-Merideth%20on%20violin.JPG",
                    "caption": "Meredith Campbell"
                },
                {
                    "url": "photos/CD5-Merideth.JPG",
                    "caption": "Meredith Campbell"
                },
                {
                    "url": "photos/CD5-Monte%20(2).JPG",
                    "caption": "Monte Belknap on Violin"
                },
                {
                    "url": "photos/CD5-Monte%20on%20violin.JPG",
                    "caption": "Monte Belknap"
                },
                {
                    "url": "photos/CD5-Monte.JPG",
                    "caption": "Monte Belknap"
                },
                {
                    "url": "photos/CD5-Nicole%20(2).JPG",
                    "caption": "Nicole Pinnell Jackson on Cello"
                },
                {
                    "url": "photos/CD5-Nicole%20on%20cello%20(2).JPG",
                    "caption": "Nicole Pinnell Jackson"
                },
                {
                    "url": "photos/CD5-Nicole%20on%20cello.JPG",
                    "caption": "Nicole Pinnell Jackson"
                },
                {
                    "url": "photos/CD5-Nicole.JPG",
                    "caption": "Nicole Pinnell Jackson"
                },
                {
                    "url": "photos/CD5-Protools.JPG",
                    "caption": "Pro Tools monitor in studio"
                },
                {
                    "url": "photos/CD5-Guy%20(2).JPG",
                    "caption": "Guy Randle at the console"
                },
                {
                    "url": "photos/CD5-Guy%20at%20the%20board.JPG",
                    "caption": "Guy Randle"
                },
                {
                    "url": "photos/CD5-Guy.JPG",
                    "caption": "Guy Randle"
                },
                {
                    "url": "photos/CD5-Lyle.JPG",
                    "caption": "It was a good session"
                }
            ]
        },
        {
            "id": "2008-WEPFT",
            "name": "Recording 'We, Every Pray For Thee' 2008",
            "description": "Featuring Lyle Hadlock, Guy Randle, Meredith Campbell,<br>Stephanie Cathcart, Candace Wagner, Ellen Bridger<br>(Rosewood Studio - Provo, UT)",
            "thumbnail": "photos/A%20light%20moment.JPG",
            "photos": [
                {
                    "url": "photos/Lyle%20keeping%20time2.JPG",
                    "caption": "Lyle the Orchestra Leader - leads the strings as they rehearse"
                },
                {
                    "url": "photos/Lyle%20the%20overseer.JPG",
                    "caption": "Listening intently to a playback Lyle can seem to hear any little imperfection to assure the take is good"
                },
                {
                    "url": "photos/A%20light%20moment.JPG",
                    "caption": "Between takes - The monitor helps Lyle keep impeccable timing by showing him what's coming up in the next few seconds"
                },
                {
                    "url": "photos/Guy%20and%20Lyle%20in%20discussion.JPG",
                    "caption": "Guy and Lyle - Lyle listens as Guy Randle tells him about the good 'ole days"
                },
                {
                    "url": "photos/Strings%20setting%20up.JPG",
                    "caption": "Tuning Up - Meredith, Stephanie, and Candace (L-R) set up and tune up"
                },
                {
                    "url": "photos/Strings%20setting%20up2.JPG",
                    "caption": "Stop bugging us! - We could get a lot more done if you'd just let us setup Lyle!"
                },
                {
                    "url": "photos/Strings%20rehearsing.JPG",
                    "caption": "Strings Rehearsing - It only takes one or two practice runs before it's time to record"
                },
                {
                    "url": "photos/Stephanie%20Cathcart%20-%20Violin.JPG",
                    "caption": "Stephanie Cathcart plays the violin"
                },
                {
                    "url": "photos/Merideth%20Campbell%20-%20Violin.JPG",
                    "caption": "Meredith Campbell - Meredith plays the violin"
                },
                {
                    "url": "photos/Candice%20Wager%20-%20Viola.JPG",
                    "caption": "Candace Wagner plays the viola"
                },
                {
                    "url": "photos/Ellen%20Bridger%20-%20Cello.JPG",
                    "caption": "Ellen Bridger plays the cello"
                },
                {
                    "url": "photos/Guy%20Randle%20at%20the%20console2.JPG",
                    "caption": "Guy Randle records a take"
                },
                {
                    "url": "photos/Guy%20Randle%20at%20the%20console.JPG",
                    "caption": "Guy at his 'desk' - There is a lot of setup to prepare for a perfect recording session"
                },
                {
                    "url": "photos/Guy%20and%20Lyle%20listing%20to%20a%20take.JPG",
                    "caption": "Guy and Lyle take a final listen - It's been a long night, but it sounds oh so good!"
                }
            ]
        },
        {
            "id": "2006-AEIC",
            "name": "Recording 'An Ebony & Ivory Christmas' 2006",
            "description": "Making 'An Ebony & Ivory Christmas'",
            "thumbnail": "photos/Lyle%20at%20the%20piano.JPG",
            "photos": [
                {
                    "url": "photos/Lyle%20playing%20piano.JPG",
                    "caption": "Lyle Recording the Piano Tracks - The foundation for the CD is Lyle on Piano"
                },
                {
                    "url": "photos/Lyle%20at%20the%20piano.JPG",
                    "caption": "Cool and Comfortable - It's hard work - but if you're in your jammies, anythings within reach!"
                },
                {
                    "url": "photos/Lyle%20Reviewing%20Piano%20Tracks.JPG",
                    "caption": "Reviewing the Tracks - When you've got one shot in the studio to record the piano parts, you have to make sure it's all right before you walk out the door."
                },
                {
                    "url": "photos/Daron%20Bradford%20Taking%20Notes.JPG",
                    "caption": "Daron Bradford, surrounded by just a few instruments he has mastered, takes a few notes during a break."
                },
                {
                    "url": "photos/Daron%20on%20the%20Clarinet.JPG",
                    "caption": "Daron plays the introduction to 'I Wonder as I Wander'"
                },
                {
                    "url": "photos/Daron%20and%20Lyle%20take%20a%20break.JPG",
                    "caption": "Lyle and Daron take a break and talk about the 'old days' between takes."
                },
                {
                    "url": "photos/Lyle%20Reviews%20the%20Score.JPG",
                    "caption": "Printing the score takes almost an entire ream of paper"
                },
                {
                    "url": "photos/Lyle%20watching.JPG",
                    "caption": "The Manager - It's a tough job, but somebody's got to do it!"
                },
                {
                    "url": "photos/Greg%20and%20Jim%20recording%20cello.JPG",
                    "caption": "Recording Jim Hardy on Cello"
                },
                {
                    "url": "photos/Jim%20recording%20cello.JPG",
                    "caption": "Jim Hardy on Cello"
                },
                {
                    "url": "photos/Lyle%20and%20Greg.JPG",
                    "caption": "Lyle Hadlock and Engineer Greg Duckwitz at Orpheus Sound Studio (Oren, UT) listening intently to Jim Hardy while recording his cello part for 'In the Bleak Mid Winter' (I stole Greg's nice big chair and made him sit on a folding chair! It was comfy...)"
                },
                {
                    "url": "photos/Monte%20Belknap%20on%20violin.JPG",
                    "caption": "Monte Belknap on Violin"
                }            ]
        },
        {
            "id": "MISC",
            "name": "Lyle - Past and present",
            "description": "",
            "thumbnail": "photos/LyleandJan.jpg",
            "photos": [
                {
                    "url": "photos/018.jpg",
                    "caption": "Jan and Lyle"
                },
                {
                    "url": "photos/017.jpg",
                    "caption": "Lyle's family portrait"
                },
                {
                    "url": "photos/041.jpg",
                    "caption": "The Nerdlocks"
                },
                {
                    "url": "photos/023.jpg",
                    "caption": "Lunch Break at Home - Grandpa and Shelby making things out of play-doh on his lunch break!"
                },
                {
                    "url": "photos/038.jpg",
                    "caption": "Lyle and his twin, Lynn"
                },
                {
                    "url": "photos/039.jpg",
                    "caption": "At Lonnie's (Lyle's older brother) graveside service"
                },
                {
                    "url": "photos/040.jpg",
                    "caption": "Kayla, Lyle, and Kelsie"
                },
                {
                    "url": "photos/033.jpg",
                    "caption": "Kelsie Graduation"
                },
                {
                    "url": "photos/034.jpg",
                    "caption": "Pioneer Trek - Ma and Pa Hadlock"
                },
                {
                    "url": "photos/035.jpg",
                    "caption": "Daddy Daughter night"
                },
                {
                    "url": "photos/036.jpg",
                    "caption": "Caught brown handed!"
                },
                {
                    "url": "photos/029.jpg",
                    "caption": "Lyle and Jan with their best buds, Tom and Amy, on a Valentine's weekend getaway!"
                },
                {
                    "url": "photos/030.jpg",
                    "caption": "Hey old man! - Lyle playing an 'old fart' for the kids."
                },
                {
                    "url": "photos/031.jpg",
                    "caption": "The Hadlock family have been to Hell and back....twice."
                },
                {
                    "url": "photos/032.jpg",
                    "caption": "Lyle's second home.  At least it's a family affair."
                },
                {
                    "url": "photos/025.jpg",
                    "caption": "Lyle is the leader of the Mapleton Drill team!"
                },
                {
                    "url": "photos/026.jpg",
                    "caption": "Jonah and friend after a visit to the Festival of Colors.  Oh, and Lyle had to get in on it too."
                },
                {
                    "url": "photos/027.jpg",
                    "caption": "Playing with the Mapleton Chorale - Jonah on the double bass, and Lyle on the clarinet."
                },
                {
                    "url": "photos/028.jpg",
                    "caption": "Orange you special! - Grandpa and Mercedes share an orange"
                },
                {
                    "url": "photos/021.jpg",
                    "caption": "Lyle and Jonah - leap of faith"
                },
                {
                    "url": "photos/022.jpg",
                    "caption": "Jonah, Lyle and Kelsie in their Sunday best"
                },
                {
                    "url": "photos/037.jpg",
                    "caption": "Lyle 50th"
                },
                {
                    "url": "photos/024.jpg",
                    "caption": "Lyle turns 50"
                },
                {
                    "url": "photos/019.jpg",
                    "caption": "Kayla and Lyle"
                },
                {
                    "url": "photos/020.jpg",
                    "caption": "Father's Day 2009 - Taking a Sunday ride in Lyle's new wheel..."
                },
                {
                    "url": "photos/Family at B and B.jpg",
                    "caption": "Lyle's family - Left to right: Kelsie, Jonah, Lyle, Jan"
                },
                {
                    "url": "photos/Family%20in%20from%20of%20Nauvoo%20Temple.JPG",
                    "caption": "Family at Nauvoo - Left to right:&nbsp; Jonah, Kelsie, Jan, Lyle"
                },
                {
                    "url": "photos/Lyle%20and%20Jonah%20on%20the%20Mississippi.JPG",
                    "caption": "Like father, like son - Lyle and Jonah on the banks of the Mississippi"
                },
                {
                    "url": "photos/Lyle%20at%20the%20piano%202.JPG",
                    "caption": "Piano Man"
                },
                {
                    "url": "photos/Grandpa%20Lyle%20with%20Shelby.JPG",
                    "caption": "Grandpa - Lyle with his first grand daughter, Shelby."
                },
                {
                    "url": "photos/Little%20Lyle.JPG",
                    "caption": "Young Lyle at 3 - Born and raised in the Provo/Orem area of Utah County, it was about this age when he started playing around on the piano."
                },
                {
                    "url": "photos/Lyle%20at%20Toy%20Piano.jpg",
                    "caption": "Lyle on Toy Piano - No matter what kind of piano Lyle is playing, he makes it sound good.&nbsp; This piano was a birthday present from a fellow missionary.&nbsp; It followed him around California for about four months until it was finally sent home."
                },
                {
                    "url": "photos/LyleMarine.jpg",
                    "caption": "PFC Lyle Hadlock - Lyle joined the US Marines in 1983. He toured all over the western United States and Hawaii playing with the Marine Band and performed in a special group called the 3rd Marine Airwing Band.&nbsp; He played the Clarinet and Sax.&nbsp; He was later made the official piano player for Major General Miller"
                },
                {
                    "url": "photos/Lyle%20at%20care%20center.jpg",
                    "caption": "Serving at Care Centers - Lyle works for UPS, but has been known on many occasions to spend his lunch hour at various local care facilities entertaining the elderly."
                },
                {
                    "url": "photos/Lyle%20Playing%20at%20Reception.JPG",
                    "caption": "Entertainment at Receptions - Around Utah County you may find Lyle playing at wedding receptions or other gatherings."
                },
                {
                    "url": "photos/Lyle%20Hands.JPG",
                    "caption": "Reflections - While playing one day at an informal gathering in a sunlight room, Lyle's brother in law noticed that the reflection off the piano provided an intriguing photo opportunity."
                },
                {
                    "url": "photos/Lyle%20at%20workstation.JPG",
                    "caption": "Composing - Working on his Christmas CD at his Sibelius 3 workstation."
                },
                {
                    "url": "photos/LyleandJan.jpg",
                    "caption": "Lyle and his wife Jan"
                }
            ]
        }
    ]
});
