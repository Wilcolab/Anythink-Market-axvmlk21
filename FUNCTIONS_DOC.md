
# Documentación ampliada de funciones de conversión de formato

Este archivo describe y ejemplifica las funciones implementadas para convertir cadenas de texto entre diferentes formatos comunes en JavaScript.

## Funciones

### 1. toCamelCase
Convierte una cadena en formato camelCase.

**Uso:**
- Elimina espacios, guiones y guiones bajos, capitaliza cada palabra excepto la primera.
- Útil para nombres de variables y propiedades en JavaScript.

**Ejemplos:**
```js
toCamelCase("first name");        // "firstName"
toCamelCase("SCREEN_NAME");       // "screenName"
toCamelCase("mobile-number");     // "mobileNumber"
toCamelCase("  multiple   spaces  here "); // "multipleSpacesHere"
toCamelCase("convert_to_camel_case"); // "convertToCamelCase"
```

**Errores:**
- Lanza error si el input es `undefined`, `null`, no es string o está vacío.
```js
try {
  toCamelCase(undefined); // Error: Input is undefined. Please provide a valid string.
} catch (err) {
  console.error(err.message);
}
```

---

### 2. toDotCase
Convierte una cadena en formato dot.case.

**Uso:**
- Elimina espacios, guiones y guiones bajos, convierte todo a minúsculas y une las palabras con puntos.
- Útil para nombres de claves en objetos de configuración.

**Ejemplos:**
```js
toDotCase("first name");        // "first.name"
toDotCase("SCREEN_NAME");       // "screen.name"
toDotCase("mobile-number");     // "mobile.number"
toDotCase("  multiple   spaces  here "); // "multiple.spaces.here"
```

**Errores:**
- Lanza error si el input es `undefined`, `null`, no es string o está vacío.
```js
try {
  toDotCase(null); // Error: Input is null. Please provide a valid string.
} catch (err) {
  console.error(err.message);
}
```

---

### 3. toKebabCase
Convierte una cadena en formato kebab-case.

**Uso:**
- Elimina espacios, guiones y guiones bajos, convierte todo a minúsculas y une las palabras con guiones.
- Útil para nombres de clases CSS y URLs.

**Ejemplos:**
```js
toKebabCase("hola que haces?");        // "hola-que-haces"
toKebabCase("hola   que   haces  ?"); // "hola-que-haces"
toKebabCase("hola---que--haces");     // "hola-que-haces"
toKebabCase("  multiple   spaces  here "); // "multiple-spaces-here"
```

**Errores:**
- Lanza error si el input es `undefined`, `null`, no es string o está vacío.
```js
try {
  toKebabCase(123); // Error: Input type is number. Expected a string.
} catch (err) {
  console.error(err.message);
}
```

---

## Notas
- Todas las funciones validan el tipo y contenido del input antes de procesar.
- Los ejemplos de uso y manejo de errores están incluidos en los archivos fuente y aquí en la documentación.

---

**Autor:** Wilcolab / Abraham Ferrer Cifo
**Fecha:** Octubre 2025
