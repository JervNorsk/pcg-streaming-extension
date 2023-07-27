- Create an OpenAPI Documentation
  <p style="color: gray">
  Create a file in OpenAPI for a better documentation of endpoints exposed and their customizations.
  </p>


- Migration to Kotlin Multiplatform
  <p style="color: gray">
  For a better integration with other projects and with my scope of abuse of Kotlin Multiplatform for my personal projects.
  Found a way to integrate an Angular project with TypeScript source in a Kotlin MMP configuration.
  </p>

  1. Configure the project file for include all dependencies exposed on package.json and let Kotlin MMP to generate it.
  2. Create a custom source set for include TypeScript source code and include them in building lifecycle.
  3. Verify the inclusion of this project from the root project by Kotlin MMP building.
  4. Configure the release of the package on GitHub Package from the root project for maintain the same package name.


- Improve CI with auto updating all package.json version based on git tag produced by git flow release
  <p style="color: gray">
  Create a file in OpenAPI for a better documentation of endpoints exposed and their customizations.
  </p>
