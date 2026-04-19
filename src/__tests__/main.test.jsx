import { vi } from 'vitest'

const renderMock = vi.fn()
const createRootMock = vi.fn(() => ({ render: renderMock }))

vi.mock('react-dom/client', () => ({
  createRoot: createRootMock,
}))

describe('main entrypoint', () => {
  test('creates root and renders app', async () => {
    const rootElement = document.createElement('div')
    rootElement.id = 'root'
    document.body.innerHTML = ''
    document.body.appendChild(rootElement)

    await import('../main')

    expect(createRootMock).toHaveBeenCalledWith(rootElement)
    expect(renderMock).toHaveBeenCalledTimes(1)
  })
})
