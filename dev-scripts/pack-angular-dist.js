const fs =require("node:fs/promises")
const path = require("node:path")
const rootDir = path.join(__dirname, "..")

const ANGULAR_DIST_DIR = path.join(rootDir, "angular-app", "dist")
const ANGULAR_DIST_DIR_FILES = path.join(ANGULAR_DIST_DIR, "angular-app", "browser")
const REACT_ANGULAR_COMPONENTS_DIR = path.join("react-app", "src","angular-components")
const ALLOWED_FILES = ["polyfills.js", "main.js" ]

const moveAngularDistToReactApp = async () => {
  // check is angular dist files exists
  await fs.access(ANGULAR_DIST_DIR_FILES)
    .catch(() => {
      throw new Error(`The folder does not exists, please re-run angular build command from root package.json and debug if something went wrong`)
    })

  // remove old content of 'react-app/stc/angular-components`
  const oldFiles = await fs.readdir(REACT_ANGULAR_COMPONENTS_DIR)
  for await (const oldFile of oldFiles) {
    const oldFIlePath = path.join(REACT_ANGULAR_COMPONENTS_DIR, oldFile)
    await fs.rm(oldFIlePath)
  }

  // get content of angular-app/dist/browser and copy selected files to react-app/src/angular-components
  const angularDistContent = await fs.readdir(ANGULAR_DIST_DIR_FILES)
  for await (const fileName of angularDistContent) {
    if (ALLOWED_FILES.includes(fileName)) {
      const srcFilePath = path.join(ANGULAR_DIST_DIR_FILES, fileName)
      const destFilePath = path.join(REACT_ANGULAR_COMPONENTS_DIR, fileName)
      // move files from src to dest, bash/posh 'mv' analogue
      await fs.rename(srcFilePath, destFilePath)
      }
    }

  // check is all files copied and create index re-export file in react-app/src/angular-components
  const desFolderContent = await fs.readdir(REACT_ANGULAR_COMPONENTS_DIR)
  if (!desFolderContent?.length) throw new Error("Dest folder is empty")

  // using ALLOWED_FILE array here as "polyfills.js" should be on top of imports for normal work
  const indexFileContent = ALLOWED_FILES.reduce((prev, cur) =>
      prev + `import "./${cur}" \n`
    ,'')

  const indexFilePath = path.join(REACT_ANGULAR_COMPONENTS_DIR, 'index.js')
  await fs.writeFile(indexFilePath, indexFileContent)

  // remove angular dist folder
  const rmPath = path.join(ANGULAR_DIST_DIR_FILES, "..", "..")
  await fs.rm(rmPath, {recursive: true, force: true})
}

moveAngularDistToReactApp()
