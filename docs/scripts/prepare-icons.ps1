$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
$docsRoot = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$manifest = Get-Content -Raw -Encoding UTF8 (Join-Path $docsRoot 'assets/icons/manifest.json') | ConvertFrom-Json
foreach ($property in $manifest.PSObject.Properties) {
  $asset = $property.Value
  $original = [Drawing.Bitmap]::FromFile((Join-Path $docsRoot ('reference/' + $asset.source)))
  try {
    $rect = New-Object Drawing.Rectangle($asset.crop[0],$asset.crop[1],$asset.crop[2],$asset.crop[3])
    if ($rect.Right -gt $original.Width -or $rect.Bottom -gt $original.Height) { throw 'Recorte fuera de imagen' }
    $crop = $original.Clone($rect,$original.PixelFormat)
    try { $crop.Save((Join-Path $docsRoot ('assets/icons/modulo-' + $property.Name + '.png')),[Drawing.Imaging.ImageFormat]::Png) } finally { $crop.Dispose() }
  } finally { $original.Dispose() }
}
