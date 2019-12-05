const fs = require('fs');

const getAllData = () => (new Promise((resolve, reject) => {
	fs.readFile('./database.json', (err, data) => {
		if(err) reject(err);
		else resolve(JSON.parse(data));
	})
}));

async function renderHomePage(req, res, next) {
	res.render('home'); 
}

async function renderAboutPage(req, res, next) {
	res.render('about');
}

async function renderAgendaPage(req, res, next) {
	res.render('agenda'); 
}

async function renderContactPage(req, res, next) {
	res.render('contact'); 
}

async function renderDaftarPanitiaPage(req, res, next) {
	try {

  	let data = await getAllData();
  	data = data.panitia;
  	res.status(200).render('daftar-panitia', { data });

  } catch(err) {
 	 	// Error 505 Status Code
    console.log('[Error][500][Internal Server Error] Error: ');
    console.log(err);
    next(err); 
 	}
}

async function renderGalleryPage(req, res, next) {
  try {
    const galeriTitle = req.params.title;
    console.log(galeriTitle);
    let data = await getAllData();

    data = await data.galeri.filter(gal => gal.title == galeriTitle);
		
    console.log(data.length);

    if(data.length !== 0) {
      res.status(200).render('galeri', { data });
    } else {
      // 404
      res.status(404).render('404');
    }

  } catch(err) {
 		// Error 505 Status Code
    console.log('[Error][500][Internal Server Error] Error: ');
    console.log(err);
    next(err); 
	}
}

async function renderPanitiaProfilePage(req, res, next) {
  try {

  	const panatiaId = req.params.id;

  	console.log(panatiaId);
  	let data = await getAllData();
  	data = data.panitia.filter(pan => pan.id == panatiaId)

  	console.log(data);
    if(data.length !== 0) {
      res.status(200).render('panitia-profile', { data: data[0] });
    } else {
      // 404
      res.status(404).render('404');
    }
  } catch(err) {
 	 	// Error 505 Status Code
    console.log('[Error][500][Internal Server Error] Error: ');
    console.log(err);
    next(err); 
 }
}

module.exports = {
	renderHomePage,
	renderAboutPage,
	renderAgendaPage,
	renderContactPage,
	renderDaftarPanitiaPage,
	renderGalleryPage,
	renderPanitiaProfilePage	
}