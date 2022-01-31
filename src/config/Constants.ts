import 'dotenv/config'
export const config = {
	API_URL: 'http://localhost:5000',
	MONGO_CONNECTION:
		`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@<${process.env.DATABASE}.yptlq.mongodb.net/url-shortener-dio?retryWrites=true&w=majority`,
}