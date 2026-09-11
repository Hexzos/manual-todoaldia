@"
# Referencias visuales — Todoaldía

Este directorio contiene capturas originales de la interfaz utilizadas
como referencia para crear el manual de ayuda.

## Importante

Las imágenes de `reference/screenshots/` son material de referencia.

No todas deben aparecer automáticamente en el PDF.

Codex debe:

1. Analizar las capturas antes de documentar una función.
2. No inferir comportamientos que no estén visibles o documentados.
3. Utilizar las imágenes para reconocer:
   - campos;
   - botones;
   - estados;
   - acciones;
   - orden del flujo;
   - relaciones entre pantallas.
4. Seleccionar únicamente las capturas necesarias para explicar cada tarea.
5. Copiar a `assets/screenshots/` solo las imágenes utilizadas por el documento.
6. Mantener la captura original sin modificar dentro de `reference/`.
7. Los recortes o versiones preparadas para el PDF deben almacenarse en `assets/screenshots/`.

## Convención de nombres

Formato recomendado:

modulo-XX-descripcion.png

Ejemplos:

clientes-01-vista-general.png
clientes-02-nuevo-cliente.png
productos-03-precio-venta.png
config-operacion-zonas-02-dibujar-zona.png
"@ | Set-Content ".\reference\README.md"