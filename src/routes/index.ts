import { Router } from 'express'
import { createContact, getContacts, getContactById, deleteContact, editContact } from '../controllers/index.controller'

const router = Router()

router.get('/v1/agenda', getContacts)
router.get('/v1/agenda/:id', getContactById)
router.post('/v1/agenda', createContact)
router.delete('/v1/agenda/:id', deleteContact)
router.put('/v1/agenda/:id', editContact)

export default router