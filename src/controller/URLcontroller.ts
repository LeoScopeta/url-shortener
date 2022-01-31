import { Request, Response } from 'express'
import shortId from 'shortid'

export class URLController {
	public async shorten(req: Request, response: Response): Promise<void> {
		const { originURL } = req.body
		const hash = shortId.generate()
        const shortURL = `${config.API_URL}/${hash}`
        response.json({  originURL, hash, shortURL})
	}
    public async redirect(req: Request, response: Response): Promise<void> {
		const { hash } = req.params
		const url = await URLModel.findOne({ hash })

		if (url) {
			response.redirect(url.originURL)
			return
		}

		response.status(400).json({ error: 'URL not found' })
	}
}