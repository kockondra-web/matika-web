Add-Type -AssemblyName System.Speech

$x = New-Object System.Speech.Synthesis.SpeechSynthesizer
$x.SelectVoice('Microsoft Jakub')
$x.Rate = -2
$x.Volume = 90
$x.SetOutputToWaveFile((Join-Path $PSScriptRoot 'matematika-jasne-voiceover.wav'))
$taskText = [Text.Encoding]::UTF8.GetString([Convert]::FromBase64String('xIxla8OhIHTEmyBtYXR1cml0YSB6IG1hdGVtYXRpa3k/IFDFmWlwcmF2dWogc2UgdiBrbGlkdSBhIHDFmWVobGVkbsSbLiBOYSBNYXRlbWF0aWthIGphc27EmyBuYWpkZcWhIHTDqW1hdGEsIHZ5c3bEm3RsZW7DrSBpIHByb2N2acSNb3bDoW7DrSBwcm8gZGlkYWt0aWNrw70gdGVzdCBhIMO6c3Ruw60gemtvdcWha3UuIFphxI1uaSB2ZSBzdsOpbSB0ZW1wdS4='))
$x.Speak($taskText)
$x.Dispose()
