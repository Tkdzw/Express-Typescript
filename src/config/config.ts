import * as fs from 'fs';
import * as path from 'path';

interface DatabaseConfig {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
}

interface AppConfig {
    port: number;
    database: DatabaseConfig;
}

let config: AppConfig;

export function loadConfig(): AppConfig {
    if (!config) {
        const configPath = path.resolve(__dirname, '../appsettings.json');
        const configFile = fs.readFileSync(configPath, 'utf-8');
        config = JSON.parse(configFile) as AppConfig;
    }
    return config;
}
