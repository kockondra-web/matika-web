$inputPath = (Resolve-Path '.\output\documents\exponencialni_rovnice_6_9_2024.docx').Path
$outputDir = (Resolve-Path '.\tmp\build_transcription\rendered').Path
$pdfPath = Join-Path $outputDir 'exponencialni_rovnice_6_9_2024.pdf'
$word = $null
$document = $null
try {
    $word = New-Object -ComObject Word.Application
    $word.Visible = $false
    $word.DisplayAlerts = 0
    $document = $word.Documents.Open($inputPath, $false, $true)
    $document.ExportAsFixedFormat($pdfPath, 17)
}
finally {
    if ($document -ne $null) { $document.Close($false) }
    if ($word -ne $null) { $word.Quit() }
}
Write-Output $pdfPath
