<?php

// Read the schema from schema.json
$schemaFile = file_get_contents('schema.json');
$schema = json_decode($schemaFile, true);

function runMigration($migration)
{
    $db = new SQLite3('your_database.sqlite3');

    // Execute the migration query
    $db->exec($migration);

    $db->close();
}

function rollbackMigration($migration)
{
    $db = new SQLite3('your_database.sqlite3');

    // Execute the rollback query
    $db->exec($migration);

    $db->close();
}

function createTable($tableName, $columns)
{
    $columnsDefinition = '';

    foreach ($columns as $column) {
        $columnName = $column['name'] ?? '';
        $columnType = $column['type'] ?? '';
        if ($columnName == 'id') {
            $columnType = 'INTEGER PRIMARY KEY AUTOINCREMENT';
        }

        if (!empty($columnName) && !empty($columnType)) {
            
            $columnsDefinition .= "$columnName $columnType,";
        }
    }

    $columnsDefinition = rtrim($columnsDefinition, ',');

    $tableQuery = "CREATE TABLE $tableName ($columnsDefinition);";

    runMigration($tableQuery);
    echo "Migration executed successfully: Table $tableName created.\n";
}

function addForeignKeyConstraints($tableName, $constraints)
{
    foreach ($constraints as $column => $reference) {
        $alterQuery = "ALTER TABLE $tableName ADD FOREIGN KEY ($column) REFERENCES $reference;";
        runMigration($alterQuery);
        echo "Migration executed successfully: Foreign key constraint added for $column in $tableName table.\n";
    }
}

function dropTable($tableName)
{
    rollbackMigration("DROP TABLE IF EXISTS $tableName;");
    echo "Rollback executed successfully: Table $tableName dropped.\n";
}

// Usage:
if ($argc < 2) {
    echo "Invalid argument. Please use 'run' or 'rollback'.\n";
    exit(1);
}

if ($argv[1] === 'run') {
    foreach ($schema as $table) {
        $tableName = $table['name'] ?? '';
        $columns = $table['columns'] ?? [];
        $constraints = $table['constraints'] ?? [];

        if (!empty($tableName) && !empty($columns)) {
            createTable($tableName, $columns);

            if (!empty($constraints)) {
                addForeignKeyConstraints($tableName, $constraints);
            }
        }
    }
    echo "All migrations have been run.\n";
} elseif ($argv[1] === 'rollback') {
    $reversedSchema = array_reverse($schema);
    foreach ($reversedSchema as $table) {
        $tableName = $table['name'] ?? '';

        if (!empty($tableName)) {
            dropTable($tableName);
        }
    }
    echo "All migrations have been rolled back.\n";
} else {
    echo "Invalid argument. Please use 'run' or 'rollback'.\n";
    exit(1);
}
