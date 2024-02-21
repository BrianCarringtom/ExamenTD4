import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
  getHello(): string {
    // Obtiene la ruta del directorio del proyecto
    const projectDir = path.resolve(__dirname, '..');

    // Lee el archivo index.html y devuelve su contenido
    const content = fs.readFileSync(path.join(projectDir, 'src/index.html'), 'utf8');
    return content;
  }
}
