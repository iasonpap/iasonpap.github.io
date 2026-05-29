import { useMemo, useState } from 'react'
import cvManifest from '../data/cv-manifest.json'

const cvAssetModules = import.meta.glob('../assets/CVs/*.pdf', {
  eager: true,
  import: 'default',
})

const cvAssetUrlByFilename = new Map(
  Object.entries(cvAssetModules).map(([modulePath, url]) => [
    modulePath.split('/').at(-1),
    url,
  ]),
)

function CV() {
  const languages = cvManifest.languages ?? []
  const [selectedLanguage, setSelectedLanguage] = useState(cvManifest.defaultLanguage ?? 'english')

  const selectedFilename = cvManifest.currentByLanguage?.[selectedLanguage] ?? null
  const selectedUrl = selectedFilename ? cvAssetUrlByFilename.get(selectedFilename) ?? null : null

  const archiveItems = useMemo(() => {
    const files = cvManifest.archiveByLanguage?.[selectedLanguage] ?? []

    return files
      .map((filename) => ({
        filename,
        url: cvAssetUrlByFilename.get(filename) ?? null,
      }))
      .filter((item) => item.url)
  }, [selectedLanguage])

  const showCv = Boolean(selectedFilename && selectedUrl)

  return (
    <section className="page cv-page">
      <h1>Curriculum Vitae</h1>
      <p>Select language and view latest available CV version.</p>

      <div className="cv-controls">
        <label htmlFor="cv-language">Language</label>
        <select
          id="cv-language"
          value={selectedLanguage}
          onChange={(event) => setSelectedLanguage(event.target.value)}
        >
          {languages.map((language) => (
            <option key={language.code} value={language.code}>
              {language.label}
            </option>
          ))}
        </select>
      </div>

      {showCv ? (
        <div className="cv-content">
          <div className="cv-actions">
            <a href={selectedUrl} target="_blank" rel="noreferrer" className="cv-download-link">
              Download current CV ({selectedLanguage})
            </a>
            <span className="cv-filename">Current file: {selectedFilename}</span>
          </div>

          <iframe className="cv-frame" title={`CV preview (${selectedLanguage})`} src={selectedUrl} />

          {archiveItems.length > 0 ? (
            <div className="cv-archive">
              <h2>Archive ({selectedLanguage})</h2>
              <ul>
                {archiveItems.map((item) => (
                  <li key={item.filename}>
                    <a href={item.url} target="_blank" rel="noreferrer">
                      {item.filename}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      ) : (
        <div className="placeholder-card">CV is not available right now.</div>
      )}
    </section>
  )
}

export default CV
