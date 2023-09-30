import { Router } from 'express'
import { TimeController } from './controllers/TimeController'
import { TitulosController } from './controllers/TitulosController';

const routes = Router();

routes.post('/time', new TimeController().create)
routes.get('/time', new TimeController().list)
routes.get('/time/:idTime', new TimeController().listById)
routes.put('/time/:idTime', new TimeController().update)
routes.post('/titulos', new TitulosController().create)
routes.delete('/titulos/:idTitulos', new TitulosController().delete)
routes.put('/titulos/:idTitulos', new TitulosController().update)
routes.get('/titulos', new TitulosController().list)

export default routes