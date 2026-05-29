/**
 * generate-cv-manifest.mjs
 *
 * Scans src/assets/CVs/ for PDF files matching the naming convention:
 *   YYYY-MM-Iasonas_CV_<language>.pdf
 *
 * Writes src/data/cv-manifest.json with:
 *   - languages        list of supported languages + display labels
 *   - currentByLanguage  most recent file per language (by YYYY-MM prefix, desc)
 *   - archiveByLanguage  all files per language sorted newest-first (includes current)
 *
 * Run automatically via `predev` and `prebuild` npm hooks.
 * Add new languages by extending `allowedLanguages` and `languageLabels`.
 *
 * NOTE: `grouped` object is now dynamically generated from `allowedLanguages`.
 */
import { mkdir, readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')

const cvDir = path.join(projectRoot, 'src', 'assets', 'CVs')
const manifestDir = path.join(projectRoot, 'src', 'data')
const manifestPath = path.join(manifestDir, 'cv-manifest.json')

const allowedLanguages = ['english', 'greek']
const languageLabels = {
	english: 'English',
	greek: 'Greek (not available)',
}

function validateLanguageConfig() {
	const missingLabels = allowedLanguages.filter((language) => !(language in languageLabels))
	if (missingLabels.length > 0) {
		throw new Error(`Missing languageLabels for: ${missingLabels.join(', ')}`)
	}

	const extraLabels = Object.keys(languageLabels).filter(
		(language) => !allowedLanguages.includes(language),
	)
	if (extraLabels.length > 0) {
		throw new Error(`languageLabels contains unsupported languages: ${extraLabels.join(', ')}`)
	}
}

const filenameRegex = /^(\d{4})-(0[1-9]|1[0-2])-Iasonas_CV_([a-z]+)\.pdf$/i

function compareCvEntriesDesc(left, right) {
	if (left.versionKey !== right.versionKey) {
		return right.versionKey.localeCompare(left.versionKey)
	}

	return right.filename.localeCompare(left.filename)
}

async function generateManifest() {
	validateLanguageConfig()

	let files = []

	try {
		files = await readdir(cvDir)
	} catch (error) {
		console.warn(`Warning: Could not read CV directory at ${cvDir}. Continuing with empty file list.`)
		console.warn(`Error details: ${error.message}`)
		files = []
	}

	const grouped = Object.fromEntries(allowedLanguages.map((language) => [language, []]))

	for (const filename of files) {
		const match = filename.match(filenameRegex)
		if (!match) {
			continue
		}

		const language = match[3]
		if (!allowedLanguages.includes(language)) {
			continue
		}

		grouped[language].push({
			filename,
			versionKey: `${match[1]}-${match[2]}`,
		})
	}

	for (const language of allowedLanguages) {
		grouped[language].sort(compareCvEntriesDesc)
	}

	const manifest = {
		generatedAt: new Date().toISOString(),
		sourceDir: 'src/assets/CVs',
		filenamePattern: 'YYYY-MM-Iasonas_CV_<language>.pdf',
		defaultLanguage: 'english',
		languages: allowedLanguages.map((code) => ({
			code,
			label: languageLabels[code],
		})),
		currentByLanguage: Object.fromEntries(
			allowedLanguages.map((language) => [language, grouped[language][0]?.filename ?? null]),
		),
		archiveByLanguage: Object.fromEntries(
			allowedLanguages.map((language) => [
				language,
				grouped[language].map((entry) => entry.filename),
			]),
		),
	}

	await mkdir(manifestDir, { recursive: true })
	await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')

	const validCount = allowedLanguages.reduce(
		(total, language) => total + grouped[language].length,
		0,
	)

	console.log(`Generated CV manifest: ${validCount} valid file(s).`)
}

generateManifest().catch((error) => {
	console.error('Failed to generate CV manifest.')
	console.error(error)
	process.exit(1)
})
