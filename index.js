const __SETTINGS = {
    searchable: true,
    fixedHeight: true,
}

const errorsManualQATable = new simpleDatatables.DataTable("table[data-errors-manual-qa]", __SETTINGS);
const errorsAutoQATable = new simpleDatatables.DataTable("table[data-errors-auto-qa]", __SETTINGS);
const objectFilesTable = new simpleDatatables.DataTable("table[data-object-level]", __SETTINGS);
const objectLevelTable = new simpleDatatables.DataTable("table[data-object-files-level]", __SETTINGS);
