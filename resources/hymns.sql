-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 17, 2016 at 09:30 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `hymnals`
--

-- --------------------------------------------------------

--
-- Table structure for table `hymns`
--

CREATE TABLE IF NOT EXISTS `hymns` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `book` int(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `hymn_num` varchar(5) DEFAULT NULL,
  `preview` varchar(255) NOT NULL,
  `data` longtext NOT NULL,
  `created_at` timestamp NULL DEFAULT '0000-00-00 00:00:00',
  `updated_at` timestamp NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `hymns`
--

INSERT INTO `hymns` (`id`, `book`, `title`, `hymn_num`, `preview`, `data`, `created_at`, `updated_at`) VALUES
(2, 1, 'All Creatures of Our God and King', '002', 'All creatures of our God and King,\r\nLift up your voice with us and sing', '{ "data": "<verse>All creatures of our God and King,Lift up your voice with us and sing :Alleluia! Alleluia! O burning sun with golden beam And silver moon with softer gleam</verse><chorus>Oh, praise Him! Oh, praise Him!Alleluia,alleluia, alleluia!Verse 2</chorus><verse>O rushing wind and breezes soft, O clouds that ride the winds aloft: Oh, praise Him! Alleluia! O rising morn, in praise rejoice, O lights of evening, find a voice.</verse> <verse>O flowing waters, pure and clear, Make music for your Lord to hear. Oh, praise Him! Alleluia! O fire so masterful and bright, Providing us with warmth and light,</verse> <verse>Let all things their Creator bless, And worship Him in humbleness, Oh, praise Him! Alleluia! Oh, praise the Father, praise the Son, And praise the Spirit, three in One!</verse>" } ', '2016-03-14 22:00:00', '2016-03-14 22:00:00'),
(3, 1, 'Praise to the Lord', '001', 'Praise to the Lord, the Almighty, the King of creation!', '{ "data": "<verse>Praise to the Lord, the Almighty, the King of creation!O my soul, praise Him, for He is thy health and salvation!All ye who hear, now to His temple draw near;Join ye in glad adoration!</verse>Praise to the Lord, Who o’er all things so wondrously reigneth,Shieldeth thee under His wings, yea, so gently sustaineth!Hast thou not seen how thy desires e’er have beenGranted in what He ordaineth?<verse></verse><verse>Praise to the Lord, who doth prosper thy work and defend thee;Surely His goodness and mercy here daily attend thee.Ponder anew what the Almighty can do,If with His love He befriend thee.</verse>" } ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 1, 'God Himself Is With Us', '003', 'God Himself is with us', '{ "data": "<verse>God Himself is with us;Let us all adore Him,And with awe appear before Him.God is here within us;Soul, in silence fear Him,Humbly, fervently draw near Him.Now His own who have known God,In worship lowly,Yield their spirits wholly.</verse><verse>Come, abide within me;Let my soul, like Mary,Be Thine earthly sanctuary.Come, indwelling Spirit,With transfigured splendor;Love and honor will I render.Where I go here below,Let me bow before Thee,Know Thee and adore Thee.</verse><verse>Gladly we surrenderEarth’s deceitful treasures,Pride of life and sinful pleasures:Gladly, Lord, we offerThine to be forever,Soul and life and each endeavor.Thou alone shall be knownLord of all our being,Life’s true way decreeing.</verse>" } ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 1, 'Praise, My Soul, the King of Heaven', '004', 'Praise, my soul, the King of heaven', '{ "data": "<verse>Praise, my soul, the King of heaven;To his feet thy tribute bring;Ransomed, healed, restored, forgiven,Who like thee His praise should sing?Praise Him, praise Him, alleluia!Praise the everlasting King.</verse><verse>Praise him for his grace and favorTo our fathers in distress;Praise him still the same forever,Slow to chide and swift to bless:Praise Him, praise Him, alleluia!Glorious in His faithfulness.</verse><verse>Tenderly He shields and spares us;Well our feeble frame he knows;In his hands He gently bears us,Rescues us from all our foes.Praise Him, praise Him, alleluia!Widely yet his mercy flows.</verse><verse>Angels, help us to adore him;Ye behold him face to face;Sun and moon, bow down before him,Dwellers all in time and space.Praise Him, praise Him, alleluia!Praise with us the God of grace.</verse>" } ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 1, 'All My Hope on God Is Founded', '005', 'All my hope on God is founded', '{ "data": "<verse>All my hope on God is founded;He doth still my trust renew.Me through change and chance He guideth,Only good and only true.God unknown, He aloneCalls my heart to be His own.</verse><verse>Pride of man and earthly glory,Sword and crown betray his trust;What with care and toil he buildeth,Tower and temple fall to dust.But God’s power, hour by hour,Is my temple and my tower.</verse><verse>God’s great goodness aye endureth,Deep His wisdom, passing thought;Splendor, light and life attend Him,Beauty springeth out of naught.Love doth stand at His hand;Joy doth wait on His command.</verse><verse>Still from man to God eternal,Sacrifice of praise be done.High above all praises praising,For the gift of Christ His son.Christ doth call one and all:Ye who follow shall not fall.</verse>" } ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 1, 'O Worship the Lord', '006', 'O worship the Lord in the beauty of holiness', '{ "data": "<verse>O worship the Lord in the beauty of holiness,Bow down before Him, His glory proclaim;With gold of obedience, and incense of lowliness,Kneel and adore Him: the Lord is His name.</verse><verse>Low at His feet lay thy burden of carefulness,High on His heart He will bear it for thee,Comfort thy sorrows, and answer thy prayerfulness,Guiding thy steps as may best for thee be.</verse><verse>Fear not to enter His courts in the slendernessOf the poor wealth thou wouldst reckon as thine;Truth in its beauty, and love in its tenderness,These are the offerings to lay on His shrine.</verse><verse>These, though we bring them in trembling and fearfulness,He will accept for the name that is dear;Mornings of joy give for evenings of tearfulness,Trust for our trembling, and hope for our fear.</verse>" } ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 1, 'The Lord in Zion Reigneth', '007', 'The Lord in Zion reigneth, let all the world rejoic', '{ "data": "<verse>The Lord in Zion reigneth, let all the world rejoice,And come before His throne of grace with tuneful heart and voice;The Lord in Zion reigneth, and there His praise shall ring,To Him shall princes bend the knee and kings their glory bring.</verse><verse>The Lord in Zion reigneth, and who so great as He?The depths of earth are in His hands; He rules the mighty sea.O crown His Name with honor, and let His standard wave,Till distant isles beyond the deep shall own His power to save.</verse><verse>The Lord in Zion reigneth, these hours to Him belong;O enter now His temple gates, and fill His courts with song;Beneath His royal banner let every creature fall,Exalt the King of heaven and earth, and crown Him Lord of all.</verse>" } ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 1, 'We Gather Together', '008', 'We gather together to ask the Lord’s blessing', '{ "data": "<verse>We gather together to ask the Lord’s blessing;He chastens and hastens His will to make known.The wicked oppressing now cease from distressing.Sing praises to His Name; He forgets not His own</verse><verse>Beside us to guide us, our God with us joining,Ordaining, maintaining His kingdom divine;So from the beginning the fight we were winning;Thou, Lord, were at our side, all glory be Thine!</verse><verse>We all do extol Thee, Thou leader triumphant,And pray that Thou still our defender wilt be.Let Thy congregation escape tribulation;Thy name be ever praised! O Lord, make us free!</verse>" }', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 1, 'Let All the World in Every Corner Sing', '009', 'Let all the world in every corner sing, My God and King!', '{ "data": "<verse>Let all the world in every corner sing, My God and King!The heavens are not too high, His praise may thither fly;The earth is not too low, His praises there may grow.Let all the world in every corner sing, My God and King!</verse><verse>Let all the world in every corner sing, My God and King!The church with psalms must shout, No door can keep them out;But, above all, the heart must bear the longest part.Let all the world in every corner sing, My God and King!</verse>" } ', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 1, 'Come Christians Join to Sing', '010', 'Come, Christians, join to sing', '{ "data": "<verse>Come, Christians, join to sing,Alleluia! Amen!Loud praise to Christ our King;Alleluia! Amen!Let all, with heart and voice,Before His throne rejoice;Praise is His gracious choice:Alleluia! Amen!</verse><verse>Come, lift your hearts on high;Alleluia! Amen!Let praises fill the sky;Alleluia! Amen!He is our Guide and Friend;To us He’ll condescend;His love shall never end:Alleluia! Amen!</verse><verse>Praise yet our Christ again;Alleluia! Amen!Life shall not end the strain;Alleluia! Amen!On heaven’s blissful shoreHis goodness we’ll adore,Singing forevermore,Alleluia! Amen!</verse>" } ', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
