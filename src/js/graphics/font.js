var defs = {
	a: [
		[1,1,1],
		[1, ,1],
		[1,1,1],
		[1, ,1],
		[1, ,1]
	],
	b: [
		[1,1,1],
		[1, ,1],
		[1,1, ],
		[1, ,1],
		[1,1,1]
	],
	c: [
		[1,1,1],
		[1, , ],
		[1, , ],
		[1, , ],
		[1,1,1]
	],
	d: [
		[1,1,0],
		[1, ,1],
		[1, ,1],
		[1, ,1],
		[1,1,1]
	],
	e: [
		[1,1,1],
		[1, , ],
		[1,1, ],
		[1, , ],
		[1,1,1]
	],
	f: [
		[1,1,1],
		[1, , ],
		[1,1, ],
		[1, , ],
		[1, , ]
	],
	g: [
		[1,1,1],
		[1, , ],
		[1, , ],
		[1, ,1],
		[1,1,1]
	],
	h: [
		[1, ,1],
		[1, ,1],
		[1,1,1],
		[1, ,1],
		[1, ,1]
	],
	i: [
		[1,1,1],
		[ ,1, ],
		[ ,1, ],
		[ ,1, ],
		[1,1,1]
	],
	/*j: [
		[ , ,1],
		[ , ,1],
		[ , ,1],
		[1, ,1],
		[1,1,1]
	],*/
	k: [
		[1, ,1],
		[1, ,1],
		[1,1, ],
		[1, ,1],
		[1, ,1]
	],
	l: [
		[1, ,0],
		[1, , ],
		[1, , ],
		[1, , ],
		[1,1,1]
	],
	m: [
		[1, ,1],
		[1,1,1],
		[1, ,1],
		[1, ,1],
		[1, ,1]
	],
	n: [
		[1,1,1],
		[1, ,1],
		[1, ,1],
		[1, ,1],
		[1, ,1]
	],
	o: [
		[1,1,1],
		[1, ,1],
		[1, ,1],
		[1, ,1],
		[1,1,1]
	],
	p: [
		[1,1,1],
		[1, ,1],
		[1,1,1],
		[1, , ],
		[1, , ]
	],
	r: [
		[1,1,1],
		[1, ,1],
		[1,1, ],
		[1, ,1],
		[1, ,1]
	],
	s: [
		[1,1,1],
		[1, , ],
		[1,1,1],
		[ , ,1],
		[1,1,1]
	],
	t: [
		[1,1,1],
		[ ,1, ],
		[ ,1, ],
		[ ,1, ],
		[ ,1, ]
	],
	u: [
		[1, ,1],
		[1, ,1],
		[1, ,1],
		[1, ,1],
		[1,1,1]
	],
	v: [
		[1, ,1],
		[1, ,1],
		[1, ,1],
		[1, ,1],
		[ ,1, ]
	],
	w: [
		[1, ,1, ,1],
		[1, ,1, ,1],
		[1, ,1, ,1],
		[1, ,1, ,1],
		[ ,1, ,1, ]
	],
	x: [
		[1, ,1],
		[1, ,1],
		[ ,1, ],
		[1, ,1],
		[1, ,1]
	],
	y: [
		[1, ,1],
		[1, ,1],
		[1,1,1],
		[ ,1, ],
		[ ,1, ]
	],
	'\'': [
		[1]
	],
	'.': [
		[0],
		[0],
		[0],
		[0],
		[1]
	],
	' ': [
		[ ,0],
		[ , ],
		[ , ],
		[ , ],
		[ , ]
	],
	/*'-': [
		[ ,0],
		[ , ],
		[1,1],
		[ , ],
		[ , ]
	],*/
	':': [
		[0],
		[1],
		[ ],
		[1],
		[ ]
	],
	'?': [
		[1,1,1],
		[ , ,1],
		[ ,1,1],
		[ , , ],
		[ ,1, ]
	],
	'!': [
		[ ,1, ,1,0],
		[1,1,1,1,1],
		[1,1,1,1,1],
		[ ,1,1,1, ],
		[ , ,1, , ]
	],
	'1': [
		[1,1,0],
		[ ,1, ],
		[ ,1, ],
		[ ,1, ],
		[1,1,1]
	],
	'2': [
		[1,1,1],
		[ , ,1],
		[1,1,1],
		[1, , ],
		[1,1,1]
	],
	'3': [
		[1,1,1],
		[ , ,1],
		[ ,1,1],
		[ , ,1],
		[1,1,1]
	],
	'4': [
		[1, ,0],
		[1, , ],
		[1, ,1],
		[1,1,1],
		[ , ,1]
	],
	'5': [
		[1,1,1],
		[1, , ],
		[1,1, ],
		[ , ,1],
		[1,1, ]
	],
	'6': [
		[1,1,1],
		[1, , ],
		[1,1,1],
		[1, ,1],
		[1,1,1]
	],
	'7': [
		[1,1,1],
		[ , ,1],
		[ ,1, ],
		[ ,1, ],
		[ ,1, ]
	],
	'8': [
		[1,1,1],
		[1, ,1],
		[1,1,1],
		[1, ,1],
		[1,1,1]
	],
	'9': [
		[1,1,1],
		[1, ,1],
		[1,1,1],
		[ , ,1],
		[1,1,1]
	],
	'0': [
		[1,1,1],
		[1, ,1],
		[1, ,1],
		[1, ,1],
		[1,1,1]
	],
	'(': [
		[ ,1],
		[1],
		[1],
		[1],
		[ ,1]
	],
	')': [
		[1, ],
		[ , 1],
		[ , 1],
		[ , 1],
		[1]
	]
};

function drawText(r, t, x, y, s, c){
	r.fillStyle = c;

	for(var i = 0 ; i < t.length ; i++){
		var def = defs[t.charAt(i)];

		for(var row = 0 ; row < def.length ; row++){
			for(var col = 0 ; col < def[row].length ; col++){
				if(def[row][col]){
					r.fillRect(x + col * s, y + row * s, s, s);
				}
			}
		}

		x += def[0].length * s + s;
	}
}

function button(t){
	return cache(440, 100, function(c, r){
		r.fillStyle = '#444';
		r.fillRect(0, 90, 440, 10);

		r.fillStyle = '#fff';
		r.fillRect(0, 0, 440, 90);

		drawText(r, '::' + t + '()', 100, 20, 10, '#000');

		r.beginPath();
		r.moveTo(40, 20);
		r.lineTo(80, 45);
		r.lineTo(40, 70);
		r.fill();
	});
}
