# Gestión de Versiones y Configuración de GitHub

## 🏷️ Manejo de Tags (Versiones)

### Crear un nuevo tag/versión

Para crear y publicar una nueva versión de la aplicación:

```bash
# Crear el tag localmente
git tag v1.0.0

# Subir el tag al repositorio remoto
git push origin v1.0.0
```

### Eliminar tags

Si necesitas eliminar un tag tanto local como remotamente:

```bash
# Eliminar el tag localmente
git tag -d v1.0.0

# Eliminar el tag del repositorio remoto
git push origin :refs/tags/v1.0.0
```
> [!NOTE]
> **💡 Tip:** También puedes usar `git push origin --delete v1.0.0` para eliminar el tag remoto.

---

## 🔐 Configuración del Token de GitHub

### Crear Personal Access Token

1. Ve a **GitHub** → **Settings** → **Developer settings**
2. Selecciona **Personal access tokens** → **Tokens (classic)**
3. Haz clic en **Generate new token (classic)**
4. Configura los siguientes permisos:
   - ✅ `repo` - Acceso completo a repositorios
   - ✅ `workflow` - Actualizar flujos de trabajo de GitHub Actions

### Agregar token como secret del repositorio

1. Ve a tu repositorio en GitHub
2. Navega a **Settings** → **Secrets and variables** → **Actions**
3. Haz clic en **New repository secret**
4. Configura:
   - **Name:** `GH_TOKEN`
   - **Secret:** El token que creaste anteriormente

---

## 📝 Notas Importantes

- Los tags siguen el formato de [Semantic Versioning](https://semver.org/): `v<MAJOR>.<MINOR>.<PATCH>`
- El token `GH_TOKEN` permite que GitHub Actions pueda realizar operaciones automáticas en el repositorio
- Mantén tus tokens seguros y nunca los compartas públicamente

---

## 🚀 Flujo de Trabajo Recomendado

1. Realiza tus cambios y commits
2. Crea un tag para la nueva versión
3. Sube el tag al repositorio
4. Se ejecutará automáticamente el workflow configura con GitHub Actions