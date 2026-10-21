'use strict';

angular.module('mainApp.reviews', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/reviews', {
            templateUrl: 'views/reviews/reviews.html',
            controller: 'ReviewsCtrl'
        });
    }])

    .controller('ReviewsCtrl', ['$scope', function ($scope) {

        // used to return an array with num size for ng-repeat
        $scope.getNumber = function(num) {
            return new Array(num);
        }

        $scope.reviews = [
            {
                "name": "Lenore Burgi",
                "location": "Roosevelt, UT",
                "stars": 5,
                "review": "I love these CDs. This music has just such a calming affect that I use them as atmosphere music for family mealtime and throughout the day. Thanks for sharing your talent, Lyle."
            },
            {
                "name": "Diane Hopkins",
                "location": "",
                "stars": 5,
                "review": "Listening to the calming, beautiful CD you gave my daughter Emily (Love to Learn). What lovely music! Wish you could do music instead of UPS."
            },
            {
                "name": "Jerry Hubbs",
                "location": "American Falls, ID",
                "stars": 5,
                "review": "What a remarkable talent and interpretation that has been given to this music. We gave the new CD In Good Take Delight to the Mothers last Mother's Day and they were indeed delighted! At home, we turn on the music each night before going to sleep and it brings in the spirit. Thank you so much for all that is done. It indeed brings that spirit and builds testimonies. A remarkable gift that a Bishop of a ward can give to members."
            },
            {
                "name": "Scott Garner",
                "location": "Okotoks, Alberta Canada",
                "stars": 5,
                "review": "Lyle's talent is a blessing for all who listen and brings hope back to the heart."
            },
            {
                "name": "Scott Johnson",
                "location": "Orem, UT",
                "stars": 5,
                "review": "Lyle's music is inspirational. He does a superb job putting together his arrangements. I find his music peaceful, uplifting, and soothing. I listen to one of his CDs almost every Sunday, even my 9 year old loves to listen to his music. I highly recommend any of Lyle's CDs for those seeking gospel-centered music."
            },
            {
                "name": "Jonah Hadlock",
                "location": "Mapleton, UT",
                "stars": 5,
                "review": "I love my dad's music. It always gives me chills when I listen to it. I want to be more like him in many ways. I am grateful that he is my dad and no one else is (not that I don't like anyone else), and I am thankful for the music we have created in our lives to bless others. I hope to do the same (blessing people's lives with my music and pleasing Heavenly Father). I love you dad!"
            },
            {
                "name": "Lisa Pace",
                "location": "Springville, UT",
                "stars": 5,
                "review": "Lyle is one of the Greatest composers of all time, I really enjoy his music, I listen to it every week as I am getting ready for church. One of my favorite songs is Come Thou Fount Of Every Blessing, and There Is A Green Hill Far Away, He really takes the time to compose such good music, I listen to it as I walk to work and back, Good Job! I hope that you keep composing more. Keep Up The Good Work."
            },
            {
                "name": "Dean Hansen",
                "location": "",
                "stars": 5,
                "review": "As a bishop I was privileged to share your music with the sisters in our ward on Mother's Day a couple of different times. And I am listening this morning to the CD our ward gave the Mother's this year. I thank you for your gentle treatment of the hymns of the church. Your music inspires and has blessed my life. As a bishop, I would often play your CD's in the early morning hours as I prepared for the meetings and activities of the day. How I appreciate your sensitivity to the Spirit and how much your music invites that Spirit. For you have blessed my life."
            },
            {
                "name": "Ra Chel Cullimore Jensen",
                "location": "",
                "stars": 5,
                "review": "Lyle - I just wanted to drop you a quick note and tell you thank you. I am the sister-in-law of Kristi Cullimore. As you know, she passed away on Jan. 13th - and your music played an important part in the last few days of her life, even up to the last minutes. Your kindness in playing at the funeral, and your more than generous gesture in giving all those CDs out to the family will always mean so much to all of us who are now missing her in our lives. Thank you for being there, for being such a talented, giving, and caring individual. You will always hold a place in our memories of her, and of all that is good about people and life in general. Thank you so much!"
            },
            {
                "name": "Carl VanLeuven",
                "location": "Provo, UT",
                "stars": 5,
                "review": "Beautiful and sensitive presentations of both arranged music and video. It certainly brings the Spirit of God. I have listened to We Ever Pray for Thee CD many times diving to work and it is an inspirational and uplifting way to start a day. Thank you for your sharing the gift of music with us and bringing the Spirit into our lives. Keep up your missionary labors and may you be blessed by His Spirit in your talents."
            },
            {
                "name": "Glenda Daane",
                "location": "Tallahassee, FL",
                "stars": 5,
                "review": "I just discovered Lyle Hadlock's music through the website Latterday Light & Devotion. I then found this site so I could listen to samples. There is a Green Hill Far Away is beautiful and soothing and I would purchase it for my library. However, I found We Ever Pray for Thee to be too many instruments at one time and it sounds almost electric in some respects and after getting to the third or fourth track, it all began to sound a bit alike. I'm in no way trying to be mean or harsh. This is my honest opinion. There is a Green Hill Far Away experience was like being transported to a peaceful valley sitting next to a placid pond under an oak tree. We Ever Pray for Thee didn't do that. I search out and buy A LOT of music and books online. I am glad to have found Lyle's work and will recommend it to others. Thank you."
            },
            {
                "name": "Jay Taylor",
                "location": "Mapleton, UT",
                "stars": 5,
                "review": "Twice in my life I have sat down to listen to music and for reasons I don't understand, began to cry. One of those two moments was listening to Lyle's CD on a quiet Sunday morning. I felt joy and accomplishment welling up inside me. I'm not a musician and I don't read music. My heart recognized Lyle's gift and I was surprised how deeply I felt it. You will enjoy all his music."
            },
            {
                "name": "Jordan and Aja Floyd",
                "location": "Provo, UT",
                "stars": 5,
                "review": "Absolutely genius. Beautiful melodies that provide a spiritually uplifting atmosphere. Thanks and keep jamming!"
            },
            {
                "name": "Linda and Dave",
                "location": "Springville, UT",
                "stars": 5,
                "review": "Lyle, thank you so much for the beautiful, soothing music to listen to during this time of President Hinckley's passing. It brings a sense of calm to the soul. You're great!"
            },
            {
                "name": "Annette and Roger Andersen",
                "location": "Fukuoka, Japan",
                "stars": 5,
                "review": "On stressful days after a day of doing missionary work, we turn on the Green Hill CD for relaxing comfort. It works every time. We love this music. We look forward to other CDs of this type. Simply wonderful and has helped us with the Lord's work."
            },
            {
                "name": "Matt Hawken",
                "location": "Monrow, WA",
                "stars": 5,
                "review": "Our Bishop opted for the music instead of flowers and/or chocolate for Mother's Day and the sisters loved him even more. A superb fat-free low cholesterol gift that doesn't need water - definitely a big hit."
            },
            {
                "name": "Kelly Call",
                "location": "Orem, UT",
                "stars": 5,
                "review": "My parents gave me copy of There Is A Green Hill Far Away when I was diagnosed with cancer earlier this year. I have listened to it nearly every day for seven months. This music has been a source of comfort and peace. Thank you, I am truly grateful!"
            },
            {
                "name": "Newell Dayley",
                "location": "",
                "stars": 5,
                "review": "Lyle, thanks for sharing the CD There Is A Green Hill Far Away with me. There is a strong sense of peace in your writing. It's beautifully simple and simply beautiful. I hope people are finding your products. Peace is the one thing we have too little of these days. I appreciate your dedication to lifting others with worthy music. May you be blessed with the wisdom and stamina needed to continue your venture."            },
            {
                "name": "Beth Schempp",
                "location": "Elk Ridge, UT",
                "stars": 5,
                "review": "I received the CD There Is A Green Hill Far Away for my birthday from the Relief Society Presidency in my Ward, and I love it. The music is so peaceful, relaxing, and wonderful. It really invites the Spirit into my life when I listen to it. Thanks for such beautiful music!!!!"
            },
            {
                "name": "Anonymous",
                "location": "Canton, GA",
                "stars": 5,
                "review": "Mother's Day our ward gave out a copy of the CD There is a Green Hill Far Away. I want you to know how much I'm enjoying your beautiful music. I play it during my commute to and from work and it relaxes me and puts me in the right spirit. Thank you!"            },
            {
                "name": "Mickey ",
                "location": "Apache Junction, AZ",
                "stars": 5,
                "review": "Wow! Received 'There is a Green Hill Far Away' for Mother's Day [2008]. Very pleasant and relaxing. I can't wait to get the other two."
            },
            {
                "name": "Thomas Carlile",
                "location": "Orem, Utah",
                "stars": 5,
                "review": "I just love your There Is A Green Hill Far Away. Today my wife received a copy at the Ward Mothers' Day program."
            },
            {
                "name": "Bill Freedman",
                "location": "Provo, Utah",
                "stars": 5,
                "review": "We have just loved playing Lyle's Christmas CD in our home this season. Given the choice I would always play Lyle's CD over any other Christmas CD out there."
            },
            {
                "name": "Denise Hadlock",
                "location": "Cedar City, Utah",
                "stars": 5,
                "review": "I received a copy of An Ebony & Ivory Christmas from a family member following my father's death. Days following the funeral I still felt sad and anxious. I decided to listen to the CD all day at work and it was beautiful and comforting. Thank you for sharing your talent Lyle."
            },
            {
                "name": "Cheryl Sakahara",
                "location": "Cedarville, California",
                "stars": 5,
                "review": "I have been a fan for a LONG LONG time!! While leading a children's singing group in Washington we used songs from The Disciple Of Jesus Christ Easter cantata and it was a fantastic program!! While living in Arizona I taught Lyle's If ye Love me keep my commandments (John 14:15) to a youth group they were terrific! I have wanted to see him publish pioneer songs for children. I hope he hears this request!!!"
            },
            {
                "name": "Michelle Deppe",
                "location": "Vienna, Virginia",
                "stars": 5,
                "review": "Thanks for putting your sheet music free on the web. Since I don't have any LDS book stores around I have to find music online. I love your hymn arrangements!"
            },
            {
                "name": "Wendy ",
                "location": "Orem, Utah",
                "stars": 5,
                "review": "My husband fell in love with your music. It was passed on to us by a friend. He shared it with family members and friends and we all love it and listen to it often. Our ward received the Green Hill CD from Mother's Day and it was greatly received. We are looking forward to your Christmas CD. Thank you. Thank you. Thank you. You have added to the peace in our lives."
            },
            {
                "name": "Jeff ",
                "location": "Payson, Utah",
                "stars": 5,
                "review": "Lyle's music means a lot to our family, it has helped us through some trying times. His music fills our homes with the spirit, it truly is inspirational. What can I say beyond that, we are truly grateful for the great gift Lyle has shared with us, and that he is sharing with anyone who hears his music. Great music, from a truly great man."
            },
            {
                "name": "Aaron",
                "location": "Orem, Utah",
                "stars": 5,
                "review": "Lyle's music is such a wonderful gift for families and for friends we enjoy listening to music on the Sabbath as they always bring the spirit into our home and our car. Lyle, thanks so much for sharing your abilities with the rest of us."
            },
            {
                "name": "Jay Risenmay",
                "location": "Rexburg, Idaho",
                "stars": 5,
                "review": "My wife and I have enjoyed our Songs for The Sabbath CD many, many times. We have given it as a gift to several friends and family members. They comment on how much they are also enjoying it, especially as background music when a peaceful, sacred atmosphere is desired. It sets the tone for spiritual preparation. We appreciate Lyle's talents."
            },
            {
                "name": "Nathan Hall",
                "location": "Snowflake, AZ)",
                "stars": 5,
                "review": "Lyle's music is fantastic! We have enjoyed listening to it again and again. He keeps the special spirit that the music possesses while adding a unique flavor to it. We would definitely recommend it 100 percent!"
            },
            {
                "name": "Ashley",
                "location": "Provo, Utah",
                "stars": 5,
                "review": "I love the music that Lyle Hadlock is so inspired to write and arrange. It is the perfect music if you want to invite peace to your life. I love to listen to it on Sunday, on my way to work, or anytime... Listening to it on my way to work prepares and calms me for the stresses of the day that are about to come. His music helps me feel the calm that is so hard to find in this busy world."
            },
            {
                "name": "Monique",
                "location": "Orem, Utah",
                "stars": 5,
                "review": "Lyle’s music is inspirational. I have loaned my CD out to my Mom and am having a hard time getting it back from her because she loves it so much too. I would recommend Lyle’s CD to anyone who wants some uplifting, soul comforting music."
            },
            {
                "name": "Chris Francis",
                "location": "Springville, Utah",
                "stars": 5,
                "review": "I've enjoyed Lyle's There is a Green Hill Far Away for the past several weeks on Sundays, and even while I do the dishes each night! I find that it is a great way to relax and invite the Spirit into my home after a stressful day. I like There is a Green Hill more than some of the other spiritual CDs I have because it is peaceful and simple. The arrangements are soft and quiet and set the perfect spiritual tone! This CD stands out from the crowd and I highly recommend it to anyone!"
            },
            {
                "name": "Michele",
                "location": "Provo, Utah",
                "stars": 5,
                "review": "Lyle's music is wonderful. I gave them to several of my friends at Christmas and I have had so much positive feedback. Each one of my friends listens to the CD There is a Green Hill Far Away for relaxation or just as a peaceful backdrop on the Sabbath."
            },
            {
                "name": "Greg Anderton",
                "location": "Springville, Utah",
                "stars": 5,
                "review": "Lyle's music is truly a breath of fresh air! One's thoughts can't help but be elevated when listening to it. It is very evident that Lyle is playing from the heart. This is the type of music musicians hope to create as a career pinnacle; Lyle seems to have done it on his second CD! A true masterpiece!"
            },
            {
                "name": "Char",
                "location": "Orem, Utah",
                "stars": 5,
                "review": "Lyle's arrangement of music on There Is A Green Hill Far Away is beautiful. I have enjoyed listening to it very much. It brings a peaceful calming spirit to our home."
            },
            {
                "name": "Adrienne",
                "location": "",
                "stars": 5,
                "review": "I think his music is WONDERFUL! I love listening while I'm cooking dinner in the evenings as a way to relax after a long busy day. I also love listening on the Sabbath...it's such a relief to hear something that calms my body and my soul. I truly love his music!"
            },
            {
                "name": "Bill Freedman",
                "location": "",
                "stars": 5,
                "review": "We love the music. It really sets the right tone for the Sabbath day in our home. I prefer Mr. Hadlock's music over any other LDS music we have in the house."
            },
            {
                "name": "Bob McLeod",
                "location": "",
                "stars": 5,
                "review": "A truly heart felt masterpiece that every home should own! Just wonderful!!!!!! This is a really well arranged and heartfelt musical masterpiece. Everyone should own this CD as it truly does invite the spirit into your heart and home. Lyle Hadlock is one of the most talented musicians that I have had the pleasure of listening to in a long time. I hope that we continue to be blessed with his musical talents. Just a wonderful compilation and unique arrangement of hymns, I literally listen to this CD for hours. Thanks Lyle for sharing your talents with us."
            },
            {
                "name": "Bryan Amundson",
                "location": "Birdseye, Utah",
                "stars": 5,
                "review": "Wonderful arrangements of LDS Hymns. I've known Lyle for many years. Not only are his incredible talents shown in this work, but his gentle and kind demeanor also shines through. Lyle's arrangements are incredible - I hope he will continue to bless us with inspiring arrangements for years to come."
            }
        ]
    }]);