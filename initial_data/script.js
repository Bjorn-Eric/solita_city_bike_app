/**
 * This script filters the rows in the input CSV file based on the following criteria:
 * 1. Covered distance (m) >= 10
 * 2. Duration (sec.) >= 1
 * The filtered rows are written to the output CSV file.
 */

const fs = require('fs');
const csv = require('csv-parser');
const { createObjectCsvWriter } = require('csv-writer');

// Define the path to the input and output CSV files
const inputFilePath = '2021-07.csv';
const outputFilePath = 'output3.csv';

// Create a read stream to read the input CSV file
const readStream = fs.createReadStream(inputFilePath);

// Create a write stream to write the output CSV file
const writeStream = fs.createWriteStream(outputFilePath);

// Create a CSV writer to write the filtered rows
const csvWriter = createObjectCsvWriter({
  path: outputFilePath,
  header: [], // No header in the output file since we're copying the header from the input file
});

// Define the filtering criteria (distance < 10 and duration < 1)
const distanceThreshold = 10;
const durationThreshold = 1;

let headerWritten = false;

// Process the CSV file
readStream
  .pipe(csv())
  .on('data', (row) => {
    // Parse the distance and duration values from the row
    const distance = parseFloat(row['Covered distance (m)']);
    const duration = parseFloat(row['Duration (sec.)']);

    // Check if the row meets the filtering criteria
    if (distance >= distanceThreshold && duration >= durationThreshold) {
      if (!headerWritten) {
        // Write the header to the output CSV file
        writeStream.write(`${Object.keys(row).join(',')}\n`);
        headerWritten = true;
      }
      // Write the filtered row to the output CSV file
      writeStream.write(`${Object.values(row).join(',')}\n`);
    }
  })
  .on('end', () => {
    writeStream.end();

    console.log('Filtering completed. Output file generated:', outputFilePath);
  });
