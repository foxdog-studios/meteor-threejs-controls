Package.describe({
  summary: "Controls for Three.js"
});

Package.on_use(function (api, where) {
  where = ['client'];
  files = [
    'EditorControls',
    'FirstPersonControls',
    'FlyControls',
    'OculusControls',
    'OrbitControls',
    'PathControls',
    'PointerLockControls',
    'TrackballControls',
    'TransformControls'
  ];
  for (i = 0; i < files.length; i++) {
    fileName = files[i];
    api.add_files('lib/controls/' + fileName + '.js', where);
  }
});

