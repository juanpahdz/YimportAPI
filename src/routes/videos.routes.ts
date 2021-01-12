import {Router} from 'express'
import * as videoCtrl from './videos.controler'

const router = Router();

router.get('/videos', videoCtrl.getVideos)
router.post('/create', videoCtrl.createVideo)
router.put('/update/:id', videoCtrl.updateVideo)
router.delete('/delete/:id', videoCtrl.deleteVideo)
router.get('/video/:id', videoCtrl.getVideo)

export default router;