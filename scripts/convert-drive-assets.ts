import * as fs from "fs";
import * as path from "path";
import * as XLSX from "xlsx";

export function xlsxToJSON(inputFolder: string, outputFolder: string) {
    if (!fs.existsSync(inputFolder)) {
        console.warn("No input folder with name ", inputFolder);
        return;
    }

    const fileNames = fs.readdirSync(inputFolder);

    const subFolders = fileNames
        .filter((filename) => fs.statSync(path.join(inputFolder, filename)).isDirectory());
    const xlsxFiles = fileNames
        .filter((filename) => fs.statSync(path.join(inputFolder, filename)).isFile())
        .filter((filename) => filename.endsWith(".xlsx"));
    const otherFiles = fileNames
        .filter((filename) => fs.statSync(path.join(inputFolder, filename)).isFile())
        .filter((filename) => !filename.endsWith(".xlsx"));

    if (fileNames.length > 0 && !fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder);
    }

    for (let fileName of xlsxFiles) {
        let workbook = XLSX.readFile(path.join(inputFolder, fileName));
        let jsonFileName = fileName.replace(".xlsx", ".json");

        // Create JSON file with rows in an object where sheet names are keys
        let sheetsByName: { [sheetName: string]: any[] } = {};
        for (let sheetName of workbook.SheetNames) {
            sheetsByName[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        }
        let rowsBySheetJSONString = JSON.stringify(sheetsByName, null, 2);
        fs.writeFileSync(path.join(outputFolder, jsonFileName), rowsBySheetJSONString, { flag: "w+" });
    }

    for (let fileName of otherFiles) {
        fs.copyFileSync(path.join(inputFolder, fileName), path.join(outputFolder, fileName))
    }

    
    for (let subFolder of subFolders) {
        xlsxToJSON(path.join(inputFolder, subFolder), path.join(outputFolder, subFolder));
    }
}

xlsxToJSON("./drive_assets", "./src/assets/drive_assets");