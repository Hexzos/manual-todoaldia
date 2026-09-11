$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
$docsRoot = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$manifest = Get-Content -Raw -Encoding UTF8 (Join-Path $docsRoot 'assets/screenshots/manifest.json') | ConvertFrom-Json
foreach ($property in $manifest.PSObject.Properties) {
 $asset = $property.Value
 if (-not $asset.crop) { continue }
 $sourcePath = Join-Path $docsRoot ('reference/screenshots/' + $asset.source)
 $targetPath = Join-Path $docsRoot ('assets/screenshots/' + $asset.file)
 $original = [Drawing.Bitmap]::FromFile($sourcePath)
 try {
  $rect = New-Object Drawing.Rectangle($asset.crop[0],$asset.crop[1],$asset.crop[2],$asset.crop[3])
  if ($rect.Right -gt $original.Width -or $rect.Bottom -gt $original.Height) { throw "Recorte fuera de imagen: $sourcePath" }
  $crop = $original.Clone($rect,$original.PixelFormat)
  try { $crop.Save($targetPath,[Drawing.Imaging.ImageFormat]::Png) } finally { $crop.Dispose() }
 } finally { $original.Dispose() }
}
Write-Output 'Recortes preparados sin modificar los originales.'
