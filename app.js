
import DateService from './services/dateService.js';
import FileService from './services/fileService.js';

try {
    // Get current date and time
    const now = DateService.getCurrentDateTime();
    console.log('Current DateTime:', now);

    // Write message to file
    const file = 'sample.txt';
    // FileService.writeMessageToFile(file, `Hello! The time is ${now}`);
    // console.log('Message written to file.');

    // Read message from file (will error if file does not exist)
    const message = FileService.readMessageFromFile(file);
    console.log('Read from file:', message);

    // Read and validate sample.txt
    const sampleRaw = FileService.readMessageFromFile('sample.txt');
    const sampleData = JSON.parse(sampleRaw);
    // Define expected schema: field name -> type
    const schema = {
        id: 'string',
        name: 'string',
        age: 'number',
        email: 'string',
        date: 'string'
    };
    FileService.validateFileData(sampleData, schema);
    console.log('sample.txt validated successfully');

    // This will throw an error due to invalid format
    const formattedDate = DateService.parseDateString('12/31/2025');
    console.log('Parsed date:', formattedDate);
} catch (err) {
    console.error('Error:', err);
}
