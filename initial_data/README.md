# CSV Filtering Script

This script (script.js) filters rows in an input CSV file based on specific criteria and writes the filtered rows to an output CSV file.

## Criteria

The script filters the rows based on the following criteria:

1. Covered distance (m) >= 10
2. Duration (sec.) >= 1

## Usage

1. Ensure that you have the necessary dependencies installed: `csv-parser`, `csv-writer`.
2. Set the paths for the input and output CSV files by modifying the `inputFilePath` and `outputFilePath` variables.
3. Run the script.

```shell
node script.js
```

## Dependencies

- `fs`: Node.js file system module
- `csv-parser`: Library for parsing CSV files
- `csv-writer`: Library for writing CSV files

## How It Works

1. The script creates read and write streams to handle the input and output CSV files.
2. A CSV writer is initialized to write the filtered rows to the output file.
3. The script defines the filtering criteria: `distanceThreshold` and `durationThreshold`.
4. The CSV file is processed using the `csv-parser` library.
5. For each row in the input CSV file:
   - The script parses the distance and duration values from the row.
   - If the row meets the filtering criteria, it is written to the output CSV file.
6. Once all rows are processed, the script ends the write stream and logs a completion message.

## Output

The filtered rows that meet the specified criteria are written to the output CSV file. The output file will be created at the path specified in the `outputFilePath` variable.

Example output file: `output3.csv`

**Note:** The script assumes that the input CSV file has a header row. The header row is copied to the output file, and the filtered rows are appended below it.