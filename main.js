var sketchProc = function(processingInstance) {
  with (processingInstance) {
    size(600, 600); 
    frameRate(60);

    var colors = {
      skin: color(227, 115, 52),
      stripe: color(239, 173, 112),
      paint: color(216, 65, 28),
      lips: color(187, 59, 25),
      mouthdark: color(41, 15, 15),
      teeth: color(196, 149, 118),
      teethshadow: color(103, 76, 61, 150),
      eyewhite: color(232, 185, 144),
      eyeblack: color(14, 15, 4),
      eyegreen: color(182, 141, 72),
      collar: color(185, 38, 15),
      collarlight: color(186, 56, 35),
      bracelet: color(50, 20, 2),
      hairbackdrop: color(55, 32, 25),
      pendants: color(131, 97, 75)
  };

  noStroke();
  background(23, 71, 97);

  //darkness behind head
  fill(0);
  beginShape();
      vertex(100, 170);
      vertex(300, 170);
      vertex(300, 600);
      vertex(170, 600);
  endShape(CLOSE);

  //neck
  fill(colors.skin);
  beginShape();
      vertex(251, 422);
      bezierVertex(252, 447, 248, 472, 236, 488);
      bezierVertex(208, 498, 174, 506, 148, 517);
      bezierVertex(126, 526, 104, 536, 95, 543);
      bezierVertex(70, 558, 51, 580, 39, 600);
      vertex(575, 600);
      bezierVertex(555, 565, 540, 555, 530, 545);
      bezierVertex(488, 515, 466, 508, 439, 499);
      bezierVertex(421, 493, 406, 488, 390, 480);
      bezierVertex(380, 466, 373, 447, 368, 422);
  endShape(CLOSE);

  //shade at bottom of neck
  fill(0, 20);
  beginShape();
      vertex(415, 524);
      bezierVertex(376, 551, 355, 562, 333, 568);
      bezierVertex(303, 570, 280, 565, 262, 558);
      vertex(262, 600);
      vertex(415, 600);
  endShape(CLOSE);

  //shade on neck - right side
  fill(20, 50);
  beginShape();
      vertex(251, 422);
      bezierVertex(250, 442, 248, 460, 242, 480);
      vertex(250, 509);
      bezierVertex(283, 488, 308, 468, 330, 442);
  endShape(CLOSE);

  //shadow under collar - left side
  fill(40, 230);
  beginShape();
      vertex(396, 600);
      bezierVertex(400, 574, 402, 558, 399, 545);
      bezierVertex(395, 532, 393, 516, 391, 500);
      bezierVertex(389, 480, 377, 460, 369, 427);
      bezierVertex(387, 447, 400, 470, 411, 496);
      bezierVertex(416, 526, 417, 568, 416, 600);
  endShape(CLOSE);

  //frilly shirt under collar - left side
  fill(colors.collarlight);
  beginShape();
      vertex(398, 459);
      bezierVertex(420, 461, 448, 462, 461, 478);
      bezierVertex(462, 487, 466, 492, 498, 500);
      bezierVertex(511, 506, 513, 514, 514, 521);
      bezierVertex(512, 526, 510, 530, 507, 535);
      bezierVertex(509, 542, 514, 544, 516, 548);
      bezierVertex(514, 552, 511, 557, 508, 564);
      bezierVertex(510, 576, 514, 590, 515, 600);
      vertex(421, 600);
      vertex(418, 494);
  endShape(CLOSE);

  //pattern on frilly shirt - left side
  randomSeed(105);
  pushStyle();
      for(var i = 0; i < 200; i+=10) {
          strokeWeight(random(1, 3));
          stroke(255, 30);
          bezier(
              423, i+494, 
              453, i+496 + random(10), 
              477, i+509 + random(10), 
              501 + random(-10, 10), i+507);
          stroke(20, 30);
          bezier(
              423, i+494, 
              453, i+496 + random(10), 
              477, i+509 + random(10), 
              501 + random(-10, 10), i+507);
      }
  popStyle();

  //collar - left side
  fill(colors.collar);
  beginShape();
      vertex(369, 425);
      bezierVertex(382, 444, 393, 458, 401, 476);
      bezierVertex(405, 495, 408, 514, 410, 536);
      bezierVertex(411, 554, 409, 578, 406, 600);
      vertex(426, 600);
      bezierVertex(430, 582, 432, 566, 432, 548);
      bezierVertex(429, 528, 426, 506, 421, 482);
      bezierVertex(406, 454, 388, 439, 369, 425);
  endShape(CLOSE);

  pushStyle();
      noFill();
      stroke(0, 100);
      beginShape();
          vertex(374, 425);
          bezierVertex(387, 444, 398, 458, 406, 476);
          bezierVertex(410, 495, 413, 514, 415, 536);
          bezierVertex(416, 554, 414, 578, 411, 600);
      endShape();
  popStyle();

  //shadow under frilly shirt - right side
  fill(40, 50);
  beginShape();
      vertex(135, 522);
      bezierVertex(131, 532, 131, 542, 132, 559);
      bezierVertex(134, 575, 133, 588, 130, 600);
      vertex(152, 600);
      vertex(150, 524);
  endShape(CLOSE);

  //frilly shirt under collar - right side
  fill(colors.collarlight);
  beginShape();
      vertex(231, 469);
      bezierVertex(210, 472, 199, 472, 195, 478);
      bezierVertex(194, 485, 191, 491, 188, 493);
      bezierVertex(181, 498, 179, 502, 174, 507);
      bezierVertex(164, 509, 152, 513, 133, 517);
      bezierVertex(137, 521, 140, 525, 140, 528);
      bezierVertex(138, 531, 136, 532, 135, 537);
      bezierVertex(136, 540, 136, 542, 136, 548);
      bezierVertex(135, 551, 135, 556, 136, 560);
      bezierVertex(139, 564, 142, 568, 142, 573);
      bezierVertex(140, 578, 142, 587, 145, 591);
      vertex(145, 600);
      vertex(271, 600);
  endShape(CLOSE);

  //pattern on frilly shirt - right side
  randomSeed(105);
  pushStyle();
      for(var i = 0; i < 200; i+=10) {
          strokeWeight(random(1, 3));
          stroke(255, 30);
          bezier(
              150, i+516, 
              180, i+507 + random(10), 
              200, i+498 + random(10), 
              246, i+488);
          stroke(20, 30);
          bezier(
              150, i+516, 
              180, i+507 + random(10), 
              200, i+498 + random(10), 
              246, i+488);
      }
  popStyle();

  //collar - right side
  fill(colors.collar);
  beginShape();
      vertex(250, 443);
      bezierVertex(244, 448, 240, 456, 240, 462);
      bezierVertex(240, 472, 244, 483, 248, 492);
      bezierVertex(253, 505, 256, 521, 257, 530);
      bezierVertex(264, 551, 275, 574, 286, 600);
      vertex(262, 600);
      bezierVertex(253, 582, 246, 562, 239, 540);
      bezierVertex(236, 524, 237, 514, 236, 502);
      bezierVertex(232, 488, 230, 475, 230, 466);
      bezierVertex(233, 456, 238, 449, 250, 443);
  endShape(CLOSE);

  //border at bottom of collar
  pushStyle();
      noFill();
      stroke(0, 70);
      beginShape();
          vertex(262, 600);
          bezierVertex(253, 582, 246, 562, 239, 540);
          bezierVertex(236, 524, 237, 514, 236, 502);
          bezierVertex(232, 488, 230, 475, 230, 466);
          bezierVertex(233, 456, 238, 449, 250, 443);
      endShape();
  popStyle();

  //shade on frilly shirt - right side
  fill(10, 70);
  beginShape();
      vertex(251, 505);
      bezierVertex(243, 508, 238, 511, 234, 514);
      bezierVertex(226, 518, 216, 523, 205, 526);
      bezierVertex(194, 528, 179, 526, 165, 523);
      bezierVertex(156, 520, 148, 516, 143, 510);
      bezierVertex(176, 470, 222, 442, 253, 431);
      bezierVertex(251, 446, 249, 464, 248, 476);
      bezierVertex(247, 484, 249, 494, 251, 505);
  endShape(CLOSE);

  //ear
  fill(41, 18, 17);
  beginShape();
      vertex(182, 334);
      bezierVertex(176, 333, 168, 328, 164, 320);
      bezierVertex(164, 306, 167, 292, 167, 284);
      vertex(172, 270);
  endShape(CLOSE);

  //head
  fill(colors.skin);
  beginShape();
      vertex(180, 90);
      bezierVertex(165, 173, 162, 236, 171, 283);
      bezierVertex(179, 331, 192, 371, 219, 403);
      bezierVertex(243, 425, 273, 445, 300, 448);
      bezierVertex(328, 450, 360, 435, 388, 414);
      bezierVertex(418, 383, 441, 343, 452, 297);
      bezierVertex(460, 236, 455, 152, 442, 90);
      bezierVertex(392, 55, 248, 46, 180, 90);
  endShape(CLOSE);

  //reddish tint on face above stripe
  fill(colors.paint);
  beginShape();
      vertex(175, 300);
      bezierVertex(182, 294, 192, 289, 206, 285);
      bezierVertex(221, 284, 236, 282, 250, 280);
      bezierVertex(264, 276, 274, 270, 286, 262);
      bezierVertex(296, 256, 308, 255, 320, 259);
      bezierVertex(328, 264, 339, 271, 350, 276);
      bezierVertex(363, 280, 379, 284, 393, 287);
      bezierVertex(401, 288, 410, 290, 420, 294);
      bezierVertex(428, 299, 433, 301, 448, 312);
      bezierVertex(453, 286, 456, 259, 457, 236);
      bezierVertex(456, 212, 455, 189, 453, 166);
      bezierVertex(429, 152, 401, 140, 364, 130);
      bezierVertex(328, 124, 284, 123, 254, 128);
      bezierVertex(218, 135, 190, 150, 170, 166);
      bezierVertex(167, 184, 166, 207, 166, 232);
      bezierVertex(167, 254, 170, 277, 175, 300);
  endShape(CLOSE);

  //stripe across face
  fill(colors.stripe);
  beginShape();
      vertex(175, 300);
      bezierVertex(182, 294, 192, 289, 206, 285);
      bezierVertex(221, 284, 236, 282, 250, 280);
      bezierVertex(264, 276, 274, 270, 286, 262);
      bezierVertex(296, 256, 308, 255, 320, 259);
      bezierVertex(328, 264, 339, 271, 350, 276);
      bezierVertex(363, 280, 379, 284, 393, 287);
      bezierVertex(401, 288, 410, 290, 420, 294);
      bezierVertex(428, 299, 433, 301, 448, 312);
      bezierVertex(447, 312, 446, 319, 442, 330);
      bezierVertex(426, 321, 414, 314, 402, 309);
      bezierVertex(389, 306, 377, 304, 362, 301);
      bezierVertex(351, 299, 340, 293, 330, 287);
      bezierVertex(322, 281, 314, 276, 304, 276);
      bezierVertex(294, 278, 283, 286, 276, 291);
      bezierVertex(265, 296, 251, 298, 234, 302);
      bezierVertex(222, 304, 208, 307, 196, 310);
      bezierVertex(189, 314, 184, 318, 180, 323);
      bezierVertex(179, 317, 176, 311, 175, 300);
  endShape(CLOSE);

  //head braclets pieces - left side to right side
  fill(colors.pendants);
  pushStyle();
      strokeWeight(1);
      stroke(0, 120);

      beginShape();
          vertex(390, 124);
          bezierVertex(392, 130, 393, 136, 392, 140);
          bezierVertex(384, 140, 385, 131, 384, 122);
      endShape(CLOSE);

      beginShape();
          vertex(374, 119);
          bezierVertex(378, 130, 379, 136, 378, 139);
          bezierVertex(369, 140, 370, 130, 369, 120);
      endShape(CLOSE);

      beginShape();
          vertex(368, 120);
          bezierVertex(370, 126, 370, 133, 369, 141);
          bezierVertex(359, 142, 360, 136, 357, 120);
      endShape(CLOSE);

      beginShape();
          vertex(357, 120);
          bezierVertex(358, 132, 358, 140, 354, 142);
          bezierVertex(348, 142, 346, 132, 346, 118);
      endShape(CLOSE);

      beginShape();
          vertex(344, 118);
          bezierVertex(345, 129, 345, 142, 339, 143);
          bezierVertex(333, 142, 331, 130, 332, 116);
      endShape(CLOSE);

      beginShape();
          vertex(330, 117);
          bezierVertex(330, 126, 331, 138, 327, 143);
          bezierVertex(318, 144, 316, 132, 316, 116);
      endShape(CLOSE);

      beginShape();
          vertex(316, 116);
          bezierVertex(316, 127, 317, 138, 313, 142);
          bezierVertex(305, 144, 304, 136, 304, 115);
      endShape(CLOSE);

      beginShape();
          vertex(304, 116);
          bezierVertex(303, 126, 304, 139, 300, 142);
          bezierVertex(293, 144, 290, 134, 289, 116);
      endShape(CLOSE);

      beginShape();
          vertex(289, 116);
          bezierVertex(290, 130, 290, 140, 285, 142);
          bezierVertex(278, 142, 276, 130, 277, 117);
      endShape(CLOSE);

      beginShape();
          vertex(277, 117);
          bezierVertex(277, 132, 276, 141, 272, 141);
          bezierVertex(265, 140, 264, 128, 266, 118);
      endShape(CLOSE);

      beginShape();
          vertex(264, 118);
          bezierVertex(263, 129, 263, 138, 258, 139);
          bezierVertex(252, 139, 250, 129, 250, 120);
      endShape(CLOSE);
  popStyle();

  //head bracelet
  fill(colors.bracelet);
  beginShape();
      vertex(450, 148);
      bezierVertex(434, 137, 415, 128, 393, 121);
      bezierVertex(371, 116, 341, 113, 312, 112);
      bezierVertex(282, 112, 252, 116, 224, 124);
      bezierVertex(202, 132, 182, 143, 170, 152);
      vertex(170, 158);
      bezierVertex(184, 148, 202, 137, 224, 128);
      bezierVertex(251, 120, 277, 116, 312, 116);
      bezierVertex(338, 117, 364, 120, 389, 125);
      bezierVertex(412, 132, 432, 142, 452, 156);
  endShape(CLOSE);

  //eyebrow - left side
  pushStyle();
      noFill();
      randomSeed(100);
      for(var i = 0; i < 1; i+=0.01) {
          stroke(random(55, 75), random(35, 50), random(30, 40), 100);

          var x1 = bezierPoint(358, 386, 417, 434, i);
          var y1 = bezierPoint(172, 168, 170, 183, i);

          var x2 = bezierPoint(354, 385, 419, 434, i);
          var y2 = bezierPoint(161, 158, 163, 179, i);

          var yDiff = y1 - y2;

          bezier(
              x1, y1 - random(-1, 1), 
              x1 + random(1, 3), y1 - yDiff * 0.3, 
              x2 + random(1, 2), y2 + yDiff * 0.6, 
              x2 + random(-2, 2), y2 - random(1, 4));
      }
  popStyle();

  //eyebrow - right side
  pushStyle();
      noFill();

      for(var i = 0; i < 1; i+=0.01) {
          stroke(random(55, 75), random(35, 50), random(30, 40), 100);

          var x1 = bezierPoint(189, 207, 240, 267, i);
          var y1 = bezierPoint(182, 169, 165, 173, i);

          var x2 = bezierPoint(188, 209, 242, 264, i);
          var y2 = bezierPoint(181, 160, 155, 163, i);

          var yDiff = y1 - y2;

          bezier(
              x1, y1 - random(-1, 1), 
              x1 + random(1, 3), y1 - yDiff * 0.3, 
              x2 + random(1, 2), y2 + yDiff * 0.6, 
              x2 + random(-2, 2), y2 - random(1, 4));
      }
  popStyle();

  //eyes - left outer (dark)
  fill(colors.eyeblack);
  beginShape();
      vertex(347, 259);
      bezierVertex(350, 247, 355, 235, 362, 225);
      bezierVertex(370, 216, 380, 211, 392, 209);
      bezierVertex(403, 209, 414, 212, 422, 218);
      bezierVertex(430, 224, 434, 233, 434, 242);
      bezierVertex(433, 252, 428, 262, 418, 269);
      bezierVertex(406, 276, 394, 277, 380, 275);
      bezierVertex(368, 272, 357, 268, 352, 264);
  endShape(CLOSE);

  //eyes - left inner (white)
  fill(colors.eyewhite);
  beginShape();
      vertex(349, 258);
      bezierVertex(352, 249, 355, 240, 360, 232);
      bezierVertex(368, 223, 374, 218, 384, 216);
      bezierVertex(392, 215, 402, 216, 412, 220);
      bezierVertex(421, 226, 425, 232, 426, 242);
      bezierVertex(425, 254, 419, 263, 411, 268);
      bezierVertex(401, 273, 389, 274, 377, 272);
      bezierVertex(368, 270, 360, 268, 353, 263);
  endShape(CLOSE);

  //eyeball - left
  fill(colors.eyeblack);
  ellipse(386, 238, 42, 42);
  fill(colors.eyegreen);
  //ellipse(386, 238, 38, 38);

  fill(colors.eyeblack);
  ellipse(386, 238, 20, 20);

  //eye pupil - left side
  pushMatrix();
      pushStyle();
          translate(386, 238);

          noFill();
          strokeWeight(1);

          var n = 1, r = 0;

          randomSeed(100);

          for(var i = 0; i < 360; i+=n) {
              rotate(n);
              r = random(10, 12);
              stroke(random(145, 155), random(120, 130), random(50, 60));
              line(0, -r, 0, -random(17, 19));
              n = ~~random(1, 7);
          }

          n = 1;
          r = 0;
          for(var i = 0; i < 360; i+=n) {
              rotate(n);
              r = random(10, 12);
              stroke(random(120, 125), random(75, 85), random(15, 25));
              line(0, -r, 0, -14);
              n = ~~random(3, 12);
          }
      popStyle();
  popMatrix();

  //eye - white dots
  fill(255, 200);
  ellipse(392, 234, 3, 3);
  fill(255, 100);
  ellipse(388, 241, 3, 3);

  //eyes - right - outer (dark)
  fill(colors.eyeblack);
  beginShape();
      vertex(269, 263);
      bezierVertex(268, 252, 266, 242, 260, 232);
      bezierVertex(254, 223, 245, 215, 235, 210);
      bezierVertex(223, 206, 210, 205, 200, 210);
      bezierVertex(191, 216, 188, 223, 185, 231);
      bezierVertex(182, 240, 184, 248, 189, 256);
      bezierVertex(195, 264, 203, 270, 215, 272);
      bezierVertex(226, 274, 234, 274, 242, 273);
      bezierVertex(250, 271, 258, 270, 264, 267);
  endShape(CLOSE);

  //eyes - right inner (white)
  fill(colors.eyewhite);
  beginShape();
      vertex(266, 262);
      bezierVertex(266, 254, 264, 245, 258, 236);
      bezierVertex(254, 227, 247, 221, 239, 217);
      bezierVertex(231, 213, 220, 211, 208, 214);
      bezierVertex(198, 219, 194, 224, 191, 232);
      bezierVertex(189, 242, 191, 250, 196, 257);
      bezierVertex(204, 265, 215, 268, 226, 269);
      bezierVertex(239, 269, 248, 268, 256, 266);
  endShape(CLOSE);

  //eyeball - right
  fill(colors.eyeblack);
  ellipse(232, 237, 42, 42);
  fill(colors.eyegreen);
  //ellipse(232, 237, 38, 38);
  fill(colors.eyeblack);
  ellipse(232, 237, 20, 20);

  //eye pupil - right side
  pushMatrix();
      pushStyle();
          translate(232, 237);

          noFill();
          strokeWeight(1);

          var n = 1, r = 0;

          randomSeed(102);

          for(var i = 0; i < 360; i+=n) {
              rotate(n);
              r = random(10, 12);
              stroke(random(145, 155), random(120, 130), random(50, 60));
              line(0, -r, 0, -random(17, 19));
              n = ~~random(1, 7);
          }

          n = 1;
          r = 0;
          for(var i = 0; i < 360; i+=n) {
              rotate(n);
              r = random(10, 12);
              stroke(random(120, 125), random(75, 85), random(15, 25));
              line(0, -r, 0, -14);
              n = ~~random(3, 12);
          }
      popStyle();
  popMatrix();

  //eye - white dot
  fill(255, 100);
  ellipse(236, 231, 3, 3);

  //eyes - white curve above eye
  pushStyle();
      noFill();
      stroke(255, 30);
      strokeWeight(2);
      //left
      bezier(355, 220, 368, 208, 388, 202, 406, 202);
      //right
      bezier(262, 223, 256, 215, 248, 208, 240, 204);
  popStyle();

  //eyelashes
  pushStyle();
      noFill();
      stroke(0, 70);
      strokeWeight(1);

      //right eye
      bezier(225, 208, 222, 207, 222, 205, 222, 204);
      bezier(219, 208, 216, 205, 216, 203, 215, 202);
      bezier(216, 208, 213, 205, 211, 200, 209, 198);
      bezier(208, 209, 204, 205, 203, 202, 202, 198);
      bezier(205, 209, 201, 205, 200, 202, 199, 198);
      bezier(204, 211, 200, 208, 197, 206, 195, 202);
      bezier(204, 211, 198, 210, 195, 208, 193, 204);
      bezier(196, 216, 193, 215, 192, 214, 188, 211);
      bezier(192, 220, 191, 220, 189, 219, 186, 218);
      bezier(190, 226, 188, 225, 185, 224, 181, 220);

      //left eye
      bezier(410, 216, 414, 214, 421, 210, 423, 206);
      bezier(407, 216, 411, 214, 418, 210, 420, 206);
      bezier(407, 213, 410, 209, 413, 208, 413, 205);
      bezier(403, 213, 406, 209, 409, 208, 409, 206);
      bezier(399, 210, 402, 209, 404, 206, 406, 203);
      bezier(390, 211, 393, 208, 394, 204, 395, 201);
      bezier(386, 211, 389, 208, 390, 204, 391, 204);
      bezier(382, 211, 382, 208, 382, 207, 383, 206);    
      bezier(419, 220, 422, 220, 424, 216, 425, 213);
  popStyle();

  //triangle - left
  fill(colors.stripe);
  beginShape();
      vertex(428, 358);
      bezierVertex(418, 352, 406, 344, 394, 339);
      bezierVertex(402, 354, 409, 371, 412, 385);
      bezierVertex(418, 377, 424, 369, 428, 358);
  endShape(CLOSE);

  //triangle - right
  fill(colors.stripe);
  beginShape();
      vertex(192, 358);
      bezierVertex(197, 351, 206, 344, 218, 336);
      bezierVertex(210, 352, 203, 366, 203, 380);
      bezierVertex(199, 374, 195, 368, 192, 358);
  endShape(CLOSE);

  //mouth - dark
  fill(colors.mouthdark);
  beginShape();
      vertex(270, 377);
      bezierVertex(278, 370, 288, 364, 296, 362);
      bezierVertex(304, 360, 312, 361, 320, 363);
      bezierVertex(328, 367, 334, 372, 342, 380);
      bezierVertex(330, 389, 320, 389, 310, 391);
      bezierVertex(298, 392, 282, 388, 270, 377);
  endShape(CLOSE);

  //teeth
  fill(colors.teeth);
  beginShape();
      vertex(283, 368);
      vertex(289, 369);
      vertex(290, 366);
      vertex(292, 370);
      vertex(304, 371);
      vertex(305, 366);
      vertex(306, 371);
      vertex(318, 371);
      vertex(320, 368);
      vertex(321, 370);
      vertex(328, 368);
      bezierVertex(318, 358, 290, 358, 283, 368);
  endShape(CLOSE);

  //shading over teeth
  fill(colors.teethshadow);
  beginShape();
      vertex(275, 372);
      bezierVertex(287, 369, 296, 367, 304, 368);
      bezierVertex(315, 367, 324, 368, 335, 371);
      bezierVertex(319, 358, 292, 356, 275, 372);
  endShape(CLOSE);

  //tounge
  fill(250, 14);
  beginShape();
      vertex(274, 381);
      bezierVertex(292, 375, 316, 376, 339, 381);
      bezierVertex(321, 393, 292, 394, 273, 383);
  endShape(CLOSE);

  //upper lip
  fill(colors.lips);
  beginShape();
      vertex(269, 377);
      bezierVertex(272, 364, 281, 354, 291, 350);
      bezierVertex(304, 347, 315, 348, 325, 353);
      bezierVertex(333, 359, 338, 369, 342, 380);
      bezierVertex(334, 374, 325, 368, 316, 365);
      bezierVertex(308, 363, 302, 363, 293, 366);
      bezierVertex(286, 368, 276, 374, 269, 377);
  endShape(CLOSE);

  //shadow under lower lip
  fill(0, 20);
  beginShape();
      vertex(270, 380);
      bezierVertex(286, 400, 309, 404, 339, 385);
      bezierVertex(328, 405, 313, 408, 299, 407);
      bezierVertex(286, 406, 272, 396, 270, 380);
  endShape(CLOSE);

  //lower lip
  fill(colors.lips);
  beginShape();
      vertex(269, 377);
      bezierVertex(278, 382, 289, 386, 300, 388);
      bezierVertex(310, 388, 324, 386, 342, 380);
      bezierVertex(336, 392, 326, 402, 312, 404);
      bezierVertex(294, 406, 278, 399, 269, 377);
  endShape(CLOSE);

  //shadow on lower lip
  fill(0, 20);
  beginShape();
      vertex(270, 380);
      bezierVertex(290, 398, 316, 397, 339, 385);
      bezierVertex(328, 402, 313, 408, 299, 407);
      bezierVertex(286, 406, 272, 396, 270, 380);
  endShape(CLOSE);

  //white lines on lower lips
  pushStyle();
      stroke(252, 193, 156, 15);
      strokeWeight(1);

      for(var i = 0; i < 1; i+= 0.01) {
          var x = bezierPoint(275, 298, 317, 335, i);
          var y = bezierPoint(382, 393, 390, 383, i);

          line(x, y, x, y + random(5, 8));
      }
  popStyle();

  //white lines on upper lips
  pushStyle();
      stroke(252, 193, 156, 8);
      strokeWeight(1);

      for(var i = 0; i < 1; i+= 0.01) {
          var x = bezierPoint(274, 293, 313, 336, i);
          var y = bezierPoint(373, 362, 360, 374, i);

          line(x, y, x, y - random(3, 7));
      }
  popStyle();

  //shade across right side of face
  fill(20, 30);
  beginShape();
      vertex(180, 90);
      bezierVertex(165, 173, 162, 236, 171, 283);
      bezierVertex(179, 331, 192, 371, 219, 403);
      bezierVertex(243, 425, 273, 445, 300, 448);
      bezierVertex(304, 448, 309, 448, 321, 445);
      bezierVertex(317, 447, 281, 439, 256, 415);
      bezierVertex(236, 392, 220, 367, 205, 336);
      bezierVertex(193, 305, 184, 276, 180, 249);
      bezierVertex(179, 221, 180, 186, 185, 148);
      vertex(191, 121);
  endShape(CLOSE);

  //nose

  //nose - right side shading
  fill(20, 30);
  beginShape();
      vertex(279, 297);
      bezierVertex(277, 300, 279, 308, 283, 310);
      bezierVertex(280, 312, 278, 315, 278, 321);
      bezierVertex(272, 318, 269, 308, 279, 297);
  endShape(CLOSE);

  //nose - shading behind dark circle - right side
  fill(20, 30);
  beginShape();
      vertex(287, 308);
      bezierVertex(292, 307, 297, 311, 301, 316);
      bezierVertex(302, 319, 302, 321, 299, 322);
      bezierVertex(296, 322, 292, 320, 288, 320);
      bezierVertex(286, 316, 285, 313, 287, 308);
  endShape(CLOSE);

  //nose - dark circle - right side
  fill(20, 80);
  beginShape();
      vertex(288, 311);
      bezierVertex(288, 313, 288, 315, 292, 316);
      bezierVertex(294, 314, 292, 309, 288, 311);
  endShape(CLOSE);

  //nose - shading behind dark circle - left side
  fill(20, 30);
  beginShape();
      vertex(317, 312);
      bezierVertex(320, 310, 323, 309, 326, 310);
      bezierVertex(329, 312, 330, 315, 330, 317);
      bezierVertex(328, 318, 326, 318, 324, 316);
      bezierVertex(322, 315, 320, 315, 316, 312);
  endShape(CLOSE);

  //nose - dark circle - left side
  fill(20, 80);
  beginShape();
      vertex(320, 311);
      bezierVertex(318, 312, 319, 314, 322, 315);
      bezierVertex(323, 314, 324, 311, 320, 311);
  endShape(CLOSE);

  //nose - curve - left side
  fill(20, 30);
  beginShape();
      vertex(330, 317);
      bezierVertex(338, 318, 340, 310, 340, 302);
      bezierVertex(342, 314, 336, 322, 329, 318);
  endShape(CLOSE);

  //shading around right eye
  fill(0, 5);
  beginShape();
      vertex(222, 192);
      bezierVertex(251, 202, 267, 224, 277, 256);
      bezierVertex(284, 226, 273, 198, 222, 192);
  endShape(CLOSE);

  //hair backdrop
  fill(colors.hairbackdrop);
  beginShape();
      vertex(352, 26);
      bezierVertex(364, 25, 384, 29, 409, 37);
      bezierVertex(426, 47, 448, 67, 462, 92);
      bezierVertex(472, 110, 480, 131, 485, 155);
      bezierVertex(488, 190, 489, 224, 485, 260);
      bezierVertex(477, 296, 473, 336, 470, 394);
      bezierVertex(459, 425, 446, 454, 431, 462);
      bezierVertex(412, 474, 395, 474, 387, 466);
      bezierVertex(378, 460, 372, 442, 368, 428);
      bezierVertex(387, 417, 405, 398, 420, 374);
      bezierVertex(436, 346, 447, 300, 450, 242);
      bezierVertex(448, 199, 446, 152, 440, 119);
      bezierVertex(428, 93, 405, 76, 387, 80);
      bezierVertex(375, 92, 359, 113, 334, 111);
      bezierVertex(308, 110, 288, 111, 263, 114);
      bezierVertex(226, 124, 194, 145, 178, 174);
      bezierVertex(169, 209, 165, 254, 158, 304);
      bezierVertex(154, 348, 152, 383, 148, 442);
      vertex(155, 508);
      vertex(110, 537);
      vertex(100, 157);
      bezierVertex(118, 117, 137, 98, 150, 80);
      bezierVertex(164, 64, 187, 48, 209, 36);
      bezierVertex(234, 22, 262, 18, 286, 18);
      bezierVertex(308, 18, 334, 22, 351, 26);
  endShape(CLOSE);

  beginShape();
      vertex(101, 157);
      bezierVertex(89, 185, 81, 245, 100, 322);
  endShape(CLOSE);

  //HAIR

  noFill();
  strokeWeight(1);
  randomSeed(100);

  var yOffset = 0;

  //end - left side
  for(var i = 424; i < 469; i++) {
      for(var j = 0; j < 6; j++) {
          stroke(random(55, 75), random(35, 50), random(30, 40), 150);
          bezier(
              i+random(0, 5), random(366, 372), 
              i+random(-20, 0), random(395, 400), 
              i+random(-40, -20), random(415, 450), 
              i+random(-50, -40), random(435, 510));
      }
  }

  //bottom - left side initial
  for(var i = 448; i < 480; i++) {
      for(var j = 0; j < 5; j++) {
          stroke(random(55, 75), random(35, 50), random(30, 40), 150);
          bezier(
              i+random(0, 10), random(180, 250), 
              i+random(-20, 40), random(270, 300), 
              i+random(-20, 20), random(390, 410), 
              i+random(-120, 0), random(435, 500));
      }
  }

  //bottom - right side
  randomSeed(104);
  for(var i = 95; i < 170; i++) {
      for(var j = 0; j < 4; j++) {
          stroke(random(55, 75), random(35, 50), random(30, 40), 150);
          bezier(
              i+random(-05, 15), random(170, 200), 
              i-random(15, 60), random(270, 300), 
              i+random(30, 100), random(390, 410), 
              i-random(-10, 50), random(550, 650));
      }
  }

  //middle - right side
  randomSeed(112);
  for(var i = 40; i < 135; i++) {
      stroke(random(55, 75), random(35, 50), random(30, 40), 150);
      bezier(
          random(205, 210), i+random(-10, 10), 
          random(130, 185), i+random(-5, 40), 
          random(75, 185), i+random(40, 90), 
          random(55, 190), i+random(120, 220));
  }

  //middle - center - fringe
  randomSeed(112);
  for(var i = 200; i < 390; i++) {
      for(var j = 0; j < 4; j++) {
          stroke(random(55, 75), random(35, 50), random(30, 40), 150);
          bezier(
              i+random(-5, 5), random(40, 50), 
              i+random(-5, 10), random(65, 75), 
              i+random(-20, 10), random(90, 100), 
              i+random(-40, -10), random(115, 140));
      }
  }

  //bottom - left side
  for(var i = 448; i < 480; i++) {
      for(var j = 0; j < 5; j++) {
          stroke(random(55, 75), random(35, 50), random(30, 40), 150);
          bezier(
              i+random(0, 10), random(200, 250), 
              i+random(-20, 40), random(270, 300), 
              i+random(-20, 20), random(390, 410), 
              i+random(-140, 0), random(435, 500));
      }
  }

  //middle - left side
  for(var i = 440; i < 480; i++) {
      for(var j = 0; j < 2; j++) {
          stroke(random(55, 75), random(35, 50), random(30, 40), 150);
          bezier(
              i+random(0, 10), random(140, 150), 
              i+random(-15, 30), random(190, 195), 
              i+random(-15, 50), random(250, 270), 
              i+random(-30, 20), random(310, 350));
      }
  }

  //middle - left side - curve into face
  for(var i = 440; i < 480; i++) {
      for(var j = 0; j < 3; j++) {
          stroke(random(55, 75), random(35, 50), random(30, 40), 150);
          bezier(
              i+random(0, 10), random(150, 160), 
              i+random(5, 10), random(190, 205), 
              i+random(-35, 20), random(220, 230), 
              i+random(-50, 0), random(250, 280));
      }
  }

  yOffset = 0;
  //semi-top - left side
  for(var i = 350; i < 430; i++) {
      yOffset+=0.4;
      for(var j = 0; j < 3; j++) {
          stroke(random(55, 75), random(35, 50), random(30, 40), 150);
          bezier(
              i+random(0, 10), 25+yOffset, 
              i+random(-10, 10), random(60, 65), 
              i+random(-20, 20), random(75, 80), 
              i+random(-30, 20), random(90, 105));
          bezier(
              i+random(0, 10), 25+yOffset, 
              i+random(-10, 10), random(60, 65), 
              i+random(-20, 20), random(85, 100), 
              i+random(-30, 20), random(115, 145));
      }
  }

  //top - left side
  for(var i = 0; i < 150; i++) {
      stroke(random(55, 75), random(35, 50), random(30, 40), 150);
      bezier(
          350+random(0, 10), 27, 
          350+random(45, 70), random(25, 40), 
          350+random(65, 130), random(35, 80), 
          350+random(70, 145), random(140, 180));
  }

  //middle - center - fringe
  randomSeed(112);
  for(var i = 210; i < 400; i+=1) {
      stroke(random(55, 75), random(35, 50), random(30, 40), 150);
      bezier(
          i+random(-5, 5), random(60, 70), 
          i+random(5, 20), random(75, 85), 
          i+random(10, 40), random(115, 120), 
          i+random(-20, -10), random(125, 170));
  }

  //middle - top
  randomSeed(108);
  for(var i = 25; i < 110; i+=2) {
      for(var j = 0; j < 4; j++) {
          stroke(random(55, 75), random(35, 50), random(30, 40), 150);
          bezier(
              random(340, 360), i+random(-2, 10), 
              random(250, 255), i+random(-50, -10), 
              random(145, 190), i+random(-20, 60), 
              random(90, 145), i+random(70, 280));
      }
  }
  }
}

var canvas = document.getElementById("canvas"); 
var processingInstance = new Processing(canvas, sketchProc);
