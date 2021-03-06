define("js/font.js", ($sanitize, dataAndEvents, object) => {
  Object.defineProperty(object, "__esModule", {
    value : true
  });
  let type;
  const generatedColumn = {
    glyphs : {
      "\u6c70" : {
        ha : 1389,
        x_min : 11,
        x_max : 1373,
        o : "m 407 830 l 776 830 q 781 1150 781 960 l 901 1150 q 890 830 895 955 l 1340 830 l 1340 727 l 901 727 q 1373 -38 998 233 q 1280 -141 1318 -92 q 846 564 944 130 q 380 -174 776 152 q 293 -81 336 -125 q 770 727 738 260 l 407 727 l 407 830 m 228 374 q 336 320 293 336 q 168 -179 293 174 l 54 -119 q 228 374 163 125 m 76 787 q 342 608 222 700 q 266 510 298 553 q 11 700 130 618 l 76 787 m 152 1139 q 407 955 315 1025 q 331 857 369 906 q 87 1058 212 960 l 152 1139 m 689 114 l 776 174 q 928 -33 857 60 l 830 -98 q 689 114 770 0 z "
      },
      "\u6dd8" : {
        ha : 1389,
        x_min : 22,
        x_max : 1318,
        o : "m 461 331 l 553 331 l 553 146 l 732 146 l 732 391 l 374 391 l 374 477 l 732 477 l 732 656 l 618 656 q 515 515 564 581 q 429 575 450 559 q 640 873 553 705 l 727 836 q 673 743 700 787 l 1090 743 l 1090 656 l 825 656 l 825 477 l 1166 477 l 1166 391 l 825 391 l 825 146 l 1009 146 l 1009 331 l 1101 331 l 1101 60 l 461 60 l 461 331 m 326 754 q 586 1161 488 944 l 684 1123 q 618 1009 651 1063 l 1318 1009 q 1302 92 1313 315 q 1237 -103 1291 -49 q 1031 -157 1177 -157 q 857 -152 928 -157 q 836 -38 852 -98 q 1031 -54 933 -49 q 1161 -22 1123 -54 q 1199 103 1194 11 q 1215 917 1204 309 l 570 917 q 407 689 488 787 q 326 754 369 716 m 179 385 q 293 336 239 358 q 168 -174 228 87 l 49 -136 q 179 385 119 76 m 87 776 q 326 591 179 711 q 244 505 271 537 q 22 700 98 635 l 87 776 m 141 1134 q 374 933 250 1047 q 293 852 331 890 q 76 1058 146 998 l 141 1134 z "
      },
      "\u88ab" : {
        ha : 1389,
        x_min : 22,
        x_max : 1367,
        o : "m 564 955 l 917 955 l 917 1150 l 1015 1150 l 1015 955 l 1335 955 l 1335 868 q 1270 684 1313 776 q 1177 722 1226 705 q 1232 863 1210 792 l 1015 863 l 1015 597 l 1259 597 l 1259 515 q 1053 92 1194 260 q 1367 -76 1161 -5 q 1291 -179 1329 -125 q 977 22 1096 -92 q 651 -179 841 -98 q 586 -92 618 -136 q 911 92 787 -11 q 727 510 776 250 l 662 510 l 662 434 q 450 -179 662 43 q 380 -98 418 -136 q 564 434 564 114 l 564 955 m 27 792 l 27 890 l 472 890 l 472 787 q 304 537 401 662 l 304 510 q 358 456 336 477 q 467 581 423 526 l 537 521 q 418 396 488 467 q 510 293 467 336 l 439 222 q 304 385 385 298 l 304 -174 l 212 -174 l 212 423 q 54 271 141 347 q 22 385 43 320 q 353 792 239 570 l 27 792 m 662 597 l 917 597 l 917 863 l 662 863 l 662 597 m 1150 510 l 825 510 q 982 168 868 304 q 1150 510 1090 304 m 163 1118 l 250 1161 q 358 971 315 1069 l 260 922 q 163 1118 222 1009 z "
      },
      "\u8d85" : {
        ha : 1389,
        x_min : 22,
        x_max : 1367,
        o : "m 22 -60 q 136 488 125 125 l 233 483 q 217 239 228 347 q 342 65 260 130 l 342 570 l 33 570 l 33 667 l 304 667 l 304 863 l 76 863 l 76 960 l 304 960 l 304 1150 l 407 1150 l 407 960 l 608 960 l 608 863 l 407 863 l 407 667 l 629 667 l 629 570 l 445 570 l 445 358 l 640 358 l 640 260 l 445 260 l 445 5 q 673 -38 543 -33 q 1367 -33 928 -38 q 1335 -136 1345 -92 q 640 -136 922 -141 q 190 103 309 -125 q 81 -184 152 -76 q 22 -60 54 -119 m 711 532 l 1280 532 l 1280 43 l 1177 43 l 1177 103 l 814 103 l 814 38 l 711 38 l 711 532 m 646 1004 l 646 1096 l 1291 1096 q 1275 781 1286 906 q 1112 624 1259 624 q 944 624 1042 618 q 922 732 933 678 q 1090 722 1020 716 q 1177 808 1172 722 q 1194 1004 1188 884 l 933 1004 q 705 575 922 694 q 640 662 678 613 q 830 1004 825 765 l 646 1004 m 1177 439 l 814 439 l 814 195 l 1177 195 l 1177 439 z "
      },
      "\u8d8a" : {
        ha : 1389,
        x_min : 27,
        x_max : 1367,
        o : "m 27 -71 q 136 488 130 114 l 228 483 q 212 233 228 347 q 336 71 260 130 l 336 570 l 33 570 l 33 662 l 298 662 l 298 863 l 76 863 l 76 955 l 298 955 l 298 1150 l 391 1150 l 391 955 l 602 955 l 602 863 l 391 863 l 391 662 l 624 662 l 624 570 l 434 570 l 434 353 l 608 353 l 608 260 l 434 260 l 434 11 q 667 -38 532 -33 q 1367 -33 982 -38 q 1335 -136 1345 -92 q 640 -136 944 -136 q 190 98 315 -130 q 81 -184 157 -76 q 27 -71 54 -119 m 770 87 q 987 336 895 206 q 917 808 933 521 l 760 808 l 760 347 q 895 467 819 396 q 917 369 906 418 q 754 222 836 298 q 694 152 727 195 l 624 222 q 667 353 667 277 l 667 895 l 911 895 q 911 1156 911 1020 l 998 1156 q 1004 895 998 1031 l 1340 895 l 1340 808 l 1009 808 q 1058 445 1020 597 q 1183 711 1134 575 l 1270 673 q 1096 326 1199 488 q 1156 201 1118 255 q 1204 163 1177 163 q 1232 212 1221 163 q 1253 423 1242 298 q 1345 385 1313 396 q 1318 168 1335 239 q 1215 49 1297 49 q 1085 125 1139 49 q 1025 233 1053 174 q 846 27 944 119 q 770 87 819 54 m 1074 1101 l 1145 1150 q 1280 993 1204 1085 l 1199 939 q 1074 1101 1128 1036 z "
      },
      "\uff01" : {
        ha : 1389,
        x_min : 618,
        x_max : 770,
        o : "m 770 776 l 738 250 l 656 250 l 618 776 l 618 993 l 770 993 l 770 776 m 765 0 l 624 0 l 624 141 l 765 141 l 765 0 z "
      },
      "\u4e86" : {
        ha : 1389,
        x_min : 71,
        x_max : 1280,
        o : "m 662 651 q 1090 939 890 792 l 71 939 l 71 1053 l 1280 1053 l 1280 917 q 781 591 1036 754 l 781 92 q 727 -92 781 -38 q 543 -146 678 -146 q 326 -141 467 -146 q 304 -11 315 -76 q 532 -27 434 -27 q 662 98 662 -27 l 662 651 z "
      },
      "\u4f60" : {
        ha : 1389,
        x_min : 16,
        x_max : 1373,
        o : "m 16 483 q 347 1156 233 781 l 456 1123 q 326 808 396 955 l 326 -179 l 222 -179 l 222 602 q 65 363 146 467 q 16 483 43 423 m 1150 624 l 1237 836 l 662 836 q 526 602 597 705 q 445 667 488 635 q 684 1156 597 890 l 792 1112 q 716 939 754 1020 l 1345 939 l 1345 825 l 1248 586 q 1150 624 1188 608 m 846 732 l 955 732 l 955 16 q 787 -163 955 -163 q 608 -163 711 -163 q 586 -43 602 -109 q 760 -54 694 -54 q 846 38 846 -60 l 846 732 m 722 499 q 521 38 629 277 q 418 81 477 60 q 618 532 532 304 l 722 499 m 1166 537 q 1373 98 1259 347 l 1270 49 q 1069 499 1183 266 l 1166 537 z "
      },
      "\u5230" : {
        ha : 1389,
        x_min : 22,
        x_max : 1313,
        o : "m 618 895 q 825 559 727 732 q 716 505 770 537 q 673 608 694 559 q 114 548 380 575 l 65 662 q 201 798 146 705 q 304 971 255 873 l 54 971 l 54 1074 l 830 1074 l 830 971 l 434 971 q 228 662 331 803 q 618 694 423 673 q 526 846 575 776 l 618 895 m 60 374 l 380 374 l 380 543 l 488 543 l 488 374 l 798 374 l 798 277 l 488 277 l 488 38 q 819 81 651 60 q 825 -27 819 33 q 54 -130 439 -71 l 22 -16 q 380 22 195 0 l 380 277 l 60 277 l 60 374 m 1199 1156 l 1313 1156 l 1313 5 q 1145 -163 1313 -163 q 949 -163 1090 -163 q 928 -38 939 -103 q 1112 -49 1047 -49 q 1199 38 1199 -49 l 1199 1156 m 901 1009 l 1015 1009 l 1015 146 l 901 146 l 901 1009 z "
      },
      "\u8f6e" : {
        ha : 1389,
        x_min : 22,
        x_max : 1367,
        o : "m 152 483 l 315 483 l 315 781 l 412 781 l 412 483 l 586 483 l 586 391 l 412 391 l 412 206 q 597 233 510 222 q 597 136 597 201 q 412 114 499 125 l 412 -190 l 315 -190 l 315 103 q 33 65 168 81 l 22 168 q 315 195 174 179 l 315 391 l 49 391 l 49 477 q 174 852 119 678 l 33 852 l 33 944 l 201 944 q 260 1156 233 1053 l 363 1134 q 304 944 336 1036 l 602 944 l 602 852 l 271 852 q 152 483 212 656 m 684 629 l 792 629 l 792 326 q 1118 575 966 429 l 1204 510 q 792 217 998 320 l 792 43 q 884 -43 792 -43 l 1069 -43 q 1177 38 1161 -43 q 1199 239 1194 125 q 1302 201 1210 233 q 1275 5 1291 98 q 1085 -141 1253 -141 l 852 -141 q 684 16 684 -141 l 684 629 m 1009 1139 l 987 1101 q 1367 689 1139 808 q 1297 602 1324 640 q 922 1004 1080 727 q 570 586 765 743 q 499 662 537 629 q 879 1139 738 846 l 1009 1139 z "
      },
      0 : {
        ha : 868,
        x_min : 0,
        x_max : 696,
        o : "m 0 868 l 696 868 l 696 693 l 0 693 l 0 868 m 696 0 l 0 0 l 0 175 l 696 175 l 696 0 m 0 694 l 175 694 l 175 174 l 0 174 l 0 694 m 521 694 l 696 694 l 696 174 l 521 174 l 521 694 z "
      },
      1 : {
        ha : 521,
        x_min : 0,
        x_max : 347,
        o : "m 174 0 l 347 0 l 347 868 l 0 868 l 0 694 l 174 694 l 174 0 z "
      },
      2 : {
        ha : 868,
        x_min : 0,
        x_max : 694,
        o : "m 0 868 l 0 694 l 521 694 l 521 521 l 0 521 l 0 0 l 694 0 l 694 174 l 174 174 l 174 347 l 694 347 l 694 868 l 0 868 z "
      },
      3 : {
        ha : 868,
        x_min : 0,
        x_max : 694,
        o : "m 694 0 l 694 868 l 0 868 l 0 694 l 521 694 l 521 521 l 0 521 l 0 347 l 521 347 l 521 174 l 0 174 l 0 0 l 694 0 z "
      },
      4 : {
        ha : 868,
        x_min : 0,
        x_max : 694,
        o : "m 521 347 l 174 347 l 174 868 l 0 868 l 0 174 l 521 174 l 521 0 l 694 0 l 694 868 l 521 868 l 521 347 z "
      },
      5 : {
        ha : 868,
        x_min : 0,
        x_max : 694,
        o : "m 694 694 l 694 868 l 0 868 l 0 347 l 521 347 l 521 174 l 0 174 l 0 0 l 694 0 l 694 521 l 174 521 l 174 694 l 694 694 z "
      },
      6 : {
        ha : 868,
        x_min : 0,
        x_max : 694,
        o : "m 0 869 l 175 869 l 175 0 l 0 0 l 0 869 m 174 519 l 694 519 l 694 346 l 174 346 l 174 519 m 174 869 l 519 869 l 519 694 l 174 694 l 174 869 m 174 174 l 694 174 l 694 0 l 174 0 l 174 174 m 521 347 l 694 347 l 694 174 l 521 174 l 521 347 z "
      },
      7 : {
        ha : 868,
        x_min : 0,
        x_max : 694,
        o : "m 0 868 l 0 694 l 521 694 l 521 521 l 694 521 l 694 868 l 0 868 m 347 347 l 521 347 l 521 521 l 347 521 l 347 347 m 174 0 l 347 0 l 347 347 l 174 347 l 174 0 z "
      },
      8 : {
        ha : 868,
        x_min : 0,
        x_max : 694,
        o : "m 0 868 l 174 868 l 174 0 l 0 0 l 0 868 m 521 868 l 694 868 l 694 0 l 521 0 l 521 868 m 174 174 l 521 174 l 521 0 l 174 0 l 174 174 m 174 868 l 521 868 l 521 693 l 174 693 l 174 868 m 174 521 l 521 521 l 521 346 l 174 346 l 174 521 z "
      },
      9 : {
        ha : 868,
        x_min : 0,
        x_max : 696,
        o : "m 0 521 l 696 521 l 696 346 l 0 346 l 0 521 m 0 868 l 694 868 l 694 694 l 0 694 l 0 868 m 0 696 l 175 696 l 175 519 l 0 519 l 0 696 m 521 696 l 694 696 l 694 521 l 521 521 l 521 696 m 521 349 l 696 349 l 696 -1 l 521 -1 l 521 349 m 174 174 l 521 174 l 521 -1 l 174 -1 l 174 174 z "
      },
      "+" : {
        ha : 694,
        x_min : 0,
        x_max : 521,
        o : "m 174 174 l 347 174 l 347 347 l 521 347 l 521 521 l 347 521 l 347 694 l 174 694 l 174 521 l 0 521 l 0 347 l 174 347 l 174 174 z "
      },
      "-" : {
        ha : 694,
        x_min : 0,
        x_max : 521,
        o : "m 0 521 l 0 347 l 521 347 l 521 521 l 0 521 z "
      }
    },
    familyName : "Microsoft YaHei",
    ascender : 1636,
    descender : -296,
    underlinePosition : -119,
    underlineThickness : 80,
    boundingBox : {
      yMin : -186,
      xMin : -220,
      yMax : 1706,
      xMax : 1763
    },
    resolution : 1E3,
    original_font_information : {
      format : 0,
      copyright : "`2005 Microsoft Corporation. All rights reserved.",
      fontFamily : "Microsoft YaHei",
      fontSubfamily : "Regular",
      uniqueID : "Microsoft YaHei-Regular",
      fullName : "Microsoft YaHei",
      version : "Version 0.71",
      postScriptName : "MicrosoftYaHei",
      trademark : "Microsoft YaHei is either a registered trademark or a trademark of Microsoft Corporation in the United States and/or other countries.",
      manufacturer : "Microsoft Corporation",
      designer : "Founder",
      description : "Microsoft YaHei is a Simplified Chinese font developed by taking advantage of ClearType technology, and it provides excellent reading experience particularly onscreen. The font is very legible at small sizes.",
      manufacturerURL : "http://www.microsoft.com/typography",
      designerURL : "http://www.founder.com.cn/cn",
      licence : "\r\nNOTIFICATION OF LICENSE AGREEMENT \r\n\r\nThis font software is part of the Microsoft software product in which it was included and is provided under the end user license agreement (\u201cEULA\u201d) for that Microsoft software product. The terms and conditions of the EULA govern the use of font software. Please refer to the applicable Microsoft product EULA if you have any questions about how you may use this font software. Microsoft reserves all rights that are not expressly granted in the EULA. For products that may have installed this font please see the license link.\r\n",
      licenceURL : "http://www.microsoft.com/typography/fonts"
    },
    cssFontWeight : "normal",
    cssFontStyle : "normal"
  };
  (new ((source => {
    if (source && source.__esModule) {
      return source;
    }
    const obj = {};
    if (null != source) {
      let prop;
      for (prop in source) {
        if (Object.prototype.hasOwnProperty.call(source, prop)) {
          obj[prop] = source[prop];
        }
      }
    }
    return obj.default = source, obj;
  })($sanitize("./lib/three")).FontLoader)).load(JSON.stringify(generatedColumn), fx => {
    /** @type {string} */
    type = fx;
  });
  object.default = type;
});
