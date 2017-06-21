const qr = new QRious();
qr.level = 'H'
qr.size = 500

input = document.getElementById('url');
input.oninput = function() {
	if (input.value){
		qr.value = input.value
		document.getElementById('qrimage').style.display = document.getElementById('savebutton').style.display = 'block';
		document.getElementById('qrimage').appendChild(qr.image);
	}
	else {
		document.getElementById('qrimage').style.display = document.getElementById('savebutton').style.display = 'none';
	}
}
function saveCode() {
	var link = document.createElement('a');
	if (typeof link.download === 'string') {
		document.body.appendChild(link); // Firefox requires the link to be in the body
		link.download = 'qrcode.png';
		qr.size = 1200;
		link.href = qr.toDataURL();
		qr.size = 500;
		link.click();
		document.body.removeChild(link); // remove the link when done
	} else {
		window.open(qr.toDataURL(), '_blank');
	}
}