const fs = require('fs');
const csv = require('csv-parser');
const path = require('path');

const importModel = require("../model/importModel");

exports.importCsv = (req, res) => {
    console.log(req.file);
    const csvFilePath = __basedir + "/uploads/" + req.file.filename;
    fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', async (data) => {
        console.log(data); // Verify the structure of the data object

        const studentName = data.student_name; // Update property names
        const studentId = data.student_id; // Update property names

        if (studentName) { // Check for a non-empty student_name value
            await importModel.Student.create({
            student_name: studentName,
            student_id: studentId,
            });
        } else {
            console.log('Skipping row with empty student_name');
        }
    })
    .on('end', () => {
        console.log('Data import completed');
        res.send('Data import completed');
    });
}
