import { readFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import { join, dirname } from 'path'

const readJsonFile = async (path) => {
    const data = await readFile(path)
    return JSON.parse(data)
}

const getFilePath = (fileName) => {
    const __fileName = fileURLToPath(import.meta.url)
    const __dirName = dirname(__fileName)
    return join(__dirName, fileName)
}

export { getFilePath, readJsonFile }
