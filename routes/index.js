const router = require('express').Router();
const controller = require('../controller');

/*
 * @route      PAGE NOT FOUND
 * @deskripsi  Error 404 PAGE NOT FOUND
 * @access     Public 
 */
router.get('/', controller.renderHomePage);

/*
 * @route      PAGE NOT FOUND
 * @deskripsi  Error 404 PAGE NOT FOUND
 * @access     Public 
 */
router.get('/about', controller.renderAboutPage);

/*
 * @route      PAGE NOT FOUND
 * @deskripsi  Error 404 PAGE NOT FOUND
 * @access     Public 
 */
router.get('/agenda', controller.renderAgendaPage);

/*
 * @route      PAGE NOT FOUND
 * @deskripsi  Error 404 PAGE NOT FOUND
 * @access     Public 
 */
router.get('/contact', controller.renderContactPage);

/*
 * @route      PAGE NOT FOUND
 * @deskripsi  Error 404 PAGE NOT FOUND
 * @access     Public 
 */
router.get('/daftar-panitia', controller.renderDaftarPanitiaPage);

/*
 * @route      PAGE NOT FOUND
 * @deskripsi  Error 404 PAGE NOT FOUND
 * @access     Public 
 */
router.get('/galeri/:title', controller.renderGalleryPage);

/*
 * @route      PAGE NOT FOUND
 * @deskripsi  Error 404 PAGE NOT FOUND
 * @access     Public 
 */

router.get('/panitia-profile/:id', controller.renderPanitiaProfilePage);

/*
 * @route      PAGE NOT FOUND
 * @deskripsi  Error 404 PAGE NOT FOUND
 * @access     Public 
 */
router.use((req, res, next) => {
  res.status(404).render('404');
});

 
/*
 * @route      INTERNAL SERVER ERRROR
 * @deskripsi  Error 500 INTERNAL SERVER ERROR
 * @access     Public 
 */
router.use((err, req, res, next) => { 
  console.log('[500][Internal Server Error] error data: ');
  console.log(err);
  console.log(`[500][Internal Server Error] error msg: ${err.msg} `);
  
  res.status(500).render('500');
});

module.exports = router;