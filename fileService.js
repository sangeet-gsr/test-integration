// Service 2: FileService (as plain functions)
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const writeMessageToFile = (filename, message) => {
    const filePath = path.join(__dirname, filename);
    fs.writeFileSync(filePath, message);
    return filePath;
};

const readMessageFromFile = (filename) => {
    // error created for testing: file may not exist or is empty
    const filePath = path.join(__dirname, filename);
    const content = fs.readFileSync(filePath, 'utf8');
    if (!content) {
        // error created for testing: file is empty
        throw new Error('File is empty');
    }
    return content;
};

export default {
    writeMessageToFile,
    readMessageFromFile,
    validateFileData
};

// Validate that the object has required fields and correct types
function validateFileData(data, schema) {
    for (const [key, type] of Object.entries(schema)) {
        if (!(key in data)) {
            throw new Error(`Missing required field: ${key}`);
        }
        if (typeof data[key] !== type) {
            throw new Error(`Field '${key}' should be of type '${type}', got '${typeof data[key]}'`);
        }
    }
    return true;
}
