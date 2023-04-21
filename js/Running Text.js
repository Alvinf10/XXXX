<!DOCTYPE html>
<html>
<head>
	<title>Contoh Running Text</title>
</head>
<body>
	<div style="width:100%; height:100px; background-color:#f5f5f5; overflow:hidden;">
		<div style="width:100%; height:100%; position:relative; overflow:hidden;">
			<div style="position:absolute; top:0; left:100%; white-space:nowrap; font-size:24px;">WebGIS Jual Rumah Bandungkidul</div>
		</div>
	</div>

	<script>
		function move() {
			var elem = document.querySelector('div div div');
			var pos = 100;
			var id = setInterval(frame, 10);

			function frame() {
				if (pos == -100) {
					pos = 100;
				} else {
					pos--;
					elem.style.left = pos + '%';
				}
			}
		}

		move();
	</script>
</body>
</html>